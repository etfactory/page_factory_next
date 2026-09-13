import type { Metadata } from "next";
import { UpdatesContent } from "../updates-content";

export const metadata: Metadata = {
  title: "Release Notes | Scene Tracker",
  description: "See what changed in Scene Tracker from version 1.0 through 1.0.3.",
  alternates: {
    canonical: "https://etfactory.dev/about/scene-tracker/updates/en",
    languages: {
      "ko-KR": "https://etfactory.dev/about/scene-tracker/updates",
      "en-US": "https://etfactory.dev/about/scene-tracker/updates/en",
    },
  },
};

export default function EnglishUpdatesPage() {
  return <UpdatesContent language="en" />;
}
