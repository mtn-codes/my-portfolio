<?php
// public/api/openrouter-config.example.php
//
// Template for the secret config file required by public/api/openrouter.php.
//
// To configure OpenRouter for cPanel hosting:
//   1. Copy this file to /home/<cpanel-username>/openrouter-config.php
//      (ONE DIRECTORY ABOVE public_html — NOT inside public_html).
//   2. Replace the placeholder with your real OpenRouter API key.
//   3. Set permissions: chmod 600 openrouter-config.php

return [
    'openrouter_api_key' => 'PASTE_YOUR_REAL_OPENROUTER_KEY_HERE',
];
