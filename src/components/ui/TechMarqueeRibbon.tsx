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
  variant = 'subtle',
  speed = 40,
}) => {
  const techItems = [
    { name: 'AWS Cloud', logo: <AwsLogo className="w-4 h-4" /> },
    { name: 'Docker', logo: <DockerLogo className="w-4 h-4" /> },
    { name: 'Kubernetes', logo: <KubernetesLogo className="w-4 h-4" /> },
    { name: 'Jenkins CI/CD', logo: <JenkinsLogo className="w-4 h-4" /> },
    { name: 'GitHub Actions', logo: <GitHubLogo className="w-4 h-4" /> },
    { name: 'Python', logo: <PythonLogo className="w-4 h-4" /> },
    { name: 'PostgreSQL & SQL', logo: <SqlLogo className="w-4 h-4" /> },
    { name: 'Power BI', logo: <PowerBiLogo className="w-4 h-4" /> },
    { name: 'Generative AI (LLMs)', logo: <ChatGptLogo className="w-4 h-4" /> },
    { name: 'Google Gemini', logo: <GeminiLogo className="w-4 h-4" /> },
    { name: 'LangChain & Agents', logo: <LangChainLogo className="w-4 h-4" /> },
    { name: 'RAG Architectures', logo: <RagLogo className="w-4 h-4" /> },
    { name: 'Agentic AI', logo: <AgenticAiLogo className="w-4 h-4" /> },
    { name: 'ServiceNow ITSM', logo: <ServiceNowLogo className="w-4 h-4" /> },
  ];

  const isDark = variant === 'dark';

  return (
    <div
      className={`py-3.5 border-y transition-colors ${
        isDark
          ? 'bg-brand-dark-section border-white/10 text-white'
          : 'bg-white/80 backdrop-blur-sm border-brand-border/70 text-brand-navy'
      }`}
    >
      <Marquee speed={speed} fadeEdges={!isDark}>
        {techItems.map((item, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-transform hover:scale-105 ${
              isDark
                ? 'bg-white/5 border border-white/10 text-slate-200 hover:text-white'
                : 'bg-brand-surface-blue/50 border border-brand-border/60 text-brand-navy hover:text-brand-blue'
            }`}
          >
            <div className="shrink-0">{item.logo}</div>
            <span className="whitespace-nowrap tracking-wide">{item.name}</span>
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
    <div className="py-2.5 bg-brand-surface-blue/60 border-y border-brand-border/60 overflow-hidden">
      <Marquee speed={speed} direction="right" fadeEdges>
        {domains.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 shrink-0">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 font-heading">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 shrink-0" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

