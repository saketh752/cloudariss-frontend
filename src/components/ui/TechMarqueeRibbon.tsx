import React from 'react';
import { Marquee } from './Marquee';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  GitHubLogo,
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
  ChatGptLogo,
  GeminiLogo,
  LangChainLogo,
  RagLogo,
  AgenticAiLogo,
  ServiceNowLogo,
} from '@/components/icons/TechLogos';

interface TechMarqueeRibbonProps {
  variant?: 'subtle' | 'dark';
  speed?: number;
}

export const TechMarqueeRibbon: React.FC<TechMarqueeRibbonProps> = ({
  variant = 'dark',
  speed = 40,
}) => {
  const techItems = [
    { name: 'AWS Cloud', logo: <AwsLogo className="w-4.5 h-4.5" /> },
    { name: 'Docker', logo: <DockerLogo className="w-4.5 h-4.5" /> },
    { name: 'Kubernetes', logo: <KubernetesLogo className="w-4.5 h-4.5" /> },
    { name: 'Jenkins CI/CD', logo: <JenkinsLogo className="w-4.5 h-4.5" /> },
    { name: 'GitHub Actions', logo: <GitHubLogo className="w-4.5 h-4.5" /> },
    { name: 'Python', logo: <PythonLogo className="w-4.5 h-4.5" /> },
    { name: 'PostgreSQL & SQL', logo: <SqlLogo className="w-4.5 h-4.5" /> },
    { name: 'Power BI', logo: <PowerBiLogo className="w-4.5 h-4.5" /> },
    { name: 'Generative AI (LLMs)', logo: <ChatGptLogo className="w-4.5 h-4.5" /> },
    { name: 'Google Gemini', logo: <GeminiLogo className="w-4.5 h-4.5" /> },
    { name: 'LangChain & Agents', logo: <LangChainLogo className="w-4.5 h-4.5" /> },
    { name: 'RAG Architectures', logo: <RagLogo className="w-4.5 h-4.5" /> },
    { name: 'Agentic AI', logo: <AgenticAiLogo className="w-4.5 h-4.5" /> },
    { name: 'ServiceNow ITSM', logo: <ServiceNowLogo className="w-4.5 h-4.5" /> },
  ];

  const isDark = variant === 'dark';

  return (
    <div
      className={`py-3 mt-2 sm:mt-4 transition-colors relative z-10 w-full bg-transparent ${
        isDark ? 'text-white' : 'text-brand-navy'
      }`}
    >
      <Marquee speed={speed} fadeEdges={!isDark}>
        {techItems.map((item, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all hover:scale-105 ${
              isDark
                ? 'bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#19BCE8] text-white backdrop-blur-md shadow-xs'
                : 'bg-brand-surface-blue/50 border border-brand-border/60 text-brand-navy hover:text-brand-blue'
            }`}
          >
            {/* High-Contrast White Background Tile for Every Logo to Prevent Dark-Blue Blending */}
            <div className="w-6 h-6 rounded-lg bg-white/95 border border-white/80 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
              {item.logo}
            </div>
            <span className="whitespace-nowrap tracking-wide text-white font-extrabold text-xs">{item.name}</span>
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
    <div className="py-3 bg-[#051338] border-y border-[#19BCE8]/20 overflow-hidden relative z-10">
      <Marquee speed={speed} direction="right" fadeEdges={false}>
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
