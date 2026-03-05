import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/storage";
import ProjectCard from "./ProjectCard";
import ImageLightbox from "./ImageLightbox";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  return (
    <>
      <section id="projects" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-primary text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
              Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              個人開発プロジェクト
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onImageClick={openLightbox}
              />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body">
                プロジェクトがまだありません。管理画面から追加してください。
              </p>
            </div>
          )}
        </div>
      </section>

      <ImageLightbox
        images={lightbox?.images ?? []}
        currentIndex={lightbox?.index ?? 0}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />
    </>
  );
};

export default ProjectsSection;
