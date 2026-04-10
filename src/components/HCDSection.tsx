import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const VisualResearch = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/5 to-amber-500/5 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-colors duration-500">
    <motion.div
      className="w-32 h-24 bg-background/90 border border-orange-500/20 rounded-xl shadow-[0_4px_20px_-4px_rgba(249,115,22,0.1)] p-3 flex flex-col justify-end relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      {/* Chart line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 0,80 Q 25,60 50,70 T 100,30"
          fill="none"
          stroke="currentColor"
          className="text-orange-500"
          strokeWidth="3"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 100,30 L 100,100 L 0,100 Z"
          fill="currentColor"
          className="text-yellow-500"
          opacity="0.1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
      {/* User interview bubbles */}
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 left-3 w-10 h-6 bg-background border border-yellow-500/30 rounded-lg rounded-bl-sm shadow-sm flex items-center justify-center z-10"
      >
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-orange-500/50 rounded-full" />
          <div className="w-1 h-1 bg-orange-500/50 rounded-full" />
          <div className="w-1 h-1 bg-orange-500/50 rounded-full" />
        </div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-8 right-2 w-8 h-5 bg-background border border-amber-500/30 rounded-lg rounded-br-sm shadow-sm flex items-center justify-center z-10"
      >
        <div className="w-4 h-1 bg-amber-500/50 rounded-full" />
      </motion.div>
    </motion.div>
  </div>
);

const VisualDefine = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-colors duration-500">
    {/* Flowchart/Tree structure */}
    <div className="relative flex flex-col items-center gap-4 mt-2">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-16 h-8 bg-amber-500/10 border border-amber-500/30 rounded-md flex items-center justify-center shadow-sm z-10 relative"
      >
        <div className="w-8 h-1.5 bg-amber-500/50 rounded-full" />
        {/* Connection line down */}
        <div className="absolute -bottom-4 left-1/2 w-px h-4 bg-amber-500/30" />
      </motion.div>
      
      <div className="flex gap-6 relative">
        {/* Horizontal connection line */}
        <div className="absolute -top-4 left-[25%] right-[25%] h-px bg-amber-500/30" />
        {/* Vertical connection lines */}
        <div className="absolute -top-4 left-[25%] w-px h-4 bg-amber-500/30" />
        <div className="absolute -top-4 right-[25%] w-px h-4 bg-amber-500/30" />

        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          className="w-14 h-16 bg-background/90 border border-amber-500/20 rounded-md shadow-sm flex flex-col p-2 gap-1.5 z-10 relative overflow-hidden"
        >
          <div className="w-full h-4 bg-amber-500/10 rounded-[3px]" />
          <div className="w-full h-1.5 bg-muted-foreground/20 rounded-full mt-auto" />
          <div className="w-2/3 h-1.5 bg-muted-foreground/20 rounded-full" />
          {/* Animated scanline */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500/30"
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          className="w-14 h-16 bg-background/90 border border-amber-500/20 rounded-md shadow-sm flex flex-col p-2 gap-1.5 z-10 relative overflow-hidden"
        >
          <div className="w-full h-4 bg-amber-500/10 rounded-[3px]" />
          <div className="w-5/6 h-1.5 bg-muted-foreground/20 rounded-full mt-auto" />
          <div className="w-1/2 h-1.5 bg-muted-foreground/20 rounded-full" />
        </motion.div>
      </div>
    </div>
  </div>
);

const VisualPrototype = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500/5 to-yellow-500/5 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 transition-colors duration-500 overflow-hidden">
    <motion.div
      className="w-36 h-24 bg-background/90 border border-orange-500/20 rounded-xl shadow-[0_4px_20px_-4px_rgba(249,115,22,0.15)] p-3 flex flex-col gap-2 relative"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex justify-between items-center mb-1">
        <div className="w-14 h-2 bg-orange-500/40 rounded-full" />
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
        </div>
      </div>
      
      {/* List item skeleton */}
      <div className="w-full h-3 bg-muted-foreground/10 rounded-sm" />
      
      {/* Interactive Toggle Row */}
      <div className="flex justify-between items-center mt-1 p-2 bg-orange-500/5 rounded-lg border border-orange-500/10">
        <div className="flex flex-col gap-1.5 w-1/2">
            <div className="w-full h-1.5 bg-orange-500/40 rounded-full" />
            <div className="w-2/3 h-1 bg-muted-foreground/20 rounded-full" />
        </div>
        <motion.div 
          className="w-8 h-4 rounded-full p-0.5 flex items-center shadow-inner"
          animate={{ backgroundColor: ["rgba(249, 115, 22, 0.1)", "rgba(249, 115, 22, 0.8)", "rgba(249, 115, 22, 0.1)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-3 h-3 bg-white rounded-full shadow-sm"
            animate={{ x: [0, 16, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 1] }}
          />
        </motion.div>
      </div>

      {/* Animated Cursor */}
      <motion.div
        className="absolute w-5 h-5 z-20"
        animate={{ 
          x: [20, 95, 20], 
          y: [30, 25, 30],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 1] }}
      >
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground drop-shadow-md">
           <path d="M4 4L9 20L12 14L18 17L20 13L14 10L19 5L4 4Z" fill="currentColor" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
         </svg>
         {/* Click Ripple Effect */}
         <motion.div 
            className="absolute top-0 left-0 w-2 h-2 rounded-full border border-orange-500/50"
            animate={{ scale: [0, 3, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 1] }}
            style={{ x: -2, y: -2 }}
         />
      </motion.div>
    </motion.div>
  </div>
);

const VisualTest = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/5 to-orange-500/5 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-colors duration-500 gap-4">
    {/* Option A */}
    <motion.div
      className="w-16 h-24 bg-background/60 border border-muted-foreground/20 rounded-xl flex flex-col items-center pt-3 p-2 relative shadow-sm"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
    >
      <div className="w-8 h-8 rounded-full bg-muted-foreground/10 mb-2.5" />
      <div className="w-full h-1.5 bg-muted-foreground/10 rounded-full mb-1.5" />
      <div className="w-3/4 h-1.5 bg-muted-foreground/10 rounded-full mb-3" />
      <div className="w-full h-4 bg-muted-foreground/10 rounded-md mt-auto" />
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase font-display font-medium text-muted-foreground/50 bg-background px-1">A</span>
    </motion.div>

    {/* VS text */}
    <div className="text-xs font-bold text-muted-foreground/30 font-display italic">VS</div>

    {/* Option B (Winning) */}
    <motion.div
      className="w-16 h-24 bg-background/95 border border-orange-500/40 rounded-xl flex flex-col items-center pt-3 p-2 relative shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1], delay: 0.1 }}
    >
      <div className="w-8 h-8 rounded-full bg-orange-500/10 mb-2.5 relative">
        <div className="absolute inset-1 bg-orange-500/20 rounded-full" />
      </div>
      <div className="w-full h-1.5 bg-orange-500/30 rounded-full mb-1.5" />
      <div className="w-3/4 h-1.5 bg-orange-500/30 rounded-full mb-3" />
      <div className="w-full h-4 bg-orange-500/80 rounded-md mt-auto shadow-[0_2px_8px_rgba(249,115,22,0.4)]" />
      
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase font-display font-bold text-orange-500 bg-background px-1 rounded-sm">B</span>
      
      {/* Success Badge */}
      <motion.div 
        className="absolute -top-3 -right-4 bg-gradient-to-tr from-orange-400 to-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md z-10 border border-white/20"
        animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        +84%
      </motion.div>
    </motion.div>
  </div>
);

const processes = [
  {
    id: "01",
    title: "利用状況の把握",
    subtitle: "Research & Empathize",
    description: "ユーザーインタビューや行動観察を通じ、表面化していない本質的な課題と潜在的ニーズを発見します。",
    Visual: VisualResearch,
    details: {
      overview: "ターゲットユーザーの深層心理や行動パターンを解明します。単なるヒアリングではなく、なぜその行動をとるのかという「Why」を掘り下げます。",
      methods: ["ユーザーインタビュー", "デプスインタビュー（行動観察）", "アンケート調査", "競合調査"],
      outputs: ["ペルソナ", "カスタマージャーニーマップ", "エンパシーマップ", "ユーザーリサーチレポート"],
    }
  },
  {
    id: "02",
    title: "要求事項の定義",
    subtitle: "Define Requirements",
    description: "ユーザーの目標とビジネスの目標をすり合わせ、本当に解決すべきコアとなる要件を定義します。",
    Visual: VisualDefine,
    details: {
      overview: "リサーチ結果をもとに「本当に解決すべき本質的な課題」を特定し、プロダクトが提供するコアバリュー（価値）を定義します。ビジネス要件とユーザー要件のバランスを取ります。",
      methods: ["課題の再定義", "コンセプト設計", "情報アーキテクチャ（IA）設計"],
      outputs: ["ユーザーストーリー", "要件定義書", "サイトマップ", "UIフローチャート"],
    }
  },
  {
    id: "03",
    title: "設計とプロトタイピング",
    subtitle: "Ideate & Prototype",
    description: "課題解決のためのアイデアを視覚化し、素早く操作可能なプロトタイプを作成して仮説を形にします。",
    Visual: VisualPrototype,
    details: {
      overview: "要件定義に基づき、ユーザーが直感的に操作できるインターフェースへと視覚化します。ワイヤーフレームによる情報設計から始まり、実際の操作感やインタラクションを検証可能な高忠実度（High-Fi）のプロトタイプまで構築します。",
      methods: ["ワイヤーフレーム作成", "UIデザイン（表層設計）", "インタラクション設計", "ユーザビリティレビュー"],
      outputs: ["ワイヤーフレーム", "UIモックアップ", "UIコンポーネント", "クリッカブルプロトタイプ（Figma）"],
    }
  },
  {
    id: "04",
    title: "評価と検証",
    subtitle: "Test & Evaluate",
    description: "実際のユーザーによるユーザビリティテストを行い、得られたフィードバックに基づき体験を洗練させます。",
    Visual: VisualTest,
    details: {
      overview: "作成したプロトタイプを実際のターゲットユーザーに触ってもらい、使いやすさや目標の達成しやすさを検証します。得られたフィードバックから反復的に（Iterative）改善を行い、品質を高めます。",
      methods: ["ユーザビリティテスト", "ヒューリスティック評価", "A/Bテスト"],
      outputs: ["検証レポート", "定量的データ分析結果", "改善アクションリスト（UI改善案）"],
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProcessCard = ({ 
  process, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  process: typeof processes[0], 
  index: number,
  isExpanded: boolean,
  onToggle: () => void
}) => {
  return (
    <motion.div
      variants={itemVariants}
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`group relative overflow-hidden backdrop-blur-sm border rounded-2xl transition-all duration-500 flex flex-col ${
        isExpanded ? "bg-secondary/50 border-primary/30 shadow-[0_8px_30px_-4px_rgba(var(--primary),0.1)] h-auto" : "bg-secondary/30 border-border/50 hover:bg-secondary/50 h-[340px] md:h-[420px]"
      }`}
    >
      {/* Number indicator */}
      <div className="absolute top-4 right-5 text-4xl md:text-5xl font-display font-bold text-primary/5 transition-colors duration-500 group-hover:text-primary/10 select-none z-0">
        {process.id}
      </div>

      <div className="p-5 md:p-6 pb-1 md:pb-3 flex-1 flex flex-col relative z-20">
        {/* Graphical Illustration Area */}
        <div className="relative w-full h-32 md:h-36 mb-5 rounded-xl bg-background/50 border border-white/5 overflow-hidden z-10 transition-transform duration-500 shrink-0">
          <process.Visual />
        </div>

        <div className="relative z-10 flex flex-col flex-1">
          <h3 className="text-lg md:text-xl font-display font-semibold mb-1 flex items-baseline gap-2">
            {process.title}
          </h3>
          <p className="text-primary tracking-widest text-[10px] md:text-xs font-display uppercase mb-3 opacity-80">
            {process.subtitle}
          </p>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body">
            {process.description}
          </p>
          
          <button 
            onClick={onToggle}
            className="mt-4 self-start text-xs font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            {isExpanded ? "閉じる" : "詳しく見る"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={14} />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Accordion Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-background/50 border-t border-border/50"
          >
            <div className="p-5 md:p-6 text-sm text-foreground space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  概要
                </h4>
                <p className="text-muted-foreground leading-relaxed">{process.details.overview}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    具体的な手法
                  </h4>
                  <ul className="space-y-1">
                    {process.details.methods.map((method, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted-foreground/40 before:mt-[7px] before:shrink-0">
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    主な成果物
                  </h4>
                  <ul className="space-y-1">
                    {process.details.outputs.map((output, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted-foreground/40 before:mt-[7px] before:shrink-0">
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HCDSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="hcd-philosophy" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/5 blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 font-display text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Design Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 flex flex-col gap-2"
          >
            <span>Human-Centered Design</span>
            <span className="text-xl md:text-2xl lg:text-3xl font-normal text-muted-foreground/80">
              人間中心設計
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed"
          >
            ユーザーの真の課題を見極め、ビジネス目標と直感的な体験を繋ぐ設計プロセス。
            美しさだけでなく、「使いやすさ」と「目的達成」を重視したプロセスを用いてプロダクトを形にします。
          </motion.p>
        </div>

        {/* Custom Process Flow line between cards for larger screens */}
        <div className="relative">
          {/* Subtle connecting animated line behind the grid */}
          <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 items-start"
          >
            {processes.map((process, index) => (
              <div key={process.id} className="relative">
                <ProcessCard 
                  process={process} 
                  index={index} 
                  isExpanded={activeId === process.id}
                  onToggle={() => setActiveId(activeId === process.id ? null : process.id)}
                />
                
                {/* Arrow Flow Indicator pointing to the next step */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/3 -right-6 z-20 w-8 h-8 items-center justify-center text-primary/30 pointer-events-none">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                )}
                {/* Flow indicator for mobile/tablet */}
                {index < processes.length - 1 && (
                  <div className="flex lg:hidden justify-center my-3 relative z-20 text-primary/30 pointer-events-none md:even:hidden md:odd:flex md:odd:col-span-2 md:odd:rotate-90 md:my-0 md:absolute md:top-1/2 md:-right-6 md:-translate-y-1/2 md:w-8 md:h-8 md:items-center">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      className="md:hidden"
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      className="hidden md:block"
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HCDSection;
