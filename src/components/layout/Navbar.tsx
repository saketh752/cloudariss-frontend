import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ChevronRight, Phone, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Programs', path: '/courses' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'Why Cloudariss', path: '/why-cloudariss' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-brand-border py-2.5'
          : 'bg-white/85 backdrop-blur-sm border-b border-brand-border/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 focus:outline-none group">
            <img
              src="/brand/cloudariss-logo.png"
              alt="Cloudariss Technologies"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-blue bg-brand-surface-blue font-bold'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Verify Certificate Link */}
            <NavLink
              to="/verify-certificate"
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'text-brand-blue bg-brand-surface-blue font-bold'
                    : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100/70'
                }`
              }
            >
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Verify Certificate</span>
            </NavLink>
          </nav>

          {/* Primary CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button to="/courses" variant="primary" size="md">
              Explore Programs
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/verify-certificate"
              className="p-2 text-slate-600 hover:text-brand-blue rounded-md hover:bg-slate-100"
              title="Verify Certificate"
            >
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
            </Link>
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
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                    isActive
                      ? 'text-brand-blue bg-brand-surface-blue'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}

            <NavLink
              to="/verify-certificate"
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold border-t border-brand-border/60 mt-1 pt-3 ${
                  isActive
                    ? 'text-brand-blue bg-brand-surface-blue'
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

            <div className="pt-4 mt-2">
              <Button to="/courses" variant="primary" size="lg" fullWidth>
                Explore Programs
              </Button>
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

