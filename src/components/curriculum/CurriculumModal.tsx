import React, { useEffect } from 'react';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Shield,
  Sparkles,
} from 'lucide-react';
import { useCurriculumModal, CURRICULUM_DATA } from './CurriculumContext';
import { Button } from '@/components/ui/Button';

export const CurriculumModal: React.FC = () => {
  const { isOpen, activeProgram, closeCurriculum } = useCurriculumModal();

  // Escape key listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCurriculum();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeCurriculum]);

  if (!isOpen || !activeProgram) return null;

  const program = CURRICULUM_DATA[activeProgram];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="curriculum-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={closeCurriculum}
        className="fixed inset-0 bg-brand-navy/85 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-6xl max-h-[96vh] bg-white rounded-2xl shadow-premium-lg border border-brand-border/80 flex flex-col z-10 overflow-hidden animate-scaleUp">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-brand-border/80 bg-gradient-to-r from-brand-surface-light via-white to-brand-surface-blue/20">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 border border-brand-blue/20">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-blue text-white uppercase tracking-wider">
                  {program.code}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-brand-blue" />
                  Official Curriculum Schedule
                </span>
              </div>
              <h2
                id="curriculum-modal-title"
                className="text-base sm:text-lg font-bold text-brand-navy truncate mt-0.5 font-heading"
              >
                {program.name}
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
            <a
              href={program.pdfUrl}
              download={program.fileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-subtle transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={program.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Open PDF in a new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden md:inline">Open Full Tab</span>
            </a>

            <button
              onClick={closeCurriculum}
              aria-label="Close curriculum viewer"
              className="p-2 rounded-lg text-slate-500 hover:text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="relative flex-1 min-h-[420px] sm:min-h-[550px] lg:min-h-[640px] bg-slate-100/80 overflow-hidden">
          <iframe
            src={`${program.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title={`${program.name} Curriculum Document`}
            className="w-full h-full min-h-[420px] sm:min-h-[550px] lg:min-h-[640px] border-0"
          />

          {/* Fallback & Helper Notice on Mobile or Slow Render */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-brand-border/80 px-4 py-2 rounded-full shadow-subtle flex items-center gap-2 text-xs text-slate-600 pointer-events-auto">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Having trouble viewing on mobile?</span>
            <a
              href={program.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-blue hover:underline"
            >
              Tap to Open Directly
            </a>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-brand-surface-light border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-brand-navy">{program.badge}</span>
            <span>•</span>
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Live Instructor-Led • Project-Driven</span>
            <Button
              onClick={closeCurriculum}
              variant="outline"
              size="sm"
              className="py-1 px-3 text-xs"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

