// src/components/ProjectCarousel.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// ─── RESPONSIVE ITEMS PER PAGE HOOK ──────────────────────────────────────────
const useResponsiveItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return itemsPerPage;
};

// ─── 3D DEPTH TRANSITION VARIANTS ────────────────────────────────────────────
const pageVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 30 : -30,
    rotateY: direction > 0 ? 14 : -14,
    scale: 0.94,
    y: 8,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      type: "spring",
      stiffness: 120,
      damping: 18,
      staggerChildren: 0.05,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -30 : 30,
    rotateY: direction > 0 ? -14 : 14,
    scale: 0.92,
    y: -8,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardChildVariants = {
  enter: { opacity: 0, y: 16, scale: 0.96 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.25 } },
};

// ─── PROJECT CAROUSEL COMPONENT ──────────────────────────────────────────────
const ProjectCarousel = ({ items = [], renderItem, autoAdvanceMs = 5000 }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir?.() === "rtl" || i18n.language === "fa" || i18n.language === "ar";
  const fwdDir = isRtl ? -1 : 1;
  const bwdDir = isRtl ? 1 : -1;

  const itemsPerPage = useResponsiveItemsPerPage();
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(fwdDir);
  const [isPaused, setIsPaused] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const timerRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  // Ensure current page is within bounds when itemsPerPage changes
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  const triggerPulse = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 450);
  };

  const goToPage = useCallback(
    (pageIndex, dir = fwdDir) => {
      setDirection(dir);
      setCurrentPage((pageIndex + totalPages) % totalPages);
      triggerPulse();
    },
    [totalPages, fwdDir]
  );

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1, fwdDir);
  }, [currentPage, goToPage, fwdDir]);

  const prevPage = useCallback(() => {
    goToPage(currentPage - 1, bwdDir);
  }, [currentPage, goToPage, bwdDir]);

  const handleDotClick = useCallback(
    (dotIdx) => {
      if (dotIdx === currentPage) return;
      const isAdvancing = dotIdx > currentPage;
      const dir = isRtl ? (isAdvancing ? -1 : 1) : (isAdvancing ? 1 : -1);
      goToPage(dotIdx, dir);
    },
    [currentPage, goToPage, isRtl]
  );

  // Auto-advance timer (5000ms, paused on hover/touch/focus, reset on manual action)
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    timerRef.current = setInterval(() => {
      goToPage(currentPage + 1, fwdDir);
    }, autoAdvanceMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentPage, isPaused, totalPages, autoAdvanceMs, goToPage, fwdDir]);

  // Slice items for active page
  const startIndex = currentPage * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* ── 3D Viewport Wrapper with Depth Pulse ── */}
      <div
        className={`
          relative w-full rounded-3xl transition-shadow duration-500
          ${isPulsing ? "shadow-[0_20px_50px_rgba(0,0,0,0.18)]" : "shadow-none"}
        `}
        style={{ perspective: 1200 }}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {currentItems.map((item, index) => (
              <motion.div key={item.slug || index} variants={cardChildVariants} className="h-full">
                {renderItem(item, startIndex + index)}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Desktop Circular Side Navigation Buttons ── */}
        {totalPages > 1 && (
          <>
            <button
              onClick={isRtl ? nextPage : prevPage}
              className="
                hidden xl:flex items-center justify-center
                absolute -left-7 top-1/2 -translate-y-1/2 z-30
                w-13 h-13 rounded-full
                bg-base-200/90 hover:bg-primary border border-base-300/80 hover:border-primary
                text-base-content/80 hover:text-primary-content
                shadow-xl shadow-black/10 hover:shadow-primary/25 hover:scale-110
                transition-all duration-200 backdrop-blur-md
              "
              aria-label={isRtl ? "Next Page" : "Previous Page"}
            >
              <FaChevronLeft className="text-sm ltr:-ml-0.5 rtl:-mr-0.5" />
            </button>

            <button
              onClick={isRtl ? prevPage : nextPage}
              className="
                hidden xl:flex items-center justify-center
                absolute -right-7 top-1/2 -translate-y-1/2 z-30
                w-13 h-13 rounded-full
                bg-base-200/90 hover:bg-primary border border-base-300/80 hover:border-primary
                text-base-content/80 hover:text-primary-content
                shadow-xl shadow-black/10 hover:shadow-primary/25 hover:scale-110
                transition-all duration-200 backdrop-blur-md
              "
              aria-label={isRtl ? "Previous Page" : "Next Page"}
            >
              <FaChevronRight className="text-sm ltr:-mr-0.5 rtl:-ml-0.5" />
            </button>
          </>
        )}
      </div>

      {/* ── Bottom Controls: Prev/Next (on smaller screens) + Page Dot Indicators ── */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {/* Mobile/Tablet Prev button */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={isRtl ? nextPage : prevPage}
              className="
                flex items-center justify-center
                w-10 h-10 rounded-2xl
                bg-base-200 hover:bg-primary border border-base-300
                text-base-content/75 hover:text-primary-content
                shadow-md hover:scale-105 active:scale-95
                transition-all duration-200
              "
              aria-label={isRtl ? "Next" : "Previous"}
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {/* Dot Indicators - Left to Right */}
            <div
              dir="ltr"
              className="flex items-center gap-1.5 px-3 py-2 bg-base-200/70 border border-base-300/60 rounded-full"
            >
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => handleDotClick(dotIdx)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${dotIdx === currentPage ? "w-7 bg-primary shadow-sm shadow-primary/30" : "w-2 bg-base-300 hover:bg-base-content/30"}
                  `}
                  aria-label={`Go to page ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Mobile/Tablet Next button */}
            <button
              onClick={isRtl ? prevPage : nextPage}
              className="
                flex items-center justify-center
                w-10 h-10 rounded-2xl
                bg-base-200 hover:bg-primary border border-base-300
                text-base-content/75 hover:text-primary-content
                shadow-md hover:scale-105 active:scale-95
                transition-all duration-200
              "
              aria-label={isRtl ? "Previous" : "Next"}
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          {/* Desktop Centered Dot Indicators - Left to Right */}
          <div
            dir="ltr"
            className="hidden xl:flex items-center gap-2 px-4 py-2 bg-base-200/70 border border-base-300/60 rounded-full"
          >
            {Array.from({ length: totalPages }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => handleDotClick(dotIdx)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${dotIdx === currentPage ? "w-8 bg-primary shadow-sm shadow-primary/30" : "w-2 bg-base-300 hover:bg-base-content/30"}
                `}
                aria-label={`Go to page ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
