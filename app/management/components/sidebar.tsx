/* Management Page Sidebar component */
import React from 'react';
import './styles/sidebar.css';

import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link href="/management">Main</Link></li>
                    <li><Link href="/management/dashboard">Dashboard</Link></li>
                    <li><Link href="/management/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </aside>
    );
}