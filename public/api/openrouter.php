<?php
// public/api/openrouter.php
//
// Same-origin proxy for the OpenRouter LLM API, used by the
// portfolio chatbot when the site is hosted on cPanel (or any Apache host
// that runs PHP). On Netlify, the equivalent code lives in
// netlify/functions/openrouter.js. The dev-server proxy lives in vite.config.js.

declare(strict_types=1);

const OPENROUTER_BASE        = 'https://openrouter.ai/api/v1';
const CURL_CONNECT_TIMEOUT_S = 10;
const CURL_TIMEOUT_S         = 45;

function load_api_key(): string
{
    $configPath = __DIR__ . '/../../openrouter-config.php';

    try {
        $config = require $configPath;
    } catch (\Throwable $e) {
        send_missing_config(
            'Could not load openrouter-config.php: ' . $e->getMessage()
        );
    }

    if (!is_array($config) || empty($config['openrouter_api_key']) || !is_string($config['openrouter_api_key'])) {
        send_missing_config(
            'openrouter-config.php must return an array with a non-empty string key "openrouter_api_key".'
        );
    }

    return $config['openrouter_api_key'];
}

function send_missing_config(string $hint): void
{
    send_json(500, [
        'error' => 'OPENROUTER_API_KEY is not configured in the cPanel environment.',
        'hint'  => $hint,
    ]);
}

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
        'provider'         => 'openrouter',
        'node'             => 'cpanel-php-' . PHP_VERSION,
    ]);
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    send_json(405, ['error' => 'Method Not Allowed']);
}

// ─── POST: proxy the request to OpenRouter ─────────────────────────────────

$rawBody = file_get_contents('php://input') ?: '{}';

$ch = curl_init();
if ($ch === false) {
    send_json(500, ['error' => 'curl_init failed']);
}

curl_setopt_array($ch, [
    CURLOPT_URL            => OPENROUTER_BASE . $pathInfo,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $rawBody,
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey,
        'HTTP-Referer: https://tahanaghdi.me',
        'X-Title: Taha Naghdi Portfolio',
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
        'error'       => 'Failed to reach OpenRouter upstream.',
        'curl_errno'  => $errno,
        'curl_error'  => $error,
    ]);
}

http_response_code($httpCode ?: 500);
header('Content-Type: application/json; charset=utf-8');
echo $response;
exit;
