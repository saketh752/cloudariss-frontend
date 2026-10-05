import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';
import { ContactEditorialBlock } from '@/components/contact/ContactEditorialBlock';

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
          {/* RIGHT SIDE (8 Cols): Editorial Admissions & Contact Presentation      */}
          {/* ======================================================================= */}
          <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-white/10">
            <ContactEditorialBlock mode="footer" />
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
