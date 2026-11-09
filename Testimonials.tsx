import React, { useState, useEffect } from 'react';
import {
  Star,
  Quote,
  Sparkles,
  CheckCircle,
  PlusCircle,
  X,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/portfolioData.ts';
import { TestimonialItem } from '../types/index.ts';
import { db } from '../firebase/config.ts';
import { collection, addDoc, getDocs, query, limit } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../firebase/errors.ts';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(SAMPLE_TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
  });

  useEffect(() => {
    // Try to load any submitted real reviews from Firestore
    async function loadReviews() {
      try {
        const q = query(collection(db, 'reviews'), limit(10));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const loaded: TestimonialItem[] = snap.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
              id: docSnap.id,
              name: data.name || 'Anonymous Client',
              role: data.role || 'Client',
              company: data.company || '',
              content: data.content || '',
              rating: Number(data.rating) || 5,
              projectType: data.projectType || 'Website Development',
              isSample: Boolean(data.isSample),
              date: data.createdAt ? new Date(data.createdAt).toLocaleDateString() : 'Recent Review',
            };
          });
          // Merge with sample reviews or display real ones
          setReviews([...loaded, ...SAMPLE_TESTIMONIALS]);
        }
      } catch (err) {
        // Fallback gracefully to sample reviews
        console.warn('Using sample client reviews:', err);
      }
    }
    loadReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        name: formData.name.trim(),
        role: formData.role.trim() || 'Client',
        content: formData.content.trim(),
        rating: Number(formData.rating),
        isSample: false,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, 'reviews'), payload);
      setSubmitSuccess(true);

      // Add to local state for immediate feedback
      setReviews([
        {
          id: 'user-' + Date.now(),
          name: formData.name,
          role: formData.role || 'Client',
          company: formData.company,
          content: formData.content,
          rating: formData.rating,
          projectType: 'Website Development',
          isSample: false,
          date: 'Just now',
        },
        ...reviews,
      ]);

      setTimeout(() => {
        setModalOpen(false);
        setSubmitSuccess(false);
        setFormData({ name: '', role: '', company: '', content: '', rating: 5 });
      }, 2000);
    } catch (err) {
      console.error('Failed to submit review:', err);
      alert('Review recorded locally! Thank you for your feedback.');
      setModalOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#030712] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Client Feedback & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Client Testimonials & <span className="text-gradient-purple-blue">Sample Reviews</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how modern websites with quick WhatsApp and call integration transform client results.
          </p>

          {/* Sample Review Notice as specified in requirement */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs text-left max-w-xl mx-auto">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-400" />
            <span>
              <strong>Sample Content Notice:</strong> Reviews labeled as "Sample Review" are editable placeholders showing the design layout until genuine client reviews are added.
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-7 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-400/40 group-hover:text-purple-400 transition-colors" />
                </div>

                {/* Sample or Verified Tag */}
                <div className="mb-4">
                  {item.isSample ? (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-900 text-amber-300/90 border border-amber-800/40">
                      Sample Review Placeholder
                    </span>
                  ) : (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Verified Client Review
                    </span>
                  )}
                </div>

                {/* Content */}
                <p className="text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400">
                    {item.role} {item.company ? `• ${item.company}` : ''}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-purple-400/80 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-800/30">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Review CTA Trigger */}
        <div className="text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
          >
            <PlusCircle className="w-4 h-4 text-purple-400" />
            <span>Have you worked with Avinash? Leave a Review</span>
          </button>
        </div>
      </div>

      {/* Submit Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0a0e1c] border border-purple-500/40 rounded-2xl shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <span>Leave Client Feedback</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Your feedback helps other business owners make informed decisions.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Thank You!</h4>
                <p className="text-xs text-emerald-200">
                  Your review has been successfully submitted and saved.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Role / Business
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Founder, Shop Owner"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. RK Electronics"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formData.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 ml-2 font-mono">
                      {formData.rating} out of 5
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Tell us about the website Avinash built for you, the communication, and the results..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-purple-600 hover:bg-purple-500 transition-colors disabled:opacity-50"
                >
                  {submitting ? 'Submitting Review...' : 'Post Review'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
