import React, { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Sparkles,
  Phone,
  MessageCircle,
  CheckCircle2,
  Zap,
  Terminal,
  Layers,
  Cpu,
  Flame,
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [activeTab, setActiveTab] = useState<'developer' | 'stack' | 'metrics'>('developer');

  return (
    <section className="relative min-h-[92vh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Triggers */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Developer availability pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Avinash Prasad • Available for New Projects</span>
              <span className="text-purple-400/60">•</span>
              <span className="text-cyan-300 font-mono">Fast 3-7 Days</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              I Build{' '}
              <span className="text-gradient-purple-blue">Modern Websites</span>
              <br />
              That Grow Your Business.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              I help businesses, shop owners, startups, and institutions establish their online presence with{' '}
              <strong className="text-white font-semibold">modern, responsive, and professional websites</strong> that convert visitors into paying clients.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Hire Me CTA */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-600/25 flex items-center justify-center gap-2 text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Hire Me Today</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View My Work */}
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-purple-500/50 flex items-center justify-center gap-2 text-base transition-all duration-200 hover:scale-[1.02]"
              >
                <span>View My Work</span>
              </a>

              {/* Instant WhatsApp Direct Ping */}
              <a
                href={createWhatsAppLink("Hi Avinash, I'm looking for a professional website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-600/40 flex items-center justify-center gap-2 text-sm transition-all"
                title="Chat on WhatsApp (9800480782)"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
              </a>
            </div>

            {/* Trust points bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Mobile Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">95+ Speed Score</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">AI-Assisted Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Free 30-Day Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Visual Elements & Code Terminal */}
          <div className="lg:col-span-5 relative">
            {/* Glow backdrop behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-blue-600/40 to-cyan-400/30 rounded-2xl blur-xl opacity-75" />

            {/* Terminal Window Card */}
            <div className="relative glass-card rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden text-left">
              {/* Window Header */}
              <div className="bg-[#0b101e]/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">avinash-workspace</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40">
                    TypeScript • v5.4
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center bg-[#070b14] border-b border-slate-800/80 px-2 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('developer')}
                  className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'developer'
                      ? 'border-purple-500 text-purple-300 bg-purple-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>developer.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'stack'
                      ? 'border-purple-500 text-purple-300 bg-purple-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>techStack.json</span>
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-2 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'metrics'
                      ? 'border-purple-500 text-purple-300 bg-purple-950/20'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>deliverables.log</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[260px] bg-[#070a13]/95">
                {activeTab === 'developer' && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">// Freelance Website Developer Profile</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">'{CONTACT_INFO.name}'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">'Freelance Website Developer'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">directCall:</span>{' '}
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-amber-300 hover:underline">
                        '{CONTACT_INFO.phone}'
                      </a>
                      ,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">whatsapp:</span>{' '}
                      <a
                        href={createWhatsAppLink("Hi Avinash, let's talk about website development.")}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-400 hover:underline"
                      >
                        '{CONTACT_INFO.whatsapp}'
                      </a>
                      ,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">email:</span>{' '}
                      <span className="text-indigo-300">'{CONTACT_INFO.email}'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">guarantee:</span>{' '}
                      <span className="text-emerald-300">'High Conversion & Responsive'</span>,
                    </p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-cyan-400">
                      developer.<span className="text-yellow-300">buildWebsite</span>(&#123;{' '}
                      <span className="text-purple-300">turnaround</span>: <span className="text-emerald-300">'3-7 days'</span> &#125;);
                    </p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">// Core Skills & Acceleration Stack</p>
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-cyan-300">"frontend"</span>: [
                      <span className="text-amber-300">"HTML5"</span>,{' '}
                      <span className="text-blue-300">"CSS3"</span>,{' '}
                      <span className="text-yellow-300">"JavaScript"</span>,{' '}
                      <span className="text-purple-300">"Bootstrap"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">"cms"</span>: [
                      <span className="text-sky-300">"WordPress"</span>,{' '}
                      <span className="text-emerald-300">"WooCommerce"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">"aiWorkflow"</span>: [
                      <span className="text-emerald-400">"ChatGPT"</span>,{' '}
                      <span className="text-purple-400">"Gemini"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-300">"standard"</span>:{' '}
                      <span className="text-emerald-300">"100% Mobile Responsive & Fast"</span>
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <p className="text-slate-500">// Client Performance Benchmarks</p>
                    <p className="text-emerald-400">✔ Google Lighthouse Mobile: 98/100</p>
                    <p className="text-emerald-400">✔ Fast First Contentful Paint: &lt; 0.8s</p>
                    <p className="text-emerald-400">✔ Cross-browser: Chrome, Safari, Edge, Firefox</p>
                    <p className="text-emerald-400">✔ Lead Generation: WhatsApp + Direct Call + Forms</p>
                    <p className="text-cyan-300">🚀 Ready to deploy your brand online.</p>
                  </div>
                )}
              </div>

              {/* Terminal Footer Quick Bar */}
              <div className="bg-[#0b101e] px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Need a custom quote?
                </span>
                <button
                  onClick={onOpenEstimator}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Quick Estimator</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
