import React, { useState } from 'react';
import {
  Cloud,
  Settings,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  LinuxLogo,
  JenkinsLogo,
  GrafanaLogo,
  ServiceNowLogo,
  GitHubLogo,
  PythonLogo,
  SqlLogo,
  ExcelLogo,
  PowerBiLogo,
  ChatGptLogo,
  LangChainLogo,
  ClaudeLogo,
  GeminiLogo,
  AgenticAiLogo,
  RagLogo,
} from '@/components/icons/TechLogos';

export interface ToolItem {
  id: string;
  name: string;
  categoryRole: string;
  technicalRole: string;
  curriculumContext: string;
  logo: React.ReactNode;
}

export interface DomainCard {
  id: 'cloud' | 'devops' | 'data' | 'ai';
  title: string;
  subtitle: string;
  themeGradient: string;
  borderColor: string;
  icon: React.ReactNode;
  iconBg: string;
  badgeLabel: string;
  badgeClass: string;
  bannerImage: string;
  imageAlt: string;
  quote: string;
  arrowBg: string;
  tools: ToolItem[];
}

interface TechEcosystemVisualProps {
  hideHeader?: boolean;
}

export const TechEcosystemVisual: React.FC<TechEcosystemVisualProps> = ({ hideHeader = false }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cloud' | 'devops' | 'data' | 'ai'>('all');
  const [selectedToolId, setSelectedToolId] = useState<string>('aws');

  const domains: DomainCard[] = [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      subtitle: 'Learn to design, deploy, and manage scalable cloud infrastructure used by modern enterprises.',
      themeGradient: 'from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98',
      borderColor: 'border-[#19BCE8]/35 hover:border-[#19BCE8]/60',
      icon: <Cloud className="w-5 h-5 text-[#19BCE8]" />,
      iconBg: 'bg-[#0878E8]/20 border border-[#19BCE8]/40',
      badgeLabel: '4 TOOLS',
      badgeClass: 'bg-[#0878E8]/20 text-[#19BCE8] border border-[#19BCE8]/30 font-bold font-mono',
      bannerImage: '/brand/banners/tech-cloud-infra.png',
      imageAlt: '3D Cloud Infrastructure Servers and Container Nodes',
      quote: 'Build on the same infrastructure as top tech companies.',
      arrowBg: 'bg-brand-blue shadow-[0_0_12px_rgba(8,120,232,0.4)]',
      tools: [
        {
          id: 'aws',
          name: 'Amazon Web Services (AWS)',
          categoryRole: 'Cloud Infrastructure & VPC',
          technicalRole: 'Production VPC networking, EC2 auto-scaling, ALB load balancing, and IAM security governance.',
          curriculumContext: 'AWS 3-Tier Enterprise Deployment Architecture',
          logo: <AwsLogo className="w-6 h-6 text-slate-900" />,
        },
        {
          id: 'docker',
          name: 'Docker Container Engine',
          categoryRole: 'Containerization & Runtimes',
          technicalRole: 'Multi-stage Dockerfile packaging, minimal image footprint, and isolated container runtimes.',
          curriculumContext: 'Automated Containerized Microservices',
          logo: <DockerLogo className="w-6 h-6" />,
        },
        {
          id: 'k8s',
          name: 'Kubernetes (K8s)',
          categoryRole: 'Cluster Orchestration',
          technicalRole: 'Pod scheduling, cluster discovery, Ingress routing, config maps, and Horizontal Pod Autoscaling.',
          curriculumContext: 'Resilient Cluster Workload Management',
          logo: <KubernetesLogo className="w-6 h-6" />,
        },
        {
          id: 'linux',
          name: 'Linux / Bash Scripting',
          categoryRole: 'Enterprise OS & Automation',
          technicalRole: 'Enterprise Linux server administration, Bash shell automation scripts, and file system permissions.',
          curriculumContext: 'Automated Host Provisioning & Hardening',
          logo: <LinuxLogo className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Enterprise Automation',
      subtitle: 'Automate infrastructure, streamline deployments, and manage enterprise workflows with industry-grade tools.',
      themeGradient: 'from-[#0A1A3F]/95 via-[#0D1533]/98 to-[#1A0F06]/98',
      borderColor: 'border-brand-orange/40 hover:border-brand-orange/70',
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
      iconBg: 'bg-brand-orange/20 border border-brand-orange/40',
      badgeLabel: '4 TOOLS',
      badgeClass: 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30 font-bold font-mono',
      bannerImage: '/brand/banners/tech-devops-automation.png',
      imageAlt: '3D CI/CD Automation Pipeline and Enterprise Server Gears',
      quote: 'Automate today. Scale for tomorrow.',
      arrowBg: 'bg-brand-orange shadow-[0_0_12px_rgba(255,107,53,0.4)]',
      tools: [
        {
          id: 'jenkins',
          name: 'Jenkins CI/CD Automation',
          categoryRole: 'Automated Build Pipelines',
          technicalRole: 'Automated build triggers, declarative pipeline scripts, webhook testing, and release staging.',
          curriculumContext: 'End-to-End Automated CI/CD Pipeline',
          logo: <JenkinsLogo className="w-6 h-6" />,
        },
        {
          id: 'grafana',
          name: 'Grafana Observability',
          categoryRole: 'Telemetry & Metrics Monitoring',
          technicalRole: 'Real-time telemetry dashboards, Prometheus metric exporters, and production alert triggers.',
          curriculumContext: 'Production Telemetry & Observability Stack',
          logo: <GrafanaLogo className="w-6 h-6" />,
        },
        {
          id: 'servicenow',
          name: 'ServiceNow Enterprise ITSM',
          categoryRole: 'Enterprise Workflow Automation',
          technicalRole: 'Enterprise incident management, change governance workflows, CMDB tracking, and system administration.',
          curriculumContext: 'Enterprise IT Service Desk Automation',
          logo: <ServiceNowLogo className="w-8 h-4" />,
        },
        {
          id: 'github',
          name: 'GitHub & Git Governance',
          categoryRole: 'Version Control & Actions',
          technicalRole: 'Git branching strategy, pull request code reviews, branch governance, and automated Actions.',
          curriculumContext: 'Documented Production Engineering Repositories',
          logo: <GitHubLogo className="w-6 h-6 text-slate-900" />,
        },
      ],
    },
    {
      id: 'data',
      title: 'Data Engineering & Analytics',
      subtitle: 'Work with real-world data, build pipelines, and create insights that drive business decisions.',
      themeGradient: 'from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98',
      borderColor: 'border-[#19BCE8]/35 hover:border-[#19BCE8]/60',
      icon: <BarChart3 className="w-5 h-5 text-brand-blue" />,
      iconBg: 'bg-[#0878E8]/20 border border-[#19BCE8]/40',
      badgeLabel: '4 TOOLS',
      badgeClass: 'bg-[#0878E8]/20 text-cyan-300 border border-[#19BCE8]/30 font-bold font-mono',
      bannerImage: '/brand/banners/tech-data-analytics.png',
      imageAlt: '3D Data Analytics Pipeline with Glowing Bar Charts and Database Warehouses',
      quote: 'Turn data into decisions.',
      arrowBg: 'bg-brand-blue shadow-[0_0_12px_rgba(8,120,232,0.4)]',
      tools: [
        {
          id: 'python',
          name: 'Python Data Programming',
          categoryRole: 'Data Scripting & Analysis',
          technicalRole: 'Exploratory data analysis, Pandas manipulation, NumPy operations, and automated ETL pipelines.',
          curriculumContext: 'Automated Financial Data Processing Pipeline',
          logo: <PythonLogo className="w-6 h-6" />,
        },
        {
          id: 'sql',
          name: 'SQL & Relational DBs',
          categoryRole: 'Database Modeling & Queries',
          technicalRole: 'Complex JOINs, window functions, CTEs, PostgreSQL / MySQL schema modeling, and indexing.',
          curriculumContext: 'Multi-Table Revenue Analysis Database',
          logo: <SqlLogo className="w-6 h-6 text-sky-600" />,
        },
        {
          id: 'excel',
          name: 'Microsoft Advanced Excel',
          categoryRole: 'Financial Modeling & Pivot',
          technicalRole: 'Dynamic array functions, XLOOKUP, data modeling, Power Query transformations, and KPI summaries.',
          curriculumContext: 'Commercial Operations Financial KPI Deck',
          logo: <ExcelLogo className="w-6 h-6" />,
        },
        {
          id: 'powerbi',
          name: 'Microsoft Power BI',
          categoryRole: 'Business Intelligence & DAX',
          technicalRole: 'Interactive DAX formulas, star schema modeling, drill-through reports, and executive dashboards.',
          curriculumContext: 'Enterprise Executive KPI Dashboard',
          logo: <PowerBiLogo className="w-6 h-6" />,
        },
      ],
    },
    {
      id: 'ai',
      title: 'Generative & Agentic AI',
      subtitle: 'Explore and build next-generation AI applications with modern frameworks and tools.',
      themeGradient: 'from-[#0A1236]/95 via-[#12113D]/98 to-[#1F0C3B]/98',
      borderColor: 'border-purple-500/40 hover:border-purple-400/70',
      icon: <Sparkles className="w-5 h-5 text-violet-300" />,
      iconBg: 'bg-purple-900/30 border border-purple-500/30',
      badgeLabel: '6 TOOLS',
      badgeClass: 'bg-purple-900/30 text-purple-300 border border-purple-500/30 font-bold font-mono',
      bannerImage: '/brand/banners/tech-generative-ai.png',
      imageAlt: '3D AI Neural Brain with Holographic Ideas, Agents, and Impact Nodes',
      quote: 'From prompts to real-world solutions.',
      arrowBg: 'bg-violet-600 shadow-[0_0_12px_rgba(147,51,234,0.4)]',
      tools: [
        {
          id: 'chatgpt',
          name: 'OpenAI ChatGPT',
          categoryRole: 'LLM & Prompt Reasoning',
          technicalRole: 'Prompt engineering, zero-shot/few-shot prompting, function calling, and structured JSON output.',
          curriculumContext: 'Automated Reasoning & Code Generation Engine',
          logo: <ChatGptLogo className="w-5 h-5" />,
        },
        {
          id: 'langchain',
          name: 'LangChain Framework',
          categoryRole: 'Chains & Tool Orchestration',
          technicalRole: 'Prompt templates, chaining abstractions, vector store connectors, and agent orchestration.',
          curriculumContext: 'Autonomous AI Workflow Orchestrator',
          logo: <LangChainLogo className="w-5 h-5" />,
        },
        {
          id: 'claude',
          name: 'Anthropic Claude',
          categoryRole: 'Deep Analytical Synthesis',
          technicalRole: 'Large-context document synthesis, code review analysis, and nuanced multi-step reasoning.',
          curriculumContext: 'Comprehensive Codebase Analysis Assistant',
          logo: <ClaudeLogo className="w-5 h-5" />,
        },
        {
          id: 'gemini',
          name: 'Google Gemini AI',
          categoryRole: 'Multimodal Foundation Model',
          technicalRole: 'Multimodal image/document understanding, long-context retrieval, and high-speed API endpoints.',
          curriculumContext: 'Multimodal Enterprise Document Auditor',
          logo: <GeminiLogo className="w-5 h-5" />,
        },
        {
          id: 'agentic',
          name: 'Autonomous Agentic AI',
          categoryRole: 'Autonomous Multi-Agent Networks',
          technicalRole: 'Multi-agent architectures, goal decomposition, autonomous tool calling, and self-reflection loops.',
          curriculumContext: 'Autonomous Multi-Agent Business Analyst',
          logo: <AgenticAiLogo className="w-5 h-5" />,
        },
        {
          id: 'rag',
          name: 'Retrieval-Augmented Gen (RAG)',
          categoryRole: 'Context Knowledge Grounding',
          technicalRole: 'Document vector chunking, semantic similarity retrieval, and hallucination-resistant grounded answers.',
          curriculumContext: 'Enterprise Knowledge Base QA Assistant',
          logo: <RagLogo className="w-5 h-5" />,
        },
      ],
    },
  ];

  // Helper to find selected tool across domains
  const allTools = domains.flatMap((d) => d.tools.map((t) => ({ ...t, domainTitle: d.title, domainId: d.id })));
  const selectedTool = allTools.find((t) => t.id === selectedToolId) || allTools[0];

  const categoryPills = [
    { id: 'all', label: 'ALL' },
    { id: 'cloud', label: 'CLOUD & INFRASTRUCTURE' },
    { id: 'devops', label: 'DEVOPS & AUTOMATION' },
    { id: 'data', label: 'DATA & ANALYTICS' },
    { id: 'ai', label: 'GENERATIVE & AGENTIC AI' },
  ] as const;

  return (
    <section className="space-y-8 sm:space-y-12">
      {/* ========================================================================= */}
      {/* SECTION HEADER & EDITORIAL ACCENTS */}
      {/* ========================================================================= */}
      {!hideHeader && (
        <div className="relative">
          {/* Top Row: Eyebrow Pill + Left/Right Editorial Accents */}
          <div className="flex items-center justify-between mb-4">
            {/* Left Editorial Stamp: BUILD / DEPLOY / SCALE */}
            <div className="hidden lg:flex flex-col items-start font-mono text-[10px] font-bold text-slate-400 tracking-wider select-none">
              <span>BUILD</span>
              <span>DEPLOY</span>
              <span>SCALE</span>
              <div className="w-6 h-0.5 bg-brand-blue mt-1.5" />
            </div>

            {/* Centered Pill Eyebrow */}
            <div className="mx-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0878E8]/20 border border-[#19BCE8]/40 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#19BCE8] uppercase font-mono">
                TECHNOLOGY STACK
              </span>
            </div>

            {/* Right Handwritten / Slanted Stamp */}
            <div className="hidden lg:flex flex-col items-end text-right font-semibold italic text-cyan-300 text-xs sm:text-sm leading-snug rotate-[-3deg] select-none">
              <span>Real Tools.</span>
              <span>Real Skills.</span>
              <span>Real Opportunities.</span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
              A Modern, Enterprise-Relevant <span className="text-[#19BCE8]">Ecosystem</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Curricula structured around industry-standard tools spanning cloud services, data frameworks, DevOps automation, and current AI architectures.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-6">
            {categoryPills.map((pill) => {
              const isActive = activeCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setActiveCategory(pill.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30 ring-2 ring-[#19BCE8]/40 scale-[1.02]'
                      : 'bg-[#05143A]/85 text-slate-300 border border-white/10 hover:border-[#19BCE8]/40 hover:bg-[#071D50]'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2 × 2 DOMAIN CARDS GRID */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {domains.map((domain) => {
          const isCategoryMatch = activeCategory === 'all' || activeCategory === domain.id;

          const getSelectedToolStyle = (toolId: string) => {
            const isSelected = selectedToolId === toolId;
            if (!isSelected) {
              return 'bg-[#040E2D]/85 border-white/10 hover:border-white/30 hover:bg-[#071A4D] shadow-xs';
            }

            switch (domain.id) {
              case 'cloud':
                return 'bg-[#0878E8]/25 border-2 border-[#19BCE8] shadow-[0_0_15px_rgba(25,188,232,0.3)] ring-2 ring-[#19BCE8]/30 scale-[1.02]';
              case 'devops':
                return 'bg-brand-orange/20 border-2 border-brand-orange shadow-[0_0_15px_rgba(255,107,53,0.3)] ring-2 ring-brand-orange/30 scale-[1.02]';
              case 'data':
                return 'bg-[#0878E8]/25 border-2 border-[#19BCE8] shadow-[0_0_15px_rgba(25,188,232,0.3)] ring-2 ring-[#19BCE8]/30 scale-[1.02]';
              case 'ai':
                return 'bg-purple-900/30 border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] ring-2 ring-purple-400/30 scale-[1.02]';
              default:
                return 'bg-[#0878E8]/25 border-2 border-[#19BCE8] shadow-md scale-[1.02]';
            }
          };

          return (
            <div
              key={domain.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden border backdrop-blur-xl shadow-2xl text-white ${
                isCategoryMatch ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.99] grayscale-[20%]'
              } bg-gradient-to-b ${domain.themeGradient} ${domain.borderColor}`}
            >
              {/* Subtle ambient lighting */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0878E8]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header: Icon, Title, Badge */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${domain.iconBg}`}>
                      {domain.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black font-heading tracking-tight text-white">
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[11px] tracking-wider shrink-0 shadow-xs ${domain.badgeClass}`}>
                    {domain.badgeLabel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm mt-2.5 leading-relaxed text-slate-300 font-normal">
                  {domain.subtitle}
                </p>
              </div>

              {/* Card Content: Tools Grid + 3D Illustration */}
              <div className="my-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
                {/* Tools Grid Column (2 Columns for spacious full name display) */}
                <div className="w-full sm:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {domain.tools.map((tool) => {
                    const isSelected = selectedToolId === tool.id;

                    return (
                      <button
                        key={tool.id}
                        type="button"
                        onMouseEnter={() => setSelectedToolId(tool.id)}
                        onClick={() => setSelectedToolId(tool.id)}
                        className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${getSelectedToolStyle(
                          tool.id
                        )}`}
                      >
                        {/* Logo Container */}
                        <div className="w-9 h-9 rounded-lg bg-white/95 border border-white/80 flex items-center justify-center shrink-0 p-1.5 shadow-xs">
                          {tool.logo}
                        </div>

                        {/* Text Container: Full Name & Category Role */}
                        <div className="min-w-0 flex-1">
                          <div className={`text-xs font-bold leading-snug break-words ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                            {tool.name}
                          </div>
                          <div className="text-[10px] leading-tight mt-0.5 break-words text-slate-300 font-normal">
                            {tool.categoryRole}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* 3D Illustration Art Column */}
                <div className="w-full sm:w-[35%] flex items-center justify-center shrink-0">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    <img
                      src={domain.bannerImage}
                      alt={domain.imageAlt}
                      className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Quote Bar with Circular Action Button */}
              <div className="pt-4 border-t border-white/10 relative z-10 flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white ${domain.arrowBg}`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-300">
                  {domain.quote}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE TOOL INSPECTOR PANEL */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 border border-[#19BCE8]/30 shadow-2xl p-5 sm:p-6 transition-all text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Active Tool Overview */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/95 border border-white/80 flex items-center justify-center p-2.5 shadow-lg shrink-0">
              {selectedTool.logo}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-base sm:text-lg font-black text-white font-heading">
                  {selectedTool.name}
                </h4>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#0878E8]/20 text-[#19BCE8] border border-[#19BCE8]/30">
                  {selectedTool.domainTitle}
                </span>
                <span className="text-[11px] font-mono text-slate-300">
                  • {selectedTool.categoryRole}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed font-normal">
                {selectedTool.technicalRole}
              </p>
            </div>
          </div>

          {/* Hands-on Curriculum Capstone Deliverable */}
          <div className="shrink-0 p-3.5 rounded-2xl bg-[#040C24]/90 border border-[#19BCE8]/30 w-full md:w-auto text-left md:text-right shadow-xl">
            <div className="text-[10px] uppercase font-bold text-[#19BCE8] tracking-wider flex items-center md:justify-end gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#19BCE8]" />
              <span>Demonstrated Hands-on Capstone</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-white mt-1 flex items-center md:justify-end gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-brand-orange" />
              <span>{selectedTool.curriculumContext}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION FOOTER BRAND RHYTHM */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-4 h-0.5 bg-[#19BCE8]" />
          <span className="text-slate-300">SAME TOOLS. HIGHER POSSIBILITIES.</span>
        </div>
        <div className="hidden sm:block tracking-wider text-slate-400">
          CLOUDARISS TECHNOLOGIES
        </div>
      </div>
    </section>
  );
};
