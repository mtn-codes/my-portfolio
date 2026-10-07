// MobileJourney — Education + Experience combined as a single M3 Timeline.

import { useState } from "react";
import {
  FaUniversity,
  FaLaptopCode,
  FaFilm,
  FaMicrochip,
  FaCertificate,
  FaBrain,
  FaBriefcase,
  FaRocket,
  FaVideo,
  FaIndustry,
  FaStore,
  FaLandmark,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import M3Card from "../components/M3Card";
import M3Timeline, { M3TimelineItem } from "../components/M3Timeline";
import M3Chip from "../components/M3Chip";

const EDUCATION = [
  {
    icon: <FaUniversity />,
    color: "primary",
    defaultTitle: "BSc in Computer Engineering",
    defaultOrg: "Falagh University",
    defaultPeriod: "2023 — Present",
    defaultLocation: "Falagh University",
    defaultResult: "Undergraduate",
    defaultHighlights: ["Software Engineering", "System Architecture", "Algorithms"],
  },
  {
    icon: <FaLaptopCode />,
    color: "secondary",
    defaultTitle: "CS50 Summer Course",
    defaultOrg: "Harvard CS50 (Online)",
    defaultPeriod: "Completed",
    defaultLocation: "Online",
    defaultResult: "Certified",
    defaultHighlights: ["Computer Science Fundamentals", "C & Python", "Algorithms"],
  },
  {
    icon: <FaFilm />,
    color: "accent",
    defaultTitle: "Cinematography Certificate",
    defaultOrg: "Ghermez Cinema Academy",
    defaultPeriod: "Completed",
    defaultLocation: "Cinema Academy",
    defaultResult: "Certified",
    defaultHighlights: ["Cinematic Lighting", "Advanced Editing", "Visual Storytelling"],
  },
  {
    icon: <FaMicrochip />,
    color: "warning",
    defaultTitle: "IoT, Python & Electrical Circuit Design Certificate",
    defaultOrg: "Technical & Vocational Training Organization",
    defaultPeriod: "Completed",
    defaultLocation: "Vocational Center",
    defaultResult: "Certified",
    defaultHighlights: ["IoT Systems", "Python Programming", "Circuit Design"],
  },
  {
    icon: <FaCertificate />,
    color: "info",
    defaultTitle: "Social Media Specialist Business License",
    defaultOrg: "Guild & Business Licensing Union",
    defaultPeriod: "Licensed",
    defaultLocation: "Guild Union",
    defaultResult: "Licensed",
    defaultHighlights: ["Marketing Strategy", "Content Management", "Brand Development"],
  },
  {
    icon: <FaBrain />,
    color: "primary",
    defaultTitle: "Artificial Intelligence Certificate",
    defaultOrg: "Finland University",
    defaultPeriod: "Completed",
    defaultLocation: "Finland University",
    defaultResult: "Certified",
    defaultHighlights: ["Artificial Intelligence", "Machine Learning", "International"],
  },
  {
    icon: <FaBriefcase />,
    color: "secondary",
    defaultTitle: "MBA — Business Management",
    defaultOrg: "Executive MBA Program",
    defaultPeriod: "In Progress",
    defaultLocation: "MBA Institute",
    defaultResult: "In Progress",
    defaultHighlights: ["Strategic Management", "Leadership", "Market Analysis"],
  },
];

const EXPERIENCE = [
  {
    icon: <FaRocket />,
    color: "primary",
    defaultTitle: "Founder & Manager",
    defaultOrg: "Tirazh Advertising Agency",
    defaultPeriod: "2020 — Present",
    defaultLocation: "Nationwide, Iran",
    defaultSummary: "Leading an agency delivering end-to-end video advertising, design & printing, and web development.",
    defaultBullets: [
      "Cinematic Video Advertising Campaigns",
      "Design & Print Production",
      "Software & Custom Web Development",
    ],
  },
  {
    icon: <FaVideo />,
    color: "secondary",
    defaultTitle: "Executive Manager",
    defaultOrg: "CStudio Advertising Agency",
    defaultPeriod: "2022 — 2024",
    defaultLocation: "Iran · Contract",
    defaultSummary: "Directed and executed cinematic videography, advanced editing, and AI-driven content production.",
    defaultBullets: [
      "Cinematic Videography & Editing",
      "Project Design & Execution",
      "Website Design & AI Content Production",
    ],
  },
  {
    icon: <FaIndustry />,
    color: "accent",
    defaultTitle: "Industrial & Construction Collaborations",
    defaultOrg: "Multi-Industry Clients",
    defaultPeriod: "2023 — Present",
    defaultLocation: "Iran",
    defaultSummary: "Executing video production, branding, automation, and documentary for major industrial factories.",
    defaultBullets: [
      "Saina Textile Factory",
      "Simfam Aluminum Factory",
      "Black Tiara Stone Factory",
      "Favania Construction Project",
    ],
  },
  {
    icon: <FaStore />,
    color: "warning",
    defaultTitle: "Retail & Service Collaborations",
    defaultOrg: "Retail & Commercial Clients",
    defaultPeriod: "2023 — Present",
    defaultLocation: "Iran",
    defaultSummary: "Delivering digital infrastructure, advertising media, and elevated branding for retail businesses.",
    defaultBullets: [
      "Plaque 8 Hall Project",
      "Ebrahimi Watch Project",
      "Masirino Project",
      "Enzo Furniture Project",
    ],
  },
  {
    icon: <FaLandmark />,
    color: "info",
    defaultTitle: "Cultural Affairs Collaboration",
    defaultOrg: "Ministry of Culture & Islamic Guidance (Ershad)",
    defaultPeriod: "2022 — Present",
    defaultLocation: "Iran",
    defaultSummary: "Producing cultural real-motion video productions and promotional showcase series.",
    defaultBullets: [
      "Cultural Real-Motion Productions",
      "Cultural & Artistic Projects",
      "Collection Introduction Videos",
    ],
  },
];

export default function MobileJourney() {
  const { t, i18n } = useTranslation();
  const [tab, setTab] = useState("education");

  return (
    <div className="px-4 pt-2 pb-10 text-left rtl:text-right">
      {/* ═══ Page-Level Header ════════════════════════════════════════ */}
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-extrabold">
          {tab === "education" ? t("education.eyebrow", "Academic Background") : t("work.eyebrow", "Career Path")}
        </p>
        <h1 className="text-3xl font-black text-base-content tracking-tight leading-tight mt-1">
          {tab === "education" ? (
            <>
              {t("education.title", "Educational")}{" "}
              <span className="text-primary">{t("education.journey", "Journey")}</span>
            </>
          ) : (
            <>
              {t("work.title", "Work")}{" "}
              <span className="text-primary">{t("work.experience", "Experience")}</span>
            </>
          )}
        </h1>
        <p className="text-sm font-medium text-base-content/75 mt-1.5 leading-relaxed">
          {tab === "education"
            ? t("education.tagline", "Knowledge · Discipline · Excellence")
            : t("work.tagline", "Innovation · Leadership · Execution")}
        </p>
      </div>

      {/* Segmented control */}
      <div className="bg-base-200/80 rounded-full p-1 flex mb-6">
        {[
          { key: "education", label: t("nav.education", "Education") },
          { key: "experience", label: t("nav.experience", "Experience") },
        ].map((tItem) => (
          <button
            key={tItem.key}
            type="button"
            onClick={() => setTab(tItem.key)}
            className={`
              flex-1 h-10 rounded-full text-xs font-black
              transition-all duration-200
              ${tab === tItem.key
                ? "bg-primary text-primary-content m3-elev-1 shadow-sm"
                : "text-base-content/70 active:text-primary"}
            `}
          >
            {tItem.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${i18n.language}-${tab}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          {tab === "education" && (
            <M3Timeline>
              {EDUCATION.map((e, i) => {
                const title = t(`education.items.${i}.title`, e.defaultTitle);
                const org = t(`education.items.${i}.institution`, e.defaultOrg);
                const period = t(`education.items.${i}.year`, e.defaultPeriod);
                const result = t(`education.items.${i}.result`, e.defaultResult);
                const rawHighlights = t(`education.items.${i}.highlights`, { returnObjects: true });
                const highlights = Array.isArray(rawHighlights) ? rawHighlights : e.defaultHighlights;

                return (
                  <M3TimelineItem
                    key={i}
                    index={i}
                    icon={e.icon}
                    color={e.color}
                    title={title}
                    subtitle={`${org} · ${period}`}
                    trailing={
                      <span className="m3-label-large text-primary font-bold">{result}</span>
                    }
                  >
                    <div className="flex items-center gap-2 text-base-content/65 m3-body-medium mb-3">
                      <FaMapMarkerAlt className="text-xs text-primary" />
                      <span>{org}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {highlights.map((h, hIdx) => (
                        <M3Chip key={hIdx} label={h} />
                      ))}
                    </div>
                  </M3TimelineItem>
                );
              })}
            </M3Timeline>
          )}

          {tab === "experience" && (
            <M3Timeline>
              {EXPERIENCE.map((x, i) => {
                const title = t(`work.items.${i}.title`, x.defaultTitle);
                const org = t(`work.items.${i}.company`, x.defaultOrg);
                const period = t(`work.items.${i}.duration`, x.defaultPeriod);
                const location = t(`work.items.${i}.location`, x.defaultLocation);
                const summary = t(`work.items.${i}.description`, x.defaultSummary);
                const rawBullets = t(`work.items.${i}.achievements`, { returnObjects: true });
                const bullets = Array.isArray(rawBullets) ? rawBullets : x.defaultBullets;

                return (
                  <M3TimelineItem
                    key={i}
                    index={i}
                    icon={x.icon}
                    color={x.color}
                    title={title}
                    subtitle={`${org} · ${period}`}
                    trailing={
                      <span className="text-base-content/55 text-xs flex items-center gap-1">
                        <FaMapMarkerAlt className="text-primary" /> {location}
                      </span>
                    }
                  >
                    <p className="m3-body-medium text-base-content/75 mb-3.5 leading-[1.8] text-[13px] font-body-fa">
                      {summary}
                    </p>
                    <ul className="space-y-2.5">
                      {bullets.map((b, j) => (
                        <li
                          key={j}
                          className="m3-body-medium text-base-content/70 flex items-start gap-2.5"
                        >
                          <span className="text-primary mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="leading-relaxed font-body-fa">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </M3TimelineItem>
                );
              })}
            </M3Timeline>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA card */}
      <M3Card elevation={0} className="bg-primary text-primary-content !border-0 m3-shape-2xl mt-8">
        <div className="flex items-center gap-3">
          <FaBriefcase className="text-2xl flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <h4 className="m3-title-large font-bold font-body-fa">{t("hero.status", "Open to opportunities")}</h4>
            <p className="m3-body-medium opacity-90 mt-0.5 font-body-fa">
              {t("about.tagline", "Filmmaker · Developer · Problem Solver")}
            </p>
          </div>
        </div>
      </M3Card>
    </div>
  );
}