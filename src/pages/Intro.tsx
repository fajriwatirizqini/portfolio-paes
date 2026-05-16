import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { SiJira, SiCanva, SiFigma, SiHtml5, SiCss, SiCoda } from "react-icons/si";

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
];

const toolIcons = [
  { name: "Figma",       Icon: SiFigma,   iconColor: "#FFFFFF", bg: "#F24E1E" },
  { name: "Jira",        Icon: SiJira,    iconColor: "#FFFFFF", bg: "#0052CC" },
  { name: "Canva",       Icon: SiCanva,   iconColor: "#FFFFFF", bg: "#00C4CC" },
  { name: "HTML",        Icon: SiHtml5,   iconColor: "#FFFFFF", bg: "#E44D26" },
  { name: "CSS",         Icon: SiCss,     iconColor: "#FFFFFF", bg: "#264DE4" },
  { name: "Coda",        Icon: SiCoda,    iconColor: "#FFFFFF", bg: "#F46A54" },
];

// Custom text-only tool badges (no react-icons available)
const customToolBadges = [
  { name: "Whimsical", label: "W", bg: "#7C3AED", iconColor: "#FFFFFF" },
  { name: "Lark",      label: "L", bg: "#00B96B", iconColor: "#FFFFFF" },
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
  },
  {
    id: "production-workflow-optimization",
    number: "01",
    title: "Feature Rollout Coordination",
    type: "Process & Coordination",
    description:
      "Production workflow optimization for a bakery — scheduling, task tracking, and cross-team coordination as Assistant PM.",
    tags: ["Assistant PM", "Workflow", "Jira"],
    section: "pm",
  },
];

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

const Intro = () => {
  const [activeTab, setActiveTab] = useState<Tab>("about");

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
                    fajriwatirizqini@gmail.com
                  </a>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    +62 851-5652-7137
                  </div>
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
                    @frizqinii_
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
                className={`px-4 py-2.5 text-sm font-medium font-display tracking-wide rounded-t-md transition-colors relative ${
                  activeTab === tab.id
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
                className="space-y-8"
              >
                {/* Introduction */}
                <div>
                  <p className="section-label mb-4">Introduction</p>
                  <div className="space-y-4 max-w-2xl">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      My design process is driven by{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">empathy and structured problem-solving</span>,
                      allowing me to craft{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">intuitive, user-centered experiences</span>{" "}
                      that{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">communicate clearly and feel naturally engaging</span>.
                      I have hands-on experience in user research, wireframing, prototyping, and usability testing —
                      continuously learning how{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">collaboration and planning shape better design outcomes</span>.
                    </p>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      My design style is{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">communicative, playful, and elegantly balanced</span>.
                      I love creating experiences that not only solve problems but also{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">spark connection and curiosity</span>.
                      For me, great design happens where{" "}
                      <span className="text-foreground underline decoration-accent/40 underline-offset-2 decoration-[1.5px]">empathy, creativity, and clarity meet</span>.
                    </p>
                  </div>
                </div>


                {/* Divider between Introduction and Freelance */}
                <div className="border-t border-border" />

                {/* Freelance */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="section-label">Freelance Services</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      Open for work
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 max-w-xl leading-relaxed">
                    I take on freelance UI/UX projects end-to-end — from discovery and wireframing
                    to high-fidelity prototypes and handoff-ready Figma files. I've worked with
                    early-stage startups and growing businesses across mobile apps, internal tools,
                    and web dashboards.
                  </p>

                  {/* Service Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mb-5">
                    {[
                      {
                        title: "Mobile App Design",
                        desc: "End-to-end UI/UX for iOS & Android",
                        includes: ["User flow & wireframe", "High-fidelity screens", "Prototype & handoff"],
                      },
                      {
                        title: "Web App / Dashboard",
                        desc: "Data-heavy interfaces & internal tools",
                        includes: ["Information architecture", "Component design", "Responsive layouts"],
                      },
                      {
                        title: "Design System",
                        desc: "Component libraries & style guides",
                        includes: ["Token setup", "Reusable components", "Figma library"],
                      },
                      {
                        title: "UX Audit & Consulting",
                        desc: "Review, feedback & improvement plan",
                        includes: ["Heuristic evaluation", "Pain point report", "Prioritized recommendations"],
                      },
                    ].map((service) => (
                      <div
                        key={service.title}
                        className="bg-card border border-border rounded-lg p-3.5 flex flex-col gap-2"
                      >
                        <div>
                          <p className="text-sm font-display font-semibold text-foreground">{service.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{service.desc}</p>
                        </div>
                        <ul className="space-y-1">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>


                  {/* Social Proof */}
                  <div className="max-w-xl bg-card border border-border rounded-lg p-4">
                    <p className="text-sm text-foreground/80 italic leading-relaxed">
                      "Fajri delivered a complete mobile app design in under 3 weeks. She asked the right
                      questions from day one, challenged assumptions where needed, and produced screens
                      our dev team could build from immediately."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">— Dea Bakery, Founder</p>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

                  {/* Experience */}
                  <div>
                    <h2 className="text-xs font-display font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                      Experience
                    </h2>
                    <div className="space-y-6">
                      {experiences.map((exp) => (
                        <div key={exp.company}>
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            {exp.role}
                          </p>
                          <p className="text-sm text-foreground/70 mt-0.5">{exp.company}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.period}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-xs font-display font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                      Education
                    </h2>
                    <div className="space-y-6">
                      {education.map((edu) => (
                        <div key={edu.degree}>
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-foreground/70 mt-0.5">{edu.school}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{edu.period}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Tools */}
                  <div className="space-y-8">
                    <div>
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
                    <div>
                      <h2 className="text-xs font-display font-bold text-foreground uppercase tracking-[0.15em] mb-6">
                        Tools
                      </h2>
                      <div className="flex flex-wrap gap-2.5">
                        {toolIcons.map(({ name, Icon, iconColor, bg }) => (
                          <div
                            key={name}
                            title={name}
                            style={{ backgroundColor: bg }}
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                          >
                            <Icon size={20} color={iconColor} />
                          </div>
                        ))}
                        {customToolBadges.map(({ name, label, bg, iconColor }) => (
                          <div
                            key={name}
                            title={name}
                            style={{ backgroundColor: bg, color: iconColor }}
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm text-xs font-bold font-display"
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ── WORK ── */}
            {activeTab === "work" && (
              <motion.div
                key="work"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-0"
              >
                {projects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      className="group block py-6 border-b border-border hover:bg-card/50 -mx-6 px-6 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1.5">
                            <span className="text-xs font-display font-medium text-accent">
                              {project.number}
                            </span>
                            <span className="text-xs text-muted-foreground">{project.type}</span>
                          </div>
                          <h2 className="text-base font-display font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors">
                            {project.title}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
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
