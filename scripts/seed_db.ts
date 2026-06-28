import fs from 'fs';
import path from 'path';
import db from '../lib/db';

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

const insertStmt = db.prepare(`
  INSERT INTO projects (
    project_type, project_key, title, description, tech_stack,
    link_name, project_url, modal_description
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

function seedType(
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

    insertStmt.run(
      type,
      key,
      project.title || '',
      project.description || '',
      techStack,
      linkName,
      finalUrl,
      modalDesc
    );
  }
}

console.log("Seeding Database...");
seedType('mobile', mobileProjects, mobileLinks, mobileModals);
seedType('web', webProjects, webLinks, webModals);
seedType('other', otherProjects, otherLinks, otherModals);
console.log("Database seeded successfully.");
