import { motion } from "framer-motion";

export const GrainOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] opacity-[0.03] select-none">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      {/* Animated layer for more dynamism */}
      <motion.div 
        animate={{ 
          x: [0, -10, 5, -5, 0],
          y: [0, 5, -5, 10, 0]
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
    </div>
  );
};
