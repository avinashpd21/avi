import React from 'react';
import {
  Briefcase,
  UserCheck,
  ShoppingBag,
  Zap,
  GraduationCap,
  RefreshCw,
  Check,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SERVICES, createWhatsAppLink } from '../data/portfolioData.ts';
import { ServiceItem } from '../types/index.ts';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-purple-400" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-pink-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-blue-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#060a14] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Impact Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Services Designed To <span className="text-gradient-purple-blue">Convert Visitors Into Clients</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From single-page marketing landing pages to full-scale educational portals and e-commerce stores, I deliver polished, conversion-ready web solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 relative group"
            >
              {service.badge && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-900/40">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/70 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-purple-400 mb-3">{service.category}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </p>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-purple-600/90 hover:bg-purple-600 flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-purple-900/30"
                >
                  <span>Get Quote for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={createWhatsAppLink(`Hi Avinash, I want to discuss getting a quote for: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl font-medium text-xs text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
