import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/lib/storage";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onImageClick: (images: string[], startIndex: number) => void;
}

const ProjectCard = ({ project, index, onImageClick }: ProjectCardProps) => {
  const hasImages = project.images.length > 0;
  const cardRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group surface-elevated rounded-2xl overflow-hidden card-shadow hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image area with parallax */}
      <div
        className="aspect-[16/10] bg-secondary relative overflow-hidden cursor-pointer"
        onClick={() => hasImages && onImageClick(project.images, 0)}
      >
        {hasImages ? (
          <motion.img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-display font-bold text-primary">
                  {project.title[0]}
                </span>
              </div>
              <p className="text-muted-foreground text-xs font-body">No preview</p>
            </motion.div>
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Image count badge */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-xs px-2.5 py-1 rounded-full font-display"
          >
            +{project.images.length - 1}
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.2 }}
              className="text-primary text-xs font-display font-medium tracking-wider uppercase mb-1"
            >
              {project.category}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.25 }}
              className="text-xl font-display font-semibold"
            >
              {project.title}
            </motion.h3>
          </div>
          {project.link && project.link !== '#' && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground hover:text-primary transition-colors mt-1"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.3 }}
          className="text-muted-foreground text-sm leading-relaxed font-body mb-4"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.35 }}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag, tagIdx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 + 0.4 + tagIdx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-display"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
