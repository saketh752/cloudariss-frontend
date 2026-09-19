import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Copy,
  Layers,
  Terminal,
  Cpu,
  Cloud,
  GitBranch,
  Briefcase,
  CheckCircle2,
  PhoneCall,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BRAND_DATA } from '@/data/brandData';

export const HomePage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<'daap' | 'crpc'>('daap');

  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

  // Documented DAAP Projects from curriculum
  const daapProjects = [
    {
      title: 'AI-Assisted Sales Dashboard',
      tools: ['Excel', 'Pivot Tables', 'Formulas', 'Generative AI'],
      description: 'Interactive commercial sales dashboard comparing human-calculated KPIs with AI-synthesized narrative insights.',
    },
    {
      title: 'SQL Database Analysis',
      tools: ['SQL', 'PostgreSQL', 'CTEs', 'Window Functions'],
      description: 'Multi-table relational schema analysis with complex business queries, aggregations, and query optimization.',
    },
    {
      title: 'Data Analyst Knowledge Assistant',
      tools: ['Vector Embeddings', 'RAG', 'Retrieval Tools'],
      description: 'Retrieval-Augmented Generation system allowing natural language querying over technical documentation with grounded sources.',
    },
    {
      title: 'Python EDA + AI Hypothesis Lab',
      tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      description: 'Exploratory data analysis on retail datasets where AI proposes hypotheses that are mathematically validated in code.',
    },
    {
      title: 'Power BI Dashboard + AI Narrative',
      tools: ['Power BI Desktop', 'DAX', 'Power Query', 'Data Modeling'],
      description: 'Enterprise HR and sales metrics visualization dashboard with governed data sources and validated automated narratives.',
    },
    {
      title: 'End-to-End Agentic Data Analytics Project',
      tools: ['Agentic Frameworks', 'LangChain/CrewAI', 'SQL/Python Tools'],
      description: 'Comprehensive portfolio capstone: plan -> tool execution -> data analysis -> verification -> executive reporting.',
    },
  ];

  // Documented CRPC Projects from curriculum
  const crpcProjects = [
    {
      title: 'Data / EDA Project',
      tools: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
      description: 'End-to-end exploratory data analysis and baseline machine learning workflow covering data preprocessing and evaluation.',
    },
    {
      title: 'AWS Application Deployment',
      tools: ['AWS EC2', 'RDS MySQL', 'ALB', 'VPC', 'IAM'],
      description: 'Three-tier web application deployed across public and private subnets behind an Application Load Balancer with secure database access.',
    },
    {
      title: 'DevOps CI/CD Project',
      tools: ['Docker', 'Jenkins', 'GitHub Webhooks', 'Linux'],
      description: 'Automated continuous integration and deployment pipeline triggered from repository pushes to containerized EC2 hosting.',
    },
    {
      title: 'Enterprise Integration Capstone',
      tools: ['AWS Cloud', 'DevOps / ServiceNow', 'Monitoring'],
      description: 'Production-style infrastructure setup with centralized monitoring via Prometheus & Grafana, incident response, and demo-ready presentation.',
    },
  ];

  // Structured Technology Ecosystem categories
  const techEcosystem = [
    {
      category: 'Cloud & Infrastructure',
      tools: [
        { name: 'AWS', role: 'Cloud Infrastructure & Managed Services' },
        { name: 'Docker', role: 'Containerization & Image Packaging' },
        { name: 'Kubernetes', role: 'Container Orchestration & Scaling' },
      ],
    },
    {
      category: 'DevOps & Enterprise Automation',
      tools: [
        { name: 'Jenkins', role: 'Continuous Integration & Build Pipelines' },
        { name: 'Grafana', role: 'Metrics Visualization & Dashboards' },
        { name: 'ServiceNow', role: 'ITSM & Workflow Automation' },
        { name: 'GitHub', role: 'Version Control & Actions Automation' },
      ],
    },
    {
      category: 'Data Engineering & Analytics',
      tools: [
        { name: 'Python', role: 'Data Analysis, Scripting & Modeling' },
        { name: 'SQL', role: 'Relational Querying & Database Design' },
        { name: 'Power BI', role: 'Business Intelligence & DAX Analytics' },
      ],
    },
    {
      category: 'Generative & Agentic AI',
      tools: [
        { name: 'Agentic AI', role: 'Autonomous Multi-Tool Agent Workflows' },
        { name: 'RAG', role: 'Retrieval-Augmented Generation Architecture' },
        { name: 'LangChain', role: 'LLM Orchestration Framework' },
        { name: 'ChatGPT', role: 'Prompt Engineering & Reasoning' },
        { name: 'Claude', role: 'Analysis, Architecture & Code Synthesis' },
        { name: 'Google Gemini', role: 'Multimodal AI & Document Processing' },
      ],
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                  TECHNOLOGY • DATA • CLOUD • AUTOMATION
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
                Learn. Build.{' '}
                <span className="text-gradient-tech">Get Hired.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering careers with Cloud, Data & Automation Skills.
              </p>

              {/* Trust Indicators */}
              <p className="text-sm text-slate-500 max-w-lg mx-auto lg:mx-0 leading-normal">
                Structured 12-week accelerators delivering live instructor-led technical depth, compounding career readiness, and hands-on capstone engineering.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  to="/courses"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Programs
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  leftIcon={<PhoneCall className="w-4 h-4 text-brand-blue" />}
                >
                  Talk to Us
                </Button>
              </div>

              {/* Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  100% Online Live Classes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  Visakhapatnam (Vizag) Roots
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  End-to-End Capstones
                </span>
              </div>
            </div>

            {/* Hero Right Visual: Technical Depth & Architecture Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Tech Visual Canvas */}
                <div className="relative rounded-2xl bg-brand-dark-section border border-brand-blue/40 shadow-2xl p-6 sm:p-7 text-white overflow-hidden">
                  {/* Subtle top atmospheric bar */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-[11px] font-mono text-slate-400 ml-2">cloudariss.infra.runtime</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-cyan bg-brand-dark-surface px-2 py-0.5 rounded border border-brand-blue/30">
                      LIVE ACCELERATOR
                    </span>
                  </div>

                  {/* Architecture & Pipeline Visual Nodes */}
                  <div className="py-6 space-y-4">
                    {/* Node 1: Cloud & Infrastructure */}
                    <div className="p-3 rounded-xl bg-brand-dark-surface/90 border border-brand-blue/30 flex items-center justify-between hover:border-brand-cyan/60 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-cyan border border-brand-cyan/30">
                          <Cloud className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">Cloud Infrastructure</div>
                          <div className="text-[11px] text-slate-400 font-mono">AWS VPC · EC2 · RDS · IAM</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        HEALTHY
                      </span>
                    </div>

                    {/* Connector Line */}
                    <div className="flex justify-center -my-2 relative z-10">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-brand-cyan to-brand-blue" />
                    </div>

                    {/* Node 2: Automation & DevOps */}
                    <div className="p-3 rounded-xl bg-brand-dark-surface/90 border border-brand-blue/30 flex items-center justify-between hover:border-brand-cyan/60 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue border border-brand-blue/30">
                          <GitBranch className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">CI/CD & Automation</div>
                          <div className="text-[11px] text-slate-400 font-mono">Docker · Jenkins · Linux · K8s</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-brand-cyan bg-brand-dark-section px-2 py-0.5 rounded border border-brand-cyan/40">
                        PIPELINE ACTIVE
                      </span>
                    </div>

                    {/* Connector Line */}
                    <div className="flex justify-center -my-2 relative z-10">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-brand-blue to-brand-orange" />
                    </div>

                    {/* Node 3: Data Analytics & Agentic AI */}
                    <div className="p-3 rounded-xl bg-brand-dark-surface/90 border border-brand-blue/30 flex items-center justify-between hover:border-brand-orange/60 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange border border-brand-orange/40">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white tracking-wide">Data & Agentic AI</div>
                          <div className="text-[11px] text-slate-400 font-mono">SQL · Python · Power BI · RAG</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded border border-brand-orange/30">
                        VALIDATED
                      </span>
                    </div>
                  </div>

                  {/* Visual Footer Metrics */}
                  <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Cohort Model</div>
                      <div className="text-sm font-extrabold text-white">12-Week Sprints</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400 font-medium">Evaluation</div>
                      <div className="text-sm font-extrabold text-brand-cyan">Production Capstones</div>
                    </div>
                  </div>
                </div>

                {/* Subtle outer accent badges */}
                <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-brand-border text-xs font-bold text-brand-navy">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  <span>Dual Track: Tech + Career</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VINAYAKA CHAVITHI SPECIAL OFFER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-brand-dark-section via-brand-dark-surface to-brand-dark-section p-6 sm:p-10 border border-brand-orange/40 shadow-xl overflow-hidden">
          {/* Subtle atmospheric orange glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Offer Copy */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-xs font-extrabold tracking-wider uppercase">
                <Tag className="w-3.5 h-3.5" />
                <span>LIMITED-TIME OFFER</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {BRAND_DATA.offer.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Enroll in any 12-Week Career Accelerator with full live instruction, project reviews, and placement assistance at our special festive tuition.
              </p>

              {/* Pricing Callout */}
              <div className="flex items-baseline justify-center lg:justify-start gap-4 pt-1">
                <span className="text-slate-400 text-lg sm:text-xl line-through font-semibold">
                  {BRAND_DATA.offer.originalPrice}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {BRAND_DATA.offer.offerPrice}
                </span>
                <span className="text-xs text-brand-cyan font-semibold">
                  All-inclusive cohort fee
                </span>
              </div>
            </div>

            {/* Coupon Box & Action */}
            <div className="bg-brand-dark-section/90 border border-brand-orange/40 rounded-xl p-5 sm:p-6 text-center shrink-0 w-full sm:w-auto space-y-4 shadow-lg">
              <div className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                Official Campaign Coupon
              </div>

              <div className="flex items-center justify-center gap-2 bg-brand-dark-surface px-4 py-2.5 rounded-lg border border-brand-orange/40">
                <code className="text-lg font-mono font-extrabold text-brand-orange tracking-wider">
                  Use Code: {BRAND_DATA.offer.couponCode}
                </code>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors"
                  title="Copy coupon code"
                  aria-label="Copy coupon code"
                >
                  {copiedCoupon ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <Button
                to="/courses"
                variant="primary"
                size="lg"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Offer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE OFFER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Engineered for Practical Excellence"
          subtitle="Four core pillars structured into every Cloudariss program to ensure you progress from theory to deployment-grade capability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <Card variant="white" padding="lg" hoverEffect borderAccent="blue" className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border text-brand-blue">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">
              Technical Learning
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Live, instructor-led sessions covering core algorithms, cloud architecture, automation scripts, and analytics modeling.
            </p>
          </Card>

          {/* Pillar 2 */}
          <Card variant="white" padding="lg" hoverEffect borderAccent="orange" className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border text-brand-orange">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">
              Hands-on Projects
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Direct implementation on live cloud infrastructure and real business datasets with teacher-led code reviews.
            </p>
          </Card>

          {/* Pillar 3 */}
          <Card variant="white" padding="lg" hoverEffect borderAccent="cyan" className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border text-[#0a6680]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">
              Modern Technologies
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Curricula aligned with current industry standards: Agentic AI, AWS Cloud, Docker containers, Power BI, and ServiceNow.
            </p>
          </Card>

          {/* Pillar 4 */}
          <Card variant="white" padding="lg" hoverEffect borderAccent="blue" className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border text-brand-blue">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy">
              Career Preparation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dedicated Saturday career strategy sessions and Sunday mock interview circuits integrated alongside technical learning.
            </p>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR PROGRAMS */}
      {/* ========================================================================= */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Flagship Career Accelerators"
          subtitle="Choose between specialized cloud infrastructure engineering or modern data analytics empowered by Generative and Agentic AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Program Card */}
          <Card
            variant="white"
            padding="lg"
            hoverEffect
            borderAccent="blue"
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="blue" size="md">
                  {crpc.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  100% Online · Live Classes
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Cloud & Data Career Accelerator
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Master the core infrastructure disciplines powering modern enterprise platforms: Python scripting, Data Science essentials, AWS Cloud architecture, DevOps automation, and ServiceNow platform workflows.
                </p>
              </div>

              {/* Core Areas */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Areas Covered
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Data Science', 'AWS', 'DevOps', 'ServiceNow'].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-md bg-brand-surface-blue text-brand-navy border border-brand-border text-xs font-bold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Program Information Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">12 Weeks</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Modules</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">8 Modules</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Labs</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">Real Projects</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Exposure</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">Virtual Company</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block line-through">
                  {BRAND_DATA.offer.originalPrice}
                </span>
                <span className="text-2xl font-extrabold text-brand-navy">
                  {BRAND_DATA.offer.offerPrice}
                </span>
              </div>
              <Button
                to="/courses/crpc"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRPC
              </Button>
            </div>
          </Card>

          {/* DAAP Program Card */}
          <Card
            variant="white"
            padding="lg"
            hoverEffect
            borderAccent="orange"
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="orange" size="md">
                  {daap.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  100% Online · Live Classes
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Go from spreadsheet modeling to scalable data analytics: Excel formulas, complex SQL querying, Python EDA, Power BI business dashboards, Generative AI (RAG), and autonomous Agentic AI tools.
                </p>
              </div>

              {/* Core Areas */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Areas Covered
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Excel', 'SQL', 'Python', 'Power BI', 'Generative AI', 'Agentic AI'].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-md bg-brand-orange/10 text-brand-navy border border-brand-orange/30 text-xs font-bold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Program Information Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">12 Weeks</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Practice</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">5+ Projects</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Capstone</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">1 Capstone</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Readiness</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">Career Support</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block line-through">
                  {BRAND_DATA.offer.originalPrice}
                </span>
                <span className="text-2xl font-extrabold text-brand-navy">
                  {BRAND_DATA.offer.offerPrice}
                </span>
              </div>
              <Button
                to="/courses/daap"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore DAAP
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LEARN → PRACTICE → BUILD → PREPARE → GET HIRED */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="The Learning Journey"
          title="A Structured Progression to Career Competence"
          subtitle="Our methodology guides you through five sequential phases designed to build genuine, demonstrable engineering strength."
        />

        {/* Connected Visual Journey / Timeline */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange -translate-y-6 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {/* Step 01 */}
            <div className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-blue transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-brand-blue">01</span>
                <span className="w-3 h-3 rounded-full bg-brand-blue" />
              </div>
              <h4 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                LEARN
              </h4>
              <p className="text-sm font-medium text-slate-600">
                Structured knowledge
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Live foundational classes breaking down complex computer science concepts into accessible, clear mental models.
              </p>
            </div>

            {/* Step 02 */}
            <div className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-blue transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-brand-blue">02</span>
                <span className="w-3 h-3 rounded-full bg-brand-blue" />
              </div>
              <h4 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                PRACTICE
              </h4>
              <p className="text-sm font-medium text-slate-600">
                Hands-on experience
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Daily lab exercises, sandbox coding environments, query challenges, and guided infrastructure deployments.
              </p>
            </div>

            {/* Step 03 */}
            <div className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-cyan transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-[#0a6680]">03</span>
                <span className="w-3 h-3 rounded-full bg-brand-cyan" />
              </div>
              <h4 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                BUILD
              </h4>
              <p className="text-sm font-medium text-slate-600">
                Real-world projects
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Developing verifiable production artifacts: multi-tier cloud architectures, agentic pipelines, and interactive BI dashboards.
              </p>
            </div>

            {/* Step 04 */}
            <div className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-orange transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-brand-orange">04</span>
                <span className="w-3 h-3 rounded-full bg-brand-orange" />
              </div>
              <h4 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                PREPARE
              </h4>
              <p className="text-sm font-medium text-slate-600">
                Career readiness
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Saturday ATS resume audits, LinkedIn positioning, and Sunday technical circuits with mock interview panels.
              </p>
            </div>

            {/* Step 05 */}
            <div className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-orange transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold font-mono text-brand-orange">05</span>
                <span className="w-3 h-3 rounded-full bg-brand-orange" />
              </div>
              <h4 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                GET HIRED
              </h4>
              <p className="text-sm font-medium text-slate-600">
                Career opportunities
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Strategic job outreach, direct virtual company sessions, alumni network activation, and internship interview rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TECHNOLOGY ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Technology Stack"
          title="A Modern, Enterprise-Relevant Ecosystem"
          subtitle="Curricula structured around industry-standard tools spanning cloud services, data frameworks, DevOps automation, and current AI architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techEcosystem.map((group) => (
            <Card key={group.category} variant="white" padding="lg" className="border border-brand-border shadow-card space-y-4">
              <div className="flex items-center justify-between border-b border-brand-border/60 pb-3">
                <h3 className="text-base font-bold text-brand-navy">
                  {group.category}
                </h3>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {group.tools.length} Tools
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {group.tools.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-lg bg-brand-surface-blue/60 border border-brand-border/80 hover:border-brand-blue/40 transition-colors"
                  >
                    <div className="text-sm font-extrabold text-brand-navy">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 leading-tight mt-0.5">
                      {item.role}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Documented Projects"
            title="Portfolio-Grade Engineering Artifacts"
            subtitle="Explore the documented practical projects created during the 12-week accelerator tracks."
            align="left"
            className="md:max-w-xl"
          />

          {/* Program Toggle */}
          <div className="inline-flex rounded-lg p-1 bg-slate-100 border border-brand-border shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveProjectTab('daap')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                activeProjectTab === 'daap'
                  ? 'bg-white text-brand-orange shadow-subtle'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              DAAP Projects ({daapProjects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveProjectTab('crpc')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                activeProjectTab === 'crpc'
                  ? 'bg-white text-brand-blue shadow-subtle'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              CRPC Projects ({crpcProjects.length})
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeProjectTab === 'daap' ? daapProjects : crpcProjects).map((project, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="md"
              hoverEffect
              borderAccent={activeProjectTab === 'daap' ? 'orange' : 'blue'}
              className="flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PRJ-0{idx + 1}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-bold uppercase text-brand-navy">
                    {activeProjectTab.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/60">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CAREER SUPPORT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Career Support"
          title="Comprehensive Career Readiness System"
          subtitle="Compounding career guidance conducted alongside technical weeks to ensure you communicate, present, and interview with confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Resume Optimization',
              desc: 'ATS-friendly formatting, quantifying technical achievements, GitHub profile linkage, and mock recruiter screenings.',
            },
            {
              title: 'LinkedIn Profile Building',
              desc: 'Strategic headline writing, technical skills endorsement, SSI score walkthroughs, and proactive recruiter outreach.',
            },
            {
              title: 'Job Search Strategy',
              desc: 'Boolean search strings across portals, application tracker management, and personalized cold-outreach templates.',
            },
            {
              title: 'Mock Interviews',
              desc: 'Simulated technical Q&A rounds, live code challenges, and HR behavioral simulations in virtual breakout rooms.',
            },
            {
              title: 'Career Guidance',
              desc: 'Salary negotiation basics, offer letter evaluation, IT career ladders, and personalized 30-60-90 day job search roadmaps.',
            },
            {
              title: 'Industry & Company Sessions',
              desc: 'Live webinars with engineers and founders operating out of Rushikonda IT Park and VSEZ for direct industry exposure.',
            },
          ].map((item, i) => (
            <Card key={i} variant="surface" padding="md" className="border border-brand-border/80 space-y-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <h3 className="text-base font-bold text-brand-navy">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CURRENT OFFER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border-2 border-brand-orange/50 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle festive atmospheric glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
              <Tag className="w-3.5 h-3.5" />
              <span>Festive Admissions Spotlight</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Vinayaka Chavithi Special Offer
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Step into an intensive 12-week technology cohort with live mentoring, production-grade projects, and complete career preparation.
            </p>

            {/* Price transformation */}
            <div className="flex items-center justify-center gap-4 py-2">
              <span className="text-2xl sm:text-3xl text-slate-400 line-through font-semibold">
                {BRAND_DATA.offer.originalPrice}
              </span>
              <span className="text-xl sm:text-2xl text-brand-orange font-bold">→</span>
              <span className="text-4xl sm:text-5xl font-extrabold text-white">
                {BRAND_DATA.offer.offerPrice}
              </span>
            </div>

            {/* Coupon Callout */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-brand-dark-surface p-3 sm:px-6 rounded-xl border border-brand-orange/40 shadow-inner">
              <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                Promotional Code:
              </span>
              <code className="text-lg font-mono font-extrabold text-brand-cyan tracking-wider">
                {BRAND_DATA.offer.couponCode}
              </code>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-blue/40 hover:bg-brand-blue/60 text-xs font-semibold text-white transition-colors"
                title="Copy coupon code"
              >
                {copiedCoupon ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2">
              <Button
                to="/courses"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CERTIFICATE VERIFICATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="white" padding="lg" className="border border-brand-border shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-surface-blue flex items-center justify-center border border-brand-border text-brand-blue shrink-0 shadow-subtle">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-brand-navy">
                  Verify Your Certificate
                </h3>
                <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                  Verify your Cloudariss certificate using the certificate ID provided on your certificate. Authenticate credentials issued for official workshops, hackathons, and technical webinars.
                </p>
              </div>
            </div>

            <Button
              to="/verify-certificate"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Verify Certificate
            </Button>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-b from-brand-surface-blue to-white border border-brand-border p-8 sm:p-14 text-center space-y-6 shadow-subtle">
          <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-brand-blue bg-white px-3.5 py-1 rounded-full border border-brand-border shadow-subtle">
            {BRAND_DATA.tagline}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight max-w-2xl mx-auto leading-tight">
            Your next opportunity starts with what you build today.
          </h2>

          <p className="text-base text-slate-600 max-w-lg mx-auto font-medium">
            Learn. Build. Get Hired. Choose your accelerator program and join our upcoming cohort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              to="/courses/crpc"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore CRPC
            </Button>
            <Button
              to="/courses/daap"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore DAAP
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
