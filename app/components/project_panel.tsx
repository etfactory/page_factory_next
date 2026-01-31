"use client";

import './styles/project_panel.css';
import './styles/linkbutton.css';
import './styles/main_style.css';
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

const ProjectPanel:React.FC<ProjectPanelProps> = ({ title, description, projectUrl, techStack, linkname, modalDescription }) => {
    return (
        <div className="project-box">
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                    <h1 className="project-title">{title}</h1>
                    {projectUrl && <div className="public-badge">Public</div>}
                    {!projectUrl && <div className="private-badge">Private</div>}
                </div>
                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-item">{tech}</span>
                    ))}
                </div>
            </div>
            <p className="project-description">{description}</p>
            <div style={{ display: 'flex', gap: '2px', alignItems: 'center', marginTop: '10px' }}>
                <ProjectModal title={title} description={modalDescription} projectUrl={projectUrl} techStack={techStack} linkname={linkname} />
                {projectUrl && (
                    <LinkButton text={linkname ? linkname : "Github Link"} href={projectUrl} style={{ backgroundColor: "#000000" }} />
                )}
            </div>
        </div>
    )
}

export default ProjectPanel;