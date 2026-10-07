// MobileProjectDetails — M3-styled project detail page.

import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getProjectBySlug, getAdjacentProjects } from "../../shared/data/projects";
import M3Card from "../components/M3Card";
import M3Button from "../components/M3Button";
import M3Chip from "../components/M3Chip";

export default function MobileProjectDetails() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();

  const project = useMemo(() => getProjectBySlug(slug, i18n.language), [slug, i18n.language]);
  const { prev, next } = useMemo(() => {
    const adj = getAdjacentProjects(slug);
    return {
      prev: adj.prev ? getProjectBySlug(adj.prev.slug, i18n.language) : null,
      next: adj.next ? getProjectBySlug(adj.next.slug, i18n.language) : null,
    };
  }, [slug, i18n.language]);

  if (!project) {
    return (
      <div className="px-4 py-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="m3-headline-medium text-base-content font-bold">
          {t("mobile.projectNotFound", "Project not found")}
        </h2>
        <Link to="/skills-projects#projects" className="text-primary font-semibold mt-3 inline-block">
          {t("mobile.backToProjects", "← Back to projects")}
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 pt-2 pb-10 text-left rtl:text-right overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${slug}-${i18n.language}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Hero video or image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.32 }}
          >
            <M3Card elevation={2} className="!p-2 bg-base-200/40 m3-shape-2xl overflow-hidden border border-base-300/70 shadow-sm">
              {project.video ? (
                <div className={`w-full ${project.aspectRatio === "9:16" ? "aspect-[9/16] max-h-[60vh] mx-auto" : "aspect-video"} bg-black rounded-xl overflow-hidden flex items-center justify-center`}>
                  <video
                    src={project.video}
                    poster={project.image}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={typeof project.name === "string" ? project.name : ""}
                  className="w-full h-44 object-contain rounded-xl"
                />
              )}
            </M3Card>
          </motion.div>

          {/* Title & Description */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-base-content leading-tight tracking-tight">
              {project.name}
            </h1>
            <p className="text-sm font-medium text-base-content/75 mt-2 leading-[1.8] font-body-fa">
              {project.description}
            </p>
          </div>

          {/* Skills / Tech Stack */}
          {project.skills && project.skills.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-primary font-extrabold mb-2.5">
                {t("projects.modal.stack", "Stack")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((s) => (
                  <M3Chip key={s} label={s} />
                ))}
              </div>
            </div>
          )}

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-2">
            {project.github && (
              <M3Button
                variant="tonal"
                icon={<FaGithub />}
                href={project.github}
                size="small"
              >
                {t("projects.actions.code", "Code")}
              </M3Button>
            )}
            {project.live && (
              <M3Button
                variant="filled"
                icon={<FaExternalLinkAlt />}
                iconRight={<FaArrowRight className="text-xs rtl:rotate-180" />}
                href={project.live}
                size="small"
              >
                {t("projects.actions.live", "Live")}
              </M3Button>
            )}
          </div>

          {/* Story */}
          {project.story && (
            <M3Card elevation={1} className="m3-shape-xl">
              <p className="m3-label-large text-primary mb-1 font-bold">
                {t("projects.modal.story", "Story")}
              </p>
              <p className="m3-body-medium text-base-content/85 leading-relaxed">{project.story}</p>
            </M3Card>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <M3Card elevation={1} className="m3-shape-xl">
              <p className="m3-label-large text-primary mb-2 font-bold">
                {t("projects.modal.features", "Features")}
              </p>
              <ul className="space-y-1.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 m3-body-medium text-base-content/85">
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </M3Card>
          )}

          {/* Problem / objective */}
          {(project.problem || project.objective) && (
            <div className="grid grid-cols-1 gap-3">
              {project.problem && (
                <M3Card elevation={0} className="bg-primary/8 border border-primary/20 m3-shape-xl">
                  <p className="m3-label-large text-primary mb-1 font-bold">
                    {t("projects.modal.problem", "Problem")}
                  </p>
                  <p className="m3-body-medium text-base-content/85 leading-relaxed">{project.problem}</p>
                </M3Card>
              )}
              {project.objective && (
                <M3Card elevation={0} className="bg-secondary/8 border border-secondary/20 m3-shape-xl">
                  <p className="m3-label-large text-secondary mb-1 font-bold">
                    {t("projects.modal.objective", "Objective")}
                  </p>
                  <p className="m3-body-medium text-base-content/85 leading-relaxed">{project.objective}</p>
                </M3Card>
              )}
            </div>
          )}

          {/* Architecture / challenges */}
          {project.architecture && (
            <M3Card elevation={1} className="m3-shape-xl">
              <p className="m3-label-large text-primary mb-1 font-bold">
                {t("projects.modal.architecture", "Architecture")}
              </p>
              <p className="m3-body-medium text-base-content/85 leading-relaxed">{project.architecture}</p>
            </M3Card>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <M3Card elevation={1} className="m3-shape-xl">
              <p className="m3-label-large text-warning mb-2 font-bold">
                {t("projects.modal.challenges", "Challenges")}
              </p>
              <ul className="space-y-1.5">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 m3-body-medium text-base-content/80">
                    <span className="text-warning mt-1.5 w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </M3Card>
          )}

          {/* Tech stack grouped */}
          {project.techStack && Object.keys(project.techStack).length > 0 && (
            <M3Card elevation={1} className="m3-shape-xl">
              <p className="m3-label-large text-primary mb-2 font-bold">
                {t("projects.modal.stack", "Tech Stack")}
              </p>
              <div className="space-y-2">
                {Object.entries(project.techStack).map(([group, items]) => (
                  <div key={group}>
                    <p className="m3-label-medium text-base-content/55 capitalize font-semibold">{group}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {Array.isArray(items) && items.map((it) => (
                        <M3Chip key={it} label={it} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </M3Card>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <M3Card elevation={0} className="bg-primary text-primary-content !border-0 m3-shape-2xl">
              <p className="m3-label-large opacity-85 mb-2 font-bold">
                {t("projects.modal.metrics", "Key Metrics")}
              </p>
              <ul className="space-y-1">
                {project.metrics.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 m3-body-medium">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-content flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </M3Card>
          )}

          {/* Prev / next */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {prev && (
              <Link to={`/projects/${prev.slug}`}>
                <M3Card elevation={1} className="text-left rtl:text-right m3-shape-xl">
                  <p className="m3-label-medium text-base-content/55 flex items-center gap-1">
                    <FaArrowLeft className="text-[10px] rtl:rotate-180" /> {t("mobile.prev", "Previous")}
                  </p>
                  <p className="m3-body-large font-bold text-base-content truncate mt-0.5">
                    {typeof prev.name === "string" ? prev.name.split(" - ")[0] : ""}
                  </p>
                </M3Card>
              </Link>
            )}
            {next && (
              <Link to={`/projects/${next.slug}`}>
                <M3Card elevation={1} className="text-left rtl:text-right m3-shape-xl">
                  <p className="m3-label-medium text-base-content/55 flex items-center justify-end gap-1">
                    {t("mobile.next", "Next")} <FaArrowRight className="text-[10px] rtl:rotate-180" />
                  </p>
                  <p className="m3-body-large font-bold text-base-content truncate mt-0.5 text-right rtl:text-left">
                    {typeof next.name === "string" ? next.name.split(" - ")[0] : ""}
                  </p>
                </M3Card>
              </Link>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}