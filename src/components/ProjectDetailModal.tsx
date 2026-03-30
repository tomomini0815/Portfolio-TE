import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/storage";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen && project?.id === 'melodymuse' && project.images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3500);
      return () => clearInterval(interval);
    } else {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      setVideoError(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, project]);

  if (!project) return null;

  // Gradient colors per project
  const gradients: Record<string, string> = {
    ainance: "from-indigo-500/20 via-emerald-500/10 to-transparent",
    journify: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    lifebridge: "from-teal-500/20 via-emerald-500/10 to-transparent",
    melodymuse: "from-amber-500/20 via-orange-500/10 to-transparent",
  };

  const accentColors: Record<string, string> = {
    ainance: "text-emerald-400",
    journify: "text-cyan-400",
    lifebridge: "text-teal-400",
    melodymuse: "text-amber-400",
  };

  const borderColors: Record<string, string> = {
    ainance: "border-emerald-500/30",
    journify: "border-cyan-500/30",
    lifebridge: "border-teal-500/30",
    melodymuse: "border-amber-500/30",
  };

  const btnGradients: Record<string, string> = {
    ainance: "from-indigo-500 to-emerald-500",
    journify: "from-emerald-500 to-cyan-500",
    lifebridge: "from-teal-500 to-emerald-500",
    melodymuse: "from-amber-500 to-orange-500",
  };

  const gradient = gradients[project.id] || gradients.ainance;
  const accent = accentColors[project.id] || accentColors.ainance;
  const border = borderColors[project.id] || borderColors.ainance;
  const btnGrad = btnGradients[project.id] || btnGradients.ainance;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl border ${border} bg-card/80 backdrop-blur-2xl shadow-2xl`}
          >
            {/* Gradient accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-30 p-2 rounded-full bg-secondary/80 backdrop-blur-md hover:bg-surface-hover transition-colors shadow-sm"
            >
              <X size={20} />
            </motion.button>

            {/* Scrollable Container */}
            <div className="relative z-10 max-h-[92vh] md:max-h-[90vh] overflow-y-auto w-full">
              <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Video / Image */}
              <div className="p-0 md:p-8 flex items-center justify-center">
                <div className="w-full rounded-t-2xl md:rounded-2xl overflow-hidden bg-secondary/50 border-b md:border border-border/50 shadow-sm md:shadow-lg relative h-[250px] sm:h-[350px] md:h-[600px] flex-shrink-0">
                  {project.images.length > 0 ? (
                    project.id === 'melodymuse' ? (
                      <div className="relative w-full h-full bg-black/20">
                        <AnimatePresence>
                          <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} screenshot ${currentImageIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-full object-contain bg-secondary/20"
                          />
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div
                        className="flex flex-col w-full"
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: project.id === 'lifebridge' ? 30 : project.images.length * 5, // LifeBridgeの画像は非常に長いため特別に30秒かけてスクロール
                          ease: "linear",
                        }}
                      >
                        {/* シームレスなループのために画像を2周分展開 */}
                        {[...project.images, ...project.images].map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} screenshot ${idx}`}
                            className="w-full h-auto object-cover block shadow-sm border-b border-white/5 render-crisp"
                            style={{ 
                              imageRendering: '-webkit-optimize-contrast' as any,
                              clipPath: project.id === 'lifebridge' ? 'inset(0 2px 0 0)' : undefined 
                            }}
                          />
                        ))}
                      </motion.div>
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${btnGrad} flex items-center justify-center mx-auto mb-3`}>
                          <span className="text-3xl font-display font-bold text-white">
                            {project.title[0]}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">No preview available</p>
                      </div>
                    </div>
                  )}
                  
                  {/*上下のグラデーションオーバーレイでスクロールの境界を柔らかくする*/}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-secondary/80 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-secondary/80 to-transparent pointer-events-none z-10" />
                </div>
              </div>

              {/* Right: Details */}
              <div className="px-5 pt-5 pb-12 md:p-8 flex flex-col justify-center">
                {/* Category */}
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`${accent} text-xs font-display font-medium tracking-[0.2em] uppercase mb-2`}
                >
                  {project.category}
                </motion.p>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 flex items-baseline gap-2 md:gap-3 flex-wrap leading-tight">
                      <span>{project.title}</span>
                      {project.titleKatakana && (
                        <span className="text-base sm:text-lg md:text-xl font-body font-normal text-muted-foreground mt-1 md:mt-0">
                          {project.titleKatakana}
                        </span>
                      )}
                    </h2>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground text-sm md:text-base leading-relaxed font-body mb-6"
                >
                  {project.description}
                </motion.p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mb-6"
                  >
                    <p className="text-xs font-display font-medium tracking-wider uppercase text-muted-foreground mb-3">
                      主な機能
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <Sparkles size={14} className={`${accent} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-foreground/80 font-body">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1.5 rounded-full border ${border} bg-secondary/50 text-secondary-foreground font-display`}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                {project.link && project.link !== '#' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${btnGrad} text-white px-6 py-3 md:py-3.5 rounded-full font-display font-medium text-sm md:text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg w-full md:w-auto`}
                    >
                      <ExternalLink size={18} />
                      サイトを見る
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
