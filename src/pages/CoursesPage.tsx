import React, { useState } from 'react';
import {
  ArrowRight,
  Tag,
  Check,
  Copy,
  FileText,
  Cloud,
  Database,
  Terminal,
  Bot,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
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
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const { openCurriculum } = useCurriculumModal();

  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

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
          subtitle="Click 'View Curriculum' on either program to inspect the actual PDF schedule and week-by-week module breakdown."
        />

        {/* ----------------------------------------------------------------------- */}
        {/* CRPC SHOWCASE BLOCK */}
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

                {/* Step-by-Step Pathway Stepper */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Structured Curriculum Pathway
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {crpcPathway.map((st) => (
                      <div
                        key={st.step}
                        className="p-2.5 rounded-xl bg-slate-50 border border-brand-border/70 space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                          <span className="font-mono text-brand-blue">{st.step}</span>
                          <span className="truncate">{st.title}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-tight">
                          {st.detail}
                        </p>
                      </div>
                    ))}
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

            {/* Right Technical Canvas Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy via-brand-dark-surface to-brand-navy p-6 sm:p-8 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                    Infrastructure Blueprint
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Lab Verified
                  </span>
                </div>

                {/* Cloud & DevOps Node Highlights */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-brand-cyan" />
                      <span>AWS Cloud Virtual Private Cloud</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <AwsLogo className="w-3.5 h-3" /> EC2 & VPC
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <DockerLogo className="w-3.5 h-3.5" /> Docker Containers
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <KubernetesLogo className="w-3.5 h-3.5" /> Kubernetes
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-brand-orange" />
                      <span>Continuous Integration & Deployment</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <JenkinsLogo className="w-3.5 h-3.5" /> Jenkins CI/CD
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <ServiceNowLogo className="w-3.5 h-3.5" /> ServiceNow ITSM
                      </span>
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
        {/* DAAP SHOWCASE BLOCK */}
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

                {/* Step-by-Step Pathway Stepper */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Structured Curriculum Pathway
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {daapPathway.map((st) => (
                      <div
                        key={st.step}
                        className="p-2.5 rounded-xl bg-slate-50 border border-brand-border/70 space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                          <span className="font-mono text-brand-orange">{st.step}</span>
                          <span className="truncate">{st.title}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-tight">
                          {st.detail}
                        </p>
                      </div>
                    ))}
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

            {/* Right Technical Canvas Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-dark-section via-[#1c2242] to-brand-dark-surface p-6 sm:p-8 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
                    Data to AI Pipeline
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Capstone Verified
                  </span>
                </div>

                {/* Data & AI Node Highlights */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Database className="w-4 h-4 text-emerald-400" />
                      <span>Relational Modeling & Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <SqlLogo className="w-3.5 h-3.5" /> PostgreSQL & SQL
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <PythonLogo className="w-3.5 h-3.5" /> Python EDA
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <PowerBiLogo className="w-3.5 h-3.5" /> Power BI
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Bot className="w-4 h-4 text-brand-cyan" />
                      <span>Context-Augmented & Agentic AI</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <RagLogo className="w-3.5 h-3.5" /> RAG Architectures
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-slate-200">
                        <AgenticAiLogo className="w-3.5 h-3.5" /> Multi-Agent Systems
                      </span>
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
      {/* 4. ADMISSIONS CAMPAIGN CARD */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border border-brand-orange/40 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-extrabold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Admissions Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {BRAND_DATA.offer.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Apply the coupon code to enroll in either CRPC or DAAP for ₹17,000 all-inclusive with full live mentoring and career preparation.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="text-slate-400 text-xl line-through font-semibold">
              {BRAND_DATA.offer.originalPrice}
            </span>
            <span className="text-4xl font-extrabold text-white font-heading">
              {BRAND_DATA.offer.offerPrice}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-dark-surface px-4 py-2 rounded-xl border border-brand-orange/40">
            <code className="text-base font-mono font-extrabold text-brand-orange">
              {BRAND_DATA.offer.couponCode}
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="p-1 text-slate-300 hover:text-white rounded transition-colors"
              title="Copy code"
            >
              {copiedCoupon ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
