import React from 'react';
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
import { MoreTechnologiesToExplore } from '@/components/home/MoreTechnologiesToExplore';
import { AnimatedLearningJourney } from '@/components/home/AnimatedLearningJourney';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { WhatWeOfferSection } from '@/components/home/WhatWeOfferSection';
import { VinayakaOfferCard } from '@/components/home/VinayakaOfferCard';
import { TechMarqueeRibbon, DomainTickerRibbon } from '@/components/ui/TechMarqueeRibbon';

export const HomePage: React.FC = () => {
  return (
    <div className="pb-6">
      {/* ========================================================================= */}
      {/* 1. SEAMLESS HERO CAROUSEL + TECHNOLOGY MARQUEE (NO SPLIT GAP)             */}
      {/* ========================================================================= */}
      <section className="w-full relative">
        <HeroStoryCarousel />
        <TechMarqueeRibbon />
      </section>

      {/* Main Content Flow with Balanced Vertical Cadence */}
      <div className="space-y-14 lg:space-y-20 mt-6 sm:mt-8 lg:mt-10">
        {/* ========================================================================= */}
        {/* 2. VINAYAKA CHAVITHI SPECIAL OFFER CARD                                   */}
        {/* ========================================================================= */}
        <VinayakaOfferCard />

      {/* ========================================================================= */}
      {/* 4. THE INTERACTIVE TECHNOLOGY UNIVERSE (TOOLKIT-INSPIRED)                 */}
      {/*    Selecting a tech activates focus, animates relations, dims others      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechnologyUniverse />
      </section>

      {/* ========================================================================= */}
      {/* 5. TIER-1 FLAGSHIP PROGRAMS (CRPC & DAAP) — LEVEL-2 VISUAL HIERARCHY       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FlagshipProgramsShowcase />
      </section>

      {/* ========================================================================= */}
      {/* 6. SECONDARY OFFERINGS: MORE TECHNOLOGIES TO EXPLORE (LEVEL-4 DISCOVERY)  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MoreTechnologiesToExplore />
      </section>

      {/* Rhythm Divider */}
      <DomainTickerRibbon />

      {/* ========================================================================= */}
      {/* 7. METHODOLOGY: ANIMATED 5-PHASE LEARNING JOURNEY                         */}
      {/*    LEARN → PRACTICE → BUILD → PREPARE → CAREER (Strictly Truthful)        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedLearningJourney />
      </section>

      {/* ========================================================================= */}
      {/* 8. WHAT WE OFFER — REFINED EDITORIAL PILLARS                              */}
      {/* ========================================================================= */}
      <WhatWeOfferSection />

      {/* ========================================================================= */}
      {/* 9. DOCUMENTED HANDS-ON PROJECTS SHOWCASE                                  */}
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
      {/* 10. INDUSTRY SESSIONS & CAREER PREPARATION                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-brand-border shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30">
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Exposure
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Virtual Company Sessions &amp; Practitioner Walkthroughs
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Connect classroom learning with real-world engineering workflows. Students participate in technical walkthroughs and architecture discussions with working engineers and technology specialists from Visakhapatnam and online networks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Users className="w-4 h-4 text-brand-blue" />
                    <span>Practitioner Walkthroughs</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct technical discussions and architecture deep dives with active tech leads and data specialists.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Code2 className="w-4 h-4 text-brand-orange" />
                    <span>Internship Selection Pathway</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The top 5 performing students in each cohort earn eligibility for formal internship interview rounds with participating technology teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-surface-blue/50 rounded-2xl p-6 border border-brand-border text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mx-auto text-brand-blue border border-brand-border">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Dedicated Career Preparation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saturday ATS resume audits and LinkedIn positioning, followed by technical interview preparation and mock rounds.
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
      {/* 11. CERTIFICATE VERIFICATION PREVIEW                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-brand-border shadow-subtle p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-surface-blue flex items-center justify-center text-brand-blue border border-brand-border shrink-0 shadow-2xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy font-heading">
                Verify Cloudariss Certificates
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Instant lookup portal for employers, recruiters, and institutions verifying student completion credentials.
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
      {/* 12. CONNECT & ADMISSIONS DASHBOARD                                        */}
      {/* ========================================================================= */}
            {/* ========================================================================= */}
      {/* 12. FINAL CTA SECTION                                                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-brand-dark-section border border-brand-blue/30 p-8 sm:p-14 text-white text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
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
    </div>
  );
};
