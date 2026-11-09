import React, { useState } from 'react';
import {
  ChevronDown,
  Sparkles,
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  ShieldAlert,
} from 'lucide-react';
import { FAQS, CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';
import { FAQItem } from '../types/index.ts';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-pricing');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pricing', 'Delivery', 'Domain & Hosting', 'Maintenance', 'Payment'];

  const filteredFaqs = FAQS.filter((faq: FAQItem) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#060a14] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-purple-blue">Questions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about pricing, delivery timeline, domain & hosting, maintenance, and payment terms.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. hosting, price, days)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FAQItem) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 glass-card rounded-2xl border border-slate-800 text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Ask Avinash directly on WhatsApp!
            </div>
          )}
        </div>

        {/* Quick Help Footer Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white mb-1">Still have a question?</h4>
            <p className="text-xs text-slate-300">
              Get an instant personal response directly from Avinash on WhatsApp or phone.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call: {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={createWhatsAppLink("Hi Avinash, I have a quick question about website development.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
