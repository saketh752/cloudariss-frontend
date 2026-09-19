import React, { useState } from 'react';
import {
  GraduationCap,
  Code2,
  Layers,
  Briefcase,
  Trophy,
  CheckCircle2,
} from 'lucide-react';

interface JourneyStage {
  num: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  accentColor: string;
}

export const FiveStageVisualJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: JourneyStage[] = [
    {
      num: '01',
      step: 'LEARN',
      title: 'Structured Core Learning',
      subtitle: 'Conceptual Mastery & Fundamentals',
      description:
        'Build deep theoretical grounding and command-line familiarity through live instructor-led sessions, architectural walkthroughs, and guided exercises.',
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: ['Live interactive sessions', 'Architectural fundamentals', 'Instructor Q&A'],
      accentColor: 'from-brand-blue to-brand-blue-hover',
    },
    {
      num: '02',
      step: 'PRACTICE',
      title: 'Daily Hands-on Labs',
      subtitle: 'Code Authoring & Terminal Fluency',
      description:
        'Reinforce each concept immediately with rigorous daily assignments, terminal execution, database queries, and architectural debugging challenges.',
      icon: <Code2 className="w-6 h-6" />,
      highlights: ['Guided laboratory tasks', 'Code debugging drills', 'Git branch management'],
      accentColor: 'from-brand-blue to-brand-cyan',
    },
    {
      num: '03',
      step: 'BUILD',
      title: 'Real-World Production Projects',
      subtitle: 'Verifiable Portfolio Artifacts',
      description:
        'Develop production-grade deployments, automated CI/CD pipelines, and multi-agent analytics workflows designed around real enterprise constraints.',
      icon: <Layers className="w-6 h-6" />,
      highlights: ['Multi-tier cloud apps', 'End-to-end agentic pipelines', 'GitHub portfolio code'],
      accentColor: 'from-brand-cyan to-brand-blue',
    },
    {
      num: '04',
      step: 'PREPARE',
      title: 'Dedicated Career Circuit',
      subtitle: 'Weekend Strategy & Mocks',
      description:
        'Master the hiring process through weekly Saturday ATS resume optimization, LinkedIn profile branding, and Sunday technical coding mocks and group discussions.',
      icon: <Briefcase className="w-6 h-6" />,
      highlights: ['ATS resume tuning', 'Technical mock interviews', 'Live portfolio defense'],
      accentColor: 'from-brand-orange to-amber-500',
    },
    {
      num: '05',
      step: 'GET HIRED',
      title: 'Interview & Role Transition',
      subtitle: 'Confidence in Technical Rounds',
      description:
        'Enter industry technical interviews with a demonstrated portfolio of functional systems, articulate technical defense, and proven problem-solving readiness.',
      icon: <Trophy className="w-6 h-6" />,
      highlights: ['Interview round readiness', 'Salary discussion guidance', 'Alumni community access'],
      accentColor: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Connected Horizontal Progression */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative pt-4 pb-2">
        {/* Continuous Connecting Line Behind Nodes */}
        <div className="absolute top-14 left-[8%] right-[8%] h-1 bg-gradient-to-r from-brand-blue via-brand-cyan via-brand-orange to-emerald-500 rounded-full z-0 opacity-40" />

        {/* 5 Progression Columns */}
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 cursor-pointer group ${
                  isActive
                    ? 'bg-white shadow-card border border-brand-blue scale-[1.03]'
                    : 'hover:bg-white/70 border border-transparent hover:border-brand-border'
                }`}
              >
                {/* Node Circle */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 shadow-subtle ${
                    isActive
                      ? 'bg-gradient-to-br ' + stg.accentColor + ' text-white scale-110 shadow-lg ring-4 ring-brand-surface-blue'
                      : 'bg-white text-brand-navy border-2 border-brand-border group-hover:border-brand-blue/60 group-hover:text-brand-blue'
                  }`}
                >
                  {stg.icon}
                </div>

                {/* Number & Step Tag */}
                <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-0.5">
                  STAGE {stg.num}
                </span>

                <span
                  className={`text-xs font-black tracking-widest uppercase px-2 py-0.5 rounded-full mb-2 ${
                    isActive
                      ? 'bg-brand-blue text-white'
                      : 'bg-brand-surface-light text-brand-navy border border-brand-border'
                  }`}
                >
                  {stg.step}
                </span>

                <h4 className="text-sm font-extrabold text-brand-navy font-heading leading-tight mb-1">
                  {stg.title}
                </h4>

                <p className="text-[11px] text-slate-500 font-medium line-clamp-2">
                  {stg.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET VIEW: Connected Vertical Timeline */}
      {/* ========================================================================= */}
      <div className="lg:hidden space-y-4 relative">
        <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan via-brand-orange to-emerald-500 z-0 opacity-40" />

        {stages.map((stg, idx) => {
          const isActive = activeStage === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`relative z-10 flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white border-brand-blue shadow-card'
                  : 'bg-white/80 border-brand-border hover:bg-white'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-subtle ${
                  isActive
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-surface-light text-brand-navy border border-brand-border'
                }`}
              >
                {stg.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[10px] font-black text-slate-400 tracking-wider">
                    STAGE {stg.num}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {stg.step}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-brand-navy font-heading leading-snug">
                  {stg.title}
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                  {stg.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* ACTIVE STAGE HIGHLIGHT DETAIL (DESKTOP) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block p-6 rounded-2xl bg-white border border-brand-border shadow-subtle">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-brand-blue tracking-wider uppercase">
                STAGE {stages[activeStage].num} IN-DEPTH:
              </span>
              <span className="text-sm font-bold text-brand-navy font-heading">
                {stages[activeStage].title} ({stages[activeStage].subtitle})
              </span>
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {stages[activeStage].description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {stages[activeStage].highlights.map((item, hIdx) => (
              <div
                key={hIdx}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-surface-light border border-brand-border/80 text-xs font-semibold text-brand-navy"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
