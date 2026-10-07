import { useLocation } from "react-router-dom";
import { FaPalette, FaBell } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import profilePic from "/img/about_photo.jpg";
import M3TopAppBar from "./components/M3TopAppBar";
import { LANGUAGES } from "./components/MobileSettingsDialog";

export default function MobileAppBar({ onOpenDrawer, onOpenSetting }) {
  const { pathname, hash } = useLocation();
  const { t, i18n } = useTranslation();

  const currentLangCode = i18n.language ? i18n.language.split("-")[0] : "fa";
  const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

  const getTitleAndSubtitle = () => {
    if (pathname === "/") return { title: t("nav.home", "Home"), subtitle: t("mobile.welcome", "Welcome") };
    if (pathname === "/skills-projects") {
      if (hash === "#projects") {
        return { title: t("nav.projects", "Projects"), subtitle: t("mobile.showcase", "Showcase") };
      }
      return { title: t("nav.skills", "Skills"), subtitle: t("mobile.dailyStack", "Daily stack") };
    }
    if (pathname === "/education-experience") return { title: t("mobile.journey", "Journey"), subtitle: t("education.badge", "Education & Experience") };
    if (pathname === "/projects") return { title: t("nav.projects", "Projects"), subtitle: t("mobile.allWork", "All work") };
    if (pathname === "/contact") return { title: t("contact.title", "Contact"), subtitle: t("hero.cta.connect", "Let's connect") };
    if (pathname.startsWith("/projects/")) return { title: t("nav.projects", "Project"), subtitle: t("mobile.showcase", "Case study") };
    return { title: t("hero.name", "Taha Naghdi"), subtitle: t("hero.tagline", "Filmmaker · Developer") };
  };

  const { title, subtitle } = getTitleAndSubtitle();

  const openMenu = () => onOpenDrawer?.("menu");
  const openAlerts = () => onOpenDrawer?.("alerts");
  const handleOpenTheme = () => {
    if (onOpenSetting) {
      onOpenSetting("theme");
    } else {
      onOpenDrawer?.("theme");
    }
  };

  return (
    <M3TopAppBar
      title={title}
      subtitle={subtitle}
      titleClassName="text-[1.05rem] tracking-tight font-black"
      leading={
        <button
          onClick={openMenu}
          aria-label={t("mobile.openMenu", "Open menu")}
          className="m3-tap relative w-11 h-11 rounded-full overflow-hidden flex items-center justify-center m3-state-hover ring-2 ring-primary/20 active:scale-95 transition-transform flex-shrink-0"
        >
          <img
            src={profilePic}
            alt={`${t("hero.name", "Taha Naghdi")} — ${t("about.info.roleValue", "Filmmaker & Developer")}`}
            className="w-full h-full object-cover object-top"
            loading="eager"
            decoding="async"
          />
          {/* Tiny status dot — Android "active" indicator */}
          <span className="absolute bottom-0.5 right-0.5 rtl:right-auto rtl:left-0.5 w-2.5 h-2.5 rounded-full bg-success ring-2 ring-base-100" />
        </button>
      }
      trailing={
        <div className="flex items-center gap-0.5">
          {/* Language selector button */}
          <button
            type="button"
            onClick={() => onOpenSetting?.("language")}
            aria-label="Select language"
            className="m3-tap h-9 px-2.5 rounded-full flex items-center gap-1.5 text-base-content m3-state-hover active:scale-95 transition-transform bg-base-200/50 border border-base-300/40"
          >
            <span className="text-sm">{currentLang.flag}</span>
            <span className="text-xs font-bold">{currentLang.label}</span>
          </button>

          {/* Notifications pill */}
          <button
            onClick={openAlerts}
            aria-label={t("mobile.notifications", "Notifications")}
            className="m3-tap relative w-10 h-10 rounded-full flex items-center justify-center text-base-content m3-state-hover active:scale-95 transition-transform"
          >
            <FaBell className="text-base" />
            <span className="absolute top-2 right-2 rtl:right-auto rtl:left-2 w-1.5 h-1.5 rounded-full bg-error" />
          </button>

          {/* Theme / settings */}
          <button
            onClick={handleOpenTheme}
            aria-label={t("mobile.themeSettings", "Theme & settings")}
            className="m3-tap w-10 h-10 rounded-full flex items-center justify-center text-base-content m3-state-hover active:scale-95 transition-transform"
          >
            <FaPalette className="text-base" />
          </button>
        </div>
      }
    />
  );
}