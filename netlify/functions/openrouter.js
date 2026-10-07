// netlify/functions/openrouter.js
//
// Same-origin proxy for the OpenRouter LLM API. The browser cannot
// call OpenRouter directly with client credentials. This function accepts a
// POST at `/api/openrouter/<path>` (rewritten by netlify.toml / public/_redirects)
// and forwards it to `https://openrouter.ai/api/v1/<path>`, injecting the API key
// from `OPENROUTER_API_KEY`.

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const TIMEOUT_MS = 35_000;

/**
 * @typedef {Object} NetlifyEvent
 * @property {string} httpMethod
 * @property {string} [path]
 * @property {Record<string, string>} [headers]
 * @property {string|null} [body]
 * @property {Record<string, string>} [queryStringParameters]
 *
 * @typedef {Object} NetlifyContext
 * @property {string} functionName
 * @property {string} awsRequestId
 * @property {(msg: string) => void} [log]
 * @property {(msg: string) => void} [error]
 */

function logEvent(context, level, msg) {
  const fn = level === "error" ? context?.error : context?.log;
  if (typeof fn === "function") {
    try {
      fn(msg);
      return;
    } catch {
      /* fall through to console */
    }
  }
  if (level === "error") console.error(msg);
  else console.log(msg);
}

export async function handler(event, context) {
  const method = event.httpMethod || "GET";

  if (method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
      },
      body: "",
    };
  }

  const rawPath = event.path || "";
  const subpath = rawPath.replace(/^\/\.netlify\/functions\/openrouter/, "").replace(/^\/api\/openrouter/, "");
  const targetPath = subpath === "" || subpath === "/" ? "/chat/completions" : subpath;
  const targetUrl = `${OPENROUTER_BASE}${targetPath.startsWith("/") ? "" : "/"}${targetPath}`;

  if (method === "GET") {
    const apiKey = process.env.OPENROUTER_API_KEY;
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ok: true,
        provider: "openrouter",
        path: targetPath,
        apiKeyConfigured: Boolean(apiKey && apiKey.length > 0),
        apiKeyLength: apiKey ? apiKey.length : 0,
        runtime: "netlify-node",
      }),
    };
  }

  if (method !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "GET, POST, OPTIONS",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    logEvent(context, "error", "OPENROUTER_API_KEY is not set in the Netlify environment");
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "OPENROUTER_API_KEY is not configured in the Netlify environment.",
        hint: "Set OPENROUTER_API_KEY in Netlify: Site settings → Environment variables.",
      }),
    };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const upstreamResponse = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://tahanaghdi.me",
        "X-Title": "Taha Naghdi Portfolio",
        Accept: "application/json",
      },
      body: event.body || "{}",
      signal: controller.signal,
    });

    const bodyText = await upstreamResponse.text();

    return {
      statusCode: upstreamResponse.status,
      headers: {
        "Content-Type": upstreamResponse.headers.get("content-type") || "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: bodyText,
    };
  } catch (err) {
    const isTimeout = err?.name === "AbortError";
    const msg = isTimeout
      ? `Timed out waiting for OpenRouter upstream (${TIMEOUT_MS}ms)`
      : err?.message || "Unknown error";

    logEvent(context, "error", `Upstream fetch failed: ${msg}`);

    return {
      statusCode: isTimeout ? 504 : 502,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: msg,
        code: isTimeout ? "GATEWAY_TIMEOUT" : "BAD_GATEWAY",
      }),
    };
  } finally {
    clearTimeout(timer);
  }
}

export default handler;
