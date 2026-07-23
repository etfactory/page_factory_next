"use client";

import dynamic from "next/dynamic";
import { FormEvent, useEffect, useMemo, useState } from "react";
import "../components/styles/management.css";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <div className="mg-editor-loading">에디터를 불러오는 중…</div>,
});

type ProjectType = "mobile" | "web" | "other";

type Project = {
  id: number;
  project_type: ProjectType;
  project_key: string;
  title: string;
  description: string | null;
  tech_stack: string | null;
  link_name: string | null;
  project_url: string | null;
  modal_description: string | null;
};

type FormData = {
  project_type: ProjectType;
  project_key: string;
  title: string;
  description: string;
  tech_stack: string;
  link_name: string;
  project_url: string;
  modal_description: string;
};

const EMPTY_FORM: FormData = {
  project_type: "mobile",
  project_key: "",
  title: "",
  description: "",
  tech_stack: "",
  link_name: "",
  project_url: "",
  modal_description: "",
};

const TYPE_LABELS: Record<ProjectType, string> = {
  mobile: "모바일",
  web: "웹",
  other: "기타",
};

function techStackToInput(value: string | null) {
  if (!value) return "";
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.join(", ") : value;
  } catch {
    return value;
  }
}

function techStackToArray(value: string) {
  return [...new Set(value.split(",").map((item) => item.trim()).filter(Boolean))];
}

function descriptionStats(value: string) {
  const plainText = value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  return {
    characters: plainText.length,
    words: plainText ? plainText.split(" ").length : 0,
  };
}

export default function PortfolioManagementPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | ProjectType>("all");
  const [editorMode, setEditorMode] = useState<"write" | "preview">("write");
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const isDirty = useMemo(
    () => JSON.stringify(formData) !== JSON.stringify(EMPTY_FORM),
    [formData],
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return projects.filter((project) => {
      const matchesType = typeFilter === "all" || project.project_type === typeFilter;
      const searchable = `${project.title} ${project.project_key} ${project.description ?? ""} ${project.tech_stack ?? ""}`.toLocaleLowerCase();
      return matchesType && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [projects, query, typeFilter]);

  const counts = useMemo(
    () => ({
      all: projects.length,
      mobile: projects.filter((project) => project.project_type === "mobile").length,
      web: projects.filter((project) => project.project_type === "web").length,
      other: projects.filter((project) => project.project_type === "other").length,
    }),
    [projects],
  );

  async function fetchProjects() {
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch("/api/projects", { cache: "no-store" });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "목록을 불러오지 못했습니다.");
      setProjects(result.data);
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "목록을 불러오지 못했습니다." });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const warnBeforeLeave = (event: BeforeUnloadEvent) => {
      if (!isDirty) return;
      event.preventDefault();
    };
    window.addEventListener("beforeunload", warnBeforeLeave);
    return () => window.removeEventListener("beforeunload", warnBeforeLeave);
  }, [isDirty]);

  useEffect(() => {
    if (!editorExpanded) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEditorExpanded(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [editorExpanded]);

  function resetForm() {
    setEditingProject(null);
    setFormData(EMPTY_FORM);
  }

  function startEdit(project: Project) {
    setEditingProject(project);
    setFormData({
      project_type: project.project_type,
      project_key: project.project_key,
      title: project.title,
      description: project.description ?? "",
      tech_stack: techStackToInput(project.tech_stack),
      link_name: project.link_name ?? "",
      project_url: project.project_url ?? "",
      modal_description: project.modal_description ?? "",
    });
    setMessage(null);
    document.getElementById("portfolio-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((previous) => ({ ...previous, [key]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const response = await fetch(editingProject ? `/api/projects/${editingProject.id}` : "/api/projects", {
        method: editingProject ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, tech_stack: techStackToArray(formData.tech_stack) }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "프로젝트를 저장하지 못했습니다.");
      const wasEditing = Boolean(editingProject);
      resetForm();
      await fetchProjects();
      setMessage({ type: "success", text: wasEditing ? "프로젝트 변경사항을 저장했습니다." : "새 프로젝트를 추가했습니다." });
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "프로젝트를 저장하지 못했습니다." });
    } finally {
      setSubmitting(false);
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    setSubmitting(true);
    try {
      const response = await fetch(`/api/projects/${deleteTarget.id}`, { method: "DELETE" });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "프로젝트를 삭제하지 못했습니다.");
      const deletedTitle = deleteTarget.title;
      if (editingProject?.id === deleteTarget.id) resetForm();
      setDeleteTarget(null);
      await fetchProjects();
      setMessage({ type: "success", text: `‘${deletedTitle}’ 프로젝트를 삭제했습니다.` });
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "프로젝트를 삭제하지 못했습니다." });
      setDeleteTarget(null);
    } finally {
      setSubmitting(false);
    }
  }

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }, { size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      [{ align: [] }, "blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const quillFormats = [
    "header", "size", "bold", "italic", "underline", "strike",
    "color", "background", "script", "list", "indent", "align",
    "blockquote", "code-block", "link", "image", "video",
  ];
  const editorStats = descriptionStats(formData.modal_description);

  return (
    <div className="mg-page">
      <header className="mg-page-header">
        <div>
          <p className="mg-eyebrow">PORTFOLIO MANAGEMENT</p>
          <h1>포트폴리오</h1>
          <p>프로젝트를 추가하고 공개 정보를 안전하게 관리합니다.</p>
        </div>
        <div className="mg-count" aria-label={`전체 프로젝트 ${counts.all}개`}>
          <strong>{counts.all}</strong>
          <span>전체 프로젝트</span>
        </div>
      </header>

      {message && (
        <div className={`mg-notice mg-notice-${message.type}`} role={message.type === "error" ? "alert" : "status"}>
          {message.text}
          <button type="button" onClick={() => setMessage(null)} aria-label="알림 닫기">×</button>
        </div>
      )}

      <div className="mg-portfolio-grid">
        <section className="mg-card mg-form-card" id="portfolio-form" aria-labelledby="form-title">
          <div className="mg-card-header">
            <div>
              <p className="mg-section-label">{editingProject ? "EDIT PROJECT" : "NEW PROJECT"}</p>
              <h2 id="form-title">{editingProject ? "프로젝트 수정" : "프로젝트 추가"}</h2>
            </div>
            {editingProject && <span className="mg-edit-badge">#{editingProject.id} 수정 중</span>}
          </div>

          <form onSubmit={handleSubmit} className="mg-form">
            <div className="mg-form-row">
              <label className="mg-field">
                <span>유형 <b>*</b></span>
                <select value={formData.project_type} onChange={(event) => updateField("project_type", event.target.value as ProjectType)}>
                  {Object.entries(TYPE_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <label className="mg-field">
                <span>프로젝트 키 <b>*</b></span>
                <input value={formData.project_key} onChange={(event) => updateField("project_key", event.target.value)} placeholder="예: page-factory" required minLength={2} maxLength={100} />
                <small>목록에서 구분할 고유한 영문 키입니다.</small>
              </label>
            </div>

            <label className="mg-field">
              <span>프로젝트명 <b>*</b></span>
              <input value={formData.title} onChange={(event) => updateField("title", event.target.value)} placeholder="프로젝트 이름" required maxLength={255} />
            </label>
            <label className="mg-field">
              <span>한 줄 소개</span>
              <textarea value={formData.description} onChange={(event) => updateField("description", event.target.value)} placeholder="목록 카드에 표시할 간단한 설명" rows={3} maxLength={500} />
              <small className="mg-counter">{formData.description.length}/500</small>
            </label>
            <label className="mg-field">
              <span>기술 스택</span>
              <input value={formData.tech_stack} onChange={(event) => updateField("tech_stack", event.target.value)} placeholder="Next.js, TypeScript, Prisma" />
              <small>쉼표로 구분하면 중복을 자동으로 정리합니다.</small>
            </label>
            <div className="mg-form-row">
              <label className="mg-field">
                <span>링크 이름</span>
                <input value={formData.link_name} onChange={(event) => updateField("link_name", event.target.value)} placeholder="프로젝트 보기" maxLength={100} />
              </label>
              <label className="mg-field">
                <span>프로젝트 URL</span>
                <input type="url" value={formData.project_url} onChange={(event) => updateField("project_url", event.target.value)} placeholder="https://example.com" />
              </label>
            </div>
            <div className={`mg-editor-shell${editorExpanded ? " is-expanded" : ""}`}>
              <div className="mg-editor-heading">
                <div>
                  <span>상세 설명</span>
                  <small>프로젝트 상세 모달에 표시되는 콘텐츠입니다.</small>
                </div>
                <div className="mg-editor-actions">
                  <div className="mg-editor-tabs" role="tablist" aria-label="상세 설명 보기 방식">
                    <button type="button" role="tab" aria-selected={editorMode === "write"} onClick={() => setEditorMode("write")}>작성</button>
                    <button type="button" role="tab" aria-selected={editorMode === "preview"} onClick={() => setEditorMode("preview")}>미리보기</button>
                  </div>
                  <button className="mg-expand-button" type="button" onClick={() => setEditorExpanded((value) => !value)} aria-pressed={editorExpanded}>
                    {editorExpanded ? "축소" : "넓게 쓰기"}
                  </button>
                </div>
              </div>

              <div className="mg-editor-body">
                {editorMode === "write" ? (
                  <div className="mg-editor">
                    <ReactQuill
                      theme="snow"
                      value={formData.modal_description}
                      onChange={(value) => updateField("modal_description", value)}
                      modules={quillModules}
                      formats={quillFormats}
                      placeholder="프로젝트 배경, 주요 기능, 담당 역할과 성과를 작성해 보세요."
                    />
                  </div>
                ) : (
                  <div className="mg-editor-preview" role="tabpanel">
                    {editorStats.characters > 0 ? (
                      <div className="mg-rich-content" dangerouslySetInnerHTML={{ __html: formData.modal_description }} />
                    ) : (
                      <div className="mg-preview-empty">미리볼 상세 설명이 없습니다.</div>
                    )}
                  </div>
                )}
              </div>

              <div className="mg-editor-footer">
                <span>색상 · 배경 · 정렬 · 목록 · 인용 · 코드 · 링크 · 미디어 지원</span>
                <span>{editorStats.characters.toLocaleString()}자 · {editorStats.words.toLocaleString()}단어</span>
              </div>
            </div>

            <div className="mg-form-actions">
              <button className="mg-button mg-button-primary" type="submit" disabled={submitting}>
                {submitting ? "저장 중…" : editingProject ? "변경사항 저장" : "프로젝트 추가"}
              </button>
              {(editingProject || isDirty) && (
                <button className="mg-button mg-button-secondary" type="button" onClick={resetForm} disabled={submitting}>취소</button>
              )}
            </div>
          </form>
        </section>

        <section className="mg-card mg-list-card" aria-labelledby="project-list-title">
          <div className="mg-card-header">
            <div>
              <p className="mg-section-label">PROJECT LIBRARY</p>
              <h2 id="project-list-title">프로젝트 목록</h2>
            </div>
            <span className="mg-result-count">{filteredProjects.length}개 표시</span>
          </div>

          <div className="mg-list-tools">
            <label className="mg-search">
              <span className="sr-only">프로젝트 검색</span>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="이름, 키, 기술 스택 검색" />
            </label>
            <div className="mg-filter-tabs" aria-label="프로젝트 유형 필터">
              {(["all", "mobile", "web", "other"] as const).map((type) => (
                <button key={type} type="button" aria-pressed={typeFilter === type} onClick={() => setTypeFilter(type)}>
                  {type === "all" ? "전체" : TYPE_LABELS[type]} <span>{counts[type]}</span>
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="mg-state" role="status"><div className="mg-spinner" />프로젝트를 불러오는 중…</div>
          ) : filteredProjects.length === 0 ? (
            <div className="mg-state">
              <strong>{projects.length ? "검색 결과가 없습니다." : "아직 등록된 프로젝트가 없습니다."}</strong>
              <span>{projects.length ? "다른 검색어나 필터를 사용해 보세요." : "왼쪽 양식에서 첫 프로젝트를 추가해 보세요."}</span>
            </div>
          ) : (
            <ul className="mg-project-list">
              {filteredProjects.map((project) => (
                <li key={project.id} className={editingProject?.id === project.id ? "is-editing" : ""}>
                  <div className="mg-project-content">
                    <div className="mg-project-meta">
                      <span className={`mg-type mg-type-${project.project_type}`}>{TYPE_LABELS[project.project_type]}</span>
                      <code>{project.project_key}</code>
                    </div>
                    <strong>{project.title}</strong>
                    <p>{project.description || "등록된 한 줄 소개가 없습니다."}</p>
                    {techStackToArray(techStackToInput(project.tech_stack)).length > 0 && (
                      <div className="mg-tags">
                        {techStackToArray(techStackToInput(project.tech_stack)).slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                      </div>
                    )}
                  </div>
                  <div className="mg-project-actions">
                    <button className="mg-icon-button" type="button" onClick={() => startEdit(project)} aria-label={`${project.title} 수정`} title="수정">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                    </button>
                    <button className="mg-icon-button mg-icon-danger" type="button" onClick={() => setDeleteTarget(project)} aria-label={`${project.title} 삭제`} title="삭제">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/></svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {deleteTarget && (
        <div className="mg-dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setDeleteTarget(null)}>
          <div className="mg-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-dialog-title" aria-describedby="delete-dialog-description">
            <span className="mg-dialog-icon">!</span>
            <h2 id="delete-dialog-title">프로젝트를 삭제할까요?</h2>
            <p id="delete-dialog-description"><strong>‘{deleteTarget.title}’</strong> 프로젝트가 목록과 공개 포트폴리오에서 제거됩니다. 이 작업은 되돌릴 수 없습니다.</p>
            <div className="mg-dialog-actions">
              <button className="mg-button mg-button-secondary" type="button" onClick={() => setDeleteTarget(null)} disabled={submitting}>취소</button>
              <button className="mg-button mg-button-danger" type="button" onClick={confirmDelete} disabled={submitting}>{submitting ? "삭제 중…" : "삭제"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
