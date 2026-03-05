import { motion } from "framer-motion";

import { type Experience } from "@/lib/storage";
import ImageLightbox from "./ImageLightbox";
import { useState } from "react";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  if (experiences.length === 0) return null;

  return (
    <section id="experience" className="py-32">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            これまでの経歴
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[17px] md:left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background" />

                <div className="surface-elevated rounded-2xl overflow-hidden">
                  {exp.image && (
                    <div
                      className="h-48 overflow-hidden cursor-pointer"
                      onClick={() => setLightbox({ images: [exp.image!], index: 0 })}
                    >
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <p className="text-xs font-display text-primary font-medium tracking-wider uppercase mb-2">
                      {exp.period}
                    </p>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground font-display mb-3">
                      {exp.role}
                    </p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-display px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        images={lightbox?.images ?? []}
        currentIndex={lightbox?.index ?? 0}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
};

export default ExperienceSection;
