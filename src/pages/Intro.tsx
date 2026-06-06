import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Instagram, Layers, BarChart2 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import deaBakeryMockup from "@/assets/project-dea-bakery-mockup.png";
import staffAppMockup from "@/assets/project-staff-app-mockup.png";
import onboardingMockup from "@/assets/project1-before-after.jpg";

type Tab = "about" | "resume" | "work";

const skills = [
  "UX & UI Design",
  "Wireframing",
  "Interactive & Responsive Design",
  "UX Writing",
  "Prototyping",
  "Usability Testing",
  "Problem Solving",
  "Strategic Planning",
  "User Research",
  "Information Architecture",
  "Design Handoff",
  "Cross-functional Collaboration",
  "Project Coordination",
];



const experiences = [
  {
    company: "CV. Dea Bakery",
    role: "UI/UX Designer – Assistant Project Manager",
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
    title: "Dea Bakery Mobile App",
    type: "Product Strategy",
    description:
      "Designed a loyalty and engagement platform for a local bakery. Navigated real business constraints to pivot from full e-commerce to a focused loyalty-first experience.",
    tags: ["Product Thinking", "Scope Decision", "Loyalty System"],
    section: "uiux",
    image: deaBakeryMockup,
  },
  {
    id: "staff-app-dea-bakery",
    number: "02",
    title: "Personal App Staff — Dea Bakery",
    type: "Operational Design",
    description:
      "An internal mobile app for Dea Bakery employees — self-service access to digital payslips, attendance, benefit submissions, and HR info.",
    tags: ["Access Design", "Mobile App", "HR & People Ops"],
    section: "uiux",
    image: staffAppMockup,
  },
  {
    id: "onboarding-portal-redesign",
    number: "03",
    title: "Employee Onboarding Portal Redesign",
    type: "Full Design Process",
    description:
      "A complete step-by-step UI design process — identifying problems, restructuring information architecture, and delivering a guided onboarding experience.",
    tags: ["UI Design Process", "Step-by-Step", "Problem Solving"],
    section: "uiux",
    image: onboardingMockup,
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
  const [workTab, setWorkTab] = useState<"uiux" | "pm">("uiux");

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
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
            workTab === "uiux"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Layers className="w-3 h-3" />
          UI/UX Designer
        </button>
        <button
          type="button"
          onClick={() => setWorkTab("pm")}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
            workTab === "pm"
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
                  {"image" in project && project.image && (
                    <div className="w-20 h-14 shrink-0 rounded-md overflow-hidden border border-border bg-secondary">
                      <img
                        src={project.image as string}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-display font-medium text-accent">
                        {project.number}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                        UI/UX Designer
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

            <div className="space-y-5">
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
                    <span className="inline-block text-[10px] font-medium text-muted-foreground bg-secondary border border-border rounded-full px-2 py-0.5 mb-1 tracking-wide">
                      {project.period as string}
                    </span>
                  )}

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border font-medium shrink-0">
                      Asst. PM
                    </span>
                    <p className="text-sm font-display font-semibold text-foreground leading-snug">
                      {project.title}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-0.5 pl-0">
                    {project.type}
                  </p>
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
  const initialTab = (searchParams.get("tab") as Tab) ?? "about";
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

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
                A <span className="text-foreground font-medium">UI/UX Designer</span> with 1+ year of experience.
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
                    <div className="space-y-2">
                      {skills.map((skill) => (
                        <p key={skill} className="text-sm text-foreground/80">
                          {skill}
                        </p>
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
