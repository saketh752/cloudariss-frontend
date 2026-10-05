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
    { name: 'Java', logo: <JavaLogo className="w-4 h-4 object-contain" />, border: 'border-[#ED8B00]/40 text-[#F59E0B] bg-[#1C0E07]/80' },
    { name: 'Python', logo: <PythonLogo className="w-4 h-4 object-contain" />, border: 'border-[#38BDF8]/40 text-[#38BDF8] bg-[#081B34]/80' },
    { name: 'C / C++', logo: <CLogo className="w-4 h-4 object-contain" />, border: 'border-[#60A5FA]/40 text-[#60A5FA] bg-[#0A1838]/80' },
    { name: 'DSA', logo: <DsaLogo className="w-4 h-4 object-contain" />, border: 'border-[#C084FC]/40 text-[#C084FC] bg-[#180C33]/80' },
    { name: 'React & Frontend', logo: <ReactLogo className="w-4 h-4 object-contain" />, border: 'border-[#00D2FF]/40 text-[#00D2FF] bg-[#071F3B]/80' },
    { name: 'Full Stack', logo: <FullStackLogo className="w-4 h-4 object-contain" />, border: 'border-[#10B981]/40 text-[#34D399] bg-[#08222B]/80' },
    { name: 'DBMS & SQL', logo: <DbmsLogo className="w-4 h-4 object-contain" />, border: 'border-[#3B82F6]/40 text-[#60A5FA] bg-[#081B3C]/80' },
    { name: 'Networks', logo: <NetworksLogo className="w-4 h-4 object-contain" />, border: 'border-[#6366F1]/40 text-[#818CF8] bg-[#0E1740]/80' },
    { name: 'Cybersecurity', logo: <CybersecurityLogo className="w-4 h-4 object-contain" />, border: 'border-[#F43F5E]/40 text-[#FB7185] bg-[#260B18]/80' },
    { name: 'Generative AI', logo: <RagLogo className="w-4 h-4 object-contain" />, border: 'border-[#8B5CF6]/40 text-[#A78BFA] bg-[#1A0D38]/80' },
    { name: 'Agentic AI', logo: <AgenticAiLogo className="w-4 h-4 object-contain" />, border: 'border-[#06B6D4]/40 text-[#22D3EE] bg-[#0A203E]/80' },
    { name: 'Prompt Eng.', logo: <PromptEngLogo className="w-4 h-4 object-contain" />, border: 'border-[#D946EF]/40 text-[#E879F9] bg-[#220A32]/80' },
    { name: 'Deep Learning', logo: <DeepLearningLogo className="w-4 h-4 object-contain" />, border: 'border-[#6366F1]/40 text-[#818CF8] bg-[#180E3C]/80' },
  ];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#091E58]/85 via-[#061540]/90 to-[#030E2B]/95 backdrop-blur-xl border border-[#19BCE8]/30 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B63]/80 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider shadow-xs">
          <Compass className="w-4 h-4 text-[#00D2FF]" />
          <span>Specialized Learning Tracks</span>
        </div>

        {/* Heading & Copy */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading">
            Looking to Master Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Technologies?</span>
          </h2>
          <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Want to go beyond our flagship accelerators? Explore our catalog of 13+ specialized courses in core programming, web engineering, systems architecture, cybersecurity, and modern AI.
          </p>
        </div>

        {/* Visual Technology Badges Pill Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 max-w-3xl mx-auto">
          {previewTechs.map((tech) => (
            <div
              key={tech.name}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border ${tech.border} shadow-xs transition-transform hover:scale-105`}
            >
              <div className="w-5 h-5 rounded-md bg-white/90 p-0.5 flex items-center justify-center shrink-0">
                {tech.logo}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Primary Discovery CTA */}
        <div className="pt-4 flex items-center justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0878E8] to-[#00D2FF] hover:from-[#0768CA] hover:to-[#00B4DB] text-white font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,210,255,0.4)] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] transition-all hover:-translate-y-0.5 cursor-pointer font-heading"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Explore All 13+ Specialized Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
