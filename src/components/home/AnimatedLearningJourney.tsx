import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Layers,
  Briefcase,
  Trophy,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { SectionAtmosphere } from '@/components/layout/SectionAtmosphere';

interface JourneyStage {
  num: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  deliverable: string;
  accentColor: string;
}

export const AnimatedLearningJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: JourneyStage[] = [
    {
      num: '01',
      step: 'LEARN',
      title: 'Structured Core Foundations',
      subtitle: 'Conceptual Mastery & Live Sessions',
      description:
        'Build deep theoretical grounding and command-line familiarity through live instructor-led sessions, architectural walkthroughs, and guided discussions.',
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: [
        'Live interactive instructor-led classes',
        'System architecture fundamentals',
        'Real-time Q&A and doubt resolution',
      ],
      deliverable: 'Core conceptual clarity & environment setup',
      accentColor: '#0878E8',
    },
    {
      num: '02',
      step: 'PRACTICE',
      title: 'Daily Hands-on Labs',
      subtitle: 'Code Authoring & Terminal Drills',
      description:
        'Reinforce every concept immediately through structured laboratory tasks, terminal commands, database query writing, and guided debugging exercises.',
      icon: <Code2 className="w-6 h-6" />,
      highlights: [
        'Guided laboratory assignments',
        'Code debugging drills',
        'Git version control & branch management',
      ],
      deliverable: 'Functional lab scripts & terminal fluency',
      accentColor: '#19BCE8',
    },
    {
      num: '03',
      step: 'BUILD',
      title: 'Real-World Capstone Projects',
      subtitle: 'Documented Portfolio Artifacts',
      description:
        'Develop production-grade systems, automated cloud pipelines, and data analytics dashboards designed around realistic operational constraints.',
      icon: <Layers className="w-6 h-6" />,
      highlights: [
        'End-to-end multi-tier architectures',
        'Interactive dashboards & analytics workflows',
        'Public GitHub repositories with documented READMEs',
      ],
      deliverable: 'Documented portfolio capstones on GitHub',
      accentColor: '#FF7A00',
    },
    {
      num: '04',
      step: 'PREPARE',
      title: 'Technical Career Readiness',
      subtitle: 'Resume Refinement & Mock Preparation',
      description:
        'Prepare thoroughly for hiring processes with ATS resume optimization, LinkedIn profile review, technical mock interviews, and project defense walkthroughs.',
      icon: <Briefcase className="w-6 h-6" />,
      highlights: [
        'ATS resume review and optimization',
        'Technical interview practice rounds',
        'Live project defense and architecture presentation',
      ],
      deliverable: 'Polished ATS resume & interview-ready technical articulation',
      accentColor: '#F59E0B',
    },
    {
      num: '05',
      step: 'CAREER',
      title: 'Professional Transition',
      subtitle: 'Technical Confidence in Rounds',
      description:
        'Approach industry technical evaluations with a demonstrated portfolio of functional systems, verifiable problem-solving skills, and genuine engineering confidence.',
      icon: <Trophy className="w-6 h-6" />,
      highlights: [
        'Confidence in technical screening rounds',
        'Portfolio-backed architectural discussions',
        'Continuous mentor support & guidance',
      ],
      deliverable: 'Demonstrated technical competence for career opportunities',
      accentColor: '#10B981',
    },
  ];

  const currentStage = stages[activeStage];

  return (
    <SectionAtmosphere variant="programs">
      <section className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B63]/80 border border-[#19BCE8]/40 text-[#19BCE8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-4 h-4 text-[#19BCE8]" />
          <span>The Cloudariss Learning Continuum</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading">
          A Transparent Five-Phase Career Pathway
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          A systematic progression taking learners from conceptual foundations to verifiable engineering competence through documented hands-on artifacts.
        </p>
      </div>

      {/* Progress Metric Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#071B63]/70 backdrop-blur-md border border-[#19BCE8]/20 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#19BCE8] animate-pulse" />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Active Phase:
          </span>
          <span className="text-xs font-extrabold text-white">
            Phase {activeStage + 1} of {stages.length} — {currentStage.step} ({currentStage.title})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-32 sm:w-48 h-2 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-emerald-500"
              animate={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span className="text-xs font-mono font-extrabold text-[#19BCE8]">
            {Math.round(((activeStage + 1) / stages.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Connected 5-Stage Stepper Buttons (Desktop & Tablet) */}
      <div className="relative pt-4 pb-2">
        {/* Track Line */}
        <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-1 bg-white/10 rounded-full z-0 pointer-events-none" />

        {/* Dynamic Highlight Line */}
        <div
          className="hidden lg:block absolute top-12 left-[8%] h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-emerald-500 rounded-full z-0 transition-all duration-500 pointer-events-none"
          style={{ width: `${(activeStage / (stages.length - 1)) * 84}%` }}
        />

        {/* 5 Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            const isPassed = idx < activeStage;

            return (
              <button
                key={stg.num}
                onClick={() => setActiveStage(idx)}
                className={`relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 cursor-pointer select-none border text-left ${
                  isActive
                    ? 'bg-[#0D2B75] border-2 border-[#19BCE8] shadow-xl scale-[1.02] ring-4 ring-[#19BCE8]/20'
                    : isPassed
                    ? 'bg-[#071B63]/80 border-[#19BCE8]/30 text-slate-200 hover:border-[#19BCE8]/60'
                    : 'bg-[#051336]/80 border-white/10 text-slate-300 hover:border-[#19BCE8]/40'
                }`}
              >
                {/* Node Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform ${
                    isActive
                      ? 'bg-[#0878E8] text-white scale-110 shadow-md'
                      : isPassed
                      ? 'bg-[#05143A] text-emerald-400 border border-emerald-500/30'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  {stg.icon}
                </div>

                {/* Step Identifier */}
                <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400">
                  PHASE {stg.num}
                </div>

                {/* Step Name */}
                <div
                  className={`text-sm font-extrabold mt-0.5 tracking-tight ${
                    isActive ? 'text-[#19BCE8]' : 'text-white'
                  }`}
                >
                  {stg.step}
                </div>

                <div className="text-[11px] text-slate-400 font-medium line-clamp-1 mt-1">
                  {stg.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanded Active Phase Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.num}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="bg-[#071B63]/85 backdrop-blur-xl rounded-3xl border border-[#19BCE8]/30 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden text-white"
        >
          {/* Top colored strip */}
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: currentStage.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05143A] text-[#19BCE8] border border-[#19BCE8]/30 text-xs font-mono font-bold">
                <span>PHASE {currentStage.num} OF 05</span>
                <span>•</span>
                <span className="text-[#19BCE8]">{currentStage.step}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
                {currentStage.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {currentStage.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Phase Focus &amp; Activities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStage.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#05143A]/80 border border-[#19BCE8]/20 text-xs text-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverable Showcase */}
            <div className="lg:col-span-5 bg-[#05143A]/90 rounded-2xl p-6 border border-[#19BCE8]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0878E8] shadow-xs flex items-center justify-center text-white border border-[#19BCE8]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-[#19BCE8] uppercase tracking-wider">
                  Verified Outcome Deliverable
                </div>
                <div className="text-base font-bold text-white mt-1">
                  {currentStage.deliverable}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Cloudariss emphasizes verifiable capability over passive attendance. Each phase culminates in observable engineering readiness.
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs font-bold text-slate-400">Next Phase:</span>
                <button
                  onClick={() => setActiveStage((activeStage + 1) % stages.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#19BCE8] hover:text-white cursor-pointer"
                >
                  <span>
                    {activeStage === stages.length - 1 ? 'Back to Start' : 'Proceed to Next Phase'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  </SectionAtmosphere>
  );
};
