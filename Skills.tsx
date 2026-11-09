import React, { useState } from 'react';
import {
  Code,
  Palette,
  FileCode,
  Smartphone,
  Layers,
  Globe,
  Bot,
  Sparkles,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData.ts';
import { SkillItem } from '../types/index.ts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core', 'Frontend', 'CMS & Styling', 'AI & Acceleration'];

  const getSkillIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6" style={{ color }} />;
      case 'Palette':
        return <Palette className="w-6 h-6" style={{ color }} />;
      case 'FileCode':
        return <FileCode className="w-6 h-6" style={{ color }} />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" style={{ color }} />;
      case 'Layers':
        return <Layers className="w-6 h-6" style={{ color }} />;
      case 'Globe':
        return <Globe className="w-6 h-6" style={{ color }} />;
      case 'Bot':
        return <Bot className="w-6 h-6" style={{ color }} />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" style={{ color }} />;
      default:
        return <Cpu className="w-6 h-6" style={{ color }} />;
    }
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#060a14] border-t border-slate-900">
      {/* Glow elements */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-purple-blue">Modern Technologies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Combining foundational web standards with responsive frameworks and cutting-edge AI acceleration to deliver world-class digital experiences.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.iconName, skill.accentColor)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-semibold text-purple-400 mb-3">{skill.level}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">Fast & Clean</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI Stack Callout Banner */}
        <div className="mt-14 glass-card p-6 sm:p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-blue-950/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] flex-shrink-0">
              <div className="w-full h-full bg-[#0a0d18] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                The Power of AI-Assisted Web Engineering
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                By leveraging ChatGPT and Gemini during architecture planning, code generation, and testing, I eliminate routine bottlenecks and pass massive time & cost savings directly to you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full md:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 text-center transition-colors shadow-md"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
