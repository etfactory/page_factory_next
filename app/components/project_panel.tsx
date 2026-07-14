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
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ title, description, projectUrl, techStack, linkname, modalDescription }) => {
    return (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[37px] p-[18px] mb-[20px] w-full shadow-[0_2px_4px_var(--shadow)] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-[5px]">
            <div>
                <div className="flex items-center gap-[10px] justify-between">
                    <h1 className="font-[paperozi] text-[1.5rem] font-[800]">{title}</h1>
                    {projectUrl && <div className="border-2 border-[#4caf50] text-[#4caf50] px-[10px] py-[5px] w-[64px] rounded-[50px] text-center font-[paperozi] text-[0.7rem] font-[600] box-content">Public</div>}
                    {!projectUrl && <div className="border-2 border-[#f44336] text-[#f44336] px-[10px] py-[5px] w-[64px] rounded-[50px] text-center font-[paperozi] text-[0.7rem] font-[600] box-content">Private</div>}
                </div>
                <div className="font-[paperozi] text-[0.9rem] font-[600] text-[var(--muted-foreground)] flex flex-wrap gap-[8px] mt-2">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
            <p className="mt-[15px] text-[1rem] leading-[1.5] text-[var(--muted-foreground)]">{description}</p>
            <div className="flex gap-[2px] items-center mt-[10px]">
                <ProjectModal title={title} description={modalDescription} projectUrl={projectUrl} techStack={techStack} linkname={linkname} />
                {projectUrl && (
                    <LinkButton text={linkname ? linkname : "Github Link"} href={projectUrl} style={{ backgroundColor: "#000000" }} />
                )}
            </div>
        </div>
    )
}

export default ProjectPanel;
