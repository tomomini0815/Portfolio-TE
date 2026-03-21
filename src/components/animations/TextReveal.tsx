import { motion, Variants } from "framer-motion";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    wordMode?: boolean;
    highlightWord?: string;
}

export const TextReveal = ({ children, className = "", delay = 0, wordMode = true, highlightWord = "" }: TextRevealProps) => {
    // Split into words to handle wrapping correctly and align perfectly
    const words = children.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay * i
            },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: "110%",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h2
            style={{ display: "block" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {words.map((word, wIdx) => {
                const isH = highlightWord && word.toLowerCase().replace(/[.,!?;:]/g, '') === highlightWord.toLowerCase();
                
                return (
                    <span key={wIdx} style={{ display: "inline-block", verticalAlign: "bottom" }}>
                        {Array.from(word).map((c, cIdx) => (
                            <span key={cIdx} style={{ 
                                display: "inline-block", 
                                overflow: "hidden", 
                                paddingRight: "0.1em",
                                marginRight: "-0.1em",
                                paddingTop: "0.2em",
                                marginTop: "-0.2em",
                                verticalAlign: "bottom"
                            }}>
                                <motion.span
                                    variants={child}
                                    style={{ display: "inline-block", paddingRight: "0.05em" }}
                                >
                                    {isH && word.toLowerCase().includes(highlightWord.toLowerCase()) ? (
                                        <motion.span
                                            animate={{ y: [0, -12, 0] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: 0,
                                                delay: delay + (wIdx * 0.1) + (cIdx * 0.05),
                                                ease: [0.33, 1, 0.68, 1]
                                            }}
                                            style={{ display: "inline-block" }}
                                        >
                                            <span className="text-gradient relative">
                                                {c}
                                                <span className="absolute inset-0 text-shimmer" aria-hidden="true">
                                                    {c}
                                                </span>
                                            </span>
                                        </motion.span>
                                    ) : (
                                        <span style={{ display: "inline-block" }}>
                                            {c}
                                        </span>
                                    )}
                                </motion.span>
                            </span>
                        ))}
                        {/* Regular space that allows the browser to wrap correctly */}
                        {wIdx < words.length - 1 && (
                            <span style={{ display: "inline-block", width: "0.25em" }}>&nbsp;</span>
                        )}
                    </span>
                );
            })}
        </motion.h2>
    );
};
