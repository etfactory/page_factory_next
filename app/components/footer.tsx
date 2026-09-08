"use client";

/* Footer component is now integrated into layout.tsx as Footer function */
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/about/")) return null;
    return (
        <footer className="bg-[var(--pf-bg-canvas)] px-5 py-20 text-sm text-[var(--pf-text-primary)] md:px-12 md:py-24 lg:py-[120px]">
            <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-12 border-t border-current/20 pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="font-mono text-xs leading-relaxed opacity-70">
                    © Robert Euntaek Oh. All rights reserved.
                </div>
                <Image
                    src="/logo/etfactory.dev.svg"
                    alt="etfactory.dev Logo"
                    width={812}
                    height={281}
                    sizes="(min-width: 640px) 174px, 116px"
                    className="h-10 w-auto invert opacity-30 sm:h-[60px] dark:invert-0"
                />
            </div>
        </footer>
    )
}
