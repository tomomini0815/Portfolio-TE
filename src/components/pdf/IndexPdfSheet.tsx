import React from 'react';

interface IndexPdfSheetProps {
  onPrintSingle?: () => void;
}

export const IndexPdfSheet: React.FC<IndexPdfSheetProps> = ({ onPrintSingle }) => {
  const projects = [
    {
      num: '01',
      title: '覆面調査ダッシュボードのレスポンシブ化',
      category: 'RESPONSIVE / MOBILE / DESIGN SYSTEM',
      pages: 'P.04—05',
      pageCount: '全2頁',
      period: '2025.08—2026.03 (約8ヵ月)',
      challenge: 'PC大画面前提の複雑な調査レポートを、調査員が現場でスマートフォンから即座に確認・操作できるよう再設計。',
      solution: 'プログレッシブ・ディスクロージャーによる階層整理、親指操作に適した48px+タッチ領域、Figmaデザインシステム構築。',
      deliverables: 'PCダッシュボード / スマホ現場3画面 / AutoLayout・Variables対応デザインシステム',
    },
    {
      num: '02',
      title: '建設業界向け SaaS のダッシュボード設計',
      category: 'B2B SaaS / DESIGN SYSTEM / MOBILE APP',
      pages: 'P.06—08',
      pageCount: '全3頁',
      period: '2024.06—2025.07 (約1年2ヵ月)',
      challenge: '建設現場の工程・安全管理要件を整理し、屋外の現場作業員とオフィスの管理者の利用環境の乖離を解消。',
      solution: 'トークンから設計した包括的デザインシステム、PC用統合ダッシュボード、直射日光・手袋操作対応の現場モバイルUI。',
      deliverables: 'デザインシステム (Foundation・Component) / Web業務画面 / 現場モバイル全画面',
    },
    {
      num: '03',
      title: 'アパレル企業のデータ可視化ダッシュボード',
      category: 'DATA VISUALIZATION / 10 SCREENS SUITE',
      pages: 'P.09—10',
      pageCount: '全2頁',
      period: '2021年—2024年 (約1年6ヵ月)',
      challenge: '数万点に及ぶ品番・売上・在庫データが散在し、欠品や過剰在庫などの異常値を即座に特定できなかった。',
      solution: 'セマンティックカラーと視覚的階層によるデータ可視化、固定ファセット検索、商品企画モーダルと全10画面スイート。',
      deliverables: '商品企画・JAN付番モーダル / 統合ダッシュボード全10画面ライブラリ',
    },
    {
      num: '04',
      title: '翻訳アプリのユーザー・テナント管理UI',
      category: 'ACCESSIBILITY / MULTI-TENANT / 3 USER ROLES',
      pages: 'P.11—12',
      pageCount: '全2頁',
      period: '2022年—2023年 (約1年)',
      challenge: '一般ユーザー・テナント管理者・システム管理者の3権限に応じた機能分離と、多言語テキスト伸長・誤操作の防止。',
      solution: '権限ごとの明確なナビゲーション分離、WCAG AA準拠のアクセシビリティ、破壊的操作の2段階認証、伸縮UIコンポーネント。',
      deliverables: '3権限別UI設計 / 一般ユーザー・テナント管理・システム管理者全画面スイート',
    },
    {
      num: '05',
      title: '安全運転支援サービス（車載IoT・自動制御）',
      category: 'MOBILE APP UI / IoT / 9 SCREEN FLOW SUITE',
      pages: 'P.13—14',
      pageCount: '全2頁',
      period: '2021年 (約3ヵ月)',
      challenge: '車載IoT機器とのBluetooth通信ラグや車内での視認性・片手操作制約下で、短時間かつ確実に検査を完了させる体験設計。',
      solution: '1方向ステップ型プログレスバー、障害時のイラスト付き具体的復帰ガイダンス、直射日光対応ダークモード×高輝度UI。',
      deliverables: 'スマホアプリ4画面フロー / Web管理者ダッシュボード全9画面完全遷移図',
    },
    {
      num: '06',
      title: 'EarthScope（地球まるごと大探検・自主制作）',
      category: 'PERSONAL / 3D WEBGL / EDTECH / MOBILE',
      pages: 'P.15—16',
      pageCount: '全2頁',
      period: '2026年 (自主制作)',
      challenge: '全世界198ヵ国の地理・歴史・統計データを、認知負荷を抑えて3D地球儀とクイズで楽しく定着させる情報設計。',
      solution: 'WebGL地球儀と平面地図のシームレス切替、国別7タブ詳細ドロワー、4択クイズ演習、多軸データ統計比較、スマホ最適化。',
      deliverables: '3Dインタラクティブ地球儀 / 国別7タブ詳細UI / クイズ / 統計比較グラフ / スマホUI',
    },
  ];

  return (
    <div className="pdf-sheet a4-landscape bg-white text-neutral-800 px-8 py-5 flex flex-col justify-between border border-neutral-200 shadow-md rounded-xl box-border overflow-hidden">
      {/* ── Top Header ── */}
      <div className="mb-1.5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[10.5px] font-mono tracking-widest text-[#00BFA5] font-bold uppercase">
            INDEX / SELECTED WORKS & PERSONAL PROJECT (2021—2026)
          </span>
          {onPrintSingle && (
            <button
              onClick={onPrintSingle}
              data-pdf-hide
              className="text-xs px-2.5 py-0.5 rounded bg-[#00BFA5]/10 text-[#00BFA5] hover:bg-[#00BFA5]/20 font-medium transition-colors cursor-pointer"
            >
              このシートのみPDF保存
            </button>
          )}
        </div>
        <div className="w-10 h-0.5 bg-[#00BFA5] mb-1.5" />

        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">
              プロジェクト一覧・目次
            </h2>
            <p className="text-[10.5px] text-neutral-600 font-medium mt-0.5">
              複雑な業務課題を解決した実務ケーススタディ5件と、高いフロントエンド・3Dデータ可視化力を実証する自主制作1件の目次です。
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[9.5px] font-mono font-bold text-neutral-400 block">TOTAL WORKS</span>
            <span className="text-xs font-bold text-neutral-800 font-mono">6 PROJECTS (P.04—P.16)</span>
          </div>
        </div>
      </div>

      {/* ── 6 Projects Cards: 均等でバランスの取れたカードリスト ── */}
      <div className="flex-1 flex flex-col justify-between my-1 space-y-1.5">
        {projects.map((p) => (
          <div
            key={p.num}
            className={`border rounded-lg px-4 py-2 transition-colors flex items-center gap-4 ${
              p.num === '06'
                ? 'bg-[#F0F9FF] border-[#BAE6FD] shadow-xs'
                : 'bg-[#F8FAFC] border-neutral-200 shadow-2xs hover:border-[#00BFA5]/50'
            }`}
          >
            {/* Project Number & Page Badge */}
            <div className="shrink-0 w-24 text-center border-r border-neutral-200/90 pr-3">
              <span
                className={`text-xl font-black font-mono block leading-none mb-0.5 ${
                  p.num === '06' ? 'text-[#0284C7]' : 'text-[#00BFA5]'
                }`}
              >
                {p.num}
              </span>
              <span className="text-[11px] font-bold font-mono text-neutral-900 block">
                {p.pages}
              </span>
              <span className="text-[9px] text-neutral-500 font-medium block">
                {p.pageCount}
              </span>
            </div>

            {/* Project Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2 min-w-0">
                  <h3 className="text-xs font-bold text-neutral-900 truncate">
                    {p.title}
                  </h3>
                  <span
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                      p.num === '06'
                        ? 'bg-[#0284C7]/10 text-[#0284C7]'
                        : 'bg-[#00BFA5]/10 text-[#00BFA5]'
                    }`}
                  >
                    {p.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-600 shrink-0 bg-white/80 px-2 py-0.5 rounded border border-neutral-200/80">
                  {p.period}
                </span>
              </div>

              <div className="grid grid-cols-12 gap-3 text-[10px]">
                <div className="col-span-6 text-neutral-700 leading-snug">
                  <div className="font-bold text-neutral-800 text-[9.5px] mb-0.5">
                    【課題 & 設計アプローチ】
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-[10px]">
                    {p.challenge}
                  </p>
                </div>
                <div className="col-span-6 text-neutral-700 leading-snug border-l border-neutral-200/80 pl-3">
                  <div className="font-bold text-neutral-800 text-[9.5px] mb-0.5">
                    【主な成果物 & 収録内容】
                  </div>
                  <p className="text-neutral-900 font-medium leading-relaxed text-[10px]">
                    {p.deliverables}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200 pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-400">
        <span>T.E · UI/UX PORTFOLIO</span>
        <span>INDEX / SELECTED WORKS / 03</span>
      </div>
    </div>
  );
};
