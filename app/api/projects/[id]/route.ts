import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
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
      UPDATE projects SET
        project_type = ?,
        project_key = ?,
        title = ?,
        description = ?,
        tech_stack = ?,
        link_name = ?,
        project_url = ?,
        modal_description = ?
      WHERE id = ?
    `);

    const result = stmt.run(
      project_type,
      project_key,
      title,
      description,
      typeof tech_stack === 'string' ? tech_stack : JSON.stringify(tech_stack),
      link_name,
      project_url,
      modal_description,
      id
    );

    if (result.changes === 0) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    
    const stmt = db.prepare('DELETE FROM projects WHERE id = ?');
    const result = stmt.run(id);

    if (result.changes === 0) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
