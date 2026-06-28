import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import LinkButton from './linkbutton';


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
        <div className="inline-block">
            <div onClick={openModal} className="inline-block">
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
                className="bg-white dark:bg-[#1f2937] dark:text-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[12px] p-[12px] outline-none shadow-[0_4px_6px_rgba(0,0,0,0.1)] relative"
                overlayClassName="fixed inset-0 bg-black/75 flex items-center justify-center z-[1000] p-[20px]"
                closeTimeoutMS={200}
            >
                {/* 닫기 버튼 (우상단 고정) */}
                <button 
                    onClick={closeModal} 
                    className="absolute top-[16px] right-[16px] bg-transparent border-none text-[1.5rem] cursor-pointer text-black dark:text-white"
                >
                    ✕
                </button>

                <h2 className="font-[paperozi] text-[1.5rem] font-[800] mb-[10px] mt-0">{title}</h2>
                
                <div className="font-[paperozi] text-[0.9rem] font-[600] text-[#3c3c3c] dark:text-[#ccc] flex flex-wrap gap-[8px] mb-[16px]">
                    {techStack.map((tech, index) => (
                        <span key={index} className="px-[8px] py-[4px] bg-[#eee] dark:bg-[#333] rounded-[4px] text-[0.875rem]">
                            {tech}
                        </span>
                    ))}
                </div>

                <div 
                    className="mt-[15px] text-[1rem] leading-[1.5] text-[#555] dark:text-[#ddd]"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                {projectUrl && (
                    <div className="mt-[20px]">
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