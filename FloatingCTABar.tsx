import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';

export const FloatingCTABar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 z-40 p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 shadow-xl backdrop-blur-md transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#070b16]/95 backdrop-blur-xl border-t border-purple-900/40 p-3 px-4 flex items-center justify-between gap-2.5 shadow-2xl">
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>Call: {CONTACT_INFO.phone}</span>
        </a>

        <a
          href={createWhatsAppLink("Hi Avinash, I want to discuss a new website project.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/60 active:scale-95 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button in Bottom-Right */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={createWhatsAppLink("Hi Avinash, I'm interested in building a website for my business.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-2xl shadow-emerald-950/60 border border-emerald-400/30 transition-all hover:scale-105"
        >
          <div className="relative">
            <span className="w-2.5 h-2.5 rounded-full bg-white absolute -top-0.5 -right-0.5 animate-ping" />
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          </div>
          <div>
            <div className="text-[10px] text-emerald-100 uppercase font-mono tracking-wider">
              Avinash is Online
            </div>
            <div className="text-sm font-extrabold">Chat on WhatsApp</div>
          </div>
        </a>
      </div>
    </>
  );
};
