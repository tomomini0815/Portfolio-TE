import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Sparkles, Code, MoveRight } from "lucide-react";

const DemoAppSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // To show a loading state for iframe to prevent abrupt popping
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background styling with a subtle green tint for ZenLiving theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-50/30 dark:via-emerald-950/10 to-background pointer-events-none" />
      
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Top Badge (Text Only) */}
            <div className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] mb-2">
              DEMO APP / デモアプリ
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-sm leading-[1.15] md:leading-tight mb-4">
              実際に触れる<br/>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                プロトタイプ体験
              </span>
            </h2>
            
            {/* Description Area */}
            <div className="w-full max-w-xl flex flex-col gap-4">
              <p className="text-foreground/80 dark:text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-bold tracking-wide">
                「住まう」と「泊まる」が融合した、和風でモダンな宿泊予約アプリ『ZenLiving』のプロトタイプです。
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-6">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 hover:bg-emerald-500/20 transition-colors shadow-sm">
                <Code className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-sm text-foreground/90">Flutter App</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 hover:bg-emerald-500/20 transition-colors shadow-sm">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-sm text-foreground/80">Touch Enabled</span>
              </div>
            </div>

            {/* Combined Instruction & Warning Card */}
            <div className="mt-8 overflow-visible relative group w-full max-w-xl">
              {/* Premium Diffused Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/15 via-teal-400/15 to-emerald-500/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative bg-slate-900/90 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl transition-all duration-300 group-hover:border-emerald-500/30">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-400 shadow-inner">
                    <Smartphone className="w-6 h-6 animate-bounce" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="py-1">
                      <p className="text-yellow-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest opacity-80 mb-0.5">INSTRUCTION</p>
                      <p className="text-white dark:text-slate-100 font-bold text-[11px] sm:text-[13px] md:text-sm tracking-tight whitespace-nowrap">
                        スマホの画面内で<span className="text-yellow-400">スクロール・タップ</span>して操作できます
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-3" />
                
                {/* Note Content Integrated */}
                <div className="flex items-center gap-2.5 px-1">
                  <div className="flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 rounded-full border border-yellow-400/40 text-yellow-400 text-[9px] font-bold">!</div>
                  <p className="text-[10px] sm:text-xs text-yellow-400/80 dark:text-yellow-400/90 leading-relaxed font-medium">
                    一部の主要機能のみ動作する簡易デモ版です。全体の雰囲気や操作感をご体験ください。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Iframe Mockup */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            style={{ y, opacity }}
          >
            <div className="relative group perspective-1000">
              {/* Glow effect around the phone */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Phone Frame */}
              <div className="relative w-[340px] sm:w-[380px] lg:w-[400px] h-[720px] sm:h-[780px] lg:h-[820px] bg-black rounded-[3rem] p-3 shadow-2xl ring-1 ring-border border-4 border-slate-900/40 dark:border-slate-800 transition-all duration-300">
                {/* Notch / Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20 flex justify-center items-end pb-1.5">
                  <div className="w-16 h-1.5 rounded-full bg-slate-800" />
                </div>
                
                {/* Screen Content */}
                <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-background">
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-emerald-50 dark:bg-emerald-950">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Loading Prototype...</span>
                      </div>
                    </div>
                  )}
                  
                  {/* The actual Flutter Web app iframe */}
                  <iframe 
                    src="https://zenliving-flutter.vercel.app/"
                    className="w-full h-full border-none"
                    style={{ opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
                    onLoad={() => setIframeLoaded(true)}
                    title="ZenLiving Interactive Prototype"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DemoAppSection;
