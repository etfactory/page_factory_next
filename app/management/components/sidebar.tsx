/* Management Page Sidebar component */
import React from 'react';

import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="w-[250px] bg-[#111111] px-5 py-16 border-r border-[#333] min-h-screen">
            <nav>
                <ul className="mt-5 flex flex-col gap-2 list-none p-0">
                    <li className="list-none m-0 p-0">
                        <Link href="/management" className="block px-4 py-3 text-[#888] font-medium text-[1.05rem] rounded-lg transition-all duration-200 hover:bg-[#222] hover:text-white">
                            Dashboard
                        </Link>
                    </li>
                    <li className="list-none m-0 p-0">
                        <Link href="/management/portfolio" className="block px-4 py-3 text-[#888] font-medium text-[1.05rem] rounded-lg transition-all duration-200 hover:bg-[#222] hover:text-white">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}