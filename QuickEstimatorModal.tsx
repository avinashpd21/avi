import React, { useState } from 'react';
import {
  X,
  Calculator,
  Check,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles,
  Layers,
} from 'lucide-react';
import { createWhatsAppLink } from '../data/portfolioData.ts';

interface QuickEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimateToForm: (service: string, summary: string) => void;
}

export const QuickEstimatorModal: React.FC<QuickEstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimateToForm,
}) => {
  const [siteType, setSiteType] = useState('Business Website');
  const [pageCount, setPageCount] = useState('4 - 7 Pages');
  const [timeline, setTimeline] = useState('Standard (5-7 Days)');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'WhatsApp Chat Trigger',
    'Mobile Responsive Design',
    'Contact Form with Database',
  ]);

  if (!isOpen) return null;

  const siteTypes = [
    'Business Website',
    'Portfolio Website',
    'E-commerce Store',
    'Landing Page',
    'School / College Portal',
    'Website Redesign',
  ];

  const pageOptions = ['1 - 3 Pages', '4 - 7 Pages', '8 - 15 Pages', '15+ Custom Pages'];

  const timelineOptions = ['Fast Rush (3-4 Days)', 'Standard (5-7 Days)', 'Flexible / Planned'];

  const availableFeatures = [
    'WhatsApp Chat Trigger',
    'Mobile Responsive Design',
    'Contact Form with Database',
    'Google SEO Setup',
    'Payment Gateway (UPI/Cards)',
    'Admin Management Panel',
    'Google Maps Location',
    'Social Media Feed',
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const estimateSummary = `Site Type: ${siteType}
Pages: ${pageCount}
Timeline: ${timeline}
Features: ${selectedFeatures.join(', ')}`;

  const handleSendWhatsApp = () => {
    const text = `Hi Avinash, I used your Website Cost Estimator with the following scope:
- Type: ${siteType}
- Estimated Pages: ${pageCount}
- Desired Timeline: ${timeline}
- Selected Features: ${selectedFeatures.join(', ')}

Please give me a customized quote and timeline estimate!`;
    window.open(createWhatsAppLink(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090d1c] border border-cyan-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-700/50">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Interactive Website Cost Estimator</h3>
            <p className="text-xs text-slate-400">
              Select your specifications to calculate scope and get an instant custom quote.
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-6 text-left">
          {/* Step 1: Website Type */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              1. What type of website do you need?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {siteTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSiteType(type)}
                  className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                    siteType === type
                      ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-950'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Page Count */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              2. How many pages or sections?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {pageOptions.map((pages) => (
                <button
                  type="button"
                  key={pages}
                  onClick={() => setPageCount(pages)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                    pageCount === pages
                      ? 'bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-950'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {pages}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Required Features */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              3. Which features do you require? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableFeatures.map((feat) => {
                const isSelected = selectedFeatures.includes(feat);
                return (
                  <button
                    type="button"
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left flex items-center justify-between border transition-all ${
                      isSelected
                        ? 'bg-purple-950/70 border-purple-500/50 text-purple-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    <span>{feat}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected
                          ? 'bg-purple-500 border-purple-400 text-white'
                          : 'border-slate-700'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scope Summary Preview */}
          {(() => {
            let estimatedRange = '₹4,999 – ₹7,999';
            if (siteType === 'Portfolio Website') {
              estimatedRange = '₹3,999 – ₹6,999';
            } else if (siteType === 'Landing Page') {
              estimatedRange = '₹3,499 – ₹5,499';
            } else if (siteType === 'Business Website') {
              estimatedRange = pageCount === '1 - 3 Pages' ? '₹4,999 – ₹7,999' : '₹11,999 – ₹16,999';
            } else if (siteType === 'E-commerce Store' || siteType === 'School / College Portal') {
              estimatedRange = '₹24,999 – ₹39,999+';
            } else if (siteType === 'Website Redesign') {
              estimatedRange = '₹5,999 – ₹11,999';
            }
            return (
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-400">Estimated Scope:</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    Est. Range: {estimatedRange}
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-mono space-y-1">
                  <div>• {siteType} with {pageCount}</div>
                  <div>• {selectedFeatures.length} Key Features selected</div>
                  <div>• Direct Delivery by Avinash Prasad with Free Support</div>
                </div>
              </div>
            );
          })()}

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleSendWhatsApp}
              className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Estimate on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onApplyEstimateToForm(siteType, estimateSummary);
                onClose();
              }}
              className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-purple-600 hover:bg-purple-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-950"
            >
              <span>Use in Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
