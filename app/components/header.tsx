"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/header.css";

export default function Navigator() {
  const pathname = usePathname(); // 현재 경로 가져오기

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  };

  function NavbarLink({ href, children }: { href: string; children: React.ReactNode }) {
    // 현재 경로가 "/"인 경우에만 스크롤 동작 사용
    if (pathname === "/") {
      return (
        <a href={`/#${href}`} className="nav-link" onClick={(e) => handleScroll(e, href)}>
          {children}
        </a>
      );
    }

    // 다른 경로에서는 일반적인 링크로 동작
    return (
      <Link href={`/#${href}`} className="nav-link">
        {children}
      </Link>
    );
  }

  return (
    <nav className="nav">
      <Link href="/" className="nav-left">
        <img src="/logo/page factory black.svg" alt="pageFactory Logo" style={{ height: "20px" }} />
      </Link>
      <div className="nav-right">
        <NavbarLink href="main_section">Home</NavbarLink>
        <NavbarLink href="profile_section">Profile</NavbarLink>
        <NavbarLink href="portfolio_section">Portfolio</NavbarLink>
        <NavbarLink href="contact_section">Contact</NavbarLink>
      </div>
    </nav>
  );
}