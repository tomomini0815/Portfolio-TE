import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { label: 'Design', items: ['Figma', 'Framer', 'Prototyping', 'Design System'] },
    { label: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { label: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { label: 'Backend', items: ['Node.js', 'Firebase', 'Supabase', 'PostgreSQL'] },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-primary text-xs font-display font-medium tracking-[0.3em] uppercase mb-4"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              体験を設計し、
              <br />
              コードで実現する。
            </motion.h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                UI/UXデザイナーとして、ユーザーリサーチからビジュアルデザイン、
                プロトタイピングまで一貫したデザインプロセスを実践しています。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                同時にアプリ開発者として、デザインを忠実に実装し、
                パフォーマンスとアクセシビリティを両立させたプロダクトを
                個人開発しています。
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="surface-elevated rounded-xl p-5 card-shadow hover:shadow-xl transition-shadow duration-500"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="font-display font-semibold text-sm text-primary mb-3"
                >
                  {skill.label}
                </motion.h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item, itemIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: i * 0.1 + 0.25 + itemIdx * 0.05,
                        duration: 0.5
                      }}
                      className="text-sm text-muted-foreground font-body"
                    >
                      {item}
                    </motion.li>
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
