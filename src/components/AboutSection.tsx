import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-xs font-display font-medium tracking-[0.3em] uppercase mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              体験を設計し、
              <br />
              コードで実現する。
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                UI/UXデザイナーとして、ユーザーリサーチからビジュアルデザイン、
                プロトタイピングまで一貫したデザインプロセスを実践しています。
              </p>
              <p>
                同時にアプリ開発者として、デザインを忠実に実装し、
                パフォーマンスとアクセシビリティを両立させたプロダクトを
                個人開発しています。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Design', items: ['Figma', 'Framer', 'Prototyping', 'Design System'] },
              { label: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
              { label: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
              { label: 'Backend', items: ['Node.js', 'Firebase', 'Supabase', 'PostgreSQL'] },
            ].map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="surface-elevated rounded-xl p-5"
              >
                <h3 className="font-display font-semibold text-sm text-primary mb-3">
                  {skill.label}
                </h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground font-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
