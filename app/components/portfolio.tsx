import FadeInSection from "./scrollfadein";
import "./styles/main_style.css";
import "./styles/project.css";

export default function PortfolioSection() {
  return (
    <FadeInSection id="portfolio_section" delay={200}>
      <div className="main-content width-setting">
        <h1 className="section-title">Projects</h1>
      </div>
    </FadeInSection>
  );
}