// src/features/chatbot/services/retriever.js
//
// Lightweight, zero-dependency retriever for the chat assistant.
// Optimized for multilingual queries (Persian, English, Arabic) and granular project retrieval.

/**
 * Normalizes text and tokenizes into lowercase word stems.
 * Handles Persian/Arabic character variations (ک/ك, ی/ي) and zero-width spaces.
 *
 * @param {string} text
 * @returns {string[]}
 */
export function tokenize(text) {
  if (typeof text !== "string" || !text) return [];

  // 1. Normalize Persian/Arabic character variants and invisible joiners
  const normalized = text
    .replace(/[\u200B-\u200D\uFEFF]/g, " ")
    .replace(/ك/g, "ک")
    .replace(/ي/g, "ی");

  const lowered = normalized.toLowerCase();

  // 2. Split on non-letter/digit/underscore characters
  const raw = lowered.split(/[^\p{L}\p{N}_]+/u).filter(Boolean);

  // 3. Filter stopwords and single-character noise
  const stop = STOPWORDS;
  /** @type {string[]} */
  const out = [];
  for (const tok of raw) {
    if (tok.length < 2) continue;
    if (stop.has(tok)) continue;
    out.push(tok);
  }
  return out;
}

/** @type {Set<string>} */
const STOPWORDS = new Set([
  // English stopwords
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from",
  "has", "have", "he", "her", "his", "i", "in", "is", "it", "its",
  "of", "on", "or", "she", "so", "that", "the", "their", "them",
  "they", "this", "to", "was", "we", "were", "what", "when", "where",
  "which", "who", "why", "with", "you", "your",
  "do", "does", "did", "can", "could", "should", "would", "will",
  "shall", "may", "might", "must", "not", "no", "any", "some",
  "all", "more", "most", "than", "then", "now", "here", "there",
  "but", "if", "else", "also", "just", "only", "about",

  // Persian stopwords & conversational particles
  "در", "به", "از", "که", "با", "برای", "این", "آن", "را", "است",
  "شد", "شده", "شدن", "بود", "بودن", "یک", "یا", "تا", "بر", "هم",
  "نیز", "اما", "اگر", "چون", "چه", "چرا", "کی", "کجا", "کدام", "چگونه",
  "چطور", "بگو", "درباره", "مورد", "چیست", "هست", "هستند", "می", "نمی",
  "باشند", "باشد", "کنید", "کن", "کرد", "کرده", "دارد", "دارند", "ها", "های",
]);

/**
 * A chunk with pre-tokenised text. Matches the shape produced by knowledgeLoader.
 *
 * @typedef {Object} IndexedChunk
 * @property {string} id
 * @property {string} source
 * @property {string} section
 * @property {string} text
 * @property {string[]} tokens
 * @property {number} index
 */

/**
 * Score a single chunk against the query tokens.
 *
 * Combines signals:
 *   • TF — term frequency with diminishing returns and coverage weighting
 *   • Source filename match boost (e.g. "projects.md" boosts on project queries)
 *   • Section heading match boost (strong topical relevance)
 *   • Exact phrase/token match boost for project names & technical terms
 *
 * @param {string[]} queryTokens
 * @param {IndexedChunk} chunk
 * @param {string} rawQuery
 * @returns {number}
 */
function scoreChunk(queryTokens, chunk, rawQuery = "") {
  if (queryTokens.length === 0) return 0;

  /** @type {Map<string, number>} */
  const tf = new Map();
  for (const tok of chunk.tokens) {
    tf.set(tok, (tf.get(tok) || 0) + 1);
  }

  let tfScore = 0;
  let matchedTerms = 0;
  for (const q of queryTokens) {
    const count = tf.get(q);
    if (!count) continue;
    matchedTerms += 1;
    // Diminishing returns: log(1 + count)
    tfScore += Math.log(1 + count);
  }

  // Filename boost — query tokens that appear in the source filename
  const sourceTokens = chunk.source.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  let fileBonus = 0;
  for (const q of queryTokens) {
    if (sourceTokens.includes(q)) fileBonus += 1.4;
  }

  // Section heading boost — headings represent exact topical titles
  const headingTokens = tokenize(chunk.section);
  let headingBonus = 0;
  for (const q of queryTokens) {
    if (headingTokens.includes(q)) headingBonus += 2.2;
  }

  // Exact section inclusion bonus (e.g. user asks "CStudio" and heading has "CStudio")
  if (rawQuery && chunk.section) {
    const normSection = chunk.section.toLowerCase();
    const normRaw = rawQuery.toLowerCase();
    for (const q of queryTokens) {
      if (q.length >= 3 && normSection.includes(q)) {
        headingBonus += 1.0;
      }
    }
  }

  // If nothing matched at all, drop the chunk
  if (matchedTerms === 0 && fileBonus === 0 && headingBonus === 0) return 0;

  // TF weighted by coverage so a chunk matching most query terms beats one matching only one
  const coverage = matchedTerms === 0 ? 0 : matchedTerms / queryTokens.length;
  const tfComponent = tfScore * (0.6 + 0.4 * coverage);
  return tfComponent + fileBonus + headingBonus;
}

/**
 * Rank a list of chunks against a free-text query. Returns the top-K
 * chunks sorted by descending score.
 *
 * @param {string} query
 * @param {IndexedChunk[]} chunks
 * @param {object} [opts]
 * @param {number} [opts.topK=5]
 * @param {number} [opts.minScore=0.3]
 * @returns {IndexedChunk[]}
 */
export function rank(query, chunks, opts = {}) {
  const topK = opts.topK ?? 5;
  const minScore = opts.minScore ?? 0.3;
  const queryTokens = tokenize(query || "");
  if (queryTokens.length === 0) return [];

  /** @type {Array<{ chunk: IndexedChunk, score: number }>} */
  const scored = [];
  for (const chunk of chunks) {
    const score = scoreChunk(queryTokens, chunk, query);
    if (score >= minScore) scored.push({ chunk, score });
  }
  scored.sort((a, b) => b.score - a.score || a.chunk.id.localeCompare(b.chunk.id));
  return scored.slice(0, topK).map((s) => s.chunk);
}

const retriever = { tokenize, rank };
export default retriever;