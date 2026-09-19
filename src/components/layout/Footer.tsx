import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Instagram, Linkedin, Globe, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-section text-slate-300 border-t border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white/95 p-2 rounded-lg">
              <img
                src="/brand/cloudariss-logo.png"
                alt="Cloudariss Technologies"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {BRAND_DATA.positioning}
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan tracking-wide uppercase bg-brand-dark-surface px-3 py-1 rounded-full border border-brand-blue/30">
                {BRAND_DATA.tagline}
              </span>
            </div>

            {/* Direct Official Contact Channels */}
            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{BRAND_DATA.location}</span>
              </div>

              {/* Telephone Contact */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href={BRAND_DATA.phone1Tel}
                  className="hover:text-white transition-colors font-mono"
                  aria-label={`Call official phone number ${BRAND_DATA.phone1}`}
                >
                  {BRAND_DATA.phone1}
                </a>
              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-mono"
                  aria-label={`Chat on WhatsApp with ${BRAND_DATA.whatsappPhone}`}
                >
                  {BRAND_DATA.whatsappPhone} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="text-slate-300 font-mono">{BRAND_DATA.domain}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-dark-surface border border-brand-blue/30 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                aria-label="Cloudariss Technologies Instagram Profile"
                title="Instagram: @cloudariss.tech"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BRAND_DATA.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-dark-surface border border-brand-blue/30 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
                aria-label="Cloudariss Technologies LinkedIn Page"
                title="LinkedIn: Cloudariss Technologies"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-brand-dark-surface border border-brand-blue/30 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="Contact Cloudariss on WhatsApp"
                title="WhatsApp: +91 63026 80457"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs Col */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/courses/crpc"
                  className="text-slate-300 hover:text-brand-cyan transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-brand-blue transition-transform group-hover:translate-x-1" />
                  <span>CRPC Cloud & Data</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/daap"
                  className="text-slate-300 hover:text-brand-cyan transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-brand-blue transition-transform group-hover:translate-x-1" />
                  <span>DAAP Data Analyst</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-slate-300 hover:text-brand-cyan transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-brand-blue transition-transform group-hover:translate-x-1" />
                  <span>All Programs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-brand-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="text-slate-300 hover:text-brand-cyan transition-colors">
                  Offerings & Methodology
                </Link>
              </li>
              <li>
                <Link to="/why-cloudariss" className="text-slate-300 hover:text-brand-cyan transition-colors">
                  Why Cloudariss
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-brand-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-brand-cyan transition-colors">
                  Contact & Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Verification & Trust */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Trust & Verification
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Verify participation certificates issued for official Cloudariss workshops and events.
            </p>
            <Link
              to="/verify-certificate"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-brand-dark-surface border border-brand-blue/40 text-brand-cyan hover:border-brand-cyan transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Verify Certificate ID</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
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
