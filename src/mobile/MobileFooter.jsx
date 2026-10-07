// Compact mobile footer — used on pages without a bottom NavigationBar focus
import { useTranslation } from "react-i18next";

export default function MobileFooter() {
  const { t } = useTranslation();
  return (
    <footer className="px-4 py-6 text-center text-xs text-base-content/45">
      © {new Date().getFullYear()} {t("hero.name", "Taha Naghdi")} · {t("footer.copyright", "All rights reserved.")}
    </footer>
  );
}