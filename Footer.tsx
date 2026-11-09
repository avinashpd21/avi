import React from 'react';
import {
  Code2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Heart,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppLink } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02050e] border-t border-slate-900 pt-16 pb-28 md:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0a0d17] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white">Avinash Prasad</span>
                <span className="text-xs font-mono text-purple-400 block -mt-0.5">
                  Freelance Website Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              I build modern, high-converting websites for businesses, startups, shop owners, and educational institutions. Helping you establish a credible, growth-focused digital presence.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-purple-950 text-slate-400 hover:text-purple-300 border border-slate-800 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-950 text-slate-400 hover:text-blue-300 border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects & Demos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#why-choose-me" className="hover:text-cyan-400 transition-colors">
                  Why Choose Me
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings & Packages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Website Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Portfolio Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  E-commerce Stores
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  School & College Portals
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a
                  href={createWhatsAppLink("Hi Avinash, let's connect!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {CONTACT_INFO.whatsappFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Pan-India & Global Remote</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <strong className="text-slate-400 font-semibold">Avinash Prasad</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Client Growth
            </span>
            <span>•</span>
            <span className="text-cyan-400 font-mono">Fast & 100% Responsive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
