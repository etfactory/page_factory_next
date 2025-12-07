import React from 'react';
import '../components/styles/main_style.css';
import './components/styles/management.css';

import LoginPanel from './components/login';

export default function ManagementPage() {
    return (
        <div className="management-page">
            <div className="main-content width-setting">
                <h1 className="section-title">Management</h1>
                <LoginPanel />
            </div>
        </div>
    );
}
