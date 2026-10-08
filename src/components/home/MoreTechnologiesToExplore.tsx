import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
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
    <div className="relative py-6 sm:py-8">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-[#00D2FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071A46]/80 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>Individual Skill Courses</span>
        </div>

        {/* Relatable, Grounded Heading */}
        <div className="space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading leading-tight">
            Want to Build a Stronger <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#19BCE8]">Tech Foundation?</span>
          </h2>
          <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Looking to strengthen a specific technology or start from the fundamentals? Explore focused courses designed for structured learning, hands-on practice, and practical project building.
          </p>
        </div>

        {/* Open Technology Directory Grid with recognizable logos */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1 max-w-3xl mx-auto">
          {previewTechs.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#081B3C]/70 border border-white/10 text-slate-200 text-xs sm:text-[13px] font-semibold hover:border-[#00D2FF]/40 hover:text-white hover:bg-[#0C244F]/85 transition-all"
            >
              <div className="w-6 h-6 rounded-lg bg-white/95 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                {tech.logo}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Primary Clean Action CTA */}
        <div className="pt-2 flex items-center justify-center">
          <Link
            to="/courses#specialized-tracks"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-[#00D2FF] via-[#0878E8] to-[#0052CC] hover:from-[#00E5FF] hover:via-[#0A84FF] hover:to-[#0060E6] text-white font-black text-xs sm:text-sm tracking-wide shadow-[0_0_24px_rgba(0,180,255,0.4)] hover:shadow-[0_0_32px_rgba(0,210,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#E5F9FF]" />
            <span>Explore Individual Skill Courses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};
