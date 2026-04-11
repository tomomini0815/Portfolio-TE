import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export const CustomCursor = () => {
    const isMobile = useIsMobile();
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // モバイルではカスタムカーソルを無効化
        if (isMobile) return;

        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactable = target.closest("a, button, [data-cursor-text]");

            if (interactable) {
                setIsHovering(true);
                const text = interactable.getAttribute("data-cursor-text");
                setCursorText(text || "");
            } else {
                setIsHovering(false);
                setCursorText("");
            }
        };

        window.addEventListener("pointermove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("pointermove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY, isMobile]);

    // モバイルでは何もレンダリングしない
    if (isMobile) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[100] flex items-center justify-center text-[10px] font-display font-bold text-primary-foreground overflow-hidden mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%"
            }}
            animate={{
                width: isHovering ? (cursorText ? 80 : 40) : 16,
                height: isHovering ? (cursorText ? 80 : 40) : 16,
                opacity: isHovering ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {isHovering && cursorText && (
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="whitespace-nowrap"
                >
                    {cursorText}
                </motion.span>
            )}
        </motion.div>
    );
};
