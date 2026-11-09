import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Layers,
  Eye,
  CheckCircle2,
  X,
  Smartphone,
  Monitor,
  Tablet,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { PROJECTS, createWhatsAppLink } from '../data/portfolioData.ts';
import { ProjectItem } from '../types/index.ts';

interface ProjectsProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedDemoProject, setSelectedDemoProject] = useState<ProjectItem | null>(null);
  const [previewViewport, setPreviewViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const categories = ['All', 'Business', 'E-Commerce', 'School & College', 'Landing Pages', 'Portfolio'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#030712] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Recent Work & <span className="text-gradient-purple-blue">Sample Client Demos</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore editable showcase projects built with modern responsive design, lightning speed, and clear conversion funnels.
          </p>

          {/* Editable Notice Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Interactive placeholder demo projects (Editable showcase until your live custom projects are deployed)</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Project Image & Overlay */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#030712]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300">
                    {project.category}
                  </div>

                  {/* Metrics Badge */}
                  {project.metrics && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Hover Quick Action */}
                  <button
                    onClick={() => setSelectedDemoProject(project)}
                    className="absolute inset-0 bg-purple-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-bold text-sm transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Launch Live Interactive Demo</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedDemoProject(project)}
                  className="py-2 px-3 rounded-xl bg-purple-950/80 hover:bg-purple-900/90 text-purple-200 border border-purple-500/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>Live Demo</span>
                </button>
                <button
                  onClick={() => onSelectProjectForQuote(project.title)}
                  className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Build Similar</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Live Demo Modal */}
      {selectedDemoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#090d1a] border border-purple-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#0f172a] px-5 py-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{selectedDemoProject.title}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-700/50">
                    {selectedDemoProject.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Interactive Demo Preview • Built by Avinash Prasad
                </p>
              </div>

              {/* Viewport controls & close */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-slate-400">
                  <button
                    onClick={() => setPreviewViewport('desktop')}
                    className={`p-1.5 rounded ${previewViewport === 'desktop' ? 'bg-purple-600 text-white' : 'hover:text-white'}`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewViewport('tablet')}
                    className={`p-1.5 rounded ${previewViewport === 'tablet' ? 'bg-purple-600 text-white' : 'hover:text-white'}`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewViewport('mobile')}
                    className={`p-1.5 rounded ${previewViewport === 'mobile' ? 'bg-purple-600 text-white' : 'hover:text-white'}`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setSelectedDemoProject(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Responsive Frame Preview */}
            <div className="p-6 overflow-y-auto flex-1 bg-[#060913] flex flex-col items-center">
              <div
                className={`transition-all duration-300 rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 ${
                  previewViewport === 'mobile'
                    ? 'w-[360px]'
                    : previewViewport === 'tablet'
                    ? 'w-[640px]'
                    : 'w-full'
                }`}
              >
                {/* Browser address bar mockup */}
                <div className="bg-[#111827] px-4 py-2 border-b border-slate-800 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex-1 bg-slate-900 px-3 py-1 rounded text-[11px] font-mono text-slate-400 truncate text-center">
                    https://avinash-demo.web.app/{selectedDemoProject.id}
                  </div>
                </div>

                {/* Hero Showcase Inside Mockup */}
                <div className="p-6 sm:p-8 space-y-6">
                  <img
                    src={selectedDemoProject.image}
                    alt={selectedDemoProject.title}
                    className="w-full h-64 object-cover rounded-xl border border-slate-800"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {selectedDemoProject.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedDemoProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block mb-1">Architecture</span>
                      <span className="text-emerald-400 font-semibold">100% Mobile First</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block mb-1">Turnaround</span>
                      <span className="text-purple-400 font-semibold">3-5 Business Days</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                      <span className="text-slate-400 block mb-1">Inquiry Funnel</span>
                      <span className="text-cyan-400 font-semibold">WhatsApp + Calls</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="bg-[#0f172a] px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Want a custom website tailored specifically for your brand?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={createWhatsAppLink(`Hi Avinash, I saw your demo project "${selectedDemoProject.title}" and I want something similar for my business.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    const title = selectedDemoProject.title;
                    setSelectedDemoProject(null);
                    onSelectProjectForQuote(title);
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
