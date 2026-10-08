// MobileHome — flagship native-Android dashboard.

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaTrophy,
  FaStar,
  FaCheckCircle,
  FaChevronRight,
  FaCertificate,
  FaAward,
  FaHeart,
  FaFilm,
  FaBrain,
  FaCode,
  FaCogs,
  FaTelegram,
  FaPlay,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  projects as rawProjects,
  contentProjects as rawContentProjects,
  getLocalizedProject,
} from "../../shared/data/projects";
import M3Card from "../components/M3Card";
import M3Button from "../components/M3Button";
import M3Chip from "../components/M3Chip";
import M3ListItem from "../components/M3ListItem";

// ─── Motion tokens ──────────────────────────────────────────────────────────

const SPRING = { type: "spring", stiffness: 320, damping: 30 };
const EASE_OUT = [0.22, 1, 0.36, 1];

// ─── Subcomponents (page-scoped) ─────────────────────────────────────────────

function AnimatedCounter({ target, prefix = "", suffix = "", duration = 1.2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    let frameId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

function FeaturedCarousel({ items }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir?.() === "rtl" || i18n.language === "fa" || i18n.language === "ar";
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const realCount = items.length;

  const cloned = useMemo(() => {
    if (!items.length) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items]);

  const getCardW = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    return el.clientWidth * 0.85 + 12;
  }, []);

  const getScrollPos = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    return isRtl ? Math.abs(el.scrollLeft) : el.scrollLeft;
  }, [isRtl]);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || realCount === 0) return;
    const cardW = getCardW();
    if (!cardW) return;
    const scrollPos = getScrollPos();
    const idx = Math.round(scrollPos / cardW);
    const realIdx = ((idx - 1) % realCount + realCount) % realCount;
    setActive(realIdx);
  }, [getCardW, getScrollPos, realCount]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Set initial position to 1st real item on mount
  useEffect(() => {
    const el = trackRef.current;
    if (!el || realCount === 0) return;
    const cardW = getCardW();
    if (!cardW) return;
    const initialPos = isRtl ? -cardW : cardW;
    el.scrollTo({ left: initialPos, behavior: "instant" });
  }, [getCardW, realCount, isRtl]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || realCount === 0) return;
    const handleScrollEnd = () => {
      const cardW = getCardW();
      if (!cardW) return;
      const scrollPos = getScrollPos();
      const idx = Math.round(scrollPos / cardW);
      if (idx === 0) {
        const target = isRtl ? -(realCount * cardW) : realCount * cardW;
        el.scrollTo({ left: target, behavior: "auto" });
      } else if (idx === realCount + 1) {
        const target = isRtl ? -(1 * cardW) : 1 * cardW;
        el.scrollTo({ left: target, behavior: "auto" });
      }
    };
    let scrollTimer;
    const onScrollWrap = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScrollEnd, 90);
    };
    el.addEventListener("scroll", onScrollWrap, { passive: true });
    return () => {
      clearTimeout(scrollTimer);
      el.removeEventListener("scroll", onScrollWrap);
    };
  }, [getCardW, getScrollPos, realCount, isRtl]);

  const go = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const cardW = getCardW();
    if (!cardW) return;
    const target = isRtl ? -((i + 1) * cardW) : (i + 1) * cardW;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <div>
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-stretch overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 -mx-4 px-4 pb-3"
        >
          {cloned.map((p, i) => (
            <ProjectCard
              key={`${p.slug}-${i}`}
              project={p}
              index={i}
              realCount={realCount}
              isActive={active === ((i - 1 + realCount) % realCount)}
            />
          ))}
        </div>
      </div>

      {/* Indicator dots: ordered according to language reading direction */}
      <div dir={isRtl ? "rtl" : "ltr"} className="flex items-center justify-center gap-1.5 mt-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to project ${i + 1}`}
            className="m3-tap p-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-base-content/25"
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, realCount = 1, isActive = false }) {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const [progress, setProgress] = useState(index === 1 ? 0 : 1);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const track = el.parentElement;
    if (!track) return;
    const onScroll = () => {
      const cardW = track.clientWidth * 0.85 + 12;
      const center = track.scrollLeft + track.clientWidth / 2;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter) / cardW;
      setProgress(Math.min(1.2, distance));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const scale = 1 - Math.min(progress, 1) * 0.05;
  const opacity = 1 - Math.min(progress, 1) * 0.25;
  const imgScale = 1 + Math.max(0, 0.8 - progress) * 0.06;
  const staggerDelay = Math.min(((index - 1 + realCount) % realCount) * 0.075, 0.4);

  const mediaSrc = project.media?.[0] || project.image;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 22, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
      className="snap-center shrink-0 w-[85%] flex flex-col"
    >
      <motion.div
        style={{ scale, opacity }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 420, damping: 25 }}
        className="flex flex-col flex-1 h-full"
      >
        <Link
          to={`/projects/${project.slug}`}
          className="block m3-tap text-left rtl:text-right h-full flex flex-col flex-1"
        >
          <M3Card
            elevation={isActive ? 3 : 1}
            className={`m3-shape-xl overflow-hidden p-0 transition-all duration-300 flex flex-col flex-1 h-full ${isActive
                ? "ring-2 ring-primary/40 shadow-xl shadow-primary/10"
                : "border border-base-300/60"
              }`}
          >
            {/* Cinematic Media Cover Thumbnail with Play & Meta Badges */}
            <div className="relative h-44 w-full bg-base-300 overflow-hidden shrink-0">
              {mediaSrc && (
                <motion.img
                  src={mediaSrc}
                  alt={typeof project.name === "string" ? project.name : ""}
                  style={{ scale: imgScale }}
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Floating Top Badges */}
              <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                  <FaFilm className="text-primary text-[10px]" />
                  <span>{project.aspectRatio || "Video"}</span>
                </span>
                {project.duration && (
                  <span className="px-2 py-0.5 rounded-full bg-primary text-primary-content text-[11px] font-bold tracking-wider shadow-sm">
                    {project.duration}
                  </span>
                )}
              </div>

              {/* Centered Play Cue Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`w-12 h-12 rounded-full bg-primary/95 text-primary-content flex items-center justify-center shadow-lg transition-transform duration-300 ${isActive ? "scale-105 shadow-primary/50" : "scale-90 opacity-80"
                    }`}
                >
                  <FaPlay className="text-sm ltr:ml-0.5 rtl:mr-0.5" />
                </div>
              </div>

              {/* Bottom Thumbnail Overlay */}
              <div className="absolute bottom-2.5 inset-x-3 text-white">
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary-content/85 truncate mb-0.5">
                  {t("skills.categories.film", "Film & Video Production")}
                </p>
                <h3 className="text-sm font-black leading-tight text-white line-clamp-1 drop-shadow-sm font-body-fa">
                  {typeof project.name === "string" ? project.name.split(" — ")[0] : ""}
                </h3>
              </div>
            </div>

            {/* Card Content Details */}
            <div className="p-3.5 pt-3 flex flex-col flex-1 justify-between">
              <div>
                <p className="m3-body-medium text-base-content/70 line-clamp-2 leading-snug text-[13px] min-h-[2.5rem] font-body-fa">
                  {project.description}
                </p>

                {/* Chips row */}
                <div className="flex flex-wrap gap-1.5 mt-2.5 min-h-[1.5rem]">
                  {project.skills?.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center h-5.5 px-2 rounded-md bg-base-200 text-base-content/80 text-[10.5px] font-semibold font-body-fa"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-base-300/50">
                <span className="m3-label-medium text-base-content/55 font-medium truncate max-w-[55%]">
                  {project.metrics?.[0] || t("mobile.viewProject", "View project")}
                </span>
                <M3Button
                  variant="filled"
                  size="small"
                  iconRight={<FaArrowRight className="text-xs rtl:rotate-180" />}
                >
                  {t("mobile.open", "Open")}
                </M3Button>
              </div>
            </div>
          </M3Card>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function AwardCard({ a }) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={SPRING}
      className="snap-start shrink-0 w-[72%] m3-tap text-left rtl:text-right"
    >
      <M3Card
        elevation={0}
        className="m3-shape-xl border border-base-300/70 bg-base-100 p-4 h-full"
      >
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl">
            {a.icon}
          </div>
          <span className="m3-label-medium uppercase tracking-wider text-base-content/55 bg-base-200/70 rounded-full px-2.5 py-1">
            {a.badge}
          </span>
        </div>

        <div className="mt-4">
          <p className="m3-headline-medium text-primary leading-none font-bold">{a.metric}</p>
          <p className="m3-title-medium text-base-content mt-1.5 font-semibold">
            {a.title}
          </p>
          <p className="m3-body-medium text-base-content/60 mt-0.5 line-clamp-2">
            {a.event}
          </p>
        </div>
      </M3Card>
    </motion.div>
  );
}

function FocusTile({ icon, label, sub }) {
  return (
    <motion.div whileTap={{ scale: 0.97 }} transition={SPRING} className="m3-tap text-left rtl:text-right">
      <M3Card elevation={0} className="m3-shape-lg border border-base-300/60 p-3 h-full">
        <span className="text-primary text-lg flex items-center">{icon}</span>
        <p className="m3-label-large text-base-content mt-2 leading-tight font-semibold">
          {label}
        </p>
        <p className="m3-label-medium text-base-content/55 mt-0.5 leading-tight">
          {sub}
        </p>
      </M3Card>
    </motion.div>
  );
}

function ActionTile({ icon, label, to, href }) {
  const inner = (
    <M3Card
      elevation={0}
      className="m3-shape-xl border border-base-300/60 flex flex-col items-center justify-center text-center py-4 px-1 min-h-[92px] m3-tap"
    >
      <span className="text-primary text-2xl flex items-center mb-1.5">{icon}</span>
      <p className="m3-label-large text-base-content leading-tight font-medium font-body-fa">{label}</p>
    </M3Card>
  );
  if (to) {
    return (
      <Link to={to} className="block active:scale-[0.97] transition-transform">
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block active:scale-[0.97] transition-transform"
    >
      {inner}
    </a>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MobileHome() {
  const { t, i18n } = useTranslation();

  const localizedContentProjects = useMemo(() => {
    return rawContentProjects.map((p) => getLocalizedProject(p, i18n.language));
  }, [i18n.language]);

  const achievements = useMemo(
    () => [
      {
        icon: <FaTrophy />,
        badge: t("mobile.gold", "Gold"),
        metric: "98.7%",
        title: t("mobile.modelAccuracy", "Model Accuracy"),
        event: t("mobile.modelAccuracyDesc", "AI Vision & Media Models"),
      },
      {
        icon: <FaAward />,
        badge: t("mobile.featured", "Featured"),
        metric: "Top",
        title: t("mobile.cinematicVisuals", "Cinematic Visuals"),
        event: t("mobile.cinematicVisualsDesc", "Commercial & Narrative Media"),
      },
      {
        icon: <FaCertificate />,
        badge: t("mobile.production", "Production"),
        metric: "100%",
        title: t("mobile.smartAutomation", "Smart Automation"),
        event: t("mobile.smartAutomationDesc", "Retail & Hardware Projects"),
      },
      {
        icon: <FaStar />,
        badge: t("mobile.verified", "Verified"),
        metric: "25+",
        title: t("mobile.customBuilds", "Custom Builds"),
        event: t("mobile.customBuildsDesc", "Web, AI & Gadgets"),
      },
    ],
    [t]
  );

  const statsList = useMemo(
    () => [
      { target: 6, prefix: "+", key: "years", label: t("mobile.stats.years", "سال سابقه کار") },
      { target: 77, prefix: "+", key: "projects", label: t("mobile.stats.projects", "پروژه انجام‌شده") },
      { target: 16, prefix: "+", key: "international", label: t("mobile.stats.international", "پروژه بین‌المللی") },
    ],
    [t]
  );

  const focus = [
    {
      icon: <FaFilm />,
      label: t("hero.badges.film.label", "Filmmaking"),
      sub: t("hero.badges.film.sub", "Cinema · Motion"),
    },
    {
      icon: <FaBrain />,
      label: t("hero.badges.ai.label", "AI & Media"),
      sub: t("hero.badges.ai.sub", "GenAI · Strategy"),
    },
    {
      icon: <FaCode />,
      label: t("hero.badges.dev.label", "Development"),
      sub: t("hero.badges.dev.sub", "Full-Stack · AI Agents"),
    },
    {
      icon: <FaCogs />,
      label: t("hero.badges.automation.label", "Automation"),
      sub: t("hero.badges.automation.sub", "Robotics · Gadgets"),
    },
  ];

  const actions = [
    { icon: <FaDownload />, label: t("mobile.cv", "CV"), to: null, href: "/cv.pdf" },
    { icon: <FaEnvelope />, label: t("mobile.contact", "Contact"), to: null, href: "mailto:tahanaghdi.dev@gmail.com" },
    { icon: <FaTelegram />, label: t("socials.telegram", "Telegram"), to: null, href: "https://t.me/rull_bazi" },
    { icon: <FaGithub />, label: t("socials.github", "GitHub"), to: null, href: "https://github.com/mtn-codes" },
  ];

  const socials = [
    {
      leading: <FaPhone className="text-base" />,
      title: t("socials.phone", "Phone"),
      subtitle: "+98 904 451 9594",
      href: "tel:+989044519594",
    },
    {
      leading: <FaLinkedin className="text-base" />,
      title: t("socials.linkedin", "LinkedIn"),
      subtitle: "Taha Naghdi",
      href: "https://www.linkedin.com/in/taha-naghdi-74398a317",
    },
    {
      leading: <FaTelegram className="text-base" />,
      title: t("socials.telegram", "Telegram"),
      subtitle: "@rull_bazi",
      href: "https://t.me/rull_bazi",
    },
    {
      leading: <MdEmail className="text-base" />,
      title: t("socials.email", "Email"),
      subtitle: "tahanaghdi.dev@gmail.com",
      href: "mailto:tahanaghdi.dev@gmail.com",
    },
    {
      leading: <FaGithub className="text-base" />,
      title: t("socials.github", "GitHub"),
      subtitle: "@mtn-codes",
      href: "https://github.com/mtn-codes",
    },
  ];

  return (
    <div className="pb-8 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
        >
          {/* ════════════════════════════════════════════════════════════════════
              1. PROFILE HEADER / HERO (Art-directed cohesive composition)
          ════════════════════════════════════════════════════════════════════ */}
          <section className="px-4 pt-3 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="relative overflow-hidden rounded-3xl border border-base-300/70 bg-gradient-to-b from-base-200/50 via-base-100 to-base-100 p-5 sm:p-6 shadow-sm"
            >
              {/* Subtle warm ambient glow behind avatar */}
              <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute top-1/2 -right-16 w-40 h-40 rounded-full bg-secondary/8 blur-2xl" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar with gradient ring and verified badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.08 }}
                  className="relative mb-4"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-90 blur-[1px]" />
                  <div className="absolute -inset-2 rounded-full bg-primary/25 blur-md" />
                  <img
                    src="/img/about_photo.jpg"
                    alt={`${t("hero.name", "Taha Naghdi")} — ${t("about.info.roleValue", "Filmmaker & Full-Stack Developer")}`}
                    className="relative w-24 h-24 rounded-full object-cover object-top ring-4 ring-base-100 shadow-md"
                  />
                  {/* Verified checkmark badge */}
                  <span
                    className="absolute -bottom-1 right-1 rtl:right-auto rtl:left-1 w-7 h-7 rounded-full bg-primary text-primary-content flex items-center justify-center ring-4 ring-base-100 shadow-md"
                    title="Verified"
                  >
                    <FaCheckCircle className="text-sm" />
                  </span>
                </motion.div>

                {/* Name with bold typography */}
                <h1 className="text-3xl font-black text-base-content tracking-tight leading-tight">
                  {t("hero.name", "Taha Naghdi")}
                </h1>

                {/* Primary Role */}
                <p className="text-[15px] font-bold text-base-content/85 mt-3.5 sm:mt-4 leading-snug">
                  {t("about.info.roleValue", "Filmmaker & Full-Stack Developer")}
                </p>

                {/* Identity & Status pills */}
                <div className="flex items-center gap-2 mt-3.5 flex-wrap justify-center">
                  <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary/12 border border-primary/25 text-primary text-xs font-extrabold font-body-fa">
                    <FaRocket className="text-[11px]" />
                    {t("hero.tagline", "Filmmaker · Developer · Innovator")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-success/12 border border-success/30 text-success text-xs font-extrabold font-body-fa">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                    </span>
                    {t("mobile.available", "Available")}
                  </span>
                </div>

                {/* Short Bio with generous Persian line-height and breathing room */}
                <p className="text-[14px] leading-[1.85] text-base-content/75 my-6 sm:my-7 max-w-sm px-1 text-center font-normal font-body-fa">
                  {t("about.shortBio")}
                </p>

                {/* Polished 3-Column Stats Strip with animated count-up and staggered entrance */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                  className="w-full mt-6 bg-base-200/60 border border-base-300/80 rounded-2xl py-3.5 px-1.5 shadow-xs"
                >
                  <div className="grid grid-cols-3 divide-x rtl:divide-x-reverse divide-base-300/70">
                    {statsList.map((c) => (
                      <motion.div
                        key={c.key}
                        variants={{
                          hidden: { opacity: 0, y: 14, scale: 0.94 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                        className="flex flex-col items-center px-1 text-center"
                      >
                        <span className="text-2xl sm:text-[26px] font-black text-primary tracking-tight leading-none">
                          <AnimatedCounter target={c.target} prefix={c.prefix} suffix={c.suffix || ""} />
                        </span>
                        <motion.span
                          variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { duration: 0.35, delay: 0.15 },
                            },
                          }}
                          className="text-[10px] sm:text-[10.5px] uppercase tracking-wider text-base-content/70 font-bold mt-1.5 leading-tight font-body-fa"
                        >
                          {c.label}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* ════════════════════════════════════════════════════════════════════
              2. FEATURED PROJECTS (Content Production / Media Showcase)
          ════════════════════════════════════════════════════════════════════ */}
          <section className="mb-10">
            <div className="flex items-end justify-between px-4 pb-3.5">
              <div className="text-left rtl:text-right">
                <div className="flex items-center gap-1.5 text-primary mb-1">
                  <FaFilm className="text-xs" />
                  <p className="text-xs uppercase tracking-[0.16em] font-extrabold">
                    {t("mobile.showcase", "Showcase")}
                  </p>
                </div>
                <h2 className="text-2xl font-black text-base-content tracking-tight leading-tight mt-0.5">
                  {t("mobile.featuredProjects", "Featured Projects")}
                </h2>
              </div>
              <Link
                to="/skills-projects#projects"
                className="m3-tap text-sm text-primary flex items-center gap-1 font-extrabold hover:underline"
              >
                {t("mobile.seeAll", "See all")}
                <FaChevronRight className="text-xs rtl:rotate-180" />
              </Link>
            </div>

            <FeaturedCarousel items={localizedContentProjects} />
          </section>

          {/* ════════════════════════════════════════════════════════════════════
              3. ACHIEVEMENTS
          ════════════════════════════════════════════════════════════════════ */}
          <section className="mb-10">
            <div className="flex items-end justify-between px-4 pb-3.5">
              <div className="text-left rtl:text-right">
                <p className="text-xs uppercase tracking-[0.16em] text-primary font-extrabold">
                  {t("about.eyebrow", "Highlights")}
                </p>
                <h2 className="text-2xl font-black text-base-content tracking-tight leading-tight mt-0.5">
                  {t("about.title", "Achievements")}
                </h2>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 pb-1">
                {achievements.map((a) => (
                  <AwardCard key={a.title} a={a} />
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════════
              4. CURRENT FOCUS
          ════════════════════════════════════════════════════════════════════ */}
          <section className="px-4 mb-10">
            <div className="pb-2 text-left rtl:text-right">
              <p className="text-xs uppercase tracking-[0.16em] text-primary font-extrabold">
                {t("mobile.dailyStack", "Daily stack")}
              </p>
              <h2 className="text-2xl font-black text-base-content tracking-tight leading-tight mt-0.5">
                {t("mobile.currentFocus", "Current Focus")}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {focus.map((f) => (
                <FocusTile key={f.label} {...f} />
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════════
              5. QUICK ACTIONS
          ════════════════════════════════════════════════════════════════════ */}
          <section className="px-4 mb-10">
            <div className="pb-3.5 text-left rtl:text-right">
              <p className="text-xs uppercase tracking-[0.16em] text-primary font-extrabold">
                {t("mobile.quick", "Quick")}
              </p>
              <h2 className="text-2xl font-black text-base-content tracking-tight leading-tight mt-0.5">
                {t("mobile.actions", "Actions")}
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {actions.map((a) => (
                <ActionTile key={a.label} {...a} />
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════════
              6. CONNECT
          ════════════════════════════════════════════════════════════════════ */}
          <section className="px-4 mb-8">
            <div className="flex items-end justify-between pb-3.5">
              <div className="text-left rtl:text-right">
                <p className="text-xs uppercase tracking-[0.16em] text-primary font-extrabold">
                  {t("mobile.reachOut", "Reach out")}
                </p>
                <h2 className="text-2xl font-black text-base-content tracking-tight leading-tight mt-0.5">
                  {t("mobile.connect", "Connect")}
                </h2>
              </div>
            </div>

            <M3Card elevation={1} className="m3-shape-xl overflow-hidden p-0">
              {socials.map((s, i) => (
                <a
                  key={s.title}
                  href={s.disabled ? undefined : s.href}
                  target={s.disabled ? undefined : "_blank"}
                  rel={s.disabled ? undefined : "noopener noreferrer"}
                  className={`m3-tap block ${s.disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""
                    }`}
                  aria-label={`Open ${s.title}`}
                >
                  <M3ListItem
                    leading={
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {s.leading}
                      </div>
                    }
                    title={s.title}
                    subtitle={s.subtitle}
                    divider={i < socials.length - 1}
                    className="font-body-fa"
                  />
                </a>
              ))}
            </M3Card>
          </section>

          {/* ════════════════════════════════════════════════════════════════════
              8. FOOTER
          ════════════════════════════════════════════════════════════════════ */}
          <footer className="mt-8 m3-safe-bottom">
            <div className="px-4">
              <div className="h-px w-full bg-base-300/70" />
            </div>

            <div className="px-4 pt-5 pb-2 text-left rtl:text-right">
              {/* Brand row */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center m3-elev-1">
                  <FaFilm className="text-base" />
                </div>
                <div className="min-w-0">
                  <p className="m3-title-medium text-base-content leading-tight font-bold">
                    {t("hero.name", "Taha Naghdi")}
                  </p>
                  <p className="m3-label-medium text-base-content/55">
                    {t("mobile.footerTagline", "Crafted with passion & precision")}
                  </p>
                </div>
              </div>

              {/* Link row */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  to="/"
                  className="m3-tap m3-label-large text-base-content/75 active:text-primary"
                >
                  {t("nav.home", "Home")}
                </Link>
                <Link
                  to="/skills-projects#projects"
                  className="m3-tap m3-label-large text-base-content/75 active:text-primary"
                >
                  {t("nav.projects", "Projects")}
                </Link>
                <Link
                  to="/skills-projects#skills"
                  className="m3-tap m3-label-large text-base-content/75 active:text-primary"
                >
                  {t("nav.skills", "Skills")}
                </Link>
                <Link
                  to="/education-experience"
                  className="m3-tap m3-label-large text-base-content/75 active:text-primary"
                >
                  {t("mobile.journey", "Journey")}
                </Link>
                <Link
                  to="/contact"
                  className="m3-tap m3-label-large text-base-content/75 active:text-primary"
                >
                  {t("contact.title", "Contact")}
                </Link>
              </div>

              {/* Bottom meta row */}
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 m3-label-medium text-base-content/55">
                  <FaHeart className="text-error text-xs" />
                  {t("hero.tagline", "Filmmaker · Developer · Innovator")}
                </span>
                <span className="m3-label-medium text-base-content/40 tabular-nums">
                  v1.0.0
                </span>
              </div>

              <p className="mt-3 m3-label-medium text-base-content/40">
                © {new Date().getFullYear()} {t("hero.name", "Taha Naghdi")} · {t("mobile.rightsReserved", "All rights reserved.")}
              </p>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}