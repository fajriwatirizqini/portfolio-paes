import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBlockProps {
  label: string;
  title?: string;
  children: ReactNode;
  index?: number;
}

const SectionBlock = ({ label, title, children, index = 0 }: SectionBlockProps) => {
  return (
    <motion.section
      className="case-study-section"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="highlight-bar" />
      <p className="section-label mb-2">{label}</p>
      {title && (
        <h3 className="text-xl font-display font-semibold text-foreground mb-4">{title}</h3>
      )}
      <div className="text-secondary-foreground leading-relaxed space-y-4 text-[15px]">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionBlock;
