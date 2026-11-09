import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Code2,
  Sparkles,
  LogIn,
  LogOut,
  ShieldCheck,
  Calculator,
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';
import { useAuth } from '../context/AuthContext.tsx';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin, login, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Why Me', href: '#why-choose-me' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0d17] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
                <span className="text-white">Avinash</span>
                <span className="text-purple-400">Prasad</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">
                Website Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Quick Estimator Button */}
            <button
              onClick={onOpenEstimator}
              className="px-3 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-700/40 rounded-lg flex items-center gap-1.5 transition-all hover:scale-[1.02]"
              title="Estimate your website cost"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Cost Estimator</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
              title={`Call Avinash at ${CONTACT_INFO.phoneFormatted}`}
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="hidden xl:inline">Call: {CONTACT_INFO.phone}</span>
            </a>

            {/* Direct WhatsApp CTA */}
            <a
              href={createWhatsAppLink("Hi Avinash, I'm interested in building a website for my business. Let's discuss details!")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 rounded-lg shadow-md shadow-emerald-900/30 flex items-center gap-1.5 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Admin or Google Sign-In */}
            {user ? (
              <div className="flex items-center gap-2 pl-1 border-l border-slate-800">
                {isAdmin && (
                  <button
                    onClick={onOpenAdmin}
                    className="px-2.5 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/70 border border-purple-500/50 rounded-lg flex items-center gap-1 shadow-sm hover:bg-purple-900"
                    title="View Received Client Inquiries"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Leads Hub</span>
                  </button>
                )}
                <button
                  onClick={logout}
                  className="p-2 text-slate-400 hover:text-rose-400 bg-slate-900 border border-slate-800 rounded-lg transition-colors"
                  title={`Sign out (${user.email})`}
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="p-2 text-slate-400 hover:text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs flex items-center gap-1"
                title="Google Sign-in"
              >
                <LogIn className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={createWhatsAppLink("Hi Avinash, I'd like to get a quote for a website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600/90 text-white rounded-lg shadow-sm"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d18]/98 backdrop-blur-2xl border-b border-purple-900/30 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-purple-950/40 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 rounded-xl flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Instant Website Cost Estimator</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="py-2.5 px-3 bg-slate-900 border border-slate-700/80 rounded-xl text-center text-xs font-bold text-slate-100 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
              <a
                href={createWhatsAppLink("Hi Avinash, I want to discuss a new website project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-600 rounded-xl text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {isAdmin && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full mt-1 py-2 text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/50 rounded-xl flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Leads Hub ({user?.email})</span>
              </button>
            )}

            {!user ? (
              <button
                onClick={login}
                className="w-full py-2 text-xs text-slate-400 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Google Sign In</span>
              </button>
            ) : (
              <button
                onClick={logout}
                className="w-full py-2 text-xs text-rose-400 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out ({user.email})</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
