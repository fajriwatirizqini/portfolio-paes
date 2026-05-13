import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const skills = [
  "UX & UI Design",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "UX Writing",
  "Interactive Design",
  "Problem Solving",
  "Strategic Planning",
];

const tools = ["Figma", "Adobe Photoshop", "Canva", "Maze", "Miro"];

const experiences = [
  {
    company: "CV. Dea Bakery",
    role: "UI/UX Designer – Assistant PM",
    period: "2024 – Present",
  },
  {
    company: "PT. Kalbe Radha Mustika (Kalbe Group)",
    role: "UI/UX Designer Intern",
    period: "Sept – Dec 2022",
  },
  {
    company: "PT. Tanigo Indonesia",
    role: "UI/UX Designer Intern",
    period: "April – July 2022",
  },
  {
    company: "Rumah Penalaran",
    role: "UI/UX Designer Intern",
    period: "Mar – June 2022",
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
    period: "Feb – July 2022",
  },
  {
    degree: "UI/UX Design Scholarship",
    school: "Simpul Talenta",
    period: "Sept – Oct 2021",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

const Intro = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        {/* Hero */}
        <motion.header
          className="pt-14 pb-10 md:pt-20 md:pb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 md:gap-8">
            {/* Photo — compact circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-border shrink-0">
              <img
                src={profilePhoto}
                alt="Fajriwati Qoyyum Rizqini"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name + role + tagline */}
            <div className="flex-1 min-w-0">
              <p className="section-label mb-1">UI/UX Designer</p>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug">
                Fajriwati Qoyyum Rizqini
              </h1>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-sm">
                Designing systems that feel intuitive — driven by empathy and structured thinking.
              </p>
            </div>
          </div>

          {/* Contact row — inline, compact */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-sm text-muted-foreground">
            <a
              href="mailto:fajriwatirizqini@gmail.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              fajriwatirizqini@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/fajriwatiqoyyumrizqini/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-accent" />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/frizqinii_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-accent" />
              @frizqinii_
            </a>
          </div>
        </motion.header>

        {/* About */}
        <motion.section
          className="py-8 border-t border-border"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">About</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            My design style is{" "}
            <strong className="text-foreground">communicative, playful, and elegantly balanced</strong>.
            I love creating experiences that solve problems and spark connection.
            I have hands-on experience in user research, wireframing, prototyping, and usability testing.
          </p>
        </motion.section>

        {/* Experience + Education — two column on md */}
        <motion.section
          className="py-8 border-t border-border"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <p className="section-label mb-4">Experience</p>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.company}>
                    <p className="text-sm font-display font-semibold text-accent leading-snug">
                      {exp.company}
                    </p>
                    <p className="text-sm text-foreground mt-0.5">{exp.role}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="section-label mb-4">Education</p>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-sm font-display font-semibold text-foreground leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">{edu.school}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Tools — compact inline tags */}
        <motion.section
          className="py-8 border-t border-border"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="section-label mb-3">Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label mb-3">Tools</p>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-8 border-t border-border"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="group flex items-center justify-between p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
          >
            <div>
              <p className="text-base font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                View My Work
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Browse case studies and project previews →
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
          </Link>
        </motion.section>

        <footer className="py-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Fajriwati Qoyyum Rizqini. Available for new opportunities.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
