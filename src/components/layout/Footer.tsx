import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Linkedin,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-brand-dark-section/95 backdrop-blur-xl text-[#DCE5F2] border-t border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ======================================================================= */}
          {/* LEFT SIDE (4 Cols): Brand Identity, Navigation & Certificate Verification */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* Brand Logo with High-Contrast Plate */}
            <Link to="/" className="inline-block focus:outline-none group">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md group-hover:bg-white group-hover:scale-102 transition-all">
                <img
                  src="/brand/cloudariss-logo.png"
                  alt="Cloudariss Technologies"
                  className="h-8.5 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              {BRAND_DATA.positioning} Live instructor-led cohorts with hands-on architecture labs, real engineering deliverables, and structured career preparation.
            </p>

            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan tracking-wide uppercase bg-brand-dark-surface px-3 py-1 rounded-full border border-brand-blue/30">
                {BRAND_DATA.tagline}
              </span>
            </div>

            {/* Quick Explore & Programs Links */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
              <div className="space-y-2">
                <div className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">Programs</div>
                <ul className="space-y-1.5">
                  <li>
                    <Link to="/courses/crpc" className="text-slate-300 hover:text-[#00D2FF] transition-colors">
                      CRPC Cloud & Data
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/daap" className="text-slate-300 hover:text-[#00D2FF] transition-colors">
                      DAAP Data Analyst
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses" className="text-slate-300 hover:text-[#00D2FF] transition-colors">
                      All Programs
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">Explore</div>
                <ul className="space-y-1.5">
                  <li>
                    <Link to="/offerings" className="text-slate-300 hover:text-[#00D2FF] transition-colors">
                      Offerings
                    </Link>
                  </li>
                  <li>
                    <Link to="/why-cloudariss" className="text-slate-300 hover:text-[#00D2FF] transition-colors">
                      Why Cloudariss
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-slate-300 hover:text-[#00D2FF] transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust & Verification Lookup */}
            <div className="pt-2">
              <Link
                to="/verify-certificate"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-[#19BCE8]/40 text-[#00D2FF] hover:border-[#00D2FF] transition-all shadow-xs"
              >
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                <span>Verify Official Certificate ID</span>
              </Link>
            </div>
          </div>

          {/* ======================================================================= */}
          {/* RIGHT SIDE (8 Cols): Prominent, Big & Attractive Contact Dashboard Hub */}
          {/* ======================================================================= */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-5 relative overflow-hidden">
            {/* Ambient subtle glow inside right contact hub */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Hub Header */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_10px_#00D2FF] animate-pulse" />
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                  Direct Admissions &amp; Campus Desk
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Connect directly with practicing technical mentors
              </span>
            </div>

            {/* 4 Big Prominent Interactive Contact Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* 1. Big Direct Phone Card */}
              <a
                href={BRAND_DATA.phone1Tel}
                className="group p-4 rounded-2xl bg-white/[0.06] hover:bg-[#00D2FF]/15 border border-white/15 hover:border-[#00D2FF]/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-[0_0_24px_rgba(0,210,255,0.25)] flex items-start gap-4"
                aria-label={`Call official phone number ${BRAND_DATA.phone1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#00D2FF]/20 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,210,255,0.4)] mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-mono text-[#00D2FF] font-bold uppercase tracking-wider">
                    Direct Call Line
                  </div>
                  <div className="text-base sm:text-lg font-mono font-extrabold text-white group-hover:text-[#00D2FF] transition-colors tracking-wide mt-0.5">
                    {BRAND_DATA.phone1}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 group-hover:text-slate-300">
                    <span>Instant counselor connect</span>
                    <ArrowRight className="w-3 h-3 text-[#00D2FF] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* 2. Big WhatsApp Card */}
              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/70 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-[0_0_24px_rgba(37,211,102,0.3)] flex items-start gap-4"
                aria-label={`Chat on WhatsApp with ${BRAND_DATA.whatsappPhone}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/25 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_14px_rgba(37,211,102,0.45)] mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      Instant WhatsApp
                    </span>
                    <span className="flex items-center gap-1 text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      Online
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-mono font-extrabold text-white group-hover:text-emerald-300 transition-colors tracking-wide mt-0.5">
                    {BRAND_DATA.whatsappPhone}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 group-hover:text-slate-300">
                    <span>Live chat &amp; admissions help</span>
                    <ArrowRight className="w-3 h-3 text-[#25D366] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* 3. Big LinkedIn Card */}
              <a
                href={BRAND_DATA.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-gradient-to-r from-[#0077B5]/20 via-[#0077B5]/10 to-transparent hover:from-[#0077B5]/35 hover:to-[#0077B5]/20 border border-[#0077B5]/40 hover:border-[#00D2FF] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-[0_0_24px_rgba(0,119,181,0.35)] flex items-start gap-4"
                aria-label="Connect with Cloudariss Technologies on LinkedIn"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0077B5]/30 border border-[#0077B5]/60 flex items-center justify-center text-[#00A0DC] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_14px_rgba(0,119,181,0.45)] mt-0.5">
                  <Linkedin className="w-5 h-5 text-[#00A0DC] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#00A0DC] font-bold uppercase tracking-wider">
                      Official LinkedIn
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#0077B5]/25 border border-[#0077B5]/40 text-[#00A0DC] group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                      Connect
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#00D2FF] transition-colors mt-0.5 truncate">
                    Cloudariss Technologies
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Hiring networks &amp; cohort updates</div>
                </div>
              </a>

              {/* 4. Big Instagram Card */}
              <a
                href={BRAND_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-orange-500/10 hover:from-purple-500/35 hover:to-orange-500/25 border border-pink-500/40 hover:border-pink-400 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-[0_0_24px_rgba(236,72,153,0.35)] flex items-start gap-4"
                aria-label="Follow Cloudariss Technologies on Instagram"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/35 via-pink-500/35 to-orange-500/35 border border-pink-500/60 flex items-center justify-center text-pink-300 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_14px_rgba(236,72,153,0.45)] mt-0.5">
                  <Instagram className="w-5 h-5 text-pink-300 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-pink-300 font-bold uppercase tracking-wider">
                      Campus Life &amp; Events
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-pink-500/25 border border-pink-500/40 text-pink-300 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                      Follow
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-pink-200 transition-colors mt-0.5 truncate">
                    @cloudariss.tech
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Hackathons, workshops &amp; student stories</div>
                </div>
              </a>
            </div>

            {/* Big Location & Mode Full-Width Bar */}
            <div className="relative z-10 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/12 backdrop-blur-md flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/20 border border-[#FF8C00]/40 flex items-center justify-center text-[#FF8C00] shrink-0 shadow-[0_0_10px_rgba(255,140,0,0.3)]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#FF8C00] font-bold uppercase tracking-wider leading-none mb-1">
                  Training Center &amp; Learning Format
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {BRAND_DATA.location}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Cloudariss Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-300 font-semibold">{BRAND_DATA.tagline}</span>
            <span className="text-slate-300">Vizag · Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
