import { motion } from "framer-motion";

/**
 * SegmentedToggle — Reusable pill-switch component with animated active indicator.
 * Provides identical visual styling, dimensions, and motion across mobile toggles.
 *
 * @param {Array<{value: string, label: string, icon?: React.ReactNode}>} options
 * @param {string} value
 * @param {(val: string) => void} onChange
 * @param {string} layoutId - Unique Framer Motion layoutId for the sliding pill
 * @param {string} [className] - Optional extra class names for container
 */
export default function SegmentedToggle({
  options = [],
  value,
  onChange,
  layoutId = "segmentedTogglePill",
  className = "",
}) {
  return (
    <div
      role="tablist"
      className={`bg-base-200/80 rounded-full p-1 flex relative select-none ${className}`}
    >
      {options.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(opt.value)}
            className={`relative flex-1 h-10 rounded-full text-xs font-black transition-colors duration-200 flex items-center justify-center gap-1.5 z-10 ${
              isActive
                ? "text-primary-content"
                : "text-base-content/70 active:text-primary"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-primary rounded-full m3-elev-1 shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {opt.icon && (
              <span className="flex-shrink-0 text-sm flex items-center justify-center">
                {opt.icon}
              </span>
            )}
            <span className="truncate whitespace-nowrap">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
