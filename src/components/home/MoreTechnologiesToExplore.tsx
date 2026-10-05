import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Sparkles, Rocket } from 'lucide-react';
import {
  JavaLogo,
  PythonLogo,
  CLogo,
  DsaLogo,
  ReactLogo,
  FullStackLogo,
  DbmsLogo,
  NetworksLogo,
  CybersecurityLogo,
  RagLogo,
  AgenticAiLogo,
  PromptEngLogo,
  DeepLearningLogo,
} from '@/components/icons/TechLogos';

export const MoreTechnologiesToExplore: React.FC = () => {
  const previewTechs = [
    { name: 'Java', logo: <JavaLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Python', logo: <PythonLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'C / C++', logo: <CLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'DSA', logo: <DsaLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Frontend', logo: <ReactLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Full Stack', logo: <FullStackLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'DBMS & SQL', logo: <DbmsLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Networks', logo: <NetworksLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Cybersecurity', logo: <CybersecurityLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Generative AI', logo: <RagLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Agentic AI', logo: <AgenticAiLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Prompt Eng.', logo: <PromptEngLogo className="w-[18px] h-[18px] object-contain" /> },
    { name: 'Deep Learning', logo: <DeepLearningLogo className="w-[18px] h-[18px] object-contain" /> },
  ];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#0A1E4A] via-[#061436] to-[#020B20] border border-[#19BCE8]/30 shadow-[0_25px_60px_rgba(2,11,32,0.85),_inset_0_1px_1px_rgba(255,255,255,0.12)] p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* Subtle technology grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-60" />

      {/* Atmospheric ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-[#00D2FF]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#0878E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,210,255,0.06),_transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071A46]/95 border border-[#00D2FF]/35 text-[#00D2FF] text-xs font-bold uppercase tracking-wider shadow-xs">
          <Compass className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>Individual Skill Courses</span>
        </div>

        {/* Relatable, Grounded Heading */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-black text-white tracking-tight font-heading leading-tight">
            Want to Build a Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#19BCE8]">Tech Foundation?</span>
          </h2>
          <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Looking to strengthen a specific technology or start from the fundamentals? Explore focused courses designed for structured learning, hands-on practice, and practical project building.
          </p>
        </div>

        {/* Compact, Visually Secondary Technology Pills with recognizable logos */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1 max-w-3xl mx-auto">
          {previewTechs.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#081B3C]/85 border border-white/12 text-slate-200 text-xs sm:text-[13px] font-semibold hover:border-[#00D2FF]/40 hover:text-white hover:bg-[#0C244F]/90 transition-all shadow-xs"
            >
              <div className="w-6 h-6 rounded-lg bg-white/95 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                {tech.logo}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Primary Individual Course CTA */}
        <div className="pt-2 flex items-center justify-center">
          <Link
            to="/courses#specialized-tracks"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:border-[#00D2FF]/50 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#00D2FF]" />
            <span>Explore Individual Skill Courses</span>
            <ArrowRight className="w-4 h-4 text-slate-300" />
          </Link>
        </div>

        {/* Subtly Promoted Flagship Bridge (CRPC & DAAP) */}
        <div className="pt-6 sm:pt-7 mt-6 sm:mt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#040E26]/95 border border-[#0878E8]/35 shadow-inner text-left">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#19BCE8] uppercase tracking-wider">
                FLAGSHIP CAREER ACCELERATORS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Looking for a complete career-focused learning path with live mentorship, labs, and interview prep?
            </p>
          </div>

          <Link
            to="/courses"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#00D2FF] hover:from-[#0768CA] hover:to-[#00B4DB] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,210,255,0.35)] hover:shadow-[0_0_28px_rgba(0,210,255,0.5)] transition-all hover:-translate-y-0.5 cursor-pointer font-heading"
          >
            <Rocket className="w-4 h-4" />
            <span>Explore CRPC &amp; DAAP</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
