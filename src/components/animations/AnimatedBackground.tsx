import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bubble {
    id: number;
    size: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
    xMove1: number;
    yMove1: number;
    xMove2: number;
    yMove2: number;
    opacity: number;
    intensity: number;
}

export const AnimatedBackground = () => {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        // 人間中心設計を意識し、視覚的なノイズにならないようバブルの数を抑えめに設定
        const newBubbles = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            size: Math.random() * 8 + 3, // 3vw ~ 11vw
            top: Math.random() * 100, // 0% ~ 100%
            left: Math.random() * 100, // 0% ~ 100%
            duration: Math.random() * 20 + 30, // 30s ~ 50s (よりゆっくり動かす)
            delay: Math.random() * 5,
            xMove1: (Math.random() - 0.5) * 60,
            yMove1: (Math.random() - 0.5) * 60,
            xMove2: (Math.random() - 0.5) * 60,
            yMove2: (Math.random() - 0.5) * 60,
            opacity: Math.random() * 0.3 + 0.1, // 0.1 ~ 0.4
            intensity: Math.random() * 0.4 + 0.3, // 0.3 ~ 0.7
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
            {/* Ambient center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/5 blur-3xl opacity-50" />

            {/* Sphere 1 - Large, Top Right */}
            <motion.div
                className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full opacity-30 mix-blend-plus-lighter"
                style={{
                    top: "-10%",
                    right: "-5%",
                    background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.8), transparent 70%)",
                }}
                animate={{
                    y: [0, -40, 20, 0],
                    x: [0, 30, -10, 0],
                    scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Sphere 2 - Medium, Bottom Left */}
            <motion.div
                className="absolute w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full opacity-20 mix-blend-plus-lighter"
                style={{
                    bottom: "-5%",
                    left: "-10%",
                    background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.6), transparent 70%)",
                }}
                animate={{
                    y: [0, 50, -20, 0],
                    x: [0, -30, 40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            {/* Random Floating Bubbles */}
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full mix-blend-plus-lighter"
                    style={{
                        top: `${bubble.top}%`,
                        left: `${bubble.left}%`,
                        width: `${bubble.size}vw`,
                        height: `${bubble.size}vw`,
                        maxWidth: `${bubble.size * 12}px`,
                        maxHeight: `${bubble.size * 12}px`,
                        background: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / ${bubble.intensity}), transparent 70%)`,
                        opacity: bubble.opacity,
                    }}
                    animate={{
                        y: [0, bubble.yMove1, bubble.yMove2, 0],
                        x: [0, bubble.xMove1, bubble.xMove2, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: bubble.delay,
                    }}
                />
            ))}

            </div>
    );
};
