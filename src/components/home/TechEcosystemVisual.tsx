import React, { useState } from 'react';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  GitHubLogo,
  GrafanaLogo,
  ServiceNowLogo,
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
  ChatGptLogo,
  ClaudeLogo,
  GeminiLogo,
  LangChainLogo,
  RagLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';

interface TechItem {
  name: string;
  role: string;
  logo: React.ReactNode;
  accent: string;
}

interface CategoryGroup {
  category: string;
  badge: string;
  description: string;
  items: TechItem[];
}

export const TechEcosystemVisual: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories: CategoryGroup[] = [
    {
      category: 'Cloud & Infrastructure',
      badge: 'Compute & Storage',
      description: 'Distributed virtualization, elastic compute scaling, and containerized architectures.',
      items: [
        {
          name: 'AWS',
          role: 'Cloud Infrastructure, EC2, S3, VPC & IAM',
          logo: <AwsLogo className="w-8 h-8" />,
          accent: '#FF9900',
        },
        {
          name: 'Docker',
          role: 'Containerization, Isolation & Multi-Stage Builds',
          logo: <DockerLogo className="w-8 h-8" />,
          accent: '#2496ED',
        },
        {
          name: 'Kubernetes',
          role: 'Cluster Orchestration, Pod Scheduling & Scaling',
          logo: <KubernetesLogo className="w-8 h-8" />,
          accent: '#326CE5',
        },
      ],
    },
    {
      category: 'DevOps & Automation',
      badge: 'Delivery & ITSM',
      description: 'Zero-downtime release pipelines, observability, and enterprise workflow governance.',
      items: [
        {
          name: 'Jenkins',
          role: 'Continuous Integration & Declarative Pipelines',
          logo: <JenkinsLogo className="w-8 h-8" />,
          accent: '#D24939',
        },
        {
          name: 'GitHub',
          role: 'Version Control, Branching & Automated Actions',
          logo: <GitHubLogo className="w-8 h-8" />,
          accent: '#181717',
        },
        {
          name: 'Grafana',
          role: 'Metrics Dashboarding & Observability Alerts',
          logo: <GrafanaLogo className="w-8 h-8" />,
          accent: '#F46800',
        },
        {
          name: 'ServiceNow',
          role: 'Enterprise ITSM, Service Catalogs & Workflows',
          logo: <ServiceNowLogo className="w-8 h-8" />,
          accent: '#81B5A1',
        },
      ],
    },
    {
      category: 'Data & Analytics',
      badge: 'Data Processing & BI',
      description: 'High-speed relational data queries, computational math, and executive storytelling.',
      items: [
        {
          name: 'Python',
          role: 'NumPy, Pandas & Scripted Analytical Automation',
          logo: <PythonLogo className="w-8 h-8" />,
          accent: '#3776AB',
        },
        {
          name: 'SQL',
          role: 'Relational Schemas, Complex CTEs & Window Queries',
          logo: <SqlLogo className="w-8 h-8" />,
          accent: '#336791',
        },
        {
          name: 'Power BI',
          role: 'DAX Modeling, Power Query & KPI Dashboards',
          logo: <PowerBiLogo className="w-8 h-8" />,
          accent: '#F2C811',
        },
      ],
    },
    {
      category: 'Generative & Agentic AI',
      badge: 'Next-Gen Intelligence',
      description: 'LLM reasoning engines, vector knowledge retrieval, and autonomous multi-agent systems.',
      items: [
        {
          name: 'ChatGPT',
          role: 'OpenAI LLMs & Structured Inference Pipelines',
          logo: <ChatGptLogo className="w-8 h-8" />,
          accent: '#10A37F',
        },
        {
          name: 'Claude',
          role: 'Anthropic High-Context Analytical Reasoning',
          logo: <ClaudeLogo className="w-8 h-8" />,
          accent: '#D97706',
        },
        {
          name: 'Google Gemini',
          role: 'Multimodal Embeddings & Real-Time Intelligence',
          logo: <GeminiLogo className="w-8 h-8" />,
          accent: '#1B73E8',
        },
        {
          name: 'LangChain',
          role: 'Chains, Agents & Memory Orchestration',
          logo: <LangChainLogo className="w-8 h-8" />,
          accent: '#00A67E',
        },
        {
          name: 'RAG',
          role: 'Retrieval-Augmented Generation over Private Docs',
          logo: <RagLogo className="w-8 h-8" />,
          accent: '#0878E8',
        },
        {
          name: 'Agentic AI',
          role: 'Autonomous Multi-Agent Collaboration Systems',
          logo: <AgenticAiLogo className="w-8 h-8" />,
          accent: '#FF7A00',
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {categories.map((cat, cIdx) => (
        <div
          key={cIdx}
          className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Category Header */}
            <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy font-heading">
                {cat.category}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-surface-light border border-brand-border text-slate-600">
                {cat.badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
              {cat.description}
            </p>

            {/* Visual Logo Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cat.items.map((item, iIdx) => {
                const isHovered = hoveredTech === item.name;
                return (
                  <div
                    key={iIdx}
                    onMouseEnter={() => setHoveredTech(item.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`relative p-3.5 rounded-xl border transition-all duration-200 flex flex-col items-center text-center cursor-pointer ${
                      isHovered
                        ? 'bg-brand-surface-blue border-brand-blue shadow-subtle -translate-y-0.5'
                        : 'bg-brand-surface-light/60 border-brand-border/70 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {/* Hero Logo Element */}
                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 mb-2">
                      {item.logo}
                    </div>

                    {/* Tech Name */}
                    <span className="text-xs font-bold text-brand-navy leading-tight">
                      {item.name}
                    </span>

                    {/* Short Role Preview */}
                    <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                      {item.role}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Micro Description Reveal Bar */}
          <div className="mt-4 pt-3 border-t border-brand-border/60 min-h-[32px] flex items-center">
            {hoveredTech && cat.items.some((i) => i.name === hoveredTech) ? (
              <div className="text-xs text-brand-blue font-semibold animate-fadeIn flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                <span className="font-bold">{hoveredTech}:</span>
                <span className="text-slate-600">
                  {cat.items.find((i) => i.name === hoveredTech)?.role}
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-slate-400 font-medium">
                Hover over any technology to reveal its curriculum role
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

