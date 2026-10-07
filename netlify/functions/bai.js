// netlify/functions/bai.js
//
// Same-origin proxy for the B.AI LLM API (GLM-5.3-Flash). The browser cannot
// call B.AI directly because B.AI does not send CORS headers for browser origins.
// This function accepts a POST at `/api/bai/<path>` (rewritten by
// netlify.toml / public/_redirects) and forwards it to
// `https://api.b.ai/v1/<path>`, injecting the API key from `BAI_API_KEY`.
//
// ─── DEPLOYMENT NOTE ──────────────────────────────────────────────────────
// In the Netlify dashboard, set the env var to:
//
//     BAI_API_KEY   =  <your B.AI key from https://chat.b.ai/key>
//
// (NOT `VITE_BAI_API_KEY`. The `VITE_` prefix would tell Vite to
// inline the value into the client bundle, leaking the key to every
// visitor. Netlify Functions only read unprefixed vars from the
// runtime env, so the key stays server-side.)
// ──────────────────────────────────────────────────────────────────────────

const BAI_BASE = "https://api.b.ai/v1";
const TIMEOUT_MS = 30_000;

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

/**
 * Best-effort structured log to the Netlify function log.
 * @param {NetlifyContext} context
 * @param {"info"|"error"} level
 * @param {string} msg
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

/**
 * @param {NetlifyEvent} event
 * @param {NetlifyContext} [context]
 */
export async function handler(event, context = /** @type {NetlifyContext} */ ({})) {
  const method = event.httpMethod || "GET";
  logEvent(context, "info", `bai: ${method} ${event.path || "/"}`);

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

  // Health check: GET returns whether key is configured without exposing it
  if (method === "GET") {
    const apiKey = process.env.BAI_API_KEY;
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ok: true,
        provider: "bai",
        path: event.path || "/",
        apiKeyConfigured: Boolean(apiKey),
        apiKeyLength: apiKey ? apiKey.length : 0,
        node: process.version,
      }),
    };
  }

  // Only POST is allowed for proxied chat completions
  if (method !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "GET, POST, OPTIONS",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.BAI_API_KEY;
  if (!apiKey) {
    logEvent(context, "error", "BAI_API_KEY is not set in the Netlify environment");
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: "BAI_API_KEY is not configured in the Netlify environment.",
      }),
    };
  }

  const upstreamPath = event.path || "/chat/completions";
  const url = `${BAI_BASE}${upstreamPath.startsWith("/") ? upstreamPath : `/${upstreamPath}`}`;

  /** @type {Record<string, string>} */
  const headers = {
    "Content-Type": event.headers?.["content-type"] || "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers,
      body: event.body || "{}",
      signal: controller.signal,
    });

    const text = await upstream.text();
    clearTimeout(timer);

    /** @type {Record<string, string>} */
    const responseHeaders = {
      "Content-Type": upstream.headers.get("content-type") || "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    if (!upstream.ok) {
      logEvent(context, "error", `bai upstream ${upstream.status}: ${text.slice(0, 500)}`);
    }

    return {
      statusCode: upstream.status,
      headers: responseHeaders,
      body: text,
    };
  } catch (err) {
    clearTimeout(timer);
    const message =
      err && typeof err === "object" && "name" in err && err.name === "AbortError"
        ? "Upstream timed out"
        : err && typeof err === "object" && "message" in err
          ? String(err.message)
          : "Unknown upstream error";

    logEvent(context, "error", `bai upstream error: ${message}`);

    return {
      statusCode: 502,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: message }),
    };
  }
}

export default { handler };
