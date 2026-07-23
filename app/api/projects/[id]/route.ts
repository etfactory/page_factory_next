import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

const VALID_TYPES = new Set(['mobile', 'web', 'other']);

function validateProject(body: Record<string, unknown>) {
  const project_type = String(body.project_type ?? '').trim();
  const project_key = String(body.project_key ?? '').trim();
  const title = String(body.title ?? '').trim();
  const project_url = String(body.project_url ?? '').trim();
  if (!VALID_TYPES.has(project_type)) return '프로젝트 유형이 올바르지 않습니다.';
  if (project_key.length < 2 || project_key.length > 100 || !/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(project_key)) {
    return '프로젝트 키는 2~100자의 영문, 숫자, 하이픈, 밑줄로 입력해 주세요.';
  }
  if (!title || title.length > 255) return '프로젝트명은 1~255자로 입력해 주세요.';
  if (project_url) {
    try {
      const url = new URL(project_url);
      if (!['http:', 'https:'].includes(url.protocol)) return 'URL은 http 또는 https 주소만 사용할 수 있습니다.';
    } catch {
      return '프로젝트 URL 형식이 올바르지 않습니다.';
    }
  }
  return null;
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const validationError = validateProject(body);
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }
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

    const duplicate = await prisma.project.findFirst({
      where: { project_key: project_key.trim(), NOT: { id: projectId } }
    });
    if (duplicate) {
      return NextResponse.json({ success: false, error: '이미 사용 중인 프로젝트 키입니다.' }, { status: 409 });
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        project_type: project_type.trim(),
        project_key: project_key.trim(),
        title: title.trim(),
        description: typeof description === 'string' ? description.trim() : '',
        tech_stack: typeof tech_stack === 'string' ? tech_stack : JSON.stringify(tech_stack),
        link_name: typeof link_name === 'string' ? link_name.trim() : '',
        project_url: typeof project_url === 'string' ? project_url.trim() : '',
        modal_description: typeof modal_description === 'string' ? modal_description : ''
      }
    });

    revalidatePath('/');

    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error: unknown) {
    if (typeof error === 'object' && error && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    console.error('Failed to update project', error);
    return NextResponse.json({ success: false, error: '프로젝트를 저장하는 중 서버 오류가 발생했습니다.' }, { status: 500 });
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

    revalidatePath('/');

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (typeof error === 'object' && error && 'code' in error && error.code === 'P2025') {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    console.error('Failed to delete project', error);
    return NextResponse.json({ success: false, error: '프로젝트를 삭제하는 중 서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
