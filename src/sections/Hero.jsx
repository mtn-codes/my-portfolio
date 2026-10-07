import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaFilm,
  FaBrain,
  FaCode,
  FaCogs,
  FaTelegram,
  FaRocket,
  FaVideo,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useRef } from "react";

// ─── MAGNETIC SOCIAL ──────────────────────────────────────────────────────────
const MagneticSocial = ({ icon, href, label, disabled }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 17 });
  const sy = useSpring(y, { stiffness: 220, damping: 17 });

  const onMove = (e) => {
    if (disabled) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.38);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.38);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      aria-label={label}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={disabled ? undefined : { scale: 1.22 }}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      className={`
        w-10 h-10 flex items-center justify-center rounded-xl text-lg
        bg-base-200 border border-base-300
        transition-colors duration-200 relative group
        ${
          disabled
            ? "opacity-35 cursor-not-allowed text-base-content/30"
            : "text-base-content/50 hover:text-primary hover:border-primary/50 hover:bg-primary/10"
        }
      `}
    >
      {icon}
      {/* Tooltip */}
      <span
        className="
        absolute -top-8 left-1/2 -translate-x-1/2
        text-[9px] font-semibold uppercase tracking-wider
        bg-base-300 text-base-content px-2 py-0.5 rounded-md
        opacity-0 group-hover:opacity-100 pointer-events-none
        transition-opacity duration-150 whitespace-nowrap z-30
      "
      >
        {label}
      </span>
    </motion.a>
  );
};

// ─── STAT CHIP ────────────────────────────────────────────────────────────────
const StatChip = ({ icon, label, sub }) => (
  <div
    className="
    flex items-center gap-2.5
    bg-base-200/80 border border-base-300/60
    rounded-xl px-3.5 py-2.5
    hover:border-primary/30 hover:bg-base-200
    transition-all duration-200
  "
  >
    <span className="text-xl flex-shrink-0">{icon}</span>
    <div className="text-left rtl:text-right">
      <p className="text-[10px] font-semibold text-base-content/40 uppercase tracking-wider leading-none">
        {sub}
      </p>
      <p className="text-[13px] font-bold text-base-content leading-tight mt-0.5">
        {label}
      </p>
    </div>
  </div>
);

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { t, i18n } = useTranslation();
  const ease = [0.22, 1, 0.36, 1];

  const typewriterWords = t("hero.typewriterWords", { returnObjects: true }) || [
    "Filmmaking & Content Production",
    "AI Content & Digital Ideation",
    "Programming & AI/App Development",
    "Industrial Automation & Gadget Building",
  ];

  const badges = [
    {
      icon: <FaFilm className="text-primary" />,
      label: t("hero.badges.film.label", "Filmmaking"),
      sub: t("hero.badges.film.sub", "Cinema · Motion"),
    },
    {
      icon: <FaBrain className="text-info" />,
      label: t("hero.badges.ai.label", "AI & Media"),
      sub: t("hero.badges.ai.sub", "GenAI · Strategy"),
    },
    {
      icon: <FaCode className="text-success" />,
      label: t("hero.badges.dev.label", "Development"),
      sub: t("hero.badges.dev.sub", "Full-Stack · AI Agents"),
    },
    {
      icon: <FaCogs className="text-warning" />,
      label: t("hero.badges.automation.label", "Automation"),
      sub: t("hero.badges.automation.sub", "Robotics · Gadgets"),
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/mtn-codes",
      label: t("socials.github", "GitHub"),
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/taha-naghdi-74398a317",
      label: t("socials.linkedin", "LinkedIn"),
    },
    {
      icon: <FaTelegram />,
      href: "https://t.me/rull_bazi",
      label: t("socials.telegram", "Telegram"),
    },
    {
      icon: <MdEmail />,
      href: "mailto:tahanaghdi.dev@gmail.com",
      label: t("socials.email", "Email"),
    },
    {
      icon: <FaPhone />,
      href: "tel:+989044519594",
      label: t("socials.phone", "Phone"),
    },
    {
      icon: <FaFacebook />,
      href: "#",
      label: t("socials.facebookComingSoon", "Facebook (coming soon)"),
      disabled: true,
    },
  ];

  return (
    <section
      id="hero"
      className="
        relative w-full overflow-hidden
        bg-base-100 text-base-content
        lg:min-h-[calc(100vh-var(--nav-h,64px))] lg:flex lg:items-center
        flex items-center
        px-5 sm:px-10 lg:px-16 xl:px-20
        pt-24 pb-14
        lg:py-8
      "
    >
      {/* ══ BACKGROUND ══════════════════════════════════════════════════════ */}
      <div className="pointer-events-none select-none absolute inset-0">
        {/* Multi-layer glow system */}
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-primary/[0.07] blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/[0.06] blur-[110px]" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[90px]" />

        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.028]">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Diagonal lines accent */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.018]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>

        {/* Edge accent lines */}
        <div className="absolute left-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
        <div className="absolute right-0 top-1/3 w-px h-72 bg-gradient-to-b from-transparent via-primary/18 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />

        {/* Corner decorative brackets */}
        <svg className="absolute top-6 left-6 w-12 h-12 opacity-[0.12]" viewBox="0 0 48 48" fill="none">
          <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute top-6 right-6 w-12 h-12 opacity-[0.12]" viewBox="0 0 48 48" fill="none">
          <path d="M48 16 L48 0 L32 0" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-6 left-6 w-12 h-12 opacity-[0.12]" viewBox="0 0 48 48" fill="none">
          <path d="M0 32 L0 48 L16 48" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-6 right-6 w-12 h-12 opacity-[0.12]" viewBox="0 0 48 48" fill="none">
          <path d="M48 32 L48 48 L32 48" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* ══ CONTENT ═════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div
          className="
          flex flex-col-reverse items-center
          gap-14 sm:gap-16
          lg:flex-row lg:gap-12 lg:items-center
          xl:gap-20
        "
        >
          {/* ────────────────────────────────────────────────────────────────
              LEFT  —  Text content with animated language transitions
          ──────────────────────────────────────────────────────────────── */}
          <div
            className="
              flex-1 flex flex-col items-center text-center
              lg:items-start lg:text-left rtl:lg:text-right
              gap-5 lg:gap-4.5 xl:gap-5 w-full
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left rtl:lg:text-right gap-5 lg:gap-4.5 xl:gap-5 w-full"
              >
                {/* Status badge */}
                <div>
                  <span
                    className="
                    inline-flex items-center gap-2.5 px-4 py-1.5
                    rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase
                    bg-success/10 border border-success/25 text-success
                  "
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-65" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
                    </span>
                    {t("hero.status", "Open to opportunities")}
                  </span>
                </div>

                {/* Typewriter role */}
                <p
                  className="font-mono text-xs sm:text-[13px] tracking-[0.18em] uppercase font-bold text-primary/70 min-h-[1.4em]"
                >
                  <Typewriter
                    key={i18n.language}
                    words={typewriterWords}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={65}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </p>

                {/* Name */}
                <h1
                  className="
                    font-extrabold tracking-tight leading-[1.06]
                    text-4xl sm:text-5xl md:text-6xl
                    lg:text-5xl xl:text-[3.8rem] 2xl:text-7xl
                  "
                >
                  {t("hero.greeting", "Hi, I'm")}{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">{t("hero.name", "Taha Naghdi")}</span>
                    {/* Underline accent */}
                    <motion.div
                      key={i18n.language}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, ease }}
                      className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary/40 origin-left rtl:origin-right"
                    />
                  </span>
                </h1>

                {/* Tagline */}
                <p
                  className="text-[11px] uppercase tracking-[0.22em] text-base-content/35 font-medium -mt-1"
                >
                  {t("hero.tagline", "Filmmaker · Developer · Innovator")}
                </p>

                {/* Description */}
                <p
                  className="text-sm sm:text-[15px] opacity-70 leading-[1.8] max-w-md lg:max-w-none"
                >
                  {t("hero.description")}
                </p>

                {/* Mini stat chips */}
                <div
                  className="flex flex-wrap gap-2 justify-center lg:justify-start rtl:lg:justify-start"
                >
                  {badges.map((b) => (
                    <StatChip key={b.label} {...b} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 w-full sm:w-auto"
                >
                  <Link
                    to="/skills-projects#projects"
                    className="
                      btn btn-primary w-full sm:w-auto px-8 gap-2
                      shadow-lg shadow-primary/25
                      hover:shadow-xl hover:shadow-primary/35
                      hover:-translate-y-0.5 transition-all duration-200
                    "
                  >
                    <FaRocket className="text-sm" />
                    {t("hero.cta.viewProjects", "View Projects")}
                  </Link>
                  <a
                    href="#contact"
                    className="
                      btn btn-outline w-full sm:w-auto px-8 gap-2
                      hover:border-primary/50 hover:bg-primary/8
                      hover:-translate-y-0.5 transition-all duration-200
                    "
                  >
                    <MdEmail className="text-sm" />
                    {t("hero.cta.connect", "Let's Connect")}
                  </a>
                </div>

                {/* Divider */}
                <div
                  className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 w-full"
                >
                  <div className="h-px w-8 bg-base-300" />
                  <span className="text-[9px] text-base-content/25 uppercase tracking-[0.22em] flex-shrink-0">
                    {t("hero.connectLabel", "Connect")}
                  </span>
                  <div className="h-px flex-1 max-w-[80px] bg-base-300" />
                </div>

                {/* Socials */}
                <div
                  className="flex justify-center lg:justify-start rtl:lg:justify-start gap-2 flex-wrap"
                >
                  {socials.map((s) => (
                    <MagneticSocial key={s.label} {...s} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ────────────────────────────────────────────────────────────────
              RIGHT  —  Profile photo with floating cards
          ──────────────────────────────────────────────────────────────── */}
          <motion.div
            className="flex-shrink-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.82, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <div className="relative group">
              {/* Outer slow-spin ring with gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  inset: "-22px",
                  background:
                    "conic-gradient(from 0deg, transparent 60%, oklch(var(--p)/0.5) 100%)",
                  borderRadius: "50%",
                }}
              />

              {/* Second ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border border-dashed border-base-300/40"
                style={{ inset: "-46px" }}
              />

              {/* Floating dots on outer ring */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full"
                  style={{
                    inset: "-22px",
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_3px] shadow-primary/40"
                    style={{
                      top:
                        i === 0
                          ? "-6px"
                          : i === 2
                          ? "calc(100% - 6px)"
                          : "calc(50% - 6px)",
                      left:
                        i === 3
                          ? "-6px"
                          : i === 1
                          ? "calc(100% - 6px)"
                          : "calc(50% - 6px)",
                    }}
                  />
                </motion.div>
              ))}

              {/* Float animation */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow backdrop */}
                <div
                  className="
                  absolute inset-2 rounded-full bg-primary/20 blur-3xl
                  group-hover:bg-primary/35 transition-all duration-700
                "
                />

                {/* Real User Photo */}
                <img
                  src="/img/about_photo.jpg"
                  alt={`${t("hero.name", "Taha Naghdi")} — ${t("about.info.roleValue", "Filmmaker & Full-Stack Developer")}`}
                  className="
                    relative z-10 rounded-full object-cover object-top
                    border-[3px] border-primary/60
                    ring-[10px] ring-primary/10
                    group-hover:border-primary group-hover:scale-[1.025]
                    transition-all duration-500
                    w-56 h-56
                    sm:w-64 sm:h-64
                    md:w-72 md:h-72
                    lg:w-[290px] lg:h-[290px]
                    xl:w-[330px] xl:h-[330px]
                    2xl:w-[370px] 2xl:h-[370px]
                  "
                />

                {/* ── Floating chip: Creative & Tech (bottom-outer: bottom-right in LTR, bottom-left in RTL) ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 16 }}
                  className="
                    absolute -bottom-4 ltr:-right-6 ltr:left-auto rtl:-left-6 rtl:right-auto z-20
                    flex items-center gap-2.5
                    bg-base-100 border border-base-300
                    rounded-2xl px-3.5 py-2.5
                    shadow-[0_8px_32px_rgba(0,0,0,0.18)]
                  "
                >
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <FaFilm className="text-primary text-[16px]" />
                    <span className="text-base-content/25 text-xs">+</span>
                    <FaCode className="text-success text-[15px]" />
                  </div>
                  <div className="text-left rtl:text-right leading-tight">
                    <p className="text-[9px] text-base-content/35 uppercase tracking-wider font-medium">
                      {t("hero.chips.creativeTech.title", "Creative & Tech")}
                    </p>
                    <p className="text-[11px] font-bold text-base-content mt-0.5 whitespace-nowrap">
                      {t("hero.chips.creativeTech.sub", "Cinema · AI · Dev")}
                    </p>
                  </div>
                </motion.div>

                {/* ── Floating chip: Role (top-inner: top-left in LTR, top-right in RTL) ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 16 }}
                  className="
                    absolute top-4 ltr:-left-10 ltr:right-auto rtl:-right-10 rtl:left-auto z-20
                    flex items-center gap-2.5
                    bg-primary text-primary-content
                    rounded-2xl px-3.5 py-2.5
                    shadow-lg shadow-primary/40
                  "
                >
                  <FaVideo className="text-[15px] flex-shrink-0 opacity-90" />
                  <div className="text-left rtl:text-right leading-tight">
                    <p className="text-[9px] opacity-60 uppercase tracking-wider font-medium">
                      {t("hero.chips.role.title", "Filmmaker & Dev")}
                    </p>
                    <p className="text-[11px] font-bold mt-0.5 whitespace-nowrap">
                      {t("hero.chips.role.sub", "Directing & Code")}
                    </p>
                  </div>
                </motion.div>

                {/* ── Floating chip: Focus (bottom-inner: bottom-16 -left-12 in LTR, bottom-16 -right-12 in RTL) ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200, damping: 16 }}
                  className="
                    absolute bottom-16 ltr:-left-12 ltr:right-auto rtl:-right-12 rtl:left-auto z-20
                    flex items-center gap-2
                    bg-base-200 border border-base-300
                    rounded-xl px-3 py-2
                    shadow-md
                  "
                >
                  <FaCogs className="text-warning text-base flex-shrink-0" />
                  <div className="text-left rtl:text-right leading-tight">
                    <p className="text-[9px] text-base-content/35 uppercase tracking-wider font-medium">
                      {t("hero.chips.focus.title", "Focus")}
                    </p>
                    <p className="text-[11px] font-bold text-base-content mt-0.5 whitespace-nowrap">
                      {t("hero.chips.focus.sub", "AI & Automation")}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator (desktop only) ─────────────────────────────── */}
        <motion.div
          className="hidden lg:flex justify-center mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-base-content/20 hover:text-base-content/50 transition-colors duration-200"
          >
            <div className="w-5 h-8 rounded-full border-[1.5px] border-current flex items-start justify-center pt-1.5">
              <motion.div
                animate={{ opacity: [1, 0], y: [0, 10] }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeIn" }}
                className="w-0.5 h-1.5 rounded-full bg-current"
              />
            </div>
            <span className="text-[9px] uppercase tracking-[0.24em]">
              {t("hero.scroll", "Scroll")}
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;