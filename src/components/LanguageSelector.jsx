import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { FaGlobe, FaCheck, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGES = [
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
    nativeName: "Arabic (UAE)",
    flag: "🇦🇪",
    dir: "rtl",
  },
];

const LanguageSelector = ({ variant = "button", className = "" }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangCode = i18n.language ? i18n.language.split("-")[0] : "fa";
  const currentLang =
    LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

  const handleLanguageChange = (langCode) => {
    if (langCode === currentLangCode) {
      setIsOpen(false);
      return;
    }
    setPulse(true);
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    if (pulse) {
      const timer = setTimeout(() => setPulse(false), 500);
      return () => clearTimeout(timer);
    }
  }, [pulse]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Form-control layout for inside settings sheets / drawer
  if (variant === "form") {
    return (
      <div className={`form-control ${className}`} ref={dropdownRef}>
        <label className="label pl-0">
          <span className="label-text flex items-center gap-2 text-sm font-medium">
            <motion.span
              animate={pulse ? { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] } : {}}
              transition={{ duration: 0.35 }}
              className="text-primary text-base flex items-center"
            >
              <FaGlobe />
            </motion.span>
            <span>Language / زبان / اللغة</span>
          </span>
        </label>
        <div className="dropdown w-full">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-outline bg-base-100 hover:bg-base-200 justify-between w-full text-left"
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{currentLang.flag}</span>
              <span className="text-sm font-medium">{currentLang.label}</span>
            </div>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown className="text-xs opacity-60" />
            </motion.span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="dropdown-content p-2 shadow-lg bg-base-100 rounded-box w-full max-h-60 overflow-y-auto mt-1 z-50 border border-base-300/50"
              >
                <div className="flex flex-col gap-1">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center justify-between p-2.5 rounded-lg hover:bg-base-200 transition-colors ${
                        currentLangCode === lang.code ? "bg-base-200 font-semibold" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{lang.flag}</span>
                        <span className="text-sm">{lang.label}</span>
                      </div>
                      {currentLangCode === lang.code && (
                        <FaCheck className="text-primary text-xs" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Standard navbar / appbar button dropdown
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className={`
          flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium
          transition-all duration-200
          ${
            isOpen
              ? "text-primary bg-primary/10"
              : "text-base-content/60 hover:text-base-content hover:bg-base-200/70"
          }
        `}
      >
        <motion.span
          animate={pulse ? { scale: [1, 1.35, 1], opacity: [1, 0.6, 1] } : {}}
          transition={{ duration: 0.35 }}
          className="flex items-center text-sm"
        >
          <span className="mr-0.5">{currentLang.flag}</span>
        </motion.span>
        <span className="hidden sm:inline font-medium">{currentLang.label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className="text-[9px] opacity-60" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="
              absolute ltr:right-0 ltr:left-auto rtl:left-0 rtl:right-auto top-full mt-1.5
              w-44 bg-base-100
              rounded-xl shadow-2xl border border-base-300/50
              p-1.5 z-50
            "
          >
            <div className="flex flex-col gap-0.5">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px]
                    transition-colors duration-150
                    ${
                      currentLangCode === lang.code
                        ? "bg-primary text-primary-content font-semibold shadow-sm"
                        : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  {currentLangCode === lang.code && (
                    <FaCheck className="text-[11px]" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
