import { useState } from "react";

/**
 * useExcelDownload hook
 * 
 * 現在はプロジェクトの public/skillsheet.xlsx を直接ダウンロードする
 * シンプルな実装に切り替えています。
 */
export const useExcelDownload = () => {
  const [isExporting, setIsExporting] = useState(false);

  const downloadExcel = async () => {
    if (isExporting) return;
    
    // UIのフィードバックのために一瞬「生成中」の状態にする
    setIsExporting(true);

    try {
      // public/skillsheet.xlsx へのパス (キャッシュを回避するためにタイムスタンプを追加)
      const fileUrl = `/skillsheet.xlsx?v=${Date.now()}`;
      
      // ダウンロード用のアンカー要素を作成
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "skillsheet.xlsx";
      
      // ボディに追加してクリック、その後削除
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error("Excel download failed:", err);
      alert("Excelファイルのダウンロードに失敗しました。");
    } finally {
      // 状態を戻す
      setTimeout(() => {
        setIsExporting(false);
      }, 500);
    }
  };

  return { downloadExcel, isExporting };
};
