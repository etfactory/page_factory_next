import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import LinkButton from './linkbutton';

// CSS 파일 import (위에서 수정한 CSS가 적용됩니다)
import './styles/project_modal.css';
import './styles/linkbutton.css';
import './styles/main_style.css';

interface ProjectModalProps {
    title: string;
    description: string; // HTML 문자열이라고 가정 (예: "<p>설명</p>")
    projectUrl?: string;
    linkname?: string;
    techStack: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
    title, 
    description, 
    projectUrl, 
    linkname, 
    techStack 
}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Next.js SSR 오류 방지: 클라이언트 마운트 후 setAppElement 실행
    useEffect(() => {
        // Next.js의 id="__next" 혹은 body를 지정
        Modal.setAppElement('body'); 
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
        // react-modal은 기본적으로 body scroll lock을 지원합니다.
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="project-modal-wrapper">
            <div onClick={openModal} style={{ display: "inline-block" }}>
                <LinkButton 
                    text="More Info" 
                    href="#" 
                    style={{ backgroundColor: "#0099cc" }} 
                    onClick={(e) => { e.preventDefault(); openModal(); }} 
                />
            </div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                
                // CSS 클래스 이름 매핑
                className="modal-content"
                overlayClassName="modal-overlay"
                
                // 애니메이션 시간 설정 (선택사항)
                closeTimeoutMS={200}
            >
                {/* 닫기 버튼 (우상단 고정) */}
                <button 
                    onClick={closeModal} 
                    className="close-button"
                    style={{ position: 'absolute', top: '16px', right: '16px', cursor: 'pointer' }}
                >
                    ✕
                </button>

                <h2 className="modal-title" style={{ marginTop: 0 }}>{title}</h2>
                
                <div className="modal-tech-stack" style={{ marginBottom: '16px' }}>
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-item" style={{ marginRight: '8px', padding: '4px 8px', background: '#eee', borderRadius: '4px', fontSize: '0.875rem' }}>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* DOMParser 로직 대체:
                    dangerouslySetInnerHTML을 사용하면 훨씬 간단하게 HTML을 렌더링할 수 있습니다.
                    Next.js 서버 사이드 렌더링 시 DOMParser 에러를 막아줍니다.
                */}
                <div 
                    className="modal-description"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                {projectUrl && (
                    <div style={{ marginTop: "20px" }}>
                        <LinkButton 
                            text={linkname ? linkname : "Github Link"} 
                            href={projectUrl} 
                            style={{ backgroundColor: "#000000" }} 
                        />
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default ProjectModal;