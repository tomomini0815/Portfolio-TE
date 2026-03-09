import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import type { Experience } from "@/lib/storage";
import ImageLightbox from "./ImageLightbox";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  if (experiences.length === 0) return null;

  return (
    <>
      <section ref={sectionRef} id="experience" className="py-32 bg-secondary/30 relative overflow-hidden">
        {/* Animated background element */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]) }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="text-primary text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
              Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              これまでの経歴
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line - animated on scroll */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border overflow-hidden">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-primary to-primary/30"
              />
            </div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot - animated */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="absolute left-[17px] md:left-[23px] top-2 w-5 h-5 rounded-full bg-primary ring-4 ring-background"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="surface-elevated rounded-2xl overflow-hidden card-shadow hover:shadow-2xl transition-shadow duration-500"
                  >
                    {exp.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                        className="h-48 overflow-hidden cursor-pointer"
                        onClick={() => setLightbox({ images: [exp.image!], index: 0 })}
                      >
                        <motion.img
                          src={exp.image}
                          alt={exp.company}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}

                    <div className="p-6 overflow-hidden">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 + 0.25 }}
                        className="text-xs font-display text-primary font-medium tracking-wider uppercase mb-2"
                      >
                        {exp.period}
                      </motion.p>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="font-display text-lg font-semibold mb-1"
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 + 0.35 }}
                        className="text-sm text-muted-foreground font-display mb-3"
                      >
                        {exp.role}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.4 }}
                        className="text-sm text-muted-foreground font-body leading-relaxed mb-4"
                      >
                        {exp.description}
                      </motion.p>

                      {exp.tags.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: i * 0.15 + 0.45 }}
                          className="flex flex-wrap gap-2"
                        >
                          {exp.tags.map((tag, tagIdx) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.15 + 0.5 + tagIdx * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="text-xs font-display px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
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

export default ExperienceSection;
