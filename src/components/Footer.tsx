import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="relative overflow-hidden pt-16 pb-12 border-t border-border/30">

      {/* 背景：グラデーションオーブ */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-primary blur-3xl"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-6">

        {/* 区切り線 + ラベル */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 text-primary/40"
        >
          <div className="h-px w-10 bg-primary/20" />
          <span className="text-[10px] font-display font-bold tracking-[0.4em] uppercase">End of Portfolio</span>
          <div className="h-px w-10 bg-primary/20" />
        </motion.div>

        {/* メインコピー */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-foreground"
        >
          Thanks for{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative inline-block"
          >
            <span className="text-gradient">scrolling.</span>
            {/* アンダーライン装飾 */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left"
            />
          </motion.span>
        </motion.h2>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground/70 font-body text-base md:text-lg leading-relaxed max-w-md"
        >
          Let's make something{" "}
          <em className="not-italic text-foreground/90 font-medium">great</em>{" "}
          together.
        </motion.p>

        {/* ブランドロゴ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 mb-2"
        >
          <p className="font-display font-bold text-xl tracking-tight text-foreground/80">
            Portfolio<span className="text-primary">.</span>
          </p>
        </motion.div>

        {/* ボーダー区切り */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent origin-center"
        />

        {/* コピーライト */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-[11px] text-muted-foreground/40 font-body tracking-wider"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
};

export default Footer;
