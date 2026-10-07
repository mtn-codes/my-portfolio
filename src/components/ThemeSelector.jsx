// src/components/ThemeSelector.jsx
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const fontOptions = [
  "Kalameh",
  "Vazirmatn",
  "Inter",
  "Roboto",
  "Open Sans",
  "Montserrat",
  "Poppins",
  "Lato",
  "Nunito",
  "Raleway",
  "Ubuntu",
  "Merriweather",
  "Playfair Display",
  "Work Sans",
  "Source Sans Pro",
  "DM Sans",
  "Fira Sans",
  "Titillium Web",
  "Noto Sans",
  "Quicksand",
  "Josefin Sans",
  "Rubik",
  "Karla",
  "Mulish",
  "Heebo",
  "Cabin",
  "Manrope",
  "PT Sans",
  "Oxygen",
  "Asap",
  "Assistant",
  "Barlow",
  "Exo 2",
  "Hind",
  "Signika",
  "IBM Plex Sans",
  "Mukta",
  "Tajawal",
  "Varela Round",
  "Catamaran",
  "Public Sans",
  "Cairo",
  "Spartan",
  "Overpass",
  "Questrial",
  "Be Vietnam Pro",
  "Lexend",
  "Anton",
  "Zilla Slab",
  "Arimo",
  "Prompt",
  "DM Serif Display",
  "Bebas Neue",
  "Teko",
  "Urbanist",
  "Archivo",
  "Arvo",
  "Lora",
  "Inconsolata",
  "Chivo",
  "M PLUS 1p",
  "Acme",
  "Saira",
  "Kanit",
  "Righteous",
  "Bitter",
  "Caveat",
  "Dosis",
  "Yanone Kaffeesatz",
  "Abel",
  "Crimson Text",
  "Sora",
  "Cormorant Garamond",
  "Barlow Condensed",
  "Dancing Script",
  "Pacifico",
  "Orbitron",
  "Indie Flower",
  "Frank Ruhl Libre",
  "Alata",
  "Amaranth",
  "Exo",
  "Vollkorn",
  "Tinos",
  "Kumbh Sans",
  "Raleway Dots",
  "Baloo 2",
  "Rajdhani",
  "Edu SA Beginner",
  "Candal",
  "Noto Serif",
  "Itim",
  "Balsamiq Sans",
  "Yantramanav",
  "Muli",
  "EB Garamond",
  "Fugaz One",
  "Patrick Hand",
  "Press Start 2P",
  "Special Elite",
  "Carter One",
  "Red Hat Display",
  "Amatic SC",
  "Unica One",
  "Chakra Petch",
  "Rokkitt",
  "Lobster",
  "Satisfy",
  "Great Vibes",
  "Cinzel"
];

export const themeOptions = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk"
];

const ThemeSelector = () => {
  const { theme, toggleTheme, font, toggleFont } = useTheme();
  const { t } = useTranslation();
  const [isFontOpen, setIsFontOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const fontRef = useRef(null);
  const themeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fontRef.current && !fontRef.current.contains(event.target)) {
        setIsFontOpen(false);
      }
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-4">
      {/* ── 1. Font Family Section (Top) ── */}
      <div className="form-control" ref={fontRef}>
        <label className="label py-1">
          <span className="label-text font-medium text-xs text-base-content/70">
            {t("nav.fontFamily", "Font Family")}
          </span>
        </label>
        <div className="relative">
          <button
            type="button"
            className="btn btn-outline bg-base-100 hover:bg-base-200 justify-between w-full text-left"
            onClick={() => {
              setIsFontOpen(!isFontOpen);
              setIsThemeOpen(false);
            }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded border border-base-300 flex items-center justify-center flex-shrink-0">
                <span className="text-xs" style={{ fontFamily: font }}>
                  Aa
                </span>
              </div>
              <span className="text-sm font-medium truncate" style={{ fontFamily: font }}>
                {font}
              </span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isFontOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isFontOpen && (
            <div className="dropdown-content p-3 shadow-lg bg-base-100 rounded-box w-full max-h-96 overflow-y-auto mt-1 absolute z-50 left-0 right-0 border border-base-300/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {fontOptions.map((fontOption) => (
                  <button
                    key={fontOption}
                    type="button"
                    onClick={() => {
                      toggleFont(fontOption);
                      setIsFontOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded hover:bg-base-200 text-left rtl:text-right ${
                      font === fontOption ? "bg-base-200 font-semibold" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded border border-base-300 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs" style={{ fontFamily: fontOption }}>
                          Aa
                        </span>
                      </div>
                      <span
                        className="text-sm font-medium truncate"
                        style={{ fontFamily: fontOption }}
                      >
                        {fontOption}
                      </span>
                    </div>
                    {font === fontOption && (
                      <FaCheck className="text-primary text-xs flex-shrink-0 ltr:ml-2 rtl:mr-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── 2. Theme Section (Bottom) ── */}
      <div className="form-control" ref={themeRef}>
        <label className="label py-1">
          <span className="label-text font-medium text-xs text-base-content/70">
            {t("nav.theme", "Theme")}
          </span>
        </label>
        <div className="relative">
          <button
            type="button"
            className="btn btn-outline bg-base-100 hover:bg-base-200 justify-between w-full text-left capitalize"
            onClick={() => {
              setIsThemeOpen(!isThemeOpen);
              setIsFontOpen(false);
            }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded border border-base-300 flex flex-wrap overflow-hidden flex-shrink-0">
                <div className="w-1/2 h-1/2 bg-primary"></div>
                <div className="w-1/2 h-1/2 bg-secondary"></div>
                <div className="w-1/2 h-1/2 bg-accent"></div>
                <div className="w-1/2 h-1/2 bg-neutral"></div>
              </div>
              <span className="text-sm font-medium truncate">{theme}</span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isThemeOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isThemeOpen && (
            <div className="dropdown-content p-3 shadow-lg bg-base-100 rounded-box w-full max-h-96 overflow-y-auto mt-1 absolute z-50 left-0 right-0 border border-base-300/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {themeOptions.map((themeOption) => (
                  <button
                    key={themeOption}
                    type="button"
                    onClick={() => {
                      toggleTheme(themeOption);
                      setIsThemeOpen(false);
                    }}
                    data-theme={themeOption}
                    className={`flex items-center justify-between p-2 rounded hover:bg-base-200 text-left rtl:text-right ${
                      theme === themeOption ? "bg-base-200 font-semibold" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded border border-base-300 flex flex-wrap overflow-hidden flex-shrink-0">
                        <div className="w-1/2 h-1/2 bg-primary"></div>
                        <div className="w-1/2 h-1/2 bg-secondary"></div>
                        <div className="w-1/2 h-1/2 bg-accent"></div>
                        <div className="w-1/2 h-1/2 bg-neutral"></div>
                      </div>
                      <span className="text-sm font-medium capitalize truncate">
                        {themeOption}
                      </span>
                    </div>
                    {theme === themeOption && (
                      <FaCheck className="text-primary text-xs flex-shrink-0 ltr:ml-2 rtl:mr-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;