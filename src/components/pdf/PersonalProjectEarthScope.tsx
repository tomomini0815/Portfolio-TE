import React from 'react';
import { getAssetPath } from '@/lib/utils';

// ────────────────────────────────────────────────────────────────────────────
// PERSONAL PROJECT: EarthScope（地球まるごと大探検）
// ────────────────────────────────────────────────────────────────────────────

// Page 15: Part 1 - 概要・課題・改善・3D地球儀＆国別詳細UI特大展開
export const PersonalProjectPart1: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  const challenges = [
    '教科書や静的な白地図では国同士の空間的距離や地理的文脈、多角的なデータ（人口・GDP・歴史）の相互連関を直感的に把握しにくかった',
    '全世界198ヵ国の膨大かつ多軸な情報（基本・歴史・文化・人口・経済・軍事・地理・受験頻出）を、認知負荷を抑えて段階的に提示する情報設計の難しさ',
    'PC大画面での快適な3D地球儀・地図探索と、通学中スマホでの片手親指操作・クイズ学習体験を両立させるレスポンシブなUI設計',
  ];

  const improvements = [
    '3D地球儀と平面地図のシームレスな切り替え、大陸フィルタ・学習済み国の色分け可視化により、ゲーム感覚で世界を探索できる体験を構築',
    '段階的情報開示（プログレッシブ・ディスクロージャー）に基づき、国旗・名所写真・基本データを即座に把握できるドロワーと7つの多軸詳細タブを設計',
    '外出先でも片手親指で迷わず操作できるレスポンシブなボトムナビゲーションと48px+大ボタン設計により、優れたモバイル学習体験を実現',
  ];

  const processes = [
    {
      step: '01',
      name: '学習課題の抽出・企画構想',
      desc: '地理・歴史学習の形骸化に着目。198ヵ国の空間的距離と多軸データを直感的に体感できる学習体験を構想。',
      tag: 'CONCEPT & UX',
    },
    {
      step: '02',
      name: '多軸データ・情報構造設計',
      desc: '基本・歴史・文化・経済・受験頻出の多角データを整理。段階的開示（プログレッシブ）で認知負荷を抑制。',
      tag: 'DATA MODEL',
    },
    {
      step: '03',
      name: '3D空間＆UIシステム設計',
      desc: '回転・ズーム可能な3D地球儀と平面地図の連携を設計。大陸フィルタや視覚的ヒエラルキーを確立。',
      tag: '3D INTERACTION',
    },
    {
      step: '04',
      name: 'ゲーミフィケーション・スマホ最適化',
      desc: '4択クイズ、統計比較、称号リワードを設計。通学中の片手操作に応えるボトムナビゲーションを追求。',
      tag: 'MOBILE & GAME',
    },
    {
      step: '05',
      name: 'AI実装支援・品質検証',
      desc: 'AIコーディング支援を活用した迅速な実装（React/WebGL）と、3D描画負荷・操作性の反復検証を推進。',
      tag: 'AI-ASSISTED DEV',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-widest text-[#0284C7] font-bold uppercase">
              PERSONAL PROJECT / 2026年 - (自主制作)
            </span>
            <span className="bg-[#E0F2FE] text-[#0284C7] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
              Self-Initiated Work
            </span>
          </div>
          {onPrintSingle && (
            <button
              onClick={onPrintSingle}
              data-pdf-hide
              className="text-xs px-3 py-1 rounded bg-[#0284C7]/10 text-[#0284C7] hover:bg-[#0284C7]/20 font-medium transition-colors cursor-pointer"
            >
              この案件のみPDF保存
            </button>
          )}
        </div>
        <div className="w-10 h-1 bg-[#0284C7] mb-2" />

        <div className="flex items-baseline justify-between gap-4 mb-1 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                EarthScope（地球まるごと大探検）
              </h2>
              <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded border border-neutral-200">
                Web App / EdTech
              </span>
            </div>
            <p className="text-xs text-neutral-600 mt-0.5">
              担当: 企画立案、UI/UX設計、デザインシステム、データ可視化設計、フロントエンド実装（AI協働 / React / WebGL）
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            06
          </span>
          <div className="text-right shrink-0 relative z-10">
            <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase">体制</span>
            <span className="text-xs font-semibold text-neutral-700">私1名</span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#0284C7] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
              CONCEPT
            </span>
            <p className="text-xs font-semibold text-neutral-800 leading-snug">
              全世界198ヵ国の地理・歴史・文化・統計データを、3D世界地図とクイズで楽しく体感・定着させる学習プラットフォーム。
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Grid: Left (課題 & 改善 4 cols) & Right (白枠ハイライト3D地球儀＆詳細ドロワー特大展開 8 cols) ── */}
      <div className="grid grid-cols-12 gap-4 my-auto items-stretch">
        {/* Left Column (4 cols) */}
        <div className="col-span-4 flex flex-col justify-between space-y-2">
          <div>
            <span className="text-xs font-bold text-[#FF5A5F] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5A5F]" />
              直面していた課題 (CHALLENGES)
            </span>
            <div className="space-y-1.5">
              {challenges.map((c, i) => (
                <div key={i} className="flex items-start gap-1.5 bg-[#F8F9FA] rounded-lg p-1.5 border border-neutral-200/70">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5A5F] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-[#0284C7] tracking-wider uppercase block mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
              改善・工夫したポイント (IMPROVEMENTS)
            </span>
            <div className="space-y-1.5">
              {improvements.map((imp, i) => (
                <div key={i} className="flex items-start gap-1.5 bg-white rounded-lg p-1.5 border border-[#0284C7]/30 shadow-2xs">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0284C7] text-white font-mono text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✔
                  </span>
                  <p className="text-[10px] font-medium text-neutral-800 leading-snug">{imp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3D地球儀ハイライト ＆ 7カテゴリ詳細ドロワー 特大展開 (8 cols) */}
        <div className="col-span-8 bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-2.5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1 px-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#0284C7] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                MAIN UI VIEW
              </span>
              <span className="text-[11.5px] text-neutral-800 font-bold">3Dインタラクティブ地球儀 ＆ 国別学習ダッシュボード</span>
            </div>
            <span className="text-[9.5px] font-mono text-[#0284C7] font-bold">3D Interactive Globe & Dashboard</span>
          </div>

          <div className="h-[315px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-inner">
            <img
              src={getAssetPath('/experiences/earth-scope/01_globe_dashboard.png')}
              alt="EarthScope 3Dインタラクティブ地球儀と国別学習ダッシュボード"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <p className="text-[9px] text-neutral-600 font-medium mt-1 px-1">
            直感的に回転・ズームできる3D地球儀、大陸別フィルター、学習進捗ゲージ、注目国基本データが一体となった探索メインUI。
          </p>
        </div>
      </div>

      {/* ── Bottom Section: 制作プロセス 5ステップ (全幅横並びカード) ── */}
      <div className="bg-[#F8FAFC] border border-neutral-200/80 rounded-xl p-2.5 shadow-2xs">
        <div className="flex items-center justify-between mb-1.5 px-0.5">
          <span className="text-[11px] font-bold text-[#0284C7] tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
            制作プロセス (PRODUCTION PROCESS)
          </span>
          <span className="text-[9.5px] font-mono text-neutral-400">5 PHASES WORKFLOW</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {processes.map((proc, idx) => (
            <div key={idx} className="bg-white border border-neutral-200/80 rounded-lg p-2 shadow-2xs flex flex-col">
              <div className="flex items-center justify-between mb-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#0284C7] text-white font-mono text-[8px] font-bold flex items-center justify-center shrink-0">
                  {proc.step}
                </span>
                <span className="text-[8px] font-mono font-semibold text-[#0284C7] bg-[#0284C7]/10 px-1.5 py-0.5 rounded">
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
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 15</span>
      </div>
    </div>
  );
};

// Page 16: Part 2 - 多彩な学習体験＆ゲーミフィケーション（クイズ・統計比較・マイページ・スマホ対応）
export const PersonalProjectPart2: React.FC<{ onPrintSingle?: () => void }> = ({ onPrintSingle }) => {
  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-7 py-4 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Header ── */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#0284C7] font-bold uppercase">
            PERSONAL PROJECT / LEARNING EXPERIENCE & GAMIFICATION
          </span>
          <div className="flex items-center gap-2">
            <span className="bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/25 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
              INTERACTIVE SUITE
            </span>
            {onPrintSingle && (
              <button
                onClick={onPrintSingle}
                data-pdf-hide
                className="text-xs px-3 py-1 rounded bg-[#0284C7]/10 text-[#0284C7] hover:bg-[#0284C7]/20 font-medium transition-colors cursor-pointer"
              >
                この案件のみPDF保存
              </button>
            )}
          </div>
        </div>
        <div className="w-10 h-1 bg-[#0284C7] mb-2" />

        <div className="flex items-baseline justify-between gap-4 relative">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-0.5">
              多彩な学習アプローチとゲーミフィケーション設計
            </h2>
            <p className="text-xs text-neutral-600 font-medium">
              3D地球儀の探検に加え、比較分析・4択クイズ・学習記録で知識の定着を促す総合知育体験。
            </p>
          </div>

          {/* Project Number Watermark in Lime Accent */}
          <span
            className="absolute -top-2 right-0 z-0 font-bebas text-[115px] leading-none select-none font-bold tracking-tighter"
            style={{ color: 'rgba(198, 239, 88, 0.25)' }}
            aria-hidden="true"
          >
            06
          </span>
        </div>
      </div>

      {/* ── Main Visual Grid: 4画面展開 (2x2 Grid) ── */}
      <div className="grid grid-cols-12 gap-3 my-auto">
        {/* Top-Left: 世界地理・歴史マスタークイズ */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl px-3 py-2 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1 px-0.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#0D9488] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                QUIZ MODE
              </span>
              <span className="text-xs text-neutral-800 font-bold">世界地理・歴史マスタークイズ</span>
            </div>
            <span className="text-[9.5px] font-mono text-neutral-400">出題対象・学年別難易度選択</span>
          </div>
          <div className="h-[230px] max-h-[230px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1.5 shadow-inner">
            <img
              src={getAssetPath('/experiences/earth-scope/04_quiz_view.png')}
              alt="世界地理・歴史マスタークイズ"
              style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <p className="text-[9.5px] text-neutral-600 font-medium mt-1 px-0.5">
            国旗あて・首都あて・年表並べ替え・入試頻出など、目的別の演習でインプット知識を即座に定着。
          </p>
        </div>

        {/* Top-Right: 国データ統計比較グラフ */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl px-3 py-2 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1 px-0.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#0D9488] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                COMPARISON
              </span>
              <span className="text-xs text-neutral-800 font-bold">国データ統計比較ダッシュボード</span>
            </div>
            <span className="text-[9.5px] font-mono text-neutral-400">最大10ヵ国・棒グラフ・ソート表</span>
          </div>
          <div className="h-[230px] max-h-[230px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1.5 shadow-inner">
            <img
              src={getAssetPath('/experiences/earth-scope/05_compare_view.png')}
              alt="国データ統計比較"
              style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <p className="text-[9.5px] text-neutral-600 font-medium mt-1 px-0.5">
            人口・名目GDP・面積・軍事費などを直感的棒グラフと昇順・降順ソート可能な詳細テーブルで比較。
          </p>
        </div>

        {/* Bottom-Left: マイページ＆学習記録 */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl px-3 py-2 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1 px-0.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#0D9488] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                GAMIFICATION
              </span>
              <span className="text-xs text-neutral-800 font-bold">マイページ ＆ 学習進捗リワード</span>
            </div>
            <span className="text-[9.5px] font-mono text-neutral-400">称号・7日間リズム・制覇率</span>
          </div>
          <div className="h-[230px] max-h-[230px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1.5 shadow-inner">
            <img
              src={getAssetPath('/experiences/earth-scope/07_mypage_view.png')}
              alt="マイページと学習記録"
              style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <p className="text-[9.5px] text-neutral-600 font-medium mt-1 px-0.5">
            「見習いトラベラー」から始まる称号ランクアップや学習ストリークにより、継続的な探検意欲を刺激。
          </p>
        </div>

        {/* Bottom-Right: スマホ最適化＆平面地図 */}
        <div className="col-span-6 bg-[#F8FAFC] border border-neutral-200 rounded-xl px-3 py-2 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-1 px-0.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#0D9488] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                MOBILE FIRST
              </span>
              <span className="text-xs text-neutral-800 font-bold">スマートフォン最適化 ＆ 平面地図</span>
            </div>
            <span className="text-[9.5px] font-mono text-neutral-400">ボトムナビ・片手操作・ピンチ操作</span>
          </div>
          <div className="grid grid-cols-2 gap-2 h-[230px] max-h-[230px]">
            <div className="h-[230px] max-h-[230px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1.5 shadow-inner">
              <img
                src={getAssetPath('/experiences/earth-scope/06_mobile_view.png')}
                alt="スマートフォン最適化UI"
                style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-[230px] max-h-[230px] rounded-lg overflow-hidden bg-white border border-neutral-200 flex items-center justify-center p-1.5 shadow-inner">
              <img
                src={getAssetPath('/experiences/earth-scope/02_flat_map.png')}
                alt="平面地図ビュー"
                style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <p className="text-[9.5px] text-neutral-600 font-medium mt-1 px-0.5">
            通学時間などのスキマ学習に配慮したモバイル親指操作UIと、世界全体を俯瞰できる平面地図ビュー。
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>SELECTED WORKS / 16</span>
      </div>
    </div>
  );
};
