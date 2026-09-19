import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Monitor,
  Cloud,
  Building2,
  Users,
  Award,
  Layers,
  BarChart3,
  FileText,
  Briefcase,
  Terminal,
  Sparkles,
  CheckCircle2,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
} from 'lucide-react';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';

/* ========================================================================= */
/* CLOUDARISS — FLAGSHIP CAREER ACCELERATORS (OUR PROGRAMS)                  */
/* Interactive CRPC & DAAP Cards with:                                       */
/* 1. Multi-Tab Switcher: Overview, Curriculum (4 Phases), Capstone Project   */
/* 2. Interactive Technology Inspector Chips                                  */
/* 3. Live 3D Telemetry Hotspot Badges                                       */
/* 4. Interactive "What's Included" Transparent Fee Drawer                   */
/* 5. Responsive, Accessible, and Content-Accurate                          */
/* ========================================================================= */

export const ProgramsSection: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  // Interactive Card Tabs
  const [crpcTab, setCrpcTab] = useState<'overview' | 'curriculum' | 'capstone'>('overview');
  const [daapTab, setDaapTab] = useState<'overview' | 'curriculum' | 'capstone'>('overview');

  // Interactive Tech Inspector States
  const [activeCrpcTech, setActiveCrpcTech] = useState<string | null>(null);
  const [activeDaapTech, setActiveDaapTech] = useState<string | null>(null);

  // Interactive Phase Selector
  const [activeCrpcPhase, setActiveCrpcPhase] = useState<number>(0);
  const [activeDaapPhase, setActiveDaapPhase] = useState<number>(0);

  // Interactive Fee Breakdown Drawer
  const [showCrpcFee, setShowCrpcFee] = useState(false);
  const [showDaapFee, setShowDaapFee] = useState(false);

  // Curriculum Phases Data
  const crpcPhases = [
    {
      num: '01',
      title: 'Python Scripting & Automation',
      tool: 'Python · Linux · Git',
      desc: 'Master object-oriented scripting, Linux command-line operations, and Git branch workflows.',
    },
    {
      num: '02',
      title: 'AWS Cloud Infrastructure',
      tool: 'AWS VPC · EC2 · S3 · IAM',
      desc: 'Deploy resilient multi-tier Virtual Private Clouds, private/public subnets, security groups, and cloud storage.',
    },
    {
      num: '03',
      title: 'DevOps & CI/CD Pipelines',
      tool: 'Docker · Kubernetes · Jenkins',
      desc: 'Containerize microservices, deploy multi-pod Kubernetes clusters, and automate automated test & deploy pipelines.',
    },
    {
      num: '04',
      title: 'Enterprise ServiceNow ITSM',
      tool: 'ServiceNow Platform',
      desc: 'Build enterprise incident, change request, service catalog, and IT service management workflows.',
    },
  ];

  const daapPhases = [
    {
      num: '01',
      title: 'Advanced Excel & Business Modeling',
      tool: 'Excel · Power Query',
      desc: 'Author dynamic array formulas, XLOOKUP models, sensitivity tables, and clean executive summaries.',
    },
    {
      num: '02',
      title: 'PostgreSQL & Relational Queries',
      tool: 'PostgreSQL · SQL',
      desc: 'Author complex relational queries, window functions, CTEs, and extract insights from enterprise databases.',
    },
    {
      num: '03',
      title: 'Python EDA & Power BI Dashboards',
      tool: 'Pandas · Power BI · DAX',
      desc: 'Wrangle raw datasets with Pandas, engineer custom DAX measures, and publish interactive BI dashboards.',
    },
    {
      num: '04',
      title: 'Generative AI & Agentic Systems',
      tool: 'LangChain · RAG · Agents',
      desc: 'Build intelligent RAG vector retrieval pipelines and autonomous multi-agent systems for market intelligence.',
    },
  ];

  // Tech Tool Insights Map
  const crpcTechDetails: Record<string, string> = {
    'Python': 'Core syntax, object-oriented scripting, automation algorithms & backend data handling.',
    'Data Science': 'NumPy numerical computing, statistical data exploration & analytical problem solving.',
    'AWS': 'Production VPC subnets, EC2 auto-scaling, S3 storage, ALB load balancing & IAM security.',
    'DevOps': 'Docker containerization, multi-pod Kubernetes orchestration & automated Jenkins CI/CD.',
    'ServiceNow': 'Enterprise ITSM workflows, incident lifecycles, change requests & platform administration.',
  };

  const daapTechDetails: Record<string, string> = {
    'Excel': 'Dynamic arrays, advanced XLOOKUP, nested formulas, financial modeling & pivot reporting.',
    'SQL': 'PostgreSQL schemas, multi-table JOINs, subqueries, window functions & CTE data wrangling.',
    'Python': 'Pandas data manipulation, NumPy arrays, Matplotlib / Seaborn exploratory data analysis.',
    'Power BI': 'DAX calculations, star-schema data modeling, interactive slicers & executive dashboards.',
    'Generative AI': 'Prompt engineering, embedding vector spaces & retrieval-augmented generation (RAG).',
    'Agentic AI': 'Autonomous multi-agent architectures, tool calling, reasoning loops & automated reporting.',
  };

  // Capstone Deliverable Data
  const crpcCapstone = {
    title: 'Enterprise 3-Tier Web Architecture on AWS with Kubernetes & CI/CD',
    subtitle: 'Production-Grade Cloud Deployment Capstone',
    summary: 'A resilient, scalable multi-tier infrastructure deployed on AWS with automated GitHub-to-Kubernetes CI/CD, ingress load balancing, and health monitoring.',
    deliverables: [
      'GitHub Repository with Dockerfiles & K8s deployment manifests',
      'Automated Jenkins multi-branch CI/CD build & test pipeline',
      'Multi-tier AWS VPC with public/private subnets and NAT gateways',
      'Architecture presentation defense deck for hiring panels',
    ],
    techStack: ['AWS VPC', 'EC2', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub'],
  };

  const daapCapstone = {
    title: 'Enterprise BI Suite & Autonomous Agentic Market Intelligence System',
    subtitle: 'End-to-End Analytics & AI Capstone',
    summary: 'A full-stack analytics suite transforming raw transactional data through SQL into executive Power BI dashboards, augmented with an autonomous multi-agent RAG reasoning engine.',
    deliverables: [
      'Production Power BI (.pbix) executive dashboard with DAX KPI trees',
      'PostgreSQL dimensional data warehouse schema and cleaning scripts',
      'Autonomous LangChain RAG agent capable of natural language queries',
      'Portfolio walkthrough presentation defending analytical conclusions',
    ],
    techStack: ['PostgreSQL', 'Python', 'Power BI', 'LangChain', 'RAG', 'OpenAI'],
  };

  return (
    <section id="programs" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* ===================================================================== */}
      {/* SECTION HEADER                                                        */}
      {/* ===================================================================== */}
      <div className="relative text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#EAF2FF] border border-[#BFDBFE] text-[#0878E8] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
          OUR PROGRAMS
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071B63] tracking-tight font-heading leading-tight mb-4">
          Flagship Career Accelerators
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Choose between specialized, industry-relevant programs designed to give you in-demand skills,
          real-world experience, and a clear path to your dream career.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* TWO INTERACTIVE FLAGSHIP PROGRAM CARDS                                 */}
      {/* ===================================================================== */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
        {/* ----------------------------------------------------------------- */}
        {/* 1. CRPC PROGRAM CARD (DARK THEME — CLOUD & DEVOPS)                */}
        {/* ----------------------------------------------------------------- */}
        <div className="flex flex-col">
          <div className="relative rounded-[28px] bg-[#06143D] border border-[#14285E] shadow-2xl shadow-[#06143D]/25 p-6 sm:p-8 lg:p-9 flex-1 flex flex-col justify-between overflow-hidden group hover:border-[#0878E8]/60 transition-all duration-300">
            {/* Background ambient lighting */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0878E8]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#19BCE8]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: Badge + Category + Online status */}
            <div className="relative z-10 flex items-center justify-between gap-3 pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#0D3880] text-white font-extrabold text-xs tracking-wider border border-blue-400/30 shadow-sm">
                  CRPC
                </span>
                <span className="text-xs font-bold text-[#7DD3FC] tracking-wider uppercase">
                  CLOUD &amp; INFRASTRUCTURE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>100% Online • Live Classes</span>
              </div>
            </div>

            {/* Interactive Card Mode Switcher Tabs */}
            <div className="relative z-10 flex items-center gap-1.5 p-1 rounded-xl bg-[#091E4E] border border-blue-400/20 mb-4 self-start">
              <button
                type="button"
                onClick={() => setCrpcTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  crpcTab === 'overview'
                    ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>
              <button
                type="button"
                onClick={() => setCrpcTab('curriculum')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  crpcTab === 'curriculum'
                    ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Curriculum (4 Phases)</span>
              </button>
              <button
                type="button"
                onClick={() => setCrpcTab('capstone')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  crpcTab === 'capstone'
                    ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Capstone</span>
              </button>
            </div>

            {/* TAB 1: OVERVIEW & 3D ARTWORK */}
            {crpcTab === 'overview' && (
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-1 my-2 transition-all">
                <div className="sm:col-span-7 space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                      Cloud &amp; Data Career
                      <span className="block text-[#19BCE8]">Accelerator</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Master cloud, DevOps and modern infrastructure with hands-on projects and real-world workflows.
                    </p>
                  </div>

                  {/* 3 Mini Feature Points */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0C245C] border border-blue-400/20 flex items-center justify-center text-[#19BCE8] shrink-0">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div className="text-xs leading-tight">
                        <span className="font-bold text-white block">Live</span>
                        <span className="text-slate-400">Interactive Classes</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0C245C] border border-blue-400/20 flex items-center justify-center text-[#19BCE8] shrink-0">
                        <Cloud className="w-4 h-4" />
                      </div>
                      <div className="text-xs leading-tight">
                        <span className="font-bold text-white block">Real-world</span>
                        <span className="text-slate-400">Infrastructure Projects</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0C245C] border border-blue-400/20 flex items-center justify-center text-[#19BCE8] shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs leading-tight">
                        <span className="font-bold text-white block">Virtual Company</span>
                        <span className="text-slate-400">Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Server Artwork Right with Live Status Pill */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center gap-2">
                  <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                    <img
                      src="/brand/banners/crpc-3d-hd.png"
                      alt="Cloud & Server Infrastructure 3D Illustration"
                      className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  {/* Live Telemetry Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0A2258]/80 border border-cyan-400/30 text-[10px] font-mono text-cyan-200 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>AWS VPC · Live Multi-Region</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: INTERACTIVE CURRICULUM PHASES */}
            {crpcTab === 'curriculum' && (
              <div className="relative z-10 space-y-3 py-2 flex-1 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#7DD3FC] uppercase tracking-wider">
                    Interactive 4-Phase Roadmap:
                  </span>
                  <span className="text-[10px] text-slate-400">Click any phase to inspect</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {crpcPhases.map((phase, pIdx) => {
                    const isPhaseActive = activeCrpcPhase === pIdx;
                    return (
                      <button
                        key={phase.num}
                        type="button"
                        onClick={() => setActiveCrpcPhase(pIdx)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isPhaseActive
                            ? 'bg-[#0B2563] border-[#19BCE8] shadow-md shadow-blue-500/20 scale-[1.02]'
                            : 'bg-[#091B48]/70 border-blue-400/20 hover:bg-[#0C245C] hover:border-blue-400/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-extrabold text-[#19BCE8]">
                            PHASE {phase.num}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-200 border border-blue-400/20">
                            {phase.tool}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {phase.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                          {phase.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: VERIFIED CAPSTONE DELIVERABLE */}
            {crpcTab === 'capstone' && (
              <div className="relative z-10 p-4 rounded-2xl bg-[#091E4E] border border-blue-400/30 space-y-3 py-3 flex-1 transition-all">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-[#7DD3FC] border border-blue-400/30 text-[11px] font-mono font-extrabold uppercase">
                    <Award className="w-3.5 h-3.5 text-[#19BCE8]" />
                    <span>{crpcCapstone.subtitle}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Portfolio Artifact
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                  {crpcCapstone.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {crpcCapstone.summary}
                </p>
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Student Deliverables &amp; Defense Artifacts:
                  </span>
                  {crpcCapstone.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#19BCE8] shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {crpcCapstone.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-[#0C245C] text-[10px] font-semibold text-blue-200 border border-blue-400/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technologies with Interactive Tool Inspector */}
            <div className="relative z-10 pt-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  KEY TECHNOLOGIES
                </span>
                <span className="text-[10px] text-[#7DD3FC] italic font-medium">
                  {activeCrpcTech ? 'Click to deselect' : 'Hover/click any tool to inspect'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Data Science', 'AWS', 'DevOps', 'ServiceNow'].map((tech) => {
                  const isTechActive = activeCrpcTech === tech;
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setActiveCrpcTech(isTechActive ? null : tech)}
                      onMouseEnter={() => setActiveCrpcTech(tech)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                        isTechActive
                          ? 'bg-[#0878E8] text-white border-cyan-400 shadow-md shadow-blue-500/30 scale-105'
                          : 'bg-[#0C245C] text-slate-200 border-blue-400/20 hover:border-blue-400/60 hover:text-white'
                      }`}
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
              {/* Tool Inspector Feedback */}
              <div className="mt-2.5 p-2.5 rounded-xl bg-[#091E4E]/80 border border-blue-400/25 text-xs text-slate-200 min-h-[42px] flex items-center transition-all">
                {activeCrpcTech ? (
                  <div className="flex items-start gap-2">
                    <span className="font-extrabold text-[#19BCE8] shrink-0 font-mono">[{activeCrpcTech}]:</span>
                    <span className="leading-snug">{crpcTechDetails[activeCrpcTech]}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <Info className="w-3.5 h-3.5 text-[#19BCE8] shrink-0" />
                    <span>Select any technology above to inspect its real-world engineering curriculum focus.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Strip (4 Grid Boxes with Interactive Hover Feedback) */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-blue-400/60 hover:bg-[#0E2866] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Calendar className="w-5 h-5 text-[#19BCE8] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">12 Weeks</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Duration</span>
                </div>
              </div>

              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-blue-400/60 hover:bg-[#0E2866] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Layers className="w-5 h-5 text-[#19BCE8] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">8 Modules</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Structured Learning</span>
                </div>
              </div>

              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-blue-400/60 hover:bg-[#0E2866] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Terminal className="w-5 h-5 text-[#19BCE8] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">Real Projects</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Hands-on Practice</span>
                </div>
              </div>

              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-blue-400/60 hover:bg-[#0E2866] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Building2 className="w-5 h-5 text-[#19BCE8] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">Virtual Company</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Industry Exposure</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Pricing Left + CTA Right */}
            <div className="relative z-10 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="line-through text-slate-400 text-xs font-medium block">₹45,000</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
                    ₹17,000
                  </span>
                  <span className="text-xs text-slate-400 font-normal">All-inclusive cohort fee</span>
                </div>
                {/* Interactive Fee Breakdown Toggle */}
                <button
                  type="button"
                  onClick={() => setShowCrpcFee(!showCrpcFee)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#19BCE8] hover:underline cursor-pointer mt-1"
                >
                  <span>{showCrpcFee ? 'Hide inclusions' : "What's included in ₹17,000?"}</span>
                  {showCrpcFee ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="px-3.5 py-3 rounded-xl border border-blue-400/30 text-blue-200 hover:bg-blue-900/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  title="View Official Curriculum PDF"
                >
                  <FileText className="w-3.5 h-3.5 text-[#19BCE8]" />
                  <span className="hidden sm:inline">Syllabus</span>
                </button>

                <Link
                  to="/courses/crpc"
                  className="px-6 py-3.5 rounded-xl bg-[#0878E8] hover:bg-[#066ad2] text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group/btn transition-all duration-300"
                >
                  <span>Explore CRPC</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Interactive Fee Breakdown Drawer */}
            {showCrpcFee && (
              <div className="relative z-10 p-3.5 rounded-xl bg-[#091E4E] border border-blue-400/30 space-y-1.5 text-xs text-slate-200 mt-3 transition-all animate-fadeIn">
                <div className="text-[11px] font-mono font-bold text-[#7DD3FC] uppercase tracking-wider mb-1">
                  All-Inclusive ₹17,000 Cohort Coverage:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Live Instructor-Led Classes</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Dedicated Cloud Lab Workstations</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified Production Capstone for GitHub</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Saturday Resume + Sunday Live Mocks</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Virtual Company Sessions</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Lifetime Session Recordings Access</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Under-card quote */}
          <p className="text-center text-xs text-slate-500 italic mt-3 font-medium px-4">
            &ldquo;From scripts to scalable infrastructure — build the systems that power the world.&rdquo;
          </p>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* 2. DAAP PROGRAM CARD (DARK LUXURY THEME — DATA & AGENTIC AI)       */}
        {/* ----------------------------------------------------------------- */}
        <div className="flex flex-col">
          <div className="relative rounded-[28px] bg-[#06143D] border border-orange-500/30 shadow-2xl shadow-orange-950/20 p-6 sm:p-8 lg:p-9 flex-1 flex flex-col justify-between overflow-hidden group hover:border-[#FF7A00]/70 transition-all duration-300">
            {/* Background warm amber & AI emerald ambient lighting */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: Badge + Category + Online status */}
            <div className="relative z-10 flex items-center justify-between gap-3 pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFA238] text-white font-extrabold text-xs tracking-wider shadow-md shadow-orange-500/25">
                  DAAP
                </span>
                <span className="text-xs font-bold text-[#FBBF24] tracking-wider uppercase">
                  DATA &amp; AGENTIC AI
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>100% Online • Live Classes</span>
              </div>
            </div>

            {/* Interactive Card Mode Switcher Tabs */}
            <div className="relative z-10 flex items-center gap-1.5 p-1 rounded-xl bg-[#22170D] border border-orange-500/25 mb-4 self-start">
              <button
                type="button"
                onClick={() => setDaapTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  daapTab === 'overview'
                    ? 'bg-[#FF7A00] text-white shadow-md shadow-orange-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Overview</span>
              </button>
              <button
                type="button"
                onClick={() => setDaapTab('curriculum')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  daapTab === 'curriculum'
                    ? 'bg-[#FF7A00] text-white shadow-md shadow-orange-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Curriculum (4 Phases)</span>
              </button>
              <button
                type="button"
                onClick={() => setDaapTab('capstone')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  daapTab === 'capstone'
                    ? 'bg-[#FF7A00] text-white shadow-md shadow-orange-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Capstone</span>
              </button>
            </div>

            {/* TAB 1: OVERVIEW & 3D ARTWORK */}
            {daapTab === 'overview' && (
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-1 my-2 transition-all">
                <div className="sm:col-span-7 space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                      Data Analyst
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#FFA238] to-[#34D399]">
                        Accelerator Program
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Turn data into decisions with analytics, visualization, predictive pipelines and modern AI tools.
                    </p>
                  </div>

                  {/* 3 Mini Feature Points */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#24170E] border border-orange-500/25 flex items-center justify-center text-[#FF7A00] shrink-0 shadow-sm">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div className="text-xs leading-tight">
                        <span className="font-bold text-white block">Live</span>
                        <span className="text-slate-400">Interactive Classes</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#24170E] border border-orange-500/25 flex items-center justify-center text-[#FF7A00] shrink-0 shadow-sm">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div className="text-xs leading-tight">
                        <span className="font-bold text-white block">End-to-End</span>
                        <span className="text-slate-400">Analytics Projects</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#24170E] border border-orange-500/25 flex items-center justify-center text-[#FF7A00] shrink-0 shadow-sm">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="text-xs leading-tight">
                        <span className="font-bold text-white block">Mentorship &amp;</span>
                        <span className="text-slate-400">Career Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Laptop Artwork Right with Live Status Pill */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center gap-2">
                  <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
                    <img
                      src="/brand/banners/daap-3d-hd.png"
                      alt="Data Analytics & AI Workstation 3D Illustration"
                      className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  {/* Live Telemetry Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2C180B]/80 border border-amber-400/30 text-[10px] font-mono text-amber-200 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Agentic Loop · RAG Augmented</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: INTERACTIVE CURRICULUM PHASES */}
            {daapTab === 'curriculum' && (
              <div className="relative z-10 space-y-3 py-2 flex-1 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider">
                    Interactive 4-Phase Roadmap:
                  </span>
                  <span className="text-[10px] text-slate-400">Click any phase to inspect</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {daapPhases.map((phase, pIdx) => {
                    const isPhaseActive = activeDaapPhase === pIdx;
                    return (
                      <button
                        key={phase.num}
                        type="button"
                        onClick={() => setActiveDaapPhase(pIdx)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isPhaseActive
                            ? 'bg-[#2E1A0A] border-[#FF7A00] shadow-md shadow-orange-500/20 scale-[1.02]'
                            : 'bg-[#201309]/70 border-orange-500/20 hover:bg-[#27170C] hover:border-orange-500/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-extrabold text-[#FF7A00]">
                            PHASE {phase.num}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-200 border border-orange-500/20">
                            {phase.tool}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {phase.title}
                        </h4>
                        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                          {phase.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: VERIFIED CAPSTONE DELIVERABLE */}
            {daapTab === 'capstone' && (
              <div className="relative z-10 p-4 rounded-2xl bg-[#24170E] border border-orange-500/30 space-y-3 py-3 flex-1 transition-all">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#FBBF24] border border-orange-500/30 text-[11px] font-mono font-extrabold uppercase">
                    <Award className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>{daapCapstone.subtitle}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Portfolio Artifact
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                  {daapCapstone.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {daapCapstone.summary}
                </p>
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Student Deliverables &amp; Defense Artifacts:
                  </span>
                  {daapCapstone.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {daapCapstone.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-[#2F1C0D] text-[10px] font-semibold text-orange-200 border border-orange-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technologies with Interactive Tool Inspector */}
            <div className="relative z-10 pt-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  KEY TECHNOLOGIES
                </span>
                <span className="text-[10px] text-[#FBBF24] italic font-medium">
                  {activeDaapTech ? 'Click to deselect' : 'Hover/click any tool to inspect'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Excel', 'SQL', 'Python', 'Power BI', 'Generative AI', 'Agentic AI'].map((tech) => {
                  const isTechActive = activeDaapTech === tech;
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setActiveDaapTech(isTechActive ? null : tech)}
                      onMouseEnter={() => setActiveDaapTech(tech)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                        isTechActive
                          ? 'bg-[#FF7A00] text-white border-amber-400 shadow-md shadow-orange-500/30 scale-105'
                          : 'bg-[#24170E] text-slate-200 border-orange-500/25 hover:border-orange-400/60 hover:text-white'
                      }`}
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
              {/* Tool Inspector Feedback */}
              <div className="mt-2.5 p-2.5 rounded-xl bg-[#1C120B]/80 border border-orange-500/25 text-xs text-slate-200 min-h-[42px] flex items-center transition-all">
                {activeDaapTech ? (
                  <div className="flex items-start gap-2">
                    <span className="font-extrabold text-[#FF7A00] shrink-0 font-mono">[{activeDaapTech}]:</span>
                    <span className="leading-snug">{daapTechDetails[activeDaapTech]}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <Info className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                    <span>Select any technology above to inspect its real-world analytics &amp; AI curriculum focus.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Strip (4 Grid Boxes with Interactive Hover Feedback) */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-orange-500/60 hover:bg-[#20182C] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Calendar className="w-5 h-5 text-[#FF7A00] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">12 Weeks</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Duration</span>
                </div>
              </div>

              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-orange-500/60 hover:bg-[#20182C] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <BarChart3 className="w-5 h-5 text-[#FF7A00] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">5+ Projects</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Portfolio Ready</span>
                </div>
              </div>

              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-orange-500/60 hover:bg-[#20182C] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Award className="w-5 h-5 text-[#FF7A00] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">1 Capstone</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Real-world Problem</span>
                </div>
              </div>

              <div className="bg-[#0B2050] border border-[#1A3575] hover:border-orange-500/60 hover:bg-[#20182C] hover:scale-105 rounded-xl p-3 flex items-center gap-2.5 transition-all duration-200 cursor-default">
                <Briefcase className="w-5 h-5 text-[#FF7A00] shrink-0" />
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-white leading-tight">Career Support</span>
                  <span className="block text-[10px] text-slate-400 leading-tight">Interview Preparation</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Pricing Left + CTA Right */}
            <div className="relative z-10 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="line-through text-slate-400 text-xs font-medium block">₹45,000</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading">
                    ₹17,000
                  </span>
                  <span className="text-xs text-slate-400 font-normal">All-inclusive cohort fee</span>
                </div>
                {/* Interactive Fee Breakdown Toggle */}
                <button
                  type="button"
                  onClick={() => setShowDaapFee(!showDaapFee)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF7A00] hover:underline cursor-pointer mt-1"
                >
                  <span>{showDaapFee ? 'Hide inclusions' : "What's included in ₹17,000?"}</span>
                  {showDaapFee ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="px-3.5 py-3 rounded-xl border border-orange-400/30 text-orange-200 hover:bg-orange-900/40 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  title="View Official Curriculum PDF"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span className="hidden sm:inline">Syllabus</span>
                </button>

                <Link
                  to="/courses/daap"
                  className="px-6 py-3.5 rounded-xl bg-[#FF7A00] hover:bg-[#e66e00] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group/btn transition-all duration-300"
                >
                  <span>Explore DAAP</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Interactive Fee Breakdown Drawer */}
            {showDaapFee && (
              <div className="relative z-10 p-3.5 rounded-xl bg-[#24170E] border border-orange-500/30 space-y-1.5 text-xs text-slate-200 mt-3 transition-all animate-fadeIn">
                <div className="text-[11px] font-mono font-bold text-[#FBBF24] uppercase tracking-wider mb-1">
                  All-Inclusive ₹17,000 Cohort Coverage:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Live Mentored Online Classes</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>SQL Warehouse &amp; Analytics Sandbox</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Executive Power BI &amp; Agentic Capstone</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Saturday Resume + Sunday Live Mocks</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Virtual Company Industry Sessions</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Lifetime Session Recordings Access</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Under-card quote */}
          <p className="text-center text-xs text-slate-500 italic mt-3 font-medium px-4">
            &ldquo;From data to decisions — build skills that make an impact.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
