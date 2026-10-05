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
    { name: 'Courses', path: '/courses' },
    { name: 'Why Us', path: '/why-cloudariss' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative w-full z-40 bg-gradient-to-r from-[#02091D] via-[#06184A] to-[#02091D] border-b border-[#19BCE8]/20 shadow-[0_4px_24px_rgba(2,8,23,0.6)] py-3 sm:py-3.5">
      {/* Top laser accent line with cyan shimmer */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#19BCE8]/50 to-transparent pointer-events-none" />
      
      {/* Subtle radial ambient illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_-20%,rgba(25,188,232,0.08),transparent_75%)] pointer-events-none" />

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

          {/* CENTER: Clean, unboxed text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isCurrent =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative py-1.5 text-sm font-semibold tracking-wide transition-colors duration-150 ${
                    isCurrent
                      ? 'text-[#19BCE8] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#19BCE8] after:rounded-full after:shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* RIGHT: CTAs - 'Verify Certificate' + 'Contact' */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <Link
              to="/verify-certificate"
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl bg-[#0878E8]/10 hover:bg-[#0878E8]/20 text-[#19BCE8] hover:text-white text-xs xl:text-sm font-semibold border border-[#19BCE8]/35 hover:border-[#19BCE8] transition-all duration-200 active:scale-[0.98]"
            >
              <ShieldCheck className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#19BCE8]" />
              <span>Verify Certificate</span>
            </Link>
            <a
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#0668CB] hover:from-[#0984FC] hover:to-[#0878E8] text-white text-xs xl:text-sm font-bold shadow-[0_2px_12px_rgba(8,120,232,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_4px_18px_rgba(25,188,232,0.5)] border border-[#19BCE8]/40 transition-all duration-200 group active:scale-[0.98]"
              title="Chat with Admissions on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
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
              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#0984FC] text-white font-bold text-sm shadow-[0_4px_14px_rgba(8,120,232,0.4)] border border-[#19BCE8]/40 hover:brightness-110 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Contact Admissions on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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
