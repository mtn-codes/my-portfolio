import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPalette,
  FaHome,
  FaUser,
  FaCode,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const themeMenuRef = useRef(null);
  const navbarRef = useRef(null);

  const dropdownRefs = {
    background: useRef(null),
    portfolio: useRef(null),
  };

  // Nav structure
  const navItems = [
    { name: t("nav.home", "Home"), path: "/", icon: <FaHome className="text-[11px]" /> },
    {
      name: t("nav.about", "About"),
      key: "background",
      icon: <FaUser className="text-[11px]" />,
      items: [
        { name: t("nav.education", "Education"), path: "/education-experience#education" },
        { name: t("nav.experience", "Experience"), path: "/education-experience#experience" },
      ],
    },
    {
      name: t("nav.portfolio", "Portfolio"),
      key: "portfolio",
      icon: <FaCode className="text-[11px]" />,
      items: [
        { name: t("nav.skills", "Skills"), path: "/skills-projects#skills" },
        { name: t("nav.projects", "Projects"), path: "/skills-projects#projects" },
      ],
    },
    { name: t("contact.eyebrow", "Contact"), path: "/contact", icon: <MdWork className="text-[11px]" /> },
  ];

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click outside
  useEffect(() => {
    const handler = (e) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(e.target)) {
        setIsThemeMenuOpen(false);
      }
      if (
        openDropdown &&
        dropdownRefs[openDropdown]?.current &&
        !dropdownRefs[openDropdown].current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openDropdown]);

  // Close menus on route navigation
  useEffect(() => {
    setIsThemeMenuOpen(false);
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (path, external = false) => {
    setIsOpen(false);
    setOpenDropdown(null);

    if (external || path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
      return;
    }

    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (location.pathname !== route) {
        navigate(route, { state: { hash } });
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  useEffect(() => {
    if (location.state?.hash) {
      setTimeout(() => {
        document.getElementById(location.state.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const isActive = (path) => {
    const [route, hash] = path.split("#");
    if (hash) {
      return location.pathname === route && location.hash === `#${hash}`;
    }
    return location.pathname === path;
  };

  const isDropdownActive = (items) => items.some((item) => isActive(item.path));

  return (
    <>
      <nav
        ref={navbarRef}
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-base-100/95 backdrop-blur-md shadow-lg shadow-base-300/20 border-b border-base-300/30"
              : "bg-base-100/80 backdrop-blur-sm"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo with Personal Profile Photo Avatar ────────────────────────────────────────── */}
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2.5 group"
            >
              {/* Profile Photo Avatar */}
              <div
                className="
                w-8 h-8 rounded-full overflow-hidden border border-primary/40 ring-2 ring-primary/10 flex items-center justify-center
                shadow-md shadow-primary/20 flex-shrink-0
                group-hover:scale-105 transition-transform duration-200
              "
              >
                <img
                  src="/img/about_photo.jpg"
                  alt={t("hero.name", "Taha Naghdi")}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span
                className="
                text-lg font-extrabold tracking-tight
                text-base-content group-hover:text-primary
                transition-colors duration-200 hidden sm:block
              "
              >
                {t("hero.shortName", "Taha")}
                <span className="text-primary">.</span>
              </span>
            </button>

            {/* ── Desktop Nav ──────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item, idx) => {
                if (item.items) {
                  const key = item.key || item.name.toLowerCase();
                  const active = isDropdownActive(item.items);
                  return (
                    <div key={idx} className="relative" ref={dropdownRefs[key]}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                        className={`
                          flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium
                          transition-all duration-200
                          ${
                            active
                              ? "text-primary bg-primary/10"
                              : "text-base-content/70 hover:text-base-content hover:bg-base-200/70"
                          }
                        `}
                      >
                        {item.icon}
                        {item.name}
                        <motion.span
                          animate={{ rotate: openDropdown === key ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronDown className="text-[9px] opacity-60" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openDropdown === key && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="
                              absolute top-full ltr:left-0 rtl:right-0 mt-1.5
                              min-w-[180px] bg-base-100
                              rounded-xl shadow-xl border border-base-300/50
                              overflow-hidden z-50 p-1
                            "
                          >
                            {item.items.map((sub, si) => (
                              <button
                                key={si}
                                onClick={() => handleNavClick(sub.path)}
                                className={`
                                  w-full text-left rtl:text-right px-3.5 py-2.5 text-[13px] rounded-lg
                                  transition-colors duration-150
                                  ${
                                    isActive(sub.path)
                                      ? "bg-primary text-primary-content font-semibold"
                                      : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                                  }
                                `}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleNavClick(item.path, item.external)}
                    className={`
                      flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium
                      transition-all duration-200
                      ${
                        item.external
                          ? "text-primary border border-primary/30 hover:bg-primary/10 ml-1 rtl:ml-0 rtl:mr-1"
                          : isActive(item.path)
                          ? "text-primary bg-primary/10"
                          : "text-base-content/70 hover:text-base-content hover:bg-base-200/70"
                      }
                    `}
                  >
                    {item.icon}
                    {item.name}
                    {item.external && <span className="text-[9px] opacity-60">↗</span>}
                  </button>
                );
              })}
            </div>

            {/* ── Right Controls ───────────────────────────────── */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Language selector */}
              <LanguageSelector />

              {/* Theme toggle */}
              <div className="relative" ref={themeMenuRef}>
                <button
                  onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                  className={`
                    flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg text-[13px] font-medium
                    transition-all duration-200
                    ${
                      isThemeMenuOpen
                        ? "text-primary bg-primary/10"
                        : "text-base-content/60 hover:text-base-content hover:bg-base-200/70"
                    }
                  `}
                  title={t("nav.theme", "Theme")}
                >
                  <FaPalette className="text-xs sm:text-base" />
                  <span className="hidden sm:inline">{t("nav.theme", "Theme")}</span>
                  <motion.span
                    animate={{ rotate: isThemeMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaChevronDown className="text-[9px] opacity-60" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isThemeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="
                        absolute ltr:right-0 ltr:left-auto rtl:left-0 rtl:right-auto top-full mt-1.5
                        w-[calc(100vw-2rem)] max-w-sm sm:max-w-md sm:w-96
                        bg-base-100 rounded-2xl shadow-2xl border border-base-300/60
                        p-4 z-50
                      "
                    >
                      <ThemeSelector />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  lg:hidden w-9 h-9 flex items-center justify-center
                  rounded-lg text-base-content/70 hover:bg-base-200
                  transition-colors duration-200
                "
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <FaTimes />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <FaBars />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-base-300/30 backdrop-blur-sm"
              style={{ top: "64px" }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="
                lg:hidden fixed ltr:right-0 ltr:border-l rtl:left-0 rtl:border-r z-50 w-72
                bg-base-100 border-base-300/40
                shadow-2xl overflow-y-auto
              "
              style={{ top: "64px", bottom: 0 }}
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-base-300/40 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.18em] text-base-content/35 font-semibold">
                  {t("nav.navigation", "Navigation")}
                </p>
                <LanguageSelector />
              </div>

              <nav className="p-3 space-y-1">
                {navItems.map((item, idx) => {
                  if (item.items) {
                    return (
                      <div key={idx}>
                        <div
                          className="
                          flex items-center gap-2.5 px-4 py-3 rounded-xl text-[13px] font-semibold
                          text-base-content/50 uppercase tracking-wider
                        "
                        >
                          {item.icon}
                          {item.name}
                        </div>
                        <div className="ltr:ml-4 rtl:mr-4 space-y-0.5">
                          {item.items.map((sub, si) => (
                            <button
                              key={si}
                              onClick={() => handleNavClick(sub.path)}
                              className={`
                                w-full text-left rtl:text-right px-4 py-2.5 rounded-lg text-[13px] font-medium
                                transition-colors duration-150
                                ${
                                  isActive(sub.path)
                                    ? "bg-primary text-primary-content font-semibold"
                                    : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                                }
                              `}
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.path, item.external)}
                      className={`
                        w-full text-left rtl:text-right flex items-center gap-2.5
                        px-4 py-3 rounded-xl text-[13px] font-medium
                        transition-colors duration-150
                        ${
                          item.external
                            ? "text-primary border border-primary/25 hover:bg-primary/8"
                            : isActive(item.path)
                            ? "bg-primary text-primary-content"
                            : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                        }
                      `}
                    >
                      {item.icon}
                      {item.name}
                      {item.external && <span className="ltr:ml-auto rtl:mr-auto text-xs opacity-50">↗</span>}
                    </button>
                  );
                })}
              </nav>

              {/* Bottom: contact CTA */}
              <div className="p-4 mt-auto border-t border-base-300/40">
                <a
                  href="mailto:tahanaghdi.dev@gmail.com"
                  className="btn btn-primary btn-sm w-full gap-2"
                >
                  <MdWork className="text-sm" />
                  {t("nav.hireMe", "Hire Me")}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;