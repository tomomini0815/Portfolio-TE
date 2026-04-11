import { useIsMobile } from "@/hooks/useIsMobile";

export const GrainOverlay = () => {
  const isMobile = useIsMobile();

  // モバイルではGrainOverlayを完全に非表示 - 毎フレームのDOMアニメーションは重い
  if (isMobile) return null;

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
    </div>
  );
};
