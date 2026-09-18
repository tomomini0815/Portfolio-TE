import React from 'react';

interface ProfilePdfSheetProps {
  onPrintSingle?: () => void;
}

export const ProfilePdfSheet: React.FC<ProfilePdfSheetProps> = ({ onPrintSingle }) => {
  const steps = [
    {
      num: '01',
      tag: 'DISCOVER',
      color: 'bg-[#00BFA5]',
      title: '本質的な課題解決',
      desc: '要望の背景にある「本当のニーズや現場課題」を深掘りし、表面的な対症療法ではなく本質的な構造からアプローチします。',
    },
    {
      num: '02',
      tag: 'DEFINE',
      color: 'bg-[#00BFA5]',
      title: '一貫した体験設計',
      desc: 'ブランドアイデンティティやシステムのルールを揃え、どの画面を操作しても迷いや違和感のないUXを構築します。',
    },
    {
      num: '03',
      tag: 'DESIGN',
      color: 'bg-[#00BFA5]',
      title: '直感的なUI具現化',
      desc: 'サクサクとした操作感と情報の視覚的優先度を徹底。マニュアルがなくても初見でサクサク使える直感性を追求します。',
    },
    {
      num: '04',
      tag: 'VALIDATE',
      color: 'bg-[#00BFA5]',
      title: '柔軟な思考と検証',
      desc: '仕様変更やユーザー・関係者からのフィードバックを前向きに捉え、高精度プロトタイプを用いた検証で最適解を模索します。',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-8 py-5 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Top Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            ABOUT ME & CAPABILITIES
          </span>
          {onPrintSingle && (
            <button
              onClick={onPrintSingle}
              data-pdf-hide
              className="text-xs px-3 py-1 rounded bg-[#00BFA5]/10 text-[#00BFA5] hover:bg-[#00BFA5]/20 font-medium transition-colors cursor-pointer"
            >
              このシートのみPDF保存
            </button>
          )}
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2.5" />

        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">
              ユーザーの想いと、プロダクトの価値を繋ぐ。
            </h2>
            <p className="text-xs text-neutral-600 font-medium leading-relaxed">
              「使う人がストレスなく効率的に作業できること」を第一に、ユーザーの行動心理を可視化し、直感的で心地よく馴染むUI/UXを設計します。
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block">DESIGNER PROFILE</span>
            <span className="text-xs font-bold text-neutral-700 font-mono">2021 — PRESENT</span>
          </div>
        </div>
      </div>

      {/* ── Main Two-Column Grid ── */}
      <div className="grid grid-cols-12 gap-7 my-auto py-1">
        {/* Left Column: PROFILE & MINDSET (5 cols) */}
        <div className="col-span-5 flex flex-col justify-between space-y-3.5">
          {/* Profile Card */}
          <div className="bg-[#F8FAFC] border border-neutral-200/90 rounded-xl p-4 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="bg-[#00BFA5] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                PROFILE
              </span>
              <span className="text-[10.5px] font-bold px-2 py-0.5 rounded bg-white text-neutral-800 border border-neutral-300 shadow-2xs">
                実務歴 約5年
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-2xl font-black text-neutral-900 font-mono">T.E</h3>
              <span className="text-xs text-neutral-700 font-mono font-bold">/ UI/UX Designer</span>
            </div>

            <div className="space-y-2">
              <p className="text-[12.5px] text-neutral-900 leading-[1.45] font-medium">
                Web/Mobile App のUI/UXデザイナーとして、SaaSサービスのダッシュボード制作を中心に、ユーザーの行動心理を可視化し、直感的で使いやすいインターフェース設計を心がけています。
              </p>
              <p className="text-[12.5px] text-neutral-900 leading-[1.45] border-t border-neutral-200/90 pt-2 font-medium">
                「使う人がストレスなく効率的に作業できること」を第一に、サクサクとした操作感や分かりやすい設計を追求。一つひとつのアイデアが、使う人の日常に心地よく馴染んでいくところまで丁寧に作り上げることを大切にしています。
              </p>
            </div>
          </div>

          {/* Mindset: 4 Principles */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-neutral-700 tracking-wider uppercase">
                MINDSET / 大切にしていること
              </span>
              <span className="text-[10px] font-mono font-semibold text-neutral-500">4 CORE PRINCIPLES</span>
            </div>
            <div className="space-y-2">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="bg-white border border-neutral-200/90 rounded-lg p-2.5 shadow-2xs flex items-start gap-2.5"
                >
                  <span className={`w-5 h-5 rounded-full ${s.color} text-white font-mono text-[10.5px] font-bold flex items-center justify-center shrink-0 mt-0.5`}>
                    {s.num}
                  </span>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-neutral-900 mb-0.5">
                      {s.title}
                    </h4>
                    <p className="text-[11.5px] text-neutral-750 text-neutral-700 leading-snug font-normal">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: DETAILED SKILLS & CAPABILITIES (7 cols) */}
        <div className="col-span-7 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-neutral-700 tracking-wider uppercase">
              SKILLS & CAPABILITIES / スキルセットと実務アプローチ
            </span>
            <span className="text-[10px] font-mono font-semibold text-neutral-500">COMPREHENSIVE SKILLSET</span>
          </div>

          {/* Skill Card 1: Design Tools & Prototyping */}
          <div className="bg-[#F8FAFC] border border-neutral-200/90 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA5]" />
                <h4 className="text-[12.5px] font-extrabold text-neutral-900 uppercase font-mono tracking-wide">
                  Design Tools & Prototyping
                </h4>
              </div>
              <span className="text-[10.5px] font-mono font-semibold text-neutral-500">FIGMA / XD / ADOBE</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {['Figma / Figma Make', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'Design Tokens'].map((tool) => (
                <span
                  key={tool}
                  className="bg-white text-neutral-900 border border-neutral-300 px-2.5 py-0.5 rounded text-[11px] font-semibold shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-[11.5px] text-neutral-800 leading-relaxed border-t border-neutral-200 pt-2 font-normal">
              AutoLayoutやVariablesを駆使したコンポーネントライブラリの構築、複雑な画面遷移やマイクロインタラクションを再現した実機検証用プロトタイプの迅速な制作が可能です。
            </p>
          </div>

          {/* Skill Card 2: UI/UX Design & Architecture */}
          <div className="bg-[#F8FAFC] border border-neutral-200/90 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA5]" />
                <h4 className="text-[12.5px] font-extrabold text-neutral-900 uppercase font-mono tracking-wide">
                  UI/UX Design & Architecture
                </h4>
              </div>
              <span className="text-[10.5px] font-mono font-semibold text-neutral-500">IA / DESIGN SYSTEM</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {[
                'Web App UI/UX',
                'Mobile App UI/UX',
                'Design System 構築',
                '情報設計 (IA)',
                'ワイヤーフレーム策定',
                'ユーザーシナリオ設計',
                'アクセシビリティ担保',
              ].map((area) => (
                <span
                  key={area}
                  className="bg-white text-neutral-900 border border-neutral-300 px-2.5 py-0.5 rounded text-[11px] font-semibold shadow-2xs"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[11.5px] text-neutral-800 leading-relaxed border-t border-neutral-200 pt-2 font-normal">
              要件の背景にある課題整理から入り、ユーザーの認知負荷を最小化する画面構造・動線設計を行います。一貫した体験を多職種で共有できるデザイントークン運用・ガイドライン策定を推進します。
            </p>
          </div>

          {/* Skill Card 3: Frontend & Collaboration */}
          <div className="bg-[#F8FAFC] border border-neutral-200/90 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA5]" />
                <h4 className="text-[12.5px] font-extrabold text-neutral-900 uppercase font-mono tracking-wide">
                  Frontend, Collaboration & AI Workflow
                </h4>
              </div>
              <span className="text-[10.5px] font-mono font-semibold text-neutral-500">ENGINEERING & AI TOOLS</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {[
                'HTML5 / CSS3 / JS (基礎)',
                'WordPress',
                'Git / GitHub',
                'Notion / Miro',
                'Slack / Chatwork',
                '各種AIツール活用',
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-white text-neutral-900 border border-neutral-300 px-2.5 py-0.5 rounded text-[11px] font-semibold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[11.5px] text-neutral-800 leading-relaxed border-t border-neutral-200 pt-2 font-normal">
              実装フェーズを意識した無理のないデザイン仕様書を作成し、エンジニアとのスムーズな連携を実現。Miroでの要件整理や最新AIツールの業務活用により、スピーディかつ質の高いデザインアウトプットを提供します。
            </p>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>PROFILE & CAPABILITIES / 02</span>
      </div>
    </div>
  );
};
