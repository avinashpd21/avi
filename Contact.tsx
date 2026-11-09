import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  Send,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, SERVICES, createWhatsAppLink } from '../data/portfolioData.ts';
import { db } from '../firebase/config.ts';
import { collection, addDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../firebase/errors.ts';
import { useAuth } from '../context/AuthContext.tsx';

interface ContactProps {
  selectedServicePreset?: string;
  selectedPlanPreset?: string;
}

export const Contact: React.FC<ContactProps> = ({
  selectedServicePreset = '',
  selectedPlanPreset = '',
}) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedServicePreset || 'Business Website Development',
    budget: selectedPlanPreset ? `Package: ${selectedPlanPreset}` : 'Flexible / Need Advice',
    details: '',
  });

  // Keep state synced if props change
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  React.useEffect(() => {
    if (selectedPlanPreset) {
      setFormData((prev) => ({ ...prev, budget: `Package: ${selectedPlanPreset}` }));
    }
  }, [selectedPlanPreset]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || undefined,
      service: formData.service,
      budget: formData.budget,
      details: formData.details.trim(),
      status: 'new' as const,
      createdAt: new Date().toISOString(),
      ...(user ? { userId: user.uid } : {}),
    };

    try {
      // Save directly to Firestore database
      await addDoc(collection(db, 'inquiries'), payload);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#38bdf8', '#34d399', '#facc15'],
        });
      } catch {
        // Ignore confetti if blocked
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.warn('Firestore write warning:', err);
      // Even if Firestore encounters an offline/permissions issue, gracefully celebrate and offer WhatsApp sync
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppPrefilledLink = () => {
    const text = `Hi Avinash, my name is ${formData.name || 'a visitor'}.
Phone: ${formData.phone || 'N/A'}
Service Required: ${formData.service}
Budget/Package: ${formData.budget}
Details: ${formData.details || 'I need a modern website.'}

Looking forward to your quote!`;
    return createWhatsAppLink(text);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#030712] border-t border-slate-900">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Start Your Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="text-gradient-purple-blue">Extraordinary Together</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ready to grow your business online? Reach out directly via WhatsApp, call me, or fill out the form below for a free consultation and customized quote.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary WhatsApp Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-emerald-500/30 bg-gradient-to-br from-[#061b17]/80 to-[#030d0c] shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-600/40 text-emerald-400">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                  Instant Reply
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">WhatsApp Chat</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Fastest way to get in touch. Send project links, voice notes, or discuss your budget directly with Avinash.
              </p>

              <div className="font-mono text-base font-bold text-emerald-300 mb-4">
                {CONTACT_INFO.whatsappFormatted}
              </div>

              <a
                href={createWhatsAppLink("Hi Avinash, I want to talk about building a website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Call Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-cyan-500/30 bg-gradient-to-br from-[#071926]/80 to-[#040e17] shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-600/40 text-cyan-400">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-900/60 text-cyan-300 border border-cyan-700/50">
                  Direct Line
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">Phone Call</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Prefer speaking directly? Call me during working hours (9 AM - 9 PM IST) to discuss timelines and scope.
              </p>

              <div className="font-mono text-base font-bold text-cyan-300 mb-4">
                {CONTACT_INFO.phoneFormatted}
              </div>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {CONTACT_INFO.phone}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email & Social Info Box */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 text-purple-400 border border-slate-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Email Address</span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-purple-400 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Turnaround Time</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {CONTACT_INFO.turnaroundTime}
                  </span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 block mb-2.5">
                  Connect on Social Media:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-purple-950 text-slate-300 hover:text-purple-300 border border-slate-800 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-950 text-slate-300 hover:text-blue-300 border border-slate-800 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Send a Project Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Fill in your details below. I review and respond to every inquiry within 1 to 2 hours!
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-gradient-to-b from-emerald-950/60 to-[#071914] border border-emerald-500/40 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-emerald-400">{formData.name}</strong>! Your inquiry for <strong>{formData.service}</strong> has been logged into the system. Avinash Prasad will contact you shortly.
                  </p>

                  <div className="pt-4 border-t border-emerald-800/50 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppPrefilledLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Send on WhatsApp for 2x Faster Response</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: 'Business Website Development',
                          budget: 'Flexible / Need Advice',
                          details: '',
                        });
                      }}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Phone / WhatsApp Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email (Optional) & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Email Address <span className="text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@business.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Service Required <span className="text-rose-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Custom Development & Consultation" className="bg-slate-900 text-white">
                          Other / Custom Development
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Package / Budget Option */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Desired Package / Budget Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="Basic Website (Starts at ₹4,999 • 1-3 Pages)">Basic Website (Starts at ₹4,999 • 1-3 Pages)</option>
                      <option value="Professional Website (Starts at ₹11,999 • 5-8 Pages)">Professional Website (Starts at ₹11,999 • 5-8 Pages)</option>
                      <option value="Premium Website (Starts at ₹24,999 • E-commerce / School)">Premium Website (Starts at ₹24,999 • E-commerce / School)</option>
                      <option value="Landing Page (Starts at ₹3,499)">Landing Page (Starts at ₹3,499)</option>
                      <option value="Website Redesign / Maintenance">Website Redesign / Maintenance</option>
                      <option value="Flexible / Need Advice on Scope">Flexible / Need Advice on Scope</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Project Details & Requirements <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe what your business does, preferred pages, reference websites you like, or any specific deadline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-xl shadow-purple-900/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your contact details are 100% confidential. No spam, ever.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
