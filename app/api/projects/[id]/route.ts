import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

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

    const projectId = parseInt(id, 10);
    if (isNaN(projectId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        project_type,
        project_key,
        title,
        description,
        tech_stack: typeof tech_stack === 'string' ? tech_stack : JSON.stringify(tech_stack),
        link_name,
        project_url,
        modal_description
      }
    });

    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const projectId = parseInt(id, 10);
    
    if (isNaN(projectId)) {
      return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
    }

    await prisma.project.delete({
      where: { id: projectId }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
