<?php
// public/api/bai-config.example.php
//
// Template for the secret config file required by public/api/bai.php.
//
// To configure B.AI for cPanel hosting:
//   1. Copy this file to /home/<cpanel-username>/bai-config.php
//      (ONE DIRECTORY ABOVE public_html — NOT inside public_html).
//   2. Replace the placeholder with your real B.AI API key from https://chat.b.ai/key.
//   3. Set permissions: chmod 600 bai-config.php
//
// This file must NEVER be committed to Git or uploaded to public_html.

return [
    'bai_api_key' => 'PASTE_YOUR_REAL_B_AI_KEY_HERE',
];
