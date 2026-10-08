// src/shared/data/projects.js
// Shared projects data with multi-language (en, fa, ar) support.

export const projects = [
  {
    slug: "cstudio",
    category: "website",
    name: {
      fa: "سی‌استودیو — آژانس خلاقیت و تبلیغات",
      en: "CStudio — Creative & Advertising Agency",
      ar: "سي ستوديو — وكالة الإبداع والإعلانات",
    },
    description: {
      fa: "وب‌سایت تعاملی و پرفورمنس‌محور آژانس تبلیغاتی سی‌استودیو با انیمیشن‌های پیشرفته، معماری Bento Grid و تجربه بصری سینمایی در بستر Next.js.",
      en: "An interactive, performance-driven web platform for CStudio Creative Agency featuring modern Bento-grid architecture, cinematic video integration, and fluid GSAP animations built with Next.js.",
      ar: "منصة تفاعلية عالية الأداء لوكالة CStudio الإعلانية تتميز بتصميم Bento Grid، وتكامل الفيديو السينمائي، وحركات GSAP المبنية على Next.js.",
    },
    skills: ["Next.js", "React", "Tailwind CSS", "GSAP", "Turbopack"],
    extras: ["Bento Grid", "Fluid Video Mask", "App Router", "Dark Aesthetic"],
    image: "/projects/cstudio/cover.png",
    media: [
      "/projects/cstudio/cover.png",
      "/projects/cstudio/services.png",
      "/projects/cstudio/works.png",
    ],
    live: "https://cstudio.ir/",
    story: {
      fa: "سی‌استودیو به عنوان یک آژانس تبلیغاتی و خلاقیت معاصر، به بستری دیجیتال نیاز داشت که منعکس‌کننده استانداردهای نوآوری و قدرت بصری پروژه‌های آن‌ها باشد. هدف اصلی این پروژه خلق یک وب‌سایت با زبان طراحی جسورانه (Bold)، استایل دارک‌مود عمیق، و تعاملات روان در کلاس جهانی بود که مخاطبان و برندهای سطح بالا را بلافاصله جذب کند. راهکار توسعه‌یافته بر پایه Next.js App Router و انیمیشن‌های سخت‌افزاری شتاب‌یافته GSAP پیاده‌سازی شد تا جلوه هنری و کارایی فنی را به شکلی منسجم پیوند دهد.",
      en: "As a contemporary creative and advertising agency, CStudio required a cutting-edge digital presence that reflects the visual caliber and strategic depth of their brand work. The objective was to craft a bold, dark-themed platform with fluid, world-class micro-interactions that immediately engage premium enterprise clients. The resulting solution is powered by Next.js and hardware-accelerated animations, uniting brand storytelling with high runtime performance.",
      ar: "باعتبارها وكالة إبداعية وإعلانية حديثة، احتاجت CStudio إلى منصة رقمية تعكس المعايير البصرية المتميزة لأعمالها. تم بناء واجهة داكنة متميزة بتفاعلات سلسة وسينمائية تلائم عملاء الفئة الأولى باستخدام Next.js وتقنيات التحريك المتقدمة.",
    },
    features: [
      {
        fa: "طراحی تعاملی در کلاس بین‌المللی با سبک دارک‌مود مینیمال و متریال‌های بصری مدرن",
        en: "World-class interactive design with a refined minimalist dark-mode aesthetic",
        ar: "تصميم تفاعلي عالمي بأسلوب الوضع الداكن الأنيق والخامات البصرية الحديثة",
      },
      {
        fa: "معماری Bento Grid برای دسته‌بندی و معرفی ۶ گانه خدمات آژانس (تیزر، محتوا، محصول، خدمات، کمپین، وب)",
        en: "Bento Grid architecture showcasing 6 core agency service pillars (Commercials, Content, Product, Services, Campaigns, Web)",
        ar: "تصميم Bento Grid لعرض الأقسام الستة الأساسية لخدمات الوكالة الإعلانية",
      },
      {
        fa: "ماسک‌های ویدیویی تعاملی و پخش بهینه ویدیوهای معرفی روی تایپوگرافی بدون افت نرخ فریم",
        en: "Interactive video masks and optimized background video streaming without frame drops",
        ar: "أقنعة فيديو تفاعلية وبث فيديو محسن على التايبوغرافي دون التأثير على سلاسة الإطارات",
      },
      {
        fa: "انیمیشن‌های نرم مبتنی بر شتاب‌دهنده گرافیکی (GPU) در ترنزیشن‌های اسکرول با GSAP",
        en: "GPU-accelerated smooth animations and scroll transitions engineered with GSAP",
        ar: "حركات فائقة النعومة معتمدة على معالج الرسومات وانتقالات التمرير عبر GSAP",
      },
      {
        fa: "ساختار کاملاً واکنش‌گرا و سازگار با رفتار لمسی در گوشی‌های هوشمند و صفحات دسکتاپ عریض",
        en: "Fully responsive layout seamlessly optimized for mobile gestures and ultra-wide desktop displays",
        ar: "تخطيط متجاوب بالكامل ومحسن للإيماءات اللمسية على الهواتف والشاشات العريضة",
      },
      {
        fa: "فرم شروع همکاری و هدایت مستقیم کاربر به کانال‌های ارتباطی پروژه",
        en: "Streamlined project onboarding action flow guiding inquiries directly to collaboration channels",
        ar: "نموذج اتصال سريع لتوجيه طلبات التعاون مباشرة إلى قنوات التواصل",
      },
    ],
    problem: {
      fa: "آژانس‌های سنتی با صفحات ایستای متنی قادر به انتقال حس پویایی، کیفیت رندرینگ و مهارت سینمایی خود به کارفرمایان تراز اول نیستند.",
      en: "Traditional advertising agency websites with static layouts fail to convey motion dynamics, visual sophistication, and high-end production capabilities to tier-1 enterprise clients.",
      ar: "المواقع التقليدية ذات الصفحات الثابتة تعجز عن نقل الحيوية والإمكانات الإخراجية والسينمائية إلى كبار العملاء والشركات.",
    },
    objective: {
      fa: "طراحی و توسعه یک هویت بصری دیجیتال مبتنی بر ویدیو و تایپوگرافی مدرن با لودینگ سبک و پیمایش بدون وقفه در وب.",
      en: "Design and engineer a video-first digital identity driven by modern typography, swift load times, and uninterrupted web navigation.",
      ar: "تصميم وتطوير هوية رقمية معتمدة على الفيديو والخطوط الحديثة مع سرعة تحميل عالية وتصفح مستمر دون انقطاع.",
    },
    scope: {
      fa: "آژانس‌های خلاقیت و برندینگ، تولید تیزرهای تجاری و شرکت‌های جویای هویت بصری متمایز.",
      en: "Creative studios, commercial video production, and forward-thinking brands seeking standout identity.",
      ar: "وكالات الإبداع، إنتاج الإعلانات التجارية، والشركات الباحثة عن حضور بصري فريد.",
    },
    architecture: {
      fa: "توسعه داده‌شده با معماری کامپوننت‌محور Next.js App Router، کدهای بهینه‌سازی شده Turbopack، فونت‌های سفارشی آذر‌مهر و Outfit، و لود ماژولار استایل‌ها.",
      en: "Engineered with Next.js App Router component architecture, Turbopack optimizations, custom AzarMehr & Outfit typefaces, and modular style delivery.",
      ar: "معمارية معتمدة على Next.js App Router، وتحسينات Turbopack، وخطوط AzarMehr وOutfit المخصصة.",
    },
    challenges: [
      {
        fa: "مدیریت پخش همزمان چندین ویدیو با کیفیت بالا در مرورگر بدون اشغال بی‌رویه پردازنده و رم.",
        en: "Orchestrating concurrent high-definition video playbacks in browser without memory bloat or CPU spikes.",
        ar: "إدارة تشغيل مقاطع فيديو متعددة عالية الدقة بالتوازي دون استهلاك مفرط للذاكرة والمعالج.",
      },
      {
        fa: "حفظ تراز تایپوگرافی دوزبانه در ترنزیشن‌های انیمیشنی حروف انگلیسی و محتوای فارسی.",
        en: "Aligning bilingual typography rhythm across interactive character transitions and mixed Persian/English layouts.",
        ar: "موازنة إيقاع الخطوط ثنائية اللغة عبر الحركات التفاعلية وتداخل النصوص الفارسية والإنجليزية.",
      },
    ],
    limitations: [
      {
        fa: "بهینه‌سازی حداکثری حجم ویدیوهای پس‌زمینه برای اتصالات اینترنت محدود کاربران همراه.",
        en: "Requires strict media compression policies for background video streaming on low-bandwidth networks.",
        ar: "يتطلب سياسات ضغط صارمة لوسائط الفيديو لضمان التشغيل السلس على الشبكات الضعيفة.",
      },
    ],
    future: [
      {
        fa: "توسعه فیلتر داینامیک کیس‌استادی‌های جدید بر اساس نوع صنعت و دسته‌بندی ویدیوها.",
        en: "Dynamic case study filtering by industry sector and interactive video modal player.",
        ar: "إضافة تصنيف تفاعلي لدراسات الحالة الإعلانية حسب نوع الصناعة ومودال فيديو متطور.",
      },
    ],
    conclusion: {
      fa: "وب‌سایتی با هویت بصری متمایز و پیشرو که نرخ تعامل مخاطب را افزایش داده و توانمندی‌های آژانس سی‌استودیو را در تراز بین‌المللی ارائه می‌کند.",
      en: "A distinguished digital flagship that elevates engagement metrics and articulates CStudio's creative caliber on an international level.",
      ar: "واجهة رقمية فريدة ترفع معدلات التفاعل وتبرز قدرات الوكالة الإبداعية وفق المعايير العالمية.",
    },
    contributions: {
      fa: "طراحی و توسعه فرانت‌اند، تنظیم انیمیشن‌های تعاملی و بهینه‌سازی مدیا برای وب.",
      en: "Front-end engineering, interactive motion choreography, and high-performance web asset optimization.",
      ar: "تطوير الواجهة الأمامية، وضبط التحريك التفاعلي، وتحسين وسائط الويب للأداء العالي.",
    },
    techStack: {
      frontend: ["Next.js (App Router)", "React 19", "Tailwind CSS", "Styled-JSX"],
      motion: ["GSAP (Hardware GPU)", "Custom Video Masking", "ScrollTrigger"],
      typography: ["AzarMehr Font", "Outfit", "Orbitron"],
      performance: ["Turbopack", "Video Lazy-Loading", "Modern Asset Preloading"],
    },
  },
  {
    slug: "pishgam-noor",
    category: "website",
    name: {
      fa: "پیشگام نور — مهندسی و بازرگانی صنایع روشنایی",
      en: "Pishgam Noor — Lighting Engineering & Trading",
      ar: "بيشغام نور — هندسة وتجارة معدات الإضاءة",
    },
    description: {
      fa: "پلتفرم چندزبانه شرکتی و کاتالوگ صنعتی صنایع روشنایی پیشگام نور برای معرفی سیستم‌های LED، نورپردازی شهری و پروژه‌های تجاری.",
      en: "A multilingual corporate platform and industrial lighting catalog for Pishgam Noor, showcasing architectural LED solutions, urban streetlights, and commercial lighting engineering.",
      ar: "منصة مؤسسية متعددة اللغات وكتالوج صناعي لشركة بيشغام نور للإنارة، لعرض حلول LED وأنظمة الإنارة الحضرية والتجارية.",
    },
    skills: ["WordPress", "Elementor Pro", "JetEngine", "Multilingual (FA/EN/AR)", "Technical SEO"],
    extras: ["Industrial Catalog", "Rank Math Pro", "Swiper", "WhatsApp Integration"],
    image: "/projects/pishgam-noor/cover.png",
    media: [
      "/projects/pishgam-noor/cover.png",
      "/projects/pishgam-noor/products.png",
    ],
    live: "https://pishgamnoor.com/",
    story: {
      fa: "شرکت صنایع روشنایی پیشگام نور به عنوان یکی از تولیدکنندگان و مجموعه‌های بازرگانی باسابقه تجهیزات روشنایی، چراغ‌های خیابانی و سیستم‌های پیشرفته LED، نیازمند سامانه‌ای رسمی برای معرفی کاتالوگ محصولات و پوشش بازارهای بین‌المللی بود. هدف این پروژه، پیاده‌سازی وب‌سایتی سریع، ساختاریافته و چندزبانه (فارسی، انگلیسی، عربی) با تمرکز بر سئو فنی و دسته‌بندی شفاف محصولات صنعتی بود تا معماران، پیمانکاران عمرانی و شهرداری‌ها به سادگی به دیتاشیت‌ها و کاتالوگ‌های فنی دسترسی پیدا کنند.",
      en: "As an established manufacturer and trading enterprise in architectural LED, commercial illumination, and urban lighting systems, Pishgam Noor required an authoritative digital platform. The project focused on architecting a fast, structured, multilingual experience (Persian, English, Arabic) centered on technical SEO, detailed industrial specifications, and clear categorization for architects, infrastructure contractors, and municipalities.",
      ar: "بصفتها شركة رائدة في تصنيع وتجارة تجهيزات الإضاءة الصناعية وأنظمة LED المتطورة، احتاجت بيشغام نور إلى منصة رقمية موثوقة ومتعددة اللغات تدعم الأسواق المحلية والدولية، مع تصنيف هندسي واضح لمواصفات المنتجات.",
    },
    features: [
      {
        fa: "پشتیبانی کامل از ساختار ۳ زبانه (فارسی، انگلیسی، عربی) با تگ‌های معتبر Hreflang و سوئیچر پرچم",
        en: "Full 3-language architecture (Persian, English, Arabic) with valid Hreflang tags and custom flag switcher",
        ar: "دعم متكامل لثلاث لغات (الفارسية، الإنجليزية، العربية) مع وسوم Hreflang ومحول الأعلام المخصص",
      },
      {
        fa: "کاتالوگ جامع دسته‌بندی محصولات: چراغ‌های خیابانی، نورپردازی صنعتی، دفنی، مگنتی و پروژکتورهای شهری",
        en: "Comprehensive industrial catalog: street lighting, industrial floodlights, inground fixtures, and magnetic tracks",
        ar: "كتالوج صناعي شامل: إنارة الشوارع، الكشافات الصناعية، الإضاءة الأرضية، والمسارات المغناطيسية",
      },
      {
        fa: "طراحی بر پایه معماری صنعتی با دسترسی سریع به کاتالوگ‌های PDF و مشخصات فنی ولتاژ و لومن",
        en: "Engineered industrial UX offering instant access to technical PDF datasheets, lumens, and electrical specs",
        ar: "تصميم صناعي يوفر الوصول السريع للمواصفات الهندسية وكتالوجات PDF وشدة الإضاءة والجهد",
      },
      {
        fa: "سئوی پیشرفته On-Page با اسکیمای شرکتی اختصاصی (HomeAndConstructionBusiness) جهت بهبود رتبه جستجو",
        en: "Advanced on-page SEO with rich structured schema (HomeAndConstructionBusiness) maximizing SERP visibility",
        ar: "تهيئة سيو متقدمة مع بيانات Schema المخصصة لشركات المقاولات والإنشاءات الهندسية",
      },
      {
        fa: "اتصال مستقیم به کانال ارتباطی واتساپ برای تسهیل استعلام قیمت و مشاوره مهندسی به خریداران عمده",
        en: "Integrated WhatsApp business communication bridge for instant B2B quotes and engineering consultations",
        ar: "ربط مباشر مع واتساب لتسهيل استفسارات الأسعار والاستشارات الهندسية للمشاريع الكبرى",
      },
      {
        fa: "اسلایدرهای مدرن کاتالوگ بر پایه Swiper با بارگذاری روان روی شبکه‌های موبایل",
        en: "Mobile-optimized product carousels powered by Swiper delivering fluid touch browsing",
        ar: "سلايدر منتجات متطور معتمد على Swiper لتصفح سلس وسريع عبر الهواتف الذكية",
      },
    ],
    problem: {
      fa: "تنوع گسترده محصولات روشنایی، نیاز به ارائه پارامترهای فنی دقیق و غیبت ساختار چندزبانه برای جذب پروژه‌های صادراتی در منطقه.",
      en: "Vast lighting SKU varieties, intricate technical parameter tables, and lack of multilingual export-ready discovery.",
      ar: "تعدد فئات منتجات الإنارة الهندسية، والحاجة لجداول مواصفات تفصيلية وغياب منصة متعددة اللغات لفرص التصدير.",
    },
    objective: {
      fa: "ایجاد پلتفرم مهندسی روشنایی یکپارچه با ساختار اطلاعاتی دقیق و امکان سوئیچ سریع میان زبان‌های بین‌المللی.",
      en: "Build a unified lighting engineering hub with precise information architecture and seamless international language switching.",
      ar: "إنشاء منصة متكاملة لهندسة الإنارة بهيكلية بيانات دقيقة وسهولة في التنقل بين اللغات الدولية.",
    },
    scope: {
      fa: "صنایع و پیمانکاران عمرانی، پروژه‌های نورپردازی شهری، معماران و صادرکنندگان تجهیزات الکتریک.",
      en: "Industrial contractors, urban infrastructure projects, architectural consultancies, and regional distributors.",
      ar: "مقاولات الإنشاءات، مشاريع الإنارة الحضرية، المكاتب الهندسية وموزعو معدات الكهرباء الإقليميون.",
    },
    architecture: {
      fa: "ترکیب وردپرس با فریم‌ورک‌های پویای JetEngine و ساختار سفارشی تم Hello Elementor با حداقل وابستگی زائد و لود پرشتاب.",
      en: "WordPress core paired with Crocoblock JetEngine custom post schemas and lightweight Hello Elementor foundation.",
      ar: "نواة ووردبريس مع JetEngine للهيكلة الديناميكية وقالب Hello Elementor خفيف الوزن وسريع التحميل.",
    },
    challenges: [
      {
        fa: "طراحی معماری محتوایی دو جهته (RTL برای فارسی و عربی، LTR برای انگلیسی) و تطبیق ساختار کاتالوگ محصولات.",
        en: "Architecting a bidirectional content system (RTL for Persian/Arabic, LTR for English) with synchronized catalogs.",
        ar: "تصميم هيكلية المحتوى ثنائية الاتجاه (RTL للفارسية والعربية، LTR للإنجليزية) مع مزامنة الكتالوج.",
      },
      {
        fa: "حفظ سرعت بارگذاری با وجود صدها تصویر باکیفیت پروژه‌های روشنایی و کاتالوگ قطعات صنعتی.",
        en: "Maintaining sub-second load times despite hosting hundreds of high-resolution industrial product photos.",
        ar: "الحفاظ على سرعة الاستجابة رغم وجود مئات الصور عالية الدقة للمشاريع والمنتجات الصناعية.",
      },
    ],
    limitations: [
      {
        fa: "سیستم استعلام تلفنی/پیام‌رسان به جای خرید مستقیم آنلاین به دلیل ماهیت B2B و سفارشی بودن سفارش‌ها.",
        en: "Lead generation model via WhatsApp and phone rather than direct checkout due to B2B custom manufacturing requirements.",
        ar: "اعتماد نظام الاستعلام المباشر عبر الهاتف والواتساب بدلاً من الدفع الفوري نظراً لطبيعة الطلبيات الصناعية المخصصة.",
      },
    ],
    future: [
      {
        fa: "توسعه محاسبه‌گر آنلاین لومن و مصرف انرژی متناسب با متراژ فضاهای صنعتی و تجاری.",
        en: "Interactive lumen and power wattage engineering calculator for commercial spaces.",
        ar: "تطوير حاسبة هندسية ذكية لتقدير شدة الإضاءة (لومن) واستهلاك الطاقة للمساحات التجارية.",
      },
    ],
    conclusion: {
      fa: "پلتفرمی مستحکم و معتبر که به عنوان مرجع فنی شرکت پیشگام نور عمل کرده و مسیر همکاری با پیمانکاران داخلی و بین‌المللی را هموار کرده است.",
      en: "A robust engineering portal serving as Pishgam Noor's technical authority, streamlining contracts with domestic and regional developers.",
      ar: "منصة هندسية معتمدة تمثل المرجع التقني لشركة بيشغام نور وتسهل التعاقدات مع كبرى شركات التطوير والمقاولات.",
    },
    contributions: {
      fa: "طراحی رابط کاربری شرکتی، پیاده‌سازی ساختار چندزبانه، بهینه‌سازی سئو فنی و فرم‌های استعلام.",
      en: "Corporate UI/UX development, multilingual architecture implementation, technical SEO, and lead form engineering.",
      ar: "تصميم واجهة المستخدم المؤسسية، وتطبيق النظام متعدد اللغات، وتحسين السيو التقني ونماذج الاستعلام.",
    },
    techStack: {
      cms: ["WordPress", "Hello Elementor", "Elementor Pro"],
      dynamic_data: ["Crocoblock JetEngine", "JetElements", "Custom Post Types"],
      seo_i18n: ["Rank Math SEO PRO", "Hreflang Tags (fa, en, ar)", "Schema.org"],
      frontend: ["Swiper.js", "Custom CSS Language Dropdown", "WhatsApp API"],
    },
  },
  {
    slug: "mtm-shop",
    category: "website",
    name: {
      fa: "ام تی ام شاپ — فروشگاه آنلاین لوازم خانگی و هوشمند",
      en: "MTM Shop — Home Appliances & Smart Tech E-Commerce",
      ar: "إم تي إم شوب — متجر الأجهزة المنزلية والذكية",
    },
    description: {
      fa: "فروشگاه آنلاین مقیاس‌پذیر لوازم خانگی و تجهیزات هوشمند با طراحی بهینه‌شده Woodmart، فیلترینگ پیشرفته و فرآیند خرید سریع در بستر ووکامرس.",
      en: "A modern e-commerce storefront for home appliances and smart tech gadgets, featuring high-conversion Woodmart architecture, instant product filtering, and streamlined WooCommerce checkout.",
      ar: "متجر إلكتروني متطور للأجهزة المنزلية والتقنيات الذكية، يتميز بتصميم Woodmart مخصص، وتصفية سريعة للمنتجات، وعملية شراء محسنة عبر WooCommerce.",
    },
    skills: ["WooCommerce", "WordPress", "Woodmart", "E-Commerce UX", "Pelak Typography"],
    extras: ["AJAX Filter", "Sticky Mobile Checkout", "Swiper", "Variable Products"],
    image: "/projects/mtm-shop/cover.png",
    media: [
      "/projects/mtm-shop/cover.png",
      "/projects/mtm-shop/products.png",
    ],
    live: "https://mtmshop.ir/",
    story: {
      fa: "ام تی ام شاپ به عنوان یک فروشگاه تخصصی در حوزه لوازم خانگی، ابزارهای برقی آشپزخانه و گجت‌های هوشمند سبک زندگی، به یک فروشگاه آنلاین با نرخ تبدیل بالا و رابط کاربری کاربرپسند نیاز داشت. تمرکز اصلی بر طراحی صفحات محصول حرفه‌ای، ایجاد فیلترهای دقیق ویژگی‌ها (برند، رده مصرف، توان، رنگ)، و تجربه خرید بدون اصطکاک برای کاربران موبایل بود. پیاده‌سازی روی هسته ووکامرس با شخصی‌سازی تخصصی قالب وودمارت و تایپوگرافی پلاک صورت گرفت تا حس یک برند معتبر و پرانرژی را منتقل کند.",
      en: "Specializing in modern kitchen appliances, home electronics, and smart gadgets, MTM Shop required a high-conversion digital storefront. The primary objective was to architect rich product showcases, precise specification filters (brand, power, color variants), and a friction-free mobile checkout flow. Built on WooCommerce with an optimized Woodmart foundation and bespoke Pelak typography, the store delivers an energetic and trustworthy retail experience.",
      ar: "كمتجر متخصص في الأجهزة المنزلية والإلكترونيات الذكية، احتاج MTM Shop إلى واجهة بيع إلكترونية تركز على تحويل الزوار وسرعة التصفح وتصفية المنتجات المتقدمة مع تجربة شراء سلسة عبر WooCommerce.",
    },
    features: [
      {
        fa: "سبد خرید شناور و سریع (AJAX Cart Drawer) برای خرید بدون خروج از صفحه کالا",
        en: "Instant slide-out AJAX Cart Drawer enabling seamless item additions without page reloads",
        ar: "سلة مشتريات منبثقة تفاعلية عبر AJAX تتيح إضافة المنتجات دون مغادرة الصفحة",
      },
      {
        fa: "فیلترینگ لحظه‌ای مشخصات کالا بر اساس برند، دسته، قیمت و ویژگی‌های فنی",
        en: "Real-time product attribute filtering by brand, category, price bracket, and technical specs",
        ar: "تصفية فورية لخصائص المنتجات حسب العلامة التجارية والفئة والسعر والمواصفات الفنية",
      },
      {
        fa: "طراحی واکنش‌گرا با نوار پیمایش ویژه موبایل و دکمه چسبان (Sticky) ثبت سفارش",
        en: "Mobile-first responsive UX with sticky bottom purchase bar and thumb-friendly navigation",
        ar: "تجربة مستخدم مخصصة للهواتف مع شريط تنقل سفلي وزر شراء ثابت لتسهيل الطلب",
      },
      {
        fa: "پشتیبانی از انواع محصولات متغیر با گالری‌های تفکیک‌شده رنگ و گارانتی",
        en: "Support for dynamic variable products with color swatches and warranty selectors",
        ar: "دعم المنتجات المتعددة الخصائص مع عينات الألوان وخيارات الضمان والأسعار",
      },
      {
        fa: "اسلایدرهای دسته‌بندی تعاملی با نرخ بارگذاری سریع و پشتیبانی از لمس صفحه",
        en: "Touch-optimized interactive category sliders with lazy-loaded imagery",
        ar: "سلايدرات تفاعلية لتصنيفات المنتجات تدعم التمرير السريع وتحميل الصور الذكي",
      },
      {
        fa: "هماهنگی تایپوگرافی اصیل با فونت پلاک و پالت رنگی گرم (نارنجی و مشکی مینیمال)",
        en: "Harmonious Persian typography using Pelak font paired with high-contrast energetic branding",
        ar: "تناسق تايبوغرافي متميز بخط پلاک وهوية لونية حيوية تجمع البرتقالي والأسود الأنيق",
      },
    ],
    problem: {
      fa: "شلوغی رابط کاربری در فروشگاه‌های اینترنتی سنتی و افت نرخ تبدیل به دلیل مراحل طولانی خرید و نبود فیلترهای دقیق.",
      en: "Cluttered interfaces in conventional e-commerce stores causing cart abandonment and friction in finding appliance specs.",
      ar: "ازدحام الواجهات في المتاجر الإلكترونية التقليدية وصعوبة الوصول لمواصفات الأجهزة مما يؤدي لارتفاع التخلي عن الشراء.",
    },
    objective: {
      fa: "خلق تجربه خرید آنلاین سریع با تاکید بر نمایش واضح مشخصات فنی، شفافیت قیمت‌ها و ناوبری بدون سردرگمی.",
      en: "Create a rapid online purchasing journey highlighting transparent pricing, clear specs, and zero navigation confusion.",
      ar: "بناء تجربة تسوق سريعة وواضحة تركز على شفافية الأسعار والمواصفات وسلاسة إتمام الطلب.",
    },
    scope: {
      fa: "خریداران لوازم خانگی مدرن، گجت‌های هوشمند و مصرف‌کنندگانی که به اصالت کالا و خرید سریع اهمیت می‌دهند.",
      en: "Shoppers of modern domestic appliances, smart living electronics, and consumers seeking genuine warranties.",
      ar: "المتسوقون الباحثون عن أجهزة منزلية حديثة وتقنيات ذكية مع ضمان أصالة المنتجات وسرعة الشراء.",
    },
    architecture: {
      fa: "استفاده از معماری بهینه‌شده وودمارت بر بستر ووکامرس با لود ماژولار استایل‌ها و بهینه‌سازی کوئری‌های دیتابیس.",
      en: "Optimized Woodmart child theme architecture over WooCommerce core with modular CSS and tuned database queries.",
      ar: "معمارية قالب Woodmart المخصص فوق نواة WooCommerce مع تحميل معياري لملفات التنسيق وتحسين استعلامات البيانات.",
    },
    challenges: [
      {
        fa: "تنظیم چیدمان ریسپانسیو جداول مشخصات فنی پیچیده لوازم خانگی روی صفحات نمایش کوچک موبایل.",
        en: "Formatting complex technical attribute tables into scannable views on compact smartphone displays.",
        ar: "تنسيق جداول المواصفات الفنية المعقدة للأجهزة لتناسب الشاشات الصغيرة للهواتف دون تشويه.",
      },
      {
        fa: "بهینه‌سازی تصاویر متعدد باکیفیت محصولات برای جلوگیری از کندی فرآیند لودینگ.",
        en: "Optimizing numerous multi-angle high-resolution product photos without compromising clarity.",
        ar: "ضغط وتحسين صور المنتجات المتعددة عالية الدقة لضمان سرعة التحميل مع الحفاظ على وضوح التفاصيل.",
      },
    ],
    limitations: [
      {
        fa: "نیاز به اتصال پایدار به درگاه‌های پرداخت بانکی و سامانه‌های ارسال پیامک اعتبارسنجی.",
        en: "Reliance on domestic payment gateway uptimes and SMS OTP delivery services for checkout verification.",
        ar: "الاعتماد على استقرار بوابات الدفع البنكية وخدمات إرسال رسائل التحقق عبر SMS.",
      },
    ],
    future: [
      {
        fa: "راه‌اندازی سیستم مقایسه تخصصی مشخصات فنی محصولات و سیستم هوشمند تخفیفات پلکانی.",
        en: "Comprehensive technical product comparison matrix and automated tiered discount system.",
        ar: "إطلاق نظام مقارنة تقني متكامل بين الأجهزة وتطبيق نظام الخصومات التلقائية للمشتريات المتعددة.",
      },
    ],
    conclusion: {
      fa: "فروشگاهی مدرن و قابل اعتماد که رضایت خریداران را افزایش داده و بستری پایدار برای رشد فروش دیجیتال برند فراهم آورده است.",
      en: "A robust digital storefront that elevated conversion rates and established a dependable online revenue channel.",
      ar: "متجر إلكتروني موثوق رفع معدلات الرضا وعزز قنوات المبيعات الرقمية للعلامة التجارية بشكل مستدام.",
    },
    contributions: {
      fa: "شخصی‌سازی قالب فروشگاهی، طراحی تجربه کاربری خرید، بهینه‌سازی سرعت و پیاده‌سازی هویت بصری.",
      en: "Theme customization, e-commerce checkout flow design, performance optimization, and brand UI styling.",
      ar: "تخصيص القالب البرمجي، وتصميم مسار الشراء، وتحسين سرعة المتجر، وضبط الهوية البصرية.",
    },
    techStack: {
      ecommerce: ["WooCommerce Core", "Variable Product Manager", "Cart Drawer"],
      cms_theme: ["WordPress", "Woodmart 8.5.2 Child Theme", "Gutenberg Blocks"],
      frontend_ux: ["Pelak Persian Font", "Swiper Carousel", "AJAX Product Search"],
      conversion: ["Sticky Buy Button", "Mobile Bottom Navigation", "Smart Badges"],
    },
  },
  {
    slug: "crest-watch",
    category: "website",
    name: {
      fa: "کرست واچ — نمایندگی رسمی ساعت مچی Crest",
      en: "Crest Watch — Official Brand Agency & Store",
      ar: "ساعات كرست — الوكالة الرسمية لعلامة Crest",
    },
    description: {
      fa: "وب‌سایت رسمی برند ساعت کرست با سامانه استعلام گارانتی آنلاین، دسته‌بندی کالکشن‌های زنانه، مردانه و ست، و سیستم ثبت درخواست نمایندگی.",
      en: "The official online brand platform for Crest Watches in Iran, featuring an online warranty verification system, luxury curated collections (Men, Women, Pairs), and dealer franchise onboarding.",
      ar: "المنصة الرسمية لساعات كرست، تتضمن نظام تسجيل الضمان الإلكتروني، وتصنيفات المجموعات الفاخرة (رجالي، نسائي، أطقم)، وطلب الوكالات.",
    },
    skills: ["WordPress", "WooCommerce", "Warranty System", "Brand UI/UX", "Responsive Design"],
    extras: ["Online Warranty Portal", "Product Colorway Switcher", "Franchise Onboarding", "Video Unboxing"],
    image: "/projects/crest-watch/cover.png",
    media: [
      "/projects/crest-watch/cover.png",
      "/projects/crest-watch/products.png",
      "/projects/crest-watch/series.png",
    ],
    live: "https://crestwatch.ir/",
    story: {
      fa: "برند ساعت مچی Crest با سابقه طراحی از سال ۲۰۱۷ و بهره‌گیری از موتورهای دقیق ژاپنی و بدنه‌های ضدحساسیت، نیازمند یک پایگاه رسمی دیجیتال به عنوان نمایندگی انحصاری در بازار ایران بود. چالش اصلی پروژه، ایجاد وجهه‌ای لوکس و قابل اعتماد برای برند همراه با راهکارهای اختصاصی مانند «سامانه آنلاین ثبت و استعلام کد گارانتی» و «فرم جذب نمایندگی‌های استانی» بود. وب‌سایت با طراحی ویژه، عکاسی استودیویی از رنگ‌بندی محصولات و طبقه‌بندی شفاف سری‌ها راه‌اندازی شد.",
      en: "Originating in 2017 with Japanese movements and hypoallergenic builds, Crest Watches required an exclusive brand headquarters and catalog portal for the Iranian market. The primary challenge was crafting a luxurious, trust-building visual presence combined with specialized brand utilities: an online warranty registration portal and a regional franchise application module. The platform was built with refined typography, multi-angle product palettes, and intuitive collection browsing.",
      ar: "باعتبارها الوكيل الحصري لساعات Crest اليابانية الأصلية منذ عام 2017، تطلب المشروع إنشاء منصة علامة تجارية فاخرة تضم نظام التحقق من الضمان الرقمي وعرض سلاسل المنتجات المختلفة.",
    },
    features: [
      {
        fa: "سامانه اختصاصی ثبت کد گارانتی ساعت مچی Crest جهت اصالت‌سنجی و خدمات پس از فروش",
        en: "Proprietary online warranty code registration portal for serial validation and after-sales support",
        ar: "نظام إلكتروني حصري لتسجيل والتحقق من كود الضمان الأصلي وخدمات ما بعد البيع",
      },
      {
        fa: "دسته‌بندی شفاف کالکشن‌ها: ساعت‌های زنانه، مردانه، ست عروس و داماد، و سری ورزشی Crest Pro",
        en: "Curated collection taxonomy: Women's, Men's, Couple Sets, and the rugged Crest Pro athletic series",
        ar: "تصنيف واضح للمجموعات: ساعات نسائية، رجالية، أطقم، وسلسلة Crest Pro الرياضية المتطورة",
      },
      {
        fa: "نمایش کامل رنگ‌بندی و متریال بند و صفحه برای هر مدل ساعت به همراه مشخصات فنی دقیق",
        en: "Multi-colorway showcase displaying strap materials, dial finishes, and water-resistance metrics",
        ar: "عرض متكامل لخيارات الألوان وخامات الأحزمة والموانئ مع المواصفات التقنية ومقاومة الماء",
      },
      {
        fa: "فرم آنلاین و اختصاصی جذب و ارزیابی شرایط اخذ نمایندگی فیزیکی در سراسر کشور",
        en: "Dedicated online regional dealership franchise application and qualification intake form",
        ar: "نموذج إلكتروني مخصص لاستقبال وتقييم طلبات الحصول على الوكالات في مختلف المدن",
      },
      {
        fa: "بخش ویژه گالری ویدیوهای آنباکسینگ و معرفی جزئیات ساعت‌ها توسط مشاوران",
        en: "Integrated video showcase featuring product unboxing and authentic wrist-feel presentations",
        ar: "معرض فيديو مدمج لمراجعات المنتجات وفتح الصناديق واستعراض التفاصيل الدقيقة للساعات",
      },
      {
        fa: "تضمین‌های برجسته اصالت، ارسال رایگان و امکان تعویض و بازگشت ۳ روزه کالا",
        en: "Prominent customer assurance badges: free nationwide shipping, authenticity guarantee, and 3-day exchange",
        ar: "إبراز ضمانات الثقة: شحن مجاني لكافة المناطق، وضمان الأصالة، وإمكانية الاستبدال خلال 3 أيام",
      },
    ],
    problem: {
      fa: "وجود مدل‌های فیک در بازار و نیاز مبرم به یک مرجع معتبر برای اثبات اصالت، ثبت گارانتی شرکتی و ارائه فهرست مراکز رسمی فروش.",
      en: "Widespread market counterfeits demanding an authoritative official brand hub to verify serials, activate warranties, and direct buyers to authorized dealers.",
      ar: "انتشار المنتجات المقلدة في السوق وحاجة العلامة لمرجع رسمي للتحقق من الأرقام التسلسلية وتفعيل الضمان وإرشاد المشترين للمراكز المعتمدة.",
    },
    objective: {
      fa: "طراحی و توسعه وب‌سایتی با پرستیژ بالا که اعتماد خریداران را با امکان اعتبارسنجی گارانتی جلب کرده و شبکه نمایندگی‌ها را سامان دهد.",
      en: "Develop a prestigious luxury portal that builds customer confidence through serial warranty checks while scaling franchise operations.",
      ar: "تصميم موقع ذي طابع فاخر يعزز ثقة المشترين من خلال التحقق الفوري من الضمان وينظم شبكة الوكالات المعتمدة.",
    },
    scope: {
      fa: "علاقه‌مندان ساعت‌های مچی لوکس و اقتصادی، خریداران کادویی و فروشگاه‌های متقاضی اخذ نمایندگی در سراسر ایران.",
      en: "Horology enthusiasts, gift shoppers, and physical retail jewelers applying for Crest franchise licensing.",
      ar: "عشاق الساعات الأنيقة، مشترو الهدايا الفاخرة، والمتاجر الراغبة في الحصول على وكالة توزيع رسمية.",
    },
    architecture: {
      fa: "پلتفرم فروشگاهی-برندینگی ماژولار با فرم‌های اختصاصی پردازش داده، گالری‌های ویدیو و فیلترهای سبک‌وزن بدون سربار سنگین.",
      en: "Modular WordPress & WooCommerce architecture with custom warranty database tables and lightweight responsive layouts.",
      ar: "بنية برمجية معيارية تجمع بين ووردبريس وووكامرس مع قواعد بيانات مخصصة للضمانات وتصميم خفيف الوزن.",
    },
    challenges: [
      {
        fa: "پیاده‌سازی چرخه ثبت شماره سریال گارانتی برای ساعت‌های خریداری شده با اعتبارسنجی دقیق.",
        en: "Engineering a secure serial-number lookup workflow preventing forged warranty claims.",
        ar: "برمجة دورة عمل دقيقة للتحقق من الأرقام التسلسلية للضمان لمنع التسجيلات غير المصرح بها.",
      },
      {
        fa: "ارائه گالری‌های رنگ‌بندی متعدد بدون کند شدن بارگذاری صفحه محصولات در سرعت‌های مختلف اینترنت.",
        en: "Serving extensive multi-colorway product photography without degrading load speeds.",
        ar: "تقديم معارض صور متعددة لدرجات الألوان لكل موديل دون التأثير سلباً على سرعة تحميل الصفحات.",
      },
    ],
    limitations: [
      {
        fa: "تنوع مدل‌های جدید نیازمند به‌روزرسانی مستمر سورس مشخصات فنی و سریال‌های وارداتی است.",
        en: "Requires continuous SKU updates and database sync for newly imported collection batches.",
        ar: "يتطلب تحديثاً مستمراً لقاعدة بيانات الأرقام التسلسلية مع كل دفعة استيراد ومجموعات جديدة.",
      },
    ],
    future: [
      {
        fa: "افزودن امکان پرو مجازی و نمایش سه‌بعدی ساعت روی مچ دست با واقعیت افزوده (AR).",
        en: "AR virtual watch try-on experience allowing users to preview wrist scale via smartphone camera.",
        ar: "إضافة ميزة القياس الافتراضي ثلاثي الأبعاد للساعات على المعصم باستخدام الواقع المعزز (AR).",
      },
    ],
    conclusion: {
      fa: "مرجعی رسمی و باوقار که اصالت برند ساعت کرست را تثبیت کرده و ارتباط مستقیم مشتریان و متقاضیان نمایندگی را سامان بخشیده است.",
      en: "An authoritative brand asset that solidified Crest's authentic prestige and streamlined franchise recruitment across Iran.",
      ar: "مرجع رسمي عزز مكانة وأصالة علامة Crest ونظم التواصل المباشر مع العملاء وشبكة الوكلاء في كافة أنحاء البلاد.",
    },
    contributions: {
      fa: "طراحی رابط کاربری لوکس، پیاده‌سازی سامانه استعلام گارانتی، سازماندهی کاتالوگ کالکشن‌ها و بهینه‌سازی ریسپانسیو.",
      en: "Luxury brand UI design, warranty validation module development, collection taxonomy structuring, and mobile UX tuning.",
      ar: "تصميم واجهة العلامة الفاخرة، وتطوير نظام الضمان، وتنظيم فئات التشكيلات، وضبط التجاوب مع الهواتف.",
    },
    techStack: {
      platform: ["WordPress Core", "WooCommerce E-Commerce", "Contact Form 7"],
      brand_features: ["Warranty Registration Engine", "Unboxing Video Showcase", "Dealer Network Map"],
      frontend: ["Responsive Grid System", "Multi-Colorway Switcher", "Persian Web Typography"],
      security_seo: ["SSL Encryption", "Structured Product Data", "Lead Management"],
    },
  },
  {
    slug: "simfam-aluminium",
    category: "website",
    name: {
      fa: "سیم‌فام — تولیدکننده برتر فرآورده‌های آلومینیومی",
      en: "Simfam Aluminium — Industrial Manufacturing Portal",
      ar: "سيم فام — رائدة صناعة منتجات الألومنيوم",
    },
    description: {
      fa: "وب‌اپلیکیشن مدرن بر پایه React 19 و Vite برای شرکت سیم‌فام، ارائه کاتالوگ مهندسی پروفیل‌های آلومینیومی، یراق‌آلات و چراغ‌های سیلندری.",
      en: "A modern React 19 and Vite industrial web application for Simfam Aluminium, delivering an interactive engineering catalog of architectural profiles, fittings, and cylinder fixtures.",
      ar: "تطبيق ويب صناعي متطور مبني على React 19 وVite لشركة سيم فام، يقدم كتالوجاً هندسياً لقطاعات الألومنيوم وإكسسوارات الإضاءة المعمارية.",
    },
    skills: ["React 19", "Vite", "SPA Architecture", "Industrial Catalog", "Estedad Font"],
    extras: ["Engineering Blue (#0D47A1)", "Single Page Application", "Technical Profile Specs", "Mobile Optimized"],
    image: "/projects/simfam-aluminium/cover.png",
    media: [
      "/projects/simfam-aluminium/cover.png",
      "/projects/simfam-aluminium/products.png",
      "/projects/simfam-aluminium/catalog.png",
    ],
    live: "https://www.simfamaluminium.com/",
    story: {
      fa: "شرکت سیم‌فام به عنوان یکی از تولیدکنندگان پیشرو فرآورده‌های آلومینیومی در ایران، ارائه‌دهنده انواع پروفیل‌های خطی و دکوراتیو LED (توکار، روکار، آویز)، یراق‌آلات تخصصی و چراغ‌های سیلندری است. چالش بنیادین این پروژه ساخت یک پلتفرم فوق‌العاده سریع با تایپوگرافی مهندسی و ناوبری روان برای معماران، طراحان نورپردازی و مهندسان ساختمان بود. وب‌سایت با معماری مدرن React 19 و Vite پیاده‌سازی شد تا برخلاف وب‌سایت‌های سنگین سنتی، کاتالوگ دقیق مقاطع و کدهای فنی را در کسری از ثانیه در اختیار متخصصان قرار دهد.",
      en: "As a premier manufacturer of architectural aluminum solutions, Simfam produces industrial extrusions, linear LED aluminum profiles (recessed, surface-mounted, suspended), precision hardware, and cylinder light fixtures. The technical challenge was delivering an ultra-fast, modern single-page application tailored for architects, lighting designers, and building contractors. Built on React 19 and Vite with Estedad typography, the site delivers near-instantaneous catalog browsing and technical drawings access.",
      ar: "تعد سيم فام من أبرز مصنعي قطاعات الألومنيوم في إيران، متخصصة في مقاطع إضاءة LED المعمارية وإكسسواراتها. تم بناء الموقع باستخدام React 19 وVite لتقديم تجربة فائقة السرعة تلبي متطلبات المهندسين والمصممين.",
    },
    features: [
      {
        fa: "توسعه‌یافته به عنوان Single Page Application بر پایه جدیدترین نسخه React 19 و بیلد تولز Vite",
        en: "Developed as a client-side Single Page Application leveraging React 19 and Vite build tooling",
        ar: "تطبيق ويب أحادي الصفحة (SPA) مبني على أحدث إصدارات React 19 وأداة البناء فائقة السرعة Vite",
      },
      {
        fa: "کاتالوگ مهندسی مقاطع آلومینیومی: پروفیل‌های خطی توکار، روکار، آویز، کنج و چراغ‌های سیلندری",
        en: "Engineering catalog of extrusions: recessed, surface, pendant, corner linear LED profiles, and cylinder fixtures",
        ar: "كتالوج هندسي دقيق لمقاطع الألومنيوم: بروفايلات LED غاطسة، ظاهرة، معلقة، زاوية، وكشافات سيلندر",
      },
      {
        fa: "دسترسی سریع به مشخصات مقطع، ابعاد برش، نوع دیفیوزر و نوع یراق‌آلات نصبی",
        en: "Instant access to profile blueprints, cutting dimensions, diffuser types, and mounting hardware options",
        ar: "الوصول الفوري للمخططات الهندسية للمقاطع وأبعاد القص ونوع الديفيوزر وخيارات التثبيت",
      },
      {
        fa: "طراحی هماهنگ با هویت بصری صنعتی با تم آبی مهندسی (#0D47A1) و فونت فارسی استعداد",
        en: "Industrial engineering visual language with deep royal blue (#0D47A1) accents and Estedad Persian typography",
        ar: "هوية بصرية هندسية متميزة بدرجات الأزرق الملكي (#0D47A1) وتناسق تايبوغرافي بخط استعداد الفارسي",
      },
      {
        fa: "بارگذاری آنی صفحات و پیمایش کاتالوگ بدون رفرش صفحه با نرخ پرفورمنس حداکثری",
        en: "Zero-latency page transitions and fluid catalog filtering with high Lighthouse performance scores",
        ar: "تحميل فوري وتصفح سلس للكتالوج دون إعادة تحميل الصفحات وبأعلى معايير الأداء والسرعة",
      },
      {
        fa: "بخش اختصاصی معرفی قابلیت‌های خط تولید، دستگاه‌های اکستروژن و استانداردهای کیفی کارخانه",
        en: "Dedicated showcase of manufacturing capabilities, extrusion facilities, and factory quality standards",
        ar: "قسم مخصص لاستعراض خطوط الإنتاج وماكينات البثق الحديثة ومعايير الجودة الصارمة للمصنع",
      },
    ],
    problem: {
      fa: "پیچیدگی کدهای فنی و دیتیل‌های معماری پروفیل‌های آلومینیومی که در وب‌سایت‌های قدیمی باعث سردرگمی طراحان و کندی بارگذاری می‌شد.",
      en: "Complex architectural aluminum codes and cross-sections often presented via sluggish legacy sites causing specification errors.",
      ar: "صعوبة البحث في الرموز الفنية المعقدة لقطاعات الألومنيوم في المواقع القديمة وبطء تصفح المخططات المعمارية.",
    },
    objective: {
      fa: "خلق یک وب‌اپلیکیشن صنعتی سبک، مدرن و سریع که کاتالوگ فنی سیم‌فام را در دسترس تمام متخصصان حوزه ساختمان قرار دهد.",
      en: "Build a lightweight, lightning-fast industrial web app placing Simfam's technical catalog directly at architects' fingertips.",
      ar: "بناء تطبيق ويب صناعي حديث وفائق الخفة يضع كتالوج سيم فام الهندسي بين يدي المهندسين والمصممين مباشرة.",
    },
    scope: {
      fa: "طراحان نورپردازی، معماران داخلی، مهندسان تاسیسات و سازندگان ساختمان‌های مدرن.",
      en: "Lighting designers, interior architects, MEP engineers, and commercial building developers.",
      ar: "مصممو الإنارة، المعماريون، مهندسو الديكور الداخلي، ومطورو المشاريع العمرانية الحديثة.",
    },
    architecture: {
      fa: "معماری Single Page Application با باندل بهینه‌شده Vite، کامپوننت‌های مدرن React 19 و لودینگ ماژولار استایل‌ها.",
      en: "Client-side SPA architecture with Vite module preloading, React 19 functional components, and zero-roundtrip routing.",
      ar: "معمارية تطبيق الصفحة الواحدة (SPA) مع تحسينات Vite وتحميل معياري للملفات ومكونات React 19 الفعالة.",
    },
    challenges: [
      {
        fa: "ساماندهی ساختار ده‌ها نوع پروفیل خطی با جزئیات نصب متنوع در قالبی ساده، منظم و قابل فهم.",
        en: "Structuring dozens of technical extrusion variants and mounting accessories into a clutter-free UI.",
        ar: "تنظيم عشرات المقاطع الهندسية وملحقات التركيب المختلفة ضمن واجهة سهلة التصفح والبحث.",
      },
      {
        fa: "دستیابی به بالاترین سرعت لود اولیه در شبکه‌های کم‌سرعت با فشرده‌سازی حداکثری کدهای جاوااسکریپت.",
        en: "Achieving instantaneous first-contentful-paint across varying mobile connections via asset minimization.",
        ar: "تحقيق سرعة استجابة فائقة للتحميل الأولي على كافة شبكات الاتصال عبر ضغط الموارد والوسائط.",
      },
    ],
    limitations: [
      {
        fa: "سفارش‌گذاری نهایی به دلیل ابعاد متغیر و برش‌های اختصاصی شاخه‌ها از طریق تماس با واحد فنی و فروش انجام می‌شود.",
        en: "Direct order fulfillment conducted via engineering sales consultation due to custom profile cut lengths.",
        ar: "يتم تثبيت الطلبيات عبر التواصل مع القسم الفني والمبيعات نظراً لأطوال القص المخصصة لكل مشروع.",
      },
    ],
    future: [
      {
        fa: "پیاده‌سازی ابزار آنلاین محاسبه متراژ پروفیل و توان درایور متناسب با پروژه نورپردازی کاربر.",
        en: "Online profile length and LED driver wattage calculator for lighting project planning.",
        ar: "إضافة أداة تفاعلية لحساب أطوال البروفايل وقدرة المحولات الكهربائية المناسبة لكل مشروع.",
      },
    ],
    conclusion: {
      fa: "وب‌اپلیکیشنی مدرن و صنعتی که توان مهندسی سیم‌فام را به شکلی پیشرو منعکس کرده و مرجع انتخاب پروفیل برای معماران تراز اول شده است.",
      en: "A state-of-the-art industrial web portal that solidified Simfam's engineering leadership among top architectural firms.",
      ar: "منصة ويب صناعية متقدمة رسخت الريادة الهندسية لشركة سيم فام وأصبحت المرجع الأول للمعماريين ومصممي الإضاءة.",
    },
    contributions: {
      fa: "توسعه فرانت‌اند با React 19 و Vite، طراحی رابط کاربری صنعتی، ساختاردهی کاتالوگ مهندسی و بهینه‌سازی سرعت.",
      en: "React 19 & Vite front-end engineering, industrial UI design, engineering catalog structuring, and web performance tuning.",
      ar: "تطوير الواجهة الأمامية عبر React 19 وVite، وتصميم الهوية الصناعية، وتنظيم الكتالوج الهندسي، وضبط الأداء.",
    },
    techStack: {
      core: ["React 19.2", "Vite ES Modules", "Single Page Application (SPA)"],
      styling_ui: ["Tailwind/Modern CSS", "Estedad Persian Typography", "Industrial Blue (#0D47A1)"],
      catalog_spec: ["Linear Profile Directory", "LED Extrusion Specs", "Architectural Hardware Guides"],
      optimization: ["Module Preloading", "SVG Asset Pipeline", "Zero Server Roundtrip Routing"],
    },
  },
];

// ─── 10 REAL VIDEO PRODUCTION PROJECTS ─────────────────────────────────────────
export const contentProjects = [
  {
    slug: "alma-clinic-slimming",
    category: "content",
    video: "/img/projects/video/alma.mp4",
    aspectRatio: "16:9",
    duration: "01:17",
    name: {
      fa: "کلینیک آلما — تیزر داستانی دستگاه لاغری",
      en: "Alma Clinic — Slimming Technology Cinematic Teaser",
      ar: "عيادة ألما — إعلان درامي لجهاز نحت وتخسيس الجسم",
    },
    description: {
      fa: "این ویدئو به سفارش کلینیک آلما تهیه و تولید شد. ساخت تیزر با محتوای کاملاً داستانی از دستگاه لاغری و نمایش چالش‌های تمرینات سنگین ورزشی.",
      en: "Produced for Alma Clinic. A high-production narrative commercial depicting the intense athletic struggle against stubborn fat and the breakthrough of advanced localized slimming technology.",
      ar: "أُنتج لصالح عيادة ألما. إعلان درامي سينمائي يروي قصة التحدي الرياضي وتجاوز الدهون الصعبة عبر أحدث تقنيات أجهزة التخسيس الموضعي.",
    },
    skills: ["Cinematography", "Storyboarding", "DaVinci Resolve", "Directing", "Lighting"],
    extras: ["Narrative Script", "Commercial", "Sound Design", "Color Grading", "4K Production"],
    image: "/img/projects/video/thumbnails/alma.jpg",
    media: [
      "/img/projects/video/thumbnails/alma.jpg",
      "/img/projects/video/thumbnails/alma-2.jpg",
      "/img/projects/video/thumbnails/alma-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "ایده فیلم بر پایه تضاد میان تلاش‌های طاقت‌فرسای ورزشی و چربی‌های موضعی مقاوم شکل گرفت. داستان ورزشکاری که با وجود تمرینات سخت به فرم نهایی نمی‌رسد و با تکنولوژی دستگاه لاغری کلینیک آلما به نتیجه مطلوب دست می‌یابد.",
      en: "The concept revolves around the emotional contrast between exhausting gym training and stubborn fat pockets. The narrative takes the athlete from peak frustration to ultimate physical harmony via Alma Clinic's medical technology.",
      ar: "انبثقت الفكرة من التباين بين التمارين الرياضية الشاقة والدهون المستعصية، حيث يصل البطل الرياضي إلى هدفه المثالي عبر حلول عيادة ألما المتطورة.",
    },
    features: [
      {
        fa: "روایت داستانی با تعلیق بصری و گره‌گشایی هدفمند",
        en: "Story-driven narrative arc with cinematic visual tension",
        ar: "حبكة درامية مشوقة مع تصاعد بصري مدروس",
      },
      {
        fa: "نورپردازی سینمایی دراماتیک با ته‌مایه کلوین سرد و سبز ورزشی",
        en: "Dramatic gym lighting using cold, gritty atmospheric contrast",
        ar: "إضاءة سينمائية درامية بألوان باردة تعكس أجواء النوادي",
      },
      {
        fa: "کالر گریدینگ و تفکیک دقیق تن پوست در نرم‌افزار DaVinci Resolve",
        en: "High-precision color grading in DaVinci Resolve Studio",
        ar: "تدريج ألوان سينمائي متقن في DaVinci Resolve",
      },
      {
        fa: "میکس و مسترینگ صدای سینمایی و فضاسازی اتمسفر باشگاه",
        en: "Immersive athletic sound design and punchy master audio",
        ar: "هندسة صوتية محيطية وتأثيرات رياضية حماسية",
      },
    ],
    documentation: {
      fa: "شات‌لیست کامل صحنه‌ها، پلان نوری و لاگ زمان‌بندی فیلم‌برداری.",
      en: "Complete shot-list, lighting diagrams, and production timing log.",
      ar: "قائمة اللقطات الكاملة، مخططات الإضاءة وسجل الإنتاج الزمني.",
    },
    readme: {
      fa: "مشخصات فنی راش‌ها، پروفایل رنگی Log و فرآیند آماده‌سازی تیزر.",
      en: "Raw technical specs, Log color profile, and mastering pipeline.",
      ar: "المواصفات الفنية للقطات الخام، ملف الألوان اللوغاريثمي وخطة الإنتاج.",
    },
    problem: {
      fa: "تبلیغات سنتی پزشکی و زیبایی اغلب کلیشه‌ای، خسته‌کننده و فاقد احساس باورپذیری هستند.",
      en: "Traditional medical aesthetic commercials are often sterile, clinical, and lack emotional viewer resonance.",
      ar: "غالباً ما تكون الإعلانات الطبية التقليدية نمطية وتفتقر إلى التشويق البصري والتأثير العاطفي.",
    },
    objective: {
      fa: "خلق یک هویت بصری مدرن و سینمایی برای کلینیک آلما که انگیزه و اعتماد عمیق مخاطب را جلب کند.",
      en: "Elevate Alma Clinic's brand presence through dynamic cinematic storytelling that establishes credibility and customer motivation.",
      ar: "ترسيخ مكانة عيادة ألما كمرجع رائد من خلال قصة سينمائية تلهم الجمهور وتبني الثقة.",
    },
    scope: {
      fa: "پخش در کمپین‌های تبلیغاتی دیجیتال، تلویزیون شهری و شبکه‌های اجتماعی کلینیک آلما.",
      en: "Digital broadcast, social media advertising campaigns, and clinic reception displays.",
      ar: "الحملات الإعلانية الرقمية وشاشات العرض داخل العيادة ومنصات التواصل الاجتماعي.",
    },
    architecture: {
      fa: "ایده‌پردازی فیلم‌نامه ← استوری‌بورد ← فیلم‌برداری در لوکیشن ورزشی و کلینیک ← تدوین ریتمیک ← اصلاح رنگ ← صداگذاری فولی.",
      en: "Scriptwriting → Storyboard → Multi-setup Location Shoot → Fast-paced Editing → Film Look Grading → Foley Sound Mastering.",
      ar: "كتابة السيناريو ← القصة المصورة ← التصوير الميداني ← المونتاج الإيقاعي ← تدريج الألوان ← المكساج والمؤثرات الصوتية.",
    },
    challenges: [
      {
        fa: "کنترل نور محیطی در سالن بدنسازی با کنتراست بالا",
        en: "Controlling high-contrast gym lighting and reflective surfaces",
        ar: "التحكم بالإضاءة المتباينة داخل صالة التمارين",
      },
      {
        fa: "هماهنگی بازیگر و انتقال حس خستگی و انگیزه در صحنه‌های سنگین ورزشی",
        en: "Directing athletic performance to convey genuine fatigue and triumph",
        ar: "توجيه الأداء الحركي للممثل لإبراز التعب والإصرار",
      },
    ],
    limitations: [
      {
        fa: "زمان‌بندی فشرده فیلم‌برداری پیش از ساعات شلوغی باشگاه",
        en: "Tight filming window prior to gym operating peak hours",
        ar: "ضيق الوقت المخصص للتصوير قبل ساعات الذروة في النادي",
      },
    ],
    contributions: {
      fa: "کارگردانی، فیلم‌برداری، نورپردازی تخصصی، تدوین و اصلاح رنگ کامل پروژه.",
      en: "Director, Director of Photography, Lighting Designer, Lead Editor & Colorist.",
      ar: "الإخراج، إدارة التصوير، هندسة الإضاءة، المونتاج وتدريج الألوان بالكامل.",
    },
    future: [
      {
        fa: "توسعه سری ویدیوهای مصاحبه با مراجعین و ثبت نتایج واقعی لاغری",
        en: "Expanding into a multi-part patient journey testimonial series",
        ar: "إنتاج سلسلة وثائقية تستعرض تجارب ونتائج المراجعين الواقعية",
      },
    ],
    conclusion: {
      fa: "افزایش چشم‌گیر رزرو مشاوره‌ها و بازخورد فوق‌العاده مخاطبان در فضای مجازی.",
      en: "Delivered superior viewer retention and a direct surge in clinic consultation inquiries.",
      ar: "حقق الإعلان نسب تفاعل عالية وأسهم في زيادة ملحوظة في حجوزات الاستشارات.",
    },
    metrics: [
      { fa: "افزایش ۳ برابری انگیجمنت مخاطب", en: "3x Social Engagement Boost", ar: "زيادة التفاعل 3 أضعاف" },
      { fa: "کیفیت خروجی 4K DCI سینمایی", en: "4K DCI Cinematic Master", ar: "ماستر بدقة 4K سينمائية" },
      { fa: "طراحی ۱۰۰٪ اختصاصی صدا و نریشن", en: "Custom Spatial Sound Design", ar: "تصميم صوتي مكاني مخصص 100%" },
    ],
    techStack: {
      gear: ["Cinema Camera Rig", "Prime Lenses", "Gimbal Stabilizer"],
      lighting: ["Aputure 600d", "Amaran RGB Tubes", "C-Stands & Diffusers"],
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
      audio: ["Rode Wireless PRO", "Logic Pro X"],
    },
  },
  {
    slug: "garnet-gallery-opening",
    category: "content",
    video: "/img/projects/video/garnrtgallery.mp4",
    aspectRatio: "16:9",
    duration: "01:30",
    name: {
      fa: "گالری گارنت — تیزر افتتاحیه شو‌روم سنگ و اسلب",
      en: "Garnet Gallery — Grand Opening Luxury Stone Teaser",
      ar: "معرض جارنت — إعلان الافتتاح الكبير لصالة الرخام والألواح",
    },
    description: {
      fa: "این تیزر افتتاحیه به سفارش گالری سنگ و اسلب گارنت تهیه و تولید شد. ساخت تیزر با سبک سینمایی، ترند و باشکوه با تمرکز بر بافت سنگ‌های ساختمانی لوکس.",
      en: "Produced for Garnet Stone & Slab Gallery. A cinematic, trending grand opening showcase highlighting luxury architectural marble slabs, interior designers, and VIP ceremony aesthetics.",
      ar: "تم إنتاجه لصالح معرض جارنت. إعلان افتتاحي مبهر بأسلوب ترند وسينمائي يوثق جمال أسطح الرخام الفاخرة وحفل الافتتاح المتميز.",
    },
    skills: ["Cinematography", "Gimbal Movement", "DaVinci Resolve", "Commercial Editing", "Lighting"],
    extras: ["Architectural Showcase", "Luxury Branding", "Trend Cuts", "Color Grading"],
    image: "/img/projects/video/thumbnails/garnrtgallery.jpg",
    media: [
      "/img/projects/video/thumbnails/garnrtgallery.jpg",
      "/img/projects/video/thumbnails/garnrtgallery-2.jpg",
      "/img/projects/video/thumbnails/garnrtgallery-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "افتتاحیه شو‌روم مجلل گارنت گالری، نقطه تلاقی هنر معماری و شکوه طبیعت در اسلب‌های طبیعی. تمرکز تیزر بر انعکاس نور بر رگه‌های سنگ، عظمت ابعاد اسلب‌ها و پرستیژ رویداد با حضور چهره‌های سرشناس صنعت ساختمان بود.",
      en: "The grand opening of Garnet Gallery celebrated the convergence of natural stone geology and high architecture. The video captures the mirror reflections of bookmatched marble, ambient lighting, and high-profile architectural guests.",
      ar: "جسّد حفل افتتاح معرض جارنت تناغم الفن المعماري مع نقوش الرخام الطبيعي الخلابة. ركز الفيديو على فخامة الألواح وانعكاسات الإضاءة وضيوف الحفل النخبة.",
    },
    features: [
      {
        fa: "تصویربرداری نرم و شناور با گیمبال از بافت اسلب‌ها",
        en: "Fluid gimbal tracking shots revealing slab texture depth",
        ar: "لقطات انسيابية بالكاميرا الطائرة تبرز تفاصيل عروق الرخام",
      },
      {
        fa: "هماهنگی دقیق ریتم کات‌ها با موسیقی مدرن و ترند",
        en: "Dynamic rhythm-synced editing with modern cinematic beats",
        ar: "مونتاج إيقاعي عصري متزامن مع الموسيقى السينمائية",
      },
      {
        fa: "نورپردازی موضعی برای تاکید بر رگه‌ها و جلای سنگ‌ها",
        en: "Precision accent lighting capturing stone polish and veins",
        ar: "إضاءة مركزة لإبراز لمعان الأسطح وجودة التشطيب",
      },
      {
        fa: "مستندسازی رویداد و حضور بزرگان معماری و سازندگان",
        en: "Event coverage of leading architects and industry leaders",
        ar: "توثيق حضور كبار المعماريين والشخصيات البارزة",
      },
    ],
    documentation: {
      fa: "پلان حرکت دوربین، دیاگرام پوشش سالن و شات‌لیست مصاحبه با معماران.",
      en: "Camera tracking plans, showroom floor lighting, and architect interview list.",
      ar: "مخططات حركة الكاميرا وتوزيع الإضاءة وقائمة لقاءات المعماريين.",
    },
    readme: {
      fa: "راهنمای کالر گریدینگ سنگ‌های مرمر و تطابق رنگ واقعی متریال‌ها.",
      en: "Color grading guidelines for natural marble and accurate texture fidelity.",
      ar: "دليل تدريج ألوان الرخام الطبيعي وضبط مطابقة الألوان للواقع.",
    },
    problem: {
      fa: "انعکاس شدید نور در سطوح صیقلی سنگ‌ها و گستردگی ابعاد سالن نمایشگاهی.",
      en: "Severe reflections on mirror-polished stone surfaces and broad showroom spatial volume.",
      ar: "التحدي الكبير في إدارة الانعكاسات الضوئية على أسطح الرخام المصقولة.",
    },
    objective: {
      fa: "خلق تیزری باشکوه و در تراز استانداردهای جهانی برای معرفی گالری گارنت به عنوان برند اول سنگ‌های لوکس.",
      en: "Establish Garnet Gallery as the premier luxury slab destination with world-class visual prestige.",
      ar: "تقديم علامة جارنت كوجهة أولى للأحجار الفاخرة عبر إعلان يرتقي للمقاييس العالمية.",
    },
    scope: {
      fa: "کمپین‌های دیجیتال، پلتفرم‌های تخصصی معماری و نمایشگاه‌های بین‌المللی ساختمان.",
      en: "Architecture portals, VIP client presentations, and social media campaigns.",
      ar: "المجلات المعمارية المتخصصة، عروض كبار العملاء ومنصات التواصل.",
    },
    architecture: {
      fa: "برنامه‌ریزی شات‌لیست رویداد ← تصویربرداری مراسم و بافت سنگ‌ها ← تدوین ترند و سینمایی ← اصلاح رنگ متناسب با سنگ‌ها ← مستر صدا.",
      en: "Shot-list Strategy → Event & Texture Cinematography → Dynamic Editing → Natural Stone Color Grading → Audio Master.",
      ar: "تخطيط مسار الكاميرا ← التصوير الميداني للمعرض والحفل ← المونتاج الحركي ← تدريج الألوان الطبيعية للرخام ← الماستر الصوتي.",
    },
    challenges: [
      {
        fa: "حذف بازتاب‌های ناخواسته از روی اسلب‌های بوک‌مچ با فیلترهای پولاریزه",
        en: "Eliminating specular flares on polished bookmatched slabs with CPL filters",
        ar: "تجنب الوهج الزائد على الألواح اللامعة باستخدام الفلاتر المستقطبة",
      },
      {
        fa: "مدیریت حرکت در ازدحام جمعیت میهمانان افتتاحیه",
        en: "Navigating crowded opening night reception seamlessly",
        ar: "التحكم بحركة الكاميرا بسلاسة وسط جموع الضيوف",
      },
    ],
    limitations: [
      {
        fa: "رویداد زنده بدون امکان تکرار صحنه‌های کلیدی افتتاحیه",
        en: "One-shot live event with non-repeatable ceremonial moments",
        ar: "طبيعة الحفل المباشر دون فرصة لإعادة اللقطات الرئيسية",
      },
    ],
    contributions: {
      fa: "کارگردانی هنری، فیلم‌برداری با گیمبال، تدوین، اصلاح رنگ و تحویل سریع تیزر افتتاحیه.",
      en: "Lead Cinematographer, Gimbal Operator, Editor & Colorist.",
      ar: "إدارة التصوير السينمائي، تشغيل مانع الاهتزاز، المونتاج وضبط الألوان.",
    },
    future: [
      {
        fa: "ساخت کاتالوگ ویدیویی مجزا برای هر نوع سنگ و کوپ معدنی",
        en: "Producing individual video catalogs for signature quarry stone lines",
        ar: "إنتاج كتالوجات فيديو مستقلة لكل نوع من أنواع الرخام النادر",
      },
    ],
    conclusion: {
      fa: "استقبال گسترده جامعه معماران و تثبیت برند گارنت در بازار سنگ‌های ساختمانی پریمیوم.",
      en: "Widely praised by architectural firms, driving immediate showroom footfall.",
      ar: "لاقى العمل إشادة واسعة من المكاتب الهندسية وعزز ثقة العملاء بالمعرض.",
    },
    metrics: [
      { fa: "پوشش بیش از ۲۰ تیپ اسلب لوکس", en: "20+ Luxury Slab Types Featured", ar: "استعراض أكثر من 20 نوع رخام فاخر" },
      { fa: "کیفیت 4K با رنگ‌آمیزی استاندارد سنگ", en: "4K True-Color Stone Reproduction", ar: "دقة 4K بألوان مطابقة للواقع" },
      { fa: "نرخ تکمیل تماشای ۹۵٪ در اینستاگرام", en: "95% Video Completion Rate", ar: "نسبة مشاهدة كاملة بلغت 95%" },
    ],
    techStack: {
      gear: ["Sony FX Series", "DJI Ronin Gimbal", "Ultra-wide & Macro Lenses"],
      lighting: ["Nanlite Spotlights", "Lantern Diffusers", "Accent LED Wands"],
      software: ["DaVinci Resolve Studio", "After Effects"],
      audio: ["Wireless Mic Suite", "Soundtrack Licensing"],
    },
  },
  {
    slug: "sayna-complex-industrial",
    category: "content",
    video: "/img/projects/video/nasagi.mp4",
    aspectRatio: "16:9",
    duration: "01:35",
    name: {
      fa: "مجتمع کارخانجات ساینا — تیزر صنعتی و خطوط تولید",
      en: "Sayna Manufacturing Complex — Industrial & Production Showcase",
      ar: "مجمع مصانع ساينا — جولة صناعية سينمائية وخطوط الإنتاج",
    },
    description: {
      fa: "تیزر معرفی کارخانه صنعتی و خط تولید مجتمع ساینا؛ بزرگ‌ترین تولیدکننده تیشو الیاف شیشه و منسوجات صنعتی در ایران با هلی‌شات و فیلم‌برداری تخصصی.",
      en: "An epic industrial documentary film showcasing the massive scale, robotic lines, and advanced glass fiber tissue extrusion plants of Sayna Manufacturing Complex.",
      ar: "فيلم وثائقي صناعي ضخم يستعرض أحدث خطوط إنتاج تيشو ألياف الزجاج والمنسوجات بمجمع ساينا، مع تصوير جوي بدقة سينمائية مذهلة.",
    },
    skills: ["Industrial Cinematography", "Drone Filming", "Sound Design", "DaVinci Resolve", "Technical Direction"],
    extras: ["Aerial Drone", "Factory Scale", "Macro Machinery", "Heavy Industry"],
    image: "/img/projects/video/thumbnails/nasagi.jpg",
    media: [
      "/img/projects/video/thumbnails/nasagi.jpg",
      "/img/projects/video/thumbnails/nasagi-2.jpg",
      "/img/projects/video/thumbnails/nasagi-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "روایتی پرصلابت از تولید ملی و خودباوری صنعتی؛ به تصویر کشیدن گستره پهناور کارخانجات ساینا از آسمان تا قلب ماشین‌آلات پرسرعت ریسندگی، خطوط الیاف شیشه، کالبد انبارها و تلاش شبانه‌روزی مهندسان.",
      en: "A monumental showcase of heavy industry engineering. The film bridges grand aerial perspectives over the vast manufacturing facilities down to the micro-rhythms of spinning spools, molten polymer fibers, and automated robotics.",
      ar: "قصيدة بصرية تعبر عن عظمة الإنتاج الصناعي والتقنية الحديثة، تأخذ المشاهد من سماء المصانع الواسعة إلى تفاصيل الآلات العملاقة وخطوط الغزل والنسيج الدقيقة.",
    },
    features: [
      {
        fa: "تصویربرداری هوایی 4K با پهپاد از وسعت سوله‌ها و محوطه کارخانه",
        en: "4K cinematic drone sweeps over sprawling factory architecture",
        ar: "تصوير جوي 4K بالدرون يبرز المساحات الهائلة للمصانع",
      },
      {
        fa: "تصویربرداری ماکرو و اسلوموشن از فرآیند اکستروژن و بافت الیاف",
        en: "High-speed slow-motion capturing polymer fiber crystallization",
        ar: "تصوير بطيء عالي السرعة لخطوط البوليمر وغزل الألياف",
      },
      {
        fa: "نورپردازی مکمل در سالن‌های بزرگ صنعتی برای ایجاد عمق بصری",
        en: "Industrial supplemental lighting providing striking spatial contrast",
        ar: "إضاءة صناعية احترافية لمنح المشاهد عمقاً سينمائياً",
      },
      {
        fa: "طراحی و تلفیق صداهای واقعی کارخانه با موسیقی ارکسترال حماسی",
        en: "Authentic industrial foley mixed with powerful orchestral score",
        ar: "مكساج صوتي يدمج هدير الآلات الواقعي مع موسيقى ملحمية",
      },
    ],
    documentation: {
      fa: "مجوزهای پرواز هوایی، رعایت کدهای HSE و برنامه‌ریزی شات‌لیست ایمن خطوط تولید.",
      en: "Aviation flight permissions, HSE code compliance, and safety-first industrial shot-list.",
      ar: "تصاريح الطيران الجوي، التزام معايير السلامة الصناعية وخطة التصوير الميداني.",
    },
    readme: {
      fa: "تنظیمات فنی خروجی سینمایی و مشخصات پهپاد با سیستم مهار لرزش باد.",
      en: "Cinema export master settings and drone wind-stabilization specs.",
      ar: "الإعدادات الفنية لخروج الفيديو السينمائي ومواصفات الدرون المقاوم للرياح.",
    },
    problem: {
      fa: "محیط‌های صنعتی دارای نویز نوری بالا، گرد و غبار، دمای متغیر و ابعاد بسیار وسیع هستند.",
      en: "Extreme factory environments featuring lighting disparity, machine vibrations, dust, and immense architectural scale.",
      ar: "صعوبة التصوير في البيئات الصناعية ذات الإضاءة الصعبة والاهتزازات والغبار.",
    },
    objective: {
      fa: "نمایش صلابت و اقتدار برند ساینا به عنوان پیشگام صنعت برای مشتریان داخلی و بازارهای صادراتی بین‌المللی.",
      en: "Convey the industrial excellence, reliability, and technological supremacy of Sayna for international B2B markets.",
      ar: "إبراز قوة علامة ساينا وموثوقية خطوطها الإنتاجية لشركاء الأعمال والأسواق العالمية.",
    },
    scope: {
      fa: "نمایشگاه‌های بین‌المللی صنعت و نفت و گاز، وب‌سایت هلدینگ و جلسات سرمایه‌گذاری.",
      en: "International industrial expos, corporate investor relations, and brand portal.",
      ar: "المعارض الصناعية الدولية، مؤتمرات الاستثمار، وبوابة الشركة الرقمية.",
    },
    architecture: {
      fa: "بازدید فنی و سناریونویسی صنعتی ← پرواز هلی‌شات ← تصویربرداری خطوط تولید ← تدوین و جلوه‌های موشن ← کالر گریدینگ فولادی ← میکس صدا.",
      en: "Technical Pre-production → Drone Flights → Machine Line Cinematography → Dynamic Assembly → Industrial Metal Grade → Master Foley.",
      ar: "المعاينة الفنية وكتابة السيناريو ← التصوير بالدرون ← تصوير خطوط الإنتاج ← المونتاج ← تدريج الألوان الصناعي ← المكساج النهائي.",
    },
    challenges: [
      {
        fa: "تطبیق با استانداردهای ایمنی سخت‌گیرانه (HSE) در مجاورت ماشین‌آلات فعال",
        en: "Strict adherence to factory HSE safety protocols while filming active lines",
        ar: "الالتزام بمعايير السلامة المهنية الصارمة قرب الآلات الثقيلة",
      },
      {
        fa: "مدیریت تغییرات شدید نور در گذار از محوطه باز به داخل سوله‌ها",
        en: "Managing radical exposure shifts moving between outdoor yard and indoor halls",
        ar: "معالجة التباين الحاد في الإضاءة بين الساحات الخارجية وداخل المصانع",
      },
    ],
    limitations: [
      {
        fa: "عدم توقف خطوط تولید به منظور فیلم‌برداری و ضرورت سرعت عمل بالا",
        en: "Zero production downtime permitted during active filming schedule",
        ar: "استمرار خطوط الإنتاج دون توقف مما فرض دقة وسرعة قصوى في التصوير",
      },
    ],
    contributions: {
      fa: "کارگردانی، خلبانی پهپاد تصویربرداری، فیلم‌برداری تخصصی صنعتی، تدوین و صداگذاری اختصاصی.",
      en: "Director, Drone Pilot, Lead Industrial DP, Editor & Sound Designer.",
      ar: "الإخراج، قيادة طائرة الدرون، إدارة التصوير الصناعي، المونتاج وهندسة الصوت.",
    },
    future: [
      {
        fa: "تولید ویدیوهای تفکیکی معرفی آزمایشگاه‌های کنترل کیفی و گواهینامه‌ها",
        en: "Developing specialized lab testing and R&D verification mini-features",
        ar: "إنتاج فيديوهات مستقلة تستعرض مختبرات الجودة والأبحاث والتطوير",
      },
    ],
    conclusion: {
      fa: "تولید اثری مرجع در زمینه فیلم‌های صنعتی کشور و بازتاب تحسین‌برانگیز در همایش‌های تخصصی.",
      en: "Set a benchmark in modern Iranian industrial filmmaking, celebrated in national trade forums.",
      ar: "حقق الفيلم صدى واسعاً في الأوساط الصناعية واعتُبر نموذجاً رائداً في التوثيق الصناعي.",
    },
    metrics: [
      { fa: "تصویربرداری از ۶ خط تولید فعال", en: "6 Active Manufacturing Lines Covered", ar: "تغطية 6 خطوط إنتاج نشطة" },
      { fa: "کیفیت 4K هوایی و زمینی", en: "4K Combined Aerial & Terrestrial Footage", ar: "تصوير جوي وأرضي متكامل بدقة 4K" },
      { fa: "صداگذاری استودیویی صنعتی با بیت‌ریت بالا", en: "High-bitrate Studio Industrial Sound Mix", ar: "مكساج صوتي استوديو عالي النقاء" },
    ],
    techStack: {
      gear: ["DJI Professional Drone", "Cinema Rig", "Heavy Duty Slider", "Telephoto & Macro Lenses"],
      lighting: ["High-power Industrial Spotlights", "Daylight LED Pars"],
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
      audio: ["Zoom Field Recorders", "Sennheiser Shotgun Mics"],
    },
  },
  {
    slug: "bb-restaurant-signature",
    category: "content",
    video: "/img/projects/video/bb.mp4",
    aspectRatio: "9:16",
    duration: "00:26",
    name: {
      fa: "باغچه باربیکیو — محتوای سینمایی مرغ سیگنیچر",
      en: "Baghche Barbecue — Signature Chicken Cinematic Reel",
      ar: "مطعم باغتشه باربيكيو — ريلز سينمائي لمرغ سيجنتشر",
    },
    description: {
      fa: "محتوای سینمایی از معرفی آیتم‌های اختصاصی منوی رستوران باغچه باربیکیو؛ ارائه جذاب و اشتهابرانگیز مرغ سیگنیچر با ریتم وایرال و استانداردهای اینستاگرام.",
      en: "A mouth-watering vertical commercial reel showcasing Baghche Barbecue's signature dish, pairing refined restaurant hospitality with culinary sensory visuals.",
      ar: "ريلز تسويقي عمودي سينمائي يستعرض الطبق الحصري لمنتجع ومطعم باغتشه باربيكيو بأسلوب جذاب يثير الحواس ومناسب لوسائل التواصل.",
    },
    skills: ["Food Cinematography", "Lighting", "Vertical Reels", "Color Grading", "DaVinci Resolve"],
    extras: ["Macro Food", "Culinary Styling", "High Energy Cut", "Appetite Appeal"],
    image: "/img/projects/video/thumbnails/bb.jpg",
    media: [
      "/img/projects/video/thumbnails/bb.jpg",
      "/img/projects/video/thumbnails/bb-2.jpg",
      "/img/projects/video/thumbnails/bb-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "خلق یک هوک وایرال و چشم‌نواز: آغاز ویدیو با زنگ سرو برنجی روی میز چوبی و میهمان باوقار رستوران، و سپس برشی تند و هیجان‌انگیز به بافت آبدار مرغ گریل‌شده، دود زغال و گارنیش‌های هوس‌انگیز مرغ سیگنیچر.",
      en: "Designed around a compelling retention hook: starting with the guest and table reception bell, followed by an explosion of sizzling barbecue embers, dripping glazes, and succulent chicken textures.",
      ar: "بُني الريلز على فكرة جاذبة تبدأ برنين جرس الخدمة الكلاسيكي على الطاولة، لتنطلق المشاهد السريعة للطهي الحي ورائحة الشواء الشهية لطبق الدجاج الحصري.",
    },
    features: [
      {
        fa: "ترکیب هوشمندانه حضور بازیگر و کلوزآپ‌های هوس‌انگیز غذا",
        en: "Seamless blend of hospitality ambience and mouth-watering macro food shots",
        ar: "دمج متقن بين أجواء الضيافة واللقطات المقربة للأطباق",
      },
      {
        fa: "نورپردازی گرم و اشتهاآور با جهت‌دهی دقیق نور برای درخشش بافت مرغ",
        en: "Warm appetizing lighting engineered to emphasize meat texture and steam",
        ar: "إضاءة دافئة مخصصة لتصوير الأطعمة تبرز تفاصيل الشواء",
      },
      {
        fa: "تدوین ریتمیک متناسب با الگوریتم‌های پربازدید ریلز اینستاگرام",
        en: "High-velocity tempo optimized for Instagram Reel viral retention",
        ar: "مونتاج سريع وحيوي يتوافق مع خوارزميات ريلز إنستغرام",
      },
      {
        fa: "اصلاح رنگ متمرکز بر طلایی شدن پوست و شادابی سبزیجات",
        en: "Vibrant food color grading making every ingredient pop with freshness",
        ar: "ألوان غنية تعكس نضارة المكونات وجودة التقديم",
      },
    ],
    documentation: {
      fa: "برنامه زمان‌بندی سرو غذا و استایلینگ ظروف و گارنیش‌های سرآشپز.",
      en: "Food plating timeline, styling guidelines, and chef garnish layout.",
      ar: "جدول تقديم الأطباق وإرشادات التزيين وتنسيق المكونات مع الشيف.",
    },
    readme: {
      fa: "تنظیمات بهینه انکودینگ ویدیوی ریلز ۹:۱۶ بدون افت کیفیت در اینستاگرام.",
      en: "Optimized 9:16 vertical encoding settings preventing Instagram compression artifacts.",
      ar: "إعدادات التصدير العمودي المثلى 9:16 لمنع ضياع الجودة على إنستغرام.",
    },
    problem: {
      fa: "رقابت شدید در حوزه تبلیغات رستورانی و ضرورت خلق هوک در ۳ ثانیه اول ویدیو.",
      en: "Intense social media restaurant clutter requiring an unmistakable hook within 3 seconds.",
      ar: "المنافسة المحمومة في إعلانات المطاعم وضرورة خطف انتباه المشاهد في الثواني الأولى.",
    },
    objective: {
      fa: "تبدیل مرغ سیگنیچر به ستاره منوی رستوران و افزایش مستقیم سفارش‌های حضوری و آنلاین.",
      en: "Transform the Signature Chicken into a recognizable menu icon that boosts table orders.",
      ar: "جعل طبق مرغ سيجنتشر أيقونة المطعم الأكثر طلباً وزيادة الإقبال المباشر.",
    },
    scope: {
      fa: "ریلز اینستاگرام، تبلیغات اینفلوئنسری و مانیتورهای داخل سالن باغچه باربیکیو.",
      en: "Instagram Reels, viral influencer promotions, and digital menu screens.",
      ar: "ريلز إنستغرام، الحملات الإعلانية وشاشات العرض داخل صالة المطعم.",
    },
    architecture: {
      fa: "طراحی کانسپت و استایلینگ غذا ← فیلم‌برداری پرسرعت عمودی ← تدوین ریتمیک با هوک بالا ← رنگ‌آمیزی اشتهاآور ← افکت‌های صوتی غذا (ASMR).",
      en: "Concept & Food Prep → Vertical High-speed Cinematography → Viral Hook Editing → Warm Grading → Culinary ASMR Foley.",
      ar: "تصميم التقديم وإعداد الطبق ← التصوير العمودي السريع ← المونتاج الجذاب ← تدريج الألوان الدافئ ← المؤثرات الصوتية (ASMR).",
    },
    challenges: [
      {
        fa: "حفظ تازگی و جلای بصری غذا در حین فیلم‌برداری صحنه‌های متوالی",
        en: "Maintaining hot food freshness, steam, and glaze under bright lights",
        ar: "الحفاظ على مظهر الطعام طازجاً وساخناً تحت حرارة الأضواء",
      },
      {
        fa: "هماهنگی دقیق میان زاویه دوربین عمودی و قاب‌بندی بازیگر و غذا",
        en: "Balancing vertical 9:16 framing between the actor and tabletop food elements",
        ar: "ضبط أبعاد الكادر العمودي 9:16 بين الممثل وموضع الطبق بدقة",
      },
    ],
    limitations: [
      {
        fa: "محدودیت زمان سرو و تبخیر حرارت غذا در لوکیشن",
        en: "Tight time constraints due to food cooling down rapidly",
        ar: "الحاجة للسرعة قبل أن يفقد الطبق حرارته وشكله الأمثل",
      },
    ],
    contributions: {
      fa: "ایده‌پردازی، کارگردانی، فیلم‌برداری عمودی، نورپردازی تخصصی غذا و تدوین ریتمیک.",
      en: "Creative Director, DP, Food Stylist/Lighting, and Post-production Editor.",
      ar: "الفكرة، الإخراج، التصوير العمودي، إضاءة الأطعمة والمونتاج.",
    },
    future: [
      {
        fa: "تولید تیزرهای سینمایی برای کباب‌های اصیل و آیتم‌های باربیکیو شبانه",
        en: "Producing upcoming series for traditional kebabs and open-fire cuts",
        ar: "إنتاج سلسلة ريلز جديدة لأطباق المشاوي المفتوحة في الأجواء الليلية",
      },
    ],
    conclusion: {
      fa: "دستیابی به بالاترین نرخ تعامل پیج و معرفی موفق مرغ سیگنیچر به صدها هزار مخاطب.",
      en: "Achieved top engagement metrics on the brand's Instagram with strong order spikes.",
      ar: "حقق أعلى نسب مشاهدة وتفاعل في حساب المطعم وزيادة مباشرة في الطلبات.",
    },
    metrics: [
      { fa: "ریلز عمودی 9:16 استاندارد اینستاگرام", en: "9:16 Native Vertical Social Video", ar: "تنسيق عمودي أصلي 9:16" },
      { fa: "کیفیت 4K عمودی با ۶۰ فریم", en: "4K 60fps High-Motion Capture", ar: "دقة 4K فائقة بسرعة 60 إطاراً" },
      { fa: "صداگذاری ASMR فوق‌العاده اشتهاآور", en: "Sensory Culinary ASMR Audio Design", ar: "هندسة صوتية ASMR تزيد الشهية" },
    ],
    techStack: {
      gear: ["Sony Alpha Mirrorless", "Gimbal 3-Axis", "Macro 90mm Prime", "Fast 24-70mm f/2.8"],
      lighting: ["Godox Key Lights", "Warm Gel Filters", "Reflectors"],
      software: ["DaVinci Resolve Studio", "CapCut Pro Desktop"],
      audio: ["ASMR Directional Microphone", "Dynamic Audio Mixing"],
    },
  },
  {
    slug: "pelak8-groom-styling",
    category: "content",
    video: "/img/projects/video/Grim3-2.mp4",
    aspectRatio: "9:16",
    duration: "00:56",
    name: {
      fa: "سالن تخصصی گریم داماد پلاک ۸ — تیزر مادلینگ و استایلینگ",
      en: "Pelak 8 VIP Groom Salon — High-Fashion Modeling & Hair Styling",
      ar: "صالون بيلاك 8 لتجهيز العرسان — ريلز الأزياء الراقية وتصفيف الشعر",
    },
    description: {
      fa: "این ریل تبلیغاتی به سفارش سالن پلاک ۸ تهیه و تولید شد. کانسپت جسورانه و فاخر گریم داماد با مادلینگ تشریفاتی، استایل مو و مار پایتون برای برندینگ وایرال.",
      en: "Produced for Pelak 8 Luxury Groom Salon. A daring, viral fashion-forward promotional reel blending bespoke groom tuxedo tailoring, editorial hair styling, and an exotic live python motif.",
      ar: "أُنتج لصالح صالون بيلاك 8 الفاخر. ريلز دعائي مبتكر وغير مسبوق يجمع بين أناقة بدلة العريس، تصفيف الشعر المتقن وظهور أفعى البايثون في مشهد وایرال فاخر.",
    },
    skills: ["Fashion Cinematography", "Lighting Setup", "Vertical Reels", "Creative Concept", "Color Grading"],
    extras: ["Editorial Styling", "Viral Concept", "Macro Hair", "Luxury Groom"],
    image: "/img/projects/video/thumbnails/Grim3-2.jpg",
    media: [
      "/img/projects/video/thumbnails/Grim3-2.jpg",
      "/img/projects/video/thumbnails/Grim3-2-2.jpg",
      "/img/projects/video/thumbnails/Grim3-2-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "شکستن کلیشه‌های رایج آرایشگاه‌های مردانه و ارتقای خدمات پلاک ۸ به تراز یک خانه مد و استایلینگ بین‌المللی. مدل با موهای بلند و مجعد در کت‌وشلوار تاکسیدوی رسمی، با ظرافت استایلیست آماده می‌شود و وجود مار پایتون طلایی نمادی از شکوه، آرامش و اعتمادبه‌نفس متمایز داماد است.",
      en: "Breaking away from repetitive barbershop tropes to position Pelak 8 as a prestigious haute-couture groom styling atelier. The sophisticated model, long hair blow-dry techniques, and exotic python create an arresting visual metaphor for masculine elegance and boldness.",
      ar: "الخروج عن الأنماط المعتادة لصالونات العرسان، وتقديم بيلاك 8 كدار متكاملة للأناقة والموضة. يبرز العمل تناغم البدلة الكلاسيكية مع تصفيف الشعر الطويل وظهور الأفعى كرمز للفخامة والجرأة.",
    },
    features: [
      {
        fa: "ایده‌پردازی جسورانه با المان‌های فشن ادیتوریال و مادلینگ اختصاصی",
        en: "Bold editorial fashion concept with dedicated groom modeling",
        ar: "فكرة مبتكرة مستوحاة من عروض الأزياء العالمية لتجهيز العرسان",
      },
      {
        fa: "نورپردازی استودیویی پرکنتراست در پس‌زمینه سفید خالص (High-Key)",
        en: "High-key studio contrast with pristine white backdrop aesthetics",
        ar: "إضاءة استوديو بيضاء نقية مع تباين حاد يبرز الملامح والبدلة",
      },
      {
        fa: "تصویربرداری اسلوموشن از حرکت مو و درخشش شنیون و اکسسوری‌ها",
        en: "Silky slow-motion capturing hair flow, grooming glimmers, and jewelry",
        ar: "تصوير بطيء انسيابي يبرز حركة الشعر وملمسه الناعم",
      },
      {
        fa: "تدوین ریتمیک با هماهنگی سشوار، براشینگ و حرکات دوربین",
        en: "Precision kinetic editing synchronizing blow-drying with rhythmic camera cuts",
        ar: "مونتاج متناغم مع إيقاع الموسيقى وحركات تصفيف الشعر",
      },
    ],
    documentation: {
      fa: "طراحی کانسپت بصری فشن، شات‌لیست حرکات سشوار و پروتکل‌های ایمنی کار با خزندگان.",
      en: "Fashion concept deck, blow-dry choreography, and exotic reptile on-set safety protocols.",
      ar: "ملف التصميم البصري، حركات تصفيف الشعر وإرشادات السلامة في التعامل مع الأفعى.",
    },
    readme: {
      fa: "پالت رنگی منوکروم مشکی-سفید و تفکیک بافت کت‌وشلوار از پس‌زمینه.",
      en: "Monochrome black-and-white color palette and tuxedo fabric texture separation.",
      ar: "توزيع ألوان الأبيض والأسود الكلاسيكي وتفاصيل إبراز قماش البدلة الفاخرة.",
    },
    problem: {
      fa: "یکنواختی تیزرهای آرایشگاه‌های داماد و دشواری خلق تصویری منحصربه‌فرد که در اکسپلورر وایرال شود.",
      en: "Repetitive salon advertising on social media that fails to stop user scrolling.",
      ar: "تشابه الإعلانات المعتادة لصالونات الحلاقة وصعوبة إبراز تميز حقيقي يشد الانتباه.",
    },
    objective: {
      fa: "جایگاه‌یابی سالن پلاک ۸ به عنوان انتخاب اول دامادهای خاص‌پسند و طبقه لوکس جامعه.",
      en: "Cement Pelak 8 as the unmistakable luxury groom destination for high-end clientele.",
      ar: "ترسيخ صالون بيلاك 8 كخيار أول للعرسان الباحثين عن الفخامة والتميز الفريد.",
    },
    scope: {
      fa: "کمپین ریلز اینستاگرام، پلتفرم‌های تشریفات عروسی و مانیتورینگ سالن VIP.",
      en: "Instagram viral campaigns, luxury wedding planners, and VIP salon displays.",
      ar: "حملات ريلز إنستغرام، منصات تنظيم الأعراس الفاخرة وشاشات الصالون الخاصة.",
    },
    architecture: {
      fa: "سناریو و استایلینگ لباس ← هماهنگی مدل و مربی مار ← فیلم‌برداری استودیو پرسرعت ← تدوین فشن ادیتوریال ← تصحیح رنگ سفید و مشکی تاکسیدو ← انتشار.",
      en: "Script & Tuxedo Styling → Model & Animal Coordination → High-speed Studio Shoot → Editorial Fashion Cut → High-key Monochrome Grade → Viral Release.",
      ar: "كتابة السيناريو وتنسيق الأزياء ← التنسيق مع العارض ومدرب الأفعى ← التصوير الاستوديو السريع ← المونتاج الفاخر ← تدريج ألوان البدلة الكلاسيكية.",
    },
    challenges: [
      {
        fa: "حفظ تعادل نوری پس‌زمینه سفید و کت مشکی برای حفظ بافت پارچه",
        en: "Managing exposure balance between high-key white background and deep black tuxedo fabric",
        ar: "موازنة الإضاءة بين الخلفية البيضاء الساطعة وسواد البدلة الفاخرة",
      },
      {
        fa: "مدیریت حرکت خزنده زنده در کادر بدون ایجاد استرس برای بازیگر",
        en: "Handling a live python smoothly on set while maintaining model composure",
        ar: "التعامل مع الأفعى الحية في الكادر مع الحفاظ على هدوء وتركيز العارض",
      },
    ],
    limitations: [
      {
        fa: "حساسیت بالای مار به حرارت پروژکتورها و نیاز به تصویربرداری سریع",
        en: "Python sensitivity to studio light temperature necessitating swift takes",
        ar: "حساسية الأفعى تجاه حرارة الإضاءة مما تطلب دقة وسرعة في إنجاز اللقطات",
      },
    ],
    contributions: {
      fa: "کانسپت‌سازی، کارگردانی، نورپردازی استودیو، فیلم‌برداری عمودی و تدوین اختصاصی.",
      en: "Concept Creator, Director, Studio Lighting Designer, DP & Fashion Editor.",
      ar: "صاحب الفكرة، المخرج، مصمم الإضاءة، مدير التصوير والمونتير.",
    },
    future: [
      {
        fa: "توسعه پکیج‌های ویدیویی روز عروسی (Wedding Day Groom Diary)",
        en: "Launching a full cinematic 'Wedding Day Groom Diary' service",
        ar: "إطلاق حزمة تصوير وثائقي سينمائي ليوم زفاف العريس بالكامل",
      },
    ],
    conclusion: {
      fa: "یکی از موفق‌ترین ریلزهای تبلیغاتی سالن با صدها اشتراک‌گذاری و بازخورد گسترده مخاطبان.",
      en: "Became one of Pelak 8's highest shared reels, sparking broad industry acclaim.",
      ar: "أصبح من أكثر الإعلانات انتشاراً ومشاركة في مسيرة الصالون وأحدث تفاعلاً واسعاً.",
    },
    metrics: [
      { fa: "افزایش ۲۰۰ درصدی بازدید پیج", en: "200% Organic Reach Spike", ar: "زيادة الوصول العضوي 200%" },
      { fa: "کانسپت وایرال منحصربه‌فرد", en: "Unique Editorial Viral Concept", ar: "فكرة إبداعية غير مسبوقة" },
      { fa: "رزولوشن 4K عمودی ۶۰ فریم", en: "4K Vertical 60fps Master", ar: "دقة 4K عمودية بمعدل 60 إطاراً" },
    ],
    techStack: {
      gear: ["Sony Cinema Line", "Portrait Prime 85mm f/1.4", "Gimbal 3-Axis"],
      lighting: ["Studio Softboxes 120cm", "Rim Lights", "White Seamless Backdrop"],
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
      audio: ["Fashion Beat Master", "Studio Sound Enhancement"],
    },
  },
  {
    slug: "pelak8-classic-grooming",
    category: "content",
    video: "/img/projects/video/pelak8-1.mp4",
    aspectRatio: "9:16",
    duration: "00:43",
    name: {
      fa: "سالن تخصصی گریم داماد پلاک ۸ — هنر پیرایش و اصلاح کلاسیک",
      en: "Pelak 8 Master Barber — Precision Beard Styling & Grooming",
      ar: "صالون بيلاك 8 — حلاقة وتحديد اللحية الكلاسيكية وفنون العناية",
    },
    description: {
      fa: "این ریل تبلیغاتی به سفارش سالن پلاک ۸ تهیه و تولید شد. تصویربرداری ماکرو از ظرافت پیرایش، خطوط دقیق ریش توسط مستر باربر مهدی نظرمحمدی و خدمات VIP داماد.",
      en: "Produced for Pelak 8 Groom Salon. A mesmerizing macro-cinematography showcase of artisan grooming, precision clipper contouring, and master barber craft by Mehdi Nazarmandi.",
      ar: "تم إنتاجه لصالح صالون بيلاك 8. استعراض سينمائي مقرب يبرز مهارة وتفاصيل حلاقة وتحديد اللحية بأسلوب فني دقيق من مستر باربر مهدي نظرمحمدي.",
    },
    skills: ["Macro Cinematography", "Lighting", "DaVinci Resolve", "Sound Design", "Vertical Reel"],
    extras: ["Barber Craft", "Macro Texture", "Beard Styling", "Artisan Precision"],
    image: "/img/projects/video/thumbnails/pelak8-1.jpg",
    media: [
      "/img/projects/video/thumbnails/pelak8-1.jpg",
      "/img/projects/video/thumbnails/pelak8-1-2.jpg",
      "/img/projects/video/thumbnails/pelak8-1-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "تجلیل از هنر دست و دقت میلی‌متری یک باربر حرفه‌ای. تمرکز کامل دوربین بر تماس تیغه ماشین اصلاح با مو و پوست، خط‌اندازی هندسی ریش و حس آرامش و لذت مشتری در حین پیرایش تخصصی، تجربه‌ای رضایت‌بخش (Oddly Satisfying) و به‌یادماندنی برای مخاطب خلق می‌کند.",
      en: "A celebration of artisanal grooming mastery. The lens dives into extreme macro perspectives where the clipper blade meets individual whiskers with mathematical symmetry, offering a deeply satisfying, textured auditory and visual experience.",
      ar: "احتفاء بفن ودقة الحلاقة الرجالية الراقية. تركز الكاميرا الماكرو على أدق تفاصيل ملامسة الشفرة للشعر ورسم خطوط اللحية المتناسقة في تجربة بصرية مريحة وممتعة للغاية.",
    },
    features: [
      {
        fa: "تصویربرداری ماکرو اکستریم از زاویه نزدیک تیغه و تارهای مو",
        en: "Extreme macro focus capturing razor-sharp blade lines and hair textures",
        ar: "تصوير ماكرو فائق الدقة يبرز حدة الخطوط ونعومة البشرة",
      },
      {
        fa: "نورپردازی جانبی برای برجسته‌سازی بافت مو و خطوط پیرایش",
        en: "Raking directional lighting carving out facial contours and skin clarity",
        ar: "إضاءة جانبية موجهة لتوضيح تضاريس الوجه وتفاصيل التحديد",
      },
      {
        fa: "طراحی صدای باکیفیت و برجسته (ASMR باربر و صدای ماشین اصلاح)",
        en: "Immersive auditory ASMR emphasizing satisfying clipper hums and scissors",
        ar: "هندسة صوتية ASMR واقعية لصوت ماكينة الحلاقة والمقص",
      },
      {
        fa: "تدوین یکپارچه و روان با کات‌های نرم بر حرکات دست استادکار",
        en: "Silky editing that echoes the fluid hand gestures of the master barber",
        ar: "مونتاج سلس يواكب حركة يد الحلاق باحترافية عالية",
      },
    ],
    documentation: {
      fa: "برنامه نوری ماکرو، زوایای قرارگیری دوربین نسبت به آینه و چک‌لیست تیغه‌های اصلاح.",
      en: "Macro lighting layout, camera-to-mirror angle chart, and clipper blade guide.",
      ar: "مخطط إضاءة الماكرو، زوايا الكاميرا بالنسبة للمرآة ودليل درجات شفرات الحلاقة.",
    },
    readme: {
      fa: "تنظیمات فوکوس دستی و ضبط صدای ASMR با میکروفن‌های استریو باینورال.",
      en: "Manual focus racking guidelines and binaural stereo ASMR audio capture.",
      ar: "تعليمات ضبط الفوكس اليدوي وتسجيل الصوت المجسم ASMR.",
    },
    problem: {
      fa: "انتقال کیفیت بالا و اصالت کار آرایشگر در یک صفحه کوچک گوشی موبایل بدون بزرگ‌نمایی اغراق‌آمیز.",
      en: "Communicating true craftsmanship and surgical barber precision on tiny smartphone displays without artificial exaggeration.",
      ar: "إبراز المهارة الحقيقية وفخامة الخدمة عبر شاشة الهاتف الصغيرة دون مبالغة مصطنعة.",
    },
    objective: {
      fa: "نمایش تخصص بی‌رقیب مستر باربر مهدی نظرمحمدی و اعتمادبه‌نفس مراجعین پلاک ۸.",
      en: "Establish Mehdi Nazarmandi and Pelak 8 as undisputed masters of precision grooming.",
      ar: "إظهار الاحترافية العالية لمستر باربر مهدي نظرمحمدي وبناء الثقة لدى العملاء.",
    },
    scope: {
      fa: "صفحه اینستاگرام پلاک ۸، بازاریابی محتوایی و آموزش‌های تکنیکال پیرایش.",
      en: "Pelak 8 social media, content marketing, and masterclass teasers.",
      ar: "حساب إنستغرام لبيلاك 8، التسويق بالمحتوى وإعلانات الخدمات الخاصة.",
    },
    architecture: {
      fa: "آماده‌سازی مدل و ماشین‌آلات ← ستاپ لنز ماکرو و نورپردازی کانتور ← فیلم‌برداری زنده اصلاح ← تدوین ریتمیک روان ← مستر صداگذاری ASMR.",
      en: "Barber Station Setup → Macro Lens & Contour Light Placement → Live Grooming Filming → Rhythmic Assembly → ASMR Audio Mastering.",
      ar: "تجهيز صالون الحلاقة والعدسات الماكرو ← ضبط الإضاءة المجسمة ← تصوير تفاصيل الحلاقة الحية ← المونتاج الهادئ ← مكساج أصوات الحلاقة (ASMR).",
    },
    challenges: [
      {
        fa: "عمق میدان بسیار باریک لنز ماکرو و نیاز به فوکوس فوق‌العاده دقیق حین حرکت ماشین اصلاح",
        en: "Razor-thin depth of field on macro lens requiring laser-precise manual focus tracking",
        ar: "ضيق عمق الميدان في عدسات الماكرو والحاجة لضبط الفوكس اليدوي بدقة متناهية",
      },
      {
        fa: "کنترل لرزش‌های میکروسکوپی دوربین در فواصل چند سانتی‌متری",
        en: "Eliminating microscopic micro-jitters at ultra-close camera proximity",
        ar: "تثبيت الكاميرا تماماً لمنع أي اهتزاز مجهري على مسافة سنتيمترات",
      },
    ],
    limitations: [
      {
        fa: "عدم امکان تکرار صحنه تراشیدن مو و ضرورت بی‌نقص بودن اولین برداشت",
        en: "Zero second chances on hair trimming passes; first take perfection required",
        ar: "عدم إمكانية إعادة لقطة قص الشعر مما يتطلب النجاح من المحاولة الأولى",
      },
    ],
    contributions: {
      fa: "کارگردانی، فیلم‌برداری ماکرو، نورپردازی، تدوین و ضبط و میکس صدای ASMR.",
      en: "Director, Macro Cinematographer, Lighting Specialist, Sound Recordist & Editor.",
      ar: "الإخراج، التصوير الماكرو، تصميم الإضاءة، تسجيل ومكساج الصوت والمونتاج.",
    },
    future: [
      {
        fa: "تولید مینی‌سریال‌های آموزشی تکنیک‌های اصلاح داماد",
        en: "Expanding into an educational masterclass series on groom barbering",
        ar: "إنتاج سلسلة حلقات تعليمية قصيرة عن أسرار تحديد وحلاقة اللحية",
      },
    ],
    conclusion: {
      fa: "ثبت نرخ نگه‌داشت فوق‌العاده بالا توسط کاربران اینستاگرام و افزایش رزروهای خدمات اصلاح VIP.",
      en: "Achieved remarkable user watch-time retention and an influx of executive grooming bookings.",
      ar: "حقق معدل مشاهدة واحتفاظ عالي جداً من الجمهور وزيادة الحجوزات المباشرة.",
    },
    metrics: [
      { fa: "فوکوس ماکرو ۱:۱ واقعی", en: "True 1:1 Macro Magnification", ar: "تكبير ماكرو حقيقي 1:1" },
      { fa: "صداگذاری کریستالی ASMR", en: "Crystal-clear Tactile ASMR Sound", ar: "صوت ASMR نقي ومريح" },
      { fa: "نرخ تکمیل تماشای بالای ۹۰٪", en: "Over 90% Watch Completion", ar: "نسبة مشاهدة كاملة تفوق 90%" },
    ],
    techStack: {
      gear: ["Sony Cinema Camera", "Sony FE 90mm f/2.8 Macro G OSS", "Rigid Fluid Head Tripod"],
      lighting: ["Nanlite Forza Spotlight", "Mini Flexible LED Panels"],
      software: ["DaVinci Resolve Studio"],
      audio: ["Stereo Binaural Mics", "Logic Pro X Foley Processing"],
    },
  },
  {
    slug: "masirino-healthy-catering",
    category: "content",
    video: "/img/projects/video/Mehmooni3-2.mp4",
    aspectRatio: "9:16",
    duration: "00:30",
    name: {
      fa: "مسیرینو — ریل تبلیغاتی پذیرایی و مهمانی سالم",
      en: "Masirino — Gourmet Healthy Party & Catering Reel",
      ar: "مسيرينو — ريلز الضيافة والحفلات الصحية الفاخرة",
    },
    description: {
      fa: "این ریل تبلیغاتی به سفارش مجموعه مسیرینو تهیه و تولید شد. تصویربرداری اشتهابرانگیز از آماده‌سازی و سرو غذاهای سالم، پروتئینی و متناسب با سبک زندگی شاداب.",
      en: "Produced for Masirino Lifestyle. A vibrant commercial reel celebrating nutritious culinary craft, appetizing high-protein catering platters, and joyful healthy gatherings.",
      ar: "أُنتج لصالح مجموعة مسيرينو. ريلز تسويقي منعش يستعرض تحضير أطباق الضيافة الصحية اللذيذة والغنية بالبروتين والمناسبة للحفلات الراقية.",
    },
    skills: ["Food Cinematography", "Lighting", "Vertical Reels", "Color Grading", "DaVinci Resolve"],
    extras: ["Healthy Lifestyle", "Gourmet Catering", "Appetizing Color", "Social Video"],
    image: "/img/projects/video/thumbnails/Mehmooni3-2.jpg",
    media: [
      "/img/projects/video/thumbnails/Mehmooni3-2.jpg",
      "/img/projects/video/thumbnails/Mehmooni3-2-2.jpg",
      "/img/projects/video/thumbnails/Mehmooni3-2-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "تغییر کلیشه رژیم غذایی؛ نشان دادن اینکه غذای سالم می‌تواند در عین کالری مناسب، فوق‌العاده وسوسه‌انگیز، خوش‌رنگ و مناسب مهمانی‌های لوکس باشد. سینی‌های پر شده از مرغ ریش‌ریش معطر، سبزیجات تازه خرد شده و چاشنی‌های ارگانیک مسیرینو که جشن و تندرستی را پیوند می‌دهد.",
      en: "Challenging the dull diet stigma by proving wholesome food can be irresistible, vibrant, and party-worthy. The reel features succulent pulled chicken layered with garden-fresh greens and aromatic Mediterranean spices under brilliant culinary lighting.",
      ar: "تغيير الفكرة السائدة عن الطعام الصحي الممل، وإثبات أن الوجبات المتوازنة يمكن أن تكون غاية في اللذة والجمال في الحفلات. استعراض لأطباق الدجاج المتبل مع الخضار الطازجة بأسلوب شهي.",
    },
    features: [
      {
        fa: "نمای تاپ‌داون و زاویه ماکرو از ریختن چاشنی‌ها و سبزیجات تازه",
        en: "Dynamic overhead top-down and micro-angle pours of fresh herbs and seasonings",
        ar: "لقطات علوية ومقربة لرش التوابل والخضار العطرية الطازجة",
      },
      {
        fa: "نورپردازی با دمای رنگ روز برای شادابی بافت سبزیجات و مواد غذایی",
        en: "Daylight-balanced high-CRI lighting emphasizing vegetable crispness and moisture",
        ar: "إضاءة نهارية طبيعية تبرز نضارة المكونات وألوانها الحيوية",
      },
      {
        fa: "ریتم کات متناسب با هیجان و سرزندگی مهمانی",
        en: "Uplifting, high-tempo editorial pacing evoking celebration and vitality",
        ar: "مونتاج مبهج وسريع يعكس طاقة وحيوية المناسبات الاجتماعية",
      },
      {
        fa: "اصلاح رنگ متمرکز بر شادابی رنگ سبز جعفری و طلایی مرغ",
        en: "Color grading tuned to boost vibrant greens, golden chicken, and rich dressings",
        ar: "تدريج ألوان يبرز خضار الأعشاب وتناسق ألوان المكونات",
      },
    ],
    documentation: {
      fa: "رسپی مواد، چیدمان سینی‌ها و استانداردهای حفظ طراوت سبزیجات زیر نور.",
      en: "Ingredient recipes, platter food design layout, and freshness preservation guide.",
      ar: "وصفات المكونات، تنسيق الصواني وإرشادات الحفاظ على نضارة الخضار تحت الإضاءة.",
    },
    readme: {
      fa: "پالت رنگی طبیعی و تنظیمات انکود ویدیوی عمودی با شفافیت تصویر بالا.",
      en: "Natural color science profile and high-bitrate vertical video delivery specs.",
      ar: "ملف الألوان الطبيعي وإعدادات الفيديو العمودي فائق الوضوح.",
    },
    problem: {
      fa: "تصور عامه مبنی بر بی‌طعم بودن غذاهای سالم در گردهمایی‌ها و مهمانی‌ها.",
      en: "General public perception that healthy diet foods are unappetizing at social gatherings.",
      ar: "الاعتقاد الشائع بأن الأطعمة الصحية غير مناسبة لضيافة الحفلات والمناسبات.",
    },
    objective: {
      fa: "معرفی پکیج‌های پذیرایی و رژیم‌های مسیرینو به عنوان راهکاری لوکس، سالم و لذیذ برای سبک زندگی مدرن.",
      en: "Position Masirino's catering and meal programs as the premier gourmet healthy choice.",
      ar: "تقديم حلول ووجبات مسيرينو كخيار راقٍ وصحي ولذيذ يليق بالمناسبات العصرية.",
    },
    scope: {
      fa: "کمپین سوشال مدیای مسیرینو، بازاریابی رویدادها و وب‌سایت سفارش آنلاین.",
      en: "Masirino social media campaigns, event marketing, and digital meal ordering platforms.",
      ar: "حملات مسيرينو على شبكات التواصل، تسويق الفعاليات وموقع الطلبات.",
    },
    architecture: {
      fa: "استایلینگ مواد اولیه ← نورپردازی طبیعی کترینگ ← فیلم‌برداری عمودی اسلوموشن ← تدوین شاداب ریتمیک ← اصلاح رنگ غذا ← انتشار.",
      en: "Food Styling Setup → Natural Daylight Rigging → High-frame Vertical Shoots → Joyful Rhythmic Cut → Food LUT Grading → Launch.",
      ar: "تنسيق المكونات وتزيين الطبق ← ضبط الإضاءة الطبيعية ← التصوير العمودي بالحركة البطيئة ← المونتاج الإيقاعي ← تلوين الأطعمة.",
    },
    challenges: [
      {
        fa: "جلوگیری از پژمرده شدن سبزیجات تازه زیر حرارت پروژکتورها",
        en: "Preventing delicate fresh herbs from wilting under hot lights",
        ar: "الحفاظ على نضارة الخضروات الورقية تحت حرارة أجهزة الإضاءة",
      },
      {
        fa: "تنظیم فوکوس متحرک در نماهای ریزش ادویه و سبزیجات",
        en: "Tracking dynamic focus on moving seasoning powders and garnishes",
        ar: "متابعة الفوكس بدقة أثناء نثر التوابل والخضار المتساقطة",
      },
    ],
    limitations: [
      {
        fa: "محدودیت زمانی برای عکاسی و فیلم‌برداری همزمان قبل از شروع مهمانی",
        en: "Tight schedule balancing photography and video filming before party setup",
        ar: "ضيق الوقت المتاح للتصوير قبل موعد بدء المناسبة",
      },
    ],
    contributions: {
      fa: "ایده‌پردازی، کارگردانی هنری، فیلم‌برداری عمودی، نورپردازی و تدوین کامل اثر.",
      en: "Concept Designer, Art Director, Vertical Cinematographer & Lead Editor.",
      ar: "صياغة الفكرة، الإخراج الفني، التصوير العمودي، الإضاءة والمونتاج.",
    },
    future: [
      {
        fa: "توسعه سری ریلز معرفی منوی هفتگی ورزشکاران و جشن‌های خانگی",
        en: "Creating weekly athlete meal prep and holiday celebration reels",
        ar: "تطوير سلسلة ريلز دورية للوجبات الرياضية الأسبوعية وضيافة الأعياد",
      },
    ],
    conclusion: {
      fa: "افزایش محسوس استعلام‌های پکیج مهمانی مسیرینو و بازخورد پرشور کاربران در شبکه‌های اجتماعی.",
      en: "Drove immediate inbound inquiries for Masirino party packages with enthusiastic viral feedback.",
      ar: "أدى إلى زيادة الطلب على باقات الضيافة الصحية من مسيرينو وتفاعل كبير من المتابعين.",
    },
    metrics: [
      { fa: "نرخ تعامل بالا در ریلز اینستاگرام", en: "Top Instagram Reel Engagement", ar: "تفاعل قياسي على إنستغرام" },
      { fa: "کیفیت بصری 4K با رنگ‌آمیزی شاداب", en: "4K Ultra-crisp Color-popped Master", ar: "جودة 4K بألوان نضرة فائقة الوضوح" },
      { fa: "معرفی موفق آیتم‌های کترینگ سلامت", en: "Successful Healthy Catering Positioning", ar: "نجاح باهر في تسويق الضيافة الصحية" },
    ],
    techStack: {
      gear: ["Sony Alpha Body", "Macro Prime Lens", "Gimbal Stabilizer"],
      lighting: ["Aputure Daylight LED", "Soft Diffuser Dome", "White Reflectors"],
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
      audio: ["Foley Sound Library", "Upbeat Acoustic Soundtrack"],
    },
  },
  {
    slug: "masirino-egg-diet-lifestyle",
    category: "content",
    video: "/img/projects/video/M-Egg.mp4",
    aspectRatio: "9:16",
    duration: "00:33",
    name: {
      fa: "مسیرینو — ریل داستانی و طنز چالش رژیم ورزشی",
      en: "Masirino — Fitness Lifestyle & Egg Diet Comedy Reel",
      ar: "مسيرينو — ريلز كوميدي توعوي عن تحديات روتين التغذية والرياضة",
    },
    description: {
      fa: "این ریل تبلیغاتی به سفارش مجموعه مسیرینو تهیه و تولید شد. روایتی طنز و سرگرم‌کننده از یکنواختی مصرف تخم‌مرغ در رژیم‌های تناسب اندام و راهکار مسیرینو برای تنوع غذایی.",
      en: "Produced for Masirino Nutrition. A hilarious and relatable lifestyle reel dramatizing the universal struggle of eating boiled eggs daily for fitness, and how Masirino brings joy back to meal plans.",
      ar: "أُنتج لصالح مجموعة مسيرينو. ريلز ترفيهي ذكي يجسد المعاناة اليومية للرياضيين مع تكرار تناول البيض المسلوق، ويقدم مسيرينو كحل مثالي للتنويع الغذائي.",
    },
    skills: ["Comedy Direction", "Narrative Cinematography", "Vertical Video", "Acting Direction", "DaVinci Resolve"],
    extras: ["Lifestyle Reel", "Relatable Comedy", "Fitness Nutrition", "Viral Hook"],
    image: "/img/projects/video/thumbnails/M-Egg.jpg",
    media: [
      "/img/projects/video/thumbnails/M-Egg.jpg",
      "/img/projects/video/thumbnails/M-Egg-2.jpg",
      "/img/projects/video/thumbnails/M-Egg-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "ورزشکاری با کلاه نایکی نارنجی در آشپزخانه، در آستانه خوردن یک وعده تکراری دیگر از تخم‌مرغ آب‌پز! استیصال، شوخی با باورهای افراطی رژیم و ورود راهکار هوشمندانه و خوشمزه مسیرینو که رژیم را از یک شکنجه به یک لذت روزمره تبدیل می‌کند.",
      en: "An energetic fitness girl in an orange Nike cap staring at yet another boiled egg in existential dread! A witty, relatable portrayal of fitness burnout solved by Masirino's diverse, delicious, high-nutrition meal alternatives.",
      ar: "رياضية ترتدي قبعة نايكي البرتقالية تقف في المطبخ أمام وجبة البيض المسلوق المكررة بحيرة ويأس طريف! تجسيد كوميدي واقعي لملل الحميات وحلول مسيرينو المبتكرة والشهية.",
    },
    features: [
      {
        fa: "سناریوی طنز با همزادپنداری فوق‌العاده بالا برای ورزشکاران",
        en: "Humorous relatable concept with strong resonance across fitness communities",
        ar: "سيناريو كوميدي قريب من واقع الرياضيين ومناسب للانتشار الواسع",
      },
      {
        fa: "کارگردانی بازیگر برای انتقال میمیک چهره کمدی و میم‌های اینترنتی",
        en: "Directing comedic facial expressions primed for meme culture and shares",
        ar: "توجيه تعابير الوجه الكوميدية للممثلة لتوليد ميمز تفاعلية",
      },
      {
        fa: "نورپردازی گرم خانگی با کادربندی‌های سریع و شوخ‌طبعانه",
        en: "Warm domestic kitchen lighting with playful punch-in camera pans",
        ar: "إضاءة مطبخ دافئة مع زوايا كاميرا سريعة ومرحة",
      },
      {
        fa: "صداگذاری خنده‌دار و تلفیق افکت‌های صوتی کارتونی و وایرال",
        en: "Whimsical sound design pairing comedic timing with viral sound trends",
        ar: "مؤثرات صوتية هزلية تعزز الفكاهة وتواكب ترندات وسائل التواصل",
      },
    ],
    documentation: {
      fa: "استوری‌بورد کمیک، راهنمای میمیک بازیگر و تایم‌لاین کات‌های ریتمیک.",
      en: "Comic storyboard beats, actor facial expression chart, and snappy cut timeline.",
      ar: "قصة مصورة كوميدية، دليل تعابير الممثلة ومخطط المونتاج السريع.",
    },
    readme: {
      fa: "پریست‌های کالر گریدینگ شاداب و انکودینگ ریلز اینستاگرام.",
      en: "Vibrant lifestyle color presets and Instagram Reels export parameters.",
      ar: "إعدادات الألوان الحيوية وتصدير الفيديو لمنصات السوشال ميديا.",
    },
    problem: {
      fa: "خستگی و ریزش بالای دنبال‌کنندگان برنامه‌های ورزشی به دلیل یکنواختی غذاها.",
      en: "High drop-out rates in fitness regimens due to flavor fatigue and dietary monotony.",
      ar: "استسلام الرياضيين السريع وشعورهم بالإحباط بسبب رتابة الوجبات الغذائية.",
    },
    objective: {
      fa: "ایجاد ارتباط عاطفی و خنده‌دار با مخاطبان و معرفی پلن‌های متنوع غذایی مسیرینو.",
      en: "Build humorous brand affinity and drive sign-ups for Masirino's varied nutrition plans.",
      ar: "بناء رابط ودي مرح مع الجمهور وتعريفهم بخطط وجبات مسيرينو المتنوعة.",
    },
    scope: {
      fa: "کمپین وایرال اینستاگرام، تیک‌تاک و جامعه ورزشکاران مسیرینو.",
      en: "Instagram Reels, TikTok fitness communities, and client onboarding channels.",
      ar: "ريلز إنستغرام، تيك توك، ومجتمعات الرياضة ونمط الحياة الصحي.",
    },
    architecture: {
      fa: "نگارش سناریوی کمدی ← پیش‌تولید و انتخاب اکسسوری و لباس ← تصویربرداری لوکیشن آشپزخانه ← تدوین ریتمیک کمیک ← صداگذاری و افکت ← انتشار.",
      en: "Comedy Scriptwriting → Wardrobe & Prop Prep → Kitchen Location Filming → Comic Punch Editing → Viral Audio Design → Release.",
      ar: "كتابة السيناريو الكوميدي ← اختيار الإكسسوارات ← التصوير في المطبخ ← المونتاج الإيقاعي المرح ← هندسة المؤثرات الصوتية.",
    },
    challenges: [
      {
        fa: "حفظ ریتم طنز و زمان‌بندی دقیق ری‌اکشن‌ها در محدودیت ۳۰ ثانیه",
        en: "Nailing comedic timing and beats within a rigid 30-second window",
        ar: "ضبط التوقيت الكوميدي بدقة داخل نافذة زمنية لا تتجاوز 30 ثانية",
      },
      {
        fa: "ایجاد تعادل میان جنبه کمدی ویدیو و پیام جدی سلامت برند",
        en: "Balancing genuine humor without undermining brand medical credibility",
        ar: "الموازنة بين الطرافة الكوميدية ورسالة العلامة التجارية الصحية",
      },
    ],
    limitations: [
      {
        fa: "تعداد برداشت‌های متعدد برای رسیدن به خنده‌دارترین میمیک صورت",
        en: "Multiple takes required to capture the funniest facial reaction beats",
        ar: "تكرار المشاهد عدة مرات للوصول لأفضل تعبير وجه مضحك وعفوي",
      },
    ],
    contributions: {
      fa: "سناریونویسی، کارگردانی کمدی، تصویربرداری عمودی، هدایت بازیگر و تدوین.",
      en: "Screenwriter, Director, Cinematographer, Actor Coach & Lead Editor.",
      ar: "كتابة النص، الإخراج، التصوير العمودي، تدريب الممثلة والمونتاج.",
    },
    future: [
      {
        fa: "ساخت مینی‌سریال کمدی 'چالش‌های ورزشکار بودن' با کاراکترهای ثابت",
        en: "Expanding into a recurring 'Athlete Struggles' comedy mini-series",
        ar: "إنتاج سلسلة حلقات كوميدية قصيرة تدور حول طرائف حياة الرياضيين",
      },
    ],
    conclusion: {
      fa: "یکی از پربازدیدترین ریلزهای مسیرینو با نرخ اشتراک‌گذاری بالا میان ورزشکاران.",
      en: "Generated explosive share rates across gym communities with viral comment interaction.",
      ar: "حقق انتشاراً واسعاً ومشاركات هائلة بين رواد النوادي الرياضية ومحبي اللياقة.",
    },
    metrics: [
      { fa: "بالاترین نرخ اشتراک‌گذاری (Share Rate)", en: "Highest Organic Share Rate on Account", ar: "أعلى معدل مشاركة وإعادة نشر" },
      { fa: "رزولوشن 4K عمودی", en: "4K Crisp Vertical Master", ar: "دقة 4K عمودية فائقة النقاء" },
      { fa: "۱۰۰٪ سناریوی ارژینال و طنز داستانی", en: "100% Original Narrative Comedy Script", ar: "سيناريو كوميدي أصلي 100%" },
    ],
    techStack: {
      gear: ["Sony Alpha Camera", "Prime 35mm f/1.4 Lens", "Wireless Monitoring"],
      lighting: ["Key Light with Softbox", "Backlight Rim Hair LED"],
      software: ["DaVinci Resolve Studio", "CapCut Desktop"],
      audio: ["Rode Wireless PRO", "Sound Effects Mixing"],
    },
  },
  {
    slug: "masirino-nutrition-interview",
    category: "content",
    video: "/img/projects/video/M Mosahebeei1_1.mp4",
    aspectRatio: "9:16",
    duration: "01:28",
    name: {
      fa: "مسیرینو — ریل مصاحبه تخصصی تغذیه و سلامت",
      en: "Masirino — Expert Nutritionist Studio Interview Series",
      ar: "مسيرينو — لقاء استوديو تخصصي مع خبيرة التغذية ونمط الحياة",
    },
    description: {
      fa: "این ریل تبلیغاتی به سفارش مجموعه مسیرینو تهیه و تولید شد. مصاحبه استودیویی تخصصی با کارشناس تغذیه و سلامت (الی مهردادیان) با نورپردازی سینمایی و بیان رازهای کاهش وزن پایدار.",
      en: "Produced for Masirino Lifestyle. An authoritative and polished studio interview with nutritionist Eli Mehrdadian, dispelling stubborn diet myths under cinematic Rembrandt studio lighting.",
      ar: "تم إنتاجه لصالح مجموعة مسيرينو. حوار استوديو متميز بإضاءة سينمائية متقنة مع خبيرة التغذية إيلي مهرداديان لتصحيح المفاهيم الخاطئة حول الحميات وخسارة الوزن.",
    },
    skills: ["Studio Lighting", "Interview Cinematography", "Audio Mastering", "DaVinci Resolve", "Vertical Video"],
    extras: ["Expert Talk", "Rembrandt Light", "Diet Education", "Subtitles Design"],
    image: "/img/projects/video/thumbnails/M_Mosahebeei1_1.jpg",
    media: [
      "/img/projects/video/thumbnails/M_Mosahebeei1_1.jpg",
      "/img/projects/video/thumbnails/M_Mosahebeei1_1-2.jpg",
      "/img/projects/video/thumbnails/M_Mosahebeei1_1-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "تولید محتوای آموزشی آگاهی‌بخش با تکیه بر پرستیژ و علم روز. الی مهردادیان در فضایی آرام و شیک با کت رسمی، اشتباه بزرگ 'کم خوردن بی‌رویه' را موشکافی می‌کند و با عبارت کلیدی 'ولی کم بخور'، بیننده را به سمت رویکرد اصولی و علمی مسیرینو هدایت می‌نماید.",
      en: "Empowering viewers with scientific clarity wrapped in executive studio elegance. Expert Eli Mehrdadian breaks down the psychological fallacy of starvation diets, delivering the pivotal takeaway with warmth, authority, and cinematic poise.",
      ar: "تقديم محتوى توعوي موثوق في إطار استوديو أنيق وراقٍ. تستعرض خبيرة التغذية خطورة تجويع النفس غير العلمي وتوجه المشاهدين بأسلوب هادئ ومقنع نحو الحلول الغذائية السليمة.",
    },
    features: [
      {
        fa: "نورپردازی کلاسیک رامبراند با پس‌زمینه تیره و کنتراست سینمایی",
        en: "Moody Rembrandt studio lighting with dark textured background separation",
        ar: "إضاءة رامبرانت الكلاسيكية مع خلفية داكنة تبرز ملامح المتحدثة",
      },
      {
        fa: "وضوح خیره‌کننده صدای کارشناس با میکروفن‌های استودیویی مخفی",
        en: "Bespoke studio vocal mastering with transparent lapel audio capture",
        ar: "نقاء صوتي استثنائي عبر ميكروفونات استوديو احترافية مخفية",
      },
      {
        fa: "طراحی تایتل و زیرنویس دقیق هماهنگ با لحن کلمات",
        en: "Kinetic typographic subtitle styling synchronized with speech cadence",
        ar: "نصوص ومؤثرات كتابية متزامنة بدقة مع نبرة الحديث",
      },
      {
        fa: "کالر گریدینگ شیک با ته‌مایه طلایی و کنترل عمق پوست",
        en: "Refined color grading enhancing warm skin tones and executive contrast",
        ar: "تدريج ألوان فاخر يبرز درجات البشرة الطبيعية بوقار",
      },
    ],
    documentation: {
      fa: "طرح سوالات مصاحبه، دیاگرام نورپردازی پرتره استودیو و استانداردهای مسترینگ صدا.",
      en: "Interview topic outline, studio portrait lighting diagram, and vocal mastering standards.",
      ar: "محاور الحوار، مخطط إضاءة البورتريه ومعايير معالجة ومكساج الصوت.",
    },
    readme: {
      fa: "پروفایل رنگی پوست و دستورالعمل خروجی برای اینستاگرام و کانال‌های سلامت.",
      en: "Skin tone color science profile and export settings for healthcare video channels.",
      ar: "ملف ضبط ألوان البشرة وإعدادات التصدير لقنوات الصحة والتغذية.",
    },
    problem: {
      fa: "گستردگی اطلاعات ضدونقیض در فضای مجازی پیرامون رژیم‌های لاغری و سردرگمی مخاطبان.",
      en: "Proliferation of toxic, unscientific diet advice confusing health-conscious audiences.",
      ar: "انتشار النصائح الغذائية العشوائية والمضللة على الإنترنت وحيرة الجمهور.",
    },
    objective: {
      fa: "ایجاد مرجعیت علمی و اعتمادسازی عمیق برای برند مسیرینو از طریق چهره‌های متخصص.",
      en: "Solidify Masirino as the go-to scientific authority in sustainable wellness.",
      ar: "ترسيخ مسيرينو كمرجع علمي موثوق للتغذية السليمة عبر آراء الخبراء.",
    },
    scope: {
      fa: "ریلز اینستاگرام، پادکست‌های ویدیویی، یوتیوب شورتس و کانال‌های سلامت.",
      en: "Instagram Reels, YouTube Shorts, wellness podcasts, and client educational portals.",
      ar: "ريلز إنستغرام، يوتيوب شورتس، وبودكاست الصحة والتغذية.",
    },
    architecture: {
      fa: "طراحی پرسش و پاسخ ← چیدمان نور استودیو ← مصاحبه چند زاویه‌ای ← تدوین برشی همراه با زیرنویس هوشمند ← مسترینگ صدا ← انتشار.",
      en: "Curated Q&A Structuring → Dark Studio Light Rigging → Multi-take Interviewing → Snappy Editorial Cut with Subtitles → Vocal Mastering.",
      ar: "صياغة المحاور والأسئلة ← هندسة إضاءة الاستوديو الداكنة ← تصوير اللقاء ← المونتاج وإضافة النصوص الحركية ← مكساج الصوت.",
    },
    challenges: [
      {
        fa: "کنترل دقیق نور پرتره با روسری براق و پس‌زمینه تیره بدون شکستگی نور",
        en: "Managing reflection on satin headscarf while keeping background cleanly muted",
        ar: "ضبط الانعكاسات على الوشاح الحريري مع الحفاظ على عمق الخلفية",
      },
      {
        fa: "حذف تمامی نویزهای فرکانسی محیط و شفاف‌سازی صدای دیالوگ",
        en: "Eliminating room acoustic reverberation for crisp broadcast-quality vocal isolation",
        ar: "عزل صدى الغرفة الصوتي لضمان نقاء الصوت بنقاء إذاعي استوديو",
      },
    ],
    limitations: [
      {
        fa: "فشردگی زمان کارشناس برای ضبط چند اپیزود متوالی در یک جلسه",
        en: "Tight schedule capturing multiple comprehensive educational episodes in a single day",
        ar: "ضيق وقت الخبيرة لتسجيل عدة حلقات متتالية في جلسة تصوير واحدة",
      },
    ],
    contributions: {
      fa: "کارگردانی مصاحبه، نورپردازی تخصصی پرتره، فیلم‌برداری عمودی، تدوین و صداگذاری.",
      en: "Interviewer/Director, Portrait Lighting DP, Audio Engineer & Lead Editor.",
      ar: "إدارة الحوار، تصميم إضاءة البورتريه، التصوير العمودي، هندسة الصوت والمونتاج.",
    },
    future: [
      {
        fa: "توسعه برنامه گفتگومحور هفتگی پرسش و پاسخ کاربران با پزشکان تغذیه",
        en: "Launching a weekly audience Q&A talk show with medical nutritionists",
        ar: "إطلاق برنامج أسبوعي للإجابة على تساؤلات المتابعين مع أطباء التغذية",
      },
    ],
    conclusion: {
      fa: "جلب اعتماد هزاران دنبال‌کننده و ثبت بالاترین نرخ سیو (Save) و ریپلی در پیج مسیرینو.",
      en: "Set record high 'Save' and 'Share' metrics, driving immense consultation conversion.",
      ar: "سجل أعلى نسبة حفظ للمنشور ومشاركة بين المتابعين وأسهم في مضاعفة الاستشارات.",
    },
    metrics: [
      { fa: "بالاترین نرخ ذخیره ویدیو (Save Rate)", en: "Top Saved Video on Brand Channel", ar: "أعلى معدل حفظ للمنشور" },
      { fa: "نورپردازی پرتره استودیویی استاندارد", en: "Studio Rembrandt Portrait Rig", ar: "إضاءة بورتريه رامبرانت السينمائية" },
      { fa: "صدابرداری شفاف با وضوح ۲۴ بیت", en: "24-bit Broadcast Vocal Fidelity", ar: "نقاء صوتي إذاعي 24-bit" },
    ],
    techStack: {
      gear: ["Sony Alpha Camera", "Prime 50mm f/1.2 GM Lens", "Pro Prompter"],
      lighting: ["Aputure 300x Key", "Mini Strip Lights with Grids", "C-Stands"],
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
      audio: ["Sennheiser MKH Lavs", "iZotope RX Audio Repair", "Logic Pro"],
    },
  },
  {
    slug: "ebrahimi-watch-mothers-day",
    category: "content",
    video: "/img/projects/video/ebrahimi.mp4",
    aspectRatio: "16:9",
    duration: "00:50",
    name: {
      fa: "ساعت ابراهیمی — تیزر روز مادر ساعت ابراهیمی",
      en: "Ebrahimi Watch Gallery — Mother's Day Commercial Teaser",
      ar: "ساعات إبراهيمي — إعلان تشويقي بمناسبة يوم الأم",
    },
    description: {
      fa: "تیزر داستانی سینمایی به سفارش گالری ساعت ابراهیمی به مناسبت روز مادر؛ گفتگوی صمیمانه دو دوست پیرامون انتخاب هدیه‌ای ماندگار و ارزشمند برای مادر در فضایی گرم و دلنشین.",
      en: "A warm, story-driven commercial produced for Ebrahimi Watch Gallery on Mother's Day; exploring the search for a timeless, meaningful gift through an authentic café dialogue.",
      ar: "إعلان درامي سينمائي تم إنتاجه لصالح ساعات إبراهيمي بمناسبة يوم الأم؛ يوثق حديثاً ودياً في مقهى حول اختيار هدية قيمة وخالدة للأم.",
    },
    skills: ["Narrative Directing", "Cinematography", "DaVinci Resolve", "Sound Mixing", "Lighting"],
    extras: ["Café Ambiance", "Natural Acting", "Mother's Day Campaign", "Color Grading"],
    image: "/img/projects/video/thumbnails/ebrahimi.jpg",
    media: [
      "/img/projects/video/thumbnails/ebrahimi.jpg",
      "/img/projects/video/thumbnails/ebrahimi-2.jpg",
      "/img/projects/video/thumbnails/ebrahimi-3.jpg",
    ],
    youtube: "https://www.youtube.com/@tahanaghdi",
    story: {
      fa: "روایت صمیمی دو خانم در یک کافه زیبا و دنج با لوسترهای سنتی و نور ملایم؛ گفتگو درباره دغدغه انتخاب بهترین هدیه برای روز مادر و رسیدن به ارزش ماندگار و اصالت یک ساعت مچی از گالری ساعت ابراهیمی به عنوان نمادی از زمان و عشق پایدار.",
      en: "An intimate café conversation between two friends over coffee. They discuss finding the most memorable gift for Mother's Day, arriving at an elegant timepiece from Ebrahimi Watch Gallery as a symbol of cherished time and love.",
      ar: "حوار دافئ بين صديقتين في مقهى هادئ حول حيرة اختيار أفضل هدية بمناسبة يوم الأم، والوصول إلى فكرة إهداء ساعة فاخرة وأصيلة من ساعات إبراهيمي كرمز للوقت والمحبة الخالدة.",
    },
    features: [
      {
        fa: "فضاسازی گرم سینمایی در لوکیشن کافه با بوکه و عمق میدان چشم‌نواز",
        en: "Warm cinematic atmosphere with lush shallow depth of field and café bokeh",
        ar: "أجواء سينمائية دافئة مع عزل بصري أنيق وتدرجات ألوان المقهى الجذابة",
      },
      {
        fa: "بازیگری باورپذیر و نچرال بدون اغراق‌های تبلیغاتی",
        en: "Natural, unforced acting performances avoiding commercial clichés",
        ar: "أداء تمثيلي طبيعي وعفوي بعيد عن المبالغة الإعلانية",
      },
      {
        fa: "تدوین روان همراه با کات‌های نرم بر چهره بازیگران و جزییات صحنه",
        en: "Gentle editorial cadence focusing on micro-expressions and authentic connection",
        ar: "مونتاج هادئ يركز على انفعالات وتعبيرات الوجه الصادقة",
      },
      {
        fa: "کالر گریدینگ متناسب با اتمسفر کافه با ته‌مایه کهربایی و گرم",
        en: "Warm amber and mocha color grading accentuating comfort and sophistication",
        ar: "تدريج ألوان دافئ يعزز الإحساس بالراحة والأناقة",
      },
    ],
    documentation: {
      fa: "فیلم‌نامه دیالوگ‌های کافه، دکوپاژ صحنه و طراحی میزانسن دونفره کمپین روز مادر.",
      en: "Café screenplay dialogue, scene decoupage, and Mother's Day campaign blocking diagrams.",
      ar: "سيناريو حوار المقهى، التخطيط الإخراجي وتوزيع زوايا الكاميرا لحملة يوم الأم.",
    },
    readme: {
      fa: "تنظیمات دمای نوری کهربایی، شبیه‌سازی فیلم نگاتیو و مسترینگ صدای دیالوگ‌ها.",
      en: "Amber color temperature calibration, film emulation, and voice mastering.",
      ar: "معايرة حرارة الإضاءة الكهرمانية ومحاكاة ألوان السينما ومكساج الصوت.",
    },
    problem: {
      fa: "کلیشه‌ای شدن تبلیغات مناسبتی روز مادر و نیاز به داستانی صمیمانه و متمایز برای برند ساعت ابراهیمی.",
      en: "Repetitive clichés in Mother's Day marketing and the need for an authentic, emotional story for Ebrahimi Watch Gallery.",
      ar: "تكرار الأفكار النمطية في إعلانات يوم الأم والحاجة إلى قصة عاطفية مميزة لماركة ساعات إبراهيمي.",
    },
    objective: {
      fa: "خلق ارتباط احساسی با مخاطبان و معرفی ساعت مچی اصیل به عنوان هدیه‌ای ماندگار و شایسته برای روز مادر.",
      en: "Build emotional resonance with the audience, establishing luxury watches as the premier timeless Mother's Day gift.",
      ar: "بناء تواصل عاطفي مع الجمهور وترسيخ الساعات الفاخرة كأفضل هدية خالدة بمناسبة يوم الأم.",
    },
    scope: {
      fa: "کمپین ویدیویی شبکه‌های اجتماعی، اینستاگرام، وب‌سایت گالری و نمایشگرهای فروشگاهی ساعت ابراهیمی.",
      en: "Social media video campaigns, Instagram, official gallery channels, and in-store displays.",
      ar: "حملات الفيديو الرقمية، إنستغرام، موقع الغاليري وشاشات العرض داخل فروع ساعات إبراهيمي.",
    },
    architecture: {
      fa: "نگارش سناریوی مکالمه کافه ← انتخاب لوکیشن و بازیگران ← نورپردازی ملایم با رفلکتور ← تصویربرداری دو دوربینه ← تدوین دیالوگ‌محور ← اصلاح رنگ کهربایی.",
      en: "Dialogue Scriptwriting → Location & Talent Scouting → Ambient Soft Lighting → Multi-angle Cinematography → Dialogue Assembly → Amber Color Grading.",
      ar: "كتابة سيناريو الحوار ← اختيار المقهى والممثلات ← الإضاءة الدافئة الهادئة ← التصوير بزوايا متعددة ← المونتاج ← تدريج الألوان الكهرماني.",
    },
    challenges: [
      {
        fa: "مدیریت نویز محیطی کافه و کنترل همزمانی نور طبیعی پنجره‌ها با لوسترها",
        en: "Balancing background café acoustics and shifting daylight against warm chandeliers",
        ar: "التحكم بالضوضاء المحيطة بالمقهى وموازنة الضوء الطبيعي مع مصابيح الديكور",
      },
      {
        fa: "رسیدن به اجرایی کاملاً طبیعی از بازیگران شبیه به یک گفتگوی مستند و صمیمی",
        en: "Guiding actors to deliver a candid conversational tone that feels documentary-level real",
        ar: "توجيه الممثلات لأداء عفوي يشبه الحديث التلقائي دون تكلف",
      },
    ],
    limitations: [
      {
        fa: "ساعات محدود تصویربرداری خارج از زمان پذیرش عمومی کافه",
        en: "Restricted filming hours outside regular café public business times",
        ar: "ساعات تصوير محددة قبل فتح المقهى للزبائن",
      },
    ],
    contributions: {
      fa: "فیلم‌نامه‌نویسی، کارگردانی داستانی، فیلم‌برداری، نورپردازی، تدوین و کالر گریدینگ.",
      en: "Screenplay Author, Director, Cinematographer, Editor & Colorist.",
      ar: "كتابة السيناريو، الإخراج، إدارة التصوير، هندسة الإضاءة والمونتاج.",
    },
    future: [
      {
        fa: "تولید تیزرهای فصلی و کمپین‌های اختصاصی برای کالکشن‌های جدید ساعت ابراهیمی",
        en: "Developing seasonal campaign teasers for new flagship collections at Ebrahimi Watch Gallery",
        ar: "إنتاج إعلانات موسمية وحملات مخصصة للمجموعات الجديدة في ساعات إبراهيمي",
      },
    ],
    conclusion: {
      fa: "بازخورد فوق‌العاده مخاطبان در کمپین روز مادر و رشد چشمگیر تعاملات و مراجعات حضوری به گالری ساعت ابراهیمی.",
      en: "Outstanding audience reception during the Mother's Day campaign with a notable surge in gallery visits and inquiries.",
      ar: "أصداء إيجابية واسعة خلال حملة يوم الأم مع ارتفاع ملحوظ في التفاعل وزيارات فروع ساعات إبراهيمي.",
    },
    metrics: [
      { fa: "فرمت سینمایی ۱۶:۹ با فریم ریت ۲۴", en: "Cinematic 16:9 at 24fps Standard", ar: "تنسيق سينمائي 16:9 بمعدل 24 إطاراً" },
      { fa: "کالر گریدینگ گرم کهربایی", en: "Warm Amber Film Grade", ar: "تدريج ألوان كهرماني دافئ" },
      { fa: "صداگذاری استودیویی شفاف دیالوگ‌ها", en: "Studio-grade Dialogue Clarity", ar: "وضوح استوديو لنقاء الحوار" },
    ],
    techStack: {
      gear: ["Cinema Camera", "Cine Primes 35mm & 50mm", "Matte Box & Filters"],
      lighting: ["Aputure Daylight & Tungsten Mix", "China Ball Lantern Diffuser"],
      software: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
      audio: ["Wireless Dual Lavs", "Acoustic Audio Cleanup"],
    },
  },
];

// ─── LOCALIZATION RESOLVER HELPERS ───────────────────────────────────────────
export const resolveField = (val, lang = "en") => {
  if (!val) return val;
  if (typeof val === "object" && !Array.isArray(val)) {
    return val[lang] || val["en"] || Object.values(val)[0] || "";
  }
  return val;
};

export const resolveArray = (arr, lang = "en") => {
  if (!Array.isArray(arr)) return arr;
  return arr.map((item) => resolveField(item, lang));
};

export const getLocalizedProject = (project, lang = "en") => {
  if (!project) return project;
  return {
    ...project,
    name: resolveField(project.name, lang),
    description: resolveField(project.description, lang),
    story: resolveField(project.story, lang),
    problem: resolveField(project.problem, lang),
    objective: resolveField(project.objective, lang),
    scope: resolveField(project.scope, lang),
    architecture: resolveField(project.architecture, lang),
    contributions: resolveField(project.contributions, lang),
    conclusion: resolveField(project.conclusion, lang),
    documentation: resolveField(project.documentation, lang),
    readme: resolveField(project.readme, lang),
    features: resolveArray(project.features, lang),
    challenges: resolveArray(project.challenges, lang),
    limitations: resolveArray(project.limitations, lang),
    future: resolveArray(project.future, lang),
    metrics: resolveArray(project.metrics, lang),
  };
};

// ─── QUERY HELPERS ───────────────────────────────────────────────────────────
export const getProjectBySlug = (slug, lang = "en") => {
  const all = [...projects, ...contentProjects];
  const found = all.find((p) => p.slug === slug);
  return found ? getLocalizedProject(found, lang) : null;
};

export const getProjectSlugs = () => {
  const all = [...projects, ...contentProjects];
  return all.map((p) => ({ slug: p.slug }));
};

export const getAdjacentProjects = (slug, lang = "en") => {
  const all = [...projects, ...contentProjects];
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? all[idx - 1] : all[all.length - 1];
  const next = idx < all.length - 1 ? all[idx + 1] : all[0];
  return {
    prev: prev ? getLocalizedProject(prev, lang) : null,
    next: next ? getLocalizedProject(next, lang) : null,
  };
};

export default projects;