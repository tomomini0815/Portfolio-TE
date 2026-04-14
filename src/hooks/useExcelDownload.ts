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
      // タイムスタンプを生成 (YYYYMMDD_HHMMSS形式に近いもの)
      const now = new Date();
      const timestamp = now.toISOString().replace(/[:.]/g, "-").slice(0, 19);
      
      // public/skillsheet.xlsx へのパス (キャッシュを強力に回避するためにクエリを追加)
      const fileUrl = `/skillsheet.xlsx?cache_bust=${now.getTime()}`;
      
      // ダウンロード用のアンカー要素を作成
      const link = document.createElement("a");
      link.href = fileUrl;
      
      // ブラウザの重複ファイル名問題を回避するため、ファイル名にもタイムスタンプを付与
      link.download = `skillsheet_${timestamp}.xlsx`;
      
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
