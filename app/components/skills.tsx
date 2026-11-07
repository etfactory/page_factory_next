"use client";

import { useEffect, useRef } from "react";
import styles from "./skills.module.css";
import { FaJava, FaReact, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { FaSwift } from "react-icons/fa6";
import { SiKotlin, SiDart, SiJavascript, SiTypescript, SiFlutter, SiNextdotjs, SiSpringboot, SiMysql, SiSqlite, SiNestjs, SiPostgresql, SiFastapi } from "react-icons/si";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLElement>("[data-skill-card]");
    if (!cards || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.build = "true";
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.15 });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const cardClass = `${styles.card} flex min-h-36 flex-col items-start justify-between border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] p-5 transition-[transform,border-color] duration-150 hover:-translate-y-0.5 hover:border-[var(--pf-border-strong)]`;
  const iconClass = "mb-6 text-[2.5rem]";
  const titleClass = "text-[0.95rem] font-bold text-left";

  return (
    <div ref={containerRef}>
      <h2 lang="en" className="pf-subsection-title">Skills</h2>

      {/* --- Languages --- */}
      <h3 lang="en" className="pf-group-title">Languages</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <FaJava className={`${iconClass} text-[#f89820]`} />
          <h4 className={titleClass}>Java</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiKotlin className={`${iconClass} text-[#7f52ff]`} />
          <h4 className={titleClass}>Kotlin</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <FaSwift className={`${iconClass} text-[#f05138]`} />
          <h4 className={titleClass}>Swift</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiDart className={`${iconClass} text-[#0175c2]`} />
          <h4 className={titleClass}>Dart</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <div className="flex gap-2 mb-3">
            <SiJavascript className="text-[3rem] text-[#f7df1e]" />
          </div>
          <h4 className={titleClass}>JavaScript</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
            <SiTypescript className="text-[3rem] text-[#3178c6]" />
          <h4 className={titleClass}>TypeScript</h4>
        </div>
      </div>

      {/* --- Frameworks & Libraries --- */}
      <h3 lang="en" className="pf-group-title">Frameworks &amp; Libraries</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiFlutter className={`${iconClass} text-[#02569b]`} />
          <h4 className={titleClass}>Flutter</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <FaReact className={`${iconClass} text-[#61dafb]`} />
          <h4 className={titleClass}>React Native</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiNextdotjs className={`${iconClass} text-black dark:text-white`} />
          <h4 className={titleClass}>Next.js</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiSpringboot className={`${iconClass} text-[#6db33f]`} />
          <h4 className={titleClass}>Spring Boot</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiNestjs className={`${iconClass} text-[#ea2845]`} />
          <h4 className={titleClass}>NestJS</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiFastapi className={`${iconClass} text-[#039384]`} />
          <h4 className={titleClass}>FastAPI</h4>
        </div>
      </div>

      {/* --- Databases --- */}
      <h3 lang="en" className="pf-group-title">Databases</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiMysql className={`${iconClass} text-[#4479a1]`} />
          <h4 className={titleClass}>MySQL</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiSqlite className={`${iconClass} text-[#003b57]`} />
          <h4 className={titleClass}>SQLite</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <SiPostgresql className={`${iconClass} text-[#336791]`} />
          <h4 className={titleClass}>PostgreSQL</h4>
        </div>
      </div>

      {/* --- Tools & Platforms --- */}
      <h3 lang="en" className="pf-group-title">Tools &amp; Platforms</h3>
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <div className="flex gap-2 mb-3">
            <FaGitAlt className="text-[3rem] text-[#f34f29]" />
            <FaGithub className="text-[3rem] text-black dark:text-white" />
          </div>
          <h4 className={titleClass}>Git & GitHub</h4>
        </div>
        <div className={cardClass} data-skill-card>
          <SkillCursor />
          <FaDocker className={`${iconClass} text-[#2560ff]`} />
          <h4 className={titleClass}>Docker</h4>
        </div>
      </div>
    </div>
  );
}

function SkillCursor() {
  return (
    <span className={styles.cursor} aria-hidden="true">
      <svg viewBox="0 0 20 24" width="16" height="19" fill="none">
        <path d="M2 2v16.5l4.6-4.3 3.4 7.4 3-1.4-3.4-7.3 6.2-.7L2 2Z" fill="currentColor" stroke="var(--pf-bg-surface)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span>place</span>
    </span>
  );
}
