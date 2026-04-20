/* Management Page Sidebar component */
import React from 'react';

import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="sidebar management-sidebar">
            <nav>
                <ul className="management-sidebar">
                    <li className='management-sidebar'><Link href="/management">Main</Link></li>
                    <li className='management-sidebar'><Link href="/management/dashboard">Dashboard</Link></li>
                    <li className='management-sidebar'><Link href="/management/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </aside>
    );
}