// src/features/chatbot/components/SuggestedQuestions.jsx
//
// Renders the suggested starter questions inside the empty state. Pure
// presentational — the click handler is owned by ChatWindow.

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * @param {Object} props
 * @param {import('../types/chat.types').SuggestedQuestion[]} props.questions
 * @param {(question: import('../types/chat.types').SuggestedQuestion) => void} props.onSelect
 */
export function SuggestedQuestions({ questions, onSelect }) {
  const { t } = useTranslation();
  if (!questions || questions.length === 0) return null;

  return (
    <div className="w-full px-2 pt-2 pb-4 text-start">
      <p className="m3-label-large uppercase tracking-[0.14em] text-primary px-1 mb-2.5 font-bold text-xs">
        {t("assistant.suggested", "Suggested")}
      </p>
      <div className="flex flex-col gap-2 w-full">
        {questions.map((q, i) => (
          <motion.button
            key={q.id}
            type="button"
            onClick={() => onSelect?.(q)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
            whileTap={{ scale: 0.98 }}
            className="
              group w-full flex items-center justify-between
              py-2.5 px-3.5 rounded-xl
              bg-base-200/70 hover:bg-base-200 text-base-content hover:text-primary
              border border-base-300/60 hover:border-primary/40
              text-xs sm:text-sm font-medium text-start
              shadow-2xs transition-all duration-150
            "
          >
            <span className="truncate">{q.text}</span>
            <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-all text-primary shrink-0 ms-2" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;
