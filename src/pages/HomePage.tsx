import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Copy,
  Terminal,
  Cpu,
  Layers,
  Briefcase,
  CheckCircle2,
  PhoneCall,
  FileText,
  Building2,
  Users,
  Code2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { TechEcosystemVisual } from '@/components/home/TechEcosystemVisual';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { HeroTechnicalVisual } from '@/components/home/HeroTechnicalVisual';
import { TechMarqueeRibbon, DomainTickerRibbon } from '@/components/ui/TechMarqueeRibbon';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';

export const HomePage: React.FC = () => {
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
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: EDITORIAL + BALANCED TECHNICAL COMPOSITION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Hero Left: Editorial Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                  PRACTICAL TECHNOLOGY & CAREER ACCELERATORS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12] font-heading">
                Learn. Build.{' '}
                <span className="text-gradient-tech">Get Hired.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering careers with practical Cloud, Data, Automation & AI skills.
              </p>

              {/* Editorial Trust Statement */}
              <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto lg:mx-0 leading-normal font-medium">
                Structured 12-week accelerators delivering live instructor-led technical depth, compounding weekend career preparation, and verified capstone engineering.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
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
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy hover:text-brand-blue text-sm font-bold shadow-sm hover:shadow transition-all"
                >
                  <FileText className="w-4 h-4 text-brand-blue" />
                  <span>CRPC Syllabi</span>
                </button>
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy hover:text-brand-orange text-sm font-bold shadow-sm hover:shadow transition-all"
                >
                  <FileText className="w-4 h-4 text-brand-orange" />
                  <span>DAAP Syllabi</span>
                </button>
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
                  Portfolio-Grade Capstones
                </span>
              </div>
            </div>

            {/* Hero Right: Balanced Technical Visual Composition */}
            <div className="lg:col-span-5">
              <HeroTechnicalVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CONTINUOUS TECHNOLOGY SCROLLING MARQUEE */}
      {/* ========================================================================= */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 3. VINAYAKA CHAVITHI SPECIAL OFFER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-dark-section via-brand-dark-surface to-brand-dark-section p-6 sm:p-10 border border-brand-orange/40 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Offer Copy */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-xs font-extrabold tracking-wider uppercase">
                <Tag className="w-3.5 h-3.5" />
                <span>LIMITED-TIME ADMISSIONS CAMPAIGN</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
                {BRAND_DATA.offer.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-medium">
                Enroll in any 12-Week Career Accelerator with full live instruction, real lab workstations, and placement assistance at our special festive tuition.
              </p>

              {/* Pricing Callout */}
              <div className="flex items-baseline justify-center lg:justify-start gap-4 pt-1">
                <span className="text-slate-400 text-lg sm:text-xl line-through font-semibold">
                  {BRAND_DATA.offer.originalPrice}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                  {BRAND_DATA.offer.offerPrice}
                </span>
                <span className="text-xs text-brand-cyan font-semibold">
                  All-inclusive cohort fee
                </span>
              </div>
            </div>

            {/* Coupon Box & Action */}
            <div className="bg-brand-dark-section/90 border border-brand-orange/40 rounded-2xl p-5 sm:p-6 text-center shrink-0 w-full sm:w-auto space-y-4 shadow-lg">
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
                  className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
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
                View Offer Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE OFFER — REFINED EDITORIAL PILLARS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Engineered for Practical Excellence"
          subtitle="Four core foundations structured into every Cloudariss program to ensure you progress from initial concepts to deployment-grade capability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Technical Learning',
              subtitle: 'Live Interactive Cohorts',
              desc: 'Rigorous instructor-led classes breaking down cloud architecture, algorithms, relational querying, and systems thinking.',
              icon: <Terminal className="w-5 h-5 text-brand-blue" />,
              borderAccent: 'border-l-4 border-l-brand-blue',
              accentPill: 'Live Online Labs',
            },
            {
              title: 'Hands-on Projects',
              subtitle: 'Production GitHub Repos',
              desc: 'Direct implementation on live cloud infrastructure and real business datasets with teacher-led code reviews.',
              icon: <Layers className="w-5 h-5 text-brand-orange" />,
              borderAccent: 'border-l-4 border-l-brand-orange',
              accentPill: '10+ Capstones',
            },
            {
              title: 'Modern Technologies',
              subtitle: 'Cloud, Data, DevOps & AI',
              desc: 'Curricula aligned with current enterprise stacks: Agentic AI, AWS Cloud, Docker, Kubernetes, Power BI, and ServiceNow.',
              icon: <Cpu className="w-5 h-5 text-[#0a6680]" />,
              borderAccent: 'border-l-4 border-l-brand-cyan',
              accentPill: 'Industry Stacks',
            },
            {
              title: 'Career Preparation',
              subtitle: 'Weekend Mocks & Resumes',
              desc: 'Dedicated Saturday ATS career strategy workshops and Sunday mock interview circuits integrated alongside technical learning.',
              icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
              borderAccent: 'border-l-4 border-l-brand-navy',
              accentPill: 'Sat & Sun Tracks',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-white border border-brand-border/80 p-6 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 ${item.borderAccent}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border/60">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.accentPill}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy font-heading mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center gap-1 text-[11px] font-bold text-brand-blue">
                <span>Outcome-Driven Design</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR FLAGSHIP PROGRAMS: PATHWAY ARCHITECTURE */}
      {/* ========================================================================= */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Two Distinct Engineering Directions"
          subtitle="Choose between specialized cloud infrastructure engineering or modern data analytics empowered by Generative and Agentic AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Card */}
          <div className="rounded-3xl bg-white border border-brand-border shadow-card hover:border-brand-blue/60 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Pathway Header Bar */}
            <div className="bg-gradient-to-r from-brand-navy to-brand-dark-surface p-6 text-white space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="blue" size="md">
                  {crpc.code} FLAGSHIP
                </Badge>
                <span className="text-xs font-mono font-bold text-brand-cyan bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                  12 Weeks · Live Online
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-heading">
                {crpc.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cloud infrastructure architecture, automated CI/CD pipelines, container orchestration, and IT service management.
              </p>

              {/* Connected Visual Pathway */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                  Curriculum Pathway
                </div>
                <div className="flex items-center gap-1.5 flex-wrap text-[11px] font-mono text-slate-200">
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">01 Python</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">02 Data Science</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-brand-blue text-white font-bold">03 AWS Cloud</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">04 DevOps</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">05 ServiceNow</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Engineering Stacks:
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <AwsLogo className="w-4 h-3.5" /> AWS Cloud (EC2, VPC, ALB)
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <DockerLogo className="w-4 h-4" /> Docker
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <KubernetesLogo className="w-4 h-4" /> Kubernetes
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <JenkinsLogo className="w-4 h-4" /> Jenkins CI/CD
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-brand-navy font-bold">Targeted Industry Roles:</strong> Cloud Engineer, DevOps Engineer, AWS Infrastructure Administrator, Systems Specialist, ServiceNow Developer.
                </div>
              </div>

              {/* Action Footer */}
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold bg-brand-surface-blue text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/30 transition-colors cursor-pointer"
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
          </div>

          {/* DAAP Card */}
          <div className="rounded-3xl bg-white border border-brand-border shadow-card hover:border-brand-orange/60 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Pathway Header Bar */}
            <div className="bg-gradient-to-r from-brand-dark-section via-[#1c234a] to-brand-dark-surface p-6 text-white space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="orange" size="md">
                  {daap.code} FLAGSHIP
                </Badge>
                <span className="text-xs font-mono font-bold text-brand-orange bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                  12 Weeks · Live Online
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-heading">
                {daap.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Relational SQL querying, EDA with Python Pandas, interactive Power BI executive dashboards, and Agentic AI workflows.
              </p>

              {/* Connected Visual Pathway */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                  Curriculum Pathway
                </div>
                <div className="flex items-center gap-1.5 flex-wrap text-[11px] font-mono text-slate-200">
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">01 Excel</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">02 SQL DB</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">03 Python</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15">04 Power BI</span>
                  <span>→</span>
                  <span className="px-2 py-0.5 rounded bg-brand-orange text-white font-bold">05 Agentic AI</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Analytics Stacks:
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <SqlLogo className="w-4 h-4" /> SQL / PostgreSQL
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <PythonLogo className="w-4 h-4" /> Python & Pandas
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-surface-blue px-2.5 py-1 rounded-md border border-brand-border">
                      <PowerBiLogo className="w-4 h-4" /> Power BI & DAX
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy bg-brand-orange/10 px-2.5 py-1 rounded-md border border-brand-orange/30">
                      <AgenticAiLogo className="w-4 h-4" /> Agentic AI & RAG
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-brand-navy font-bold">Targeted Industry Roles:</strong> Data Analyst, Business Intelligence Engineer, Quantitative Operations Analyst, SQL Specialist, AI-Assisted Analyst.
                </div>
              </div>

              {/* Action Footer */}
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold bg-brand-orange/10 text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange/30 transition-colors cursor-pointer"
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
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LEARNING METHODOLOGY: FIVE-STAGE PROGRESSION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Cloudariss Learning Continuum"
          subtitle="A systematic five-phase progression taking learners from conceptual foundations to verifiable engineering competence."
        />

        <FiveStageVisualJourney />
      </section>

      {/* Rhythm Divider */}
      <DomainTickerRibbon />

      {/* ========================================================================= */}
      {/* 7. CONNECTED TECHNOLOGY ECOSYSTEM ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="Connected Engineering Pipeline"
          subtitle="How modern cloud infrastructure, automation pipelines, relational data processing, and generative AI connect in our programs."
        />

        <TechEcosystemVisual />
      </section>

      {/* ========================================================================= */}
      {/* 8. DOCUMENTED HANDS-ON PROJECTS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Real Artifacts"
          title="Documented Capstones & Deliverables"
          subtitle="No simulated quiz answers. Every student completes documented projects hosted on personal GitHub repositories."
        />

        <ProjectsVisual initialTab="daap" />
      </section>

      {/* ========================================================================= */}
      {/* 9. VIRTUAL COMPANY SESSIONS & VIZAG TECH INTEGRATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30">
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Virtual Company Sessions with Regional IT Corridor Teams
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Connect classroom problem solving with real-world enterprise engineering workflows. Students participate in technical walkthroughs with working engineers from companies in Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Users className="w-4 h-4 text-brand-blue" />
                    <span>Practitioner Walkthroughs</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct technical discussions and architecture deep dives with active tech leads and data specialists.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Code2 className="w-4 h-4 text-brand-orange" />
                    <span>Internship Selection Pathway</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The top 5 performing students in each cohort earn eligibility for formal internship interview rounds with participating regional technology teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-surface-blue/50 rounded-2xl p-6 border border-brand-border text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-brand-blue border border-brand-border">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Weekend Career Strategy Circuits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saturday ATS resume audits and LinkedIn positioning, followed by Sunday live mock interviews with technical panels.
              </p>
              <Button
                to="/courses"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Curricula
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CERTIFICATE VERIFICATION PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-brand-border/80 shadow-subtle p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center text-brand-blue border border-brand-border shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy">
                Verify Cloudariss Certificates
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Instant lookup portal for employers and recruiters verifying student completion credentials.
              </p>
            </div>
          </div>
          <Button
            to="/verify-certificate"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Go to Verification Portal
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border border-brand-blue/30 p-8 sm:p-14 text-white text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <span>Ready for Your Next Step?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Build Practical Capability.{' '}
              <span className="text-brand-orange">Advance Your Career.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Join the upcoming cohort in Visakhapatnam or online. Transform foundational interest into verifiable engineering proficiency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/courses"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Programs
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
