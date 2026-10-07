import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import faTranslation from "./locales/fa.json";
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";

const resources = {
  fa: { translation: faTranslation },
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
};

const updateDocumentAttributes = (lang) => {
  const current = lang ? lang.split("-")[0] : "fa";
  const dir = current === "en" ? "ltr" : "rtl";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", current);
  localStorage.setItem("lang", current);
};

const savedLang = localStorage.getItem("lang") || "fa";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: "fa",
    supportedLngs: ["fa", "en", "ar"],
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Apply initial document direction and language
updateDocumentAttributes(i18n.language || savedLang);

// Listen to language changes
i18n.on("languageChanged", (lng) => {
  updateDocumentAttributes(lng);
});

export default i18n;
