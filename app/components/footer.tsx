"use client";

/* Footer component is now integrated into layout.tsx as Footer function */
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/about/")) return null;
    return (
        <footer className="items-center p-[120px] bg-[#0f0f0f] text-[0.85rem] text-[#4a4a4a]">
            <div className="flex justify-between items-center">
                <div>
                    © Euntaek 'Robert' Oh. All rights reserved.
                    <br />
                    This Page is powered by Next.js.
                </div>
                <img src="/logo/etfactory.dev.svg" alt="etfactory.dev Logo" className="opacity-20 h-[60px]" />
            </div>
        </footer>
    )
}