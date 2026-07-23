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
  if (project_key.length < 2 || project_key.length > 100) return '프로젝트 키는 2~100자로 입력해 주세요.';
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(project_key)) return '프로젝트 키는 영문, 숫자, 하이픈, 밑줄만 사용할 수 있습니다.';
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
      is_in_progress,
    } = body;

    const duplicate = await prisma.project.findFirst({ where: { project_key: project_key.trim() } });
    if (duplicate) {
      return NextResponse.json({ success: false, error: '이미 사용 중인 프로젝트 키입니다.' }, { status: 409 });
    }

    const result = await prisma.project.create({
      data: {
        project_type: project_type.trim(),
        project_key: project_key.trim(),
        title: title.trim(),
        description: typeof description === 'string' ? description.trim() : '',
        tech_stack: typeof tech_stack === 'string' ? tech_stack : JSON.stringify(tech_stack),
        link_name: typeof link_name === 'string' ? link_name.trim() : '',
        project_url: typeof project_url === 'string' ? project_url.trim() : '',
        modal_description: typeof modal_description === 'string' ? modal_description : '',
        is_in_progress: is_in_progress === true
      }
    });

    revalidatePath('/');

    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error('Failed to create project', error);
    return NextResponse.json({ success: false, error: '프로젝트를 저장하는 중 서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
