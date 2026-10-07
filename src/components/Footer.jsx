import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFilm,
  FaBrain,
  FaCode,
  FaCogs,
  FaTelegram,
  FaRocket,
  FaPhone,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import profilePic from "/img/profile.jpg";

const ease = [0.22, 1, 0.36, 1];

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
      whileHover={disabled ? undefined : { scale: 1.2 }}
      whileTap={disabled ? undefined : { scale: 0.92 }}
      className={`
        w-9 h-9 flex items-center justify-center rounded-xl text-base
        bg-base-200 border border-base-300/60
        transition-colors duration-200 relative group
        ${
          disabled
            ? "opacity-35 cursor-not-allowed text-base-content/30"
            : "text-base-content/45 hover:text-primary hover:border-primary/50 hover:bg-primary/10"
        }
      `}
    >
      {icon}
      <span
        className="
        absolute -top-7 left-1/2 -translate-x-1/2
        text-[8px] font-semibold uppercase tracking-wider
        bg-base-200 text-base-content px-1.5 py-0.5 rounded-md border border-base-300/40
        opacity-0 group-hover:opacity-100 pointer-events-none
        transition-opacity duration-150 whitespace-nowrap z-10
      "
      >
        {label}
      </span>
    </motion.a>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t("nav.home", "Home"), href: "/" },
    { label: t("about.title", "About"), href: "/#about" },
    { label: t("nav.skills", "Skills"), href: "/skills-projects#skills" },
    { label: t("nav.projects", "Projects"), href: "/skills-projects#projects" },
    { label: t("nav.education", "Education"), href: "/education-experience#education" },
    { label: t("socials.github", "GitHub"), href: "https://github.com/mtn-codes", external: true },
    { label: t("contact.eyebrow", "Contact"), href: "/#contact" },
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

  const disciplinesPills = [
    { icon: <FaFilm className="text-primary" />, label: t("footer.disciplinesItems.film", "Cinema") },
    { icon: <FaBrain className="text-info" />, label: t("footer.disciplinesItems.ai", "AI Media") },
    { icon: <FaCode className="text-success" />, label: t("footer.disciplinesItems.dev", "Full-Stack") },
    { icon: <FaCogs className="text-warning" />, label: t("footer.disciplinesItems.hardware", "Automation") },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-base-300 text-base-content">
      {/* ══ BACKGROUND ══════════════════════════════════════════════════════ */}
      <div className="pointer-events-none select-none absolute inset-0">
        <div className="absolute -top-32 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px]" />
        <div className="absolute -bottom-24 -right-32 w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.020]">
          <defs>
            <pattern id="footer-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>

        <svg className="absolute inset-0 w-full h-full opacity-[0.013]">
          <defs>
            <pattern id="footer-diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-diag)" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300/80 to-transparent" />

        <svg className="absolute top-4 left-4 w-8 h-8 opacity-[0.08]" viewBox="0 0 48 48" fill="none">
          <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute top-4 right-4 w-8 h-8 opacity-[0.08]" viewBox="0 0 48 48" fill="none">
          <path d="M48 16 L48 0 L32 0" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* ══ MAIN CONTENT ════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 xl:px-20 pt-16 pb-8">
        {/* ── Top: Brand strip ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-12 pb-10 border-b border-base-content/[0.08]"
        >
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
            <img
              src={profilePic}
              alt={t("hero.name", "Taha Naghdi")}
              className="
                relative z-10 w-16 h-16 rounded-2xl object-cover object-top
                border-2 border-primary/50 ring-4 ring-primary/10
              "
            />
            {/* Online dot */}
            <span className="absolute -bottom-1 -right-1 rtl:-right-auto rtl:-left-1 w-4 h-4 rounded-full bg-success border-2 border-base-300 z-20 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-success-content animate-ping" />
            </span>
          </div>

          {/* Name + role */}
          <div className="text-center sm:text-left rtl:sm:text-right">
            <h2 className="text-xl font-extrabold tracking-tight">
              {t("hero.name", "Taha Naghdi")}
              <span className="text-primary">.</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-base-content/40 font-semibold mt-0.5">
              {t("footer.role", "Filmmaker · Developer · Innovator")}
            </p>
            <p className="text-[12px] text-base-content/55 mt-1.5 max-w-xs">
              {t("footer.bio")}
            </p>
          </div>

          {/* Spacer + CTA */}
          <div className="sm:ml-auto rtl:sm:ml-0 rtl:sm:mr-auto flex flex-col sm:items-end rtl:sm:items-start gap-3">
            <a
              href="mailto:tahanaghdi.dev@gmail.com"
              className="
                btn btn-primary btn-sm gap-2 px-5
                shadow-lg shadow-primary/25
                hover:shadow-xl hover:shadow-primary/35
                hover:-translate-y-0.5 transition-all duration-200
              "
            >
              <FaRocket className="text-xs" />
              {t("footer.hireMe", "Hire Me")}
            </a>
            <a
              href="https://t.me/rull_bazi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn btn-outline btn-sm gap-2 px-5
                hover:border-primary/50 hover:bg-primary/8
                hover:-translate-y-0.5 transition-all duration-200
              "
            >
              <FaTelegram className="text-xs text-primary" />
              {t("footer.telegram", "Telegram Channel")} ↗
            </a>
          </div>
        </motion.div>

        {/* ── Main grid: 4 columns ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0 }}
          >
            <p className="text-[9px] uppercase tracking-[0.22em] text-base-content/30 font-bold mb-4">
              {t("footer.navigation", "Navigation")}
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="
                      text-[13px] font-medium text-base-content/55
                      hover:text-primary hover:translate-x-1 rtl:hover:-translate-x-1
                      transition-all duration-150 inline-flex items-center gap-1.5 group
                    "
                  >
                    <span className="w-1 h-1 rounded-full bg-base-content/20 group-hover:bg-primary transition-colors duration-150" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 2 — Disciplines venture */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.08 }}
          >
            <p className="text-[9px] uppercase tracking-[0.22em] text-base-content/30 font-bold mb-4">
              {t("footer.disciplines", "Disciplines")}
            </p>

            <div
              className="
              relative overflow-hidden
              bg-base-200/60 border border-base-300/50 rounded-2xl p-4
              hover:border-primary/25 transition-all duration-300 group
            "
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-primary-content text-xs font-black shadow-md shadow-primary/30">
                  TN
                </div>
                <div>
                  <p className="text-[13px] font-extrabold tracking-tight">Taha Naghdi</p>
                  <p className="text-[9px] uppercase tracking-wider text-primary font-bold opacity-70">
                    Creative & Tech Studio
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-base-content/55 leading-relaxed mb-3">
                {t("footer.bio")}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {disciplinesPills.map((pill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 bg-base-300/60 rounded-lg border border-base-content/10"
                  >
                    <span className="text-xs">{pill.icon}</span>
                    <span className="text-[10px] font-semibold text-base-content/60">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/rull_bazi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5 text-[11px] font-bold text-primary
                  hover:gap-2.5 transition-all duration-200
                "
              >
                t.me/rull_bazi <FiExternalLink className="text-[10px]" />
              </a>
            </div>
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.16 }}
          >
            <p className="text-[9px] uppercase tracking-[0.22em] text-base-content/30 font-bold mb-4">
              {t("footer.contact", "Contact")}
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: <MdEmail />,
                  text: "tahanaghdi.dev@gmail.com",
                  href: "mailto:tahanaghdi.dev@gmail.com",
                  color: "text-primary",
                  bg: "bg-primary/10 border-primary/20",
                },
                {
                  icon: <MdPhone />,
                  text: "+98 904 451 9594",
                  href: "tel:+989044519594",
                  color: "text-success",
                  bg: "bg-success/10 border-success/20",
                },
                {
                  icon: <MdLocationOn />,
                  text: t("contact.locationValue", "Iran"),
                  color: "text-error",
                  bg: "bg-error/10 border-error/20",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 group">
                  <div
                    className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs flex-shrink-0 border ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-200`}
                  >
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      dir={item.href.startsWith("tel:") ? "ltr" : undefined}
                      className="text-[12px] font-medium text-base-content/55 hover:text-primary transition-colors duration-150 break-all font-mono"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[12px] font-medium text-base-content/55">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Tech stack mini */}
            <div className="mt-5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-base-content/25 font-bold mb-2.5">
                {t("footer.tech", "Tech Arsenal")}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { icon: <FaFilm />, color: "text-primary", label: t("about.tech.cinematography", "Cinema") },
                  { icon: <FaBrain />, color: "text-info", label: t("about.tech.aiAgents", "AI Agents") },
                  { icon: <FaCode />, color: "text-success", label: t("about.tech.fullstack", "Full-Stack") },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 px-2 py-1 bg-base-200/60 border border-base-300/50 rounded-lg"
                  >
                    <span className={`text-xs ${item.color}`}>{item.icon}</span>
                    <span className="text-[10px] font-semibold text-base-content/55">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Col 4 — Socials + status */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.24 }}
          >
            <p className="text-[9px] uppercase tracking-[0.22em] text-base-content/30 font-bold mb-4">
              {t("footer.socials", "Socials")}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {socials.map((s) => (
                <MagneticSocial key={s.label} {...s} />
              ))}
            </div>

            {/* Status card */}
            <div
              className="
              flex flex-col gap-3 p-3.5
              bg-base-200/60 border border-base-300/50 rounded-2xl
            "
            >
              {[
                {
                  dot: "bg-success",
                  label: t("footer.status.openLabel", "Status"),
                  value: t("footer.status.openValue", "Open to Work"),
                },
                {
                  dot: "bg-info",
                  label: t("footer.status.workLabel", "Work"),
                  value: t("footer.status.workValue", "Remote & Hybrid"),
                },
                {
                  dot: "bg-warning",
                  label: t("footer.status.replyLabel", "Reply"),
                  value: t("footer.status.replyValue", "Within 24 hrs"),
                },
              ].map((chip, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${chip.dot} flex-shrink-0`} />
                  <span className="text-[9px] uppercase tracking-wider text-base-content/30 font-semibold w-12 flex-shrink-0">
                    {chip.label}
                  </span>
                  <span className="text-[11px] font-bold text-base-content/65">{chip.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="
            flex flex-col sm:flex-row items-center justify-between gap-4
            pt-7 border-t border-base-content/[0.07]
          "
        >
          <p className="text-[11px] font-medium text-base-content/35">
            © {currentYear} Taha Naghdi. {t("footer.copyright", "All rights reserved.")}
          </p>

          {/* Tagline pills */}
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em]">
            {t("footer.tagline", "Filmmaker · Developer · Innovator")
              .split(" · ")
              .map((word, i, arr) => (
                <span key={i} className="contents">
                  <span className="text-base-content/30 hover:text-primary transition-colors duration-200 cursor-default">
                    {word}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                  )}
                </span>
              ))}
          </div>

          {/* Back to top */}
          <motion.a
            href="#hero"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-1.5 px-3 py-1.5 rounded-lg
              bg-base-200/60 border border-base-300/50
              text-[10px] font-bold uppercase tracking-wider text-base-content/40
              hover:text-primary hover:border-primary/30 hover:bg-primary/5
              transition-all duration-200
            "
          >
            {t("footer.backToTop", "↑ Back to top")}
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;