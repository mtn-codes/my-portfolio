// netlify/functions/kimchi.js
//
// Netlify Functions 2.0 proxy for Kimchi LLM API.
// Must return a standard Web API `Response` object.

const KIMCHI_BASE = "https://llm.kimchi.dev/openai/v1";
const TIMEOUT_MS = 30_000;

export default async function (req, context) {
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
    .replace(/^\/\.netlify\/functions\/kimchi\/?/, "")
    .replace(/^\/api\/kimchi\/?/, "");

  const targetPath = subpath === "" ? "/chat/completions" : (subpath.startsWith("/") ? subpath : `/${subpath}`);
  const targetUrl = `${KIMCHI_BASE}${targetPath}`;

  if (method === "GET") {
    const apiKey = process.env.KIMCHI_API_KEY;
    return new Response(
      JSON.stringify({
        ok: true,
        provider: "kimchi",
        path: targetPath,
        apiKeyConfigured: Boolean(apiKey),
        apiKeyLength: apiKey ? apiKey.length : 0,
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
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  const apiKey = process.env.KIMCHI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "KIMCHI_API_KEY is not configured in the Netlify environment.",
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
    const upstream = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: requestBody || "{}",
      signal: controller.signal,
    });

    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
        ...corsHeaders,
      },
    });
  } catch (err) {
    const message = err?.name === "AbortError" ? "Upstream timed out" : (err?.message || "Unknown upstream error");
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } finally {
    clearTimeout(timer);
  }
}
