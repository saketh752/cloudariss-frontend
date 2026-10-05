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

interface ContactEditorialBlockProps {
  /** Optional layout mode: 'footer' for 2-column wide layout in footer, 'page' for dedicated page left column */
  mode?: 'footer' | 'page';
}

export const ContactEditorialBlock: React.FC<ContactEditorialBlockProps> = ({
  mode = 'footer',
}) => {
  return (
    <div className="space-y-6 sm:space-y-8 text-white">
      {/* Editorial Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
          <span>Direct Admissions &amp; Campus Desk</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight leading-tight">
          Have questions about our programs?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#19BCE8] to-white">
            Let's talk.
          </span>
        </h3>
        <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal max-w-xl">
          Connect directly with practicing mentors, curriculum advisors, and admissions coordinators for cohort schedules and guidance.
        </p>
      </div>

      {/* Primary Contact Actions: Phone & WhatsApp */}
      <div className={`grid grid-cols-1 ${mode === 'footer' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-1'} gap-5 sm:gap-6 pt-1`}>
        {/* Direct Phone Call */}
        <a
          href={BRAND_DATA.phone1Tel}
          className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00D2FF]/50 transition-all duration-300"
          aria-label={`Call official admissions number ${BRAND_DATA.phone1}`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5">
            <Phone className="w-5 h-5" />
          </div>
          <div className="space-y-1 min-w-0">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Direct Phone Call
            </div>
            <div className="text-lg sm:text-xl font-mono font-black text-white group-hover:text-[#00D2FF] transition-colors tracking-tight">
              {BRAND_DATA.phone1}
            </div>
            <div className="text-xs text-[#00D2FF] flex items-center gap-1 font-semibold pt-0.5">
              <span>Call our desk directly</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={BRAND_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3.5 p-4 rounded-2xl bg-[#25D366]/[0.06] hover:bg-[#25D366]/[0.12] border border-[#25D366]/25 hover:border-[#25D366]/60 transition-all duration-300"
          aria-label={`Chat on WhatsApp with ${BRAND_DATA.whatsappPhone}`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1 min-w-0">
            <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Instant WhatsApp Support
            </div>
            <div className="text-lg sm:text-xl font-mono font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight">
              {BRAND_DATA.whatsappPhone}
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1 font-semibold pt-0.5">
              <span>Chat with our team</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      </div>

      {/* Subtle Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

      {/* Social Links & Location Grid */}
      <div className={`grid grid-cols-1 ${mode === 'footer' ? 'sm:grid-cols-2' : 'gap-5'} gap-6`}>
        {/* Social Navigation Links */}
        <div className="space-y-3">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Official Channels
          </div>
          <div className="space-y-2.5">
            <a
              href={BRAND_DATA.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 text-sm font-bold text-slate-200 hover:text-[#00D2FF] transition-all group"
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
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 text-sm font-bold text-slate-200 hover:text-pink-300 transition-all group"
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
          <div className="flex items-start gap-2.5 p-2.5 text-sm text-[#CBD5E1] leading-relaxed">
            <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0 mt-1" />
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
