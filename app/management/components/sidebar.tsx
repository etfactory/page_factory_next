"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/management", label: "대시보드", exact: true },
  { href: "/management/portfolio", label: "포트폴리오", exact: false },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="mg-sidebar">
      <Link href="/" className="mg-sidebar-brand" aria-label="Page Factory 홈">
        <span>PF</span>
        <div><strong>Page Factory</strong><small>Management</small></div>
      </Link>
      <nav aria-label="관리 메뉴">
        <ul>
          {navigation.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} aria-current={active ? "page" : undefined} className={active ? "is-active" : ""}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link href="/" className="mg-sidebar-exit">공개 사이트로 돌아가기 <span aria-hidden="true">↗</span></Link>
    </aside>
  );
}
