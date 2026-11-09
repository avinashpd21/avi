import React from 'react';
import {
  Sparkles,
  Smartphone,
  BadgePercent,
  MessageSquare,
  Wrench,
  Cpu,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { WHY_CHOOSE_ME, CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';

export const WhyChooseMe: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  const comparison = [
    {
      feature: 'Delivery Turnaround',
      avinash: 'Fast 3 - 7 Days (AI-accelerated workflow)',
      others: '3 - 8 Weeks of slow meetings & delays',
    },
    {
      feature: 'Communication',
      avinash: 'Direct WhatsApp & Phone calls with Avinash',
      others: 'Slow email tickets, account managers',
    },
    {
      feature: 'Pricing & Value',
      avinash: 'Affordable, transparent, zero hidden fees',
      others: 'Inflated agency overhead & retainers',
    },
    {
      feature: 'Mobile Ergonomics',
      avinash: '100% Tested across iOS & Android devices',
      others: 'Often broken or sluggish on smartphones',
    },
    {
      feature: 'Post-Launch Support',
      avinash: 'Free 30-day bug warranty & guidance',
      others: 'Charges exorbitant fees for tiny fixes',
    },
  ];

  return (
    <section id="why-choose-me" className="py-24 relative bg-[#030712] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>The Avinash Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Why Businesses Choose <span className="text-gradient-purple-blue">Avinash Prasad</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I combine modern design aesthetics, mobile perfection, and rapid AI development to give you a powerful website that drives genuine business revenue.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WHY_CHOOSE_ME.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getWhyIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Standard on every project</span>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Working With Avinash vs Typical Alternatives
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Why my freelance clients love the speed, transparency, and results.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-mono uppercase text-slate-400">
                  <th className="py-4 px-4">Feature / Deliverable</th>
                  <th className="py-4 px-4 text-purple-400 bg-purple-950/30 rounded-t-lg">
                    Avinash Prasad (Freelance)
                  </th>
                  <th className="py-4 px-4 text-slate-500">Traditional Agencies / Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-emerald-300 bg-purple-950/20 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.avinash}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500/80 flex-shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400 block">Ready to discuss your project?</span>
              <span className="text-sm font-bold text-white">Direct Line: +91 82290 65906</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={createWhatsAppLink("Hi Avinash, I'd like to get started on my new website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
