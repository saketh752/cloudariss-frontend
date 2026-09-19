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
    badge: 'Industry Ecosystems',
    techTags: ['AWS Cloud', 'Docker & K8s', 'Agentic AI'],
    motif: {
      label: 'Enterprise Tooling',
      detail: 'Current Production Stacks',
    },
  },
  {
    step: '04',
    stepName: 'PREPARE FOR CAREER',
    title: 'Career Preparation',
    subtitle: 'Strategic Placement Readiness',
    desc: 'Dedicated weekend mock interview circuits, ATS resume optimization, project defense practice, and 1-on-1 strategic mentorship to build genuine interview confidence.',
    icon: <Target className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
    accentColor: 'navy',
    badge: 'Weekend Circuits',
    techTags: ['ATS Optimization', 'Mock Interviews', 'Portfolio Defense'],
    motif: {
      label: 'Outcome Focus',
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/20 text-brand-blue shadow-subtle">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span className="text-xs font-extrabold uppercase tracking-widest">
            WHAT WE OFFER
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-heading leading-tight">
          Build Skills That Move Your Career Forward.
        </h2>

        {/* Short Supporting Paragraph */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Cloudariss combines structured learning, practical projects, modern technology,
          and dedicated career preparation into one cohesive pathway.
        </p>

        {/* Subtle Progression Bar (Visual Connection: LEARN -> BUILD -> USE MODERN TECH -> PREPARE FOR CAREER) */}
        <div className="pt-3 hidden sm:flex items-center justify-center gap-2 sm:gap-3 text-[11px] font-mono font-bold text-slate-500 select-none">
          <span className="flex items-center gap-1 text-brand-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            <span>01 LEARN</span>
          </span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="flex items-center gap-1 text-brand-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span>02 BUILD</span>
          </span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="flex items-center gap-1 text-[#0878e8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19BCE8]" />
            <span>03 USE MODERN TECH</span>
          </span>
          <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="flex items-center gap-1 text-brand-navy">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
            <span>04 PREPARE FOR CAREER</span>
          </span>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2 × 2 EDITORIAL CARDS COMPOSITION                                     */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PILLARS.map((pillar) => {
          // Dynamic accent styles for border, icon, and badges
          const borderHoverStyles = {
            blue: 'hover:border-brand-blue/60 group-hover:border-t-brand-blue',
            orange: 'hover:border-brand-orange/60 group-hover:border-t-brand-orange',
            cyan: 'hover:border-brand-cyan/60 group-hover:border-t-brand-cyan',
            navy: 'hover:border-brand-navy/60 group-hover:border-t-brand-navy',
          }[pillar.accentColor];

          const lineAccent = {
            blue: 'bg-brand-blue',
            orange: 'bg-brand-orange',
            cyan: 'bg-brand-cyan',
            navy: 'bg-brand-navy',
          }[pillar.accentColor];

          const iconContainerStyles = {
            blue: 'bg-brand-surface-blue border-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-md group-hover:shadow-blue-500/20',
            orange: 'bg-orange-50 border-brand-orange/25 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange group-hover:shadow-md group-hover:shadow-orange-500/20',
            cyan: 'bg-cyan-50 border-brand-cyan/30 text-[#0878E8] group-hover:bg-[#0878E8] group-hover:text-white group-hover:border-[#0878E8] group-hover:shadow-md group-hover:shadow-blue-500/20',
            navy: 'bg-slate-100 border-brand-navy/20 text-brand-navy group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy group-hover:shadow-md group-hover:shadow-navy-500/20',
          }[pillar.accentColor];

          return (
            <div
              key={pillar.step}
              className={`group relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-subtle hover:shadow-xl hover:shadow-brand-blue/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden border-t-2 ${borderHoverStyles}`}
            >
              {/* Subtle top corner gradient ambiance on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-surface-blue/50 via-transparent to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Row: Numbered Identifier + Icon + Badge */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-sm ${iconContainerStyles}`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                      PILLAR {pillar.step}
                    </span>
                    <span className="text-[11px] font-mono font-extrabold text-brand-blue">
                      {pillar.stepName}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 shrink-0">
                  {pillar.badge}
                </span>
              </div>

              {/* Main Content Area: Headings and Supporting Text */}
              <div className="space-y-2.5 relative z-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-navy font-heading tracking-tight mt-0.5 group-hover:text-brand-blue transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              {/* Subtle Technical Motif / Detail Bar */}
              <div className="pt-4 border-t border-slate-100 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {pillar.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-brand-surface text-slate-600 text-[10px] font-mono font-semibold border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle Progression Direction Indicator */}
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-400 group-hover:text-brand-blue transition-colors shrink-0">
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
