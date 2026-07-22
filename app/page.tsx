import StartSection from "./components/start";
import ProfileSection from "./components/profile";
import ContactSection from "./components/contact";
import PortfolioSection from "./components/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <StartSection />
      <ProfileSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
