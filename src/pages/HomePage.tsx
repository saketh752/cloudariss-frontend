import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Building2,
  Users,
  Code2,
  PhoneCall,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { TechEcosystemVisual } from '@/components/home/TechEcosystemVisual';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { HeroCourseBanners } from '@/components/home/HeroCourseBanners';
import { WhatWeOfferSection } from '@/components/home/WhatWeOfferSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { VinayakaOfferCard } from '@/components/home/VinayakaOfferCard';
import { TechMarqueeRibbon, DomainTickerRibbon } from '@/components/ui/TechMarqueeRibbon';

export const HomePage: React.FC = () => {

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: 16:9 WIDE COMPOSITION MATCHING APPROVED REFERENCE        */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#06143D] border-b border-white/10 text-white">
        {/* Atmospheric ambient lighting matching reference */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0878e806_1px,transparent_1px),linear-gradient(to_bottom,#0878e806_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Hero Left: Editorial Content */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[#19BCE8] shadow-subtle">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase">
                  SKILLS FOR A BRIGHTER TOMORROW
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] font-heading">
                <span className="text-white drop-shadow-sm block">Learn. Build.</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19BCE8] via-[#0878E8] to-[#19BCE8] drop-shadow-[0_0_24px_rgba(25,188,232,0.35)] block">
                  Get Hired.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Practical tech learning in Cloud, Data, DevOps &amp; AI to turn your skills into real opportunities.
              </p>

              {/* Dual CTAs: Primary Explore Programs + Secondary Talk to Us */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 text-white font-semibold text-sm sm:text-base backdrop-blur-sm shadow-sm transition-all group cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-brand-cyan transition-transform group-hover:scale-110" />
                  <span>Talk to Us</span>
                </Link>
              </div>

              {/* Stat Strip */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white font-heading">2</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Flagship Programs</div>
                </div>
                <div className="sm:border-l sm:border-white/15 sm:pl-5 text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white font-heading">100%</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Online &amp; Live</div>
                </div>
                <div className="border-t sm:border-t-0 pt-3 sm:pt-0 sm:border-l sm:border-white/15 sm:pl-5 text-left">
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">Hands-on</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Projects</div>
                </div>
                <div className="border-t sm:border-t-0 pt-3 sm:pt-0 sm:border-l sm:border-white/15 sm:pl-5 text-left">
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">Career</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Focused</div>
                </div>
              </div>
            </div>

            {/* Hero Right: Horizontal Scrolling 16:9 Course Banners Showcase */}
            <div className="lg:col-span-7 w-full overflow-hidden">
              <HeroCourseBanners />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTINUOUS TECHNOLOGY SCROLLING MARQUEE */}
      {/* ========================================================================= */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 3. VINAYAKA CHAVITHI SPECIAL OFFER */}
      {/* ========================================================================= */}
      <VinayakaOfferCard />

      {/* ========================================================================= */}
      {/* 4. WHAT WE OFFER — REFINED EDITORIAL PILLARS */}
      {/* ========================================================================= */}
      <WhatWeOfferSection />

      {/* ========================================================================= */}
      {/* 5. OUR FLAGSHIP PROGRAMS: PATHWAY ARCHITECTURE */}
      {/* ========================================================================= */}
      <ProgramsSection />

      {/* ========================================================================= */}
      {/* 6. LEARNING METHODOLOGY: FIVE-STAGE PROGRESSION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Cloudariss Learning Continuum"
          subtitle="A systematic five-phase progression taking learners from conceptual foundations to verifiable engineering competence."
        />

        <FiveStageVisualJourney />
      </section>

      {/* Rhythm Divider */}
      <DomainTickerRibbon />

      {/* ========================================================================= */}
      {/* 7. CONNECTED TECHNOLOGY ECOSYSTEM ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechEcosystemVisual />
      </section>

      {/* ========================================================================= */}
      {/* 8. DOCUMENTED HANDS-ON PROJECTS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Real Artifacts"
          title="Documented Capstones & Deliverables"
          subtitle="No simulated quiz answers. Every student completes documented projects hosted on personal GitHub repositories."
        />

        <ProjectsVisual initialTab="daap" />
      </section>

      {/* ========================================================================= */}
      {/* 9. VIRTUAL COMPANY SESSIONS & VIZAG TECH INTEGRATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30">
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Virtual Company Sessions with Regional IT Corridor Teams
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Connect classroom problem solving with real-world enterprise engineering workflows. Students participate in technical walkthroughs with working engineers from companies in Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Users className="w-4 h-4 text-brand-blue" />
                    <span>Practitioner Walkthroughs</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct technical discussions and architecture deep dives with active tech leads and data specialists.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Code2 className="w-4 h-4 text-brand-orange" />
                    <span>Internship Selection Pathway</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The top 5 performing students in each cohort earn eligibility for formal internship interview rounds with participating regional technology teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-surface-blue/50 rounded-2xl p-6 border border-brand-border text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-brand-blue border border-brand-border">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Weekend Career Strategy Circuits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saturday ATS resume audits and LinkedIn positioning, followed by Sunday live mock interviews with technical panels.
              </p>
              <Button
                to="/courses"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Curricula
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CERTIFICATE VERIFICATION PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-brand-border/80 shadow-subtle p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center text-brand-blue border border-brand-border shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy">
                Verify Cloudariss Certificates
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Instant lookup portal for employers and recruiters verifying student completion credentials.
              </p>
            </div>
          </div>
          <Button
            to="/verify-certificate"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Go to Verification Portal
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border border-brand-blue/30 p-8 sm:p-14 text-white text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <span>Ready for Your Next Step?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Build Practical Capability.{' '}
              <span className="text-brand-orange">Advance Your Career.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
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
                variant="outline"
                size="lg"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
