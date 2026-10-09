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
    <div className="space-y-5 sm:space-y-8 text-white">
      {/* Editorial Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
          <span>Direct Admissions &amp; Campus Desk</span>
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-white tracking-tight leading-tight">
          Have questions about our programs?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#19BCE8] to-white">
            Let's talk.
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal max-w-xl">
          Connect directly with practicing mentors, curriculum advisors, and admissions coordinators for cohort schedules and guidance.
        </p>
      </div>

      {/* Primary Contact Actions: Phone & WhatsApp (Open Editorial Layout — No Boxes) */}
      <div
        className={`grid grid-cols-1 ${
          mode === 'footer'
            ? 'sm:grid-cols-2 sm:divide-x divide-y sm:divide-y-0'
            : 'divide-y'
        } divide-white/10 gap-4 sm:gap-0 pt-1 sm:pt-2`}
      >
        {/* Direct Phone Call */}
        <a
          href="tel:+919059334622"
          className="group block focus:outline-none transition-colors sm:pr-8 py-3 min-h-[44px]"
          aria-label="Call official admissions desk +91 90593 34622"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
            <Phone className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
            <span>Direct Phone Call</span>
          </div>

          <div className="mt-1.5 sm:mt-2 text-lg sm:text-2xl font-mono font-black text-white group-hover:text-[#00D2FF] transition-colors tracking-tight">
            +91 90593 34622
          </div>

          <div className="mt-1.5 sm:mt-2 text-xs font-semibold text-slate-300 group-hover:text-[#00D2FF] flex items-center gap-1.5 transition-colors">
            <span>Call our desk directly</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href="https://wa.me/916302680457"
          target="_blank"
          rel="noopener noreferrer"
          className={`group block focus:outline-none transition-colors ${
            mode === 'footer' ? 'sm:pl-8 pt-4 sm:pt-3' : 'pt-4'
          } py-3 min-h-[44px]`}
          aria-label="Chat on WhatsApp with admissions coordinator +91 63026 80457"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Instant WhatsApp Support</span>
          </div>

          <div className="mt-1.5 sm:mt-2 text-lg sm:text-2xl font-mono font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight">
            +91 63026 80457
          </div>

          <div className="mt-1.5 sm:mt-2 text-xs font-semibold text-slate-300 group-hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
            <span>Chat with our team</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>

      {/* Subtle Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

      {/* Social Links & Location Grid */}
      <div className={`grid grid-cols-1 ${mode === 'footer' ? 'sm:grid-cols-2' : 'gap-5'} gap-5 sm:gap-6`}>
        {/* Social Navigation Links */}
        <div className="space-y-2.5 sm:space-y-3">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Official Channels
          </div>
          <div className="space-y-1 sm:space-y-2">
            <a
              href={BRAND_DATA.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 min-h-[44px] text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#00D2FF] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-[#00A0DC] shrink-0" />
                <span>Cloudariss Technologies</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00D2FF] transition-colors" />
            </a>

            <a
              href={BRAND_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 min-h-[44px] text-xs sm:text-sm font-semibold text-slate-200 hover:text-pink-300 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{BRAND_DATA.instagram.handle}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Location & Learning Delivery Format */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Location &amp; Delivery Mode
          </div>
          <div className="flex items-start gap-2.5 py-1 text-sm text-[#CBD5E1] leading-relaxed">
            <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block">Visakhapatnam (Vizag)</span>
              <span className="text-xs text-slate-300">HQ in Andhra Pradesh &amp; 100% Live Interactive Online Batches across India.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
