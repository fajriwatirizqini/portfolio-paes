import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Instagram, Layers, BarChart2 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.webp";
import deaBakeryAppMockup from "@/assets/Home V3.png";
import deaBakeryPoinScreen from "@/assets/Point - Hadiah.png";
import deaBakeryAkunScreen from "@/assets/Akun.png";
import staffAppMockup from "@/assets/project-staff-app-mockup.webp";
import staffAppHomeScreen from "@/assets/[V5] Presensi Online - Home Page.png";
import websiteDeaBakeryMockup from "@/assets/project-website-dea-bakery-mockup.webp";
import websiteHomeScreenshot from "@/assets/Home.png";
import hrisDaftarPresensi from "@/assets/Daftar Presensi.png";


type Tab = "about" | "resume" | "work";

// Stylized app-store-style cover collage for Project 01 — tilted phone frames + floating badges
const DeaBakeryHeroThumbnail = () => (
  <div className="relative w-44 h-32 md:w-52 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border shadow-sm">
    {/* Sky gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-sky-500 via-sky-300 to-orange-100" />
    <div className="absolute bottom-0 left-[-10%] w-[60%] h-8 bg-white/60 rounded-full blur-md" />
    <div className="absolute bottom-[-4px] right-[-5%] w-[55%] h-9 bg-white/50 rounded-full blur-md" />

    {/* Headline */}
    <p className="absolute top-2 left-2.5 z-20 font-display font-bold text-white text-[11px] md:text-xs leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] max-w-[70%]">
      Reputasi.<br />Loyalty. Satu App.
    </p>

    {/* Tilted phone frames */}
    <div className="absolute inset-0 flex items-end justify-center gap-[-14px] pb-[-6px]">
      {/* Left phone — Poin */}
      <div className="relative w-11 h-[76px] md:w-12 md:h-[84px] rounded-[8px] border border-white/70 bg-black overflow-hidden shadow-lg rotate-[-12deg] translate-y-2 translate-x-2 z-10">
        <img src={deaBakeryPoinScreen} alt="" className="w-full h-full object-cover object-top" />
      </div>
      {/* Center phone — Home */}
      <div className="relative w-12 h-[88px] md:w-14 md:h-[98px] rounded-[9px] border-[1.5px] border-white/90 bg-black overflow-hidden shadow-xl z-20 -mx-2">
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-3 h-[3px] rounded-full bg-black z-10" />
        <img src={deaBakeryAppMockup} alt="" className="w-full h-full object-cover object-top" />
      </div>
      {/* Right phone — Akun */}
      <div className="relative w-11 h-[76px] md:w-12 md:h-[84px] rounded-[8px] border border-white/70 bg-black overflow-hidden shadow-lg rotate-[12deg] translate-y-2 -translate-x-2 z-10">
        <img src={deaBakeryAkunScreen} alt="" className="w-full h-full object-cover object-top" />
      </div>
    </div>

    {/* Floating badges */}
    <div className="absolute top-2 right-2 z-20 bg-white/95 rounded-full px-2 py-0.5 shadow-sm flex items-center gap-1">
      <span className="text-[9px]">🏆</span>
      <span className="text-[8px] font-display font-bold text-foreground">135 Poin</span>
    </div>
    <div className="absolute bottom-2 left-2 z-20 bg-white/95 rounded-full px-2 py-0.5 shadow-sm">
      <span className="text-[8px] font-display font-bold text-foreground">📱 Media Sosial</span>
    </div>
  </div>
);

// Stylized cover for Project 02 — flat-color app-poster layout (tag + big wordmark + tilted phone + sticker badge)
const StaffAppHeroThumbnail = () => (
  <div className="relative w-44 h-32 md:w-52 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border shadow-sm bg-indigo-600">
    {/* Soft white sweep behind the phone, like the reference */}
    <div className="absolute bottom-[-30%] right-[-15%] w-[75%] h-[75%] bg-white/15 rounded-full blur-sm" />

    {/* Tag pill + headline */}
    <div className="absolute top-2 left-2.5 z-20 max-w-[62%]">
      <span className="inline-block bg-neutral-900 text-white text-[6.5px] md:text-[7.5px] font-display font-medium px-1.5 py-0.5 rounded-full leading-none">
        Satu app, semua urusan HR
      </span>
      <p className="font-display font-black text-white text-xl md:text-2xl leading-[0.9] mt-1 tracking-tight">
        STAF!
      </p>
    </div>

    {/* Large tilted phone — Home dashboard */}
    <div
      className="absolute bottom-[-6px] right-[-10px] w-[88px] h-[118px] md:w-[100px] md:h-[132px] rounded-[11px] border-[2.5px] border-white bg-black overflow-hidden shadow-2xl z-10"
      style={{ transform: "perspective(500px) rotateY(-24deg) rotateX(3deg) rotate(2deg)" }}
    >
      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-4 h-[3px] rounded-full bg-black z-10" />
      <img src={staffAppHomeScreen} alt="" className="w-full h-full object-cover object-top" />
    </div>

    {/* Scalloped sticker badge, overlapping the phone */}
    <div
      className="absolute bottom-1.5 right-1.5 z-20 w-8 h-8 md:w-9 md:h-9 bg-neutral-900 flex items-center justify-center shadow-md"
      style={{ borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%" }}
    >
      <span className="text-[11px] md:text-xs">💬</span>
    </div>
  </div>
);

// Stylized cover for Project 03 — laptop-poster layout (tag + big headline + tilted laptop + organic shapes)
const WebsiteHeroThumbnail = () => (
  <div className="relative w-44 h-32 md:w-52 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border shadow-sm bg-[#7A1F2B]">
    {/* Decorative organic shapes */}
    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-black/20" />
    <div
      className="absolute top-6 right-8 w-3.5 h-3.5 bg-[#F3C969]/70"
      style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%" }}
    />
    <div
      className="absolute bottom-8 left-2 w-2.5 h-2.5 bg-white/25"
      style={{ borderRadius: "50% 50% 60% 40% / 40% 60% 50% 50%" }}
    />

    {/* Headline */}
    <div className="absolute top-2 left-2.5 z-20 max-w-[60%]">
      <p className="font-display font-black text-white text-[13px] md:text-base leading-[0.95] tracking-tight">
        LIHAT<br />→ WEBSITENYA
      </p>
      <p className="text-white/70 text-[6.5px] md:text-[7.5px] mt-1 leading-snug">
        Redesign resmi brand bakery lokal
      </p>
    </div>

    {/* Tilted laptop mockup */}
    <div
      className="absolute bottom-1 right-[-8px] z-10"
      style={{ transform: "perspective(500px) rotateY(18deg) rotateX(6deg) rotate(-2deg)" }}
    >
      {/* Screen */}
      <div className="w-28 h-[70px] md:w-32 md:h-20 rounded-t-[6px] border-[3px] border-neutral-800 bg-black overflow-hidden">
        <img src={websiteHomeScreenshot} alt="" className="w-full h-full object-cover object-top" />
      </div>
      {/* Base */}
      <div className="w-32 h-1.5 md:w-36 -ml-2 bg-neutral-700 rounded-b-sm" />
    </div>

    {/* URL label */}
    <div className="absolute bottom-1.5 left-2.5 z-20">
      <span className="text-[6.5px] md:text-[7.5px] font-display font-semibold text-white/80 tracking-wide">
        www.deabakery.co.id
      </span>
    </div>
  </div>
);

// Stylized cover for Project 05 — scrapbook/collage layout (cream bg, washi tags, laptop screen, sticky note)
const AttendanceHeroThumbnail = () => (
  <div className="relative w-44 h-32 md:w-52 md:h-36 shrink-0 rounded-xl overflow-hidden border border-border shadow-sm bg-[#F5F1E6]">
    {/* Washi-tape tag */}
    <div className="absolute -top-1 right-2 z-20 rotate-[6deg] bg-[#D9C9A3] px-2 py-0.5 shadow-sm">
      <span className="text-[6.5px] md:text-[7.5px] font-display font-bold text-[#4A3B22] tracking-wide">HR TOOL</span>
    </div>

    {/* Headline */}
    <div className="absolute top-2.5 left-2.5 z-20 max-w-[55%]">
      <p className="font-display font-black text-[#2B2620] text-[11px] md:text-xs leading-[1.05]">
        Presensi yang
        <br />
        <span className="relative inline-block">
          Bisa Dipercaya
          <svg className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)]" viewBox="0 0 100 30" preserveAspectRatio="none">
            <ellipse cx="50" cy="15" rx="48" ry="13" fill="none" stroke="#C0392B" strokeWidth="2.5" />
          </svg>
        </span>
      </p>
    </div>

    {/* Small pinned photo sticker */}
    <div className="absolute top-8 left-2 z-10 w-6 h-6 md:w-7 md:h-7 bg-white border border-[#00000014] shadow-sm rotate-[-8deg] flex items-center justify-center">
      <span className="text-[10px]">📌</span>
    </div>

    {/* Laptop with real screenshot */}
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10">
      <div className="w-32 h-[70px] md:w-36 md:h-20 rounded-t-[5px] border-[3px] border-neutral-800 bg-black overflow-hidden">
        <img src={hrisDaftarPresensi} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <div className="w-36 h-1.5 md:w-40 -ml-2 bg-neutral-700 rounded-b-sm" />
    </div>

    {/* Sticky note */}
    <div className="absolute bottom-2 right-2 z-20 rotate-[5deg] bg-[#F4C9D8] px-2 py-1 shadow-sm">
      <span className="text-[6.5px] md:text-[7.5px] font-display font-bold text-[#5C2A3A]">56+ Outlet</span>
    </div>
  </div>
);

const skills = [
  { title: "UX & UI Design", desc: "Diterapkan di semua studi kasus, dari mobile app hingga redesign website." },
  { title: "Information Architecture", desc: "Merapikan sitemap & navigasi pada redesign Website Dea Bakery." },
  { title: "UX Writing", desc: "Menulis ulang heading & microcopy pada redesign Website Dea Bakery." },
  { title: "Design Systems", desc: "Menyusun style guide di Bahan Baku, Online Attendance, dan Website Dea Bakery." },
  { title: "Wireframing & Prototyping", desc: "Wireframe hingga prototype Figma untuk Dea Bakery App & Website Redesign." },
  { title: "Interaction & Responsive Design", desc: "Layout mobile-first & responsif pada redesign Website Dea Bakery." },
  { title: "Access & Permission Design", desc: "Merancang akses berjenjang pada Personal App Staff Dea Bakery." },
  { title: "Design Handoff", desc: "Menyiapkan dokumentasi handoff developer di Website Dea Bakery." },
  { title: "Cross-functional Coordination", desc: "Mengoordinasikan developer & marketing di seluruh proyek Asst. PM." },
  { title: "Release & Sprint Planning", desc: "Menyusun rencana partial release pada proyek HRIS Release Planning." },
  { title: "Scope Management", desc: "Mengelola scope 3 sistem paralel pada Online Attendance Rollout." },
  { title: "Stakeholder Communication", desc: "Menjembatani bisnis & tim teknis di Dea Bakery App dan proyek PM." },
  { title: "Problem Solving", desc: "Mengubah masalah nyata jadi keputusan desain terukur di tiap studi kasus." },
];



const experiences = [
  {
    company: "CV. Dea Bakery",
    role: "Product Designer – Assistant Project Manager",
    period: "2024 – Present",
  },
  {
    company: "PT. Kalbe Radha Mustika (Kalbe Group)",
    role: "UI/UX Designer Intern",
    period: "Sept 2022 – Dec 2022",
  },
  {
    company: "PT. Tanigo Indonesia",
    role: "UI/UX Designer Intern",
    period: "April 2022 – July 2022",
  },
  {
    company: "Rumah Penalaran",
    role: "UI/UX Designer Intern",
    period: "Mar 2022 – June 2022",
  },
];

const education = [
  {
    degree: "Bachelor of Informatics Engineering",
    school: "State University of Malang",
    period: "2019 – 2023",
  },
  {
    degree: "Studi Independen Binar Academy",
    school: "Kampus Merdeka (MBKM)",
    period: "Feb 2022 – July 2022",
  },
  {
    degree: "UI/UX Design Scholarship",
    school: "Simpul Talenta",
    period: "Sept 2021 – Oct 2021",
  },
];

const projects = [
  {
    id: "dea-bakery-mobile-app",
    number: "01",
    title: "Transformasi Reputasi Dea Bakery Lewat Digitalisasi Pengalaman Pelanggan",
    type: "Product Strategy",
    description:
      "Merancang aplikasi loyalty dan order untuk bakery lokal yang reputasinya dibangun secara organik lewat walk-in, mulut ke mulut, dan media sosial — namun caranya beradaptasi ke kanal digital masih tertinggal.",
    tags: ["Product Strategy", "Loyalty System", "Digital Transformation"],
    section: "uiux",
    image: deaBakeryAppMockup,
    imagePosition: "top",
    thumbnailStyle: "hero-collage",
  },
  {
    id: "staff-app-dea-bakery",
    number: "02",
    title: "Menghadirkan Personal App HR untuk Karyawan Dea Bakery",
    type: "Operational Design",
    description:
      "Aplikasi mobile internal untuk karyawan Dea Bakery — akses self-service ke slip gaji digital, presensi, pengajuan benefit, dan info HR.",
    tags: ["Access Design", "Mobile App", "HR & People Ops"],
    section: "uiux",
    image: staffAppMockup,
    thumbnailStyle: "hero-collage-hr",
  },
  {
    id: "website-dea-bakery-redesign",
    number: "03",
    title: "Menata Ulang Website Resmi Brand Bakery Lokal",
    type: "Web Redesign",
    description:
      "Redesign website yang berfokus menyelesaikan masalah nyata — navigasi tidak jelas, konten berantakan, dan sistem visual yang rusak — dalam batasan Elementor dan timeline bisnis yang cepat.",
    tags: ["UI Design", "Information Architecture", "UX Writing"],
    section: "uiux",
    image: websiteDeaBakeryMockup,
    thumbnailStyle: "hero-collage-web",
  },
  {
    id: "bahan-baku-inventory-system",
    number: "04",
    title: "Membenahi Sistem Pencatatan Bahan Baku untuk Chocoa POS",
    type: "Data Model UX",
    description:
      "Merancang modul Bahan Baku untuk back-office POS Dea Bakery dari nol — merombak spec dua kali sebelum implementasi untuk menghapus satu langkah konversi manual dan menutup celah audit formal di balik ~33% kasus operasional bulanan.",
    tags: ["Product Design", "Asst. PM", "Internal Tool", "Ongoing"],
    section: "uiux",
  },
  {
    id: "online-attendance-system",
    number: "05",
    title: "Menyatukan Presensi GPS Lintas Tiga Sistem untuk Chocoa HR Suite",
    type: "System Design",
    description:
      "Merancang ulang presensi 1.000+ karyawan di 56+ outlet dari mesin fingerprint tetap menjadi tiga sistem terhubung — aplikasi mobile, dashboard HR, dan perencana jadwal shift — yang berbagi satu domain data agar bisa dipercaya sebagai dasar penggajian.",
    tags: ["Product Design", "System Design", "Mobile App", "Ongoing"],
    section: "uiux",
    thumbnailStyle: "hero-collage-attendance",
  },
  {
    id: "production-workflow-optimization",
    number: "01",
    title: "Feature Rollout Coordination",
    type: "Process & Coordination",
    description:
      "Coordinated end-to-end feature rollout across dev and design teams — tracking progress via Jira, managing sprint ceremonies, and aligning stakeholders weekly.",
    tags: ["Sprint Planning", "Jira", "Stakeholder Sync"],
    section: "pm",
    period: "Jan 2025 – Mar 2025",
    outcome: "2 features shipped on schedule, 0 critical blockers missed",
  },
  {
    id: "bakery-production-scheduling",
    number: "02",
    title: "Production Scheduling & Workflow Ops",
    type: "Operational Management",
    description:
      "Rebuilt the daily production schedule system for Dea Bakery — transitioning from manual WhatsApp coordination to a structured Lark-based workflow with task ownership and shift visibility.",
    tags: ["Lark", "Ops Design", "SOP Documentation"],
    section: "pm",
    period: "Apr 2024 – Jun 2024",
    outcome: "Reduced task confusion by ~60% across 3 production shifts",
  },
  {
    id: "cross-team-delivery-tracker",
    number: "03",
    title: "Cross-Team Delivery Tracker",
    type: "Reporting & Tracking",
    description:
      "Owned weekly delivery reporting for a cross-functional team — consolidating progress from design, dev, and ops into a single dashboard reviewed by leadership.",
    tags: ["Reporting", "Google Sheets", "Cross-functional"],
    section: "pm",
    period: "Jul 2024 – Dec 2024",
    outcome: "Leadership visibility improved; fewer escalations in monthly reviews",
  },
];



const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

// ─── WorkTab: dual-layout (UI/UX = image cards, PM = timeline) ───────────────

type Project = typeof projects[number];

const WorkTab = ({ projects }: { projects: Project[] }) => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role") === "pm" ? "pm" : "uiux";
  const [workTab, setWorkTab] = useState<"uiux" | "pm">(roleParam);

  useEffect(() => {
    setWorkTab(searchParams.get("role") === "pm" ? "pm" : "uiux");
  }, [searchParams]);

  const uiuxProjects = projects.filter((p) => p.section === "uiux");
  const pmProjects = projects.filter((p) => p.section === "pm");

  return (
    <motion.div
      key="work"
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      {/* Sub-tab toggle */}
      <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-card/60 w-fit">
        <button
          type="button"
          onClick={() => setWorkTab("uiux")}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${workTab === "uiux"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <Layers className="w-3 h-3" />
          Product Designer
        </button>
        <button
          type="button"
          onClick={() => setWorkTab("pm")}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${workTab === "pm"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <BarChart2 className="w-3 h-3" />
          Asst. Project Manager
        </button>
      </div>

      {/* Context label */}
      {workTab === "uiux" ? (
        <p className="text-xs text-muted-foreground/70">
          Visual design work — from mobile apps to internal tooling.
        </p>
      ) : (
        <p className="text-xs text-muted-foreground/70">
          Process & coordination work — sprint management, ops design, and team alignment.
        </p>
      )}

      <div className="border-t border-border" />

      <AnimatePresence mode="wait">
        {/* ── UI/UX: Image cards ── */}
        {workTab === "uiux" && (
          <motion.div
            key="uiux-list"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="space-y-0"
          >
            {uiuxProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="group flex items-start gap-4 py-5 border-b border-border hover:bg-card/50 -mx-6 px-6 transition-colors"
                >
                  {/* Thumbnail */}
                  {"thumbnailStyle" in project && project.thumbnailStyle === "hero-collage" ? (
                    <DeaBakeryHeroThumbnail />
                  ) : "thumbnailStyle" in project && project.thumbnailStyle === "hero-collage-hr" ? (
                    <StaffAppHeroThumbnail />
                  ) : "thumbnailStyle" in project && project.thumbnailStyle === "hero-collage-web" ? (
                    <WebsiteHeroThumbnail />
                  ) : "thumbnailStyle" in project && project.thumbnailStyle === "hero-collage-attendance" ? (
                    <AttendanceHeroThumbnail />
                  ) : (
                    "image" in project && project.image && (
                      <div className="w-20 h-14 shrink-0 rounded-md overflow-hidden border border-border bg-secondary">
                        <img
                          src={project.image as string}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          style={{
                            objectPosition:
                              "imagePosition" in project && project.imagePosition
                                ? (project.imagePosition as string)
                                : "center",
                          }}
                        />
                      </div>
                    )
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-display font-medium text-accent">
                        {project.number}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                        Product Designer
                      </span>
                      <span className="text-xs text-muted-foreground/60">{project.type}</span>
                    </div>
                    <h2 className="text-sm font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors leading-snug">
                      {project.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── PM: Minimal timeline (no descriptions) ── */}

        {workTab === "pm" && (
          <motion.div
            key="pm-list"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            {/* Vertical timeline line */}
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

            <div className="space-y-6">
              {pmProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="relative pl-6"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-foreground/30 bg-background" aria-hidden="true" />

                  {/* Period */}
                  {"period" in project && project.period && (
                    <span className="inline-block text-[10px] font-medium text-muted-foreground bg-secondary border border-border rounded-full px-2 py-0.5 mb-2 tracking-wide">
                      {project.period as string}
                    </span>
                  )}

                  {/* Title row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border font-medium shrink-0">
                      Asst. PM
                    </span>
                    <p className="text-sm font-display font-semibold text-foreground leading-snug">
                      {project.title}
                    </p>
                  </div>

                  {/* Clickable card body */}
                  <Link
                    to={`/project/${project.id}`}
                    className="group block bg-card border border-border rounded-xl p-4 space-y-3 hover:border-accent/40 hover:bg-card/80 transition-colors"
                  >
                    {/* Type */}
                    <p className="text-[10px] font-display font-semibold tracking-widest uppercase text-muted-foreground/60">
                      {project.type}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Outcome + Arrow */}
                    <div className="flex items-center justify-between pt-1 border-t border-border">
                      {"outcome" in project && project.outcome && (
                        <div className="flex items-start gap-2">
                          <span className="text-accent font-bold text-xs mt-0.5 shrink-0">↗</span>
                          <p className="text-xs text-accent font-medium leading-snug">
                            {project.outcome as string}
                          </p>
                        </div>
                      )}
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 ml-auto" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
};

const Intro = () => {

  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>(
    (searchParams.get("tab") as Tab) ?? "about"
  );

  useEffect(() => {
    const tab = (searchParams.get("tab") as Tab) ?? "about";
    setActiveTab(tab);
  }, [searchParams]);

  const tabs: { id: Tab; label: string }[] = [
    { id: "about", label: "About me" },
    { id: "resume", label: "Resume" },
    { id: "work", label: "Work" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        {/* Hero — always visible */}
        <motion.header
          className="pt-16 pb-12 md:pt-24 md:pb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="w-44 md:w-56 rounded-2xl overflow-hidden border-2 border-border shrink-0">
              <img
                src={profilePhoto}
                alt="Fajriwati Qoyyum Rizqini"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="section-label mb-3">Hello! 🌺 I'm</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
                Fajriwati Qoyyum<br />Rizqini
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                A <span className="text-foreground font-medium">Product Designer</span> with 3+ years of experience.
                My design process is driven by{" "}
                <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">empathy and structured problem-solving</span>,
                allowing me to craft{" "}
                <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">intuitive, user-centered experiences</span>{" "}
                that{" "}
                <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">communicate clearly and feel naturally engaging</span>.
              </p>

              {/* Get In Touch — below hero description */}
              <div className="mt-6 pt-5">
                <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.12em] mb-3 font-medium">Get in touch</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="mailto:fajriwatirizqini@gmail.com"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" />
                    Email
                  </a>
                  <a
                    href="tel:+6285156527137"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    Phone
                  </a>
                  <a
                    href="https://linkedin.com/in/fajriwatiqoyyumrizqini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 shrink-0" />
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com/frizqinii_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 shrink-0" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Tab Bar */}
        <div className="border-t border-border">
          <div className="flex items-center gap-1 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-medium font-display tracking-wide rounded-t-md transition-colors relative ${activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-10 border-t border-border min-h-[400px]">
          <AnimatePresence mode="wait">

            {/* ── ABOUT ME ── */}
            {activeTab === "about" && (
              <motion.div
                key="about"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-10"
              >

                {/* — Bio — */}
                <div className="space-y-3">
                  <p className="text-2xl font-display font-semibold text-foreground leading-snug">
                    I design for clarity, not complexity.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With a background in Informatics Engineering and hands-on experience across mobile apps,
                    internal tools, and web dashboards — I translate user needs into structured, intentional design.
                    I've gone through the full process: research, wireframes, prototypes, testing, and handoff.
                    Every project sharpens how I think, not just how I design.
                  </p>
                </div>

                {/* — Design values pills — */}
                <div className="flex flex-wrap gap-2">
                  {["Empathy-first", "Structured thinking", "Communicative style", "Curious by nature"].map((v) => (
                    <span
                      key={v}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-card"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border" />

                {/* — Freelance — */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <p className="section-label">Freelance Services</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Open for work
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
                    {[
                      { title: "Mobile App Design", desc: "End-to-end UI/UX for iOS & Android" },
                      { title: "Web App / Dashboard", desc: "Data-heavy interfaces & internal tools" },
                      { title: "Design System", desc: "Component libraries & style guides" },
                      { title: "UX Audit & Consulting", desc: "Review, feedback & improvement plan" },
                    ].map((service) => (
                      <div
                        key={service.title}
                        className="bg-card px-5 py-4 flex flex-col gap-1"
                      >
                        <p className="text-sm font-display font-semibold text-foreground">{service.title}</p>
                        <p className="text-xs text-muted-foreground">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

            {/* ── RESUME ── */}
            {activeTab === "resume" && (
              <motion.div
                key="resume"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14">

                  {/* Left column: Experience + Education timelines */}
                  <div className="space-y-10">

                    {/* ── Experience Timeline ── */}
                    <div>
                      <h2 className="text-xs font-display font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                        Experience
                      </h2>
                      <div className="relative">
                        {/* Vertical line */}
                        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

                        <div className="space-y-7">
                          {experiences.map((exp, i) => (
                            <motion.div
                              key={exp.company}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, delay: i * 0.07 }}
                              className="relative pl-6"
                            >
                              {/* Dot */}
                              <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background" aria-hidden="true" />

                              {/* Period badge */}
                              <span className="inline-block text-[10px] font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-2 py-0.5 mb-1.5 tracking-wide">
                                {exp.period}
                              </span>
                              <p className="text-sm font-semibold text-foreground leading-snug">
                                {exp.role}
                              </p>
                              <p className="text-sm text-foreground/60 mt-0.5">{exp.company}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border" />

                    {/* ── Education Timeline ── */}
                    <div>
                      <h2 className="text-xs font-display font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                        Education
                      </h2>
                      <div className="relative">
                        {/* Vertical line */}
                        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

                        <div className="space-y-7">
                          {education.map((edu, i) => (
                            <motion.div
                              key={edu.degree}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, delay: i * 0.07 + 0.28 }}
                              className="relative pl-6"
                            >
                              {/* Dot */}
                              <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-muted-foreground/40 bg-background" aria-hidden="true" />

                              {/* Period badge */}
                              <span className="inline-block text-[10px] font-medium text-muted-foreground bg-secondary border border-border rounded-full px-2 py-0.5 mb-1.5 tracking-wide">
                                {edu.period}
                              </span>
                              <p className="text-sm font-semibold text-foreground leading-snug">
                                {edu.degree}
                              </p>
                              <p className="text-sm text-foreground/60 mt-0.5">{edu.school}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right column: Skills */}
                  <div className="md:min-w-[180px]">
                    <h2 className="text-xs font-display font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                      Skills
                    </h2>
                    <div className="space-y-3">
                      {skills.map((skill) => (
                        <div key={skill.title}>
                          <p className="text-sm font-medium text-foreground/90">
                            {skill.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ── WORK ── */}
            {activeTab === "work" && (
              <WorkTab projects={projects} />
            )}


          </AnimatePresence>
        </div>

        <footer className="py-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Fajriwati Qoyyum Rizqini. Available for new opportunities.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
