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
      <div className="w-[92vw] md:w-[80vw] max-w-[1200px] mx-auto px-[10px] md:px-[20px] mt-[80px]">
        <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] font-[800] mb-[20px] break-keep">Projects</h1>
        <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4]">Mobile Project</h2>
        {createProjectPanels(mobileProjects)}
        <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4]">Web Projects</h2>
        {createProjectPanels(webProjects)}
        <h2 className="font-[paperozi] text-[1.3rem] md:text-[1.5rem] font-[700] mb-[15px] leading-[1.4]">Other Projects</h2>
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