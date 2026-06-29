import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const projectCount = await prisma.project.count();
    
    if (projectCount === 0) {
      const initialProjects = [
        {
          project_type: 'mobile',
          project_key: 'drdm',
          title: 'Dr.DM (닥터디엠)',
          description: '당뇨병 환자를 위한 인공지능 기반 맞춤형 건강 관리 및 예측 모바일 애플리케이션',
          tech_stack: JSON.stringify(['React Native', 'TypeScript', 'Python', 'FastAPI']),
          link_name: 'View Project',
          project_url: '/about/drdm',
          modal_description: '<p>Dr.DM은 당뇨 환자의 혈당 수치를 실시간으로 관리하고 AI 예측을 통해 스파이크를 방지하는 모바일 앱입니다.</p>'
        },
        {
          project_type: 'web',
          project_key: 'page-factory',
          title: 'Page Factory',
          description: 'Next.js 15와 Tailwind CSS로 구축된 모던 포트폴리오 템플릿',
          tech_stack: JSON.stringify(['Next.js', 'React', 'TailwindCSS', 'PostgreSQL', 'Prisma']),
          link_name: 'View GitHub',
          project_url: 'https://github.com/etfactory',
          modal_description: '<p>이 포트폴리오 사이트 자체의 소스코드 및 아키텍처입니다.</p>'
        }
      ];

      for (const p of initialProjects) {
        await prisma.project.create({ data: p });
      }
      return NextResponse.json({ success: true, message: 'Seeded successfully.' });
    }

    return NextResponse.json({ success: true, message: 'Already seeded.' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
