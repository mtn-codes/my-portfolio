// MobileSkillsProjects — Android-styled Skills & Projects Hub.
// Features a distinct top Segmented Control separating [Skills] and [Projects],
// with URL hash synchronization (#skills / #projects) and full i18n support.

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaLightbulb,
  FaFilm,
  FaBrain,
  FaCogs,
  FaCode,
  FaPlay,
  FaLaptopCode,
} from "react-icons/fa";
import {
  projects as rawWebProjects,
  contentProjects as rawContentProjects,
  getLocalizedProject,
} from "../../shared/data/projects";
import { SKILLS_DATA, CATEGORY_META } from "../../sections/Skills";
import M3Card from "../components/M3Card";
import M3Button from "../components/M3Button";
import M3Chip from "../components/M3Chip";
import SegmentedToggle from "../components/SegmentedToggle";

// ─── Motion tokens ───────────────────────────────────────────────────────────

const SPRING = { type: "spring", stiffness: 320, damping: 30 };
const EASE_OUT = [0.22, 1, 0.36, 1];

// ─── Projects Snap Carousel ──────────────────────────────────────────────────

function ProjectsSnapCarousel({ items, onOpenMedia }) {
  const { t, i18n } = useTranslation();
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
    return el.clientWidth * 0.86 + 12;
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

  if (!items.length) return null;

  return (
    <div className="mb-6">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 -mx-4 px-4 pb-2"
        >
          {cloned.map((p, i) => (
            <motion.div
              key={`${p.slug}-${i}`}
              className="snap-center shrink-0 w-[86%] text-left rtl:text-right"
            >
              <M3Card elevation={2} className="m3-shape-xl overflow-hidden p-0 h-full flex flex-col justify-between">
                {p.media?.[0] ? (
                  <div className="relative h-44 bg-base-200 overflow-hidden">
                    <img
                      src={p.media[0]}
                      alt={typeof p.name === "string" ? p.name : ""}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {p.videoUrl && (
                      <a
                        href={p.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m3-tap absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/40 transition-colors"
                        aria-label="Play video"
                      >
                        <span className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center text-lg shadow-lg">
                          <FaPlay className="ltr:ml-0.5 rtl:mr-0.5" />
                        </span>
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="relative h-36 bg-base-200 flex items-center justify-center p-4">
                    <img
                      src={p.image}
                      alt=""
                      className="h-20 w-20 object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="m3-title-large text-base-content font-bold leading-tight line-clamp-1 font-body-fa">
                      {typeof p.name === "string" ? p.name.split(" - ")[0] : ""}
                    </h3>
                    <p className="m3-body-medium text-base-content/65 line-clamp-2 mt-1 font-body-fa">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.skills?.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center h-6 px-2 rounded-md bg-base-200 text-base-content/75 text-[11px] font-medium font-body-fa"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-base-300/50">
                    <div className="flex items-center gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="m3-tap text-base-content/60 active:text-primary text-lg p-1"
                          aria-label="GitHub repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="m3-tap text-base-content/60 active:text-primary text-base p-1"
                          aria-label="Live preview"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                    <Link to={`/projects/${p.slug}`}>
                      <M3Button variant="tonal" size="small" iconRight={<FaArrowRight className="text-xs rtl:rotate-180" />}>
                        {t("mobile.open", "Details")}
                      </M3Button>
                    </Link>
                  </div>
                </div>
              </M3Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicator dots: ordered according to language reading direction */}
      <div dir={isRtl ? "rtl" : "ltr"} className="flex items-center justify-center gap-1.5 mt-3">
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

// ─── Project Grid Card ───────────────────────────────────────────────────────

function ProjectGridItem({ project }) {
  const { t } = useTranslation();

  return (
    <M3Card elevation={1} className="m3-shape-xl overflow-hidden p-3.5 text-left rtl:text-right flex flex-col justify-between">
      <div className="flex items-start gap-3">
        <div className="relative w-14 h-14 rounded-2xl bg-base-200 ring-1 ring-base-300/60 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="m3-title-medium text-base-content font-bold leading-tight truncate font-body-fa">
            {typeof project.name === "string" ? project.name.split(" - ")[0] : ""}
          </h3>
          <p className="m3-body-medium text-base-content/65 line-clamp-2 mt-0.5 font-body-fa">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.skills?.slice(0, 3).map((s) => (
          <span
            key={s}
            className="inline-flex items-center h-5.5 px-2 rounded-md bg-base-200 text-base-content/75 text-[10.5px] font-medium font-body-fa"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-base-300/50">
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-tap text-base-content/60 active:text-primary text-base p-1"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="m3-tap text-base-content/60 active:text-primary text-sm p-1"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <Link to={`/projects/${project.slug}`}>
          <M3Button variant="tonal" size="small" iconRight={<FaArrowRight className="text-[10px] rtl:rotate-180" />}>
            {t("projects.actions.details", "Details")}
          </M3Button>
        </Link>
      </div>
    </M3Card>
  );
}

// ─── Skill Typewriter Title ──────────────────────────────────────────────────

function SkillTypewriterTitle({ text, delay = 0, isReducedMotion }) {
  const [displayedText, setDisplayedText] = useState(isReducedMotion ? text : "");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isReducedMotion) {
      setDisplayedText(text);
      return;
    }

    setDisplayedText("");
    setIsTyping(true);

    const startTimer = setTimeout(() => {
      let charIndex = 0;
      const interval = setInterval(() => {
        charIndex += 1;
        setDisplayedText(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 35); // 35ms per character

      return () => clearInterval(interval);
    }, Math.max(0, delay * 1000));

    return () => clearTimeout(startTimer);
  }, [text, delay, isReducedMotion]);

  return (
    <span className="relative inline-block font-black">
      {displayedText}
      {!isReducedMotion && isTyping && (
        <span className="inline-block w-[2px] h-[13px] bg-primary ltr:ml-0.5 rtl:mr-0.5 align-middle animate-pulse" />
      )}
    </span>
  );
}

// ─── Mobile Skill Summaries (Concise, punchy descriptions for mobile cards) ──
const MOBILE_SKILL_SUMMARIES = {
  fa: {
    cinematography: "حرکت حرفه‌ای دوربین، قاب‌بندی سینمایی و زبان بصری.",
    videoEditing: "تدوین غیرخطی و مونتاژ داستانی در پریمیر و داوینچی.",
    lighting: "نورپردازی سه‌نقطه‌ای، تنظیم کنتراست و فضاسازی سینمایی.",
    motionGraphics: "طراحی موشن گرافیک داینامیک و تایپوگرافی متحرک.",
    colorGrading: "اصلاح دقیق رنگ و کالر گریدینگ سینمایی در DaVinci.",
    soundDesign: "مهندسی صدا، ضبط فولی و فضاسازی صوتی سینمایی.",
    aiVideoGen: "تولید ویدیوی سینمایی با مدل‌های هوش مصنوعی.",
    promptEngineering: "پرامپت‌نویسی پیشرفته و ساخت کانتکست برای LLMها.",
    aiAgents: "توسعه ایجنت‌های هوشمند خودکار و ابزارهای تحلیلی AI.",
    aiImageGen: "تولید تصاویر تجاری با کیفیت بالا با هوش مصنوعی.",
    contentStrategy: "استراتژی محتوای ویدیویی و رشد برند در شبکه‌ها.",
    aiVoiceCloning: "کلونینگ طبیعی صدا، دوبله و تولید پادکست هوشمند.",
    scriptwriting: "نگارش فیلمنامه تبلیغاتی و سناریونویسی خلاقانه.",
    digitalBranding: "طراحی هویت دیجیتال و استراتژی بصری برند.",
    industrialAutomation: "اتوماسیون صنعتی و بهینه‌سازی خطوط تولید.",
    smartGadgets: "طراحی و ساخت گجت‌های الکترونیکی و هوشمند سفارشی.",
    iotSensors: "یکپارچه‌سازی سنسورهای اینترنت اشیاء و تله‌متری داده.",
    pythonAutomation: "اسکریپت‌نویسی پایتون برای خودکارسازی فرآیندها.",
    microcontrollers: "برنامه‌نویسی آردوینو و میکروکنترلرها برای سیستم‌های نهفته.",
    react: "توسعه وب‌اپلیکیشن‌های سریع و مدرن با ری‌اکت.",
    fullstackDev: "توسعه فول‌استک از فرانت‌اند تا بک‌اند و دیتابیس.",
    tailwind: "طراحی رابط‌های کاربری مدرن با Tailwind CSS.",
    framerMotion: "پیاده‌سازی انیمیشن‌های روان و تعاملات جذاب کاربری.",
    nodejs: "ساخت وب‌سرویس‌ها و APIهای سریع با Node.js.",
    postgresql: "طراحی دیتابیس‌های رابطه‌ای و مدیریت بهینه داده.",
    firebase: "پیاده‌سازی بک‌اند Realtime و احراز هویت ابری.",
    security: "امنیت وب‌اپلیکیشن و محافظت از داده‌های کاربر.",
    uiux: "طراحی تجربه کاربری بصری و پروتوتایپینگ مدرن.",
    algorithms: "ساختمان داده‌ها و طراحی الگوریتم‌های بهینه.",
    os: "مفاهیم سیستم‌های عامل و مدیریت بهینه فرآیندها.",
    networks: "پروتکل‌های شبکه و ارتباطات امن داده.",
    git: "کنترل نسخه، برنچینگ حرفه‌ای و گیت‌هاب.",
    linux: "مدیریت سرور، بش اسکریپت و سیستم‌های لینوکس.",
  },
  en: {
    cinematography: "Cinematic framing, camera movement, and visual storytelling.",
    videoEditing: "Non-linear storytelling, pacing, and post-production.",
    lighting: "Dramatic contrast, studio, and 3-point lighting setup.",
    motionGraphics: "Dynamic 2D motion graphics and animated typography.",
    colorGrading: "Skin-tone precision and cinematic grading in DaVinci.",
    soundDesign: "Audio cleanup, foley capture, and atmospheric layering.",
    aiVideoGen: "AI video generation and diffusion-based cinematic pipelines.",
    promptEngineering: "Structured context prompting and LLM optimization.",
    aiAgents: "Autonomous intelligent agents and workflow automation.",
    aiImageGen: "Commercial asset generation and visual styling with AI.",
    contentStrategy: "Video retention, brand growth, and distribution strategy.",
    aiVoiceCloning: "Voice synthesis, localization, and automated dubbing.",
    scriptwriting: "Creative commercial scripts and narrative pacing.",
    digitalBranding: "Digital identity, cohesive visual design, and positioning.",
    industrialAutomation: "Industrial control, PLC logic, and line monitoring.",
    smartGadgets: "Custom electronic gadget fabrication and prototyping.",
    iotSensors: "Sensor integration, IoT telemetry, and signal pipelines.",
    pythonAutomation: "Python scripting for automated data workflows.",
    microcontrollers: "Arduino, microcontrollers, and embedded logic.",
    react: "Modern responsive web applications with React.",
    fullstackDev: "Full-stack web engineering across front and backend.",
    tailwind: "Modern utility styling and responsive UI systems.",
    framerMotion: "Smooth physics-based micro-interactions and transitions.",
    nodejs: "Scalable backends, RESTful APIs, and server logic.",
    postgresql: "Relational database schema design and optimization.",
    firebase: "Real-time sync, auth, and cloud serverless storage.",
    security: "Web application security, OWASP, and access controls.",
    uiux: "Intuitive UX workflows and polished design systems.",
    algorithms: "Data structures and efficient algorithmic problem solving.",
    os: "Operating system internals, memory, and processes.",
    networks: "Network protocols, sockets, and secure communications.",
    git: "Version control, branching workflows, and collaboration.",
    linux: "Linux systems administration, shell scripting, and tooling.",
  },
  ar: {
    cinematography: "حركة الكاميرا الاحترافية، والتأطير السينمائي، والسرد البصري.",
    videoEditing: "المونتاج اللاخطي والسرد القصصي في Premiere و DaVinci.",
    lighting: "إضاءة سينمائية ثلاثية النقاط، وضبط التباين الدرامي.",
    motionGraphics: "تصميم موشن جرافيك ديناميكي وتايبوجرافي متحرك.",
    colorGrading: "تدريج وتصحيح الألوان السينمائي بدقة في DaVinci.",
    soundDesign: "هندسة الصوت، وتسجيل المؤثرات، والطبقات الصوتية.",
    aiVideoGen: "إنتاج فيديو سينمائي بنماذج الذكاء الاصطناعي الحديثة.",
    promptEngineering: "صياغة الأوامر وهندسة السياق المتقدمة لنماذج LLM.",
    aiAgents: "تطوير وكلاء الذكاء الاصطناعي الأذكياء وأتمتة المهام.",
    aiImageGen: "توليد صور تجارية عالية الدقة بالذكاء الاصطناعي.",
    contentStrategy: "استراتيجية المحتوى المرئي وتنمية العلامة التجارية.",
    aiVoiceCloning: "استنساخ الصوت الطبيعي والدبلجة وإنتاج البودكاست.",
    scriptwriting: "كتابة السيناريو الإعلاني والقصص الإبداعية.",
    digitalBranding: "تصميم الهوية الرقمية والاستراتيجية البصرية.",
    industrialAutomation: "الأتمتة الصناعية ومراقبة خطوط الإنتاج وتحسينها.",
    smartGadgets: "تصميم وتصنيع الأجهزة الإلكترونية الذكية المخصصة.",
    iotSensors: "تكامل مستشعرات إنترنت الأشياء والقياس عن بُعد.",
    pythonAutomation: "برمجة بايثون لأتمتة سير العمل ومعالجة البيانات.",
    microcontrollers: "برمجة أردوينو والمتحكمات الدقيقة للأنظمة المدمجة.",
    react: "بناء تطبيقات ويب عصرية وسريعة الاستجابة باستخدام React.",
    fullstackDev: "تطوير الويب المتكامل من الواجهات إلى الخوادم وقواعد البيانات.",
    tailwind: "تصميم واجهات مستخدم حديثة ومتجاوبة بـ Tailwind CSS.",
    framerMotion: "تنفيذ رسوم متحركة سلسة وتفاعلات ممتعة للمستخدم.",
    nodejs: "بناء خدمات الويب والواجهات البرمجية السريعة باستخدام Node.js.",
    postgresql: "تصميم قواعد البيانات العلائقية وإدارتها بكفاءة عالية.",
    firebase: "تطبيق خلفيات البيانات في الوقت الفعلي والتخزين السحابي.",
    security: "أمان تطبيقات الويب وحماية بيانات المستخدمين.",
    uiux: "تصميم تجربة المستخدم البصرية وبناء النماذج الأولية.",
    algorithms: "هياكل البيانات وتصميم الخوارزميات عالية الكفاءة.",
    os: "مفاهيم أنظمة التشغيل وإدارة العمليات والذاكرة.",
    networks: "بروتوكولات الشبكات والاتصالات البرمجية الآمنة.",
    git: "إدارة الإصدارات البرمجية والتعاون الجماعي عبر GitHub.",
    linux: "إدارة أنظمة لينكس وبرمجة نصوص الشل للخوادم.",
  },
};

// ─── Skill Card with 3D Reveal Animation ─────────────────────────────────────

function SkillCard({ skill, index = 0, isReducedMotion = false }) {
  const { t, i18n } = useTranslation();
  const meta = CATEGORY_META[skill.category] || {};

  const name = t(`skills.items.${skill.key}.name`, skill.key);
  const rawDesc = t(`skills.items.${skill.key}.desc`, "");
  const tag = t(`skills.items.${skill.key}.tag`, "Expert");

  const lang = i18n.language || "fa";
  const desc =
    MOBILE_SKILL_SUMMARIES[lang]?.[skill.key] ||
    MOBILE_SKILL_SUMMARIES.fa[skill.key] ||
    rawDesc;

  const skillCard3DVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.88,
      rotateX: 20,
      rotateY: -6,
      z: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 22,
      },
    },
  };

  const skillCardReducedVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={isReducedMotion ? skillCardReducedVariants : skillCard3DVariants}
      className="h-full flex flex-col transform-gpu"
      style={{ transformStyle: "preserve-3d" }}
    >
      <M3Card
        elevation={1}
        className="m3-shape-xl p-4 text-left rtl:text-right h-full min-h-[185px] flex flex-col justify-between border border-base-300/70 shadow-sm"
      >
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1.5 mb-2.5">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`w-7.5 h-7.5 rounded-xl flex items-center justify-center text-sm flex-shrink-0 ${meta.bg || "bg-primary/10"
                    } ${meta.color || "text-primary"}`}
                >
                  {skill.icon}
                </span>
                <span className="m3-label-medium uppercase tracking-wider text-base-content/60 truncate text-[10.5px] font-bold">
                  {t(`skills.categories.${meta.i18nKey}`, skill.category)}
                </span>
              </div>
              <span
                className={`m3-label-medium font-bold px-2 py-0.5 rounded-full border text-[9.5px] flex-shrink-0 font-body-fa ${skill.tagColor || "text-primary bg-primary/10 border-primary/20"
                  }`}
              >
                {tag}
              </span>
            </div>

            <h3 className="text-[13.5px] text-base-content font-black leading-tight line-clamp-1 min-h-[1.4em]">
              <SkillTypewriterTitle
                text={name}
                delay={index * 0.1 + 0.12}
                isReducedMotion={isReducedMotion}
              />
            </h3>
          </div>

          <p className="m3-body-medium text-base-content/70 mt-2.5 leading-[1.7] text-[11.5px] line-clamp-2 font-body-fa">
            {desc}
          </p>
        </div>
      </M3Card>
    </motion.div>
  );
}

// ─── Problem Solving Spotlight ───────────────────────────────────────────────

function ProblemSolvingCard() {
  const { t } = useTranslation();
  const rawTags = t("skills.problemSolving.tags", { returnObjects: true });
  const tags = Array.isArray(rawTags) ? rawTags : ["Analytical Thinking", "Problem Solving", "System Design"];

  return (
    <M3Card elevation={1} className="m3-shape-2xl p-4 border border-primary/25 bg-gradient-to-br from-primary/8 via-base-100 to-base-100 text-left rtl:text-right mt-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-10 h-10 rounded-2xl bg-primary text-primary-content flex items-center justify-center text-lg shadow-sm">
          <FaLightbulb />
        </span>
        <div>
          <p className="m3-label-medium uppercase tracking-[0.14em] text-primary font-bold">
            {t("about.coreExpertise", "Core Expertise")}
          </p>
          <h3 className="m3-title-large text-base-content font-extrabold leading-tight">
            {t("skills.problemSolving.title", "Problem Solving")}
          </h3>
        </div>
      </div>

      <p className="m3-body-medium text-base-content/75 leading-relaxed mt-2 font-body-fa">
        {t("skills.problemSolving.desc", "Strong analytical foundation in breaking down complex problems into efficient, scalable solutions.")}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center h-6 px-2.5 rounded-full bg-primary/12 text-primary font-semibold text-xs font-body-fa"
          >
            {tag}
          </span>
        ))}
      </div>
    </M3Card>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function MobileSkillsProjects() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Primary Segmented Tab: "skills" or "projects"
  const [mainTab, setMainTab] = useState(() => {
    return location.hash === "#projects" ? "projects" : "skills";
  });

  // Keep state in sync with URL hash if user navigated from outside
  useEffect(() => {
    if (location.hash === "#projects") {
      setMainTab("projects");
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (location.hash === "#skills") {
      setMainTab("skills");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.hash]);

  const handleTabChange = (tabKey) => {
    setMainTab(tabKey);
    window.history.replaceState(null, "", `#${tabKey}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // ─── Skills State ─────────────────────────────────────────────────────────
  const [skillCategory, setSkillCategory] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const categories = [
    { key: "all", label: t("skills.categories.all", "All"), icon: <FaStar className="text-xs" /> },
    { key: "Film & Video", label: t("skills.categories.film", "Film & Video"), icon: <FaFilm className="text-xs" /> },
    { key: "AI & Content", label: t("skills.categories.aiContent", "AI & Content"), icon: <FaBrain className="text-xs" /> },
    { key: "Automation", label: t("skills.categories.automation", "Automation"), icon: <FaCogs className="text-xs" /> },
    { key: "Web Design", label: t("skills.categories.webDesign", "Web Design"), icon: <FaCode className="text-xs" /> },
    { key: "Core CS", label: t("skills.categories.coreCs", "Core CS"), icon: <FaCode className="text-xs" /> },
  ];

  const filteredSkills = useMemo(() => {
    if (skillCategory === "all") return SKILLS_DATA;
    return SKILLS_DATA.filter((s) => s.category === skillCategory);
  }, [skillCategory]);

  const visibleSkills = useMemo(() => {
    if (showAllSkills) return filteredSkills;
    return filteredSkills.slice(0, 8);
  }, [filteredSkills, showAllSkills]);

  const skillGridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  // ─── Projects State ───────────────────────────────────────────────────────
  const [projectCategory, setProjectCategory] = useState("content");

  const localizedContentProjects = useMemo(() => {
    return rawContentProjects.map((p) => getLocalizedProject(p, i18n.language));
  }, [i18n.language]);

  const localizedWebProjects = useMemo(() => {
    return rawWebProjects.map((p) => getLocalizedProject(p, i18n.language));
  }, [i18n.language]);

  const activeProjects = projectCategory === "content" ? localizedContentProjects : localizedWebProjects;

  return (
    <div className="px-4 pt-2 pb-10">
      {/* ═══ Top Segmented Control (Skills vs Projects) ════════════════ */}
      <div className="py-2 mb-5">
        <SegmentedToggle
          value={mainTab}
          onChange={handleTabChange}
          layoutId="mobileMainTabToggle"
          options={[
            {
              value: "skills",
              label: t("mobile.tabSkills", "Skills"),
              icon: <FaCode className="text-sm" />,
            },
            {
              value: "projects",
              label: t("mobile.tabProjects", "Projects"),
              icon: <FaFilm className="text-sm" />,
            },
          ]}
        />
      </div>

      <AnimatePresence mode="wait">
        {mainTab === "skills" && (
          <motion.div
            key={`skills-${i18n.language}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
          >
            {/* Header */}
            <div className="text-left rtl:text-right mb-5">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-extrabold">
                {t("skills.eyebrow", "Technical Skills")}
              </p>
              <h1 className="text-3xl font-black text-base-content tracking-tight leading-tight mt-1">
                {t("skills.titlePrefix", "My")} <span className="text-primary">{t("skills.titleHighlight", "Expertise")}</span>
              </h1>
              <p className="text-sm font-medium text-base-content/75 mt-1.5 leading-relaxed">
                {t("skills.subtitle", "Film · AI · Automation · Web · Computer Science")}
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="overflow-hidden mb-5">
              <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 pb-1">
                {categories.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => {
                      setSkillCategory(c.key);
                      setShowAllSkills(false);
                    }}
                    className={`m3-tap shrink-0 h-9 px-4 rounded-full text-xs font-black border transition-all flex items-center gap-1.5 ${skillCategory === c.key
                        ? "bg-primary text-primary-content border-primary shadow-sm"
                        : "bg-base-100 text-base-content border-base-300/70 active:bg-base-200"
                      }`}
                  >
                    {c.icon}
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Skills count badge */}
            <div className="flex items-center justify-between text-base-content/65 text-xs mb-3 font-bold">
              <span>
                {t("skills.showing", { count: visibleSkills.length, total: filteredSkills.length })}
              </span>
            </div>

            {/* Skills Card Grid — 2 columns with 3D sequential reveal */}
            <motion.div
              key={`skills-grid-${skillCategory}`}
              variants={skillGridVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-3.5 my-3 items-stretch perspective-[1000px]"
              style={{ perspective: 1000 }}
            >
              {visibleSkills.map((s, idx) => (
                <SkillCard
                  key={`${skillCategory}-${s.key}`}
                  skill={s}
                  index={idx}
                  isReducedMotion={shouldReduceMotion}
                />
              ))}
            </motion.div>

            {/* Show More / Less button */}
            {filteredSkills.length > 8 && (
              <div className="mt-5 flex justify-center">
                <M3Button
                  variant="outlined"
                  onClick={() => setShowAllSkills((v) => !v)}
                  iconRight={showAllSkills ? <FaChevronUp /> : <FaChevronDown />}
                >
                  {showAllSkills ? t("skills.showLess", "Show Less") : t("skills.showMore", "Show More Skills")}
                </M3Button>
              </div>
            )}

            {/* Problem Solving Spotlight */}
            <ProblemSolvingCard />
          </motion.div>
        )}

        {mainTab === "projects" && (
          <motion.div
            key={`projects-${i18n.language}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
          >
            {/* Header */}
            <div className="text-left rtl:text-right mb-5">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-extrabold">
                {t("projects.eyebrow", "Selected Work")}
              </p>
              <h1 className="text-3xl font-black text-base-content tracking-tight leading-tight mt-1">
                {t("projects.titlePrefix", "Featured")} <span className="text-primary">{t("projects.titleHighlight", "Projects")}</span>
              </h1>
              <p className="text-sm font-medium text-base-content/75 mt-1.5 leading-relaxed">
                {t("projects.subtitle", "Production-grade · Real-world Impact")}
              </p>
            </div>

            {/* Project Sub-Category Tabs (Content Production vs Web Dev) */}
            <div className="mb-6">
              <SegmentedToggle
                value={projectCategory}
                onChange={setProjectCategory}
                layoutId="mobileProjectCategoryToggle"
                options={[
                  {
                    value: "content",
                    label: t("projects.tabs.content", "Content Production"),
                    icon: <FaFilm className="text-sm" />,
                  },
                  {
                    value: "website",
                    label: t("projects.tabs.website", "Website & ERP"),
                    icon: <FaLaptopCode className="text-sm" />,
                  },
                ]}
              />
            </div>

            {/* Featured Snap Carousel for top projects */}
            <div className="mb-8">
              <ProjectsSnapCarousel items={activeProjects.slice(0, 5)} />
            </div>

            {/* All Projects in Category */}
            <div className="text-left rtl:text-right mb-4">
              <h2 className="text-2xl font-black text-base-content tracking-tight leading-tight">
                {t("mobile.allWork", "All Work")} ({activeProjects.length})
              </h2>
            </div>

            <div className="space-y-3.5">
              {activeProjects.map((p) => (
                <ProjectGridItem key={p.slug} project={p} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}