import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight, Phone, MessageCircle, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/courses' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'Why Us', path: '/why-cloudariss' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative w-full z-40 bg-gradient-to-r from-[#02091D] via-[#06184A] to-[#02091D] border-b border-[#19BCE8]/25 shadow-[0_8px_32px_rgba(2,8,23,0.7),0_1px_0_rgba(25,188,232,0.2)] py-2.5 sm:py-3 transition-colors duration-200">
      {/* Top laser accent line with cyan shimmer */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#19BCE8]/60 to-transparent pointer-events-none" />
      
      {/* Subtle radial ambient illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_-20%,rgba(25,188,232,0.12),transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT: Unboxed, prominent, pure white highlighted logo */}
          <Link to="/" className="flex items-center shrink-0 focus:outline-none group py-0.5" title="Cloudariss Technologies">
            <img
              src="/brand/cloudariss-logo.png"
              alt="Cloudariss Technologies"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert filter drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] drop-shadow-[0_0_24px_rgba(25,188,232,0.6)] group-hover:scale-105 transition-all duration-300"
            />
          </Link>

          {/* CENTER: Desktop Navigation Links inside frosted glass dock */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3.5 py-1 rounded-full bg-[#040E2A]/70 border border-[#19BCE8]/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08),0_2px_12px_rgba(2,8,23,0.4)] backdrop-blur-md">
            {navLinks.map((link) => {
              const isCurrent =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isCurrent
                      ? 'text-[#19BCE8] bg-[#071F5E] shadow-[0_0_12px_rgba(25,188,232,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-[#071F5E]/40'
                  }`}
                >
                  {link.name}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#19BCE8] rounded-full shadow-[0_0_6px_rgba(25,188,232,0.9)]" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* RIGHT: CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Get Started Clean Blue CTA with Metallic Glass Finish */}
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl bg-gradient-to-r from-[#0878E8] via-[#0984FC] to-[#0878E8] bg-[length:200%_auto] hover:bg-right text-white text-xs xl:text-sm font-bold shadow-[0_4px_16px_rgba(8,120,232,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_6px_22px_rgba(25,188,232,0.6)] border border-[#19BCE8]/50 transition-all duration-300 group active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-[#071B63]/60 border border-[#19BCE8]/20 hover:bg-[#071B63] focus:outline-none focus:ring-2 focus:ring-[#19BCE8] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-[#040E2A]/98 backdrop-blur-xl border-b border-[#19BCE8]/25 shadow-2xl px-4 py-5 z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isCurrent =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isCurrent
                      ? 'text-[#19BCE8] bg-[#071F5E] font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                      : 'text-slate-300 hover:bg-[#071F5E]/50 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              );
            })}

            {/* Verify Certificate in Mobile */}
            <NavLink
              to="/verify-certificate"
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold border-t border-[#19BCE8]/20 mt-1 pt-3 ${
                  isActive
                    ? 'text-[#19BCE8] bg-[#071F5E] font-bold'
                    : 'text-slate-300 hover:bg-[#071F5E]/50 hover:text-white'
                }`
              }
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#19BCE8]" />
                <span>Verify Certificate</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </NavLink>

            {/* Action buttons in Mobile Drawer */}
            <div className="pt-4 mt-2 space-y-2.5">
              <Link
                to="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#0984FC] text-white font-bold text-sm shadow-[0_4px_14px_rgba(8,120,232,0.4)] border border-[#19BCE8]/40 hover:brightness-110"
              >
                <span>Get Started — Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Contact & Socials in Mobile Menu */}
            <div className="pt-4 mt-2 border-t border-[#19BCE8]/20 space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Official Channels
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={BRAND_DATA.phone1Tel}
                  className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#071B63] border border-[#19BCE8]/20 text-slate-200 font-semibold hover:text-[#19BCE8]"
                  aria-label={`Call ${BRAND_DATA.phone1}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#19BCE8]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white font-semibold text-xs transition-all group"
                  aria-label={`WhatsApp ${BRAND_DATA.whatsappPhone}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:scale-110" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href={BRAND_DATA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#071B63] border border-[#19BCE8]/20 text-slate-300 hover:text-pink-400 transition-colors"
                  aria-label="Cloudariss Instagram @cloudariss.tech"
                  title="Instagram: @cloudariss.tech"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_DATA.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#071B63] border border-[#19BCE8]/20 text-slate-300 hover:text-[#19BCE8] transition-colors"
                  aria-label="Cloudariss Technologies LinkedIn"
                  title="LinkedIn: Cloudariss Technologies"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
