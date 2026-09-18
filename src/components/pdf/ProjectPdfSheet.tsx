import React from 'react';
import type { Experience } from '@/lib/storage';
import { getAssetPath } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────
// Slide 1: 背景・課題・体制 (Background & Challenges)
// ────────────────────────────────────────────────────────────────────────────
interface ProjectSlideProps {
  experience: Experience;
  pageNumber: number;
  totalPages: number;
  onPrintSingle?: () => void;
}

export const ProjectSlideBackground: React.FC<ProjectSlideProps> = ({
  experience,
  pageNumber,
  totalPages,
  onPrintSingle,
}) => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 p-10 flex flex-col justify-between border border-neutral-200/80 shadow-md rounded-xl box-border overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-neutral-200 pb-3.5">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C4830]">
              CASE STUDY — BACKGROUND & CHALLENGES
            </span>
            <span className="text-xs text-neutral-400 font-mono">| {experience.period}</span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">{experience.company}</h2>
          <span className="text-xs font-semibold text-[#8C4830]">{experience.role}</span>
        </div>

        <div className="text-right flex flex-col items-end">
          <div className="flex flex-wrap gap-1.5 justify-end max-w-[280px] mb-1">
            {experience.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
          {onPrintSingle && (
            <button
              onClick={onPrintSingle}
              data-pdf-hide
              className="text-xs px-2.5 py-1 rounded bg-[#8C4830]/10 text-[#8C4830] hover:bg-[#8C4830]/20 font-medium transition-colors cursor-pointer"
            >
              この案件のみPDF保存
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Left (Challenges / 課題) & Right (Overview & Team / 概要・体制) */}
      <div className="grid grid-cols-12 gap-6 my-auto py-2">
        {/* Left Column: Challenges (7 cols) */}
        <div className="col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#8C4830] tracking-wider uppercase">
                直面していた課題 (BEFORE / CHALLENGES)
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="space-y-3">
              {(experience.challenges || []).map((c, i) => (
                <div
                  key={i}
                  className="bg-[#F8F7F5] border border-[#EAE8E4] rounded-xl p-4 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#8C4830]/10 text-[#8C4830] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{i + 1}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-800 leading-relaxed">{c}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Overview & Team (5 cols) */}
        <div className="col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
            <span className="text-xs font-bold text-[#8C4830] tracking-wider block mb-2">
              プロジェクト概要 (OVERVIEW)
            </span>
            <p className="text-xs text-neutral-700 leading-relaxed mb-4">
              {experience.overview || experience.description}
            </p>

            {experience.team && (
              <div className="pt-3 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-neutral-500 block mb-1">制作体制</span>
                <p className="text-xs font-medium text-neutral-800">{experience.team}</p>
              </div>
            )}
          </div>

          <div className="bg-[#F8F7F5] border border-[#EAE8E4] rounded-xl p-4">
            <span className="text-[11px] font-bold text-neutral-600 block mb-1">
              担当領域・アプローチ
            </span>
            <p className="text-xs text-neutral-600 leading-relaxed">
              複雑な業務フローを整理し、ユーザーの利用シーンに最適化されたUI設計と、後々の機能拡張を支えるデザインシステムの整備を担当しました。
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <span>{experience.company} — Case Study Part 1</span>
        <span>
          Page {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Slide 2: プロセス ＆ 改善ポイント (Process & Improvements)
// ────────────────────────────────────────────────────────────────────────────
export const ProjectSlideProcess: React.FC<ProjectSlideProps> = ({
  experience,
  pageNumber,
  totalPages,
  onPrintSingle,
}) => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 p-10 flex flex-col justify-between border border-neutral-200/80 shadow-md rounded-xl box-border overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-neutral-200 pb-3.5">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C4830]">
              CASE STUDY — PROCESS & IMPROVEMENTS
            </span>
            <span className="text-xs text-neutral-400 font-mono">| {experience.period}</span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">{experience.company}</h2>
        </div>

        <div className="text-right">
          <span className="text-xs text-neutral-400 font-mono">設計プロセス ＆ 改善成果</span>
        </div>
      </div>

      {/* Main Grid: Left (Process Timeline) & Right (Improvements Cards) */}
      <div className="grid grid-cols-12 gap-6 my-auto py-2">
        {/* Left Column: Process Timeline (6 cols) */}
        <div className="col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#8C4830] tracking-wider uppercase">
                設計・制作プロセス (PROCESS)
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="space-y-3 relative pl-4 border-l-2 border-[#8C4830]/20 ml-2">
              {(experience.process || []).map((p, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-white border-2 border-[#8C4830]" />
                  <div className="bg-[#F8F7F5] border border-[#EAE8E4] rounded-lg p-3">
                    <span className="text-[10px] font-bold font-mono text-[#8C4830] block mb-0.5">
                      STEP 0{i + 1}
                    </span>
                    <p className="text-xs font-medium text-neutral-800 leading-snug">{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Improvements (6 cols) */}
        <div className="col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#8C4830] tracking-wider uppercase flex items-center gap-1.5">
                <span className="text-[#8C4830]">★</span> 改善・工夫したポイント (IMPROVEMENTS)
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="space-y-3">
              {(experience.improvements || []).map((imp, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#8C4830]/25 rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#8C4830] font-bold text-sm mt-0.5">✔</span>
                    <div>
                      <span className="text-[11px] font-bold text-[#8C4830] block mb-1">
                        POINT 0{i + 1}
                      </span>
                      <p className="text-xs text-neutral-800 leading-relaxed font-medium">{imp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <span>{experience.company} — Case Study Part 2</span>
        <span>
          Page {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Slide 3: UIデザイン・画面解説 (UI Visuals & Details)
// ────────────────────────────────────────────────────────────────────────────
export const ProjectSlideUI: React.FC<ProjectSlideProps> = ({
  experience,
  pageNumber,
  totalPages,
  onPrintSingle,
}) => {
  const images = experience.images || (experience.image ? [experience.image] : []);

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 p-10 flex flex-col justify-between border border-neutral-200/80 shadow-md rounded-xl box-border overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-neutral-200 pb-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C4830]">
              CASE STUDY — UI DESIGN
            </span>
            <span className="text-xs text-neutral-400 font-mono">| {experience.period}</span>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 tracking-tight">{experience.company}</h2>
        </div>

        <div className="text-right">
          <span className="text-xs text-neutral-500 font-mono">UI/UX 設計画面ギャラリー</span>
        </div>
      </div>

      {/* Main UI Gallery Grid (参考画像3枚目のように画面を大きく配置) */}
      <div className="my-auto py-2">
        {images.length === 0 ? (
          <div className="h-[320px] rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-xs text-neutral-400">
            UI画像準備中
          </div>
        ) : images.length === 1 ? (
          <div className="h-[330px] rounded-xl overflow-hidden border border-neutral-200 bg-[#F9F9FB] flex items-center justify-center p-2 shadow-sm">
            <img
              src={getAssetPath(images[0])}
              alt={experience.company}
              className="max-h-full max-w-full object-contain rounded-lg shadow"
            />
          </div>
        ) : images.length === 2 ? (
          <div className="grid grid-cols-2 gap-4 h-[330px]">
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-neutral-200 bg-[#F9F9FB] flex items-center justify-center p-2 shadow-sm"
              >
                <img
                  src={getAssetPath(img)}
                  alt={`${experience.company} ${i + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow"
                />
              </div>
            ))}
          </div>
        ) : images.length <= 4 ? (
          <div className="grid grid-cols-2 gap-3 h-[330px]">
            {images.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-neutral-200 bg-[#F9F9FB] flex items-center justify-center p-1.5 shadow-sm h-[155px]"
              >
                <img
                  src={getAssetPath(img)}
                  alt={`${experience.company} ${i + 1}`}
                  className="max-h-full max-w-full object-contain rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 h-[330px]">
            {images.slice(0, 5).map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden border border-neutral-200 bg-[#F9F9FB] flex items-center justify-center p-1.5 shadow-sm ${
                  i === 0 ? 'col-span-2 row-span-2 h-[330px]' : 'h-[155px]'
                }`}
              >
                <img
                  src={getAssetPath(img)}
                  alt={`${experience.company} ${i + 1}`}
                  className="max-h-full max-w-full object-contain rounded shadow-sm"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Highlight Banner (参考画像3枚目のベージュ帯風) */}
      <div className="bg-[#F0E6E1] border border-[#E0D0C8] rounded-xl p-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#8C4830] text-white flex items-center justify-center font-bold text-xs shrink-0">
            UI
          </div>
          <div>
            <span className="text-xs font-bold text-[#8C4830] block">直感的な情報設計と操作性の追求</span>
            <p className="text-[11px] text-neutral-700 leading-snug">
              画面の優先順位を明確にし、迷いや誤操作を防ぐ視覚的なメリハリとコンポーネントの一貫性を徹底しました。
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[10px] text-neutral-500 font-mono">
            {images.length} Screen Views
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 pt-3 mt-1 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <span>{experience.company} — Case Study Part 3</span>
        <span>
          Page {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};
