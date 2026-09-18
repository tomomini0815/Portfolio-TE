import React from 'react';
import { getAssetPath } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────
// CASE STUDY 03: アパレル企業のダッシュボード
// ────────────────────────────────────────────────────────────────────────────

// Page 09: Part 1 - 概要・課題・改善・制作プロセス・商品企画モーダル詳細
export const CaseStudy03Part1: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  const challenges = [
    '数万点に及ぶ品番・売上・店舗在庫データが無機質に陳列され、過剰在庫や欠品リスクを瞬時に特定不能だった',
    '画面ごとに集計軸・フィルター配置・警告色のルールがバラバラで、MDや店舗管理者の操作認知負荷が増大',
    '複数条件（ブランド・店舗・納期）のクロス集計で画面遷移が多発し、締切前の現場業務のボトルネックに',
  ];

  const improvements = [
    'セマンティックカラーと視覚的ヒエラルキーにより、欠品寸前や過剰在庫のSKUを秒速で検知できるUIへ刷新',
    'グローバルフィルター＆ファセット検索を上部に固定し、リアルタイム絞り込みと分析プリセットで業務効率化',
    'ステップインジケーター付きモーダルUIと連続入力フローにより、商品企画・JANコード付番作業を大幅短縮',
  ];

  const processes = [
    {
      step: '01',
      name: 'ヒアリング・業務調査',
      tag: 'RESEARCH',
      desc: '在庫管理・売上分析・生産出荷の業務フローを詳細ヒアリング。販売サイクルと現場課題を把握。',
    },
    {
      step: '02',
      name: 'データ構造・SKU分析',
      tag: 'DATA MODEL',
      desc: '商品・販売・在庫データの相関を整理。膨大なSKU群を一覧性と比較性に優れたレイアウトへ構造化。',
    },
    {
      step: '03',
      name: 'UI設計・システム構築',
      tag: 'DESIGN SYSTEM',
      desc: '視覚的ヒエラルキーを徹底。カラー・文字・余白を統一し、情報過多を防ぐデザインシステムを構築。',
    },
    {
      step: '04',
      name: 'インタラクション設計',
      tag: 'INTERACTION',
      desc: '多軸フィルター、ソート、ドリルダウンを直感化。迷わず深いデータ探索へ到達できる動線を実現。',
    },
    {
      step: '05',
      name: 'フロントエンド実装支援',
      tag: 'VUE / QUASAR',
      desc: 'Quasar (Vue.js) によるレスポンシブUI実装を担当。保守性と拡張性の高いコンポーネントを開発。',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 03 / 2021年 - 2024年 (約1年6ヵ月)
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

        <div className="flex items-baseline justify-between gap-4 mb-1 relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              アパレル企業のダッシュボード
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5">
              担当: UI/UX設計、WEBアプリデザイン、一部コーディング (Quasar / Vue.js)
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            03
          </span>
          <div className="text-right shrink-0 relative z-10">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase">体制</span>
            <span className="text-xs font-semibold text-neutral-700">開発会社社長:1名、デザイナー:1名(私)、プログラマー:2名</span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl px-3 py-1.5 flex items-center gap-3">
          <span className="bg-[#00BFA5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            OVERVIEW
          </span>
          <p className="text-xs font-semibold text-neutral-800 leading-snug">
            膨大な在庫・売上データの整理と、直感的な分析をサポートするシンプルかつ一貫したUI設計。
          </p>
        </div>
      </div>

      {/* ── Middle Grid: Left (課題 & 改善 4 cols) & Right (主要UIモーダル詳細 特大展開 8 cols) ── */}
      <div className="grid grid-cols-12 gap-4 my-auto items-stretch">
        {/* Left Column (4 cols): 課題 & 改善 */}
        <div className="col-span-4 flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[11px] font-bold text-[#FF5A5F] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A5F]" />
              直面していた課題 (CHALLENGES)
            </span>
            <div className="space-y-1.5">
              {challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#F8F9FA] rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5A5F] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-[#00BFA5] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
              改善・工夫したポイント (IMPROVEMENTS)
            </span>
            <div className="space-y-1.5">
              {improvements.map((imp, i) => (
                <div key={i} className="flex items-start gap-2 bg-white rounded-lg px-2.5 py-1.5 border border-[#00BFA5]/30 shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00BFA5] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✔
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{imp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): 商品企画モーダル詳細 特大展開 */}
        <div className="col-span-8 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#00BFA5] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                DETAILED UI
              </span>
              <span className="text-xs text-neutral-800 font-bold">商品企画入力・JANコード付番・マスター受注書</span>
            </div>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">High-Fidelity Modal UI</span>
          </div>

          <div className="h-[315px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project3_1.png')}
              alt="商品企画入力・JANコード付番モーダル画面詳細"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <p className="text-[10px] text-neutral-600 font-medium mt-1 px-1">
            重層的なモーダルダイアログでもユーザーが現在地を見失わない階層構造と明快な決定・キャンセルアクションを設計。
          </p>
        </div>
      </div>

      {/* ── Bottom Section: 制作プロセス 5ステップ (全幅横並びカード) ── */}
      <div className="bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-2.5 shadow-2xs">
        <div className="flex items-center justify-between mb-1.5 px-0.5">
          <span className="text-[11px] font-bold text-[#00BFA5] tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
            制作プロセス (PRODUCTION PROCESS)
          </span>
          <span className="text-[9.5px] font-mono text-neutral-400">5 PHASES WORKFLOW</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {processes.map((proc, idx) => (
            <div key={idx} className="bg-white border border-neutral-200/80 rounded-lg p-2 shadow-2xs flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00BFA5] text-white font-mono text-[8px] font-bold flex items-center justify-center shrink-0">
                  {proc.step}
                </span>
                <span className="text-[8px] font-mono font-semibold text-[#00BFA5] bg-[#00BFA5]/10 px-1.5 py-0.5 rounded">
                  {proc.tag}
                </span>
              </div>
              <h4 className="text-[10px] font-bold text-neutral-900 leading-tight mb-1">
                {proc.name}
              </h4>
              <p className="text-[9px] font-medium text-neutral-600 leading-snug">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 09</span>
      </div>
    </div>
  );
};

// Page 10: Part 2 - 全10画面 業務管理ダッシュボードライブラリ横並び特大展開
export const CaseStudy03Part2: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 03 / SCREEN LIBRARY
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#2B6CB0]/10 text-[#2B6CB0] border border-[#2B6CB0]/25 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
              SCREEN LIBRARY
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
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2" />

        <div className="flex items-baseline justify-between gap-4 relative">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-0.5">
              業務管理画面ライブラリ
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              生産管理・商品一覧・在庫一覧・展示会受注・チームオーダーまで、一貫したUIルールで統合設計。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            03
          </span>
        </div>
      </div>

      {/* ── Main Visual Grid: 左右横並び特大展開 (余白排除・視認性最大化) ── */}
      <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left Column: 生産・商品マスター・在庫一覧 */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#00BFA5] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                PART 1
              </span>
              <span className="text-xs text-neutral-800 font-bold">生産管理・商品一覧・マスター設定</span>
            </div>
          </div>

          <div className="h-[380px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project3_2_part1.png')}
              alt="生産管理・商品一覧・マスター設定"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[10px] text-neutral-600 font-medium mt-1 px-1">
            大量の品番・納期・仕様データを迷わず操作できる統一テーブルと視認性の高い行間ルールを確立。
          </p>
        </div>

        {/* Right Column: 展示会受注・チームオーダー・集計 */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#2B6CB0] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                PART 2
              </span>
              <span className="text-xs text-neutral-800 font-bold">在庫アラート・展示会受注・チームオーダー</span>
            </div>
          </div>

          <div className="h-[380px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project3_2_part2.png')}
              alt="在庫アラート・展示会受注・チームオーダー"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[10px] text-neutral-600 font-medium mt-1 px-1">
            欠品リスクの即時アラート通知や、展示会時の迅速な一括受注入力に対応した実務特化フロー。
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 10</span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// CASE STUDY 04: 翻訳アプリダッシュボード
// ────────────────────────────────────────────────────────────────────────────

// Page 11: Part 1 - 概要・課題・改善・制作プロセス・3権限UI詳細
export const CaseStudy04Part1: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  const challenges = [
    '一般ユーザー・テナント管理者・システム管理者で操作権限が錯綜し、設定や重要データの誤操作リスクが存在',
    '言語展開に伴うテキスト伸長（Text Expansion）により、ボタン文字溢れやテーブル崩壊が頻発していた',
    'ステータスや権限レベルが色のみで表現され、色覚多様性ユーザーへの配慮（アクセシビリティ）が不足',
  ];

  const improvements = [
    '権限ごとに固有キーカラーを定義。破壊的操作には2段階確認とタイピング認証を導入し誤操作を防止',
    'コンテンツ長に応じ伸縮するコンポーネント構造と折り返し・省略ルールを徹底し、言語崩れを解消',
    '色に依存しないアイコン＋ラベル併記とコントラスト比4.5:1以上（WCAG AA）を担保し、操作性を向上',
  ];

  const processes = [
    {
      step: '01',
      name: '権限別ロールUI設計',
      tag: 'ROLE-BASED UI',
      desc: '一般・テナント管理・システム管理の3権限を分離。各役割の目的に特化した情報表示とアクセス制御を確立。',
    },
    {
      step: '02',
      name: 'カラーシステム設計',
      tag: 'COLOR SYSTEM',
      desc: '権限ごとに固有カラー（青・緑・紺）を定義。現在の操作コンテキストを一目で識別できる視覚ルールを構築。',
    },
    {
      step: '03',
      name: '翻訳ワークフロー設計',
      tag: 'WORKFLOW',
      desc: '依頼・翻訳・品質チェック・承認の進捗を可視化。ステータス変化と次アクションを直感的に導くUIを設計。',
    },
    {
      step: '04',
      name: 'アクセシビリティ対応',
      tag: 'ACCESSIBILITY',
      desc: 'WCAG AA準拠の高コントラスト配色とテキスト併記を徹底。色覚多様性に配慮した安全な操作性を実現。',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 04 / 2022年 - 2023年 (約1年)
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

        <div className="flex items-baseline justify-between gap-4 mb-1 relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              翻訳アプリのユーザー・テナント管理
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5">
              担当: UI/UX設計、デザイン、プロトタイプ作成
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            04
          </span>
          <div className="text-right shrink-0 relative z-10">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase">体制</span>
            <span className="text-xs font-semibold text-neutral-700">開発会社社長:1名、デザイナー:1名(私)、プログラマー:2名</span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl px-3 py-1.5 flex items-center gap-3">
          <span className="bg-[#00BFA5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            OVERVIEW
          </span>
          <p className="text-xs font-semibold text-neutral-800 leading-snug">
            3つの権限ごとに異なる利用シーンを整理し、誤操作を防ぐ安全な管理体験を構築。
          </p>
        </div>
      </div>

      {/* ── Middle Grid: Left (課題 & 改善 4 cols) & Right (3権限UI詳細 特大展開 8 cols) ── */}
      <div className="grid grid-cols-12 gap-4 my-auto items-stretch">
        {/* Left Column (4 cols): 課題 & 改善 */}
        <div className="col-span-4 flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[11px] font-bold text-[#FF5A5F] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A5F]" />
              直面していた課題 (CHALLENGES)
            </span>
            <div className="space-y-1.5">
              {challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#F8F9FA] rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5A5F] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-[#00BFA5] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
              改善・工夫したポイント (IMPROVEMENTS)
            </span>
            <div className="space-y-1.5">
              {improvements.map((imp, i) => (
                <div key={i} className="flex items-start gap-2 bg-white rounded-lg px-2.5 py-1.5 border border-[#00BFA5]/30 shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00BFA5] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✔
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{imp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): 3権限別ダッシュボード重なり 特大展開 */}
        <div className="col-span-8 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#00BFA5] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                3 ROLES OVERVIEW
              </span>
              <span className="text-xs text-neutral-800 font-bold">ユーザー・テナント・システム管理者の画面分離</span>
            </div>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">Role-Based UI</span>
          </div>

          <div className="h-[315px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project4_1.png')}
              alt="翻訳アプリ 3つの権限別ダッシュボード重なり詳細"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <p className="text-[10px] text-neutral-600 font-medium mt-1 px-1">
            権限ごとに固有のキーカラーとナビゲーション階層を付与し、作業者が現在の権限状態を直感的に把握可能。
          </p>
        </div>
      </div>

      {/* ── Bottom Section: 制作プロセス 4ステップ (全幅横並びカード) ── */}
      <div className="bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-2.5 shadow-2xs">
        <div className="flex items-center justify-between mb-1.5 px-0.5">
          <span className="text-[11px] font-bold text-[#00BFA5] tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
            制作プロセス (PRODUCTION PROCESS)
          </span>
          <span className="text-[9.5px] font-mono text-neutral-400">4 PHASES WORKFLOW</span>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {processes.map((proc, idx) => (
            <div key={idx} className="bg-white border border-neutral-200/80 rounded-lg p-2 shadow-2xs flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00BFA5] text-white font-mono text-[8px] font-bold flex items-center justify-center shrink-0">
                  {proc.step}
                </span>
                <span className="text-[8px] font-mono font-semibold text-[#00BFA5] bg-[#00BFA5]/10 px-1.5 py-0.5 rounded">
                  {proc.tag}
                </span>
              </div>
              <h4 className="text-[10.5px] font-bold text-neutral-900 leading-tight mb-1">
                {proc.name}
              </h4>
              <p className="text-[9px] font-medium text-neutral-600 leading-snug">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 11</span>
      </div>
    </div>
  );
};

// Page 12: Part 2 - 多言語・権限別ダッシュボード全画面ライブラリ横並び特大展開
export const CaseStudy04Part2: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 04 / COMPLETE SCREEN LIBRARY
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#2B6CB0]/10 text-[#2B6CB0] border border-[#2B6CB0]/25 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
              FULL ROLE LIBRARY
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
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2" />

        <div className="flex items-baseline justify-between gap-4 relative">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-0.5">
              多言語・権限別ダッシュボードライブラリ
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              一般ユーザー（翻訳実行・プロジェクト）・テナント管理・システム管理者（監査ログ・契約管理）の完全網羅。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            04
          </span>
        </div>
      </div>

      {/* ── Main Visual Grid: 左右横並び特大展開 (余白排除・視認性最大化) ── */}
      <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left Column: ユーザーページ */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#2576D2] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                USER ROLE
              </span>
              <span className="text-xs text-neutral-800 font-bold">一般ユーザー画面</span>
            </div>
          </div>

          <div className="h-[380px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project4_2_user.png')}
              alt="一般ユーザー画面"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[10px] text-neutral-600 font-medium mt-1 px-1">
            翻訳実行・プロジェクト管理・用語集参照など、作業者が直感的に迷わず進められる明快なUIフロー。
          </p>
        </div>

        {/* Right Column: テナント管理 ＆ システム管理 の2段展開 */}
        <div className="col-span-6 flex flex-col justify-between gap-3">
          {/* Tenant Admin Block */}
          <div className="bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm flex-1">
            <div className="flex items-center justify-between mb-1 px-1">
              <div className="flex items-center gap-2">
                <span className="bg-[#438A70] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                  TENANT ADMIN
                </span>
                <span className="text-xs text-neutral-800 font-bold">テナント管理画面</span>
              </div>
            </div>
            <div className="h-[150px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1 shadow-inner">
              <img
                src={getAssetPath('/experiences/projects/project4_2_tenant.png')}
                alt="テナント管理画面"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[9.5px] text-neutral-500 font-medium mt-1 px-1">
              組織メンバー・翻訳メモリ・辞書設定を安全に管理。
            </p>
          </div>

          {/* System Admin Block */}
          <div className="bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 flex flex-col justify-between shadow-sm flex-1">
            <div className="flex items-center justify-between mb-1 px-1">
              <div className="flex items-center gap-2">
                <span className="bg-[#002E5C] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                  SYSTEM ADMIN
                </span>
                <span className="text-xs text-neutral-800 font-bold">システム管理者画面</span>
              </div>
            </div>
            <div className="h-[150px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1 shadow-inner">
              <img
                src={getAssetPath('/experiences/projects/project4_2_admin.png')}
                alt="システム管理者画面"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[9.5px] text-neutral-500 font-medium mt-1 px-1">
              テナント契約・API利用状況・セキュリティ監査ログを一括統制。
            </p>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 12</span>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// CASE STUDY 05: 安全運転支援サービス
// ────────────────────────────────────────────────────────────────────────────

// Page 13: Part 1 - 概要・課題・改善・制作プロセス・スマホアプリ4画面フロー
export const CaseStudy05Part1: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  const challenges = [
    '乗車直後の数十秒でBluetooth接続・測定・判定・エンジン解除を確実に完了させる必要があった',
    '通信ラグや測定失敗時に「エラー」のみ表示され、原因不明で焦った利用者の再試行が多発',
    '早朝の薄暗い車内や強い直射日光下、片手操作など過酷な車載物理環境に適したUIが不足していた',
  ];

  const improvements = [
    '車両選択からエンジン始動までを1方向ステップバーで可視化し、次の操作を1つに絞り込む直感設計',
    '障害パターンを即時分類し、イラストと具体的復帰手順を提示してリカバリー時間を劇的に短縮',
    'ダーク基調×高輝度カラーと片手親指で確実に届く特大タッチ領域（64px+）を車載環境に実装',
  ];

  const processes = [
    {
      step: '01',
      name: 'IoTデバイス連携設計',
      tag: 'IOT & BLUETOOTH',
      desc: '検知器からのBluetooth信号受信とアプリ連携を最適化。機器接続の心理的不安を解消するUXを確立。',
    },
    {
      step: '02',
      name: '乗車前クイック操作設計',
      tag: 'QUICK FLOW',
      desc: '乗車直後の限られた時間を想定し、最小タップで検査完結する1本道フローとワンタップ始動を実現。',
    },
    {
      step: '03',
      name: '管理ダッシュボード設計',
      tag: 'ADMIN DASHBOARD',
      desc: 'ドライバー検査履歴、車両ステータス、緊急アラートを一元化。点呼・記録業務を効率化するUIを構築。',
    },
    {
      step: '04',
      name: '車載モバイル最適化',
      tag: 'IN-CAR UX',
      desc: '直射日光や薄暗い車内に適応する高コントラスト配色を採用。片手親指で確実に届く特大タッチ領域を設計。',
    },
    {
      step: '05',
      name: 'エラーリカバリー設計',
      tag: 'ERROR HANDLING',
      desc: '通信不調や再検査時の復帰ガイダンスをイラスト付きで即時提示。ドライバーの焦りや迷いを防止。',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 05 / 2021年 - (約3ヵ月)
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

        <div className="flex items-baseline justify-between gap-4 mb-1 relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              安全運転支援サービスのスマホアプリ・ダッシュボード
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5">
              担当: UI/UX設計、デザイン、プロトタイプ作成
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            05
          </span>
          <div className="text-right shrink-0 relative z-10">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase">体制</span>
            <span className="text-xs font-semibold text-neutral-700">開発会社社長:1名、デザイナー:1名(私)、プログラマー:2名</span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="bg-[#F8F9FA] border border-neutral-200/80 rounded-xl px-3 py-1.5 flex items-center gap-3">
          <span className="bg-[#00BFA5] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            OVERVIEW
          </span>
          <p className="text-xs font-semibold text-neutral-800 leading-snug">
            IoTデバイスとスマホアプリのシームレスな体験設計。限られた時間で確実な操作を可能にする UX。
          </p>
        </div>
      </div>

      {/* ── Middle Grid: Left (課題 & 改善 4 cols) & Right (スマホアプリ4画面 特大展開 8 cols) ── */}
      <div className="grid grid-cols-12 gap-4 my-auto items-stretch">
        {/* Left Column (4 cols): 課題 & 改善 */}
        <div className="col-span-4 flex flex-col justify-between space-y-2">
          <div>
            <span className="text-[11px] font-bold text-[#FF5A5F] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A5F]" />
              直面していた課題 (CHALLENGES)
            </span>
            <div className="space-y-1.5">
              {challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#F8F9FA] rounded-lg px-2.5 py-1.5 border border-neutral-200/70">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5A5F] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold text-[#00BFA5] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
              改善・工夫したポイント (IMPROVEMENTS)
            </span>
            <div className="space-y-1.5">
              {improvements.map((imp, i) => (
                <div key={i} className="flex items-start gap-2 bg-white rounded-lg px-2.5 py-1.5 border border-[#00BFA5]/30 shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#00BFA5] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✔
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{imp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): スマホアプリ4画面 特大展開 */}
        <div className="col-span-8 bg-[#F8FAFC] border border-neutral-200 rounded-xl p-3 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#00BFA5] text-white text-[9px] font-bold px-2.5 py-0.5 rounded uppercase">
                MOBILE APP FLOW
              </span>
              <span className="text-xs text-neutral-800 font-bold">乗車時待機から通信・復帰・始動までの4画面</span>
            </div>
            <span className="text-[10px] font-mono text-[#00BFA5] font-bold">IoT Bluetooth Suite</span>
          </div>

          <div className="h-[315px] rounded-lg overflow-hidden bg-black/95 border border-neutral-800 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/projects/project5_1.png')}
              alt="安全運転支援アプリ 4画面フロー（待機・通信・エラー復帰・解除）"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
          <div className="grid grid-cols-4 gap-1 text-[8.5px] font-mono text-center text-neutral-700 font-bold pt-1.5 border-t border-neutral-200/80 mt-1">
            <span>01 車両選択・待機</span>
            <span>02 デジタルキー通信</span>
            <span>03 エラー検知・復帰手順</span>
            <span>04 解除・エンジン始動</span>
          </div>
        </div>
      </div>

      {/* ── Bottom Section: 制作プロセス 5ステップ (全幅横並びカード) ── */}
      <div className="bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-2.5 shadow-2xs">
        <div className="flex items-center justify-between mb-1.5 px-0.5">
          <span className="text-[11px] font-bold text-[#00BFA5] tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5]" />
            制作プロセス (PRODUCTION PROCESS)
          </span>
          <span className="text-[9.5px] font-mono text-neutral-400">5 PHASES WORKFLOW</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {processes.map((proc, idx) => (
            <div key={idx} className="bg-white border border-neutral-200/80 rounded-lg p-2 shadow-2xs flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00BFA5] text-white font-mono text-[8px] font-bold flex items-center justify-center shrink-0">
                  {proc.step}
                </span>
                <span className="text-[8px] font-mono font-semibold text-[#00BFA5] bg-[#00BFA5]/10 px-1.5 py-0.5 rounded">
                  {proc.tag}
                </span>
              </div>
              <h4 className="text-[10px] font-bold text-neutral-900 leading-tight mb-1">
                {proc.name}
              </h4>
              <p className="text-[9px] font-medium text-neutral-600 leading-snug">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 13</span>
      </div>
    </div>
  );
};

// Page 14: Part 2 - Web管理者ダッシュボード 9画面業務遷移フロー図特大展開
export const CaseStudy05Part2: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            CASE STUDY 05 / DASHBOARD & FLOW DESIGN
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#2B6CB0]/10 text-[#2B6CB0] border border-[#2B6CB0]/25 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
              FLOW SUITE
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
        </div>
        <div className="w-10 h-1 bg-[#00BFA5] mb-2" />

        <div className="flex items-baseline justify-between gap-4 relative">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-0.5">
              Web管理者ダッシュボード 9画面業務遷移フロー図
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              車両管理・アルコール検知・企業管理・申請処理をシームレスに横断する全体操作フロー設計。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            05
          </span>
        </div>
      </div>

      {/* ── Main Full-Width Visual: project5_2.png (超特大フル表示) ── */}
      <div className="bg-[#F8FAFC] border border-neutral-200 rounded-xl p-2.5 my-auto shadow-sm flex flex-col">
        <div className="h-[440px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
          <img
            src={getAssetPath('/experiences/projects/project5_2.png')}
            alt="安全運転支援サービス Web管理者ダッシュボード 画面遷移フロー図"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 text-[10px] text-neutral-600 font-medium pt-2 px-1">
          <div>
            <span className="font-bold text-neutral-800 block">① 複雑な権限・申請承認の可視化</span>
            ドライバーの利用申請から管理者の承認、鍵のダウンロード許可までの状態遷移を一元化。
          </div>
          <div>
            <span className="font-bold text-neutral-800 block">② 厳格なアルコール検知・車両管理</span>
            アルコール検知結果の履歴確認と車両ごとの稼働ステータスをリアルタイムに把握可能。
          </div>
          <div>
            <span className="font-bold text-neutral-800 block">③ 企業・グループ管理の拡張性</span>
            複数拠点・複数グループを持つ大企業でも混乱なく管理できるテナント階層設計。
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 14</span>
      </div>
    </div>
  );
};
