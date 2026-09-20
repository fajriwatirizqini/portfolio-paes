import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "dea-bakery-mobile-app",
    number: "01",
    title: "Dea Bakery Reputation Transformation Mobile App",
    description:
      "Designed a loyalty, ordering, and account experience that gave a local bakery's organically-built reputation a digital home — unifying scattered word-of-mouth, WhatsApp, and social channels into one trusted app.",
    tags: ["Product Strategy", "Loyalty System", "Digital Transformation"],
    type: "Product Strategy",
    section: "uiux",
  },
  {
    id: "staff-app-dea-bakery",
    number: "02",
    title: "Personal App Staff — Dea Bakery",
    description:
      "An internal mobile app for Dea Bakery employees — self-service access to digital payslips, attendance, benefit submissions, and HR info. Reduced manual HR workload through thoughtful internal tooling.",
    tags: ["Access Design", "Mobile App", "HR & People Ops"],
    type: "Operational Design",
    section: "uiux",
  },
  {
    id: "onboarding-portal-redesign",
    number: "03",
    title: "Employee Onboarding Portal Redesign",
    description:
      "A complete step-by-step UI design process — identifying problems, restructuring information architecture, and delivering a guided onboarding experience.",
    tags: ["UI Design Process", "Step-by-Step", "Problem Solving"],
    type: "Full Design Process",
    section: "uiux",
  },
  {
    id: "production-workflow-optimization",
    number: "01",
    title: "Feature Rollout Coordination",
    description:
      "Production workflow optimization for a bakery — scheduling, task tracking, and cross-team coordination as Assistant PM.",
    tags: ["Assistant PM", "Workflow", "Jira"],
    type: "Process & Coordination",
    section: "pm",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<"uiux" | "pm">("uiux");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        {/* Back nav */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors pt-8 pb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Hero */}
        <motion.header
          className="pt-20 pb-16 border-b border-border"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-4">Product Designer</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Designing systems<br />that work.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            I design internal tools and enterprise systems. My work focuses on
            workflow clarity, measurable impact, and interfaces people actually
            want to use.
          </p>
        </motion.header>

        {/* Projects – tabbed layout */}
        <section className="py-12">
          <div className="mb-6">
            <p className="section-label mb-1 text-xs md:text-sm">Selected Work</p>
            <p className="text-base md:text-lg text-muted-foreground">
              I design interfaces and shape product direction.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex w-full items-center gap-2 rounded-full border border-border bg-card/60 px-1 py-1 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("uiux")}
                className={`flex-1 px-4 py-1.5 rounded-full font-medium tracking-[0.18em] uppercase transition-colors text-center ${
                  activeTab === "uiux"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                UI/UX Design
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pm")}
                className={`flex-1 px-4 py-1.5 rounded-full font-medium tracking-[0.18em] uppercase transition-colors text-center ${
                  activeTab === "pm"
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Product / PM
              </button>
            </div>
          </div>

          <div className="border-t border-border pt-4">
            {activeTab === "uiux" ? (
              <div className="space-y-0">
                {projects
                  .filter((p) => p.section === "uiux")
                  .map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="group block py-8 border-b border-border hover:bg-card/50 -mx-6 px-6 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-xs font-display font-medium text-accent">
                                {project.number}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {project.type}
                              </span>
                            </div>
                            <h2 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {project.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
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
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-2 shrink-0" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            ) : (
              <div className="space-y-0">
                {projects
                  .filter((p) => p.section === "pm")
                  .map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="group block py-8 border-b border-border hover:bg-card/50 -mx-6 px-6 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-xs font-display font-medium text-accent">
                                {project.number}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {project.type}
                              </span>
                            </div>
                            <h2 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {project.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
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
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-2 shrink-0" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            )}
          </div>
        </section>

        <footer className="py-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Available for new opportunities.{" "}
            <a href="mailto:hello@designer.com" className="text-accent hover:underline">
              Get in touch
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
