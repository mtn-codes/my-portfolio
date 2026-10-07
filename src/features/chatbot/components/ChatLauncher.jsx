// src/features/chatbot/components/ChatLauncher.jsx
//
// Floating action button that toggles the chat. Adapts to the active
// experience via useBreakpoint (mobile vs desktop positioning). Theme-
// driven colours, subtle pulse animation, and hover/tap physics via
// Framer Motion — matching the M3 FAB style already used in the project.

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

import { useBreakpoint } from "../../../shared/hooks/useBreakpoint";

/**
 * @param {Object} props
 * @param {boolean} props.open
 * @param {() => void} props.onToggle
 */
export function ChatLauncher({ open, onToggle }) {
  const { isMobile } = useBreakpoint();
  const [scrollHidden, setScrollHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimer = useRef(null);

  // On mobile: auto-hide launcher when actively scrolling down through content,
  // then restore when scrolling stops or scrolls up.
  useEffect(() => {
    if (!isMobile) {
      setScrollHidden(false);
      return;
    }

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (diff > 6 && currentScrollY > 80) {
        setScrollHidden(true);
      } else if (diff < -6 || currentScrollY <= 40) {
        setScrollHidden(false);
      }

      lastScrollY.current = currentScrollY;

      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setScrollHidden(false);
      }, 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimer.current);
    };
  }, [isMobile]);

  // Position: bottom-right on desktop; on mobile elevated with generous clearance
  // (bottom nav height + safe-area-inset + 26px gap) so it never touches nav, FAB, or content.
  const positionCls = isMobile
    ? "bottom-[calc(var(--bottomnav-h,68px)+env(safe-area-inset-bottom,0px)+26px)] right-4 rtl:right-4 rtl:left-auto"
    : "bottom-6 right-6 rtl:right-auto rtl:left-6";

  const sizeCls = isMobile ? "w-12 h-12" : "w-14 h-14";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      aria-expanded={open}
      aria-haspopup="dialog"
      animate={{
        y: scrollHidden && !open ? 75 : 0,
        opacity: scrollHidden && !open ? 0 : 1,
        scale: scrollHidden && !open ? 0.8 : 1,
      }}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      style={{
        pointerEvents: scrollHidden && !open ? "none" : "auto",
      }}
      className={`
        m3-tap fixed z-30
        ${positionCls}
        ${sizeCls} rounded-full
        flex items-center justify-center
        bg-primary text-primary-content
        shadow-lg shadow-primary/25
        focus:outline-none focus:ring-2 focus:ring-primary/40
        ${!open && !scrollHidden ? "animate-pulse" : ""}
      `}
    >
      <motion.span
        key={open ? "x" : "msg"}
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="flex items-center justify-center"
      >
        {open ? (
          <X className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
        ) : (
          <MessageCircle className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
        )}
      </motion.span>
    </motion.button>
  );
}

export default ChatLauncher;
