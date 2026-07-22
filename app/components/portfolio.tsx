import FadeInSection from "./scrollfadein";
import ProjectPanel from "./project_panel";
import prisma from "@/lib/prisma";

export default async function PortfolioSection() {
  const allProjects = await prisma.project.findMany({
    orderBy: {
      title: 'asc'
    }
  });

  // public 프로젝트만 필터링 (project_url이 비어있지 않은 경우)
  const publicProjects = allProjects.filter((p) => p.project_url && p.project_url.trim() !== '');

  const mobileProjects = publicProjects.filter((p) => p.project_type === 'mobile');
  const webProjects = publicProjects.filter((p) => p.project_type === 'web');
  const otherProjects = publicProjects.filter((p) => p.project_type === 'other');

  return (
    <FadeInSection id="portfolio_section" delay={200}>
      <div className="pf-container pf-content-container pf-section">
        <p className="pf-eyebrow">02 · Projects</p>
        <h2 className="pf-subsection-title">Mobile Projects</h2>
        {createProjectPanels(mobileProjects)}
        <h2 className="pf-subsection-title">Web Projects</h2>
        {createProjectPanels(webProjects)}
        <h2 className="pf-subsection-title">Other Projects</h2>
        {createProjectPanels(otherProjects)}
      </div>
    </FadeInSection>
  );
}

function createProjectPanels(projects: any[]) {
  return projects.map((project, index) => {
    let techStack = [];
    try {
      techStack = JSON.parse(project.tech_stack);
    } catch (e) {
      techStack = [];
    }

    return (
      <ProjectPanel
        key={project.id || index}
        title={project.title}
        description={project.description}
        projectUrl={project.project_url}
        techStack={techStack}
        linkname={project.link_name}
        modalDescription={project.modal_description || project.description}
      />
    );
  });
}
