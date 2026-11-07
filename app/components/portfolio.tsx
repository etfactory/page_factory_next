import FadeInSection from "./scrollfadein";
import ProjectPanel from "./project_panel";
import prisma from "@/lib/prisma";
import type { Project } from "@prisma/client";

export default async function PortfolioSection({ locale = "ko" }: { locale?: "ko" | "en" }) {
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
        <p lang="en" className="pf-eyebrow">02 · Portfolio</p>
        <h2 lang="en" className="pf-subsection-title">Mobile Projects</h2>
        {createProjectPanels(mobileProjects, locale)}
        <h2 lang="en" className="pf-subsection-title">Web Projects</h2>
        {createProjectPanels(webProjects, locale)}
        <h2 lang="en" className="pf-subsection-title">Other Projects</h2>
        {createProjectPanels(otherProjects, locale)}
      </div>
    </FadeInSection>
  );
}

function createProjectPanels(projects: Project[], locale: "ko" | "en") {
  return projects.map((project, index) => {
    let techStack = [];
    try {
      techStack = JSON.parse(project.tech_stack || "[]");
    } catch (e) {
      techStack = [];
    }

    const description = (locale === "ko" ? project.description_ko : project.description_en) ?? project.description ?? "";
    const detail = (locale === "ko" ? project.modal_description_ko : project.modal_description_en) ?? project.modal_description;

    return (
      <ProjectPanel
        key={project.id || index}
        title={project.title}
        description={description}
        projectUrl={project.project_url || undefined}
        techStack={techStack}
        linkname={project.link_name || undefined}
        modalDescription={detail || description}
        locale={locale}
        isInProgress={project.is_in_progress}
      />
    );
  });
}
