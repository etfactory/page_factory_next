"use client";

import { useState } from "react"; // 상태 관리를 위해 추가
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles/header.css";

export default function Navigator() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열림 상태 관리

  // 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 링크 클릭 시 메뉴 닫기 (모바일용)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu(); // 스크롤 이동 후 모바일 메뉴 닫기
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  };

  // NavbarLink 컴포넌트 (onClick props 추가)
  function NavbarLink({ href, children }: { href: string; children: React.ReactNode }) {
    const isHome = pathname === "/";

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isHome) {
        handleScroll(e, href);
      } else {
        closeMenu(); // 페이지 이동 시에도 메뉴 닫기
      }
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
      <div className="nav-container">
        {/* 로고 영역 */}
        <Link href="/" className="nav-left" onClick={closeMenu}>
          <img src="/logo/page factory black.svg" alt="pageFactory Logo" style={{ height: "20px" }} />
        </Link>

        {/* 햄버거 버튼 (모바일에서만 보임) */}
        <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* 네비게이션 링크들 */}
        <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
          <NavbarLink href="main_section">Home</NavbarLink>
          <NavbarLink href="profile_section">Profile</NavbarLink>
          <NavbarLink href="portfolio_section">Portfolio</NavbarLink>
          <NavbarLink href="contact_section">Contact</NavbarLink>
        </div>
      </div>
    </nav>
  );
}