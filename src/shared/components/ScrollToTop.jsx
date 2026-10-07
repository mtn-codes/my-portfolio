// src/shared/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Shared scroll restoration helper:
 * - Resets window scroll position to (0, 0) on normal internal route navigation (PUSH/REPLACE).
 * - Preserves standard browser history scroll behavior on back/forward (POP).
 * - Honors intentional hash/anchor navigation (scrolls to the target anchor if present).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Intentional hash/anchor navigation: allow targeting the anchor element without resetting to 0
    if (hash) {
      const id = hash.replace(/^#/, "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      return;
    }

    // Browser back/forward navigation (POP): preserve expected browser history behavior
    if (navType === "POP") {
      return;
    }

    // Normal internal navigation (PUSH or REPLACE without hash): immediate deterministic reset to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, [pathname, hash, navType]);

  return null;
}
