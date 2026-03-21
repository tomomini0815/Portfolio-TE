import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-display font-bold text-lg tracking-tight">
          Portfolio<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" className="group flex flex-col items-center transition-opacity hover:opacity-80">
            <span className="text-sm font-display leading-tight text-foreground">Projects</span>
            <span className="text-[10px] font-body tracking-wider mt-0.5 text-muted-foreground">制作実績</span>
          </a>
          <a href="#experience" className="group flex flex-col items-center transition-opacity hover:opacity-80">
            <span className="text-sm font-display leading-tight text-foreground">Experience</span>
            <span className="text-[10px] font-body tracking-wider mt-0.5 text-muted-foreground">経歴</span>
          </a>
          <a href="#about" className="group flex flex-col items-center transition-opacity hover:opacity-80">
            <span className="text-sm font-display leading-tight text-foreground">About</span>
            <span className="text-[10px] font-body tracking-wider mt-0.5 text-muted-foreground">私について</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted-foreground"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              <a href="#projects" onClick={() => setMobileOpen(false)} className="flex flex-col py-2">
                <span className="text-sm font-display leading-tight text-foreground">Projects</span>
                <span className="text-[10px] text-muted-foreground tracking-wider mt-0.5">制作実績</span>
              </a>
              <a href="#experience" onClick={() => setMobileOpen(false)} className="flex flex-col py-2">
                <span className="text-sm font-display leading-tight text-foreground">Experience</span>
                <span className="text-[10px] text-muted-foreground tracking-wider mt-0.5">経歴</span>
              </a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="flex flex-col py-2">
                <span className="text-sm font-display leading-tight text-foreground">About</span>
                <span className="text-[10px] text-muted-foreground tracking-wider mt-0.5">私について</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
