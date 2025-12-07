"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/header.css";

export default function Navigator() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <a href={`/#${href}`} className="nav-link" onClick={handleClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={`/#${href}`} className="nav-link" onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <nav className="nav">
      {/* nav-container div 제거됨: 로고와 메뉴가 nav의 직접 자식이 되어야 함 */}
      
      <Link href="/" className="nav-left" onClick={closeMenu}>
        <img src="/logo/page factory black.svg" alt="pageFactory Logo" style={{ height: "20px" }} />
      </Link>

      <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
        <NavbarLink href="main_section">Home</NavbarLink>
        <NavbarLink href="profile_section">Profile</NavbarLink>
        <NavbarLink href="portfolio_section">Portfolio</NavbarLink>
        <NavbarLink href="contact_section">Contact</NavbarLink>
      </div>
    </nav>
  );
}