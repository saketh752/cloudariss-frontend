import React, { useState } from 'react';
import {
  Cloud,
  Terminal,
  Database,
  Bot,
  ArrowDown,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';
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
  id: string;
  name: string;
  shortRole: string;
  logo: React.ReactNode;
  curriculumProject: string;
  tierId: string;
}

interface TierGroup {
  id: string;
  tierNumber: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  flowLabel: string;
  accentBorder: string;
  badgeBg: string;
  items: TechItem[];
}

export const TechEcosystemVisual: React.FC = () => {
  const [activeTechId, setActiveTechId] = useState<string>('aws');

  const tiers: TierGroup[] = [
    {
      id: 'cloud',
      tierNumber: '01',
      title: 'Cloud & Infrastructure',
      subtitle: 'Virtualization, High Availability & Container Runtime',
      icon: <Cloud className="w-4 h-4 text-brand-blue" />,
      flowLabel: 'Automated CI/CD Delivery',
      accentBorder: 'border-brand-blue/30',
      badgeBg: 'bg-brand-surface-blue text-brand-blue',
      items: [
        {
          id: 'aws',
          name: 'AWS Cloud',
          shortRole: 'Production VPC networking, EC2 compute scaling, ALB routing & IAM policies.',
          logo: <AwsLogo className="w-5 h-5" />,
          curriculumProject: 'AWS Three-Tier Deployment Capstone',
          tierId: 'cloud',
        },
        {
          id: 'docker',
          name: 'Docker',
          shortRole: 'Multi-stage Dockerfile packaging, image minimization & container runtime.',
          logo: <DockerLogo className="w-5 h-5" />,
          curriculumProject: 'Automated Dockerized Microservice',
          tierId: 'cloud',
        },
        {
          id: 'k8s',
          name: 'Kubernetes',
          shortRole: 'Pod orchestration, service discovery, ingress routing & horizontal pod scaling.',
          logo: <KubernetesLogo className="w-5 h-5" />,
          curriculumProject: 'Resilient Cluster Workload Management',
          tierId: 'cloud',
        },
        {
          id: 'linux',
          name: 'Linux / Bash',
          shortRole: 'Server administration, shell scripting, permission management & system daemons.',
          logo: <Terminal className="w-5 h-5 text-slate-700" />,
          curriculumProject: 'Automated Host Provisioning Scripts',
          tierId: 'cloud',
        },
      ],
    },
    {
      id: 'devops',
      tierNumber: '02',
      title: 'DevOps & Enterprise Automation',
      subtitle: 'Continuous Integration, Monitoring & ITSM Workflows',
      icon: <Terminal className="w-4 h-4 text-brand-orange" />,
      flowLabel: 'Relational Data Flow',
      accentBorder: 'border-brand-orange/30',
      badgeBg: 'bg-brand-orange/10 text-brand-orange',
      items: [
        {
          id: 'jenkins',
          name: 'Jenkins CI/CD',
          shortRole: 'Automated pipeline triggers, webhook build stages, and automated test execution.',
          logo: <JenkinsLogo className="w-5 h-5" />,
          curriculumProject: 'End-to-End DevOps Automation Pipeline',
          tierId: 'devops',
        },
        {
          id: 'github',
          name: 'GitHub',
          shortRole: 'Version control branch governance, code reviews, and project collaboration.',
          logo: <GitHubLogo className="w-5 h-5" />,
          curriculumProject: 'Documented Engineering Repositories',
          tierId: 'devops',
        },
        {
          id: 'grafana',
          name: 'Grafana',
          shortRole: 'Infrastructure metrics telemetry, alerts, and system health visualization.',
          logo: <GrafanaLogo className="w-5 h-5" />,
          curriculumProject: 'Production Telemetry Monitoring Dashboard',
          tierId: 'devops',
        },
        {
          id: 'servicenow',
          name: 'ServiceNow',
          shortRole: 'Enterprise ITSM processes, incident management, change workflows & system administration.',
          logo: <ServiceNowLogo className="w-5 h-5" />,
          curriculumProject: 'Enterprise IT Service Automation',
          tierId: 'devops',
        },
      ],
    },
    {
      id: 'data',
      tierNumber: '03',
      title: 'Data & Analytics Pipeline',
      subtitle: 'Relational Querying, EDA & Executive Business Intelligence',
      icon: <Database className="w-4 h-4 text-emerald-600" />,
      flowLabel: 'Context-Augmented AI Synthesis',
      accentBorder: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-50 text-emerald-700',
      items: [
        {
          id: 'python',
          name: 'Python',
          shortRole: 'Exploratory data analysis, Pandas manipulation, automated ETL, and API integration.',
          logo: <PythonLogo className="w-5 h-5" />,
          curriculumProject: 'Automated Financial Data Processing Pipeline',
          tierId: 'data',
        },
        {
          id: 'sql',
          name: 'PostgreSQL & SQL',
          shortRole: 'Complex JOINs, window functions, CTEs, schema indexing, and database optimization.',
          logo: <SqlLogo className="w-5 h-5" />,
          curriculumProject: 'Multi-Table Business Revenue Analysis',
          tierId: 'data',
        },
        {
          id: 'excel',
          name: 'Advanced Excel',
          shortRole: 'XLOOKUP, dynamic arrays, Pivot models, and commercial KPI calculations.',
          logo: <Layers className="w-5 h-5 text-emerald-600" />,
          curriculumProject: 'Commercial Operations KPI Deck',
          tierId: 'data',
        },
        {
          id: 'powerbi',
          name: 'Power BI',
          shortRole: 'Interactive DAX modeling, star schema relationships, row-level security & executive dashboards.',
          logo: <PowerBiLogo className="w-5 h-5" />,
          curriculumProject: 'Enterprise Executive KPI Dashboard',
          tierId: 'data',
        },
      ],
    },
    {
      id: 'ai',
      tierNumber: '04',
      title: 'Generative & Agentic AI',
      subtitle: 'Autonomous Multi-Tool Systems, RAG & LLM Orchestration',
      icon: <Bot className="w-4 h-4 text-[#0a6680]" />,
      flowLabel: 'Production Capstone Integration',
      accentBorder: 'border-brand-cyan/40',
      badgeBg: 'bg-brand-cyan/15 text-[#0a6680]',
      items: [
        {
          id: 'rag',
          name: 'RAG Systems',
          shortRole: 'Document vector embeddings, semantic search, and context-grounded AI question answering.',
          logo: <RagLogo className="w-5 h-5" />,
          curriculumProject: 'Enterprise Document Knowledge Assistant',
          tierId: 'ai',
        },
        {
          id: 'agentic',
          name: 'Agentic AI',
          shortRole: 'Autonomous multi-agent workflows that plan tasks, invoke code tools, and validate findings.',
          logo: <AgenticAiLogo className="w-5 h-5" />,
          curriculumProject: 'Autonomous Multi-Agent Business Analyst',
          tierId: 'ai',
        },
        {
          id: 'langchain',
          name: 'LangChain & Agents',
          shortRole: 'Chains, memory buffers, tool calling abstractions, and LLM orchestration.',
          logo: <LangChainLogo className="w-5 h-5" />,
          curriculumProject: 'AI Workflow Controller Pipeline',
          tierId: 'ai',
        },
        {
          id: 'llms',
          name: 'Modern LLMs',
          shortRole: 'ChatGPT, Claude & Gemini API integration with structured JSON schema outputs.',
          logo: (
            <div className="flex items-center -space-x-1">
              <ChatGptLogo className="w-4 h-4" />
              <GeminiLogo className="w-4 h-4" />
              <ClaudeLogo className="w-4 h-4" />
            </div>
          ),
          curriculumProject: 'Multi-Model Comparative Evaluation',
          tierId: 'ai',
        },
      ],
    },
  ];

  // Find active tech for the inspector panel
  const allItems = tiers.flatMap((t) => t.items);
  const selectedTech = allItems.find((t) => t.id === activeTechId) || allItems[0];
  const selectedTier = tiers.find((t) => t.id === selectedTech.tierId);

  return (
    <div className="space-y-6">
      {/* Ecosystem Architecture Blueprint Container */}
      <div className="rounded-2xl bg-white border border-brand-border shadow-card p-5 sm:p-8 relative overflow-hidden">
        {/* Subtle grid background watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(#0878E8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        {/* Blueprint Title Bar */}
        <div className="flex items-center justify-between border-b border-brand-border/70 pb-4 mb-6 relative z-10 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-navy uppercase">
              Cloudariss Engineering Stack Architecture
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            Interactive Ecosystem · Hover any tool to inspect role
          </span>
        </div>

        {/* 4 Connected Architectural Tiers */}
        <div className="space-y-6 relative z-10">
          {tiers.map((tier, idx) => {
            const isTierActive = selectedTech.tierId === tier.id;

            return (
              <div key={tier.id} className="relative">
                {/* Tier Card */}
                <div
                  className={`rounded-xl p-4 sm:p-5 border transition-all ${
                    isTierActive
                      ? 'bg-brand-surface-blue/40 border-brand-blue shadow-sm'
                      : 'bg-slate-50/70 border-brand-border/80 hover:border-brand-border'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Tier Title & Purpose */}
                    <div className="lg:w-1/3 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-extrabold text-slate-400">
                          {tier.tierNumber}
                        </span>
                        <div className="flex items-center gap-1.5 font-bold text-sm text-brand-navy">
                          {tier.icon}
                          <span>{tier.title}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {tier.subtitle}
                      </p>
                    </div>

                    {/* Tier Connected Technology Nodes */}
                    <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {tier.items.map((item) => {
                        const isNodeActive = selectedTech.id === item.id;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onMouseEnter={() => setActiveTechId(item.id)}
                            onClick={() => setActiveTechId(item.id)}
                            className={`p-2.5 rounded-lg border text-left transition-all flex items-center gap-2.5 ${
                              isNodeActive
                                ? 'bg-white border-brand-blue ring-2 ring-brand-blue/20 shadow-sm scale-[1.02]'
                                : 'bg-white/80 border-brand-border/70 hover:border-brand-blue/60 hover:bg-white'
                            }`}
                          >
                            <div className="shrink-0">{item.logo}</div>
                            <span className="text-xs font-extrabold text-brand-navy truncate">
                              {item.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Downward Pipeline Connector (Between Tiers) */}
                {idx < tiers.length - 1 && (
                  <div className="flex items-center justify-center my-2 relative">
                    <div className="h-4 w-px bg-brand-border/80" />
                    <div className="absolute flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-brand-border/70 text-[10px] font-mono text-slate-500 shadow-2xs">
                      <ArrowDown className="w-2.5 h-2.5 text-brand-blue" />
                      <span className="hidden sm:inline">{tier.flowLabel}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Engineering Inspector Panel */}
        <div className="mt-8 pt-5 border-t border-brand-border/80 bg-brand-surface-blue/30 -mx-5 -mb-5 sm:-mx-8 sm:-mb-8 p-5 sm:p-6 rounded-b-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white shadow-sm border border-brand-border shrink-0">
                {selectedTech.logo}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base font-extrabold text-brand-navy">
                    {selectedTech.name}
                  </h4>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-600 border border-brand-border">
                    {selectedTier?.title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  {selectedTech.shortRole}
                </p>
              </div>
            </div>

            <div className="shrink-0 p-3 rounded-xl bg-white border border-brand-border/80 text-right w-full md:w-auto">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Demonstrated Capstone
              </div>
              <div className="text-xs font-bold text-brand-navy mt-0.5 flex items-center justify-end gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>{selectedTech.curriculumProject}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Ecosystem Insight */}
      <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Cpu className="w-4 h-4 text-brand-blue shrink-0" />
          <span>Every tool is taught through hands-on terminal commands, query scripts, and live deployments.</span>
        </div>
        <span className="text-xs font-bold text-brand-navy shrink-0">
          Zero simulated slide decks.
        </span>
      </div>
    </div>
  );
};
