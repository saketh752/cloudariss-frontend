import React from 'react';
import {
  Code2,
  Layers,
  Cpu,
  Target,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/* ========================================================================= */
/* WHAT WE OFFER — 4 REFINED EDITORIAL PILLARS                               */
/* Progression: LEARN → BUILD → USE MODERN TECH → PREPARE FOR CAREER         */
/* ========================================================================= */

interface OfferPillar {
  step: string;
  stepName: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  accentColor: 'blue' | 'orange' | 'cyan' | 'navy';
  badge: string;
  techTags: string[];
  motif: {
    label: string;
    detail: string;
  };
}

const PILLARS: OfferPillar[] = [
  {
    step: '01',
    stepName: 'LEARN',
    title: 'Technical Learning',
    subtitle: 'Structured Cohort Knowledge',
    desc: 'Rigorous live sessions breaking down cloud architecture, algorithms, distributed systems, relational databases, and systems programming from first principles.',
    icon: <Code2 className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
    accentColor: 'blue',
    badge: 'Live Online Labs',
    techTags: ['Systems Architecture', 'Relational DBs', 'Programming'],
    motif: {
      label: 'Core Foundation',
      detail: 'Theory + Interactive Labs',
    },
  },
  {
    step: '02',
    stepName: 'BUILD',
    title: 'Hands-on Projects',
    subtitle: 'Production-Grade Repositories',
    desc: 'Direct implementation on live cloud infrastructure and real business datasets with teacher-led code reviews and verified, deployment-ready GitHub capstones.',
    icon: <Layers className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
    accentColor: 'orange',
    badge: '10+ Capstone Projects',
    techTags: ['Production CI/CD', 'Real Datasets', 'GitHub Repos'],
    motif: {
      label: 'Engineering Flow',
      detail: 'Commit → Build → Deploy',
    },
  },
  {
    step: '03',
    stepName: 'USE MODERN TECH',
    title: 'Modern Technologies',
    subtitle: 'Contemporary Industry Stacks',
    desc: 'Curricula engineered around current enterprise ecosystems: AWS Cloud, Docker containers, Kubernetes orchestration, Power BI, and Agentic AI workflows.',
    icon: <Cpu className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
    accentColor: 'cyan',
    badge: 'Enterprise Tooling',
    techTags: ['AWS & Docker', 'Kubernetes', 'Power BI & GenAI'],
    motif: {
      label: 'Modern Tooling',
      detail: 'Production Environments',
    },
  },
  {
    step: '04',
    stepName: 'PREPARE FOR CAREER',
    title: 'Career Enablement',
    subtitle: 'Systematic Placement Readiness',
    desc: 'Structured Saturday resume and LinkedIn positioning workshops, direct technical interview preparation drills, and internship selection pathways for top performers.',
    icon: <Target className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
    accentColor: 'navy',
    badge: 'Placement Readiness',
    techTags: ['ATS Optimization', 'Tech Mock Rounds', 'Direct Referrals'],
    motif: {
      label: 'Career Transition',
      detail: 'Strategy + Mock Review',
    },
  },
];

export const WhatWeOfferSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      {/* ===================================================================== */}
      {/* SECTION HEADER                                                        */}
      {/* ===================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B63]/80 border border-[#19BCE8]/40 text-[#19BCE8] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#19BCE8]" />
          <span className="text-xs font-extrabold uppercase tracking-widest">
            WHAT WE OFFER
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
          Build Skills That Move Your Career Forward.
        </h2>

        {/* Short Supporting Paragraph */}
        <p className="text-sm sm:text-base text-[#DCE5F2] leading-relaxed max-w-2xl mx-auto font-normal">
          Cloudariss combines structured learning, practical projects, modern technology,
          and dedicated career preparation into one cohesive pathway.
        </p>

        {/* Subtle Progression Bar (Visual Connection: LEARN -> BUILD -> USE MODERN TECH -> PREPARE FOR CAREER) */}
        <div className="pt-3 hidden sm:flex items-center justify-center gap-2 sm:gap-3 text-[11px] font-mono font-bold text-[#B4C3DB] select-none">
          <span className="flex items-center gap-1 text-[#19BCE8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19BCE8]" />
            <span>01 LEARN</span>
          </span>
          <ArrowRight className="w-3 h-3 text-slate-500" />
          <span className="flex items-center gap-1 text-brand-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span>02 BUILD</span>
          </span>
          <ArrowRight className="w-3 h-3 text-slate-500" />
          <span className="flex items-center gap-1 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
            <span>03 USE MODERN TECH</span>
          </span>
          <ArrowRight className="w-3 h-3 text-slate-500" />
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>04 PREPARE FOR CAREER</span>
          </span>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2 × 2 EDITORIAL CARDS COMPOSITION                                     */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PILLARS.map((pillar) => {
          const borderHoverStyles = {
            blue: 'hover:border-[#0878E8]/70 group-hover:border-t-[#0878E8]',
            orange: 'hover:border-brand-orange/70 group-hover:border-t-brand-orange',
            cyan: 'hover:border-[#19BCE8]/70 group-hover:border-t-[#19BCE8]',
            navy: 'hover:border-cyan-400/70 group-hover:border-t-cyan-400',
          }[pillar.accentColor];

          const lineAccent = {
            blue: 'bg-[#0878E8]',
            orange: 'bg-brand-orange',
            cyan: 'bg-[#19BCE8]',
            navy: 'bg-cyan-400',
          }[pillar.accentColor];

          const iconContainerStyles = {
            blue: 'bg-[#05143A] border-[#0878E8]/40 text-[#19BCE8]',
            orange: 'bg-[#05143A] border-brand-orange/40 text-brand-orange',
            cyan: 'bg-[#05143A] border-[#19BCE8]/40 text-cyan-300',
            navy: 'bg-[#05143A] border-cyan-400/40 text-cyan-300',
          }[pillar.accentColor];

          return (
            <div
              key={pillar.step}
              className={`group relative rounded-2xl sm:rounded-3xl bg-[#071B63]/75 backdrop-blur-xl border border-[#19BCE8]/25 p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden border-t-2 shadow-xl ${borderHoverStyles}`}
            >
              {/* Top Row: Numbered Identifier + Icon + Badge */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-xs ${iconContainerStyles}`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#B4C3DB] block uppercase">
                      PILLAR {pillar.step}
                    </span>
                    <span className="text-[11px] font-mono font-extrabold text-[#19BCE8]">
                      {pillar.stepName}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#05143A] text-[#19BCE8] border border-[#19BCE8]/30 shrink-0">
                  {pillar.badge}
                </span>
              </div>

              {/* Main Content Area: Headings and Supporting Text */}
              <div className="space-y-2.5 relative z-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#AFC0D8] block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight mt-0.5 group-hover:text-[#19BCE8] transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#DCE5F2] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              {/* Subtle Technical Motif / Detail Bar */}
              <div className="pt-4 border-t border-[#19BCE8]/20 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {pillar.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#05143A]/90 text-slate-200 text-[10px] font-mono font-bold border border-[#19BCE8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle Progression Direction Indicator */}
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#19BCE8] group-hover:text-white transition-colors shrink-0">
                  <span>{pillar.motif.label}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Interactive Accent Line animation on bottom */}
              <div
                className={`absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 ease-out ${lineAccent}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
