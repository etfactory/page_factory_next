import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { id: 'desc' }
    });
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

    const result = await prisma.project.create({
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

    return NextResponse.json({ success: true, id: result.id });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
