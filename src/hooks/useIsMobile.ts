import { useState, useEffect } from "react";

/**
 * モバイルデバイスを検出するフック。
 * ポインターがタッチのみの場合、またはウィンドウ幅が768px未満の場合にtrueを返す。
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || !window.matchMedia("(pointer: fine)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
};
