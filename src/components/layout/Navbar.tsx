import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight, Phone, MessageCircle, Instagram, Linkedin, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleOfferClick = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('offer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#offer';
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 focus:outline-none group">
            <img
              src="/brand/cloudariss-logo.png"
              alt="Cloudariss Technologies"
              className="h-9 sm:h-9.5 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* CENTER: Desktop Navigation Links */}
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
                  className={`relative py-1.5 text-sm font-semibold transition-colors duration-150 ${
                    isCurrent
                      ? 'text-brand-blue font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue after:rounded-full'
                      : 'text-slate-700 hover:text-brand-navy'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* RIGHT: CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Vinayaka Chavithi Offer CTA */}
            <button
              type="button"
              onClick={handleOfferClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-orange-50 text-brand-orange border border-orange-200 hover:bg-orange-100/90 hover:border-brand-orange/40 text-xs xl:text-sm font-bold shadow-2xs transition-all cursor-pointer group"
              title="Special Festive Admissions Campaign"
            >
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span>Vinayaka Chavithi Offer</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-orange transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Get Started Clean Blue CTA */}
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-blue hover:bg-blue-600 text-white text-xs xl:text-sm font-bold shadow-sm hover:shadow transition-all group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleOfferClick}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Offer</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-brand-border shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-200">
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
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                    isCurrent
                      ? 'text-brand-blue bg-brand-surface-blue font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
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
                `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold border-t border-brand-border/60 mt-1 pt-3 ${
                  isActive
                    ? 'text-brand-blue bg-brand-surface-blue font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`
              }
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                <span>Verify Certificate</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </NavLink>

            {/* Action buttons in Mobile Drawer */}
            <div className="pt-4 mt-2 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOfferClick();
                }}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-orange-50 border border-brand-orange/40 text-brand-orange font-bold text-sm hover:bg-orange-100"
              >
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Vinayaka Chavithi Special Offer (₹17,000)</span>
              </button>

              <Link
                to="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-brand-blue text-white font-bold text-sm shadow-md hover:bg-blue-600"
              >
                <span>Get Started — Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Contact & Socials in Mobile Menu */}
            <div className="pt-4 mt-2 border-t border-brand-border/60 space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Official Channels
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={BRAND_DATA.phone1Tel}
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-brand-border text-brand-navy font-semibold hover:text-brand-blue"
                  aria-label={`Call ${BRAND_DATA.phone1}`}
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-emerald-50/60 border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-100"
                  aria-label={`WhatsApp ${BRAND_DATA.whatsappPhone}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href={BRAND_DATA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-pink-600 transition-colors"
                  aria-label="Cloudariss Instagram @cloudariss.tech"
                  title="Instagram: @cloudariss.tech"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_DATA.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-brand-blue transition-colors"
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
