"use client";

import './styles/project_panel.css';
import './styles/linkbutton.css';
import './styles/main_style.css';
import LinkButton from './linkbutton';

interface ProjectPanelProps {
    title: string;
    public: boolean;
    description: string;
    projectUrl?: string;
    linkname?: string;
    techStack: string[];
}

const ProjectPanel:React.FC<ProjectPanelProps> = ({ title, description, projectUrl, techStack, linkname }) => {
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
            {projectUrl && (
                <LinkButton text={linkname ? linkname : "Github Link"} href={projectUrl} style={{ backgroundColor: "#000000", marginTop: "10px" }} />
            )}
        </div>
    )
}

export default ProjectPanel;