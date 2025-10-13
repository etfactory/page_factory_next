import React, { useState } from "react";
import Modal from 'react-modal';
import LinkButton from './linkbutton';

import './styles/project_modal.css';
import './styles/linkbutton.css';
import './styles/main_style.css';

Modal.setAppElement('body');

interface ProjectModalProps {
    title: string;
    description: string;
    projectUrl?: string;
    linkname?: string;
    techStack: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ title, description, projectUrl, linkname, techStack }) => {
    // Check Public or Private
    const isPublic = !!projectUrl;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="modal">
            <div onClick={openModal} style={{ display: "inline-block" }}>
                <LinkButton text="More Info" href="#" style={{ backgroundColor: "#0099cc" }} onClick={(e)=>{e.preventDefault(); openModal();}} />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <h2 className="modal-title">{title}</h2>
                <div className="modal-tech-stack">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-item">{tech}</span>
                    ))}
                </div>
                <p className="modal-description">{description}</p>
                {projectUrl && (
                    <LinkButton text={linkname ? linkname : "Github Link"} href={projectUrl} style={{ backgroundColor: "#000000", marginTop: "12px" }} />
                )}
                <button onClick={closeModal} className="close-button">X</button>
            </Modal>
        </div>
    );
}


export default ProjectModal;