import type { Metadata } from "next";
import HomePage from "../components/home-page";

export const metadata: Metadata = {
  title: "pageFactory | Euntaek Oh's Portfolio",
  description: "The portfolio of Euntaek Oh, a mobile application developer.",
  alternates: {
    canonical: "https://etfactory.dev/en",
    languages: { ko: "https://etfactory.dev/", en: "https://etfactory.dev/en", "x-default": "https://etfactory.dev/" },
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
