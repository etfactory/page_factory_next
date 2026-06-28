"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '../components/styles/management.css';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

type Project = {
  id: number;
  project_type: string;
  project_key: string;
  title: string;
  description: string;
  tech_stack: string;
  link_name: string;
  project_url: string;
  modal_description: string;
};

export default function ManagementPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [visibleLimits, setVisibleLimits] = useState<{ [key: string]: number }>({
    mobile: 5,
    web: 5,
    other: 5
  });

  const loadMore = (type: string) => {
    setVisibleLimits(prev => ({ ...prev, [type]: (prev[type] || 5) + 5 }));
  };

  // Form State
  const [formData, setFormData] = useState({
    project_type: 'mobile',
    project_key: '',
    title: '',
    description: '',
    tech_stack: '[]',
    link_name: '',
    project_url: '',
    modal_description: '',
  });

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuillChange = (value: string) => {
    setFormData(prev => ({ ...prev, modal_description: value }));
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);

    let parsedTechStack = project.tech_stack || '';
    try {
      if (project.tech_stack) {
        const parsed = JSON.parse(project.tech_stack);
        if (Array.isArray(parsed)) {
          parsedTechStack = parsed.join(', ');
        }
      }
    } catch (e) {
      parsedTechStack = project.tech_stack || '';
    }

    setFormData({
      project_type: project.project_type || 'mobile',
      project_key: project.project_key || '',
      title: project.title || '',
      description: project.description || '',
      tech_stack: parsedTechStack || '',
      link_name: project.link_name || '',
      project_url: project.project_url || '',
      modal_description: project.modal_description || '',
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setFormData({
      project_type: 'mobile',
      project_key: '',
      title: '',
      description: '',
      tech_stack: '[]',
      link_name: '',
      project_url: '',
      modal_description: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingProject ? `/api/projects/${editingProject.id}` : '/api/projects';
      const method = editingProject ? 'PUT' : 'POST';

      const payload = {
        ...formData,
        tech_stack: (() => {
          try {
            return JSON.parse(formData.tech_stack);
          } catch {
            return formData.tech_stack.split(',').map(s => s.trim());
          }
        })(),
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        handleCancelEdit();
        fetchProjects();
      } else {
        alert('Error saving project');
      }
    } catch (error) {
      console.error(error);
      alert('Error saving project');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchProjects();
      } else {
        alert('Error deleting project');
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting project');
    }
  };

  // Quill Toolbar Modules
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="p-8 max-w-6xl mx-auto w-full text-white">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'paperozi' }}>Manage Portfolio Projects</h1>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Form Section */}
          <div className="flex-[1.5] bg-[#2a2a2a] p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Type:</label>
                <select name="project_type" value={formData.project_type} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" required>
                  <option value="mobile">Mobile</option>
                  <option value="web">Web</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Key Name:</label>
                <input type="text" name="project_key" value={formData.project_key} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Short Description:</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" rows={3} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Tech Stack (JSON array or comma separated):</label>
                <input type="text" name="tech_stack" value={formData.tech_stack} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Link Name (e.g. Report Link, About Link):</label>
                <input type="text" name="link_name" value={formData.link_name} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[#ccc]">Project / Report URL:</label>
                <input type="text" name="project_url" value={formData.project_url} onChange={handleInputChange} className="w-full p-2.5 rounded text-black bg-white" />
              </div>
              <div className="flex flex-col gap-1.5 pb-8">
                <label className="text-sm text-[#ccc]">Modal Description (Advanced HTML Supported):</label>
                <div className="bg-white text-black mt-2 rounded overflow-hidden">
                  <ReactQuill
                    theme="snow"
                    value={formData.modal_description}
                    onChange={handleQuillChange}
                    modules={quillModules}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors cursor-pointer border-none">
                  {editingProject ? 'Save Changes' : 'Add Project'}
                </button>
                {editingProject && (
                  <button type="button" onClick={handleCancelEdit} className="px-5 py-2.5 bg-transparent hover:bg-white/10 text-white font-medium rounded transition-colors cursor-pointer border border-white/20">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* List Section */}
          <div className="flex-1">
            <div className="flex-[1.5] bg-[#2a2a2a] p-6 rounded-xl mb-6">
              <h2 className="text-2xl font-semibold">Projects List</h2>
            </div>
            {loading ? <p className="text-[#888]">Loading...</p> : (
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Mobile Projects', type: 'mobile' },
                  { title: 'Web Projects', type: 'web' },
                  { title: 'Other Projects', type: 'other' }
                ].map(({ title, type }) => {
                  const categoryProjects = projects.filter(p => p.project_type === type);
                  if (categoryProjects.length === 0) return null;

                  const limit = visibleLimits[type] || 5;
                  const visibleProjects = categoryProjects.slice(0, limit);
                  const hasMore = categoryProjects.length > limit;

                  return (
                    <div key={type} className="bg-[#2a2a2a] p-5 rounded-xl border border-white/5">
                      <h3 className="text-xl font-bold mb-4 text-[#0099cc] border-b border-white/10 pb-2">{title} <span className="text-sm font-normal text-[#888]">({categoryProjects.length})</span></h3>
                      <ul className="list-none p-0 flex flex-col gap-3">
                        {visibleProjects.map(p => (
                          <li key={p.id} className="list-none m-0 bg-[#333333] p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="flex-1">
                              <strong className="text-[1.1rem] block">
                                {p.title}
                              </strong>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto shrink-0 justify-end">
                              <button type="button" onClick={() => handleEdit(p)} className="w-9 h-9 flex items-center justify-center bg-transparent hover:bg-white/10 border border-white/20 rounded-full text-[#ccc] hover:text-white transition-colors cursor-pointer" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                              </button>
                              <button type="button" onClick={() => handleDelete(p.id)} className="w-9 h-9 flex items-center justify-center bg-red-600/80 hover:bg-red-600 border border-transparent rounded-full text-white transition-colors cursor-pointer" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {hasMore && (
                        <button onClick={() => loadMore(type)} className="mt-4 w-full py-2 bg-transparent hover:bg-white/5 border border-white/10 text-[#ccc] rounded transition-colors cursor-pointer text-sm">
                          + More ({categoryProjects.length - limit} remaining)
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
