import React, { useState } from 'react';
import { Tag, Check, Copy, ArrowRight } from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';
import { Link } from 'react-router-dom';

export const TopBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-brand-navy text-white text-xs border-b border-brand-blue/30 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 flex-wrap text-slate-200">
          <span className="inline-flex items-center gap-1.5 bg-brand-orange/20 text-brand-orange font-bold px-2 py-0.5 rounded border border-brand-orange/40 text-[11px]">
            <Tag className="w-3 h-3" />
            {BRAND_DATA.offer.title}
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="text-slate-200 font-medium">
            Career Accelerators: <span className="line-through text-slate-400">{BRAND_DATA.offer.originalPrice}</span>{' '}
            <span className="text-white font-extrabold text-sm">{BRAND_DATA.offer.offerPrice}</span>
          </span>
          <span className="hidden sm:inline text-slate-400">·</span>
          <span className="hidden sm:inline text-slate-300">
            Use code: <code className="bg-brand-dark-surface px-1.5 py-0.5 rounded text-brand-cyan font-mono font-bold tracking-wider">{BRAND_DATA.offer.couponCode}</code>
          </span>
        </div>

        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          <button
            onClick={handleCopyCoupon}
            className="inline-flex items-center gap-1 bg-brand-blue/30 hover:bg-brand-blue/50 text-brand-cyan hover:text-white px-2.5 py-1 rounded transition-colors text-[11px] font-semibold border border-brand-blue/40 active:scale-95"
            title="Copy coupon code"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Code</span>
              </>
            )}
          </button>

          <Link
            to="/courses"
            className="hidden lg:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-[11px] font-semibold group ml-2"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
