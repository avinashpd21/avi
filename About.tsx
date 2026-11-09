import React from 'react';
import {
  Code,
  Sparkles,
  Zap,
  TrendingUp,
  Bot,
  Laptop,
  CheckCircle,
  PhoneCall,
  Clock,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Strategy & Goal Discovery',
      desc: 'We map out your business goals, target audience, brand identity, and key conversion channels (WhatsApp, phone calls, contact forms).',
    },
    {
      num: '02',
      title: 'Modern UI/UX Prototyping',
      desc: 'Crafting visually arresting, clean dark/light interfaces that highlight your products, credentials, and testimonials with maximum credibility.',
    },
    {
      num: '03',
      title: 'Clean Code & AI-Accelerated Build',
      desc: 'Combining semantic HTML5, modern CSS3, responsive frameworks, and AI workflows (ChatGPT & Gemini) to build modular, lightweight code twice as fast.',
    },
    {
      num: '04',
      title: 'Speed Optimization & Launch',
      desc: 'Testing across mobile devices, setting up domain and SSL, optimizing Google PageSpeed, and providing free 30-day post-launch support.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>About The Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Passionate About Crafting Websites That{' '}
            <span className="text-gradient-purple-blue">Actually Grow Businesses</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I am <strong className="text-white font-semibold">Avinash Prasad</strong>, a dedicated freelance website developer committed to turning ideas into modern, high-performing digital platforms.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Bio & Story Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5 shadow-xl">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Laptop className="w-6 h-6 text-cyan-400" />
                <span>Hello, I'm Avinash Prasad</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                In today's fast-paced digital world, your website is often the first impression a potential client has of your business. A slow, outdated, or confusing website costs you sales every single day.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My passion is bridging that gap. Whether you are a local shop owner expanding into online sales, a startup launching a game-changing product, an educational institution welcoming new students, or a professional building a personal brand, I design and build websites that look stunning and convert visitors into paying clients.
              </p>

              {/* AI & Modern Tech highlight */}
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-purple-900/60 text-purple-300 flex-shrink-0">
                  <Bot className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Modern Tech & AI-Powered Development Workflow
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    By fusing battle-tested web standards (HTML5, CSS3, JavaScript, Bootstrap, WordPress) with cutting-edge AI tools like <span className="text-emerald-400 font-semibold">ChatGPT</span> and <span className="text-purple-300 font-semibold">Gemini</span>, I deliver high-quality, bug-free, and SEO-optimized websites in half the conventional agency time.
                  </p>
                </div>
              </div>

              {/* Personal Guarantee & Contact Badges */}
              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Directly: {CONTACT_INFO.phone}</span>
                </a>
                <a
                  href={createWhatsAppLink("Hi Avinash, let's discuss my website project requirements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-xs font-semibold text-emerald-300 border border-emerald-700/50 flex items-center gap-2 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: {CONTACT_INFO.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Key Stats & Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="p-2.5 w-fit rounded-lg bg-purple-950/80 text-purple-400 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-black text-white mb-1">3 - 7 Days</h4>
              <p className="text-xs text-slate-400 font-medium">Fast Turnaround Time</p>
              <p className="text-xs text-slate-500 mt-2">
                Rapid delivery so you can start getting leads without endless waiting.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="p-2.5 w-fit rounded-lg bg-cyan-950/80 text-cyan-400 mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-black text-white mb-1">100%</h4>
              <p className="text-xs text-slate-400 font-medium">Conversion-Focused</p>
              <p className="text-xs text-slate-500 mt-2">
                Engineered with high-visibility WhatsApp and direct call triggers.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="p-2.5 w-fit rounded-lg bg-emerald-950/80 text-emerald-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-black text-white mb-1">30 Days</h4>
              <p className="text-xs text-slate-400 font-medium">Free Post-Launch Support</p>
              <p className="text-xs text-slate-500 mt-2">
                Complete peace of mind. Any bug or adjustment is handled promptly.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="p-2.5 w-fit rounded-lg bg-amber-950/80 text-amber-400 mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-black text-white mb-1">Direct</h4>
              <p className="text-xs text-slate-400 font-medium">No Middlemen</p>
              <p className="text-xs text-slate-500 mt-2">
                Speak directly with Avinash. Instant communication, zero agency bureaucracy.
              </p>
            </div>
          </div>
        </div>

        {/* Development Workflow / Execution Steps */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              My 4-Step Development Process
            </h3>
            <p className="text-sm text-slate-400">
              Structured, transparent, and seamless from kickoff to celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all group relative"
              >
                <div className="text-3xl font-extrabold text-purple-500/30 font-mono group-hover:text-purple-400 transition-colors mb-3">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
