import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Check,
  Copy,
  Monitor,
  Code2,
  Briefcase,
  Tag,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';

export const VinayakaOfferCard: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

  return (
    <section id="offer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-brand-orange/40 shadow-2xl bg-[#040E2D] group transition-all duration-300 hover:border-brand-orange/70 hover:shadow-orange-500/10">
        {/* Ambient festive lighting */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-blue/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />

        {/* Minimal 3D Ganesha Artwork on Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none select-none overflow-hidden">
          <img
            src="/brand/banners/vinayaka-3d-card.jpg"
            alt="Vinayaka Chavithi Minimal 3D Golden Ganesha Tech Sculpture"
            className="w-full h-full object-cover object-right-bottom sm:object-right transform group-hover:scale-[1.02] transition-transform duration-700 opacity-70 lg:opacity-90"
          />
          {/* Subtle multi-layer gradient overlays ensuring 100% text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#040E2D] via-[#040E2D]/85 sm:via-[#040E2D]/75 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#040E2D]/60" />
        </div>

        {/* Content Container (Layered above artwork) */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl lg:max-w-3xl space-y-6">
          {/* Eyebrow & Live Status */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-widest">
                LIMITED-TIME FESTIVE OFFER
              </span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Live Cohort Admissions</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-[1.12]">
              Vinayaka Chavithi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19BCE8] via-[#0878E8] to-[#19BCE8] block sm:inline">
                Special Offer
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
              Start your career journey with industry-relevant skills, hands-on projects,
              and dedicated career support — at a special festive price.
            </p>
          </div>

          {/* Pricing Lockup */}
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 pt-1">
            <div className="flex items-baseline gap-2.5">
              <span className="text-slate-400 text-base sm:text-lg font-semibold line-through">
                {BRAND_DATA.offer.originalPrice}
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
                {BRAND_DATA.offer.offerPrice}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0878E8]/20 border border-[#19BCE8]/40 text-[#7DD3FC] text-xs font-bold font-mono shadow-sm">
              All-inclusive cohort fee
            </span>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-[#19BCE8] shrink-0">
                <Monitor className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-200">Live Classes</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-brand-orange shrink-0">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-200">Hands-on Projects</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-200">Career Support</span>
            </div>
          </div>

          {/* Interactive Coupon Box & Direct Action CTA */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            {/* Coupon Code Pill */}
            <div className="inline-flex items-center justify-between gap-3 p-1.5 pl-3.5 rounded-xl bg-white/[0.08] border border-dashed border-brand-orange/60 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-orange" />
                <span className="text-xs text-slate-300 font-medium">Use Code:</span>
                <span className="font-mono font-extrabold text-brand-orange text-sm sm:text-base tracking-wider">
                  {BRAND_DATA.offer.couponCode}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-orange/20 hover:bg-brand-orange text-white hover:text-white font-mono font-bold text-xs transition-all cursor-pointer shadow-sm active:scale-95"
                title="Copy coupon code"
              >
                {copiedCoupon ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer shrink-0"
            >
              <span>View Offer Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Festive Footer Note */}
          <p className="text-[11px] sm:text-xs text-slate-400 font-medium pt-1 flex items-center gap-2">
            <span className="text-amber-400">⚡</span>
            <span>Limited seats for this festive cohort • 100% verified curriculum and mentorship.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

