import { motion } from "framer-motion";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const ProjectImage = ({ src, alt, caption }: ProjectImageProps) => {
  return (
    <motion.figure
      className="my-10 -mx-6 md:-mx-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground mt-3 px-6 md:px-12 text-center">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

export default ProjectImage;
