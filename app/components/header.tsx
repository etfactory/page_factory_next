"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <a href={`/#${href}`} className="text-[#444] no-underline text-[1.2rem] font-medium transition-colors duration-200 ease-in hover:text-[#0099cc] md:text-[0.95rem] md:font-normal" onClick={handleClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={`/#${href}`} className="text-[#444] no-underline text-[1.2rem] font-medium transition-colors duration-200 ease-in hover:text-[#0099cc] md:text-[0.95rem] md:font-normal" onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between bg-white/70 px-6 shadow-[0_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-md z-[1000] box-border">

      <Link href="/" className="font-bold flex items-center" onClick={closeMenu}>
        <img src="/logo/page factory black.svg" alt="pageFactory Logo" className="h-[20px]" />
      </Link>

      <button className="md:hidden flex flex-col justify-between w-[26px] h-[20px] bg-transparent border-none cursor-pointer p-0 z-[1001] group" onClick={toggleMenu}>
        <span className={`w-full h-[3px] bg-[#444] rounded-full transition-all duration-300 ease-linear ${isMenuOpen ? 'rotate-45 translate-y-[8.5px]' : ''}`}></span>
        <span className={`w-full h-[3px] bg-[#444] rounded-full transition-all duration-300 ease-linear ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-[3px] bg-[#444] rounded-full transition-all duration-300 ease-linear ${isMenuOpen ? '-rotate-45 -translate-y-[8.5px]' : ''}`}></span>
      </button>

      <div className={`fixed top-[60px] ${isMenuOpen ? 'right-0' : 'right-[-100%]'} w-full h-[calc(100vh-60px)] bg-white/95 backdrop-blur-md flex flex-col justify-start pt-[60px] gap-10 transition-[right] duration-300 ease-in-out shadow-[-2px_0_5px_rgba(0,0,0,0.05)] md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none md:pt-0 md:gap-6 md:shadow-none md:right-auto`}>
        <NavbarLink href="main_section">Home</NavbarLink>
        <NavbarLink href="profile_section">Profile</NavbarLink>
        <NavbarLink href="portfolio_section">Portfolio</NavbarLink>
        <NavbarLink href="contact_section">Contact</NavbarLink>
      </div>
    </nav>
  );
}