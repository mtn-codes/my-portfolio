import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaDownload,
  FaUserGraduate,
  FaCode,
  FaFilm,
  FaVideo,
  FaBrain,
  FaRobot,
  FaCogs,
  FaLightbulb,
  FaMicrochip,
  FaLaptopCode,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ease = [0.22, 1, 0.36, 1];

// ─── COUNT UP ─────────────────────────────────────────────────────────────────
const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 36;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 28);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ─── TECH BADGE ───────────────────────────────────────────────────────────────
const TechBadge = ({ label, icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-base-200/80 border border-base-300/60 rounded-lg hover:border-primary/40 hover:bg-base-200 transition-all duration-200 cursor-default group"
  >
    <span
      className={`text-sm flex-shrink-0 ${color} group-hover:scale-110 transition-transform duration-200`}
    >
      {icon}
    </span>
    <span className="text-[11px] font-semibold text-base-content/75 whitespace-nowrap">
      {label}
    </span>
  </motion.div>
);

// ─── EXPANDED MODAL ───────────────────────────────────────────────────────────
const ExpandedModal = ({ onClose, techStack }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-base-300/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-base-100 rounded-3xl p-7 sm:p-10 max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-base-300/50"
      >
        <svg
          className="absolute top-4 left-4 rtl:left-auto rtl:right-4 w-7 h-7 opacity-[0.12]"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="2" />
        </svg>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 btn btn-circle btn-sm btn-ghost hover:bg-error/10 hover:text-error z-10"
        >
          <IoClose className="text-xl" />
        </button>
        <div className="flex items-center gap-4 mb-7">
          <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/30">
            <FaFilm className="text-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              {t("about.modalTitle", "Creating with Purpose & Innovation")}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              {t("about.modalSubtitle", "The Full Vision")}
            </p>
          </div>
        </div>
        <div className="text-sm sm:text-[15px] leading-[1.85] text-base-content/75 space-y-4">
          <p>{t("about.expandedBio.p1")}</p>
          <p>{t("about.expandedBio.p2")}</p>
          <p>{t("about.expandedBio.p3")}</p>
          <p>{t("about.expandedBio.p4")}</p>
        </div>
        <div className="mt-7 pt-6 border-t border-base-300/40">
          <p className="text-[10px] uppercase tracking-[0.2em] text-base-content/35 font-bold mb-3">
            {t("about.technicalArsenal", "Technical Arsenal")}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((item, idx) => (
              <TechBadge key={idx} {...item} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── ABOUT ────────────────────────────────────────────────────────────────────
const About = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const techStack = [
    { label: t("about.tech.cinematography", "Cinematography"), icon: <FaFilm />, color: "text-primary" },
    { label: t("about.tech.lighting", "Cinematic Lighting"), icon: <FaLightbulb />, color: "text-warning" },
    { label: t("about.tech.motion", "Motion Graphics"), icon: <FaVideo />, color: "text-info" },
    { label: t("about.tech.aiContent", "AI Media Production"), icon: <FaBrain />, color: "text-[#FFCA28]" },
    { label: t("about.tech.aiAgents", "AI Agents & LLMs"), icon: <FaRobot />, color: "text-error" },
    { label: t("about.tech.fullstack", "Full-Stack Dev"), icon: <FaLaptopCode />, color: "text-success" },
    { label: t("about.tech.webApps", "Modern Web Apps"), icon: <FaCode />, color: "text-[#6DB33F]" },
    { label: t("about.tech.automation", "Industrial Automation"), icon: <FaCogs />, color: "text-[#336791]" },
    { label: t("about.tech.gadgets", "Smart Hardware & IoT"), icon: <FaMicrochip />, color: "text-[#7F52FF]" },
  ];

  const stats = [
    { value: 4, suffix: "+", label: t("about.stats.years", "Years") },
    { value: 25, suffix: "+", label: t("about.stats.projects", "Projects") },
    { value: 10, suffix: "+", label: t("about.stats.innovations", "Innovations") },
  ];

  const infoItems = [
    {
      icon: <FaMapMarkerAlt />,
      label: t("about.info.locationLabel", "Location"),
      value: t("about.info.locationValue", "Iran"),
      color: "text-error",
      bg: "bg-error/10 border-error/20",
    },
    {
      icon: <FaEnvelope />,
      label: t("about.info.emailLabel", "Email"),
      value: "tahanaghdi.dev@gmail.com",
      color: "text-info",
      bg: "bg-info/10 border-info/20",
      href: "mailto:tahanaghdi.dev@gmail.com",
      truncate: true,
    },
    {
      icon: <FaUserGraduate />,
      label: t("about.info.roleLabel", "Role"),
      value: t("about.info.roleValue", "Filmmaker & Full-Stack Developer"),
      color: "text-warning",
      bg: "bg-warning/10 border-warning/20",
    },
    {
      icon: <FaDownload />,
      label: t("about.info.resumeLabel", "Resume"),
      value: t("about.info.resumeValue", "Download CV"),
      color: "text-success",
      bg: "bg-success/10 border-success/20",
      href: "/cv.pdf",
      download: "Taha_Naghdi_CV.pdf",
      isLink: true,
    },
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
  };

  return (
    <>
      <section
        id="about"
        className="
          relative w-full overflow-hidden
          bg-base-100 text-base-content
          lg:h-screen lg:flex lg:items-center
          py-20 lg:py-0
          px-5 sm:px-10 lg:px-16 xl:px-20
        "
      >
        {/* ══ BACKGROUND ══════════════════════════════════════════════════ */}
        <div className="pointer-events-none select-none absolute inset-0">
          <div className="absolute -top-32 -right-48 w-[560px] h-[560px] rounded-full bg-primary/[0.06] blur-[130px]" />
          <div className="absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-secondary/[0.05] blur-[110px]" />
          <div className="absolute top-1/2 left-1/3 w-[280px] h-[280px] rounded-full bg-accent/[0.04] blur-[80px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.028]">
            <defs>
              <pattern id="about-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
          <svg className="absolute inset-0 w-full h-full opacity-[0.018]">
            <defs>
              <pattern id="about-diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-diag)" />
          </svg>
          <div className="absolute left-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          <div className="absolute right-0 top-1/3 w-px h-72 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
          <svg className="absolute top-5 left-5 w-9 h-9 opacity-[0.10]" viewBox="0 0 48 48" fill="none">
            <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute top-5 right-5 w-9 h-9 opacity-[0.10]" viewBox="0 0 48 48" fill="none">
            <path d="M48 16 L48 0 L32 0" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute bottom-5 left-5 w-9 h-9 opacity-[0.10]" viewBox="0 0 48 48" fill="none">
            <path d="M0 32 L0 48 L16 48" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute bottom-5 right-5 w-9 h-9 opacity-[0.10]" viewBox="0 0 48 48" fill="none">
            <path d="M48 32 L48 48 L32 48" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ══ CONTENT ════════════════════════════════════════════════════ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Section eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 mb-8"
          >
            <div className="h-px w-8 bg-base-300" />
            <span className="text-[10px] text-base-content/30 uppercase tracking-[0.24em] font-semibold">
              {t("about.eyebrow", "Who I Am")}
            </span>
            <div className="h-px w-8 bg-base-300" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="w-full"
            >
              {/* ── THREE-COLUMN LAYOUT ─────────────────────────────────── */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 xl:gap-10">
                {/* ── LEFT: Text + stats + CTAs ──────────────────────────── */}
                <div
                  className="w-full lg:flex-1 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left rtl:lg:text-right"
                >
                  {/* Badge */}
                  <div>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.13em] uppercase bg-primary/10 border border-primary/25 text-primary">
                      <FaFilm className="text-[10px]" />
                      {t("about.badge", "Creator & Engineer")}
                    </span>
                  </div>

                  {/* Heading */}
                  <div className="space-y-0.5">
                    <h2 className="font-extrabold tracking-tight leading-[1.07] text-3xl sm:text-4xl xl:text-[2.6rem]">
                      {t("about.title", "About")}{" "}
                      <span className="relative inline-block">
                        <span className="text-primary">{t("about.me", "Me")}</span>
                        <motion.div
                          key={i18n.language}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            delay: 0.2,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary/40 origin-left rtl:origin-right"
                        />
                      </span>
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-base-content/30 font-medium">
                      {t("about.tagline", "Filmmaker · Developer · Problem Solver")}
                    </p>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-sm opacity-70 leading-[1.85] max-w-md lg:max-w-none my-4.5"
                  >
                    {t("about.shortBio")}
                  </p>

                  {/* Read more */}
                  <div>
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="inline-flex items-center gap-2 text-[12px] font-bold text-primary hover:gap-3 transition-all duration-200 group"
                    >
                      {t("about.readFullVision", "Read Full Vision")}
                      <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </button>
                  </div>

                  {/* Stats strip */}
                  <div
                    className="w-full flex items-center justify-center lg:justify-start gap-8 py-4 px-6 bg-base-200/50 border border-base-300/50 rounded-2xl"
                  >
                    {stats.map((s, i) => (
                      <div key={i} className="contents">
                        {i > 0 && <div className="w-px h-8 bg-base-300" />}
                        <div className="flex flex-col items-center gap-0.5">
                          <p className="text-2xl font-extrabold text-primary tracking-tight">
                            <CountUp target={s.value} suffix={s.suffix} />
                          </p>
                          <p className="text-[9px] uppercase tracking-[0.18em] text-base-content/35 font-semibold">
                            {s.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CENTER: Photo ──────────────────────────────────────── */}
                <div className="flex-shrink-0 flex justify-center order-first lg:order-none">
                  <div className="relative group">
                    {/* Spin ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                      className="absolute"
                      style={{
                        inset: "-16px",
                        background:
                          "conic-gradient(from 0deg, transparent 55%, oklch(var(--p)/0.45) 100%)",
                        borderRadius: "26px",
                      }}
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                      className="absolute border border-dashed border-base-300/30"
                      style={{ inset: "-32px", borderRadius: "30px" }}
                    />

                    {/* Float */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-2 rounded-2xl bg-primary/15 blur-3xl group-hover:bg-primary/28 transition-all duration-700" />

                      <img
                        src="/img/about_home.jpg"
                        alt="Taha Naghdi — Filmmaker & Developer"
                        className="
                          relative z-10 rounded-3xl object-cover object-top
                          border-[3px] border-primary/55 ring-[8px] ring-primary/8
                          group-hover:border-primary group-hover:scale-[1.02]
                          transition-all duration-500
                          w-44 h-52
                          sm:w-52 sm:h-60
                          lg:w-[200px] lg:h-[240px]
                          xl:w-[230px] xl:h-[272px]
                        "
                      />

                      {/* Chip: Role */}
                      <motion.div
                        key={i18n.language}
                        initial={{ opacity: 0, scale: 0.5, x: -14, y: -8 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                          damping: 16,
                        }}
                        className="absolute top-4 ltr:-left-12 ltr:right-auto rtl:-right-12 rtl:left-auto z-20 flex items-center gap-2 bg-primary text-primary-content rounded-2xl px-2.5 py-2 shadow-lg shadow-primary/40"
                      >
                        <FaFilm className="text-[11px] opacity-90 flex-shrink-0" />
                        <div className="leading-tight text-left rtl:text-right">
                          <p className="text-[8px] opacity-60 uppercase tracking-wider font-medium">
                            {t("about.info.roleLabel", "Role")}
                          </p>
                          <p className="text-[10px] font-bold mt-0.5">
                            {t("about.info.roleValue", "Filmmaker & Dev")}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* ── RIGHT: Info + Tech ─────────────────────────────────── */}
                <div
                  className="w-full lg:flex-1 flex flex-col gap-4 items-center text-center lg:items-start lg:text-left rtl:lg:text-right"
                >
                  {/* Info grid */}
                  <div className="w-full grid grid-cols-2 gap-2">
                    {infoItems.map((info, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2 }}
                        className={`flex items-center gap-2 p-3 bg-base-200/60 border border-base-300/50 rounded-xl hover:border-primary/25 hover:bg-base-200/90 transition-all duration-200 group ${
                          i === infoItems.length - 1 && infoItems.length % 2 !== 0
                            ? "col-span-2"
                            : ""
                        }`}
                      >
                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs flex-shrink-0 border ${info.bg} ${info.color} group-hover:scale-110 transition-transform duration-200`}
                        >
                          {info.icon}
                        </div>
                        <div className="min-w-0 text-left rtl:text-right">
                          <p className="text-[8px] uppercase tracking-[0.14em] text-base-content/35 font-semibold">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-[11px] font-bold mt-0.5 block ${
                                info.truncate ? "truncate" : ""
                              } text-base-content/80 hover:text-primary transition-colors duration-150`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p
                              className={`text-[11px] font-bold text-base-content/80 mt-0.5 ${
                                info.truncate ? "truncate" : ""
                              }`}
                            >
                              {info.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 w-full"
                  >
                    <div className="h-px w-8 bg-base-300" />
                    <span className="text-[9px] text-base-content/25 uppercase tracking-[0.22em] flex-shrink-0">
                      {t("about.coreExpertise", "Core Expertise")}
                    </span>
                    <div className="h-px flex-1 max-w-[60px] bg-base-300" />
                  </div>

                  {/* Tech stack */}
                  <div
                    className="flex flex-wrap gap-1.5 justify-center lg:justify-start rtl:lg:justify-start"
                  >
                    {techStack.map((tech, i) => (
                      <TechBadge key={i} {...tech} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {isExpanded && (
          <ExpandedModal onClose={() => setIsExpanded(false)} techStack={techStack} />
        )}
      </AnimatePresence>
    </>
  );
};

export default About;