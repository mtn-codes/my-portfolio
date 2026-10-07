<?php
// public/api/bai.php
//
// Same-origin proxy for the B.AI LLM API (GLM-5.3-Flash), used by the
// portfolio chatbot when the site is hosted on cPanel (or any Apache host
// that runs PHP). On Netlify, the equivalent code lives in
// netlify/functions/bai.js. The dev-server proxy lives in vite.config.js.
// All three consume the same upstream base URL:
//
//   https://api.b.ai/v1
//
// The browser cannot call B.AI directly because B.AI does not send CORS
// headers for browser origins. This script accepts requests at
// `/api/bai[/<path>]` (rewritten by public/.htaccess) and forwards them to
// the upstream, injecting the API key from `BAI_API_KEY`.
//
// ─── DEPLOYMENT ───────────────────────────────────────────────────────────
// On cPanel, the API key MUST live in a config file ONE directory above
// public_html, e.g. `/home/<user>/bai-config.php`. That file is not
// web-accessible (it's outside the document root), so the key never reaches
// the browser. See public/api/README.md and DEPLOYMENT_CPANEL.md.
//
// Required PHP extensions: curl. Recommended: PHP >= 8.1.
// ──────────────────────────────────────────────────────────────────────────

declare(strict_types=1);

const BAI_BASE          = 'https://api.b.ai/v1';
const CURL_CONNECT_TIMEOUT_S = 10;
const CURL_TIMEOUT_S    = 45;

/**
 * Load and validate the API key from a config file one directory above public_html.
 */
function load_api_key(): string
{
    $configPath = __DIR__ . '/../../bai-config.php';

    try {
        $config = require $configPath;
    } catch (\Throwable $e) {
        send_missing_config(
            'Could not load bai-config.php: ' . $e->getMessage()
        );
    }

    if (!is_array($config) || empty($config['bai_api_key']) || !is_string($config['bai_api_key'])) {
        send_missing_config(
            'bai-config.php must return an array with a non-empty string key "bai_api_key".'
        );
    }

    return $config['bai_api_key'];
}

function send_missing_config(string $hint): void
{
    send_json(500, [
        'error' => 'BAI_API_KEY is not configured in the cPanel environment.',
        'hint'  => $hint,
    ]);
}

/**
 * Send a JSON response with the given HTTP status code and exit.
 */
function send_json(int $status, array $body): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function get_path_info(): string
{
    $info = $_SERVER['PATH_INFO'] ?? '';
    return ($info === '' || $info === '/') ? '/chat/completions' : $info;
}

// ─── CORS preflight ───────────────────────────────────────────────────────

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204);
    exit;
}

// ─── Routing ───────────────────────────────────────────────────────────────

$method   = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pathInfo = get_path_info();
$apiKey   = load_api_key();

header('Access-Control-Allow-Origin: *');

if ($method === 'GET') {
    send_json(200, [
        'ok'               => true,
        'path'             => $pathInfo,
        'apiKeyConfigured' => true,
        'apiKeyLength'     => strlen($apiKey),
        'provider'         => 'bai',
        'node'             => 'cpanel-php-' . PHP_VERSION,
    ]);
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    send_json(405, ['error' => 'Method Not Allowed']);
}

// ─── POST: proxy the request to B.AI ───────────────────────────────────────

$rawBody = file_get_contents('php://input') ?: '{}';

$ch = curl_init();
if ($ch === false) {
    send_json(500, ['error' => 'curl_init failed']);
}

curl_setopt_array($ch, [
    CURLOPT_URL            => BAI_BASE . $pathInfo,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $rawBody,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey,
        'Accept: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER         => false,
    CURLOPT_CONNECTTIMEOUT => CURL_CONNECT_TIMEOUT_S,
    CURLOPT_TIMEOUT        => CURL_TIMEOUT_S,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
]);

$response = curl_exec($ch);
$errno    = curl_errno($ch);
$error    = curl_error($ch);
$httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
    send_json(502, [
        'error'       => 'Failed to reach B.AI upstream.',
        'curl_errno'  => $errno,
        'curl_error'  => $error,
    ]);
}

http_response_code($httpCode ?: 500);
header('Content-Type: application/json; charset=utf-8');
echo $response;
exit;
