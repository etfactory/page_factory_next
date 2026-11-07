import StartSection from "./start";
import ProfileSection from "./profile";
import ContactSection from "./contact";
import PortfolioSection from "./portfolio";

export default function HomePage({ locale }: { locale: "ko" | "en" }) {
  return (
    <div lang={locale} className="min-h-screen w-full">
      <StartSection locale={locale} />
      <ProfileSection locale={locale} />
      <PortfolioSection locale={locale} />
      <ContactSection />
    </div>
  );
}
