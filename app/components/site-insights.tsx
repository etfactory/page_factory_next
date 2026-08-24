"use client";

/** Scene Tracker 개인정보 페이지 제외 사이트 성능 분석 */
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";

export default function SiteInsights() {
  const pathname = usePathname();

  if (pathname.startsWith("/about/scene-tracker")) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
