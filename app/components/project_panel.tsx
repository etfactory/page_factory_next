"use client";

import LinkButton from './linkbutton';
import ProjectModal from './project_modal';

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
    return (
        <article className="mb-8 w-full rounded-2xl border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] p-5 transition-[transform,border-color] duration-150 hover:-translate-y-0.5 hover:border-[var(--pf-border-strong)] md:p-8">
            <div>
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
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs font-medium text-[var(--pf-text-tertiary)]">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
            <p className="mt-6 max-w-[720px] text-[1rem] leading-[1.65] text-[var(--pf-text-secondary)]">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
                <ProjectModal title={title} description={modalDescription} projectUrl={projectUrl} techStack={techStack} linkname={linkname} />
                {projectUrl && (
                    <LinkButton text={linkname ? linkname : "Github Link"} href={projectUrl} style={{ backgroundColor: "#000000" }} />
                )}
            </div>
        </article>
    )
}

export default ProjectPanel;
