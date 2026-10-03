import React, { useEffect } from 'react';
import { X, Play, Shield, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';
import { Link } from 'react-router-dom';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Cloudariss Learning Walkthrough Video"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-brand-dark-section border border-brand-blue/30 shadow-2xl overflow-hidden text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <h3 className="font-heading font-bold text-sm sm:text-base text-white">
              Cloudariss Learning Experience Walkthrough
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close video preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Player Preview */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-[#06143D] to-slate-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,120,232,0.25)_0%,transparent_70%)] pointer-events-none" />

          {/* Background Reference Visual with subtle opacity */}
          <img
            src="/brand/hero-career-student-clean.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity filter blur-[1px]"
          />

          <div className="relative z-10 max-w-lg space-y-4">
            {/* Play Button Badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/40 border-2 border-white/30 transform hover:scale-105 transition-all">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-white" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-[#19BCE8] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                Program Walkthrough • 2:45 Min
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Inside the 12-Week Cloud & Data Accelerators
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Experience our live interactive sessions, hands-on lab infrastructure, and forward-deployed mentorship previews.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Highlights & Actions */}
        <div className="p-6 bg-white/5 border-t border-white/10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>100% Live Instructor-Led</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Documented GitHub Capstones</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Vizag IT Corporate Exposure</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Admissions</span>
            </a>
            <Link
              to="/courses"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white text-xs sm:text-sm font-bold shadow transition-all"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
