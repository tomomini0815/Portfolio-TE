import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useState, useCallback, useRef, useEffect } from "react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ images, currentIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIndex(currentIndex);
    resetZoom();
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, index]);

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => setScale(s => Math.min(s + 0.5, 5));
  const zoomOut = () => {
    setScale(s => {
      const next = Math.max(s - 0.5, 0.5);
      if (next <= 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const prev = useCallback(() => {
    setIndex(i => (i > 0 ? i - 1 : images.length - 1));
    resetZoom();
  }, [images.length]);

  const next = useCallback(() => {
    setIndex(i => (i < images.length - 1 ? i + 1 : 0));
    resetZoom();
  }, [images.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...position };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: posStart.current.x + (e.clientX - dragStart.current.x),
      y: posStart.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button onClick={zoomIn} className="p-2 rounded-lg bg-secondary hover:bg-surface-hover transition-colors">
              <ZoomIn size={18} />
            </button>
            <button onClick={zoomOut} className="p-2 rounded-lg bg-secondary hover:bg-surface-hover transition-colors">
              <ZoomOut size={18} />
            </button>
            <button onClick={resetZoom} className="p-2 rounded-lg bg-secondary hover:bg-surface-hover transition-colors">
              <RotateCcw size={18} />
            </button>
            <button onClick={onClose} className="p-2 rounded-lg bg-secondary hover:bg-surface-hover transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Scale indicator */}
          <div className="absolute top-4 left-4 z-10 text-sm font-display text-muted-foreground">
            {Math.round(scale * 100)}%
          </div>

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-sm font-display text-muted-foreground">
              {index + 1} / {images.length}
            </div>
          )}

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-secondary hover:bg-surface-hover transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-secondary hover:bg-surface-hover transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh] overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: scale,
                x: position.x,
                y: position.y
              }}
              src={images[index]}
              alt=""
              className="max-w-full max-h-[85vh] object-contain select-none"
              transition={isDragging ? { duration: 0 } : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              draggable={false}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
