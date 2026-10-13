import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { CoursesFlagshipSection } from '@/components/courses/CoursesFlagshipSection';
import { AllTechnologyCourses } from '@/components/courses/AllTechnologyCourses';

export const CoursesPage: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-16 lg:space-y-20 pb-10 sm:pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-6 pb-8 sm:pt-14 sm:pb-16 lg:pt-18 lg:pb-20 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="relative max-w-3xl mx-auto">
            {/* Atmospheric subtle radial scrim */}
            <div
              aria-hidden="true"
              className="absolute inset-x-[-15%] -inset-y-10 pointer-events-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(2, 8, 23, 0.72) 0%, rgba(2, 8, 23, 0.42) 55%, transparent 100%)',
              }}
            />

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.14] font-heading">
              <span className="block sm:inline">Build Skills. Build Projects.</span>{' '}
              <span className="text-gradient-tech block sm:inline mt-1 sm:mt-0">Build Your Career.</span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-[#CBD5E1] font-normal max-w-2xl mx-auto leading-relaxed">
              Explore Cloudariss flagship programs designed around practical technology skills, hands-on lab projects, and systematic career preparation.
            </p>

            {/* Mobile Hero Actions: Single Primary CTA + Horizontal Flagship Links (Mobile Only) */}
            <div className="sm:hidden pt-4 w-full max-w-xs mx-auto space-y-2.5">
              <a
                href="#flagship-programs"
                className="group inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 w-full bg-gradient-to-r from-[#0878E8] via-[#098BF0] to-[#00D2FF] hover:brightness-110 text-white border border-[#00D2FF]/40 shadow-[0_4px_14px_rgba(8,120,232,0.35)] min-h-[40px] cursor-pointer"
              >
                <span>Explore Flagship Programs</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Direct Flagship Links: Compact, Non-Wrapping, Accessible */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider pt-0.5">
                <span className="text-[10px] text-slate-400 font-sans uppercase font-medium">Direct:</span>
                <Link
                  to="/courses/crpc"
                  className="text-[#00D2FF] hover:text-white transition-colors py-1 px-1.5 rounded hover:bg-white/5 underline underline-offset-4 decoration-[#00D2FF]/40 inline-flex items-center"
                >
                  CRPC
                </Link>
                <span className="text-slate-600 select-none">·</span>
                <Link
                  to="/courses/daap"
                  className="text-[#C084FC] hover:text-white transition-colors py-1 px-1.5 rounded hover:bg-white/5 underline underline-offset-4 decoration-[#C084FC]/40 inline-flex items-center"
                >
                  DAAP
                </Link>
                <span className="text-slate-600 select-none">·</span>
                <Link
                  to="/courses/fde"
                  className="text-[#00E599] hover:text-white transition-colors py-1 px-1.5 rounded hover:bg-white/5 underline underline-offset-4 decoration-[#00E599]/40 inline-flex items-center"
                >
                  FDE
                </Link>
              </div>
            </div>

            {/* Desktop & Tablet Hero Actions: Approved Three Distinct Flagship CTAs */}
            <div className="hidden sm:flex items-center justify-center gap-3 sm:gap-4 pt-5 sm:pt-6 w-full max-w-none mx-auto flex-wrap lg:flex-nowrap">
              {/* CRPC: Cloudariss Blue Primary */}
              <Link
                to="/courses/crpc"
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#0878E8] focus:ring-offset-2 focus:ring-offset-[#020817] min-h-[44px] sm:min-h-[48px] select-none whitespace-nowrap min-w-[200px] lg:min-w-[214px] bg-[#0878E8] hover:bg-[#0667CB] active:bg-[#0556AB] text-white border border-[#19BCE8]/40 hover:border-[#19BCE8]/70 shadow-[0_4px_14px_rgba(8,120,232,0.25)] hover:shadow-[0_6px_20px_rgba(8,120,232,0.38)]"
              >
                <span>Explore CRPC Track</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* DAAP: Rich Violet Primary */}
              <Link
                to="/courses/daap"
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#7438D5] focus:ring-offset-2 focus:ring-offset-[#020817] min-h-[44px] sm:min-h-[48px] select-none whitespace-nowrap min-w-[200px] lg:min-w-[214px] bg-[#7438D5] hover:bg-[#632EC0] active:bg-[#5323A0] text-white border border-[#B69AFF]/40 hover:border-[#B69AFF]/70 shadow-[0_4px_14px_rgba(116,56,213,0.25)] hover:shadow-[0_6px_20px_rgba(116,56,213,0.38)]"
              >
                <span>Explore DAAP Track</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* FDE: Approved Orange Accent */}
              <Link
                to="/courses/fde"
                className="group inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:ring-offset-[#020817] min-h-[44px] sm:min-h-[48px] select-none whitespace-nowrap min-w-[200px] lg:min-w-[214px] bg-[#FF7A00] hover:bg-[#E86E00] active:bg-[#D46200] text-white border border-[#FFB15C]/40 hover:border-[#FFB15C]/70 shadow-[0_4px_14px_rgba(255,122,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,122,0,0.38)]"
              >
                <span>Explore FDE Track</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 3. TIER-1 FLAGSHIP PROGRAMS (CRPC, DAAP & FDE)                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <CoursesFlagshipSection />
      </section>

      {/* ========================================================================= */}
      {/* 4. SPECIALIZED TECHNOLOGY COURSES (13 COURSES CATALOG)                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <AllTechnologyCourses />
      </section>
    </div>
  );
};
