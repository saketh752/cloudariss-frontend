import React from 'react';
import {
  Phone,
  MessageCircle,
  Linkedin,
  Instagram,
  MapPin,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';

/* ========================================================================= */
/* CONTACT EDITORIAL BLOCK — OPEN EDITORIAL CONTACT PRESENTATION             */
/* Open layout with typography, whitespace, and hairline dividers            */
/* Zero dashboard card containers, zero nested box styling                   */
/* ========================================================================= */

interface ContactEditorialBlockProps {
  /** Optional layout mode: 'footer' for 2-column wide layout in footer, 'page' for dedicated page left column */
  mode?: 'footer' | 'page';
}

export const ContactEditorialBlock: React.FC<ContactEditorialBlockProps> = ({
  mode = 'footer',
}) => {
  return (
    <div className="space-y-4 sm:space-y-8 text-white">
      {/* Editorial Header */}
      <div className="space-y-1 sm:space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
          <span>Direct Admissions &amp; Campus Desk</span>
        </div>
        <h3 className="text-lg sm:text-2xl lg:text-3xl font-black font-heading text-white tracking-tight leading-tight">
          Have questions about our programs?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#19BCE8] to-white">
            Let's talk.
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal max-w-xl">
          Connect directly with practicing mentors, curriculum advisors, and admissions coordinators for cohort schedules and guidance.
        </p>
      </div>

      {/* Primary Contact Actions: Phone & WhatsApp (Compact 2-Column Responsive Layout) */}
      <div className="grid grid-cols-2 divide-x divide-white/10 pt-1 border-t border-white/10">
        {/* Direct Phone Call */}
        <a
          href="tel:+919059334622"
          className="group block focus:outline-none transition-colors pr-2 sm:pr-8 py-2 sm:py-3 min-h-[44px]"
          aria-label="Call official admissions desk +91 90593 34622"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-[#00D2FF] uppercase">
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00D2FF] shrink-0" />
            <span className="truncate">Phone Desk</span>
          </div>

          <div className="mt-1 sm:mt-2 text-xs sm:text-xl lg:text-2xl font-mono font-black text-white group-hover:text-[#00D2FF] transition-colors tracking-tight">
            +91 90593 34622
          </div>

          <div className="mt-0.5 sm:mt-2 text-[10px] sm:text-xs font-semibold text-slate-300 group-hover:text-[#00D2FF] flex items-center gap-1 transition-colors">
            <span>Call directly</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/916302680457"
          target="_blank"
          rel="noopener noreferrer"
          className="group block focus:outline-none transition-colors pl-2.5 sm:pl-8 py-2 sm:py-3 min-h-[44px]"
          aria-label="Chat on WhatsApp with admissions coordinator +91 63026 80457"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-emerald-400 uppercase">
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">WhatsApp</span>
          </div>

          <div className="mt-1 sm:mt-2 text-xs sm:text-xl lg:text-2xl font-mono font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight">
            +91 63026 80457
          </div>

          <div className="mt-0.5 sm:mt-2 text-[10px] sm:text-xs font-semibold text-slate-300 group-hover:text-emerald-400 flex items-center gap-1 transition-colors">
            <span>Chat now</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>

      {/* Subtle Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

      {/* Social Links & Location Grid */}
      <div className={`grid grid-cols-1 ${mode === 'footer' ? 'sm:grid-cols-2' : 'gap-4 sm:gap-5'} gap-4 sm:gap-6`}>
        {/* Social Navigation Links */}
        <div className="space-y-1.5 sm:space-y-3">
          <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Official Channels
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
            <a
              href={BRAND_DATA.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 sm:p-0 sm:py-2 min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#00D2FF] bg-white/[0.04] sm:bg-transparent rounded-lg sm:rounded-none border border-white/5 sm:border-0 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A0DC] shrink-0" />
                <span className="truncate">LinkedIn</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#00D2FF] transition-colors shrink-0" />
            </a>

            <a
              href={BRAND_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 sm:p-0 sm:py-2 min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm font-semibold text-slate-200 hover:text-pink-300 bg-white/[0.04] sm:bg-transparent rounded-lg sm:rounded-none border border-white/5 sm:border-0 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 shrink-0" />
                <span className="truncate">Instagram</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-pink-400 transition-colors shrink-0" />
            </a>
          </div>
        </div>

        {/* Location & Learning Delivery Format */}
        <div className="space-y-1.5 sm:space-y-3">
          <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Location &amp; Delivery Mode
          </div>
          <div className="flex items-start gap-2 py-0.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7A00] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Visakhapatnam (Vizag)</span>
              <span className="text-[11px] sm:text-xs text-slate-300">HQ in AP &amp; 100% Live Interactive Online Batches across India.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
