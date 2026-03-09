import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Horizontal Marquee */}
      <div className="absolute top-1/3 left-0 right-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 whitespace-nowrap text-[8vw] font-display font-bold opacity-5"
        >
          {[...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-primary font-display text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            UI/UX Designer & App Developer
          </motion.p>

          {/* Letter-by-letter reveal */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 overflow-hidden">
            {titleWords.map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block mr-4">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: wordIdx * 0.15 + charIdx * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      word === "moves" ? "text-gradient inline-block" : "inline-block"
                    }
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed font-body"
          >
            ユーザー体験を中心に据えたデザインと開発で、
            人の心を動かすプロダクトを創り出します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-4 mt-10"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-display font-medium text-sm tracking-wide overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-primary-foreground/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a
              href="#about"
              className="group relative inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-display font-medium text-sm tracking-wide overflow-hidden"
            >
              <span className="relative z-10">About Me</span>
              <motion.div
                className="absolute inset-0 bg-secondary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
