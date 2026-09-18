import React from 'react';

interface CoverPdfSheetProps {
  onPrintSingle?: () => void;
}

export const CoverPdfSheet: React.FC<CoverPdfSheetProps> = ({ onPrintSingle }) => {
  const works = [
    { num: '01', title: 'RESPONSIVE', desc: 'Covert Inspection' },
    { num: '02', title: 'B2B SaaS', desc: 'Construction DX' },
    { num: '03', title: 'DATA UI', desc: 'Apparel Analytics' },
    { num: '04', title: 'ACCESSIBLE', desc: 'Multi-Tenant System' },
    { num: '05', title: 'IoT UX', desc: 'Safe Driving App' },
    { num: '06', title: 'EarthScope (自主制作)', desc: '3D WebGL Learning App' },
  ];

  return (
    <div className="pdf-sheet cover-sheet a4-landscape relative bg-[#07131D] text-white flex border border-neutral-800 shadow-2xl rounded-xl box-border overflow-hidden p-0">
      {/* ── Left Main Area (74%) ── */}
      <div className="relative flex-1 h-full p-10 flex flex-col justify-between overflow-hidden">
        {/* Subtle Architectural Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1E3A52 1px, transparent 1px),
              linear-gradient(to bottom, #1E3A52 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
          }}
        />

        {/* Ambient Subtle Radial Glow behind typography */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#00BFA5]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[540px] h-[540px] bg-[#0284C7]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-12 w-[320px] h-[320px] bg-[#C6EF58]/6 rounded-full blur-3xl pointer-events-none" />

        {/* Minimalist Framing Line with Modern Corner Plus Marks */}
        <div className="absolute inset-6 border border-white/40 pointer-events-none z-10">
          <span className="absolute -top-2 -left-2 text-[11px] font-mono text-white/80 select-none">+</span>
          <span className="absolute -top-2 -right-2 text-[11px] font-mono text-white/80 select-none">+</span>
          <span className="absolute -bottom-2 -left-2 text-[11px] font-mono text-white/80 select-none">+</span>
          <span className="absolute -bottom-2 -right-2 text-[11px] font-mono text-white/80 select-none">+</span>
        </div>

        {/* Top Header Row: Role & Document Type */}
        <div className="relative z-20 pt-1 pl-2 flex items-center justify-between pr-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6EF58]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#C6EF58] uppercase font-bold">
                UI / UX DESIGNER
              </span>
            </div>
            <span className="text-[10.5px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
              SELECTED WORKS COLLECTION
            </span>
          </div>

          <div className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase flex items-center gap-2">
            <span>DOC /</span>
            <span className="text-white/80 font-bold">PORTFOLIO DECK</span>
          </div>
        </div>

        {/* Center: Extra Large Stylish Layered PORTFOLIO Typography */}
        <div className="relative z-20 my-auto pl-2 pr-3">
          <div className="relative inline-block">
            {/* Elegant Handwritten Script Overlay "Creative" with Outline Separation */}
            <span
              className="absolute -top-[76px] -left-3 z-30 font-script text-[92px] text-[#C6EF58] tracking-normal -rotate-[8deg] select-none"
              style={{
                WebkitTextStroke: '4px #07131D',
                paintOrder: 'stroke fill',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.7))',
              }}
            >
              Creative
            </span>

            {/* Main Big Bold PORTFOLIO Typography */}
            <h1 className="font-bebas text-[172px] leading-[0.84] tracking-[0.04em] text-white uppercase select-none drop-shadow-xl relative z-20">
              PORTFOLIO
            </h1>
          </div>

          {/* Tagline & Design Pillars */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-base text-neutral-200 font-semibold tracking-wide">
              Complex products, made clear.
            </p>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="flex items-center gap-2 text-[10.5px] font-mono text-neutral-300 tracking-wider">
              <span className="bg-white/5 px-2.5 py-0.5 rounded border border-white/10">B2B SaaS</span>
              <span>·</span>
              <span className="bg-white/5 px-2.5 py-0.5 rounded border border-white/10">Mobile App</span>
              <span>·</span>
              <span className="bg-white/5 px-2.5 py-0.5 rounded border border-white/10">Design System</span>
              <span>·</span>
              <span className="bg-white/5 px-2.5 py-0.5 rounded border border-white/10">3D WebGL</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Designer Name, Period Badge & Single Print */}
        <div className="relative z-20 pb-1 pl-2 pr-3 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl font-black tracking-wider text-white font-mono">
                T.E
              </span>
              <span className="h-4 w-[1px] bg-white/25" />
              <span className="text-xs font-mono font-medium text-neutral-300 tracking-widest">
                UI/UX Designer
              </span>
              <span className="text-[11px] font-mono font-bold text-[#07131D] bg-[#C6EF58] px-2.5 py-0.5 rounded tracking-wider shadow-xs">
                2021 — 2026
              </span>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase font-medium flex items-center gap-2">
              <span>PRODUCT DESIGN</span>
              <span className="text-neutral-600">·</span>
              <span>USER EXPERIENCE</span>
              <span className="text-neutral-600">·</span>
              <span>DESIGN SYSTEM</span>
              <span className="text-neutral-600">·</span>
              <span>PROTOTYPING</span>
            </div>
          </div>

          {onPrintSingle && (
            <button
              onClick={onPrintSingle}
              data-pdf-hide
              className="text-xs px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/20 font-medium flex items-center gap-1.5 shadow-sm"
            >
              <span>表紙のみPDF保存</span>
            </button>
          )}
        </div>
      </div>

      {/* ── Right Accent Sidebar (26%) ── */}
      <div className="w-[26%] h-full flex flex-col relative z-20 bg-gradient-to-b from-[#00BFA5] to-[#00A892] text-[#07131D]">
        {/* Top Lime Accent Block: Stylish Index Header */}
        <div className="h-[14%] w-full bg-[#C6EF58] px-5 flex items-center border-b border-[#07131D]/10">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-black tracking-[0.25em] text-[#07131D]/70 uppercase">
              INDEX / CATALOG
            </span>
            <span className="text-xl font-black tracking-tight text-[#07131D] font-sans">
              PROJECTS
            </span>
          </div>
        </div>

        {/* Works List (01 - 06 Unified Design) */}
        <div className="flex-1 px-5 py-3 flex flex-col justify-around">
          {works.map((w, idx) => (
            <div
              key={idx}
              className="border-b border-[#07131D]/15 pb-2.5 last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-mono font-black text-[#07131D] bg-[#07131D]/12 w-6 h-5 rounded flex items-center justify-center">
                  {w.num}
                </span>
                <span className="text-[12px] font-extrabold tracking-wide text-[#07131D] font-sans">
                  {w.title}
                </span>
              </div>
              <div className="text-[9.5px] font-mono text-[#07131D]/85 pl-8 mt-0.5 font-semibold">
                {w.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Archive Meta */}
        <div className="p-4 pt-0 text-right border-t border-[#07131D]/15 pt-2.5">
          <span className="text-[9.5px] font-mono tracking-widest text-[#07131D]/90 font-bold uppercase block">
            SELECTED WORKS ARCHIVE
          </span>
          <span className="text-[9px] font-mono text-[#07131D]/70 block mt-0.5">
            ALL RIGHTS RESERVED · T.E
          </span>
        </div>
      </div>
    </div>
  );
};
