"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./section-assembly.module.css";

type SectionAssemblyProps = {
  children: React.ReactNode;
  label: string;
  accent?: "purple" | "cyan" | "coral";
};

/** Decorative, one-shot construction marks for homepage sections. */
export default function SectionAssembly({ children, label, accent = "purple" }: SectionAssemblyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.stage} data-assembled={entered || undefined} data-accent={accent}>
      {children}
      <div className={styles.marks} aria-hidden="true">
        <span className={styles.guide} />
        <span className={styles.frame}>
          <i /><i /><i /><i />
        </span>
        <span className={styles.cursor}>
          <svg width="18" height="22" viewBox="0 0 20 24" fill="none">
            <path d="M2 2v16.5l4.6-4.3 3.4 7.4 3-1.4-3.4-7.3 6.2-.7L2 2Z" fill="currentColor" stroke="var(--pf-bg-canvas)" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span>{label}</span>
        </span>
        <span className={styles.cursorSecond}>
          <svg width="16" height="20" viewBox="0 0 20 24" fill="none">
            <path d="M2 2v16.5l4.6-4.3 3.4 7.4 3-1.4-3.4-7.3 6.2-.7L2 2Z" fill="currentColor" stroke="var(--pf-bg-canvas)" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span>align</span>
        </span>
      </div>
    </div>
  );
}
