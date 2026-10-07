// src/features/chatbot/data/suggestedQuestions.js
//
// Source of suggested starter questions.

import { DEFAULT_SUGGESTIONS } from "../config/chatbot.config";

/**
 * Returns the 4 suggested questions, localized if a translator `t` is passed.
 *
 * @param {(key: string, defaultValue?: string) => string} [t]
 * @returns {import('../types/chat.types').SuggestedQuestion[]}
 */
export function getSuggestedQuestions(t) {
  if (!t) {
    return DEFAULT_SUGGESTIONS.map((s) => ({ ...s }));
  }

  return [
    {
      id: "filmmaking",
      text: t("assistant.suggestions.filmmaking", "His filmmaking projects?"),
      category: "projects",
    },
    {
      id: "code_ai",
      text: t("assistant.suggestions.codeAi", "What does he build with AI?"),
      category: "skills",
    },
    {
      id: "contact",
      text: t("assistant.suggestions.contact", "How can I contact him?"),
      category: "contact",
    },
    {
      id: "background",
      text: t("assistant.suggestions.background", "What is his background?"),
      category: "about",
    },
  ];
}

export default getSuggestedQuestions;
