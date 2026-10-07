// MobileNotFound — simple 404 page styled with M3 Empty State.

import { Link } from "react-router-dom";
import { FaHome, FaCompass } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import M3EmptyState from "../components/M3EmptyState";
import M3Button from "../components/M3Button";

export default function MobileNotFound() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen min-h-[100dvh] bg-base-100 flex items-center justify-center px-6 pt-14 pb-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="w-full"
        >
          <M3EmptyState
            icon={<FaCompass />}
            title={t("mobile.notFoundTitle", "Page not found")}
            subtitle={t("mobile.notFoundSubtitle", "The link you followed may be broken, or the page may have been removed.")}
            action={
              <Link to="/">
                <M3Button variant="filled" icon={<FaHome />}>
                  {t("mobile.backToHome", "Back to Home")}
                </M3Button>
              </Link>
            }
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}