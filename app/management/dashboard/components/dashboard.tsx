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

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/dashboard');
        const data = await res.json();
        if (data.success) {
          setStats(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading) {
    return <div style={{ color: 'white' }}>Loading dashboard...</div>;
  }

  return (
    <div className="text-white flex flex-col gap-8">
      
      {/* Top Metrics Row */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        
        {/* Total Projects Card */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333]">
          <h3 className="m-0 text-[#888] text-base font-semibold">Total Projects</h3>
          <p className="mt-2.5 text-4xl font-bold">{stats?.total || 0}</p>
          <div className="flex gap-2.5 mt-2.5 text-sm">
            <span className="bg-[#2a2a2a] px-2 py-1 rounded">Mobile: {stats?.byType?.mobile || 0}</span>
            <span className="bg-[#2a2a2a] px-2 py-1 rounded">Web: {stats?.byType?.web || 0}</span>
            <span className="bg-[#2a2a2a] px-2 py-1 rounded">Other: {stats?.byType?.other || 0}</span>
          </div>
        </div>

        {/* Vercel Status Card */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="m-0 text-[#888] text-base font-semibold">System Status</h3>
              <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-bold">
                <div className="w-2 h-2 bg-green-400 rounded-full" style={{ animation: 'pulse-ring 2s infinite' }} />
                Online
              </div>
            </div>
            <p className="mt-2.5 text-sm text-[#ccc]">Vercel Edge Network Active.</p>
          </div>
          <div className="flex gap-2.5 mt-4">
            <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="no-underline bg-black border border-[#333] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#111] transition-colors">
              Analytics
            </a>
            <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="no-underline bg-black border border-[#333] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#111] transition-colors">
              Speed Insights
            </a>
          </div>
        </div>
        
      </div>

      {/* Recent Activity */}
      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333]">
        <h3 className="m-0 text-[#888] text-base font-semibold mb-4">Recent Projects</h3>
        {stats?.recent && stats.recent.length > 0 ? (
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {stats.recent.map(project => (
              <li key={project.id} className="list-none m-0 flex justify-between items-center p-2.5 bg-[#2a2a2a] rounded-lg">
                <div>
                  <span className="font-bold mr-2.5">{project.title}</span>
                  <span className="text-xs text-[#888] border border-[#444] px-1.5 py-0.5 rounded uppercase">{project.project_type}</span>
                </div>
                <Link href="/management/portfolio" className="text-blue-500 hover:text-blue-400 no-underline text-sm transition-colors">
                  Edit
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#888] text-sm">No recent projects found.</p>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 4px rgba(74, 222, 128, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }
      `}} />
    </div>
  );
}