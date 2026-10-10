// src/features/chatbot/services/specialPhraseHandler.js
//
// Special phrase handler for designated Persian slang expressions.
// Narrowly scoped to match ONLY the specified expressions (and spacing variations)
// as standalone words/intended expressions without false positives in legitimate words.

export const SPECIAL_REPLY = "کونت میخاره ؟!";

/**
 * Normalizes text for slang detection:
 * - Unifies invisible characters (ZWNJ, ZWSP) into single spaces
 * - Normalizes Arabic kaf / yeh variants to Persian standard
 * - Collapses repeated whitespace
 *
 * @param {string} input
 * @returns {string}
 */
export function normalizeSlangInput(input) {
  if (typeof input !== "string" || !input) return "";
  return input
    .replace(/[\u200B-\u200D\uFEFF]/g, " ")
    .replace(/ك/g, "ک")
    .replace(/ي/g, "ی")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Regex matching the specified Persian slang expressions as standalone words:
 *   - کسکش / کس کش / کس‌کش
 *   - کونی
 *   - کونده / کون ده / کون‌ده
 *   - کون
 *   - کیری
 *   - کیر
 *   - کس
 *
 * Boundary: (^|[^\p{L}\p{N}]) before and ($|[^\p{L}\p{N}]) after.
 * This guarantees that words like کسری, عکس, باکس, فوکوس, کنترل, کنتور, کویر, ترکیب, دیکتاتوری
 * are NEVER falsely matched.
 */
const SLANG_PATTERN = /(?:^|[^\p{L}\p{N}])(?:کس\s*کش|کونی|کون\s*ده|کونده|کون|کیری|کیر|کس)(?:$|[^\p{L}\p{N}])/u;

/**
 * Evaluates whether a user message contains any of the designated expressions.
 *
 * @param {string} text
 * @returns {{ matched: boolean, reply?: string }}
 */
export function evaluateSpecialPhrase(text) {
  if (!text || typeof text !== "string") {
    return { matched: false };
  }
  const normalized = normalizeSlangInput(text);
  if (!normalized) {
    return { matched: false };
  }

  if (SLANG_PATTERN.test(normalized)) {
    return {
      matched: true,
      reply: SPECIAL_REPLY,
    };
  }

  return { matched: false };
}

export default evaluateSpecialPhrase;
