import type { Metadata } from "next";
import { UpdatesContent } from "./updates-content";

export const metadata: Metadata = {
  title: "업데이트 내역 | Scene Tracker",
  description: "Scene Tracker 1.0부터 1.0.3까지의 주요 업데이트 내역을 확인하세요.",
  alternates: {
    canonical: "https://etfactory.dev/about/scene-tracker/updates",
    languages: {
      "ko-KR": "https://etfactory.dev/about/scene-tracker/updates",
      "en-US": "https://etfactory.dev/about/scene-tracker/updates/en",
    },
  },
};

export default function UpdatesPage() {
  return <UpdatesContent language="ko" />;
}
