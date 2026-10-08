import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Building2,
  Users,
  Code2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HeroStoryCarousel } from '@/components/home/HeroStoryCarousel';
import { TechnologyUniverse } from '@/components/home/TechnologyUniverse';
import { FlagshipProgramsShowcase } from '@/components/home/FlagshipProgramsShowcase';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { WhatWeOfferSection } from '@/components/home/WhatWeOfferSection';
import { TechMarqueeRibbon, DomainTickerRibbon } from '@/components/ui/TechMarqueeRibbon';

export const HomePage: React.FC = () => {
  return (
    <div className="pb-10">
      {/* ========================================================================= */}
      {/* 1. HERO CAROUSEL                                                          */}
      {/* ========================================================================= */}
      <section className="w-full relative">
        <HeroStoryCarousel />
      </section>

      {/* ========================================================================= */}
      {/* 2. TECHNOLOGY LOGO TRANSITION RIBBON                                      */}
      {/*    Centered in its own deliberate space with ample breathing room         */}
      {/* ========================================================================= */}
      <div className="w-full py-7 sm:py-9 lg:py-12 relative z-10 flex items-center justify-center">
        <TechMarqueeRibbon />
      </div>

      {/* Main Editorial Content Flow */}
      <div className="space-y-16 lg:space-y-24">

      {/* ========================================================================= */}
      {/* 3. TIER-1 FLAGSHIP PROGRAMS (CRPC & DAAP)                                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FlagshipProgramsShowcase />
      </section>

      {/* ========================================================================= */}
      {/* 4. THE CONNECTED TECHNOLOGY UNIVERSE                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechnologyUniverse />
      </section>

      {/* Rhythm Divider */}
      <DomainTickerRibbon />

      {/* ========================================================================= */}
      {/* 5. WHAT WE OFFER — REFINED EDITORIAL PILLARS                              */}
      {/* ========================================================================= */}
      <WhatWeOfferSection />

      {/* ========================================================================= */}
      {/* 6. DOCUMENTED HANDS-ON PROJECTS SHOWCASE                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Real Engineering Artifacts"
          title="Documented Capstones & Deliverables"
          subtitle="No simulated quiz answers. Every student completes documented projects hosted on personal GitHub repositories."
        />

        <ProjectsVisual initialTab="daap" />
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRY SESSIONS & CAREER PREPARATION (DEEP BLUE/CYAN ATMOSPHERE)     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start relative z-10">
          {/* LEFT COLUMN: Dominant Editorial Industry Narrative (60–65%) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 relative">
            {/* Cloudariss Deep-Blue/Cyan Atmospheric Wash (No black overlay block) */}
            <div
              className="absolute -top-16 -left-16 w-[125%] h-[130%] pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(ellipse 70% 65% at 30% 40%, rgba(7, 26, 70, 0.75) 0%, rgba(4, 16, 45, 0.5) 50%, transparent 100%)',
              }}
            />
            {/* Ambient subtle cyan accent glow */}
            <div className="absolute top-0 right-10 w-64 h-64 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
              <Building2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
              <span>Direct Industry Exposure</span>
            </div>

            {/* Large Dominant Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-[1.12]">
              Virtual Company Sessions &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#19BCE8] to-white">
                Practitioner Walkthroughs
              </span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-[#E5EDF8] leading-relaxed font-normal max-w-2xl">
              Connect classroom learning with real-world engineering workflows. Students participate in technical walkthroughs and architecture discussions with working engineers and technology specialists from Visakhapatnam and online networks.
            </p>

            {/* Thin Subtle Separator */}
            <div className="h-px w-full bg-gradient-to-r from-[#00D2FF]/40 via-white/15 to-transparent" />

            {/* Two Clean Editorial Information Items (Open - No Boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] shrink-0" />
                  <Users className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>Practitioner Walkthroughs</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-[#CBD5E1] leading-relaxed pl-4 border-l-2 border-[#00D2FF]/40 font-normal">
                  Direct technical discussions and architecture deep dives with active tech leads and data specialists.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00] shadow-[0_0_8px_#FF7A00] shrink-0" />
                  <Code2 className="w-4 h-4 text-[#FF7A00] shrink-0" />
                  <span>Internship Selection Pathway</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-[#CBD5E1] leading-relaxed pl-4 border-l-2 border-[#FF7A00]/40 font-normal">
                  The top 5 performing students in each cohort earn eligibility for formal internship interview rounds with participating technology teams.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dedicated Career Preparation (Open - No Card) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:pl-8 lg:border-l lg:border-white/10 relative">
            {/* Atmospheric Indigo/Blue Glow */}
            <div
              className="absolute -top-12 -right-12 w-[130%] h-[130%] pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(12, 30, 80, 0.65) 0%, rgba(6, 18, 55, 0.4) 50%, transparent 100%)',
              }}
            />

            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF9E40] uppercase">
                <Briefcase className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                <span>Career Preparation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight leading-tight">
                Dedicated Career Preparation
              </h3>

              <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                Saturday ATS resume audits and LinkedIn positioning, followed by technical interview preparation and mock rounds.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl bg-gradient-to-r from-[#FF7A00] via-[#FF9020] to-[#E05F00] hover:from-[#FF8C20] hover:to-[#EB6800] text-white font-black text-sm tracking-wide shadow-[0_0_24px_rgba(255,122,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_0_36px_rgba(255,122,0,0.65)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0 group"
              >
                <span className="whitespace-nowrap font-bold">Explore Curricula</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CERTIFICATE VERIFICATION PREVIEW                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#091E58]/90 via-[#061540]/90 to-[#030E2B]/90 backdrop-blur-xl border border-[#19BCE8]/30 shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-white">
          <div className="flex items-center gap-4 sm:gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#0878E8] flex items-center justify-center text-white border border-[#19BCE8]/50 shrink-0 shadow-[0_0_20px_rgba(8,120,232,0.35)]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading tracking-tight">
                Verify Cloudariss Certificates
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5 font-normal">
                Instant lookup portal for employers, recruiters, and institutions verifying student completion credentials.
              </p>
            </div>
          </div>
          <div className="relative z-10 shrink-0">
            <Button
              to="/verify-certificate"
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Go to Verification Portal
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. CONNECT & ADMISSIONS DASHBOARD                                        */}
      {/* ========================================================================= */}
            {/* ========================================================================= */}
      {/* 12. FINAL CTA SECTION                                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-b from-[#081F4E]/95 via-[#06143D]/95 to-[#030C28]/95 border border-brand-blue/40 p-8 sm:p-14 text-white text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Ready for Your Next Step?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
              Build Practical Capability.{' '}
              <span className="text-brand-orange">Advance Your Career.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
              Join the upcoming cohort in Visakhapatnam or online. Transform foundational interest into verifiable engineering proficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/courses"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Programs
              </Button>
              <Button
                to="/contact"
                variant="dark"
                size="lg"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
