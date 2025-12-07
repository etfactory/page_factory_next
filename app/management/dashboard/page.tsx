import React from 'react';
import Dashboard from './components/dashboard';
import '../components/styles/management.css';

export default function ManagementPage() {
    return (
        <div className="management-page">
            <div className="main-content width-setting">
                <h1 className="section-title">Dashboard</h1>
                <Dashboard />
            </div>
        </div>
    );
}
