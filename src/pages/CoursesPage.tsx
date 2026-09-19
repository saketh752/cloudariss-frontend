import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Tag,
  Check,
  Copy,
  FileText,
  Sparkles,
  Layers,
  Briefcase,
  Compass,
  Cpu,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  PythonLogo,
  ServiceNowLogo,
  SqlLogo,
  PowerBiLogo,
  ChatGptLogo,
  ClaudeLogo,
  LangChainLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';

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
              Explore Cloudariss programs designed around practical technology skills, hands-on projects, and career preparation.
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

      {/* ========================================================================= */}
      {/* 2. PROGRAM SHOWCASE BLOCKS — VISUAL & PICTORIAL UPGRADE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Two Specialized Flagships"
          title="Engineered for Depth. Grounded in Production."
          subtitle="Explore the two Cloudariss flagship accelerators. Click 'View Curriculum' to inspect the actual PDF schedule, or explore individual program deep-dives."
        />

        {/* ----------------------------------------------------------------------- */}
        {/* CRPC SHOWCASE BLOCK (50/50 Visual Split) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="rounded-3xl bg-white border-2 border-brand-border/90 shadow-card overflow-hidden hover:border-brand-blue/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Image Column (50%) */}
            <div className="lg:col-span-6 relative bg-brand-dark-section overflow-hidden min-h-[360px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8">
              <img
                src="/brand/brochures/crpc-brochure.jpg"
                alt="CRPC Cloud & Data Accelerator Visual"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-95 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

              {/* Floating Technology & Track Pills */}
              <div className="relative z-10 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-blue text-white shadow-subtle tracking-wider uppercase">
                    CLOUD & DATA ACCELERATOR
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-brand-navy backdrop-blur-sm">
                    4-Month Complete Journey
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-dark-surface/90 backdrop-blur-md border border-white/20 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs text-brand-cyan font-bold uppercase tracking-wider">
                    <span>Core Specializations</span>
                    <span>AWS • DevOps • ServiceNow</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    Hands-on infrastructure engineering from Linux & Python through multi-tier AWS deployments, Docker/Kubernetes container orchestration, and ServiceNow enterprise workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Details Column (50%) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Header line */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant="blue" size="md">
                    {crpc.code} FLAGSHIP
                  </Badge>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {crpc.format}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                    {crpc.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium leading-relaxed">
                    A comprehensive technical accelerator for learners targeting cloud infrastructure engineering, automated DevOps release pipelines, and enterprise systems administration.
                  </p>
                </div>

                {/* Key Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Duration</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">12 Weeks</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Curriculum</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">6 Key Stages</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Projects</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">4 Real Deployments</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Career</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">Weekend Circuit</span>
                  </div>
                </div>

                {/* Technology Logos Row */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technologies You Will Master
                  </span>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-brand-border/60 overflow-x-auto">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <AwsLogo className="w-6 h-4" /> <span>AWS</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <DockerLogo className="w-5 h-5" /> <span>Docker</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <KubernetesLogo className="w-5 h-5" /> <span>Kubernetes</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <JenkinsLogo className="w-5 h-5" /> <span>Jenkins</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <PythonLogo className="w-5 h-5" /> <span>Python</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <ServiceNowLogo className="w-5 h-5" /> <span>ServiceNow</span>
                    </div>
                  </div>
                </div>

                {/* Connected Curriculum Preview Strip */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Curriculum Progression Roadmap
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 flex-wrap">
                    {['01 Python', '02 Data Science', '03 AWS Cloud', '04 DevOps', '05 ServiceNow', '06 Career Prep'].map(
                      (step, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-brand-surface-light border border-brand-border/60 text-[11px] font-bold text-brand-navy"
                        >
                          {step}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Pricing & Dual Action Buttons */}
              <div className="pt-6 border-t border-brand-border space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block line-through">
                      {BRAND_DATA.offer.originalPrice}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-brand-navy">
                        {BRAND_DATA.offer.offerPrice}
                      </span>
                      <span className="text-xs font-bold text-brand-orange uppercase">
                        With Coupon
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Curriculum PDF Button */}
                    <button
                      type="button"
                      onClick={() => openCurriculum('crpc')}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-brand-surface-blue text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/30 shadow-subtle transition-all duration-200 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Curriculum</span>
                    </button>

                    {/* Explore Program Page */}
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
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* DAAP SHOWCASE BLOCK (50/50 Visual Split) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="rounded-3xl bg-white border-2 border-brand-border/90 shadow-card overflow-hidden hover:border-brand-orange/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Image Column (50%) */}
            <div className="lg:col-span-6 relative bg-brand-dark-section overflow-hidden min-h-[360px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8">
              <img
                src="/brand/brochures/daap-brochure.jpg"
                alt="DAAP Data Analyst Accelerator Visual"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-95 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

              {/* Floating Technology & Track Pills */}
              <div className="relative z-10 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-orange text-white shadow-subtle tracking-wider uppercase">
                    DATA & AI ACCELERATOR
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-brand-navy backdrop-blur-sm">
                    3-Month Intensive Sprint
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-brand-dark-surface/90 backdrop-blur-md border border-white/20 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs text-brand-cyan font-bold uppercase tracking-wider">
                    <span>Core Specializations</span>
                    <span>SQL • Power BI • GenAI • Agentic AI</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    Master modern business intelligence from Excel data modeling and advanced SQL queries through interactive Power BI dashboards, RAG systems, and autonomous multi-agent AI assistants.
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Details Column (50%) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Header line */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <Badge variant="orange" size="md">
                    {daap.code} FLAGSHIP
                  </Badge>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {daap.format}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                    {daap.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium leading-relaxed">
                    Engineered for aspiring data analysts, analytics engineers, and consultants seeking mastery over relational databases, modern BI, and AI-connected workflows.
                  </p>
                </div>

                {/* Key Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Duration</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">12 Weeks</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Curriculum</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">8 Key Steps</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Projects</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">6 + 1 Capstone</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-surface-light border border-brand-border/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Career</span>
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5 block">Weekend Circuit</span>
                  </div>
                </div>

                {/* Technology Logos Row */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Technologies You Will Master
                  </span>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-brand-border/60 overflow-x-auto">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <SqlLogo className="w-5 h-5" /> <span>SQL</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <PythonLogo className="w-5 h-5" /> <span>Python</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <PowerBiLogo className="w-5 h-5" /> <span>Power BI</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <ChatGptLogo className="w-5 h-5" /> <span>ChatGPT</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <ClaudeLogo className="w-5 h-5" /> <span>Claude</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <LangChainLogo className="w-5 h-5" /> <span>LangChain</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700 shrink-0">
                      <AgenticAiLogo className="w-5 h-5" /> <span>Agentic AI</span>
                    </div>
                  </div>
                </div>

                {/* Connected Curriculum Preview Strip */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Curriculum Progression Roadmap
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 flex-wrap">
                    {['01 Excel', '02 SQL', '03 Python', '04 Power BI', '05 Gen AI', '06 Agentic AI', '07 Projects', '08 Career Prep'].map(
                      (step, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-brand-surface-light border border-brand-border/60 text-[11px] font-bold text-brand-navy"
                        >
                          {step}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Pricing & Dual Action Buttons */}
              <div className="pt-6 border-t border-brand-border space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block line-through">
                      {BRAND_DATA.offer.originalPrice}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-brand-navy">
                        {BRAND_DATA.offer.offerPrice}
                      </span>
                      <span className="text-xs font-bold text-brand-orange uppercase">
                        With Coupon
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Curriculum PDF Button */}
                    <button
                      type="button"
                      onClick={() => openCurriculum('daap')}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-brand-surface-orange text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange/30 shadow-subtle transition-all duration-200 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Curriculum</span>
                    </button>

                    {/* Explore Program Page */}
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
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROGRAM DIFFERENTIATION — VISUAL COMPARISON */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Program Differentiation"
          title="Finding the Right Technical Alignment"
          subtitle="Both programs deliver intensive, deployment-tested training tailored to distinct career pathways in technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Focus Card */}
          <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-subtle space-y-6 hover:shadow-card transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 text-brand-blue flex items-center justify-center">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                  CRPC Engineering Pathway
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                  Cloud, Data & Infrastructure
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Focuses on how modern software systems run, scale, and automate at the platform layer. You will learn to provision cloud infrastructure on AWS, build continuous integration pipelines, containerize applications, and manage enterprise workflows.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-brand-border/60">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ideal For Learners Who Want To:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Work with cloud servers, networks, and storage (AWS EC2, VPC, S3, RDS)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Automate deployments using Docker containers, Kubernetes, and Jenkins CI/CD</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Manage enterprise IT services with ServiceNow platform workflows</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DAAP Focus Card */}
          <div className="p-8 rounded-2xl bg-white border border-brand-border shadow-subtle space-y-6 hover:shadow-card transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center">
                <Compass className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-orange">
                  DAAP Intelligence Pathway
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-heading">
                  Data Analytics & Agentic AI
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Focuses on how commercial business intelligence is extracted from raw databases and augmented by artificial intelligence. You will learn to model relational datasets, design interactive visual dashboards, and deploy autonomous analytics agents.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-brand-border/60">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ideal For Learners Who Want To:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Query complex relational schemas using SQL (joins, CTEs, window functions)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Build executive reporting dashboards using Power BI Desktop and DAX modeling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Harness Generative AI, RAG knowledge systems, and autonomous agentic workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROGRESSIVE LEARNING METHODOLOGY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Connected 5-Stage Learning Architecture"
          subtitle="Regardless of track, every Cloudariss program follows an interconnected progression: Learn → Practice → Build → Prepare → Get Hired."
        />

        <FiveStageVisualJourney />
      </section>

      {/* ========================================================================= */}
      {/* 5. CAREER PREPARATION CIRCUIT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Integrated Career Support"
          title="Documented Career Development Circuit"
          subtitle="Career skills compound alongside technical weeks to ensure learners articulate their knowledge with poise and pass technical interview rounds."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Resume Optimization',
              desc: 'ATS-compliant templates, action-verb quantification, and mock recruiter screenings.',
              icon: <FileText className="w-5 h-5 text-brand-blue" />,
            },
            {
              title: 'LinkedIn Profile Building',
              desc: 'Strategic headline positioning, technical endorsements, and SSI score improvement.',
              icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
            },
            {
              title: 'Job Search Strategy',
              desc: 'Boolean search strings across portals, application tracking, and cold-outreach templates.',
              icon: <Compass className="w-5 h-5 text-brand-blue" />,
            },
            {
              title: 'Mock Interview Circuit',
              desc: 'Live technical drills, problem-solving explanations, and HR behavioral simulations.',
              icon: <Briefcase className="w-5 h-5 text-brand-orange" />,
            },
            {
              title: 'Career Guidance Roadmap',
              desc: 'Personalized 30-60-90 day job search plans, offer reading, and career ladder roadmaps.',
              icon: <CheckCircle2 className="w-5 h-5 text-brand-blue" />,
            },
            {
              title: 'Virtual Company Sessions',
              desc: 'Interactive live sessions with practitioners operating out of Rushikonda IT Park and VSEZ.',
              icon: <Layers className="w-5 h-5 text-brand-cyan" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-brand-border/80 shadow-subtle hover:shadow-card transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-surface-light border border-brand-border flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-brand-navy font-heading">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CURRENT OFFER CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border-2 border-brand-orange/40 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
            <Tag className="w-3.5 h-3.5" />
            <span>Admissions Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Vinayaka Chavithi Special Offer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Enroll in either CRPC or DAAP during our festive intake with all-inclusive access to live classes, labs, official course curriculum, and career support.
          </p>

          <div className="flex items-center justify-center gap-4 py-2">
            <span className="text-2xl sm:text-3xl text-slate-400 line-through font-semibold">
              {BRAND_DATA.offer.originalPrice}
            </span>
            <span className="text-xl sm:text-2xl text-brand-orange font-bold">→</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
              {BRAND_DATA.offer.offerPrice}
            </span>
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-brand-dark-surface p-3 sm:px-6 rounded-xl border border-brand-orange/40 shadow-inner">
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Coupon Code:
            </span>
            <code className="text-lg font-mono font-extrabold text-brand-cyan tracking-wider">
              {BRAND_DATA.offer.couponCode}
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-blue/40 hover:bg-brand-blue/60 text-xs font-semibold text-white transition-colors cursor-pointer"
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
              to="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
