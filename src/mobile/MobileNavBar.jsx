// MobileNavBar — bottom NavigationBar with 4 destinations + center FAB.
// Designed to feel like a modern Android bottom nav: tonal surface,
// pill-shaped active indicator behind each icon, prominent center FAB.

import { FaHome, FaCode, FaUserGraduate, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import M3NavigationBar from "./components/M3NavigationBar";
import M3NavigationBarItem from "./components/M3NavigationBarItem";
import M3FAB from "./components/M3FAB";

export default function MobileNavBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const left = (
    <>
      <M3NavigationBarItem to="/" end icon={<FaHome />} label={t("nav.home", "Home")} />
      <M3NavigationBarItem
        to="/skills-projects#projects"
        icon={<FaBriefcase />}
        label={t("nav.projects", "Projects")}
      />
    </>
  );

  const right = (
    <>
      <M3NavigationBarItem
        to="/education-experience"
        icon={<FaUserGraduate />}
        label={t("mobile.journey", "Journey")}
      />
      <M3NavigationBarItem
        to="/skills-projects#skills"
        icon={<FaCode />}
        label={t("nav.skills", "Skills")}
      />
    </>
  );

  const fabSlot = (
    <div className="-mt-7">
      <M3FAB
        variant="filled"
        size="default"
        icon={<FaEnvelope className="text-xl" />}
        ariaLabel={t("mobile.contact", "Contact")}
        onClick={() => navigate("/contact")}
      />
    </div>
  );

  return <M3NavigationBar left={left} right={right} fabSlot={fabSlot} />;
}