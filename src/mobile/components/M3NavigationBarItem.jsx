// M3 Navigation Bar item — one destination in the bottom NavigationBar.
// Uses the Material 3 expressive active pill (rounded "selected" indicator
// behind the icon) — the canonical shape used in modern Android.

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export function M3NavigationBarItem({ to, icon, label, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      aria-label={label}
      className={({ isActive }) =>
        `m3-tap relative flex-1 flex flex-col items-center justify-center
         min-h-[58px] py-1 px-1.5 select-none
         transition-colors duration-200
         ${isActive ? "text-primary" : "text-base-content/65 hover:text-base-content"}`
      }
    >
      {({ isActive }) => (
        <motion.div
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 440, damping: 25 }}
          className="relative w-full flex flex-col items-center justify-center"
        >
          {/* Icon container with centered active pill */}
          <div className="relative w-14 h-8 flex items-center justify-center">
            {/* Soft tinted background bloom */}
            <motion.span
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.7,
              }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="absolute inset-0 rounded-full bg-primary/18 shadow-sm pointer-events-none"
            />

            {/* Icon */}
            <motion.span
              initial={false}
              animate={{
                y: isActive ? -0.5 : 0,
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 440, damping: 25 }}
              className="relative z-10 w-6 h-6 flex items-center justify-center text-[21px]"
            >
              {icon}
            </motion.span>
          </div>

          {/* Label with balanced spacing */}
          <motion.span
            initial={false}
            animate={{
              fontWeight: isActive ? 800 : 500,
              opacity: isActive ? 1 : 0.75,
            }}
            transition={{ duration: 0.18 }}
            className="relative z-10 text-[11px] leading-tight tracking-normal mt-1 text-center whitespace-nowrap px-0.5 truncate max-w-full"
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </NavLink>
  );
}

export default M3NavigationBarItem;