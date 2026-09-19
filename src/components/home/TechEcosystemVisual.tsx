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
  theme: 'dark' | 'light';
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  badgeLabel: string;
  badgeClass: string;
  bannerImage: string;
  imageAlt: string;
  quote: string;
  arrowBg: string;
  quoteColor: string;
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
      theme: 'dark',
      icon: <Cloud className="w-5 h-5 text-[#19BCE8]" />,
      iconBg: 'bg-[#0878E8]/20 border border-[#0878E8]/40',
      iconColor: 'text-[#19BCE8]',
      badgeLabel: '4 TOOLS',
      badgeClass: 'bg-white/10 text-cyan-300 border border-cyan-500/30',
      bannerImage: '/brand/banners/tech-cloud-infra.png',
      imageAlt: '3D Cloud Infrastructure Servers and Container Nodes',
      quote: 'Build on the same infrastructure as top tech companies.',
      arrowBg: 'bg-brand-blue',
      quoteColor: 'text-slate-300',
      tools: [
        {
          id: 'aws',
          name: 'Amazon Web Services (AWS)',
          categoryRole: 'Cloud Infrastructure & VPC',
          technicalRole: 'Production VPC networking, EC2 auto-scaling, ALB load balancing, and IAM security governance.',
          curriculumContext: 'AWS 3-Tier Enterprise Deployment Architecture',
          logo: <AwsLogo className="w-7 h-7 text-white" />,
        },
        {
          id: 'docker',
          name: 'Docker Container Engine',
          categoryRole: 'Containerization & Runtimes',
          technicalRole: 'Multi-stage Dockerfile packaging, minimal image footprint, and isolated container runtimes.',
          curriculumContext: 'Automated Containerized Microservices',
          logo: <DockerLogo className="w-7 h-7" />,
        },
        {
          id: 'k8s',
          name: 'Kubernetes (K8s)',
          categoryRole: 'Cluster Orchestration',
          technicalRole: 'Pod scheduling, cluster discovery, Ingress routing, config maps, and Horizontal Pod Autoscaling.',
          curriculumContext: 'Resilient Cluster Workload Management',
          logo: <KubernetesLogo className="w-7 h-7" />,
        },
        {
          id: 'linux',
          name: 'Linux / Bash Scripting',
          categoryRole: 'Enterprise OS & Automation',
          technicalRole: 'Enterprise Linux server administration, Bash shell automation scripts, and file system permissions.',
          curriculumContext: 'Automated Host Provisioning & Hardening',
          logo: <LinuxLogo className="w-7 h-7" />,
        },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Enterprise Automation',
      subtitle: 'Automate infrastructure, streamline deployments, and manage enterprise workflows with industry-grade tools.',
      theme: 'light',
      icon: <Settings className="w-5 h-5 text-brand-orange" />,
      iconBg: 'bg-orange-50 border border-orange-200/80',
      iconColor: 'text-brand-orange',
      badgeLabel: '4 TOOLS',
      badgeClass: 'bg-orange-50 text-orange-600 border border-orange-200 font-bold',
      bannerImage: '/brand/banners/tech-devops-automation.png',
      imageAlt: '3D CI/CD Automation Pipeline and Enterprise Server Gears',
      quote: 'Automate today. Scale for tomorrow.',
      arrowBg: 'bg-brand-orange',
      quoteColor: 'text-slate-600',
      tools: [
        {
          id: 'jenkins',
          name: 'Jenkins CI/CD Automation',
          categoryRole: 'Automated Build Pipelines',
          technicalRole: 'Automated build triggers, declarative pipeline scripts, webhook testing, and release staging.',
          curriculumContext: 'End-to-End Automated CI/CD Pipeline',
          logo: <JenkinsLogo className="w-7 h-7" />,
        },
        {
          id: 'grafana',
          name: 'Grafana Observability',
          categoryRole: 'Telemetry & Metrics Monitoring',
          technicalRole: 'Real-time telemetry dashboards, Prometheus metric exporters, and production alert triggers.',
          curriculumContext: 'Production Telemetry & Observability Stack',
          logo: <GrafanaLogo className="w-7 h-7" />,
        },
        {
          id: 'servicenow',
          name: 'ServiceNow Enterprise ITSM',
          categoryRole: 'Enterprise Workflow Automation',
          technicalRole: 'Enterprise incident management, change governance workflows, CMDB tracking, and system administration.',
          curriculumContext: 'Enterprise IT Service Desk Automation',
          logo: <ServiceNowLogo className="w-9 h-5" />,
        },
        {
          id: 'github',
          name: 'GitHub & Git Governance',
          categoryRole: 'Version Control & Actions',
          technicalRole: 'Git branching strategy, pull request code reviews, branch governance, and automated Actions.',
          curriculumContext: 'Documented Production Engineering Repositories',
          logo: <GitHubLogo className="w-7 h-7 text-slate-800" />,
        },
      ],
    },
    {
      id: 'data',
      title: 'Data Engineering & Analytics',
      subtitle: 'Work with real-world data, build pipelines, and create insights that drive business decisions.',
      theme: 'light',
      icon: <BarChart3 className="w-5 h-5 text-brand-blue" />,
      iconBg: 'bg-sky-50 border border-sky-200/80',
      iconColor: 'text-brand-blue',
      badgeLabel: '4 TOOLS',
      badgeClass: 'bg-sky-50 text-blue-600 border border-blue-200 font-bold',
      bannerImage: '/brand/banners/tech-data-analytics.png',
      imageAlt: '3D Data Analytics Pipeline with Glowing Bar Charts and Database Warehouses',
      quote: 'Turn data into decisions.',
      arrowBg: 'bg-brand-blue',
      quoteColor: 'text-slate-600',
      tools: [
        {
          id: 'python',
          name: 'Python Data Programming',
          categoryRole: 'Data Scripting & Analysis',
          technicalRole: 'Exploratory data analysis, Pandas manipulation, NumPy operations, and automated ETL pipelines.',
          curriculumContext: 'Automated Financial Data Processing Pipeline',
          logo: <PythonLogo className="w-7 h-7" />,
        },
        {
          id: 'sql',
          name: 'SQL & Relational DBs',
          categoryRole: 'Database Modeling & Queries',
          technicalRole: 'Complex JOINs, window functions, CTEs, PostgreSQL / MySQL schema modeling, and indexing.',
          curriculumContext: 'Multi-Table Revenue Analysis Database',
          logo: <SqlLogo className="w-7 h-7 text-sky-600" />,
        },
        {
          id: 'excel',
          name: 'Microsoft Advanced Excel',
          categoryRole: 'Financial Modeling & Pivot',
          technicalRole: 'Dynamic array functions, XLOOKUP, data modeling, Power Query transformations, and KPI summaries.',
          curriculumContext: 'Commercial Operations Financial KPI Deck',
          logo: <ExcelLogo className="w-7 h-7" />,
        },
        {
          id: 'powerbi',
          name: 'Microsoft Power BI',
          categoryRole: 'Business Intelligence & DAX',
          technicalRole: 'Interactive DAX formulas, star schema modeling, drill-through reports, and executive dashboards.',
          curriculumContext: 'Enterprise Executive KPI Dashboard',
          logo: <PowerBiLogo className="w-7 h-7" />,
        },
      ],
    },
    {
      id: 'ai',
      title: 'Generative & Agentic AI',
      subtitle: 'Explore and build next-generation AI applications with modern frameworks and tools.',
      theme: 'dark',
      icon: <Sparkles className="w-5 h-5 text-violet-400" />,
      iconBg: 'bg-indigo-900/40 border border-indigo-500/30',
      iconColor: 'text-violet-300',
      badgeLabel: '6 TOOLS',
      badgeClass: 'bg-indigo-950/80 text-indigo-300 border border-indigo-700/40 font-bold',
      bannerImage: '/brand/banners/tech-generative-ai.png',
      imageAlt: '3D AI Neural Brain with Holographic Ideas, Agents, and Impact Nodes',
      quote: 'From prompts to real-world solutions.',
      arrowBg: 'bg-violet-600',
      quoteColor: 'text-slate-300',
      tools: [
        {
          id: 'chatgpt',
          name: 'OpenAI ChatGPT',
          categoryRole: 'LLM & Prompt Reasoning',
          technicalRole: 'Prompt engineering, zero-shot/few-shot prompting, function calling, and structured JSON output.',
          curriculumContext: 'Automated Reasoning & Code Generation Engine',
          logo: <ChatGptLogo className="w-6 h-6" />,
        },
        {
          id: 'langchain',
          name: 'LangChain Framework',
          categoryRole: 'Chains & Tool Orchestration',
          technicalRole: 'Prompt templates, chaining abstractions, vector store connectors, and agent orchestration.',
          curriculumContext: 'Autonomous AI Workflow Orchestrator',
          logo: <LangChainLogo className="w-6 h-6" />,
        },
        {
          id: 'claude',
          name: 'Anthropic Claude',
          categoryRole: 'Deep Analytical Synthesis',
          technicalRole: 'Large-context document synthesis, code review analysis, and nuanced multi-step reasoning.',
          curriculumContext: 'Comprehensive Codebase Analysis Assistant',
          logo: <ClaudeLogo className="w-6 h-6" />,
        },
        {
          id: 'gemini',
          name: 'Google Gemini AI',
          categoryRole: 'Multimodal Foundation Model',
          technicalRole: 'Multimodal image/document understanding, long-context retrieval, and high-speed API endpoints.',
          curriculumContext: 'Multimodal Enterprise Document Auditor',
          logo: <GeminiLogo className="w-6 h-6" />,
        },
        {
          id: 'agentic',
          name: 'Autonomous Agentic AI',
          categoryRole: 'Autonomous Multi-Agent Networks',
          technicalRole: 'Multi-agent architectures, goal decomposition, autonomous tool calling, and self-reflection loops.',
          curriculumContext: 'Autonomous Multi-Agent Business Analyst',
          logo: <AgenticAiLogo className="w-6 h-6" />,
        },
        {
          id: 'rag',
          name: 'Retrieval-Augmented Gen (RAG)',
          categoryRole: 'Context Knowledge Grounding',
          technicalRole: 'Document vector chunking, semantic similarity retrieval, and hallucination-resistant grounded answers.',
          curriculumContext: 'Enterprise Knowledge Base QA Assistant',
          logo: <RagLogo className="w-6 h-6" />,
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
            <div className="mx-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-navy uppercase font-mono">
                TECHNOLOGY STACK
              </span>
            </div>

            {/* Right Handwritten / Slanted Stamp */}
            <div className="hidden lg:flex flex-col items-end text-right font-semibold italic text-brand-blue text-xs sm:text-sm leading-snug rotate-[-3deg] select-none">
              <span>Real Tools.</span>
              <span>Real Skills.</span>
              <span>Real Opportunities.</span>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-heading">
              A Modern, Enterprise-Relevant <span className="text-brand-blue">Ecosystem</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
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
                      ? 'bg-brand-navy text-white shadow-sm ring-2 ring-brand-blue/30 scale-[1.02]'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
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
          const isDark = domain.theme === 'dark';

          return (
            <div
              key={domain.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden border ${
                isCategoryMatch ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.99] grayscale-[20%]'
              } ${
                isDark
                  ? 'bg-gradient-to-br from-[#06143D] via-[#07194A] to-[#0A2263] border-cyan-500/20 shadow-xl text-white'
                  : 'bg-white border-slate-200/90 shadow-card text-brand-navy'
              }`}
            >
              {/* Subtle background glow for dark cards */}
              {isDark && (
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* Card Header: Icon, Title, Badge */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${domain.iconBg}`}>
                      {domain.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-black font-heading tracking-tight ${isDark ? 'text-white' : 'text-brand-navy'}`}>
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider shrink-0 ${domain.badgeClass}`}>
                    {domain.badgeLabel}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm mt-2.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
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
                        className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                          isDark
                            ? isSelected
                              ? 'bg-white/15 border-brand-cyan shadow-md ring-2 ring-brand-cyan/30 scale-[1.02]'
                              : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/10'
                            : isSelected
                            ? domain.id === 'devops'
                              ? 'bg-orange-50/70 border-brand-orange shadow-sm ring-2 ring-brand-orange/25 scale-[1.02]'
                              : 'bg-sky-50/70 border-brand-blue shadow-sm ring-2 ring-brand-blue/25 scale-[1.02]'
                            : 'bg-slate-50/90 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-2xs'
                        }`}
                      >
                        {/* Logo Container */}
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 p-1.5 ${
                            isDark ? 'bg-white/10' : 'bg-white border border-slate-100 shadow-2xs'
                          }`}
                        >
                          {tool.logo}
                        </div>

                        {/* Text Container: Full Name & Category Role */}
                        <div className="min-w-0 flex-1">
                          <div
                            className={`text-xs font-bold leading-snug break-words ${
                              isDark ? 'text-white' : 'text-brand-navy'
                            }`}
                          >
                            {tool.name}
                          </div>
                          <div
                            className={`text-[10px] leading-tight mt-0.5 break-words ${
                              isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          >
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
                      className={`w-full h-full object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-105 ${
                        !isDark ? 'mix-blend-multiply' : 'drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]'
                      }`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Quote Bar with Circular Action Button */}
              <div
                className={`pt-4 border-t relative z-10 flex items-center gap-3 ${
                  isDark ? 'border-white/10' : 'border-slate-100'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm ${domain.arrowBg}`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <p className={`text-xs sm:text-sm font-medium ${domain.quoteColor}`}>
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
      <div className="rounded-2xl bg-white border border-brand-border shadow-card p-5 sm:p-6 transition-all">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Active Tool Overview */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center p-3 shadow-2xs shrink-0">
              {selectedTool.logo}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-base sm:text-lg font-black text-brand-navy">
                  {selectedTool.name}
                </h4>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-surface-blue text-brand-blue border border-brand-blue/20">
                  {selectedTool.domainTitle}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  • {selectedTool.categoryRole}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {selectedTool.technicalRole}
              </p>
            </div>
          </div>

          {/* Hands-on Curriculum Capstone Deliverable */}
          <div className="shrink-0 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 w-full md:w-auto text-left md:text-right">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center md:justify-end gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Demonstrated Hands-on Capstone</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-brand-navy mt-1 flex items-center md:justify-end gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-brand-blue" />
              <span>{selectedTool.curriculumContext}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION FOOTER BRAND RHYTHM */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-4 h-0.5 bg-brand-blue" />
          <span>SAME TOOLS. HIGHER POSSIBILITIES.</span>
        </div>
        <div className="hidden sm:block tracking-wider text-slate-400">
          CLOUDARISS TECHNOLOGIES
        </div>
      </div>
    </section>
  );
};
