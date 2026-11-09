import React from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  HelpCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PRICING_PLANS, createWhatsAppLink } from '../data/portfolioData.ts';
import { PricingPlan } from '../types/index.ts';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#060a14] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Transparent & Affordable Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Website Packages & <span className="text-gradient-purple-blue">Starting Prices</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-converting modern websites with upfront, competitive freelance pricing. Choose a plan or get a customized quote for your exact requirements.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Starting at ₹4,999 • No hidden charges • 40-40-20 Milestone-based payments</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                plan.recommended
                  ? 'border-purple-500/60 shadow-2xl shadow-purple-950/60 lg:-translate-y-2 bg-gradient-to-b from-[#101528] to-[#0a0e1c]'
                  : 'border-white/10 hover:border-purple-500/30'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-purple-900/50 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 min-h-[40px] leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Starting Investment:
                    </span>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {plan.deliveryTime}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-purple-300">
                      / starting price
                    </span>
                  </div>
                  {plan.priceSubtext && (
                    <p className="text-[11px] text-slate-400 mt-1">
                      {plan.priceSubtext}
                    </p>
                  )}
                </div>

                {/* Ideal For */}
                <div className="mb-6 text-xs text-slate-300 bg-purple-950/30 border border-purple-900/40 p-3 rounded-lg">
                  <strong className="text-purple-300 font-semibold block mb-0.5">Ideal For:</strong>
                  <span>{plan.idealFor}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Included In This Package:
                  </p>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-900/40'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Get Started • {plan.price}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={createWhatsAppLink(`Hi Avinash, I'm interested in the "${plan.name}" package (${plan.price}). Let's discuss details and get started!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl font-medium text-xs text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/80 border border-emerald-700/40 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask on WhatsApp ({plan.name})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scope Assurance Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto glass-card p-6 rounded-2xl border border-white/10">
          <HelpCircle className="w-7 h-7 text-cyan-400 mx-auto mb-2" />
          <h4 className="text-base font-bold text-white mb-1">
            Need something custom or want to negotiate scope?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
            I customize packages based on your exact pages, features, and timeline so you never pay for things you don't need. Domain & hosting can be purchased directly by you or set up by me.
          </p>
          <a
            href={createWhatsAppLink("Hi Avinash, I want a custom quote for my website project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
          >
            <span>Discuss Custom Scope on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
