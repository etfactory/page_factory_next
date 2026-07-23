import FadeInSection from "./scrollfadein";
import ProjectPanel from "./project_panel";
import prisma from "@/lib/prisma";

export default async function PortfolioSection() {
  const allProjects = await prisma.project.findMany({
    orderBy: {
      title: 'asc'
    }
  });

  // 공개 URL이 있거나 진행 중으로 표시한 프로젝트를 포트폴리오에 노출합니다.
  const publicProjects = allProjects.filter(
    (p) => p.is_in_progress || (p.project_url && p.project_url.trim() !== '')
  );

  const mobileProjects = publicProjects.filter((p) => p.project_type === 'mobile');
  const webProjects = publicProjects.filter((p) => p.project_type === 'web');
  const otherProjects = publicProjects.filter((p) => p.project_type === 'other');

  return (
    <FadeInSection id="portfolio_section" delay={200}>
      <div className="pf-container pf-content-container pf-section">
        <p className="pf-eyebrow">02 · Portfolio</p>
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
        isInProgress={project.is_in_progress}
      />
    );
  });
}
