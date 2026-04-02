import { useState } from "react";

export const usePdfDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    // ── Step 1: Scroll through entire page to trigger all whileInView animations ──
    const scrollHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollStep = viewportHeight * 0.6;
    let currentPos = 0;

    window.scrollTo(0, 0);
    await wait(200);

    // Scroll down in increments to trigger every animation
    while (currentPos < scrollHeight) {
      currentPos += scrollStep;
      window.scrollTo({ top: currentPos, behavior: "instant" });
      await wait(80);
    }

    // Scroll back to top
    window.scrollTo(0, 0);
    await wait(400);

    // ── Step 2: Force all Framer Motion inline styles to visible state ──
    // Framer Motion writes inline `opacity`, `transform`, `visibility`.
    // CSS !important in @media print cannot beat inline styles — we must clear them via JS.
    const saved = forceAllVisible();

    // ── Step 3: Give browser a moment to repaint ──
    await wait(400);

    // ── Step 4: Print (opens the native browser print/PDF dialog) ──
    window.print();

    // ── Step 5: Restore original inline styles after dialog closes ──
    await wait(1000);
    restoreStyles(saved);
    setIsGenerating(false);
  };

  return { downloadPdf, isGenerating };
};

// ────────────────────────────────────────────────────────────────────────────

type SavedStyle = {
  el: HTMLElement;
  opacity: string;
  transform: string;
  visibility: string;
  filter: string;
};

function forceAllVisible(): SavedStyle[] {
  const saved: SavedStyle[] = [];
  const all = document.querySelectorAll<HTMLElement>("*");

  all.forEach((el) => {
    const s = el.style;
    const hasInlineStyle = s.opacity !== "" || s.transform !== "" || s.visibility !== "" || s.filter !== "";
    if (hasInlineStyle) {
      saved.push({
        el,
        opacity: s.opacity,
        transform: s.transform,
        visibility: s.visibility,
        filter: s.filter,
      });
      s.opacity = "1";
      s.transform = "none";
      s.visibility = "visible";
      s.filter = "none";
    }
  });

  return saved;
}

function restoreStyles(saved: SavedStyle[]) {
  saved.forEach(({ el, opacity, transform, visibility, filter }) => {
    el.style.opacity = opacity;
    el.style.transform = transform;
    el.style.visibility = visibility;
    el.style.filter = filter;
  });
}

function wait(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
