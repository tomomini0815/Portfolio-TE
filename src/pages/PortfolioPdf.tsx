import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CoverPdfSheet } from '@/components/pdf/CoverPdfSheet';
import { ProfilePdfSheet } from '@/components/pdf/ProfilePdfSheet';
import { IndexPdfSheet } from '@/components/pdf/IndexPdfSheet';
import { CaseStudy01Part1, CaseStudy01Part2 } from '@/components/pdf/CaseStudy01';
import { CaseStudy02Part1, CaseStudy02Part2, CaseStudy02Part3 } from '@/components/pdf/CaseStudy02';
import {
  CaseStudy03Part1,
  CaseStudy03Part2,
  CaseStudy04Part1,
  CaseStudy04Part2,
  CaseStudy05Part1,
  CaseStudy05Part2,
} from '@/components/pdf/CaseStudySingle';
import {
  PersonalProjectPart1,
  PersonalProjectPart2,
} from '@/components/pdf/PersonalProjectEarthScope';
import { ArrowLeft, CheckSquare, Square, Download, Printer } from 'lucide-react';

export const PortfolioPdf: React.FC = () => {
  // Selection state for pages/cases
  const [includeCover, setIncludeCover] = useState(true);
  const [includeProfile, setIncludeProfile] = useState(true);
  const [includeIndex, setIncludeIndex] = useState(true);
  const [includeCase1, setIncludeCase1] = useState(true);
  const [includeCase2, setIncludeCase2] = useState(true);
  const [includeCase3, setIncludeCase3] = useState(true);
  const [includeCase4, setIncludeCase4] = useState(true);
  const [includeCase5, setIncludeCase5] = useState(true);
  const [includePersonal, setIncludePersonal] = useState(true);

  const toggleSelectAll = (select: boolean) => {
    setIncludeCover(select);
    setIncludeProfile(select);
    setIncludeIndex(select);
    setIncludeCase1(select);
    setIncludeCase2(select);
    setIncludeCase3(select);
    setIncludeCase4(select);
    setIncludeCase5(select);
    setIncludePersonal(select);
  };

  const handlePrintAll = () => {
    window.print();
  };

  const handlePrintSingle = (target: string) => {
    const prev = {
      cover: includeCover,
      profile: includeProfile,
      index: includeIndex,
      c1: includeCase1,
      c2: includeCase2,
      c3: includeCase3,
      c4: includeCase4,
      c5: includeCase5,
      personal: includePersonal,
    };

    setIncludeCover(target === 'cover');
    setIncludeProfile(target === 'profile');
    setIncludeIndex(target === 'index');
    setIncludeCase1(target === 'c1');
    setIncludeCase2(target === 'c2');
    setIncludeCase3(target === 'c3');
    setIncludeCase4(target === 'c4');
    setIncludeCase5(target === 'c5');
    setIncludePersonal(target === 'personal');

    setTimeout(() => {
      window.print();
      setTimeout(() => {
        setIncludeCover(prev.cover);
        setIncludeProfile(prev.profile);
        setIncludeIndex(prev.index);
        setIncludeCase1(prev.c1);
        setIncludeCase2(prev.c2);
        setIncludeCase3(prev.c3);
        setIncludeCase4(prev.c4);
        setIncludeCase5(prev.c5);
        setIncludePersonal(prev.personal);
      }, 500);
    }, 150);
  };

  const totalPages =
    (includeCover ? 1 : 0) +
    (includeProfile ? 1 : 0) +
    (includeIndex ? 1 : 0) +
    (includeCase1 ? 2 : 0) +
    (includeCase2 ? 3 : 0) +
    (includeCase3 ? 2 : 0) +
    (includeCase4 ? 2 : 0) +
    (includeCase5 ? 2 : 0) +
    (includePersonal ? 2 : 0);

  return (
    <div className="min-h-screen bg-[#E5E9EE] text-neutral-900 py-8 px-4 font-sans print:p-0 print:m-0 print:min-h-0 print:bg-white">
      {/* ── Non-printable Control Toolbar ── */}
      <div data-pdf-hide className="max-w-6xl mx-auto mb-8">
        <div className="bg-white border border-neutral-300 rounded-2xl p-6 shadow-xl text-neutral-800">
          <div className="border-b border-neutral-200 pb-4 mb-4 space-y-3">
            {/* Top Row: Return to Portfolio (Left) & Save PDF (Right) */}
            <div className="flex items-center justify-between gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-100 hover:bg-neutral-200 px-3.5 py-2 rounded-lg border border-neutral-200 shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> ポートフォリオに戻る
              </Link>

              {/* Print / Save PDF Button */}
              <button
                onClick={handlePrintAll}
                disabled={totalPages === 0}
                className="flex items-center gap-2 text-xs font-bold px-6 py-2.5 rounded-xl bg-[#00BFA5] hover:bg-[#00A892] text-white shadow-lg shadow-[#00BFA5]/25 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                <Download className="w-4 h-4" /> 選択中のスライド（全 {totalPages} ページ）をPDF保存
              </button>
            </div>

            {/* Title & Description */}
            <div>
              <h1 className="text-lg font-bold text-neutral-900">
                ポートフォリオPDF版
              </h1>
              <p className="text-xs text-neutral-500 mt-0.5">
                実務実績5件に加え、高度なフロントエンド・3Dデータ可視化力を実証する自主制作「EarthScope」を完全収録
              </p>
            </div>
          </div>

          {/* Selection Filter Bar */}
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-neutral-700">
                出力するスライドを選択（チェックを外して個別提出も可能です）：
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleSelectAll(true)}
                  className="text-[11px] text-[#00BFA5] hover:underline cursor-pointer font-bold"
                >
                  すべて選択
                </button>
                <span className="text-neutral-300">|</span>
                <button
                  onClick={() => toggleSelectAll(false)}
                  className="text-[11px] text-neutral-500 hover:underline cursor-pointer"
                >
                  選択解除
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setIncludeCover(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeCover
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeCover ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                表紙 (P.01)
              </button>

              <button
                onClick={() => setIncludeProfile(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeProfile
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeProfile ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                自己紹介・スキル (P.02)
              </button>

              <button
                onClick={() => setIncludeIndex(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeIndex
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeIndex ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                目次 (P.03)
              </button>

              <button
                onClick={() => setIncludeCase1(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeCase1
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeCase1 ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                01 覆面調査 (P.04—05, 2頁)
              </button>

              <button
                onClick={() => setIncludeCase2(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeCase2
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeCase2 ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                02 建設DX SaaS (P.06—08, 3頁)
              </button>

              <button
                onClick={() => setIncludeCase3(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeCase3
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeCase3 ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                03 アパレル企業 (P.09—10, 2頁)
              </button>

              <button
                onClick={() => setIncludeCase4(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeCase4
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeCase4 ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                04 翻訳アプリ (P.11—12, 2頁)
              </button>

              <button
                onClick={() => setIncludeCase5(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includeCase5
                    ? 'bg-[#00BFA5]/10 border-[#00BFA5] text-[#00BFA5] font-bold'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includeCase5 ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                05 安全運転支援 (P.13—14, 2頁)
              </button>

              <button
                onClick={() => setIncludePersonal(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium ${
                  includePersonal
                    ? 'bg-[#0284C7]/15 border-[#0284C7] text-[#0284C7] font-bold shadow-xs'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100'
                }`}
              >
                {includePersonal ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
                06 自主制作 EarthScope (P.15—16, 2頁)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Printable Sheets Container ── */}
      <div className="pdf-document-container max-w-6xl mx-auto space-y-12 print:space-y-0 print:m-0 print:p-0">
        {totalPages === 0 ? (
          <div className="text-center py-20 text-neutral-500 bg-white rounded-2xl border border-neutral-200 shadow-sm">
            シートが選択されていません。上部のチェックボックスから出力したい項目を選択してください。
          </div>
        ) : (
          <>
            {/* Page 01: Cover */}
            {includeCover && (
              <div className="pdf-sheet-wrapper">
                <CoverPdfSheet onPrintSingle={() => handlePrintSingle('cover')} />
              </div>
            )}

            {/* Page 02: Profile & Capabilities */}
            {includeProfile && (
              <div className="pdf-sheet-wrapper">
                <ProfilePdfSheet onPrintSingle={() => handlePrintSingle('profile')} />
              </div>
            )}

            {/* Page 03: Index */}
            {includeIndex && (
              <div className="pdf-sheet-wrapper">
                <IndexPdfSheet onPrintSingle={() => handlePrintSingle('index')} />
              </div>
            )}

            {/* Case Study 01 (Page 04 & 05) */}
            {includeCase1 && (
              <>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy01Part1 onPrintSingle={() => handlePrintSingle('c1')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy01Part2 onPrintSingle={() => handlePrintSingle('c1')} />
                </div>
              </>
            )}

            {/* Case Study 02 (Page 05, 06, 07) */}
            {includeCase2 && (
              <>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy02Part1 onPrintSingle={() => handlePrintSingle('c2')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy02Part2 onPrintSingle={() => handlePrintSingle('c2')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy02Part3 onPrintSingle={() => handlePrintSingle('c2')} />
                </div>
              </>
            )}

            {/* Case Study 03 (Page 08 & 09) */}
            {includeCase3 && (
              <>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy03Part1 onPrintSingle={() => handlePrintSingle('c3')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy03Part2 onPrintSingle={() => handlePrintSingle('c3')} />
                </div>
              </>
            )}

            {/* Case Study 04 (Page 10 & 11) */}
            {includeCase4 && (
              <>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy04Part1 onPrintSingle={() => handlePrintSingle('c4')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy04Part2 onPrintSingle={() => handlePrintSingle('c4')} />
                </div>
              </>
            )}

            {/* Case Study 05 (Page 13 & 14) */}
            {includeCase5 && (
              <>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy05Part1 onPrintSingle={() => handlePrintSingle('c5')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <CaseStudy05Part2 onPrintSingle={() => handlePrintSingle('c5')} />
                </div>
              </>
            )}

            {/* Personal Project: EarthScope (Page 15 & 16) */}
            {includePersonal && (
              <>
                <div className="pdf-sheet-wrapper">
                  <PersonalProjectPart1 onPrintSingle={() => handlePrintSingle('personal')} />
                </div>
                <div className="pdf-sheet-wrapper">
                  <PersonalProjectPart2 onPrintSingle={() => handlePrintSingle('personal')} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioPdf;
