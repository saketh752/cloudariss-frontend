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
      {/* 2. TECHNOLOGY LOGO TRANSITION BAND                                        */}
      {/*    A distinct band: hairline-defined, with its own space above and below  */}
      {/* ========================================================================= */}
      <div data-tech-ribbon className="relative w-full mt-8 sm:mt-10 lg:mt-12 py-5 sm:py-6 lg:py-7">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <TechMarqueeRibbon />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* Main Editorial Content Flow — generous gap so the band never touches the Flagship heading */}
      <div className="mt-20 sm:mt-24 lg:mt-32 space-y-20 lg:space-y-28">

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
      {/* 8. CERTIFICATE VERIFICATION — SLIM TRUST BANNER                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-y border-white/10 py-7 sm:py-8">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0878E8]/12 via-transparent to-[#00D2FF]/8" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 text-white">
            <div className="flex items-start sm:items-center gap-4">
              <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 text-[#00D2FF] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <h3 className="text-lg font-bold text-white font-heading tracking-tight">
                  Verify Cloudariss Certificates
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-0.5 font-normal max-w-2xl">
                  Instant lookup portal for employers, recruiters, and institutions verifying student completion credentials.
                </p>
              </div>
            </div>
            <div className="shrink-0">
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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA — ATMOSPHERIC CONVERSION MOMENT                              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-white text-center py-16 sm:py-24">
          {/* Atmosphere participates directly — soft cyan and warm horizon glows, hairline boundaries */}
          <div aria-hidden="true" className="absolute top-0 right-[18%] w-[26rem] h-[26rem] bg-[#0878E8]/20 rounded-full blur-[120px] pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-[18%] w-[26rem] h-[22rem] bg-[#FF7A00]/15 rounded-full blur-[130px] pointer-events-none" />
          <div aria-hidden="true" className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[#00D2FF]/40 to-transparent" />
          <div aria-hidden="true" className="absolute inset-x-[8%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/35 to-transparent" />

          <div className="relative space-y-5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Your Next Step?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-[1.08]">
              Build Practical Capability.{' '}
              <span className="text-brand-orange">Advance Your Career.</span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
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
