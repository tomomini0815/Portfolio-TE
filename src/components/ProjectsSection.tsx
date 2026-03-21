import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/storage";
import ProjectCard from "./ProjectCard";
import ImageLightbox from "./ImageLightbox";
import ProjectDetailModal from "./ProjectDetailModal";
import { TextReveal } from "./animations/TextReveal";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  const openDetail = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <section id="projects" className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="text-primary text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
              Projects
            </p>
            <TextReveal className="font-display text-4xl md:text-5xl font-bold" wordMode={false}>
              個人開発プロジェクト
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground text-base mt-4 max-w-2xl font-body"
            >
              AI技術を活用した実用的なWebアプリケーションを個人で設計・開発・運用しています
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onImageClick={openLightbox}
                onOpenDetail={openDetail}
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

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
