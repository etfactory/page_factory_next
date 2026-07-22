"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export default function Navigator() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname?.startsWith("/about/")) return null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  function NavbarLink({ href, children }: { href: string; children: React.ReactNode }) {
    const isHome = pathname === "/";
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHome) handleScroll(e, href);
      else closeMenu();
    };

    if (isHome) {
      return (
        <a href={`/#${href}`} className="relative flex min-h-11 items-center text-[1.1rem] font-bold text-[var(--pf-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--pf-text-primary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--pf-signal)] after:transition-[width] hover:after:w-full md:min-h-10 md:text-sm" onClick={handleClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={`/#${href}`} className="relative flex min-h-11 items-center text-[1.1rem] font-bold text-[var(--pf-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--pf-text-primary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--pf-signal)] after:transition-[width] hover:after:w-full md:min-h-10 md:text-sm" onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <nav aria-label="주요 탐색" className="fixed top-0 left-0 z-[1000] flex h-16 w-full items-center justify-between border-b border-[var(--pf-border-subtle)] bg-[var(--header)] px-5 backdrop-blur-md md:h-[72px] md:px-12">

      <Link href="/" className="font-bold flex items-center" onClick={closeMenu}>
        <img src="/logo/page factory black.svg" alt="pageFactory" className="theme-logo h-[18px] md:h-5" />
      </Link>

      <div className="flex items-center gap-3">
        <div className={`fixed top-16 ${isMenuOpen ? 'right-0' : 'right-[-100%]'} flex h-[calc(100vh-64px)] w-full flex-col justify-start gap-8 border-l border-[var(--pf-border-subtle)] bg-[var(--header-menu)] px-8 pt-16 backdrop-blur-md transition-[right] duration-200 md:static md:h-auto md:w-auto md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}>
          <NavbarLink href="main_section">Home</NavbarLink>
          <NavbarLink href="profile_section">Profile</NavbarLink>
          <NavbarLink href="portfolio_section">Portfolio</NavbarLink>
          <NavbarLink href="contact_section">Contact</NavbarLink>
        </div>
        <div className="md:ml-2">
          <ThemeToggle />
        </div>
        <button aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={isMenuOpen} className="z-[1001] flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-[var(--pf-border-subtle)] bg-transparent p-0 md:hidden" onClick={toggleMenu}>
          <span className={`h-0.5 w-5 bg-[var(--pf-text-primary)] transition-all duration-200 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-[var(--pf-text-primary)] transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-[var(--pf-text-primary)] transition-all duration-200 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
