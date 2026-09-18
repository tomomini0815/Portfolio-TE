import React from 'react';
import { getAssetPath } from '@/lib/utils';

interface CaseStudy02Props {
  onPrintSingle?: () => void;
}

// ────────────────────────────────────────────────────────────────────────────
// Page 06: CASE STUDY 02 (Part 1 - 概要・体制・課題・プロセス・思想)
// ────────────────────────────────────────────────────────────────────────────
export const CaseStudy02Part1: React.FC<CaseStudy02Props> = ({ onPrintSingle }) => {
  const challenges = [
    {
      no: '01',
      title: '役割ごとの過密混在と視覚的ノイズ',
      desc: 'オフィス管理者（予実・全体進捗）と現場作業員（KY・安全日報）で利用目的が異なるにもかかわらず同一画面に過密混在し、認知負荷が増大。',
    },
    {
      no: '02',
      title: 'ITリテラシー差と操作迷い・入力漏れ',
      desc: '幅広い年齢層・ITスキルの作業員にとって、多階層メニューや専門用語が操作停止や現場日報の入力漏れを引き起こす大きな要因に。',
    },
    {
      no: '03',
      title: '過酷な屋外環境での視認性・操作性不足',
      desc: '直射日光下の強い反射や作業手袋着用など過酷な屋外現場への配慮が不足し、現場での視認性低下や誤タップが頻発していた。',
    },
  ];

  const principles = [
    {
      tag: '2 ROLES',
      title: '現場と管理者の利用動線を完全分離',
      desc: 'PCは分析・施工管理、モバイルは要点確認と安全日報入力へ特化。',
    },
    {
      tag: '4 RULES',
      title: '色・文字・アイコン・余白の厳格規約化',
      desc: '操作の迷いを防ぎ、多職種が迷わず使えるデザインシステムを策定。',
    },
    {
      tag: 'FIELD READY',
      title: '屋外・手袋操作に耐えうる現場基準',
      desc: '直射日光下でも視認できる高コントラスト配色と大型タップ領域を徹底。',
    },
  ];

  const processes = [
    {
      step: '01',
      name: 'リサーチ・分析',
      tag: 'RESEARCH & AUDIT',
      desc: '既存システムのユーザビリティ評価とヒューリスティック分析を実施。現場スタッフへのインタビューから日常業務のペインポイントを特定し、競合他社比較と合わせて改善方針を明確化。',
    },
    {
      step: '02',
      name: 'ペルソナ・カスタマージャーニー作成',
      tag: 'PERSONA & JOURNEY',
      desc: '現場監督・作業員・管理者の3つのペルソナを策定。各業務フローと利用シーンを詳細にマッピングし、現場とオフィスの各タッチポイントにおける課題と改善機会を抽出。',
    },
    {
      step: '03',
      name: '情報アーキテクチャ設計',
      tag: 'INFORMATION ARCHITECTURE',
      desc: '複雑な建設業務データを体系的に整理し、優先度に応じた情報階層を構築。表示順序とグルーピングを最適化し、目的の情報へ迷わず最短でアクセスできる構造へ刷新。',
    },
    {
      step: '04',
      name: 'ワイヤーフレーム・プロトタイプ作成',
      tag: 'WIREFRAME & PROTOTYPE',
      desc: 'Figmaを用いてローファイから実機検証用のハイファイまで段階的に構築。操作フローを忠実に再現したインタラクティブプロトタイプにより、ステークホルダーとの合意形成を迅速化。',
    },
    {
      step: '05',
      name: 'デザインシステム構築',
      tag: 'DESIGN SYSTEM',
      desc: '再利用可能なUIコンポーネントライブラリを整備。カラー、フォント、アイコン、ボタンスタイル等を規約化し、デザインの一貫性担保と開発チームとの連携効率を大幅に向上。',
    },
    {
      step: '06',
      name: 'ユーザビリティテスト・改善',
      tag: 'USABILITY TEST & ITERATION',
      desc: '実ユーザーによるタスクベースの検証を実施。操作ログと定性フィードバックの分析を基に動線とUIの微調整を反復し、過酷な屋外現場でも直感的に扱える完成度へ昇華。',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 02 / 2024.06—2025.07 (約1年2ヵ月)
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
              建設業界向け SaaS のダッシュボード
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5">
              担当: UI/UX設計、Web/スマホアプリデザイン、プロトタイプ作成、デザインシステム構築
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            02
          </span>
          <div className="text-right shrink-0 relative z-10">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase">体制</span>
            <span className="text-xs font-semibold text-neutral-700">
              PM:1名、チームリーダー:1名、デザイナー:2名
            </span>
          </div>
        </div>

        {/* Overview Box (サイト内本文) */}
        <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl px-3 py-2 flex items-center gap-3">
          <span className="bg-[#00BFA5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            OVERVIEW
          </span>
          <p className="text-xs font-semibold text-neutral-800 leading-snug">
            複雑な情報の可視化による意思決定の迅速化と、導線設計による習熟コストの最小化を両立。
          </p>
        </div>
      </div>

      {/* ── Main Content Grid: Left (課題 3点 + 設計原則 3点) & Right (制作プロセス 6ステップ) ── */}
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

        {/* Right Column (7 cols): 制作プロセス 6ステップ */}
        <div className="col-span-7 bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-3 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-xs font-bold text-[#00BFA5] tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5]" />
              制作プロセス (PRODUCTION PROCESS)
            </span>
            <span className="text-[10px] font-mono text-neutral-400">6 PHASES WORKFLOW</span>
          </div>

          <div className="space-y-1.5">
            {processes.map((proc, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-lg px-2.5 py-1.5 shadow-2xs transition-all"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#00BFA5] text-white font-mono text-[9px] font-bold flex items-center justify-center shrink-0">
                      {proc.step}
                    </span>
                    <h4 className="text-[11px] font-bold text-neutral-900 leading-tight">
                      {proc.name}
                    </h4>
                  </div>
                  <span className="text-[8.5px] font-mono font-semibold text-[#00BFA5] bg-[#00BFA5]/10 px-2 py-0.5 rounded">
                    {proc.tag}
                  </span>
                </div>
                <p className="text-[9.5px] font-medium text-neutral-600 leading-relaxed pl-6">
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
        <span>SELECTED WORKS / 06</span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Page 07: CASE STUDY 02 (Part 2 - システム設計・現場UI・改善点)
// ────────────────────────────────────────────────────────────────────────────
export const CaseStudy02Part2: React.FC<CaseStudy02Props> = () => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 02 / SYSTEM DESIGN & IMPROVEMENTS
          </span>
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2" />

        <div className="relative mb-1">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-0.5">
              業務の複雑さを、再利用可能なルールへ
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              設計原則・共通部品からPC管理画面、現場モバイル体験までを一元的なシステムとして接続。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            02
          </span>
        </div>
      </div>

      {/* ── Main Visual: デザインシステム展開 (Foundation & Components) ── */}
      <div className="space-y-2.5 my-auto">
        {/* Top: Foundation Guidelines */}
        <div className="bg-[#F8FAFC] border border-neutral-200 rounded-xl px-3.5 py-2.5 shadow-sm">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#2B6CB0] text-white text-[9.5px] font-bold px-2.5 py-0.5 rounded uppercase">
                FOUNDATION
              </span>
              <span className="text-xs text-neutral-800 font-bold">01.カラー / 02.フォント / 03.アイコン / 04.余白ルール設計</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">Design System Foundations</span>
          </div>
          <div className="h-[240px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project2_1.png')}
              alt="デザインシステム Foundation ガイドライン（カラー・フォント・アイコン・余白）"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Bottom: Component Library (横長ワイド展開で余白を完全排除・文字視認性を最大化) */}
        <div className="bg-[#F8FAFC] border border-neutral-200 rounded-xl px-3.5 py-2.5 shadow-sm">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#00BFA5] text-white text-[9.5px] font-bold px-2.5 py-0.5 rounded uppercase">
                COMPONENTS
              </span>
              <span className="text-xs text-neutral-800 font-bold">標準ボタン・ドロップダウン・入力フィールド・進行管理カード</span>
            </div>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">UI Component Library</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 h-[250px]">
            {/* Left: Buttons & Input Fields */}
            <div className="rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
              <img
                src={getAssetPath('/experiences/projects/project2_2_top.png')}
                alt="標準ボタン状態変化・入力フィールド・セレクト"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Right: Progress Cards & Controls */}
            <div className="rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
              <img
                src={getAssetPath('/experiences/projects/project2_2_bottom.png')}
                alt="進行管理カード・ステータスバッジ・ダイアログパーツ"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 07</span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// Page 08: CASE STUDY 02 (Part 3 - PC業務管理画面 ＆ 現場スマホ3画面 特大展開)
// ────────────────────────────────────────────────────────────────────────────
export const CaseStudy02Part3: React.FC<CaseStudy02Props> = ({ onPrintSingle }) => {
  const improvements = [
    'オフィス管理者PCと現場モバイルで情報構造を完全分離し、それぞれの重要タスクへの到達時間を大幅に短縮',
    '屋外直射日光下でも視認性を失わない高コントラスト配色（WCAG AA）と、手袋着用時でも誤タップを防ぐ大型タッチ領域（56px+）を設計',
    '現場の声から生まれた「音声入力による安全日報登録」と「ワンタップKY開始」により、現場作業員の入力負担を劇的に削減',
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 02 / SCREEN IMPLEMENTATION
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

        <div className="relative mb-1">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-0.5">
              PC管理ダッシュボード ＆ 現場スマートフォンUI
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              オフィス管理者の高度な分析・申請管理から、現場作業員の直感的な点検入力までを一体設計。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            02
          </span>
        </div>
      </div>

      {/* ── Main Visual Grid: Left (PC業務画面 横並び展開) + Right (現場スマホ3画面) 特大展開 ── */}
      <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left: Web管理者画面ライブラリ (6 cols - 上下画面を左右2分割横並び) */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#2B6CB0] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                WEB DASHBOARD
              </span>
              <span className="text-xs text-neutral-800 font-bold">工程管理・申請・タスク登録</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">Desktop 1440px</span>
          </div>

          <div className="grid grid-cols-2 gap-2 h-[320px]">
            <div className="rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1 shadow-inner">
              <img
                src={getAssetPath('/experiences/projects/project2_3_part1.png')}
                alt="PC管理ダッシュボード 申請一覧・詳細・回覧"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1 shadow-inner">
              <img
                src={getAssetPath('/experiences/projects/project2_3_part2.png')}
                alt="PC管理ダッシュボード タスク登録・施工計画"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-[10px] text-neutral-600 font-medium mt-1 px-1">
            申請承認・施工計画・タスクセット登録など、複雑な業務フローを迷わず完結できる情報構造を確立。
          </p>
        </div>

        {/* Right: 現場スマートフォンUI 3画面 (6 cols) */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#00BFA5] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                FIELD MOBILE
              </span>
              <span className="text-xs text-neutral-800 font-bold">現場モバイル画面</span>
            </div>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">Outdoor Touch</span>
          </div>

          <div className="h-[320px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project2_4.png')}
              alt="現場スマートフォンUI（機能一覧・現地KY入力・音声入力/安全開始）"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-600 font-semibold px-2 mt-1">
            <span>01 現場ポータル機能一覧</span>
            <span>02 現地KY入力ステータス</span>
            <span>03 音声入力・安全開始</span>
          </div>
        </div>
      </div>

      {/* ── Bottom: 改善・工夫したポイント 3点 ── */}
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
        <span>SELECTED WORKS / 08</span>
      </div>
    </div>
  );
};
