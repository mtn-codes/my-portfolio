// MobileDrawer — modal bottom sheet that opens from any app-bar trigger.
//
// Three modes, controlled by the `mode` prop:
//   • "menu"    (default) — full menu: profile + Connect + Appearance + PWA
//                            install + footer.
//   • "alerts"            — everything in the menu EXCEPT the Appearance
//                            section (triggered by the notification pill).
//   • "theme"             — ONLY the Appearance section (triggered by the
//                            palette / theme icon).
//
// The M3Sheet itself becomes a small focused modal in `theme` mode.

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaPalette,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaTelegram,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import M3Sheet from "./components/M3Sheet";
import M3ListItem from "./components/M3ListItem";
import MobileSettingsDialog, { LANGUAGES } from "./components/MobileSettingsDialog";
import InstallAppButton from "../shared/components/InstallAppButton";
import profilePic from "/img/about_photo.jpg";

const SOCIALS = [
  {
    leading: <FaPhone />,
    title: "Phone",
    subtitle: "+98 904 451 9594",
    href: "tel:+989044519594",
  },
  {
    leading: <FaLinkedin />,
    title: "LinkedIn",
    subtitle: "Taha Naghdi",
    href: "https://www.linkedin.com/in/taha-naghdi-74398a317",
  },
  {
    leading: <FaTelegram />,
    title: "Telegram",
    subtitle: "@rull_bazi",
    href: "https://t.me/rull_bazi",
  },
  {
    leading: <MdEmail />,
    title: "Email",
    subtitle: "tahanaghdi.dev@gmail.com",
    href: "mailto:tahanaghdi.dev@gmail.com",
  },
  {
    leading: <FaGithub />,
    title: "GitHub",
    subtitle: "@mtn-codes",
    href: "https://github.com/mtn-codes",
  },
];

// ─── Sections (memoized as standalone components for clarity) ───────────────

function ProfileCard() {
  const { t } = useTranslation();
  return (
    <div className="relative overflow-hidden rounded-3xl border border-base-300/60 bg-base-100 m3-elev-1">
      {/* Subtle accent strip on the leading edge */}
      <div className="absolute ltr:left-0 ltr:rounded-r-full rtl:right-0 rtl:rounded-l-full top-4 bottom-4 w-1 bg-primary" />

      <div className="p-4 pl-5">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-90" />
            {/* TODO: replace /public/img/about_photo.jpg with Taha's real photo when provided */}
            <img
              src={profilePic}
              alt={`${t("hero.name", "Taha Naghdi")} — ${t("about.info.roleValue", "Filmmaker & Full-Stack Developer")}`}
              className="relative w-14 h-14 rounded-full object-cover object-top ring-2 ring-base-100"
            />
            <span className="absolute -bottom-0.5 -right-0.5 rtl:-right-auto rtl:-left-0.5 w-5 h-5 rounded-full bg-primary text-primary-content flex items-center justify-center ring-2 ring-base-100">
              <FaCheckCircle className="text-[10px]" />
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <p className="m3-title-medium text-base-content leading-tight truncate font-bold">
              {t("hero.name", "Taha Naghdi")}
            </p>
            <p className="m3-body-medium text-base-content/65 truncate">
              {t("about.info.roleValue", "Filmmaker & Full-Stack Developer")}
            </p>

            {/* Identity chips */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <span className="inline-flex items-center gap-1 h-6 px-2 rounded-full bg-primary/12 text-primary m3-label-medium">
                {t("hero.tagline", "Filmmaker · Developer · Innovator")}
              </span>
              <span className="inline-flex items-center gap-1 h-6 px-2 rounded-full bg-success/12 border border-success/30 text-success m3-label-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                {t("mobile.available", "Available")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectSection() {
  const { t } = useTranslation();

  const socials = [
    {
      leading: <FaPhone />,
      title: t("socials.phone", "Phone"),
      subtitle: "+98 904 451 9594",
      href: "tel:+989044519594",
    },
    {
      leading: <FaLinkedin />,
      title: t("socials.linkedin", "LinkedIn"),
      subtitle: "Taha Naghdi",
      href: "https://www.linkedin.com/in/taha-naghdi-74398a317",
    },
    {
      leading: <FaTelegram />,
      title: t("socials.telegram", "Telegram"),
      subtitle: "@rull_bazi",
      href: "https://t.me/rull_bazi",
    },
    {
      leading: <MdEmail />,
      title: t("socials.email", "Email"),
      subtitle: "tahanaghdi.dev@gmail.com",
      href: "mailto:tahanaghdi.dev@gmail.com",
    },
    {
      leading: <FaGithub />,
      title: t("socials.github", "GitHub"),
      subtitle: "@mtn-codes",
      href: "https://github.com/mtn-codes",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between px-1 mb-2">
        <div className="flex items-center gap-2">
          <p className="m3-label-large uppercase tracking-[0.14em] text-primary">
            {t("mobile.connect", "Connect")}
          </p>
          <span className="m3-label-medium text-base-content/45">
            {socials.length} {t("mobile.linksCount", "links")}
          </span>
        </div>
        <span className="m3-label-medium text-base-content/40">
          {t("mobile.opensInNewTab", "Opens in new tab")}
        </span>
      </div>

      <div className="rounded-3xl border border-base-300/60 bg-base-100 m3-elev-1 overflow-hidden divide-y divide-base-300/50">
        {socials.map((s) => (
          <a
            key={s.title}
            href={s.disabled ? undefined : s.href}
            target={s.disabled ? undefined : "_blank"}
            rel={s.disabled ? undefined : "noopener noreferrer"}
            className={`m3-tap block group transition-colors ${s.disabled
                ? "opacity-40 cursor-not-allowed pointer-events-none"
                : "active:bg-base-200/60"
              }`}
            aria-label={`Open ${s.title}`}
          >
            <M3ListItem
              leading={
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg group-hover:bg-primary/15 transition-colors">
                  {s.leading}
                </div>
              }
              title={s.title}
              subtitle={s.subtitle}
              trailing={
                !s.disabled && (
                  <FaExternalLinkAlt className="text-base-content/40 text-[11px] group-hover:text-primary transition-colors rtl:rotate-180" />
                )
              }
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function AppearanceSection({ onOpenSetting }) {
  const { t, i18n } = useTranslation();
  const { theme, font } = useTheme();

  const currentLangCode = i18n.language ? i18n.language.split("-")[0] : "fa";
  const currentLang = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

  return (
    <section>
      <div className="flex items-center gap-2 px-1 mb-2">
        <FaPalette className="text-sm text-primary" />
        <p className="m3-label-large uppercase tracking-[0.14em] text-primary font-bold">
          {t("mobile.appearance", "Appearance")}
        </p>
      </div>

      <div className="rounded-3xl border border-base-300/60 bg-base-100 m3-elev-1 overflow-hidden divide-y divide-base-300/50">
        {/* Row 1: Language */}
        <button
          type="button"
          onClick={() => onOpenSetting?.("language")}
          className="w-full m3-tap p-3.5 flex items-center justify-between text-left rtl:text-right hover:bg-base-200/60 active:bg-base-200 transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg flex-shrink-0">
              <FaGlobe />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-base-content leading-tight">
                {t("nav.language", "Language") || "زبان"}
              </p>
              <p className="text-xs text-base-content/60 mt-0.5 flex items-center gap-1.5 font-medium">
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </p>
            </div>
          </div>
          <FaChevronRight className="text-base-content/40 text-xs rtl:rotate-180 flex-shrink-0" />
        </button>

        {/* Row 2: Font */}
        <button
          type="button"
          onClick={() => onOpenSetting?.("font")}
          className="w-full m3-tap p-3.5 flex items-center justify-between text-left rtl:text-right hover:bg-base-200/60 active:bg-base-200 transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-base font-black flex-shrink-0">
              Aa
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-base-content leading-tight">
                {t("nav.fontFamily", "Font Family") || "قلم متن"}
              </p>
              <p
                className="text-xs text-base-content/60 mt-0.5 truncate font-medium"
                style={{ fontFamily: font }}
              >
                {font}
              </p>
            </div>
          </div>
          <FaChevronRight className="text-base-content/40 text-xs rtl:rotate-180 flex-shrink-0" />
        </button>

        {/* Row 3: Theme */}
        <button
          type="button"
          onClick={() => onOpenSetting?.("theme")}
          className="w-full m3-tap p-3.5 flex items-center justify-between text-left rtl:text-right hover:bg-base-200/60 active:bg-base-200 transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-lg flex-shrink-0">
              <FaPalette />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-base-content leading-tight">
                {t("nav.theme", "Theme") || "تم رنگی"}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-4 h-4 rounded border border-base-300 flex flex-wrap overflow-hidden flex-shrink-0 shadow-xs">
                  <div className="w-1/2 h-1/2 bg-primary" />
                  <div className="w-1/2 h-1/2 bg-secondary" />
                  <div className="w-1/2 h-1/2 bg-accent" />
                  <div className="w-1/2 h-1/2 bg-neutral" />
                </div>
                <span className="text-xs text-base-content/60 capitalize font-semibold">
                  {theme}
                </span>
              </div>
            </div>
          </div>
          <FaChevronRight className="text-base-content/40 text-xs rtl:rotate-180 flex-shrink-0" />
        </button>
      </div>
    </section>
  );
}

function PwaInstallSection() {
  return (
    <section className="px-1 pt-1 flex justify-center">
      <InstallAppButton variant="mobile" />
    </section>
  );
}

function DrawerFooter() {
  const { t } = useTranslation();
  return (
    <p className="text-center text-xs text-base-content/45 py-2">
      © {new Date().getFullYear()} {t("hero.name", "Taha Naghdi")} · v1.0.0
    </p>
  );
}

// ─── Drawer ─────────────────────────────────────────────────────────────────

export default function MobileDrawer({ open, onClose, mode = "menu" }) {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const isTheme = mode === "theme";
  const isAlerts = mode === "alerts";
  const isMenu = mode === "menu";

  // When triggered via theme mode (e.g. app-bar palette), open Theme modal directly
  useEffect(() => {
    if (open && isTheme) {
      setActiveModal("theme");
    }
  }, [open, isTheme]);

  const handleOpenSetting = (settingType) => {
    setActiveModal(settingType);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    if (isTheme) {
      onClose?.();
    }
  };

  return (
    <>
      <M3Sheet
        open={open}
        onClose={onClose}
        title={isTheme ? t("mobile.appearance", "Appearance") : undefined}
      >
        <div className="px-4 pb-2 space-y-5">
          {isMenu && (
            <>
              <ProfileCard />
              <ConnectSection />
              <AppearanceSection onOpenSetting={handleOpenSetting} />
              <PwaInstallSection />
              <DrawerFooter />
            </>
          )}

          {isAlerts && (
            <>
              <ProfileCard />
              <ConnectSection />
              <PwaInstallSection />
              <DrawerFooter />
            </>
          )}

          {isTheme && <AppearanceSection onOpenSetting={handleOpenSetting} />}
        </div>
      </M3Sheet>

      {/* Standalone large top-anchored popup modal */}
      <MobileSettingsDialog
        type={activeModal}
        open={Boolean(activeModal)}
        onClose={handleCloseModal}
      />
    </>
  );
}