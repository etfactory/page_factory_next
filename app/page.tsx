import type { Metadata } from "next";
import HomePage from "./components/home-page";

export const metadata: Metadata = {
  title: "pageFactory",
  description: "모바일 앱을 설계하고 구현하는 개발자 오은택의 포트폴리오입니다.",
  alternates: {
    canonical: "https://etfactory.dev/",
    languages: { ko: "https://etfactory.dev/", en: "https://etfactory.dev/en", "x-default": "https://etfactory.dev/" },
  },
};

export default function Home() {
  return <HomePage locale="ko" />;
}
