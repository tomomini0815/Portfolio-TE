import { motion } from "framer-motion";
import type { Project } from "@/lib/storage";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onImageClick: (images: string[], startIndex: number) => void;
}

const ProjectCard = ({ project, index, onImageClick }: ProjectCardProps) => {
  const hasImages = project.images.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group surface-elevated rounded-2xl overflow-hidden card-shadow hover:ring-1 hover:ring-primary/20 transition-all duration-500"
    >
      {/* Image area */}
      <div
        className="aspect-[16/10] bg-secondary relative overflow-hidden cursor-pointer"
        onClick={() => hasImages && onImageClick(project.images, 0)}
      >
        {hasImages ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-display font-bold text-primary">
                  {project.title[0]}
                </span>
              </div>
              <p className="text-muted-foreground text-xs font-body">No preview</p>
            </div>
          </div>
        )}

        {/* Image count badge */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-xs px-2.5 py-1 rounded-full font-display">
            +{project.images.length - 1}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-primary text-xs font-display font-medium tracking-wider uppercase mb-1">
              {project.category}
            </p>
            <h3 className="text-xl font-display font-semibold">{project.title}</h3>
          </div>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors mt-1"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed font-body mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-display"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
