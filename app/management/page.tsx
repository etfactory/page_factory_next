import React from 'react';
import Dashboard from './dashboard/components/dashboard';

export default function ManagementPage() {
    return (
        <div className="p-8 w-full max-w-6xl mx-auto text-white">
            <div className="w-full">
                <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'paperozi' }}>Management Dashboard</h1>
                <Dashboard />
            </div>
        </div>
    );
}
