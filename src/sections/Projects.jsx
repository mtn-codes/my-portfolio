// src/sections/Projects.jsx
import { Link } from "react-router-dom";
import {
  FaGithub, FaExternalLinkAlt, FaPlay,
  FaYoutube, FaFilm, FaLaptopCode, FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects, contentProjects, getLocalizedProject } from "../shared/data/projects";
import ProjectCarousel from "../components/ProjectCarousel";

const ease = [0.22, 1, 0.36, 1];

// ─── TILT CARD ─────────────────────────────────────────────────────────────
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(x, { stiffness: 180, damping: 22 });

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set(((e.clientX - cx) / (r.width / 2)) * 7);
    y.set(((e.clientY - cy) / (r.height / 2)) * -7);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── UNIFIED PROJECT CARD (Preserved Exact Visual Structure) ────────────────
const ProjectCard = ({ project, index, isContent = false, onWatchVideo }) => {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="h-full">
      <TiltCard className="h-full">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="
            group relative h-full flex flex-col justify-between
            bg-base-200/60 backdrop-blur-sm
            border border-base-300/60
            rounded-3xl overflow-hidden
            hover:border-primary/40
            transition-all duration-300
            shadow-[0_4px_24px_rgba(0,0,0,0.08)]
            hover:shadow-[0_8px_40px_rgba(0,0,0,0.16)]
          "
        >
          {/* Glow overlay on hover */}
          <div className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.04]
            transition-opacity duration-500 pointer-events-none
          " />

          {/* Top section */}
          <div>
            {/* Index badge & Media Indicator */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="
                flex items-center justify-center
                w-7 h-7 rounded-lg
                bg-base-300/80 border border-base-300
                text-[10px] font-bold text-base-content/50
                backdrop-blur-sm
              ">
                {String(index + 1).padStart(2, "0")}
              </span>
              {isContent && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  <FaFilm className="text-[8px]" /> {project.duration ? project.duration : "Video"}
                </span>
              )}
            </div>

            {/* Image container with play overlay */}
            <div className="relative overflow-hidden bg-base-100/60 mx-4 mt-4 rounded-2xl h-44 sm:h-48 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none">
                <defs>
                  <pattern id={`proj-grid-${project.slug}-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#proj-grid-${project.slug}-${index})`} />
              </svg>

              <motion.img
                src={project.image}
                alt={project.name}
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.4, ease }}
                className="relative z-10 h-full w-full object-cover p-1"
                onError={(e) => {
                  e.currentTarget.src = "/img/about_photo.jpg";
                }}
              />

              {/* Play icon overlay on hover for content */}
              {isContent && (
                <button
                  type="button"
                  onClick={() => onWatchVideo && onWatchVideo(project)}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  aria-label={t("projects.actions.watch", "Watch")}
                >
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/40 transform group-hover:scale-110 transition-transform">
                    <FaPlay className="text-sm ltr:ml-0.5 rtl:mr-0.5" />
                  </div>
                </button>
              )}

              {/* Image glow */}
              <div className="absolute inset-0 bg-primary/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-5 pt-4 flex flex-col gap-3">
              {/* Title */}
              <h3 className="text-[15px] font-extrabold tracking-tight leading-snug text-base-content group-hover:text-primary transition-colors duration-200">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[12px] opacity-60 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.skills?.slice(0, 4).map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-base-300/60 text-base-content/60 border border-base-300/40"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills?.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    +{project.skills.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-5 pt-0">
            <div className="h-px w-full bg-base-300/50 mb-3.5" />

            <div className="flex items-center gap-2">
              {isContent ? (
                /* Play / Watch CTA for Content Production */
                <button
                  type="button"
                  onClick={() => onWatchVideo && onWatchVideo(project)}
                  className="
                    flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl
                    bg-rose-500/10 border border-rose-500/25
                    text-[11px] font-bold text-rose-500
                    hover:bg-rose-500 hover:text-white
                    hover:-translate-y-0.5
                    transition-all duration-200 cursor-pointer
                  "
                >
                  <FaPlay className="text-[9px]" />
                  {t("projects.actions.watch", "Watch")}
                </button>
              ) : (
                /* Code CTA for Web Projects */
                project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1.5 px-3 py-1.5 rounded-xl
                      bg-base-300/60 border border-base-300/50
                      text-[11px] font-bold text-base-content/65
                      hover:text-base-content hover:bg-base-300
                      hover:-translate-y-0.5
                      transition-all duration-200
                    "
                  >
                    <FaGithub className="text-xs" /> {t("projects.actions.code", "Code")}
                  </a>
                )
              )}

              {!isContent && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-1.5 px-3 py-1.5 rounded-xl
                    bg-primary/10 border border-primary/30
                    text-[11px] font-bold text-primary
                    hover:bg-primary hover:text-primary-content
                    hover:-translate-y-0.5
                    transition-all duration-200
                  "
                >
                  <FaExternalLinkAlt className="text-[9px]" /> {t("projects.actions.live", "Live")}
                </a>
              )}

              {/* Working Details Link */}
              <Link
                to={`/projects/${project.slug}`}
                className="
                  ltr:ml-auto rtl:mr-auto flex items-center gap-1.5
                  text-[11px] font-bold text-base-content/45
                  hover:text-primary
                  transition-colors duration-200 group/link
                "
              >
                {t("projects.actions.details", "Details")}
                <span className="ltr:group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

// ─── PROJECTS SECTION ────────────────────────────────────────────────────────
const Projects = () => {
  const { t, i18n } = useTranslation();
  // Tab order: Content Production FIRST/default, Website Design & Programming SECOND
  const [activeTab, setActiveTab] = useState("content");
  const [playingVideo, setPlayingVideo] = useState(null);

  // Localize project lists based on active language
  const localizedContentProjects = contentProjects.map((p) =>
    getLocalizedProject(p, i18n.language)
  );
  const localizedWebProjects = projects.map((p) =>
    getLocalizedProject(p, i18n.language)
  );

  return (
    <section
      id="projects"
      className="
        relative w-full overflow-hidden
        bg-base-100 text-base-content
        py-20 lg:py-28
        px-5 sm:px-10 lg:px-16 xl:px-20
      "
    >
      {/* ── BACKGROUND ────────────────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[130px]" />
        <div className="absolute -bottom-32 right-1/4 w-[480px] h-[480px] rounded-full bg-secondary/[0.05] blur-[110px]" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.026]">
          <defs>
            <pattern id="proj-grid-bg" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proj-grid-bg)" />
        </svg>

        <div className="absolute left-0 top-1/3 w-px h-64 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute right-0 top-1/2 w-px h-72 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent" />
      </div>

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <div key={i18n.language}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <div className="h-px w-8 bg-base-300" />
              <span className="text-[10px] text-base-content/35 uppercase tracking-[0.24em] font-semibold">
                {t("projects.eyebrow", "Selected Work")}
              </span>
              <div className="h-px w-8 bg-base-300" />
            </motion.div>

            {/* Header & Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: 0.05 }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
            >
              <div>
                <h2 className="font-extrabold tracking-tight leading-[1.06] text-4xl sm:text-5xl xl:text-[3.2rem]">
                  {t("projects.titlePrefix", "Featured")}{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">{t("projects.titleHighlight", "Projects")}</span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45, duration: 0.6, ease }}
                      className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary/40 origin-left rtl:origin-right"
                    />
                  </span>
                </h2>
                <p className="text-[10px] uppercase tracking-[0.22em] text-base-content/40 font-medium mt-2">
                  {t("projects.subtitle", "Production-grade · Real-world Impact")}
                </p>
              </div>

              {/* Category Tabs: Content Production FIRST, Website Design SECOND */}
              <div className="flex items-center gap-1.5 p-1.5 bg-base-200/80 border border-base-300/70 rounded-2xl w-full sm:w-auto overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab("content")}
                  className={`
                    relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold
                    transition-colors duration-200 whitespace-nowrap z-10 flex-1 sm:flex-initial justify-center
                    ${activeTab === "content" ? "text-primary-content font-extrabold" : "text-base-content/60 hover:text-base-content"}
                  `}
                >
                  {activeTab === "content" && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-primary rounded-xl shadow-lg shadow-primary/25 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <FaFilm className="text-xs" />
                  <span>{t("projects.tabs.content", "Content Production & Media")}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeTab === "content" ? "bg-primary-content/20 text-primary-content" : "bg-base-300 text-base-content/50"}`}>
                    {localizedContentProjects.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("website")}
                  className={`
                    relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold
                    transition-colors duration-200 whitespace-nowrap z-10 flex-1 sm:flex-initial justify-center
                    ${activeTab === "website" ? "text-primary-content font-extrabold" : "text-base-content/60 hover:text-base-content"}
                  `}
                >
                  {activeTab === "website" && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-primary rounded-xl shadow-lg shadow-primary/25 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <FaLaptopCode className="text-xs" />
                  <span>{t("projects.tabs.website", "Website Design & Programming")}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${activeTab === "website" ? "bg-primary-content/20 text-primary-content" : "bg-base-300 text-base-content/50"}`}>
                    {localizedWebProjects.length}
                  </span>
                </button>
              </div>
            </motion.div>

            {/* ── SHARED PROJECT CAROUSEL (Applied to BOTH Tabs) ──────────────── */}
            {activeTab === "content" ? (
              <ProjectCarousel
                key="carousel-content"
                items={localizedContentProjects}
                autoAdvanceMs={5000}
                renderItem={(project, index) => (
                  <ProjectCard
                    project={project}
                    index={index}
                    isContent={true}
                    onWatchVideo={(p) => setPlayingVideo(p)}
                  />
                )}
              />
            ) : (
              <ProjectCarousel
                key="carousel-website"
                items={localizedWebProjects}
                autoAdvanceMs={5000}
                renderItem={(project, index) => (
                  <ProjectCard
                    project={project}
                    index={index}
                    isContent={false}
                  />
                )}
              />
            )}

            {/* ── FOOTER CTA (Swaps according to active tab) ─────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.15 }}
              className="flex items-center justify-center gap-3 mt-16"
            >
              <div className="h-px flex-1 max-w-[80px] bg-base-300" />
              {activeTab === "content" ? (
                <a
                  href="https://www.youtube.com/@tahanaghdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2.5 px-6 py-2.5
                    rounded-2xl text-[12px] font-bold
                    bg-rose-500/10 border border-rose-500/30
                    text-rose-500
                    hover:bg-rose-500 hover:text-white
                    hover:-translate-y-0.5
                    transition-all duration-200 shadow-sm
                  "
                >
                  <FaYoutube className="text-sm" />
                  {t("projects.actions.viewAllYoutube", "View all on YouTube")}
                </a>
              ) : (
                <a
                  href="https://github.com/mtn-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2.5 px-6 py-2.5
                    rounded-2xl text-[12px] font-bold
                    bg-base-200 border border-base-300
                    text-base-content/75
                    hover:text-base-content hover:border-primary/40 hover:bg-base-200
                    hover:-translate-y-0.5
                    transition-all duration-200
                  "
                >
                  <FaGithub className="text-sm" />
                  {t("projects.actions.viewAllGithub", "View all on GitHub")}
                </a>
              )}
              <div className="h-px flex-1 max-w-[80px] bg-base-300" />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* ── VIDEO PLAYBACK MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.28, ease }}
              className={`relative w-full ${playingVideo.aspectRatio === "9:16"
                  ? "max-w-[420px]"
                  : "max-w-4xl"
                } bg-base-100 rounded-3xl border border-base-300 shadow-2xl overflow-hidden flex flex-col`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-base-300/60 bg-base-200/50">
                <div className="flex items-center gap-2.5 min-w-0 pr-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse flex-shrink-0" />
                  <h4 className="text-sm font-black truncate text-base-content">
                    {playingVideo.name}
                  </h4>
                  {playingVideo.duration && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-500 border border-rose-500/20 flex-shrink-0">
                      {playingVideo.duration}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setPlayingVideo(null)}
                  className="w-8 h-8 rounded-full bg-base-300/60 hover:bg-base-300 text-base-content flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
                  aria-label="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Video container */}
              <div
                className={`relative w-full bg-black flex items-center justify-center ${playingVideo.aspectRatio === "9:16"
                    ? "aspect-[9/16] max-h-[72vh]"
                    : "aspect-video"
                  }`}
              >
                <video
                  src={playingVideo.video}
                  poster={playingVideo.image}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Footer with Details button */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-base-200/40 border-t border-base-300/60 text-xs">
                <span className="text-base-content/60 text-[11px] truncate max-w-[200px] sm:max-w-none">
                  {playingVideo.skills?.slice(0, 3).join(" • ")}
                </span>
                <Link
                  to={`/projects/${playingVideo.slug}`}
                  onClick={() => setPlayingVideo(null)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-primary-content text-[11px] font-bold hover:bg-primary/90 transition-all"
                >
                  {t("projects.actions.details", "Details")} →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;