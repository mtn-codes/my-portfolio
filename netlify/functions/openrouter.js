// netlify/functions/openrouter.js
//
// Netlify Functions 2.0 proxy for OpenRouter LLM API.
// Must return a standard Web API `Response` object (Netlify Functions 2.0 runtime).

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const TIMEOUT_MS = 35_000;

export default async function (req, context) {
  // Support both Netlify Functions 2.0 (Request object) and legacy event
  const isWebStandard = req instanceof Request || (req && typeof req.text === "function");
  const method = isWebStandard ? req.method : (req?.httpMethod || "GET");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };

  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Extract path
  let rawPath = "";
  if (isWebStandard && req.url) {
    try {
      rawPath = new URL(req.url).pathname;
    } catch {
      rawPath = req.url;
    }
  } else {
    rawPath = req?.path || "";
  }

  const subpath = rawPath
    .replace(/^\/\.netlify\/functions\/openrouter\/?/, "")
    .replace(/^\/api\/openrouter\/?/, "");

  const targetPath = subpath === "" ? "/chat/completions" : (subpath.startsWith("/") ? subpath : `/${subpath}`);
  const targetUrl = `${OPENROUTER_BASE}${targetPath}`;

  let rawApiKey = process.env.OPENROUTER_API_KEY || "";
  // Robust extraction: in case the user pasted quotes, "Bearer ", or an entire .env block into Netlify
  const keyMatch = rawApiKey.match(/sk-or-v1-[a-zA-Z0-9_-]+/);
  const apiKey = keyMatch
    ? keyMatch[0]
    : rawApiKey.trim().replace(/^Bearer\s+/i, "").replace(/["']/g, "").trim();

  if (method === "GET") {
    return new Response(
      JSON.stringify({
        ok: true,
        provider: "openrouter",
        path: targetPath,
        apiKeyConfigured: Boolean(apiKey && apiKey.length > 0),
        apiKeyLength: apiKey ? apiKey.length : 0,
        rawEnvLength: rawApiKey.length,
        hasSkPrefix: apiKey.startsWith("sk-or-v1-"),
        keyPrefix: apiKey ? apiKey.slice(0, 8) + "..." : "none",
        runtime: "netlify-functions-v2",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  if (method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "OPENROUTER_API_KEY is not configured in the Netlify environment.",
        hint: "Set OPENROUTER_API_KEY in Netlify: Site configuration → Environment variables.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  let requestBody = "{}";
  if (isWebStandard) {
    try {
      requestBody = await req.text();
    } catch {
      requestBody = "{}";
    }
  } else {
    requestBody = req.body || "{}";
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
      body: requestBody || "{}",
      signal: controller.signal,
    });

    const bodyText = await upstreamResponse.text();

    return new Response(bodyText, {
      status: upstreamResponse.status,
      headers: {
        "Content-Type": upstreamResponse.headers.get("content-type") || "application/json",
        ...corsHeaders,
      },
    });
  } catch (err) {
    const isTimeout = err?.name === "AbortError";
    const msg = isTimeout
      ? `Timed out waiting for OpenRouter upstream (${TIMEOUT_MS}ms)`
      : err?.message || "Unknown error";

    return new Response(
      JSON.stringify({
        error: msg,
        code: isTimeout ? "GATEWAY_TIMEOUT" : "BAD_GATEWAY",
      }),
      {
        status: isTimeout ? 504 : 502,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } finally {
    clearTimeout(timer);
  }
}
