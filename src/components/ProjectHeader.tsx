import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectHeaderProps {
  projectNumber: string;
  title: string;
  subtitle: string;
  tags: string[];
  backHref?: string;
}

const ProjectHeader = ({ projectNumber, title, subtitle, tags, backHref = "/?tab=work" }: ProjectHeaderProps) => {
  return (
    <motion.header
      className="pt-12 pb-10 border-b border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to={backHref}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>
      <p className="section-label mb-3">{projectNumber}</p>
      <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 leading-tight">
        {title}
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mb-6">{subtitle}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium font-display tracking-wide px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.header>
  );
};

export default ProjectHeader;

