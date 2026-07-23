"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

type DashboardStats = {
  total: number;
  byType: {
    mobile?: number;
    web?: number;
    other?: number;
  };
  recent: Array<{
    id: number;
    project_type: string;
    title: string;
    description: string;
  }>;
};

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchStats() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch('/api/dashboard', { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "현황을 불러오지 못했습니다.");
      setStats(data.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "현황을 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return <div className="mg-card mg-state"><div className="mg-spinner" />현황을 불러오는 중…</div>;
  }

  if (error) {
    return <div className="mg-notice mg-notice-error" role="alert"><span>{error}</span><button type="button" onClick={fetchStats}>다시 시도</button></div>;
  }

  return (
    <div className="mg-dashboard">
      <div className="mg-metric-grid">
        <div className="mg-card mg-metric-card">
          <p className="mg-section-label">TOTAL PROJECTS</p>
          <strong>{stats?.total || 0}</strong>
          <span>등록된 전체 프로젝트</span>
        </div>
        {(["mobile", "web", "other"] as const).map((type) => (
          <div className="mg-card mg-metric-card" key={type}>
            <p className="mg-section-label">{type.toUpperCase()}</p>
            <strong>{stats?.byType?.[type] || 0}</strong>
            <span>{type === "mobile" ? "모바일" : type === "web" ? "웹" : "기타"} 프로젝트</span>
          </div>
        ))}
      </div>

      <div className="mg-card mg-recent-card">
        <div className="mg-card-header">
          <div>
            <p className="mg-section-label">RECENTLY ADDED</p>
            <h2>최근 프로젝트</h2>
          </div>
          <Link href="/management/portfolio" className="mg-text-link">전체 관리 →</Link>
        </div>
        {stats?.recent && stats.recent.length > 0 ? (
          <ul className="mg-recent-list">
            {stats.recent.map(project => (
              <li key={project.id}>
                <div>
                  <strong>{project.title}</strong>
                  <span>{project.project_type}</span>
                </div>
                <Link href="/management/portfolio">관리</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mg-state"><strong>아직 등록된 프로젝트가 없습니다.</strong><Link href="/management/portfolio">첫 프로젝트 추가하기</Link></div>
        )}
      </div>
    </div>
  );
}
