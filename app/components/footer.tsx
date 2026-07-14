"use client";

/* Footer component is now integrated into layout.tsx as Footer function */
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/about/")) return null;
    return (
        <footer className="bg-[#0f0f0f] px-6 py-12 text-[0.85rem] text-[#9a9a9a] sm:px-10 sm:py-16 lg:p-[120px]">
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
                <div className="leading-relaxed">
                    © Euntaek 'Robert' Oh. All rights reserved.
                    <br />
                    This Page is powered by Next.js.
                </div>
                <img
                    src="/logo/etfactory.dev.svg"
                    alt="etfactory.dev Logo"
                    className="h-10 w-auto opacity-20 sm:h-[60px]"
                />
            </div>
        </footer>
    )
}
