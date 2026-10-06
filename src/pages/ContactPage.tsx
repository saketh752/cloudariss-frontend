import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Send,
  Tag,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { ContactEditorialBlock } from '@/components/contact/ContactEditorialBlock';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'CRPC',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your name, phone number, and email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg('');
    setFormData({
      name: '',
      phone: '',
      email: '',
      program: 'CRPC',
      message: '',
    });
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0878E8]/20 border border-[#19BCE8]/40 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-[#19BCE8] uppercase font-heading">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-heading">
              Let's Talk About{' '}
              <span className="text-gradient-tech">Your Next Step.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#E5EAF3] font-normal max-w-2xl mx-auto leading-relaxed">
              Have questions about our programs, learning experience, or admissions? Get in touch with the Cloudariss team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                href={BRAND_DATA.whatsappUrl}
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-[#25D366] transition-transform group-hover:scale-110" />}
              >
                WhatsApp Us
              </Button>
              <Button
                href={BRAND_DATA.phone1Tel}
                variant="dark"
                size="lg"
                className="bg-[#05143A]/90 hover:bg-[#082260] text-white font-bold border border-[#19BCE8]/40 hover:border-[#19BCE8] shadow-md"
                leftIcon={<Phone className="w-4 h-4 text-[#19BCE8]" />}
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Tech Ecosystem Marquee */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* CONTACT CHANNELS & FORM (EDITORIAL COMPOSITION)                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Contact Presentation */}
          <div className="lg:col-span-5">
            <ContactEditorialBlock mode="page" />
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#07173B]/90 via-[#04102A]/95 to-[#02091A]/98 backdrop-blur-xl border border-white/12 shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
              {submitted ? (
                <div className="text-center py-10 px-4 space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-brand-navy">
                      Inquiry Details Prepared
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-brand-navy">{formData.name}</strong>. Your program inquiry for <strong className="text-brand-navy">{formData.program}</strong> has been logged in this session.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#040C24]/95 border border-[#19BCE8]/30 text-left max-w-md mx-auto space-y-2.5 text-xs text-slate-300 shadow-xl">
                    <div className="font-bold text-white text-sm border-b border-white/10 pb-2">
                      Fast-Track Direct Connect
                    </div>
                    <p className="leading-relaxed">
                      For immediate assistance regarding the upcoming cohort, coupon code validation (<code className="font-mono text-brand-orange font-bold">CAT@AKHI</code>), or syllabus walkthroughs, connect directly with our admissions desk:
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-2">
                      <Button
                        href={BRAND_DATA.whatsappUrl}
                        variant="whatsapp"
                        size="sm"
                        leftIcon={<MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />}
                      >
                        Chat on WhatsApp
                      </Button>
                      <Button
                        href={BRAND_DATA.phone1Tel}
                        variant="dark"
                        size="sm"
                        className="bg-[#05143A]/90 hover:bg-[#082260] text-white font-bold border border-[#19BCE8]/40"
                        leftIcon={<Phone className="w-4 h-4 text-[#19BCE8]" />}
                      >
                        Call Official Number
                      </Button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button onClick={handleReset} variant="ghost" size="sm">
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white font-heading">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                      Share your questions or background, and our team will provide full curriculum, schedule, and fee guidance.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-[#19BCE8] focus:border-[#19BCE8] text-sm outline-none bg-[#05143A]/90 text-white placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        placeholder="e.g. 9059334622"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-[#19BCE8] focus:border-[#19BCE8] text-sm outline-none bg-[#05143A]/90 text-white placeholder:text-slate-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-[#19BCE8] focus:border-[#19BCE8] text-sm outline-none bg-[#05143A]/90 text-white placeholder:text-slate-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-program" className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                        Program Interested In *
                      </label>
                      <select
                        id="inquiry-program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-[#19BCE8] focus:border-[#19BCE8] text-sm outline-none bg-[#05143A]/90 text-white transition-colors"
                      >
                        <option value="CRPC">CRPC — Cloud & Data Career Accelerator</option>
                        <option value="DAAP">DAAP — Data Analyst Accelerator Program</option>
                        <option value="General Inquiry">General Inquiry / Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      placeholder="Tell us about your educational background, learning goals, or questions about the curriculum..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 focus:ring-2 focus:ring-[#19BCE8] focus:border-[#19BCE8] text-sm outline-none bg-[#05143A]/90 text-white placeholder:text-slate-400 transition-colors resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
                    <span className="text-xs text-slate-400">
                      Official admissions desk • Live response within 2 business hours.
                    </span>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Send Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ADMISSIONS & CAREER GUIDANCE CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border border-brand-blue/40 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-brand-blue/20 text-brand-cyan px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-brand-blue/30">
              <Tag className="w-3.5 h-3.5" />
              <span>Admissions Open — Next Cohort</span>
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              Launch Your Tech Career with Cloudariss
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              12-Week intensive career accelerators in Cloud, Data, DevOps & AI with live mentorship, verifiable portfolio projects, and structured placement preparation.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              to="/courses"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
