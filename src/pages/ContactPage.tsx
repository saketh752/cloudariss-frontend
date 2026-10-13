import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Linkedin,
  Instagram,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

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
    <div className="relative text-white min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-8 sm:py-12 lg:py-16">
      {/* 55% Black Overlay over background image, placed strictly behind content */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/[0.55] pointer-events-none -z-10"
      />

      {/* SINGLE CONTACT SECTION ONLY */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* =================================================================== */}
          {/* LEFT COLUMN: Contact Information                                   */}
          {/* =================================================================== */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Header: Direct & concise, no blue eyebrow badge */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                Have questions?{' '}
                <span className="text-[#00D2FF]">Let's talk.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect directly with practicing mentors, curriculum advisors, and admissions coordinators for cohort schedules and guidance.
              </p>
            </div>

            {/* Primary Direct Contact Channels */}
            <div className="grid grid-cols-2 divide-x divide-white/10 pt-2 border-t border-white/10">
              {/* Phone Desk */}
              <a
                href="tel:+919059334622"
                className="group block focus:outline-none transition-colors pr-4 py-2"
                aria-label="Call admissions desk at +91 90593 34622"
              >
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#00D2FF] uppercase">
                  <Phone className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span>Phone</span>
                </div>
                <div className="mt-1.5 text-base sm:text-lg lg:text-xl font-mono font-black text-white group-hover:text-[#00D2FF] transition-colors tracking-tight">
                  +91 90593 34622
                </div>
                <div className="mt-1 text-xs text-slate-400 group-hover:text-[#00D2FF] flex items-center gap-1 transition-colors">
                  <span>Call directly</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* WhatsApp Chat */}
              <a
                href="https://wa.me/916302680457"
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus:outline-none transition-colors pl-4 py-2"
                aria-label="Chat on WhatsApp with admissions coordinator at +91 63026 80457"
              >
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp</span>
                </div>
                <div className="mt-1.5 text-base sm:text-lg lg:text-xl font-mono font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                  +91 63026 80457
                </div>
                <div className="mt-1 text-xs text-slate-400 group-hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <span>Chat now</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>

            {/* Hairline Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Official Channels & Location */}
            <div className="space-y-5">
              {/* Official Social Channels */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Official Channels
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <a
                    href="https://www.linkedin.com/company/cloudariss-technologies/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-200 hover:text-[#00D2FF] transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-[#00A0DC] shrink-0" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#00D2FF] transition-colors" />
                  </a>

                  <a
                    href="https://www.instagram.com/cloudariss.tech/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-200 hover:text-pink-400 transition-colors group"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-pink-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Location & Delivery Mode */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Location &amp; Delivery Mode
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Visakhapatnam (Vizag)</span>
                    <span className="text-xs text-slate-400">
                      HQ in AP and 100% live interactive online batches across India.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================================== */}
          {/* RIGHT COLUMN: Inquiry Form (Direct open presentation, no card box) */}
          {/* =================================================================== */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-200">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-black text-white font-heading">
                      Inquiry Details Prepared
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your program inquiry for <strong className="text-[#00D2FF]">{formData.program}</strong> has been logged in this session.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs text-slate-300">
                    <div className="font-bold text-white text-sm">
                      Immediate Admissions Connect
                    </div>
                    <p className="leading-relaxed">
                      For instant assistance regarding upcoming cohort dates or syllabus questions, connect directly:
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2.5">
                      <Button
                        href="https://wa.me/916302680457"
                        variant="whatsapp"
                        size="sm"
                        leftIcon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
                      >
                        Chat on WhatsApp
                      </Button>
                      <Button
                        href="tel:+919059334622"
                        variant="outline"
                        size="sm"
                        className="border-white/20 hover:border-white/40 text-white"
                        leftIcon={<Phone className="w-4 h-4 text-[#00D2FF]" />}
                      >
                        Call Official Desk
                      </Button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button onClick={handleReset} variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
                      Send an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      Share your questions or background, and our team will provide full curriculum, schedule, and fee guidance.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs font-mono font-bold uppercase text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-white/15 focus:ring-2 focus:ring-[#00D2FF] focus:border-[#00D2FF] text-sm outline-none bg-white/[0.04] text-white placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className="block text-xs font-mono font-bold uppercase text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        required
                        placeholder="e.g. 9059334622"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-white/15 focus:ring-2 focus:ring-[#00D2FF] focus:border-[#00D2FF] text-sm outline-none bg-white/[0.04] text-white placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-mono font-bold uppercase text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-white/15 focus:ring-2 focus:ring-[#00D2FF] focus:border-[#00D2FF] text-sm outline-none bg-white/[0.04] text-white placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-program" className="block text-xs font-mono font-bold uppercase text-slate-300 mb-1">
                        Program Interested In *
                      </label>
                      <select
                        id="inquiry-program"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-white/15 focus:ring-2 focus:ring-[#00D2FF] focus:border-[#00D2FF] text-sm outline-none bg-[#020817] text-white transition-colors cursor-pointer"
                      >
                        <option value="CRPC">CRPC — Cloud &amp; Data Career Accelerator</option>
                        <option value="DAAP">DAAP — Data Analyst Accelerator Program</option>
                        <option value="General Inquiry">General Inquiry / Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-mono font-bold uppercase text-slate-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      placeholder="Tell us about your educational background, learning goals, or questions about the curriculum..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-white/15 focus:ring-2 focus:ring-[#00D2FF] focus:border-[#00D2FF] text-sm outline-none bg-white/[0.04] text-white placeholder:text-slate-500 transition-colors resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/10">
                    <span className="text-xs text-slate-400">
                      Admissions desk &bull; Fast response for upcoming cohorts.
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
    </div>
  );
};
