import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const stmt = db.prepare('SELECT * FROM projects');
    const projects = stmt.all();
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      project_type,
      project_key,
      title,
      description,
      tech_stack,
      link_name,
      project_url,
      modal_description,
    } = body;

    const stmt = db.prepare(`
      INSERT INTO projects (
        project_type, project_key, title, description, tech_stack,
        link_name, project_url, modal_description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      project_type,
      project_key,
      title,
      description,
      typeof tech_stack === 'string' ? tech_stack : JSON.stringify(tech_stack),
      link_name,
      project_url,
      modal_description
    );

    return NextResponse.json({ success: true, id: result.lastInsertRowid });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
