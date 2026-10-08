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
/* WHAT WE OFFER — INTERCONNECTED 4-STAGE EDITORIAL CAREER PROGRESSION       */
/* Progression: 01 LEARN → 02 BUILD → 03 USE MODERN TECH → 04 PREPARE        */
/* Open atmospheric layout — no card containers, no pill wrappers            */
/* ========================================================================= */

interface OfferPillar {
  step: string;
  stepName: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
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
    icon: <Code2 className="w-5 h-5" />,
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
    icon: <Layers className="w-5 h-5" />,
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
    icon: <Cpu className="w-5 h-5" />,
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
    icon: <Target className="w-5 h-5" />,
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      {/* ===================================================================== */}
      {/* SECTION HEADER                                                        */}
      {/* ===================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>WHAT WE OFFER</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
          Build Skills That Move Your Career Forward.
        </h2>

        {/* Short Supporting Paragraph */}
        <p className="text-sm sm:text-base text-[#DCE5F2] leading-relaxed max-w-2xl mx-auto font-normal">
          Cloudariss combines structured learning, practical projects, modern technology,
          and dedicated career preparation into one continuous engineering pathway.
        </p>

        {/* Unified Continuous Progression Track (Desktop) */}
        <div className="pt-4 hidden md:flex items-center justify-center gap-3 text-xs font-mono font-semibold text-slate-400 select-none">
          <span className="flex items-center gap-1.5 text-[#00D2FF]">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            <span>01 LEARN</span>
          </span>
          <span className="w-8 h-px bg-white/20" />
          <span className="flex items-center gap-1.5 text-[#FF7A00]">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] shadow-[0_0_8px_#FF7A00]" />
            <span>02 BUILD</span>
          </span>
          <span className="w-8 h-px bg-white/20" />
          <span className="flex items-center gap-1.5 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_cyan]" />
            <span>03 USE MODERN TECH</span>
          </span>
          <span className="w-8 h-px bg-white/20" />
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
            <span>04 PREPARE FOR CAREER</span>
          </span>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* INTERCONNECTED 4-STAGE EDITORIAL JOURNEY                              */}
      {/* Open, unboxed columns with subtle hairline dividers                   */}
      {/* ===================================================================== */}
      <div className="relative border-y border-white/10 py-10 lg:py-14">
        {/* Subtle background atmospheric gradient across the entire journey */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#00D2FF]/5 via-transparent to-[#FF7A00]/5"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/10">
          {PILLARS.map((pillar) => {
            return (
              <div
                key={pillar.step}
                className="group relative lg:px-7 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between space-y-6 transition-all duration-300"
              >
                {/* Stage Header: Large Monospace Numeral + Icon + Phase Tag */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-white/20 group-hover:text-[#00D2FF]/50 transition-colors tracking-tighter block leading-none">
                        {pillar.step}
                      </span>
                      <span className="text-xs font-mono font-extrabold tracking-widest text-[#00D2FF] uppercase block">
                        {pillar.stepName}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[#00D2FF] bg-white/[0.04] border border-white/10 group-hover:border-[#00D2FF]/40 transition-colors shrink-0">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Stage Headline & Subtitle */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-white font-heading tracking-tight group-hover:text-[#00D2FF] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-[13px] text-[#DCE5F2]/85 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Stage Technical Focus & Motif */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  {/* Technology Tags (clean text with middots, no pill containers) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-300">
                    {pillar.techTags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        {tIdx > 0 && <span className="text-white/20">·</span>}
                        <span className="hover:text-white transition-colors">{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Progression Motif */}
                  <div className="flex items-center justify-between text-[11px] font-mono font-semibold pt-1">
                    <span className="text-[#00D2FF] flex items-center gap-1 group-hover:text-white transition-colors">
                      <span>{pillar.motif.label}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-slate-400 text-[10px]">
                      {pillar.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
