import StartSection from "./components/start";
import ProfileSection from "./components/profile";
import ContactSection from "./components/contact";
import PortfolioSection from "./components/portfolio";
import "./components/styles/main_style.css";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StartSection />
      <ProfileSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
