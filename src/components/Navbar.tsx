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
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
            Projects
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
            About
          </a>
          <Link
            to="/admin"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Settings size={18} />
          </Link>
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
              <a href="#projects" onClick={() => setMobileOpen(false)} className="text-sm font-display py-2">Projects</a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="text-sm font-display py-2">About</a>
              <Link to="/admin" onClick={() => setMobileOpen(false)} className="text-sm font-display py-2 flex items-center gap-2">
                <Settings size={16} /> 管理画面
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
