import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaVideo, FaFilm, FaLightbulb, FaPalette, FaVolumeUp,
  FaBrain, FaTerminal, FaRobot, FaPaintBrush, FaMicrophone, FaPenNib, FaShareAlt,
  FaCogs, FaMicrochip, FaWifi,
  FaReact, FaLock, FaCode, FaServer, FaChevronDown, FaChevronUp,
} from "react-icons/fa";
import { MdArchitecture, MdAnimation } from "react-icons/md";
import { SiTailwindcss, SiGit, SiFirebase, SiPostgresql, SiNodedotjs, SiPython, SiArduino } from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb";

// ─── 5 CATEGORIES DEFINITION ──────────────────────────────────────────────────
export const CATEGORY_KEYS = ["Film & Video", "AI & Content", "Automation", "Web Design", "Core CS"];

export const CATEGORY_META = {
  "Film & Video": {
    i18nKey: "film",
    icon: <FaFilm />,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
    barColor: "bg-rose-500",
  },
  "AI & Content": {
    i18nKey: "aiContent",
    icon: <FaBrain />,
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/20",
    barColor: "bg-purple-500",
  },
  "Automation": {
    i18nKey: "automation",
    icon: <FaCogs />,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
    barColor: "bg-amber-500",
  },
  "Web Design": {
    i18nKey: "webDesign",
    icon: <FaReact />,
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/20",
    barColor: "bg-sky-500",
  },
  "Core CS": {
    i18nKey: "coreCs",
    icon: <FaCode />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    barColor: "bg-emerald-500",
  },
};

// ─── RAW SKILLS REGISTRY ─────────────────────────────────────────────────────
export const SKILLS_DATA = [
  // 1. Film & Video (6 items)
  { key: "cinematography", category: "Film & Video", icon: <FaVideo />, tagColor: "text-rose-500 bg-rose-500/10 border-rose-500/25" },
  { key: "videoEditing", category: "Film & Video", icon: <FaFilm />, tagColor: "text-rose-500 bg-rose-500/10 border-rose-500/25" },
  { key: "lighting", category: "Film & Video", icon: <FaLightbulb />, tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/25" },
  { key: "motionGraphics", category: "Film & Video", icon: <MdAnimation />, tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/25" },
  { key: "colorGrading", category: "Film & Video", icon: <FaPalette />, tagColor: "text-pink-500 bg-pink-500/10 border-pink-500/25" },
  { key: "soundDesign", category: "Film & Video", icon: <FaVolumeUp />, tagColor: "text-sky-500 bg-sky-500/10 border-sky-500/25" },

  // 2. AI & Content (8 items)
  { key: "aiVideoGen", category: "AI & Content", icon: <FaBrain />, tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/25" },
  { key: "promptEngineering", category: "AI & Content", icon: <FaTerminal />, tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/25" },
  { key: "aiAgents", category: "AI & Content", icon: <FaRobot />, tagColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/25" },
  { key: "aiImageGen", category: "AI & Content", icon: <FaPaintBrush />, tagColor: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/25" },
  { key: "contentStrategy", category: "AI & Content", icon: <FaLightbulb />, tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/25" },
  { key: "aiVoiceCloning", category: "AI & Content", icon: <FaMicrophone />, tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/25" },
  { key: "scriptwriting", category: "AI & Content", icon: <FaPenNib />, tagColor: "text-rose-500 bg-rose-500/10 border-rose-500/25" },
  { key: "digitalBranding", category: "AI & Content", icon: <FaShareAlt />, tagColor: "text-sky-500 bg-sky-500/10 border-sky-500/25" },

  // 3. Automation (5 items)
  { key: "industrialAutomation", category: "Automation", icon: <FaCogs />, tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/25" },
  { key: "smartGadgets", category: "Automation", icon: <FaMicrochip />, tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/25" },
  { key: "iotSensors", category: "Automation", icon: <FaWifi />, tagColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/25" },
  { key: "pythonAutomation", category: "Automation", icon: <SiPython />, tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25" },
  { key: "microcontrollers", category: "Automation", icon: <SiArduino />, tagColor: "text-teal-500 bg-teal-500/10 border-teal-500/25" },

  // 4. Web Design (9 items)
  { key: "react", category: "Web Design", icon: <FaReact />, tagColor: "text-sky-500 bg-sky-500/10 border-sky-500/25" },
  { key: "fullstackDev", category: "Web Design", icon: <MdArchitecture />, tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/25" },
  { key: "tailwind", category: "Web Design", icon: <SiTailwindcss />, tagColor: "text-teal-500 bg-teal-500/10 border-teal-500/25" },
  { key: "framerMotion", category: "Web Design", icon: <TbTopologyStar3 />, tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/25" },
  { key: "nodejs", category: "Web Design", icon: <SiNodedotjs />, tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25" },
  { key: "postgresql", category: "Web Design", icon: <SiPostgresql />, tagColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/25" },
  { key: "firebase", category: "Web Design", icon: <SiFirebase />, tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/25" },
  { key: "security", category: "Web Design", icon: <FaLock />, tagColor: "text-rose-500 bg-rose-500/10 border-rose-500/25" },
  { key: "uiux", category: "Web Design", icon: <FaPalette />, tagColor: "text-pink-500 bg-pink-500/10 border-pink-500/25" },

  // 5. Core CS (5 items)
  { key: "algorithms", category: "Core CS", icon: <FaCode />, tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25" },
  { key: "os", category: "Core CS", icon: <FaTerminal />, tagColor: "text-amber-500 bg-amber-500/10 border-amber-500/25" },
  { key: "networks", category: "Core CS", icon: <FaServer />, tagColor: "text-sky-500 bg-sky-500/10 border-sky-500/25" },
  { key: "git", category: "Core CS", icon: <SiGit />, tagColor: "text-orange-500 bg-orange-500/10 border-orange-500/25" },
  { key: "linux", category: "Core CS", icon: <FaTerminal />, tagColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25" },
];

const ease = [0.22, 1, 0.36, 1];

// ─── SKILL CARD ───────────────────────────────────────────────────────────────
const SkillCard = ({ skill, idx }) => {
  const { t } = useTranslation();
  const meta = CATEGORY_META[skill.category] ?? {
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    i18nKey: "film",
  };

  const name = t(`skills.items.${skill.key}.name`, skill.key);
  const desc = t(`skills.items.${skill.key}.desc`, "");
  const tag = t(`skills.items.${skill.key}.tag`, "Expert");
  const categoryLabel = t(`skills.categories.${meta.i18nKey}`, skill.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: -8 }}
      transition={{ duration: 0.35, ease, delay: idx * 0.025 }}
      whileHover={{ y: -4 }}
      className="group relative bg-base-200/50 border border-base-300/60 rounded-3xl p-5 sm:p-6
        hover:bg-base-200 hover:border-primary/30
        hover:shadow-xl hover:shadow-primary/5
        transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Glow */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/[0.04] blur-2xl pointer-events-none group-hover:bg-primary/[0.08] transition-all duration-500" />

      <div>
        {/* Top row */}
        <div className="flex items-start justify-between mb-3.5">
          <div className={`w-10 h-10 flex items-center justify-center rounded-2xl border text-lg flex-shrink-0 ${meta.bg} ${meta.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            {skill.icon}
          </div>
          <span className={`text-[9px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border ${skill.tagColor}`}>
            {tag}
          </span>
        </div>

        {/* Category pill */}
        <div className="mb-2">
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-base-content/35">
            {categoryLabel}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-[14px] sm:text-[15px] font-extrabold text-base-content leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Desc */}
        <p className="text-[11.5px] sm:text-[12px] text-base-content/55 leading-[1.7] group-hover:text-base-content/75 transition-colors duration-300">
          {desc}
        </p>
      </div>

      {/* Decorative number */}
      <div className="absolute bottom-2 ltr:right-4 rtl:left-4 text-5xl font-black opacity-[0.025] group-hover:opacity-[0.06] transition-opacity pointer-events-none select-none">
        {String(idx + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
};

// ─── SKILLS SECTION ───────────────────────────────────────────────────────────
const Skills = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...CATEGORY_KEYS];

  const filtered = activeCategory === "All"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  // In "All" view, show first 9 items unless expanded; in specific category view, show all
  const displayedSkills = activeCategory === "All" && !showAll
    ? filtered.slice(0, 9)
    : filtered;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
  };

  const getCategoryLabel = (cat) => {
    if (cat === "All") return t("skills.categories.all", "All");
    const meta = CATEGORY_META[cat];
    return meta ? t(`skills.categories.${meta.i18nKey}`, cat) : cat;
  };

  return (
    <section
      id="skills"
      className="
        relative w-full overflow-hidden
        bg-base-100 text-base-content
        py-20 lg:py-28
        px-5 sm:px-10 lg:px-16 xl:px-20
      "
    >
      {/* ══ BACKGROUND ════════════════════════════════════════════════════ */}
      <div className="pointer-events-none select-none absolute inset-0">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[130px]" />
        <div className="absolute -bottom-32 -right-32 w-[460px] h-[460px] rounded-full bg-secondary/[0.05] blur-[110px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[80px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.028]">
          <defs>
            <pattern id="skills-grid-v2" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skills-grid-v2)" />
        </svg>

        <div className="absolute left-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-1/3 w-px h-72 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
      </div>

      {/* ══ CONTENT ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <div key={i18n.language}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-base-300" />
              <span className="text-[10px] text-base-content/35 uppercase tracking-[0.24em] font-semibold">
                {t("skills.eyebrow", "Technical Skills")}
              </span>
              <div className="h-px w-8 bg-base-300" />
            </motion.div>

            {/* Heading row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants}>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.13em] uppercase bg-primary/10 border border-primary/25 text-primary mb-4">
                    <TbTopologyStar3 className="text-[10px]" />
                    {t("skills.badge", "Tech Stack")}
                  </span>
                </motion.div>
                <motion.h2
                  variants={itemVariants}
                  className="font-extrabold tracking-tight leading-[1.07] text-3xl sm:text-4xl xl:text-[2.8rem]"
                >
                  {t("skills.titlePrefix", "My")}{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">{t("skills.titleHighlight", "Expertise")}</span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.55, ease }}
                      className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary/40 origin-left rtl:origin-right"
                    />
                  </span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-[10px] uppercase tracking-[0.22em] text-base-content/40 font-medium mt-2">
                  {t("skills.subtitle", "Film · AI · Automation · Web · Computer Science")}
                </motion.p>
              </motion.div>

              {/* 5 Categories Filter Bar with sliding animated pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: 0.15 }}
                className="w-full lg:w-auto overflow-x-auto pb-1 no-scrollbar"
              >
                <div className="flex gap-1 bg-base-200/70 border border-base-300/60 p-1.5 rounded-2xl min-w-max">
                  {categories.map((cat) => {
                    const isSelected = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setShowAll(false);
                        }}
                        className={`
                          relative px-4 py-2 rounded-xl text-[11px] font-bold tracking-[0.06em]
                          transition-colors duration-200 whitespace-nowrap z-10
                          ${isSelected ? "text-primary-content font-extrabold" : "text-base-content/55 hover:text-base-content hover:bg-base-300/40"}
                        `}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="skillsCategoryPill"
                            className="absolute inset-0 bg-primary rounded-xl shadow-lg shadow-primary/25 -z-10"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}
                        <span className="relative z-10">{getCategoryLabel(cat)}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Main grid + sidebar */}
            <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">

              {/* ── Skills grid ─────────────────────────────────────────── */}
              <div className="flex-1 min-w-0 w-full">
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  <AnimatePresence mode="popLayout">
                    {displayedSkills.map((skill, idx) => (
                      <SkillCard key={skill.key} skill={skill} idx={idx} />
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Show More / Show Less Toggle for 'All' View */}
                {activeCategory === "All" && filtered.length > 9 && (
                  <motion.div
                    layout
                    className="mt-8 flex justify-center"
                  >
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="
                        inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl
                        bg-base-200 border border-base-300/70 text-xs font-bold text-base-content/75
                        hover:bg-primary/10 hover:text-primary hover:border-primary/30
                        hover:-translate-y-0.5 transition-all duration-200 shadow-sm
                      "
                    >
                      {showAll ? (
                        <>
                          <FaChevronUp className="text-[10px]" />
                          {t("skills.showLess", "Show Less")}
                        </>
                      ) : (
                        <>
                          <FaChevronDown className="text-[10px]" />
                          {t("skills.showMore", "Show More Skills")} ({filtered.length - 9} more)
                        </>
                      )}
                    </button>
                  </motion.div>
                )}

                {/* Count indicator */}
                <motion.div
                  layout
                  className="mt-6 flex items-center justify-center lg:justify-start gap-3"
                >
                  <div className="h-px w-6 bg-base-300" />
                  <span className="text-[9px] text-base-content/30 uppercase tracking-[0.2em] font-semibold">
                    {t("skills.showing", { count: displayedSkills.length, total: SKILLS_DATA.length })}
                  </span>
                  <div className="h-px w-6 bg-base-300" />
                </motion.div>
              </div>

              {/* ── Sidebar (Task B: No Core Workflow, Rewritten Problem Solving, Dynamic Categories) ── */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
                className="w-full lg:w-72 xl:w-80 flex flex-col gap-5 lg:sticky lg:top-24"
              >
                {/* 1. Problem-solving card (Rewritten framework-agnostic copy & generic tags) */}
                <div className="relative bg-primary rounded-3xl p-6 sm:p-7 text-primary-content overflow-hidden shadow-xl shadow-primary/25">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary-content/[0.07] blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-b-3xl" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-primary-content/15 mb-4">
                      <FaCode className="text-lg" />
                    </div>
                    <h3 className="text-lg font-extrabold mb-2 leading-tight">
                      {t("skills.problemSolving.title", "Problem Solving")}
                    </h3>
                    <p className="text-[12px] opacity-85 leading-[1.75] mb-5">
                      {t("skills.problemSolving.desc", "Strong analytical foundation in breaking down complex problems into efficient, scalable solutions — from algorithmic thinking to real-world system design.")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(t("skills.problemSolving.tags", { returnObjects: true }) || ["Analytical Thinking", "Problem Solving", "System Design"]).map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-primary-content/15 rounded-lg text-[9.5px] font-bold uppercase tracking-[0.08em]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Category breakdown (Dynamically computed from the 5 live categories) */}
                <div className="bg-base-200/60 border border-base-300/60 rounded-3xl p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-px w-5 bg-base-300" />
                    <span className="text-[9px] text-base-content/35 uppercase tracking-[0.22em] font-semibold">
                      {t("skills.byCategory", "By Category")}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {CATEGORY_KEYS.map((cat) => {
                      const meta = CATEGORY_META[cat];
                      const count = SKILLS_DATA.filter((s) => s.category === cat).length;
                      const pct = Math.round((count / SKILLS_DATA.length) * 100);
                      const isSelected = activeCategory === cat;

                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setShowAll(false);
                          }}
                          className={`w-full group p-2 rounded-xl transition-colors ${isSelected ? "bg-base-300/40" : "hover:bg-base-300/20"}`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`flex items-center gap-2 text-[11px] font-bold ${meta.color}`}>
                              <span className="text-xs">{meta.icon}</span>
                              {t(`skills.categories.${meta.i18nKey}`, cat)}
                            </span>
                            <span className="text-[10px] text-base-content/40 font-semibold">{count} skills</span>
                          </div>
                          <div className="h-1.5 w-full bg-base-300/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease, delay: 0.1 }}
                              className={`h-full rounded-full ${meta.barColor}`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;