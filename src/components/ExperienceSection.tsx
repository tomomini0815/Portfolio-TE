import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import type { Experience } from "@/lib/storage";
import ImageLightbox from "./ImageLightbox";
import { TextReveal } from "./animations/TextReveal";
import { ChevronDown } from "lucide-react";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  if (experiences.length === 0) return null;

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <section ref={sectionRef} id="experience" className="py-32 bg-secondary/30 relative overflow-hidden">
        {/* Animated background element */}
        <motion.div
          style={{ opacity: backgroundOpacity }}
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
              Experience <span className="text-primary/90 ml-2 font-bold tracking-normal text-sm lowercase leading-none">| 2021 — 2026</span>
            </p>
            <div className="flex flex-col md:flex-row md:items-baseline gap-4">
              <TextReveal className="font-display text-4xl md:text-5xl font-bold" wordMode={false}>
                これまでの経歴
              </TextReveal>
              <motion.span 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-lg md:text-xl font-display font-medium"
              >
                — デザイナー歴約5年
              </motion.span>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
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
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="surface-elevated rounded-2xl overflow-hidden card-shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-primary/20 bg-card/40 backdrop-blur-md"
                  >
                    <div className="p-[12px] md:p-8">
                      <div className="flex flex-col lg:flex-row gap-3 md:gap-10">
                        {/* LEFT: Image Block */}
                        <div className="w-full lg:w-[52%] flex-shrink-0 space-y-3 md:space-y-10">
                          {/* Main Large Image */}
                          {exp.images && exp.images.length > 0 && (
                            <div 
                              className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-xl group/main cursor-pointer bg-black/40 relative"
                              onClick={() => setLightbox({ images: exp.images!, index: 0 })}
                            >
                              <img 
                                src={exp.images[0]} 
                                alt={`${exp.company} Main`}
                                className="w-full h-full object-contain transition-transform duration-700 group-hover/main:scale-105"
                              />
                              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md translate-y-2 group-hover/main:translate-y-0 transition-transform duration-500">
                                  拡大する
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Thumbnails Grid */}
                          {exp.images && exp.images.length > 1 && (
                            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-2 pt-1">
                              {exp.images.slice(1).map((img, idx) => (
                                <div 
                                  key={idx}
                                  className="aspect-square rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-primary/50 transition-all hover:scale-105 bg-black/20 group/thumb relative"
                                  onClick={() => setLightbox({ images: exp.images!, index: idx + 1 })}
                                >
                                  <img 
                                    src={img} 
                                    alt={`${exp.company} Thumbnail ${idx + 1}`}
                                    className="w-full h-full object-cover opacity-60 group-hover/thumb:opacity-100 transition-opacity"
                                  />
                                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
 
                        {/* RIGHT: Text Content */}
                        <div className="flex-grow min-w-0 flex flex-col pt-2">
                          <div className="flex items-center gap-3 mb-3 md:mb-4">
                            <span className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary font-display font-bold tracking-widest uppercase border border-primary/20">
                              {exp.period}
                            </span>
                          </div>
                          
                          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4 leading-tight text-white group-hover:text-primary/90 transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-sm md:text-base text-primary/80 font-display font-medium mb-3 md:mb-6">
                            {exp.role}
                          </p>
 
                          <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-4 md:mb-8 whitespace-pre-wrap">
                            {exp.description}
                          </p>

                          {/* Extra Details Box */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 md:p-6 rounded-xl bg-stone-900/40 border border-white/5 mb-4 md:mb-8">
                            {exp.overview && (
                              <div className="space-y-2">
                                <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-primary/50">制作ポイント</h4>
                                <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed font-body">
                                  {exp.overview}
                                </p>
                              </div>
                            )}
                            {exp.team && (
                              <div className="space-y-2">
                                <h4 className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-primary/50">制作体制</h4>
                                <p className="text-xs md:text-sm text-muted-foreground/90 leading-relaxed font-body">
                                  {exp.team}
                                </p>
                              </div>
                            )}
                          </div>
 
                          {/* Tags Section */}
                          {exp.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[9px] font-display font-bold px-3 py-1.5 rounded-lg bg-white/5 text-muted-foreground border border-white/5 tracking-[0.15em] hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
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
