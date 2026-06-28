import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const totalStmt = db.prepare('SELECT COUNT(*) as count FROM projects');
    const totalProjects = (totalStmt.get() as any).count;

    const byTypeStmt = db.prepare('SELECT project_type, COUNT(*) as count FROM projects GROUP BY project_type');
    const byType = byTypeStmt.all() as any[];

    const recentStmt = db.prepare('SELECT id, project_type, title, description FROM projects ORDER BY id DESC LIMIT 3');
    const recentProjects = recentStmt.all() as any[];

    return NextResponse.json({
      success: true,
      data: {
        total: totalProjects,
        byType: byType.reduce((acc, curr) => {
          acc[curr.project_type] = curr.count;
          return acc;
        }, {}),
        recent: recentProjects,
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
