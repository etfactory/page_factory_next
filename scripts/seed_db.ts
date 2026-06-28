import fs from 'fs';
import path from 'path';
import db from "../lib/prisma";

const baseDir = path.join(process.cwd(), 'app', 'components', 'json');

function loadJson(subPath: string) {
  try {
    const fullPath = path.join(baseDir, subPath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Could not load ${subPath}: ${error}`);
    return {};
  }
}

// Load main projects
const mobileProjects = loadJson('projects/mobile_projects.json');
const webProjects = loadJson('projects/web_projects.json');
const otherProjects = loadJson('projects/other_projects.json');

// Load links
const mobileLinks = loadJson('project_links/mobile_links.json');
const webLinks = loadJson('project_links/web_links.json');
const otherLinks = loadJson('project_links/other_links.json');

// Load modals
const mobileModals = loadJson('modals/mobile_modals.json');
const webModals = loadJson('modals/web_modals.json');
const otherModals = loadJson('modals/others_modals.json');

async function seedType(
  type: string,
  projects: any,
  links: any,
  modals: any
) {
  for (const [key, project] of Object.entries(projects) as any) {
    const linkKey = project.linkKey ?? key;

    // Determine project_url
    let projectUrl = project.projectUrl;
    let reportUrl = links[linkKey]?.report;
    let normalUrl = links[linkKey]?.url;

    const finalUrl = reportUrl || normalUrl || projectUrl || '';
    const linkName = reportUrl ? "Report Link" : (normalUrl ? "About Link" : project.linkname || "");
    const modalDesc = modals[linkKey]?.description || project.description || "";
    const techStack = project.techStack ? JSON.stringify(project.techStack) : '[]';

    await db.project.create({
      data: {
        project_type: type,
        project_key: key,
        title: project.title || '',
        description: project.description || '',
        tech_stack: techStack,
        link_name: linkName,
        project_url: finalUrl,
        modal_description: modalDesc
      }
    });
  }
}

async function main() {
  console.log("Seeding Database...");
  await seedType('mobile', mobileProjects, mobileLinks, mobileModals);
  await seedType('web', webProjects, webLinks, webModals);
  await seedType('other', otherProjects, otherLinks, otherModals);
  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
