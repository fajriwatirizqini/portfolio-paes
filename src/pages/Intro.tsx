import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

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

const tools = ["Figma", "Adobe Photoshop", "Canva", "Maze", "Miro"];

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Intro = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Hero Section */}
        <motion.header
          className="pt-16 pb-12 md:pt-24 md:pb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Photo */}
            <div className="w-44 md:w-56 rounded-2xl overflow-hidden border-2 border-border shrink-0">
              <img
                src={profilePhoto}
                alt="Fajriwati Qoyyum Rizqini"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Intro Text */}
            <div className="flex-1">
              <p className="section-label mb-3">Hello! 🌺 I'm</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
                Fajriwati Qoyyum<br />Rizqini
              </h1>
              <p className="text-muted-foreground text-base xs:text-lg leading-relaxed max-w-xl">
                A <strong className="text-foreground">UI/UX Designer</strong> with 1+ year of experience and a
                proven track record of completing over 7 digital design projects.
                My design process is driven by empathy and structured problem-solving,
                allowing me to craft intuitive, user-centered experiences.
              </p>
            </div>
          </div>
        </motion.header>

        {/* About */}
        <motion.section
          className="py-10 border-t border-border"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">About</p>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            My design style is <strong className="text-foreground">communicative, playful, and elegantly balanced</strong>.
            I love creating experiences that not only solve problems but also spark connection and curiosity.
            For me, great design happens where empathy, creativity, and clarity meet. I have hands-on experience
            in user research, wireframing, prototyping, and usability testing.
          </p>
        </motion.section>

        {/* Experience + Education — 2-column */}
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
              <div className="space-y-3.5">
                {experiences.map((exp) => (
                  <div key={exp.company} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-display font-semibold text-foreground leading-snug">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{exp.role}</p>
                      <p className="text-xs text-accent/70 mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="section-label mb-4">Education</p>
              <div className="space-y-3.5">
                {education.map((edu) => (
                  <div key={edu.degree} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-display font-semibold text-foreground leading-snug">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{edu.school}</p>
                      <p className="text-xs text-accent/70 mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Tools — compact */}
        <motion.section
          className="py-8 border-t border-border"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <p className="section-label shrink-0 w-14 pt-0.5">Skills</p>
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
            <div className="flex items-start gap-3">
              <p className="section-label shrink-0 w-14 pt-0.5">Tools</p>
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

        {/* Contact */}
        <motion.section
          className="py-10 border-t border-border"
          custom={5}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Contact</p>
          <div className="space-y-3 text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+62 851-5652-7137</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:fajriwatirizqini@gmail.com" className="hover:text-accent transition-colors">
                fajriwatirizqini@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-accent" />
              <a href="https://linkedin.com/in/fajriwatiqoyyumrizqini/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                linkedin.com/in/fajriwatiqoyyumrizqini
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-accent" />
              <a href="https://instagram.com/frizqinii_/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                @frizqinii_
              </a>
            </div>
          </div>
        </motion.section>

        {/* CTA to Portfolio */}
        <motion.section
          className="py-12 border-t border-border"
          custom={6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
          >
            <div>
              <p className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                View My Work
              </p>
              <p className="text-base text-muted-foreground mt-1">
                Browse case studies and project previews →
              </p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
          </Link>
        </motion.section>

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
