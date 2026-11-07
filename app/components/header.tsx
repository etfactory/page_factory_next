"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export default function Navigator() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isEnglish = pathname === "/en";
  const isHome = pathname === "/" || isEnglish;
  const homePath = isEnglish ? "/en" : "/";

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "ko";
  }, [isEnglish]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHome) handleScroll(e, href);
      else closeMenu();
    };

    if (isHome) {
      return (
        <a href={`${homePath}#${href}`} lang="en" className="relative flex min-h-11 items-center text-[1.1rem] font-bold text-[var(--pf-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--pf-text-primary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--pf-signal)] after:transition-[width] hover:after:w-full md:min-h-10 md:text-sm" onClick={handleClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={`/#${href}`} lang="en" className="relative flex min-h-11 items-center text-[1.1rem] font-bold text-[var(--pf-text-secondary)] no-underline transition-colors duration-150 hover:text-[var(--pf-text-primary)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--pf-signal)] after:transition-[width] hover:after:w-full md:min-h-10 md:text-sm" onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <nav lang={isEnglish ? "en" : "ko"} aria-label={isEnglish ? "Main navigation" : "주요 탐색"} className="fixed top-0 left-0 z-[1000] flex h-16 w-full items-center justify-between border-b border-[var(--pf-border-subtle)] bg-[var(--header)] px-5 backdrop-blur-md md:h-[72px] md:px-12">

      <Link href={homePath} className="font-bold flex items-center" onClick={closeMenu}>
        <Image
          src="/logo/page factory black.svg"
          alt="pageFactory"
          width={1064}
          height={159}
          sizes="(min-width: 768px) 134px, 120px"
          className="theme-logo h-auto w-[104px] md:w-[134px]"
        />
      </Link>

      <div className="flex items-center gap-2 md:gap-3">
        <div id="main-navigation-links" className={`fixed top-16 ${isMenuOpen ? 'visible right-0' : 'invisible right-[-100%]'} flex h-[calc(100vh-64px)] w-full flex-col justify-start gap-8 border-l border-[var(--pf-border-subtle)] bg-[var(--header-menu)] px-8 pt-16 backdrop-blur-md transition-[right,visibility] duration-200 md:visible md:static md:h-auto md:w-auto md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none`}>
          <NavbarLink href="main_section">Home</NavbarLink>
          <NavbarLink href="profile_section">Profile</NavbarLink>
          <NavbarLink href="portfolio_section">Portfolio</NavbarLink>
          <NavbarLink href="contact_section">Contact</NavbarLink>
        </div>
        {isHome && (
          <Link
            href={isEnglish ? "/" : "/en"}
            hrefLang={isEnglish ? "ko" : "en"}
            aria-label={isEnglish ? "Current language: English. Switch to Korean" : "현재 언어: 한국어. 영어로 전환"}
            onClick={closeMenu}
            className="inline-flex h-10 w-[72px] shrink-0 items-center rounded-full border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] p-[3px] font-mono text-xs font-bold no-underline transition-colors hover:border-[var(--pf-border-strong)] md:ml-2"
          >
            <span aria-hidden="true" className={`flex h-8 w-8 items-center justify-center rounded-full ${isEnglish ? "text-[var(--pf-text-secondary)]" : "bg-[var(--pf-action-primary)] text-[var(--pf-action-on-primary)]"}`}>KO</span>
            <span aria-hidden="true" className={`flex h-8 w-8 items-center justify-center rounded-full ${isEnglish ? "bg-[var(--pf-action-primary)] text-[var(--pf-action-on-primary)]" : "text-[var(--pf-text-secondary)]"}`}>EN</span>
          </Link>
        )}
        <div className="md:ml-2">
          <ThemeToggle locale={isEnglish ? "en" : "ko"} />
        </div>
        <button aria-label={isEnglish ? (isMenuOpen ? "Close menu" : "Open menu") : (isMenuOpen ? "메뉴 닫기" : "메뉴 열기")} aria-expanded={isMenuOpen} aria-controls="main-navigation-links" className="theme-toggle z-[1001] flex-col gap-[5px] p-0 md:!hidden" onClick={toggleMenu}>
          <span className={`h-0.5 w-5 bg-[var(--pf-text-primary)] transition-all duration-200 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-[var(--pf-text-primary)] transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-[var(--pf-text-primary)] transition-all duration-200 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
