import { motion } from "framer-motion";
import { TextReveal } from "./animations/TextReveal";

const AboutSection = () => {
  const skills = [
    { label: 'Design Tools', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
    { label: 'Web & App Design', items: ['Web App UI/UX', 'Mobile App UI/UX', 'Prototyping', 'Design System'] },
    { label: 'Frontend / CMS', items: ['HTML / CSS / JS (基礎知識)', 'WordPress', 'Git / GitHub'] },
    { label: 'Soft Skills', items: ['ユーザーリサーチ', 'ユーザビリティテスト', 'ディレクション'] },
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
            <TextReveal className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" delay={0.1} wordMode={false}>
              ユーザーの想いと、プロダクトの価値を繋ぐ。
            </TextReveal>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
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
                サクサクとした操作感や分かりやすい設計を追求しています。
                一つひとつのアイデアが、使う人の日常に心地よく馴染んでいくところまで、
                丁寧に作り上げることを大切にしています。
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
