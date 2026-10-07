// src/features/chatbot/components/ChatEmptyState.jsx
//
// Empty-state shown when the transcript has zero messages. Renders the
// greeting + suggested questions.

import { Bot } from "lucide-react";
import { useTranslation } from "react-i18next";

import { ASSISTANT_PROFILE } from "../config/chatbot.config";
import SuggestedQuestions from "./SuggestedQuestions";

/**
 * @param {Object} props
 * @param {import('../types/chat.types').SuggestedQuestion[]} props.questions
 * @param {(q: import('../types/chat.types').SuggestedQuestion) => void} props.onSelect
 */
export function ChatEmptyState({ questions, onSelect }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center pt-10 pb-6 px-6">
      <div
        aria-hidden="true"
        className="
          w-14 h-14 rounded-2xl
          bg-primary/12 text-primary
          flex items-center justify-center
        "
      >
        <Bot className="w-7 h-7" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-base-content">
        {t("assistant.greeting", "Hi, I'm {{name}}'s assistant.", {
          name: t("assistant.shortName", ASSISTANT_PROFILE.shortName),
        })}
      </h3>
      <p className="mt-1 text-sm text-base-content/65 max-w-xs">
        {t(
          "assistant.subtitle",
          "Ask me anything about his filmmaking, development, projects, or how to reach him."
        )}
      </p>

      <div className="w-full max-w-sm mt-6">
        <SuggestedQuestions questions={questions} onSelect={onSelect} />
      </div>
    </div>
  );
}

export default ChatEmptyState;
