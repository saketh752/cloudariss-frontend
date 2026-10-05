import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Send,
  Phone,
  ArrowRight,
  Sparkles,
  Building2,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';
import { Link } from 'react-router-dom';

interface WhatsAppContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

const TOPIC_PRESETS = [
  {
    id: 'general',
    label: 'General Inquiry',
    message: 'Hi Cloudariss team, I am interested in learning more about your technology programs. Could you please share the upcoming batch schedule and details?',
  },
  {
    id: 'crpc',
    label: 'CRPC Track (Cloud & DevOps)',
    message: 'Hi Cloudariss team, I would like to enroll / inquire about the 12-week Cloud & Data Career Accelerator (CRPC). Please share syllabus and fee details.',
  },
  {
    id: 'daap',
    label: 'DAAP Track (Data & AI)',
    message: 'Hi Cloudariss team, I want to inquire about the Data Analyst Accelerator Program (DAAP) covering SQL, Power BI, and Agentic AI. Please share details.',
  },
  {
    id: 'counseling',
    label: '1-on-1 Career Counseling',
    message: 'Hi Cloudariss team, I would like to schedule a quick 1-on-1 career counseling call with your technical mentors.',
  },
];

export const WhatsAppContactModal: React.FC<WhatsAppContactModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'general',
}) => {
  const initialPreset =
    TOPIC_PRESETS.find((t) => t.id === defaultTopic) || TOPIC_PRESETS[0];

  const [selectedTopic, setSelectedTopic] = useState<string>(initialPreset.id);
  const [customMessage, setCustomMessage] = useState<string>(initialPreset.message);

  if (!isOpen) return null;

  const handleSelectTopic = (preset: typeof TOPIC_PRESETS[0]) => {
    setSelectedTopic(preset.id);
    setCustomMessage(preset.message);
  };

  const handleSendWhatsApp = () => {
    const textToSend = customMessage.trim() || initialPreset.message;
    const whatsappUrl = `https://wa.me/916302680457?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      {/* Backdrop click area */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-b from-[#081F54] via-[#061540] to-[#030E2B] border border-[#19BCE8]/35 shadow-[0_24px_64px_rgba(2,9,30,0.9)] overflow-hidden text-white z-10 flex flex-col max-h-[90vh]">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#05143A]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3
                  id="whatsapp-modal-title"
                  className="text-base sm:text-lg font-extrabold text-white font-heading"
                >
                  Direct Admissions Desk
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Official WhatsApp: {BRAND_DATA.whatsappPhone}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Preset Chips */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#19BCE8]" />
              <span>Select topic or write below:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOPIC_PRESETS.map((preset) => {
                const isSelected = selectedTopic === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectTopic(preset)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#0878E8]/30 border-[#19BCE8] text-white shadow-xs font-bold'
                        : 'bg-[#05143A]/90 border-white/10 text-slate-300 hover:text-white hover:border-[#19BCE8]/40'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Editable Message Text Area */}
          <div className="space-y-1.5">
            <label
              htmlFor="whatsapp-custom-message"
              className="text-xs font-bold text-slate-200 block"
            >
              Your Message to Admissions:
            </label>
            <div className="relative">
              <textarea
                id="whatsapp-custom-message"
                rows={4}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your question or custom message here..."
                className="w-full rounded-2xl bg-[#030C24]/90 border border-[#19BCE8]/30 p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#19BCE8] focus:ring-2 focus:ring-[#19BCE8]/20 transition-all resize-none font-normal leading-relaxed"
              />
              <span className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-400">
                {customMessage.length} chars
              </span>
            </div>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-3.5 rounded-2xl bg-[#05143A]/90 border border-white/10 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Building2 className="w-4 h-4 text-[#19BCE8] shrink-0" />
              <span>Visakhapatnam HQ · Rushikonda IT Corridor</span>
            </div>
            <a
              href={BRAND_DATA.phone1Tel}
              className="inline-flex items-center gap-1 font-bold text-[#19BCE8] hover:underline shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BRAND_DATA.phone1}</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-[#040E2A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            to="/contact"
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Or open complete Contact Form</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#2BF576] hover:to-[#25D366] text-slate-950 font-extrabold text-sm shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all cursor-pointer active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
