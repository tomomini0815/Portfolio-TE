import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { TextReveal } from "./animations/TextReveal";
import { Magnetic } from "./animations/MagneticButton";
import { AnimatedBackground } from "./animations/AnimatedBackground";
import { GrainOverlay } from "./animations/GrainOverlay";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Letter-by-letter reveal animation
  const title = "Design that moves people.";
  const titleWords = title.split(" ");

  // Marquee phrases
  const marqueeText = [
    "User-Centered Design",
    "Pixel Perfect",
    "Seamless Experience",
    "Innovative Solutions",
    "Creative Excellence",
  ];

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
          {/* Interactive Mouse Glow (Pro Max Layer) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-30 lg:opacity-60"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, hsl(var(--primary) / 0.15), transparent 80%)`,
        }}
      />

      {/* Ambient Orbs (Slow background motion) */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0"
      />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="container relative z-10 pt-24 md:pt-48 pb-20 lg:py-0 min-h-screen flex items-center">
        <div className="relative w-full">
          {/* Main Visual: Dashboard (Absolute Background Layer) */}
          <div className="absolute right-[-20%] lg:right-[-10%] top-1/2 -translate-y-1/2 w-[120%] lg:w-[60%] h-[100%] lg:h-[120%] pointer-events-none z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full relative"
              >
                {/* Large Radial Glow */}
                <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full" />
                
                <div 
                  className="w-full h-full overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle at 40% 50%, black, transparent 85%)',
                    WebkitMaskImage: 'radial-gradient(circle at 40% 50%, black, transparent 85%)',
                  }}
                >
                  <img 
                    src="/hero-dashboard.png" 
                    alt="" 
                    className="w-full h-full object-contain opacity-25 lg:opacity-80"
                  />
                </div>

                {/* Floating HUD Elements (Elite Detail) */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[15%] right-[15%] w-32 h-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl p-3 shadow-2xl hidden xl:flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="flex-1 space-y-1.5">
                    <div className="w-full h-1 bg-white/10 rounded-full" />
                    <div className="w-[60%] h-1 bg-primary/40 rounded-full" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[20%] left-[5%] w-44 h-28 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl hidden xl:block"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[9px] text-primary/70 font-display tracking-[0.2em] uppercase">System Insights</div>
                    <motion.div 
                       animate={{ opacity: [1, 0.5, 1] }} 
                       transition={{ duration: 2, repeat: Infinity }}
                       className="text-[8px] font-mono text-primary/50"
                    >
                      LIVE_FEED
                    </motion.div>
                  </div>
                  <div className="flex gap-1.5 items-end h-10 mb-2">
                    {[30, 60, 40, 80, 50, 70, 45].map((h, i) => (
                      <motion.div 
                        key={i} 
                        animate={{ height: [`${h}%`, `${Math.min(100, h + 20)}%`, `${h}%`] }}
                        transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-sm" 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground/50">
                    <span>OPS: 2.4k/s</span>
                    <span>LAT: 12ms</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="max-w-5xl relative z-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primary font-display text-sm md:text-base font-medium tracking-[0.4em] uppercase mt-8 lg:mt-16 mb-4 lg:mb-8"
            >
              UI/UX Designer & App Developer
            </motion.p>
  
            <TextReveal 
              className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-[0.95] tracking-tight mb-10 lg:mb-12" 
              delay={0.2} 
              wordMode={false}
              highlightWord="moves"
            >
              {title}
            </TextReveal>
  
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-muted-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed font-body backdrop-blur-sm mb-12 lg:mb-16"
            >
              ユーザー体験を中心に据えたデザインで、<br />
              人の心を動かすプロダクトを創り出します。
            </motion.p>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-row gap-3 sm:gap-6 lg:gap-8"
            >
              <Magnetic strength={30}>
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 md:px-10 md:py-4 rounded-full font-display font-medium text-[11px] md:text-sm tracking-widest overflow-hidden shadow-xl shadow-primary/20"
                >
                  <span className="relative z-10">VIEW PROJECTS</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 translate-y-[100%] rounded-[50%]"
                    whileHover={{ translateY: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Magnetic>
              <Magnetic strength={30}>
                <a
                  href="#about"
                  className="group relative inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md text-foreground px-5 py-3 md:px-10 md:py-4 rounded-full font-display font-medium text-[11px] md:text-sm tracking-widest overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <span className="relative z-10">ABOUT ME</span>
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-display font-bold tracking-[0.3em] uppercase text-primary/50 mb-1">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/20"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
