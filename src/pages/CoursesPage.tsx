import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Cloud,
  Database,
  Terminal,
  Bot,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { VinayakaOfferCard } from '@/components/home/VinayakaOfferCard';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  PythonLogo,
  ServiceNowLogo,
  SqlLogo,
  PowerBiLogo,
  RagLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';

export const CoursesPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  const [selectedCrpcStep, setSelectedCrpcStep] = useState<number>(2); // Default to AWS Cloud
  const [selectedDaapStep, setSelectedDaapStep] = useState<number>(3); // Default to Power BI

  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  const crpcPathway = [
    { step: '01', title: 'Python Basics', detail: 'Data types, loops, functions & algorithms' },
    { step: '02', title: 'Data Science', detail: 'NumPy, statistics & data exploration' },
    { step: '03', title: 'AWS Cloud', detail: 'VPC subnets, EC2 clusters, ALB & IAM' },
    { step: '04', title: 'DevOps & CI/CD', detail: 'Docker containers, Kubernetes & Jenkins' },
    { step: '05', title: 'ServiceNow ITSM', detail: 'Incident, change workflows & admin' },
    { step: '06', title: 'Career Prep', detail: 'Saturday resume audits & Sunday mocks' },
  ];

  const daapPathway = [
    { step: '01', title: 'Advanced Excel', detail: 'Dynamic arrays, XLOOKUP & Pivot models' },
    { step: '02', title: 'PostgreSQL & SQL', detail: 'JOINs, window functions, CTEs & queries' },
    { step: '03', title: 'Python EDA', detail: 'Pandas data wrangling & visualizations' },
    { step: '04', title: 'Power BI & DAX', detail: 'Data modeling, KPIs & executive decks' },
    { step: '05', title: 'Generative AI', detail: 'Prompt engineering & RAG architectures' },
    { step: '06', title: 'Agentic AI', detail: 'Multi-tool agents & autonomous analytics' },
  ];

  // Dynamic Blueprints for CRPC steps
  const crpcStepBlueprints = [
    {
      title: 'Python Automation Engine',
      badge: 'Core Programming',
      category: 'Procedural Scripting & OOP',
      description: 'Build algorithmic problem-solving habits, command-line data processing, and Linux terminal pipeline automation.',
      tools: [
        { name: 'Python 3.11', icon: <PythonLogo className="w-3.5 h-3.5" /> },
        { name: 'Linux Bash', icon: <Terminal className="w-3.5 h-3.5 text-slate-300" /> },
      ],
      deliverable: 'Automated Log Parsing & System File Auditing CLI Utility',
    },
    {
      title: 'Numerical Computing & EDA',
      badge: 'Analytical Computing',
      category: 'Statistical Foundations',
      description: 'Learn NumPy multidimensional array manipulation, matrix mathematics, and statistical dataset exploration.',
      tools: [
        { name: 'NumPy Arrays', icon: <PythonLogo className="w-3.5 h-3.5" /> },
        { name: 'Statistical Testing', icon: <Terminal className="w-3.5 h-3.5 text-slate-300" /> },
      ],
      deliverable: 'Exploratory Statistical Dataset Profiling Script',
    },
    {
      title: 'Multi-Tier AWS Virtual Private Cloud',
      badge: 'Cloud Infrastructure',
      category: 'Live Multi-Tier Architecture',
      description: 'Design and deploy multi-AZ VPC architectures, public/private subnets, NAT gateways, EC2 clusters, and S3 storage.',
      tools: [
        { name: 'AWS VPC & EC2', icon: <AwsLogo className="w-3.5 h-3" /> },
        { name: 'S3 & IAM Roles', icon: <AwsLogo className="w-3.5 h-3" /> },
        { name: 'CloudWatch Alarms', icon: <Cloud className="w-3.5 h-3.5 text-brand-cyan" /> },
      ],
      deliverable: 'High-Availability Multi-Subnet VPC with Application Load Balancer',
    },
    {
      title: 'Continuous Integration & Deployment',
      badge: 'DevOps & Containers',
      category: 'Production Automation',
      description: 'Containerize microservices with Docker, deploy to Kubernetes pods, and orchestrate automated Jenkins pipelines.',
      tools: [
        { name: 'Docker Containers', icon: <DockerLogo className="w-3.5 h-3.5" /> },
        { name: 'Kubernetes Pods', icon: <KubernetesLogo className="w-3.5 h-3.5" /> },
        { name: 'Jenkins CI/CD', icon: <JenkinsLogo className="w-3.5 h-3.5" /> },
      ],
      deliverable: 'Automated GitHub-to-Kubernetes CI/CD Pipeline with Health Checks',
    },
    {
      title: 'Enterprise ServiceNow ITSM',
      badge: 'ITSM Automation',
      category: 'Enterprise IT Workflows',
      description: 'Configure and administer ServiceNow instance workflows, incident lifecycles, change requests, and service catalogs.',
      tools: [
        { name: 'ServiceNow ITSM', icon: <ServiceNowLogo className="w-3.5 h-3.5" /> },
        { name: 'Workflow Admin', icon: <Terminal className="w-3.5 h-3.5 text-slate-300" /> },
      ],
      deliverable: 'Enterprise Incident & Change Request Lifecycle Workflow',
    },
    {
      title: 'Weekend Placement Acceleration Circuit',
      badge: 'Career Strategy',
      category: 'Interview Defense',
      description: 'Saturday ATS resume optimization and GitHub repository positioning, followed by Sunday technical mock interviews.',
      tools: [
        { name: 'ATS Resume Audit', icon: <FileText className="w-3.5 h-3.5 text-brand-cyan" /> },
        { name: 'Technical Live Mocks', icon: <Terminal className="w-3.5 h-3.5 text-brand-orange" /> },
      ],
      deliverable: 'Defensible GitHub Portfolio & Technical Interview Clearance',
    },
  ];

  // Dynamic Blueprints for DAAP steps
  const daapStepBlueprints = [
    {
      title: 'Advanced Spreadsheet Modeling',
      badge: 'Data Modeling',
      category: 'Business Analysis',
      description: 'Master dynamic arrays, nested XLOOKUP formulas, Power Query ingestion, and executive scenario modeling.',
      tools: [
        { name: 'Advanced Excel', icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
        { name: 'Power Query', icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
      ],
      deliverable: 'Executive Financial Sensitivity & Scenario Analysis Model',
    },
    {
      title: 'Enterprise Relational Query Engine',
      badge: 'Database Engineering',
      category: 'SQL Mastery',
      description: 'Author multi-table JOINs, subqueries, window functions (ROW_NUMBER, DENSE_RANK), and CTE data wrangling.',
      tools: [
        { name: 'PostgreSQL & SQL', icon: <SqlLogo className="w-3.5 h-3.5" /> },
        { name: 'pgAdmin Console', icon: <Database className="w-3.5 h-3.5 text-emerald-400" /> },
      ],
      deliverable: 'E-Commerce Transactional Warehouse with Complex Analytical Views',
    },
    {
      title: 'Exploratory Data Analysis Pipeline',
      badge: 'Python Analytics',
      category: 'Data Transformation',
      description: 'Clean raw data with Pandas, handle missing values, calculate correlations, and visualize distributions with Seaborn.',
      tools: [
        { name: 'Python EDA', icon: <PythonLogo className="w-3.5 h-3.5" /> },
        { name: 'Pandas & NumPy', icon: <PythonLogo className="w-3.5 h-3.5" /> },
      ],
      deliverable: 'Automated Customer Churn & Segmentation EDA Notebook',
    },
    {
      title: 'Executive Business Intelligence Suite',
      badge: 'BI & Reporting',
      category: 'Data Visualization',
      description: 'Design star schemas, author custom DAX measures, configure row-level security, and publish executive dashboards.',
      tools: [
        { name: 'Power BI Desktop', icon: <PowerBiLogo className="w-3.5 h-3.5" /> },
        { name: 'DAX Calculations', icon: <PowerBiLogo className="w-3.5 h-3.5" /> },
      ],
      deliverable: 'Enterprise Sales & Operations Multi-Page Power BI Suite',
    },
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      badge: 'Generative AI',
      category: 'Vector Intelligence',
      description: 'Embed unstructured text, configure vector similarity search, and generate grounded answers using modern LLMs.',
      tools: [
        { name: 'RAG Architectures', icon: <RagLogo className="w-3.5 h-3.5" /> },
        { name: 'Vector Databases', icon: <Bot className="w-3.5 h-3.5 text-brand-cyan" /> },
      ],
      deliverable: 'Domain-Specific Q&A Assistant Grounded in Corporate PDFs',
    },
    {
      title: 'Autonomous Multi-Agent AI Systems',
      badge: 'Agentic AI',
      category: 'Autonomous Workflows',
      description: 'Build LangChain multi-agent loops with automated tool execution, self-correcting logic, and executive report synthesis.',
      tools: [
        { name: 'Multi-Agent Systems', icon: <AgenticAiLogo className="w-3.5 h-3.5" /> },
        { name: 'LangChain Agents', icon: <Bot className="w-3.5 h-3.5 text-brand-cyan" /> },
      ],
      deliverable: 'Autonomous Market Research & Financial Synthesis Multi-Agent System',
    },
  ];

  const currentCrpcBlueprint = crpcStepBlueprints[selectedCrpcStep];
  const currentDaapBlueprint = daapStepBlueprints[selectedDaapStep];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                CAREER ACCELERATOR PROGRAMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Build Skills. Build Projects.{' '}
              <span className="text-gradient-tech">Build Your Career.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Explore Cloudariss flagship programs designed around practical technology skills, hands-on lab projects, and systematic career preparation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                to="/courses/crpc"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRPC Track
              </Button>
              <Button
                to="/courses/daap"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore DAAP Track
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. PROGRAM SHOWCASE: PATHWAY EXPLORATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Two Specialized Flagships"
          title="Engineered for Depth. Grounded in Production."
          subtitle="Click any module along the structured pathway to dynamically inspect its live technical blueprint and deliverables."
        />

        {/* ----------------------------------------------------------------------- */}
        {/* CRPC SHOWCASE BLOCK (INTERACTIVE) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="rounded-3xl bg-white border border-brand-border shadow-card overflow-hidden hover:border-brand-blue/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Pathway Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="blue" size="md">
                    {crpc.code} FLAGSHIP
                  </Badge>
                  <span className="text-xs font-mono font-bold text-brand-navy bg-brand-surface-blue px-3 py-1 rounded-full border border-brand-border">
                    Cloud · Data · DevOps · ServiceNow
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    12 Weeks · Live Online
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                    {crpc.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Designed for students targeting cloud infrastructure, automation pipelines, container orchestration, and enterprise IT service management.
                  </p>
                </div>

                {/* Step-by-Step Interactive Pathway Stepper */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Structured Curriculum Pathway:
                    </span>
                    <span className="text-[10px] text-brand-blue font-semibold">
                      Click to inspect live blueprint ▾
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {crpcPathway.map((st, idx) => {
                      const isSelected = selectedCrpcStep === idx;
                      return (
                        <button
                          key={st.step}
                          type="button"
                          onClick={() => setSelectedCrpcStep(idx)}
                          className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#EEF5FF] border-2 border-brand-blue shadow-sm scale-[1.02]'
                              : 'bg-slate-50 border-brand-border/70 hover:border-brand-blue/50 hover:bg-slate-100/80'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                            <span className={`font-mono ${isSelected ? 'text-brand-blue font-extrabold' : 'text-slate-500'}`}>
                              {st.step}
                            </span>
                            <span className="truncate">{st.title}</span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                            {st.detail}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-brand-border flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs text-slate-400 block line-through">
                    {BRAND_DATA.offer.originalPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-brand-navy">
                    {BRAND_DATA.offer.offerPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openCurriculum('crpc')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-brand-surface-blue text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/30 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Curriculum (PDF)</span>
                  </button>
                  <Button
                    to="/courses/crpc"
                    variant="secondary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore CRPC
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Dynamic Technical Canvas Column (Reactive to selectedCrpcStep) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy via-brand-dark-surface to-brand-navy p-6 sm:p-8 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                    Infrastructure Blueprint
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Step {crpcPathway[selectedCrpcStep].step} Active
                  </span>
                </div>

                {/* Dynamic Blueprint Card */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-extrabold text-[#7DD3FC] uppercase tracking-wider">
                        {currentCrpcBlueprint.badge}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {currentCrpcBlueprint.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>{currentCrpcBlueprint.title}</span>
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentCrpcBlueprint.description}
                    </p>

                    {/* Tools in this module */}
                    <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
                      {currentCrpcBlueprint.tools.map((t, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-slate-200 text-xs">
                          {t.icon}
                          <span>{t.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Targeted Lab Deliverable */}
                  <div className="p-3 rounded-xl bg-[#091E4E] border border-blue-400/25 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#19BCE8] uppercase tracking-wider block">
                      Targeted Production Deliverable:
                    </span>
                    <div className="flex items-start gap-1.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{currentCrpcBlueprint.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Summary */}
              <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                <div className="font-bold text-white text-[11px] uppercase tracking-wider">
                  Target Roles:
                </div>
                <div>Cloud Engineer · DevOps Specialist · Systems Admin · ServiceNow Developer</div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* DAAP SHOWCASE BLOCK (INTERACTIVE) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="rounded-3xl bg-white border border-brand-border shadow-card overflow-hidden hover:border-brand-orange/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Pathway Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="orange" size="md">
                    {daap.code} FLAGSHIP
                  </Badge>
                  <span className="text-xs font-mono font-bold text-brand-navy bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/30">
                    SQL · Python · Power BI · Agentic AI
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    12 Weeks · Live Online
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                    {daap.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Designed for students targeting quantitative analysis, relational databases, business intelligence reporting, and modern Agentic AI workflows.
                  </p>
                </div>

                {/* Step-by-Step Interactive Pathway Stepper */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Structured Curriculum Pathway:
                    </span>
                    <span className="text-[10px] text-[#FF7A00] font-semibold">
                      Click to inspect live blueprint ▾
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {daapPathway.map((st, idx) => {
                      const isSelected = selectedDaapStep === idx;
                      return (
                        <button
                          key={st.step}
                          type="button"
                          onClick={() => setSelectedDaapStep(idx)}
                          className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#FFF7ED] border-2 border-brand-orange shadow-sm scale-[1.02]'
                              : 'bg-slate-50 border-brand-border/70 hover:border-brand-orange/50 hover:bg-slate-100/80'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                            <span className={`font-mono ${isSelected ? 'text-brand-orange font-extrabold' : 'text-slate-500'}`}>
                              {st.step}
                            </span>
                            <span className="truncate">{st.title}</span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                            {st.detail}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-brand-border flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs text-slate-400 block line-through">
                    {BRAND_DATA.offer.originalPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-brand-navy">
                    {BRAND_DATA.offer.offerPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openCurriculum('daap')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-brand-orange/10 text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange/30 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Curriculum (PDF)</span>
                  </button>
                  <Button
                    to="/courses/daap"
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore DAAP
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Dynamic Technical Canvas Column (Reactive to selectedDaapStep) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-dark-section via-[#1c2242] to-brand-dark-surface p-6 sm:p-8 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
                    Data to AI Pipeline
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Step {daapPathway[selectedDaapStep].step} Active
                  </span>
                </div>

                {/* Dynamic Blueprint Card */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5 transition-all">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-extrabold text-[#FBBF24] uppercase tracking-wider">
                        {currentDaapBlueprint.badge}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {currentDaapBlueprint.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{currentDaapBlueprint.title}</span>
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentDaapBlueprint.description}
                    </p>

                    {/* Tools in this module */}
                    <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
                      {currentDaapBlueprint.tools.map((t, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-slate-200 text-xs">
                          {t.icon}
                          <span>{t.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Targeted Lab Deliverable */}
                  <div className="p-3 rounded-xl bg-[#24170E] border border-orange-500/25 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#FF7A00] uppercase tracking-wider block">
                      Targeted Production Deliverable:
                    </span>
                    <div className="flex items-start gap-1.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{currentDaapBlueprint.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Summary */}
              <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                <div className="font-bold text-white text-[11px] uppercase tracking-wider">
                  Target Roles:
                </div>
                <div>Data Analyst · BI Developer · SQL Specialist · AI Operations Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LEARNING JOURNEY CONTINUUM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Pedagogical Standard"
          title="The Five-Stage Progression"
          subtitle="Both programs adhere to the same rigorous five-stage continuum, ensuring conceptual depth translates to demonstrable competence."
        />

        <FiveStageVisualJourney />
      </section>

      {/* ========================================================================= */}
      {/* 4. VINAYAKA CHAVITHI ADMISSIONS SPECIAL OFFER */}
      {/* ========================================================================= */}
      <VinayakaOfferCard />
    </div>
  );
};
