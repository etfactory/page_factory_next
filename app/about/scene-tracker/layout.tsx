import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scene Tracker | pageFactory",
  description:
    "좋아하는 작품의 촬영지를 실제 여행으로 연결하는 Scene Tracker 프로젝트 소개",
};

export default function SceneTrackerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
