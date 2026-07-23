import React from 'react';
import Dashboard from './dashboard/components/dashboard';

export default function ManagementPage() {
    return (
        <div className="mg-page">
            <header className="mg-page-header">
                <div>
                    <p className="mg-eyebrow">MANAGEMENT OVERVIEW</p>
                    <h1>대시보드</h1>
                    <p>포트폴리오 현황과 최근 프로젝트를 확인합니다.</p>
                </div>
            </header>
            <Dashboard />
        </div>
    );
}
