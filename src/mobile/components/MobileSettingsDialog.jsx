// src/mobile/components/MobileSettingsDialog.jsx
//
// Standalone, large top-anchored modal dialogs for Language, Font, and Theme.
// Designed with a polished entrance animation (scale + fade in from the top with spring easing),
// generous screen space, clear visual hierarchy, and instant tap-to-select with spring exit.

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaPalette, FaCheck, FaTimes, FaSearch } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { themeOptions as sharedThemeOptions } from "../../components/ThemeSelector";

export const LANGUAGES = [
  {
    code: "fa",
    label: "فارسی",
    nativeName: "Persian",
    flag: "🇮🇷",
    dir: "rtl",
  },
  {
    code: "en",
    label: "English",
    nativeName: "English",
    flag: "🇬🇧",
    dir: "ltr",
  },
  {
    code: "ar",
    label: "العربية",
    nativeName: "Arabic",
    flag: "🇦🇪",
    dir: "rtl",
  },
];

export const MOBILE_FONTS = [
  "Kalameh",
  "Peyda",
  "IRANSansXV",
  "Yekan Bakh",
  "Chakad",
  "Kahroba",
  "Mahoor",
  "VIP Cartoon",
  "Vazirmatn",
  "Inter",
  "Roboto",
  "Montserrat",
  "Poppins",
  "Lato",
  "Nunito",
  "Raleway",
  "Ubuntu",
  "Merriweather",
  "Playfair Display",
  "Work Sans",
  "DM Sans",
  "Fira Sans",
  "Rubik",
  "Manrope",
  "Cinzel",
  "Orbitron",
  "Caveat",
  "Pacifico",
];

const SPRING_TRANSITION = { type: "spring", stiffness: 380, damping: 28 };

export default function MobileSettingsDialog({ type, open, onClose }) {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, font, toggleFont } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Reset search when modal opens or type changes
  useEffect(() => {
    if (open) {
      setSearchQuery("");
    }
  }, [open, type]);

  // Handle ESC key to close
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const currentLangCode = i18n.language ? i18n.language.split("-")[0] : "fa";

  const filteredFonts = useMemo(() => {
    if (!searchQuery.trim()) return MOBILE_FONTS;
    const q = searchQuery.toLowerCase().trim();
    return MOBILE_FONTS.filter((f) => f.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredThemes = useMemo(() => {
    if (!searchQuery.trim()) return sharedThemeOptions;
    const q = searchQuery.toLowerCase().trim();
    return sharedThemeOptions.filter((t) => t.toLowerCase().includes(q));
  }, [searchQuery]);

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
    onClose?.();
  };

  const handleSelectFont = (f) => {
    toggleFont(f);
    onClose?.();
  };

  const handleSelectTheme = (thm) => {
    toggleTheme(thm);
    onClose?.();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col items-center select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Top-anchored Dialog Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.95 }}
            transition={SPRING_TRANSITION}
            className="relative z-10 w-[calc(100%-1.5rem)] max-w-md mt-4 sm:mt-8 max-h-[82vh] max-h-[82dvh] flex flex-col rounded-3xl bg-base-100 text-base-content shadow-2xl border border-base-300/80 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 pb-3 border-b border-base-300/60 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg flex-shrink-0">
                  {type === "language" && <FaGlobe />}
                  {type === "font" && <span className="font-bold text-base">Aa</span>}
                  {type === "theme" && <FaPalette />}
                </div>
                <div className="min-w-0">
                  <h2 className="m3-title-medium text-base-content font-black leading-tight truncate">
                    {type === "language" && "زبان / Language"}
                    {type === "font" && (t("nav.fontFamily", "Font Family") || "قلم متن")}
                    {type === "theme" && (t("nav.theme", "Theme") || "تم رنگی")}
                  </h2>
                  <p className="m3-label-medium text-base-content/55 truncate">
                    {type === "language" && "انتخاب زبان مورد نظر"}
                    {type === "font" && `${filteredFonts.length} قلم ثبت‌شده`}
                    {type === "theme" && `${filteredThemes.length} پالت رنگی`}
                  </p>
                </div>
              </div>

              {/* Close affordance */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="m3-tap w-9 h-9 rounded-full flex items-center justify-center text-base-content/60 hover:text-base-content hover:bg-base-200 active:scale-95 transition-all"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Optional search input for Font & Theme */}
            {(type === "font" || type === "theme") && (
              <div className="p-3 pb-1 border-b border-base-300/40 flex-shrink-0">
                <div className="relative flex items-center">
                  <FaSearch className="absolute ltr:left-3 rtl:right-3 text-base-content/40 text-xs pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={type === "font" ? "جستجوی قلم..." : "جستجوی تم..."}
                    className="w-full h-9 ltr:pl-8 rtl:pr-8 px-3 rounded-xl bg-base-200/70 text-base-content text-xs placeholder:text-base-content/40 border border-base-300/60 focus:outline-none focus:border-primary/50"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute ltr:right-2.5 rtl:left-2.5 text-base-content/40 hover:text-base-content text-xs p-1"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Scrollable Option Content */}
            <div className="flex-1 overflow-y-auto p-3 no-scrollbar space-y-2">
              {/* ── 1. Language Options ── */}
              {type === "language" && (
                <div className="space-y-2">
                  {LANGUAGES.map((lang) => {
                    const isSelected = currentLangCode === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`w-full m3-tap p-3.5 rounded-2xl flex items-center justify-between border transition-all ${
                          isSelected
                            ? "bg-primary/12 border-primary text-primary font-bold shadow-sm"
                            : "bg-base-100 border-base-300/70 text-base-content active:bg-base-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="text-left rtl:text-right">
                            <p className="text-sm font-bold leading-tight">{lang.label}</p>
                            <p className="text-xs text-base-content/55 font-normal mt-0.5">
                              {lang.nativeName}
                            </p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* ── 2. Font Options ── */}
              {type === "font" && (
                <div className="grid grid-cols-2 gap-2">
                  {filteredFonts.map((f) => {
                    const isSelected = font === f;
                    return (
                      <button
                        key={f}
                        type="button"
                        onClick={() => handleSelectFont(f)}
                        className={`m3-tap p-2.5 rounded-2xl flex flex-col justify-between border text-left rtl:text-right transition-all min-h-[76px] ${
                          isSelected
                            ? "bg-primary/12 border-primary text-primary font-bold shadow-sm"
                            : "bg-base-100 border-base-300/70 text-base-content active:bg-base-200"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="w-7 h-7 rounded-lg border border-base-300/80 flex items-center justify-center flex-shrink-0 bg-base-200/50"
                            style={{ fontFamily: f }}
                          >
                            <span className="text-xs font-bold">Aa</span>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-primary text-primary-content flex items-center justify-center text-[10px]">
                              <FaCheck />
                            </div>
                          )}
                        </div>

                        <span
                          className="text-xs font-semibold truncate mt-2"
                          style={{ fontFamily: f }}
                        >
                          {f}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* ── 3. Theme Options ── */}
              {type === "theme" && (
                <div className="grid grid-cols-2 gap-2">
                  {filteredThemes.map((thm) => {
                    const isSelected = theme === thm;
                    return (
                      <button
                        key={thm}
                        type="button"
                        data-theme={thm}
                        onClick={() => handleSelectTheme(thm)}
                        className={`m3-tap p-2.5 rounded-2xl flex items-center justify-between border text-left rtl:text-right transition-all bg-base-100 text-base-content ${
                          isSelected
                            ? "border-primary ring-2 ring-primary/40 font-bold shadow-sm"
                            : "border-base-300/70 active:bg-base-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {/* 4-Color Swatch */}
                          <div className="w-6 h-6 rounded-lg border border-base-300 flex flex-wrap overflow-hidden flex-shrink-0 shadow-xs">
                            <div className="w-1/2 h-1/2 bg-primary" />
                            <div className="w-1/2 h-1/2 bg-secondary" />
                            <div className="w-1/2 h-1/2 bg-accent" />
                            <div className="w-1/2 h-1/2 bg-neutral" />
                          </div>
                          <span className="text-xs capitalize font-semibold truncate">
                            {thm}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-primary text-primary-content flex items-center justify-center text-[10px] flex-shrink-0 ltr:ml-1 rtl:mr-1">
                            <FaCheck />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
