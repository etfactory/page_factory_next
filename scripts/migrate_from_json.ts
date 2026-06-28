import fs from 'fs';
import path from 'path';
import db from "../lib/prisma";

async function main() {
  const dumpPath = path.join(process.cwd(), 'projects_dump.json');
  const data = fs.readFileSync(dumpPath, 'utf8');
  const projects = JSON.parse(data);

  console.log(`Found ${projects.length} projects in SQLite dump.`);

  for (const p of projects) {
    await db.project.create({
      data: {
        project_type: p.project_type,
        project_key: p.project_key,
        title: p.title,
        description: p.description,
        tech_stack: p.tech_stack,
        link_name: p.link_name,
        project_url: p.project_url,
        modal_description: p.modal_description
      }
    });
  }

  console.log('Migration complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
