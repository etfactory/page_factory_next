import FadeInSection from "./scrollfadein";
import "./styles/main_style.css";

import ProjectPanel from "./project_panel";

export default function PortfolioSection() {
  return (
    <FadeInSection id="portfolio_section" delay={200}>
      <div className="main-content width-setting">
        <h1 className="section-title">Projects</h1>
        <ProjectPanel
          title="Public Test"
          description="Public Test Project Description"
          projectUrl="https://youtube.etfactory.dev"
          techStack={["React Native", "TypeScript", "Firebase"]}
        />

        <ProjectPanel
          title="Private Test"
          description="Private Test Project Description"
          techStack={["Flutter", "Dart", "AWS"]}
        />
      </div>
    </FadeInSection>
  );
}