// M3 Timeline — single rail, mobile-friendly vertical stack with RTL support.
// Each entry is provided via children.

import { motion } from "framer-motion";

export function M3Timeline({ children }) {
  return (
    <div className="relative ltr:pl-6 rtl:pr-6">
      {/* Continuous rail */}
      <span
        aria-hidden="true"
        className="absolute ltr:left-[11px] rtl:right-[11px] top-2 bottom-2 w-px bg-base-300/80"
      />
      <ol className="space-y-4">{children}</ol>
    </div>
  );
}

export function M3TimelineItem({
  icon,
  color = "primary",
  title,
  subtitle,
  trailing,
  index = 0,
  children,
}) {
  const ring =
    color === "success"
      ? "bg-success/15 text-success"
      : color === "info"
      ? "bg-info/15 text-info"
      : color === "warning"
      ? "bg-warning/15 text-warning"
      : color === "error"
      ? "bg-error/15 text-error"
      : color === "secondary"
      ? "bg-secondary/15 text-secondary"
      : "bg-primary/15 text-primary";

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* Dot */}
      <span
        aria-hidden="true"
        className={`absolute ltr:-left-[18px] rtl:-right-[18px] top-3.5 w-6 h-6 rounded-full flex items-center justify-center ${ring} ring-4 ring-base-100 shadow-sm`}
      >
        <span className="text-[14px] flex items-center">{icon}</span>
      </span>
      <div className="bg-base-100 m3-elev-1 m3-shape-lg p-4.5 sm:p-5 border border-base-300/60 text-left rtl:text-right">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="m3-title-large text-base-content leading-snug font-extrabold pt-1 pb-1">
              {title}
            </h3>
            {subtitle && (
              <p className="m3-body-medium text-base-content/65 mt-2 font-medium font-body-fa">
                {subtitle}
              </p>
            )}
          </div>
          {trailing && (
            <div className="flex-shrink-0 text-base-content/55 text-xs pt-1.5 font-body-fa">
              {trailing}
            </div>
          )}
        </div>
        {children && (
          <div className="mt-4 pt-3.5 border-t border-base-300/40 text-sm text-base-content/75 font-body-fa">
            {children}
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default M3Timeline;