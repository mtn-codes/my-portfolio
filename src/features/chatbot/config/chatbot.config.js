// src/features/chatbot/config/chatbot.config.js
//
// Centralised configuration for the AI assistant. Every tunable lives here so
// we never sprinkle magic numbers across components/services.

/**
 * @typedef {Object} AiModelConfig
 * @property {string} provider                  "bai" (primary) or "kimchi" (fallback).
 * @property {string} model                     Model identifier (e.g. "glm-5.3-flash").
 * @property {number} temperature               Sampling temperature.
 * @property {number} topP                      Nucleus sampling cutoff.
 * @property {number} maxOutputTokens           Cap on tokens per response.
 * @property {number} timeoutMs                 Per-request timeout.
 * @property {number} retryCount                Auto-retry attempts on transient errors.
 * @property {number} retryBackoffMs            Initial backoff between retries.
 * @property {string} baseUrl                   Same-origin proxy base URL
 */

/**
 * @typedef {Object} ChatSurfaceConfig
 * @property {number} maxMessages               Hard cap on transcript length (FIFO eviction).
 * @property {number} typingDelayMs             Simulated typing latency before assistant replies.
 * @property {number} inputMaxLength            Hard cap on user input length.
 * @property {boolean} persistToStorage         Whether to mirror transcript in localStorage.
 * @property {string} storageKey                localStorage key when persistToStorage is true.
 * @property {string} conversationIdKey         localStorage key for the conversation id.
 * @property {boolean} autoOpenOnFirstVisit     Show the launcher pulse on a user's first visit.
 */

/**
 * OpenRouter defaults (Active provider).
 * Free tier model with high Persian / English / Arabic performance.
 *
 * @type {AiModelConfig}
 */
export const AI_MODEL = Object.freeze({
  provider: "openrouter",
  model: "nvidia/nemotron-3.5-lightning:free",
  temperature: 0.6,
  topP: 0.9,
  maxOutputTokens: 450,
  timeoutMs: 30_000,
  retryCount: 1,
  retryBackoffMs: 500,
  baseUrl: "/api/openrouter",
});

/**
 * UI / lifecycle knobs.
 * @type {ChatSurfaceConfig}
 */
export const CHAT_SURFACE = Object.freeze({
  maxMessages: 50,
  typingDelayMs: 60,
  inputMaxLength: 1000,
  persistToStorage: true,
  storageKey: "portfolio.chat.transcript.v1",
  conversationIdKey: "portfolio.chat.conversationId.v1",
  autoOpenOnFirstVisit: false,
});

/**
 * Default suggestions rendered in the empty state (English fallback; localized via i18n).
 *
 * @type {ReadonlyArray<{ id: string, text: string, category: string }>}
 */
export const DEFAULT_SUGGESTIONS = Object.freeze([
  { id: "filmmaking", text: "His filmmaking projects?", category: "projects" },
  { id: "code_ai",    text: "What does he build with AI?", category: "skills" },
  { id: "contact",    text: "How can I contact him?", category: "contact" },
  { id: "background", text: "What is his background?", category: "about" },
]);

/**
 * Friendly metadata surfaced in the chat header.
 */
export const ASSISTANT_PROFILE = Object.freeze({
  name: "Taha AI",
  shortName: "Taha",
  tagline: "Filmmaker · Developer · Innovator Assistant",
});