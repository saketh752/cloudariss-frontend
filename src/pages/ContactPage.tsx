import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  MapPin,
  Globe,
  CheckCircle2,
  Send,
  ExternalLink,
  Tag,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Let's Talk About{' '}
              <span className="text-gradient-tech">Your Next Step.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Have questions about our programs, learning experience, or admissions? Get in touch with the Cloudariss team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                href={BRAND_DATA.whatsappUrl}
                variant="primary"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                WhatsApp Us
              </Button>
              <Button
                href={BRAND_DATA.phone1Tel}
                variant="outline"
                size="lg"
                leftIcon={<Phone className="w-4 h-4" />}
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTACT CHANNELS & FORM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Contact Phone Numbers */}
            <Card variant="white" padding="lg" className="border border-brand-border shadow-card space-y-5">
              <div className="border-b border-brand-border/60 pb-3">
                <h2 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <Phone className="w-5 h-5 text-brand-blue" />
                  <span>Official Contact Numbers</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Reach our admissions and student support team directly.
                </p>
              </div>

              <div className="space-y-3">
                {/* Official Contact Number 1 (Phone) */}
                <a
                  href={BRAND_DATA.phone1Tel}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-brand-border hover:border-brand-blue/60 hover:bg-brand-surface-blue/40 transition-all group"
                  aria-label={`Call official contact number ${BRAND_DATA.phone1}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Official Contact Number
                      </div>
                      <div className="text-base font-mono font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        {BRAND_DATA.phone1}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
                </a>

                {/* Official Contact Number 2 (WhatsApp) */}
                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/40 border border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                  aria-label={`Chat on WhatsApp with official contact number ${BRAND_DATA.whatsappPhone}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                        <span>WhatsApp & Official Contact</span>
                      </div>
                      <div className="text-base font-mono font-bold text-brand-navy group-hover:text-emerald-700 transition-colors">
                        {BRAND_DATA.whatsappPhone}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-500 group-hover:text-emerald-700 transition-colors" />
                </a>
              </div>
            </Card>

            {/* Official Social Channels */}
            <Card variant="white" padding="lg" className="border border-brand-border shadow-card space-y-5">
              <div className="border-b border-brand-border/60 pb-3">
                <h2 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  <span>Official Social Channels</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Follow official updates, announcements, and tech insights.
                </p>
              </div>

              <div className="space-y-3">
                {/* Instagram */}
                <a
                  href={BRAND_DATA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-brand-border hover:border-pink-400 hover:bg-pink-50/40 transition-all group"
                  aria-label="Visit official Cloudariss Instagram page @cloudariss.tech"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Instagram
                      </div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-pink-600 transition-colors">
                        {BRAND_DATA.instagram.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={BRAND_DATA.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-brand-border hover:border-brand-blue/60 hover:bg-brand-surface-blue/40 transition-all group"
                  aria-label="Visit official Cloudariss Technologies LinkedIn page"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        LinkedIn
                      </div>
                      <div className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                        {BRAND_DATA.linkedin.name}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
                </a>
              </div>
            </Card>

            {/* Operations & Location */}
            <Card variant="surface" padding="md" className="border border-brand-border/80 space-y-2.5">
              <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Operations & Presence</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Headquartered in <strong>Visakhapatnam (Vizag), Andhra Pradesh</strong>, delivering 100% live interactive online classrooms accessible across India.
              </p>
              <div className="text-xs text-slate-500 font-mono pt-1">
                Official Web: {BRAND_DATA.domain}
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <Card variant="white" padding="lg" className="border border-brand-border shadow-card">
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

                  <div className="p-4 rounded-xl bg-brand-surface-blue border border-brand-border text-left max-w-md mx-auto space-y-2 text-xs text-slate-600">
                    <div className="font-bold text-brand-navy text-sm border-b border-brand-border/60 pb-1.5">
                      Fast-Track Direct Connect
                    </div>
                    <p>
                      For immediate assistance regarding the upcoming cohort, coupon code validation (<code className="font-mono text-brand-orange font-bold">CAT@AKHI</code>), or syllabus walkthroughs, connect directly with our admissions desk:
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row gap-2">
                      <Button
                        href={BRAND_DATA.whatsappUrl}
                        variant="primary"
                        size="sm"
                        leftIcon={<MessageCircle className="w-4 h-4" />}
                      >
                        Chat on WhatsApp
                      </Button>
                      <Button
                        href={BRAND_DATA.phone1Tel}
                        variant="outline"
                        size="sm"
                        leftIcon={<Phone className="w-4 h-4" />}
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
                    <h2 className="text-2xl font-extrabold text-brand-navy">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
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
                      <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        placeholder="e.g. 9059334622"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-program" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                        Program Interested In *
                      </label>
                      <select
                        id="inquiry-program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none bg-white transition-colors"
                      >
                        <option value="CRPC">CRPC — Cloud & Data Career Accelerator</option>
                        <option value="DAAP">DAAP — Data Analyst Accelerator Program</option>
                        <option value="General Inquiry">General Inquiry / Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      placeholder="Tell us about your educational background, learning goals, or questions about the curriculum..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none bg-white transition-colors resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-brand-border/60">
                    <span className="text-xs text-slate-500">
                      Campaign coupon <strong className="text-brand-orange font-mono">CAT@AKHI</strong> automatically applied.
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
            </Card>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTACT CTA / OFFER REMINDER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border-2 border-brand-orange/40 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-brand-orange/30">
              <Tag className="w-3.5 h-3.5" />
              <span>Vinayaka Chavithi Special Offer</span>
            </div>

            <div className="flex items-baseline gap-3 justify-center md:justify-start">
              <span className="text-xl sm:text-2xl text-slate-400 line-through font-semibold">
                {BRAND_DATA.offer.originalPrice}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                {BRAND_DATA.offer.offerPrice}
              </span>
              <span className="text-xs text-brand-cyan font-bold font-mono">
                Code: {BRAND_DATA.offer.couponCode}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              12-Week intensive career accelerators in Cloud, Data, DevOps & AI with live mentorship and project reviews.
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
