import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const totalProjects = await prisma.project.count();

    const byTypeGroups = await prisma.project.groupBy({
      by: ['project_type'],
      _count: {
        project_type: true
      }
    });

    const recentProjects = await prisma.project.findMany({
      orderBy: { id: 'desc' },
      take: 3,
      select: {
        id: true,
        project_type: true,
        title: true,
        description: true
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        total: totalProjects,
        byType: byTypeGroups.reduce((acc: any, curr: any) => {
          acc[curr.project_type] = curr._count.project_type;
          return acc;
        }, {}),
        recent: recentProjects,
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
