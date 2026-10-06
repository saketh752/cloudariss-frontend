import React from 'react';
import { Marquee } from './Marquee';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  GitHubLogo,
  PythonLogo,
  JavaLogo,
  CLogo,
  SqlLogo,
  PowerBiLogo,
  ChatGptLogo,
  GeminiLogo,
  LangChainLogo,
  RagLogo,
  AgenticAiLogo,
  ServiceNowLogo,
  LinuxLogo,
  TerraformLogo,
} from '@/components/icons/TechLogos';

interface TechMarqueeRibbonProps {
  speed?: number;
  className?: string;
}

export const TechMarqueeRibbon: React.FC<TechMarqueeRibbonProps> = ({
  speed = 38,
  className = '',
}) => {
  const techItems = [
    { name: 'AWS Cloud', logo: <AwsLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Docker', logo: <DockerLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Kubernetes', logo: <KubernetesLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Jenkins', logo: <JenkinsLogo className="w-8 h-8 sm:w-9 sm:h-9 object-contain" /> },
    { name: 'GitHub', logo: <GitHubLogo className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: 'Python', logo: <PythonLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Java', logo: <JavaLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'C / C++', logo: <CLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'PostgreSQL & SQL', logo: <SqlLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Power BI', logo: <PowerBiLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Generative AI', logo: <ChatGptLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Google Gemini', logo: <GeminiLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'LangChain', logo: <LangChainLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'RAG Systems', logo: <RagLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'Agentic AI', logo: <AgenticAiLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: 'ServiceNow', logo: <ServiceNowLogo className="h-6 sm:h-7 w-auto" /> },
    { name: 'Linux', logo: <LinuxLogo className="w-8 h-8 sm:w-9 sm:h-9 object-contain" /> },
    { name: 'Terraform', logo: <TerraformLogo className="w-8 h-8 sm:w-9 sm:h-9" /> },
  ];

  return (
    <div className={`py-3 sm:py-4 relative z-10 w-full bg-transparent flex items-center justify-center ${className}`}>
      <Marquee speed={speed} fadeEdges={true}>
        {techItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 sm:gap-3.5 group select-none shrink-0 py-1 transition-all duration-300"
          >
            {/* Standalone Floating Logo with Natural Proportions & Centered Alignment */}
            <div className="shrink-0 flex items-center justify-center min-w-[32px] sm:min-w-[36px] h-8 sm:h-9 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              {item.logo}
            </div>
            {/* Minimal High-Contrast Label Floating with the Logo */}
            <span className="whitespace-nowrap text-xs sm:text-sm font-semibold tracking-wide text-slate-200/90 group-hover:text-white transition-colors drop-shadow-xs leading-none">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export const DomainTickerRibbon: React.FC<{ speed?: number }> = ({ speed = 45 }) => {
  const domains = [
    'CLOUD ARCHITECTURE',
    'DATA ENGINEERING',
    'DEVOPS & CI/CD PIPELINES',
    'BUSINESS INTELLIGENCE (POWER BI)',
    'GENERATIVE AI & RAG',
    'AGENTIC AI WORKFLOWS',
    'SERVICENOW ITSM',
    'PORTFOLIO CAPSTONES',
    'ATS RESUME PREPARATION',
    'LIVE MOCK INTERVIEWS',
  ];

  return (
    <div className="py-3.5 bg-transparent border-y border-white/10 overflow-hidden relative z-10">
      <Marquee speed={speed} direction="right" fadeEdges={true}>
        {domains.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 shrink-0">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00D2FF] font-heading drop-shadow-xs">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] shrink-0 shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
