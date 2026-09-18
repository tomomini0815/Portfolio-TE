import React from 'react';
import { getAssetPath } from '@/lib/utils';

interface CaseStudy01Props {
  onPrintSingle?: () => void;
}

// ────────────────────────────────────────────────────────────────────────────
// Page 04: CASE STUDY 01 (Part 1 - 概要・課題・プロセス・3本柱)
// ────────────────────────────────────────────────────────────────────────────
export const CaseStudy01Part1: React.FC<CaseStudy01Props> = ({ onPrintSingle }) => {
  const challenges = [
    {
      no: '01',
      title: 'スマホ閲覧の破綻と操作性低下',
      desc: 'PC大画面（1440px+）前提の多軸クロス集計や広大グラフが、スマホでは横スクロールや文字潰れを起こし現場閲覧が破綻。',
    },
    {
      no: '02',
      title: '情報階層の曖昧化と発見の遅れ',
      desc: '機能拡張の蓄積で重要情報の優先度が曖昧化し、現場調査員が合否判定や改善アラートを即座に特定できない構造的課題。',
    },
    {
      no: '03',
      title: 'UI基準の不統一による開発手戻り',
      desc: '画面ごとのUI基準（文字・配色・余白・バッジ）が不統一で、機能追加のたびに操作性の不整合と開発手戻りが発生。',
    },
  ];

  const principles = [
    {
      tag: 'PC → MOBILE',
      title: '端末ではなく利用シーンから再設計',
      desc: 'PCは深掘り分析、モバイルは要点確認と即時判断へ最適化。',
    },
    {
      tag: '3 LAYERS',
      title: '要点・比較・詳細の段階開示構造',
      desc: '要約スコア → 店舗別比較 → アンケート生回答の3層で展開。',
    },
    {
      tag: '1 SYSTEM',
      title: '画面追加でも一貫性と品質を維持',
      desc: '共通デザイントークンと再利用部品で開発工数を大幅削減。',
    },
  ];

  const processes = [
    {
      step: '01',
      name: '現状分析と課題抽出',
      tag: 'RESEARCH & AUDIT',
      desc: '既存ダッシュボードの操作性と情報量を詳細に分析。KPIの機能不足や横スクロールの頻発、タップ領域不足による誤操作など、モバイル利用時の具体的な阻害要因を特定。',
    },
    {
      step: '02',
      name: '要件定義',
      tag: 'REQUIREMENTS',
      desc: '店舗責任者の迅速な指標確認とクライアント担当者のKPI・トレンド追跡を軸に要件を整理。KPIカード、チャート比較、フィルタリング、レポート出力など必須機能を策定。',
    },
    {
      step: '03',
      name: '情報設計',
      tag: 'INFORMATION ARCHITECTURE',
      desc: 'TOPに新規KPIカード、続いてトレンドチャートを配置。評価内容や回答者属性、詳細データはアコーディオン等で展開し、現状把握からターゲット特定まで一気通貫で分析できる構造を確立。',
    },
    {
      step: '04',
      name: 'UIデザインとプロトタイピング',
      tag: 'UI DESIGN & PROTOTYPE',
      desc: 'カードレイアウトによる情報整理と最小44pxのタップ領域を確保。ドロワー式フィルターやスワイプ操作を取り入れ、Figmaでの実機プロトタイプ検証を通じて直感的な操作性を実現。',
    },
    {
      step: '05',
      name: 'デザインシステム構築',
      tag: 'DESIGN SYSTEM',
      desc: 'レスポンシブパーツを再利用可能なコンポーネントライブラリへ集約。カラー、文字、アイコン、ボタン等のUI規約を統一し、開発チームとの実装連携を円滑化。',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 01 / 2025.08—2026.03 (約8ヵ月)
          </span>
          {onPrintSingle && (
            <button
              onClick={onPrintSingle}
              data-pdf-hide
              className="text-xs px-3 py-1 rounded bg-[#00BFA5]/10 text-[#00BFA5] hover:bg-[#00BFA5]/20 font-medium transition-colors cursor-pointer"
            >
              この案件のみPDF保存
            </button>
          )}
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2" />

        <div className="flex items-baseline justify-between gap-4 mb-1.5 relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              覆面調査ダッシュボードのレスポンシブ化
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5">
              担当: UI/UX設計、Web/スマホアプリデザイン、デザインシステム構築、プロトタイプ作成
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            01
          </span>
          <div className="text-right shrink-0 relative z-10">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase">体制</span>
            <span className="text-xs font-semibold text-neutral-700">
              役員:2名、開発リーダー:1名、営業:1名、プログラマー:1名、デザイナー:1名(私)
            </span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl px-3 py-2 flex items-center gap-3">
          <span className="bg-[#00BFA5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            OVERVIEW
          </span>
          <p className="text-xs font-semibold text-neutral-800 leading-snug">
            既存システムの課題分析からレスポンシブUIへの刷新、一元管理を可能にするデザインシステムの構築。
          </p>
        </div>
      </div>

      {/* ── Main Content Grid: Left (課題 3点 + 設計原則 3点) & Right (制作プロセス 5ステップ) ── */}
      <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left Column (5 cols): 課題 & 設計原則 */}
        <div className="col-span-5 flex flex-col justify-between space-y-3">
          {/* 直面していた課題 3点 */}
          <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl p-3 shadow-2xs">
            <span className="text-xs font-bold text-[#FF5A5F] tracking-wider uppercase block mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5A5F]" />
              直面していた課題 (CHALLENGES)
            </span>
            <div className="space-y-2">
              {challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200/70 rounded-lg p-2 flex items-start gap-2 shadow-2xs"
                >
                  <span className="w-4 h-4 rounded-full bg-[#FF5A5F] text-white font-mono text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {item.no}
                  </span>
                  <div>
                    <h4 className="text-[11px] font-bold text-neutral-900 leading-tight mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-medium text-neutral-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 設計方針・3つの原則 */}
          <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl p-3 shadow-2xs">
            <span className="text-xs font-bold text-[#00BFA5] tracking-wider uppercase block mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5]" />
              設計方針・3つの原則 (DESIGN PRINCIPLES)
            </span>
            <div className="space-y-1.5">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-l-3 border-[#00BFA5] border-y border-r border-neutral-200/70 rounded-r-lg px-2.5 py-1.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-mono font-bold text-[#00BFA5]">
                      {item.tag}
                    </span>
                    <span className="text-[10.5px] font-bold text-neutral-800">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500 leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): 制作プロセス 5ステップ */}
        <div className="col-span-7 bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-3 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-xs font-bold text-[#00BFA5] tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5]" />
              制作プロセス (PRODUCTION PROCESS)
            </span>
            <span className="text-[10px] font-mono text-neutral-400">5 PHASES WORKFLOW</span>
          </div>

          <div className="space-y-2">
            {processes.map((proc, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-lg p-2 shadow-2xs transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#00BFA5] text-white font-mono text-[9px] font-bold flex items-center justify-center shrink-0">
                      {proc.step}
                    </span>
                    <h4 className="text-[11.5px] font-bold text-neutral-900 leading-tight">
                      {proc.name}
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono font-semibold text-[#00BFA5] bg-[#00BFA5]/10 px-2 py-0.5 rounded">
                    {proc.tag}
                  </span>
                </div>
                <p className="text-[10px] font-medium text-neutral-600 leading-relaxed pl-6">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 04</span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Page 05: CASE STUDY 01 (Part 2 - UI大画面展開・実機スマホ3画面・改善成果)
// ────────────────────────────────────────────────────────────────────────────
export const CaseStudy01Part2: React.FC<CaseStudy01Props> = () => {
  const improvements = [
    'PCとスマホで情報の優先順位を段階開示（プログレッシブ・ディスクロージャー）し、移動中でも重要指標を迷わず即座に把握可能に改善',
    '現場調査員の行動シナリオに即した親指操作UIと大型タップエリアにより、誤操作を防止し現場での確認時間を大幅に短縮',
    '包括的なデザインシステムと共通UIライブラリの整備により、画面追加時のデザイン整合性を担保し開発工数を約40%削減',
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 01 / RESPONSIVE EXPERIENCE & IMPROVEMENTS
          </span>
          <span className="bg-[#00BFA5]/10 text-[#00BFA5] border border-[#00BFA5]/25 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
            DESKTOP & MOBILE
          </span>
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2" />

        <div className="flex items-baseline justify-between gap-4 mb-1 relative">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              情報の優先順位を端末ごとに再構成
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              PCの高度な分析性を保ちながら、移動中も主要指標を直感的に確認できるUIへ。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            01
          </span>
        </div>
      </div>

      {/* ── Visual Area: 大画面PCブラウザ (Left) + 洗練されたiPhoneモックアップ3画面 (Right) ── */}
      <div className="grid grid-cols-12 gap-5 my-auto items-center">
        {/* Left: 大画面PCダッシュボード (6 cols) */}
        <div className="col-span-6 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase">
              DESKTOP ANALYTICS VIEW
            </span>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">1440px Grid</span>
          </div>
          <div className="bg-[#F8FAFC] rounded-xl border border-neutral-200 overflow-hidden h-[330px] flex items-center justify-center p-2 shadow-sm">
            <img
              src={getAssetPath('/experiences/projects/project1_1.png')}
              alt="PC Dashboard"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Right: 洗練されたスマホ実機3画面 (6 cols) */}
        <div className="col-span-6 flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono text-neutral-500 font-bold uppercase">
              MOBILE EXPERIENCE (3 SCREENS)
            </span>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">iPhone Native</span>
          </div>
          <div className="h-[330px] bg-[#F8FAFC] rounded-xl border border-neutral-200 p-2 flex items-center justify-around shadow-sm">
            <div className="flex flex-col items-center h-full justify-between py-1">
              <img
                src={getAssetPath('/experiences/projects/project1_3.png')}
                alt="要改善・ポテンシャル分析"
                className="h-[285px] w-auto object-contain drop-shadow-lg"
              />
              <span className="text-[10px] font-mono text-neutral-700 font-bold mt-1">
                01 課題・強み分析
              </span>
            </div>

            <div className="flex flex-col items-center h-full justify-between py-1">
              <img
                src={getAssetPath('/experiences/projects/project1_4.png')}
                alt="アンケート集計詳細"
                className="h-[285px] w-auto object-contain drop-shadow-lg"
              />
              <span className="text-[10px] font-mono text-neutral-700 font-bold mt-1">
                02 回答集計グラフ
              </span>
            </div>

            <div className="flex flex-col items-center h-full justify-between py-1">
              <img
                src={getAssetPath('/experiences/projects/project1_5.png')}
                alt="満足度推移グラフ"
                className="h-[285px] w-auto object-contain drop-shadow-lg"
              />
              <span className="text-[10px] font-mono text-neutral-700 font-bold mt-1">
                03 推移・傾向分析
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom: サイト内の改善・工夫したポイント 3点 ── */}
      <div className="grid grid-cols-3 gap-3">
        {improvements.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F8FAFC] border border-[#00BFA5]/30 rounded-lg p-2 flex items-start gap-2 shadow-2xs"
          >
            <span className="w-4 h-4 rounded-full bg-[#00BFA5] text-white font-mono text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
              ✔
            </span>
            <p className="text-[11px] font-medium text-neutral-800 leading-snug">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 05</span>
      </div>
    </div>
  );
};
