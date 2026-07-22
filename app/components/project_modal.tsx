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

    const sanitizedDescription = sanitizeHtml(description);

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
                className="pf-modal-content relative max-h-[min(88vh,820px)] w-[min(680px,calc(100vw-40px))] overflow-y-auto rounded-2xl border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-raised)] p-5 text-[var(--pf-text-primary)] shadow-[0_16px_40px_rgb(0_0_0/16%)] outline-none md:p-8"
                overlayClassName="pf-modal-overlay fixed inset-0 z-[1100] flex items-center justify-center p-5"
                closeTimeoutMS={200}
            >
                {/* 닫기 버튼 (우상단 고정) */}
                <button 
                    onClick={closeModal} 
                    aria-label="프로젝트 상세 닫기"
                    className="absolute right-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center border border-[var(--pf-border-subtle)] bg-transparent text-xl text-[var(--pf-text-primary)] transition-colors hover:border-[var(--pf-border-strong)] md:right-5 md:top-5"
                >
                    ✕
                </button>

                <h2 className="mb-3 mt-0 pr-14 text-[1.75rem] font-bold leading-[1.3]">{title}</h2>
                
                <div className="mb-6 flex flex-wrap gap-2 font-mono text-xs font-medium text-[var(--pf-text-tertiary)]">
                    {techStack.map((tech, index) => (
                        <span key={index} className="rounded-sm bg-[var(--pf-bg-subtle)] px-2 py-1 text-xs">
                            {tech}
                        </span>
                    ))}
                </div>

                <div 
                    className="mt-6 text-[1rem] leading-[1.65] text-[var(--pf-text-secondary)]"
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
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

function sanitizeHtml(input: string) {
    if (typeof window === 'undefined') {
        return input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/on\w+="[^"]*"/gi, '');
    }

    const parser = new DOMParser();
    const documentFragment = parser.parseFromString(input, 'text/html');
    const allowedTags = new Set([
        'a', 'b', 'blockquote', 'br', 'div', 'em', 'i', 'li', 'ol', 'p', 'span', 'strong', 'u', 'ul'
    ]);
    const allowedAttributes = new Set(['href', 'target', 'rel', 'class']);

    const walk = (node: ParentNode) => {
        Array.from(node.children).forEach((element) => {
            const tagName = element.tagName.toLowerCase();

            if (!allowedTags.has(tagName)) {
                element.replaceWith(...Array.from(element.childNodes));
                return;
            }

            Array.from(element.attributes).forEach((attribute) => {
                const name = attribute.name.toLowerCase();
                const value = attribute.value;

                if (name.startsWith('on') || !allowedAttributes.has(name)) {
                    element.removeAttribute(attribute.name);
                    return;
                }

                if (name === 'href' && !/^https?:\/\//i.test(value) && !value.startsWith('/') && !value.startsWith('#')) {
                    element.removeAttribute(attribute.name);
                }
            });

            walk(element);
        });
    };

    walk(documentFragment.body);
    return documentFragment.body.innerHTML;
}

export default ProjectModal;
