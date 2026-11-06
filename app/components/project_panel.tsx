"use client";

import { useEffect, useRef, useState } from 'react';
import LinkButton from './linkbutton';
import ProjectModal from './project_modal';
import styles from './project_panel.module.css';

interface ProjectPanelProps {
    title: string;
    description: string;
    projectUrl?: string;
    linkname?: string;
    techStack: string[];
    modalDescription: string;
    isInProgress?: boolean;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ title, description, projectUrl, techStack, linkname, modalDescription, isInProgress = false }) => {
    const panelRef = useRef<HTMLElement>(null);
    const [hasEntered, setHasEntered] = useState(false);

    useEffect(() => {
        const panel = panelRef.current;
        if (!panel || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasEntered(true);
                observer.disconnect();
            }
        }, { threshold: 0.15 });

        observer.observe(panel);
        return () => observer.disconnect();
    }, []);

    return (
        <article ref={panelRef} data-entered={hasEntered || undefined} className={`relative mb-8 w-full border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] p-5 transition-[transform,border-color] duration-150 hover:-translate-y-0.5 hover:border-[var(--pf-border-strong)] md:p-8 ${styles.panel}`}>
            <div className={styles.buildOverlay} aria-hidden="true">
                <span className={styles.buildFrame} />
                <span className={`${styles.buildLine} ${styles.buildLineTop}`} />
                <span className={`${styles.buildLine} ${styles.buildLineBottom}`} />
                <span className={`${styles.buildCursor} ${styles.cursorLayout}`}>
                    <CursorIcon /><span>layout</span>
                </span>
                <span className={`${styles.buildCursor} ${styles.cursorDetail}`}>
                    <CursorIcon /><span>detail</span>
                </span>
            </div>
            <div className={styles.projectHeading}>
                <div className="flex items-start justify-between gap-4">
                    <h3 className="m-0 text-[1.35rem] font-bold md:text-[1.5rem]">{title}</h3>
                    {isInProgress ? (
                        <div className="shrink-0 rounded-sm border border-[var(--pf-warning)] px-2 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-[.08em] text-[var(--pf-warning)]">
                            ◐ IN PROGRESS
                        </div>
                    ) : (
                        <div className="shrink-0 rounded-sm border border-[var(--pf-success)] px-2 py-1 font-mono text-[0.7rem] font-bold uppercase tracking-[.08em] text-[var(--pf-success)]">
                            ● PUBLIC
                        </div>
                    )}
                </div>
                <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs font-medium text-[var(--pf-text-tertiary)]">
                    {techStack.map((tech, index) => (
                        <span key={index} className="bg-[var(--pf-bg-subtle)] px-2 py-1 text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <p className={`mt-6 max-w-[720px] text-[1rem] leading-[1.65] text-[var(--pf-text-secondary)] ${styles.projectDescription}`}>{description}</p>
            <div className={`mt-6 flex flex-wrap items-center gap-3 ${styles.projectActions}`}>
                <ProjectModal title={title} description={modalDescription} projectUrl={projectUrl} techStack={techStack} linkname={linkname} />
                {projectUrl && (
                    <LinkButton text={linkname ? linkname : "Github Link"} href={projectUrl} style={{ backgroundColor: "#000000" }} />
                )}
            </div>
        </article>
    )
}

function CursorIcon() {
    return (
        <svg viewBox="0 0 20 24" width="16" height="19" fill="none">
            <path d="M2 1.5v17l4.2-4.1 3.2 7.3 2.7-1.2-3.2-7.2 6 .1L2 1.5Z" fill="currentColor" stroke="var(--pf-bg-surface)" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    );
}

export default ProjectPanel;
