import FadeInSection from "./scrollfadein";
import "./styles/main_style.css";

// Importing project data from JSON files
import mobileProjects from "./json/projects/mobile_projects.json"
import webProjects from "./json/projects/web_projects.json"
import otherProjects from "./json/projects/other_projects.json"
import mobileProjectLinks from "./json/project_links/mobile_links.json";
import webProjectLinks from "./json/project_links/web_links.json";
import otherProjectLinks from "./json/project_links/other_links.json";
import mobileProjectModals from "./json/modals/mobile_modals.json";
import webProjectModals from "./json/modals/web_modals.json";
import otherProjectModals from "./json/modals/others_modals.json";

import ProjectPanel from "./project_panel";

export default function PortfolioSection() {
  return (
    <FadeInSection id="portfolio_section" delay={200}>
      <div className="main-content width-setting">
        <h1 className="section-title">Projects</h1>
        <h2 className="section-subtitle">Mobile Project</h2>
        {createProjectPanels(mobileProjects, mobileProjectLinks, mobileProjectModals)}
        <h2 className="section-subtitle">Web Projects</h2>
        {createProjectPanels(webProjects, webProjectLinks, webProjectModals)}
        <h2 className="section-subtitle">Other Projects</h2>
        {createProjectPanels(otherProjects, otherProjectLinks, otherProjectModals)}
      </div>
    </FadeInSection>
  );
}

type Project = {
  title: string;
  description: string;
  techStack: string[];
  linkname?: string;
  projectUrl?: string;
  linkKey?: string;
};

type ProjectLinks = {
  [key: string]: {
    report?: string;
    url?: string;
  };
};

type ProjectModals = {
  [key: string]: {
    description: string;
  };
};

function createProjectPanels(
  projectType: { [key: string]: Project },
  projectLink: ProjectLinks,
  projectModal: ProjectModals
) {
  return Object.entries(projectType).map(
    (
      [key, project]: [
        string,
        Project
      ],
      index: number
    ) => (
      <ProjectPanel
        key={index}
        title={project.title}
        description={project.description}
        projectUrl={
          projectLink[
            (project.linkKey ?? key) as keyof typeof projectLink
          ]?.report ||
          projectLink[
            (project.linkKey ?? key) as keyof typeof projectLink
          ]?.url
        }
        techStack={project.techStack}
        linkname={
          projectLink[
            (project.linkKey ?? key) as keyof typeof projectLink
          ]?.report
            ? "Report Link"
            : "Github Link"
        }
        // ./json/modals/*.json에 내용 없으면 project.description 사용
        modalDescription={
          projectModal[
            (project.linkKey ?? key) as keyof typeof projectModal
          ]?.description || project.description
        }
      />
    )
  );
}