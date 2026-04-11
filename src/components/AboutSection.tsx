import { motion } from "framer-motion";
import { TextReveal } from "./animations/TextReveal";

const AboutSection = () => {
  const skills = [
    { label: 'Design Tools', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
    { label: 'Web & App Design', items: ['Web App UI/UX', 'Mobile App UI/UX', 'Prototyping', 'Design System'] },
    { label: 'Frontend / CMS', items: ['HTML / CSS / JS (基礎知識)', 'WordPress', 'Git / GitHub'] },
    { label: 'Other Tools / AI', items: ['Notion / Miro', 'Slack / Chatwork', 'GoogleMeet / Zoom', '各種AIツール'] },
    { 
      label: 'Mindset / 大切にしていること', 
      items: [
        '本質的な課題解決: 要望の背景にある「本当のニーズ」から設計を開始します。',
        '一貫した体験設計: ブランドやシステムのトーンを揃え、どこを触っても違和感のない体験を作ります。',
        '柔軟な思考と対応: 変化やフィードバックをポジティブに捉え、より良い着地点を模索します。'
      ] 
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative">
        {/* Decorative Spheres - Replicating Hero section style */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] hidden md:block pointer-events-none z-0">
          <motion.div
            className="w-full h-full rounded-full opacity-40 mix-blend-plus-lighter"
            style={{
              background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.8), transparent 70%)",
            }}
            animate={{
              y: [0, -60, 30, 0],
              x: [0, 40, -20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Secondary smaller orb for more depth */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20 mix-blend-plus-lighter"
            style={{
              background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.6), transparent 70%)",
            }}
            animate={{
              y: [0, 40, -20, 0],
              x: [0, -30, 30, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Intro Section - Relative to keep it above the spheres */}
        <div className="max-w-3xl mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-yellow-400 text-xs font-display font-bold tracking-[0.4em] uppercase">
              About
            </span>
            <div className="h-px w-12 bg-yellow-400/30" />
          </motion.div>
          
          <TextReveal className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-[1.15]" delay={0.1} wordMode={false}>
            ユーザーの想いと、プロダクトの価値を繋ぐ。
          </TextReveal>
          
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed md:text-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Web/Mobile App のUI/UXデザイナーとして、SaaSサービスのダッシュボード制作を中心に、
              ユーザーの行動心理を可視化し、直感的で使いやすいインターフェース設計を心がけています。
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              「使う人がストレスなく効率的に作業できること」を第一に、
              サクサクとした操作感や分かりやすい設計を追求。
              一つひとつのアイデアが、使う人の日常に心地よく馴染んでいくところまで、
              丁寧に作り上げることを大切にしています。
            </motion.p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Mindset - Slimmer padding */}
          <div className="w-full">
            {skills.filter(s => s.label.includes('Mindset')).map((skill) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="surface-elevated rounded-2xl p-6 md:p-8 card-shadow border border-white/5 relative group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none transition-opacity group-hover:opacity-[0.06] duration-500">
                  <img src="/favicon.png" alt="" className="w-24 h-24 grayscale brightness-0 invert" />
                </div>
                
                <h3 className="font-display font-bold text-lg text-yellow-400 mb-6 flex items-center gap-4">
                  {skill.label}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
                  {skill.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + (0.05 * itemIdx), duration: 0.5 }}
                    >
                      {item.includes(': ') ? (
                        <>
                          <div className="flex items-baseline gap-2.5 mb-2">
                            <span className="text-yellow-400/40 font-display font-medium text-xs">0{itemIdx + 1}</span>
                            <span className="text-foreground font-bold text-base">{item.split(': ')[0]}</span>
                          </div>
                          <span className="text-sm text-muted-foreground/90 leading-relaxed font-body block pl-6 border-l border-yellow-400/10">
                            {item.split(': ')[1]}
                          </span>
                        </>
                      ) : (
                        item
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Other Skills - Even slimmer and tighter bottom spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.filter(s => !s.label.includes('Mindset')).map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="surface-elevated rounded-xl p-5 card-shadow border border-white/5 flex flex-col"
              >
                <h3 className="font-display font-bold text-[10px] text-yellow-400 mb-4 uppercase tracking-[0.2em] opacity-80">
                  {skill.label}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-muted-foreground font-body flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-yellow-400/40 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
