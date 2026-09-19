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
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { TechEcosystemVisual } from '@/components/home/TechEcosystemVisual';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
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
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH AUTHENTIC BROCHURE VISUAL STORYTELLING */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                  TECHNOLOGY • DATA • CLOUD • AUTOMATION
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12] font-heading">
                Learn. Build.{' '}
                <span className="text-gradient-tech">Get Hired.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering careers with Cloud, Data & Automation Skills.
              </p>

              {/* Editorial Trust Statement */}
              <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto lg:mx-0 leading-normal font-medium">
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

            {/* Hero Right Visual: Authentic Brochure Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-2 border-brand-border/80 bg-brand-navy group">
                <img
                  src="/brand/brochures/curious-minds-hero.jpg"
                  alt="From Curious Minds to Confident Careers - Cloudariss Technologies"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

                {/* Floating white information panels over photo */}
                <div className="absolute bottom-6 left-6 right-6 space-y-3 z-10">
                  <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-card space-y-2 text-brand-navy">
                    <div className="flex items-center justify-between text-xs font-bold text-brand-blue">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                        From Curious Minds to Confident Careers
                      </span>
                      <span className="text-slate-500">Cloudariss Vizag</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 overflow-x-auto">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-surface-blue text-brand-blue border border-brand-blue/20">
                        CLOUD
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-surface-light text-slate-700 border border-brand-border">
                        DATA
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand-surface-orange text-brand-orange border border-brand-orange/20">
                        AI & DEVOPS
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        CAREERS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Top Corner Pill */}
                <div className="absolute top-4 right-4 z-10 bg-brand-navy/90 backdrop-blur-sm border border-brand-blue/40 px-3 py-1 rounded-full text-[11px] font-extrabold text-brand-cyan uppercase tracking-wider">
                  LIVE ACCELERATOR
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
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-dark-section via-brand-dark-surface to-brand-dark-section p-6 sm:p-10 border border-brand-orange/40 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Offer Copy */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-xs font-extrabold tracking-wider uppercase">
                <Tag className="w-3.5 h-3.5" />
                <span>LIMITED-TIME OFFER</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
                {BRAND_DATA.offer.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-medium">
                Enroll in any 12-Week Career Accelerator with full live instruction, project reviews, and placement assistance at our special festive tuition.
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
                View Offer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT WE OFFER — PICTORIAL ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Engineered for Practical Excellence"
          subtitle="Four core pillars structured into every Cloudariss program to ensure you progress from theory to deployment-grade capability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Technical Learning',
              subtitle: 'Live Interactive Cohorts',
              desc: 'Live, instructor-led sessions covering core algorithms, cloud architecture, automation scripts, and analytics modeling.',
              icon: <Terminal className="w-6 h-6 text-brand-blue" />,
              img: '/brand/brochures/college-workshops.jpg',
            },
            {
              title: 'Hands-on Projects',
              subtitle: 'Production GitHub Repos',
              desc: 'Direct implementation on live cloud infrastructure and real business datasets with teacher-led code reviews.',
              icon: <Layers className="w-6 h-6 text-brand-orange" />,
              img: '/brand/brochures/project-focused.jpg',
            },
            {
              title: 'Modern Technologies',
              subtitle: 'Cloud, Data, DevOps & AI',
              desc: 'Curricula aligned with current industry standards: Agentic AI, AWS Cloud, Docker containers, Power BI, and ServiceNow.',
              icon: <Cpu className="w-6 h-6 text-[#0a6680]" />,
              img: '/brand/brochures/aws-devops.jpg',
            },
            {
              title: 'Career Preparation',
              subtitle: 'Weekend Mocks & Resumes',
              desc: 'Dedicated Saturday career strategy sessions and Sunday mock interview circuits integrated alongside technical learning.',
              icon: <Briefcase className="w-6 h-6 text-brand-blue" />,
              img: '/brand/brochures/certifications-training.jpg',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-brand-border/80 shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white shadow-subtle border border-brand-border/80 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="p-5 pt-1 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue block">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-bold text-brand-navy font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR FLAGSHIP PROGRAMS */}
      {/* ========================================================================= */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Flagship Career Accelerators"
          subtitle="Choose between specialized cloud infrastructure engineering or modern data analytics empowered by Generative and Agentic AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Card */}
          <div className="rounded-3xl bg-white border-2 border-brand-border/90 shadow-subtle hover:shadow-card hover:border-brand-blue/60 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="relative h-56 overflow-hidden bg-brand-navy">
              <img
                src="/brand/brochures/crpc-brochure.jpg"
                alt="CRPC Cloud & Data Accelerator"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <Badge variant="blue" size="md">
                  {crpc.code} FLAGSHIP
                </Badge>
                <span className="text-xs font-semibold bg-white/90 text-brand-navy px-2.5 py-1 rounded-full">
                  12 Weeks · Live Classes
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-brand-navy font-heading">
                  {crpc.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Master the core infrastructure disciplines powering modern enterprise platforms: Python scripting, Data Science essentials, AWS Cloud architecture, DevOps automation, and ServiceNow platform workflows.
                </p>

                {/* Tech Logos Strip */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stack:</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <AwsLogo className="w-4 h-3" /> AWS
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <DockerLogo className="w-4 h-4" /> Docker
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <KubernetesLogo className="w-4 h-4" /> K8s
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <JenkinsLogo className="w-4 h-4" /> Jenkins
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border flex items-center justify-between gap-4">
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
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold bg-brand-surface-blue text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/30 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Curriculum</span>
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
          <div className="rounded-3xl bg-white border-2 border-brand-border/90 shadow-subtle hover:shadow-card hover:border-brand-orange/60 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="relative h-56 overflow-hidden bg-brand-navy">
              <img
                src="/brand/brochures/daap-brochure.jpg"
                alt="DAAP Data Analyst Accelerator"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <Badge variant="orange" size="md">
                  {daap.code} FLAGSHIP
                </Badge>
                <span className="text-xs font-semibold bg-white/90 text-brand-navy px-2.5 py-1 rounded-full">
                  12 Weeks · Live Classes
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-brand-navy font-heading">
                  {daap.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Go from spreadsheet modeling to scalable data analytics: Excel formulas, complex SQL querying, Python EDA, Power BI business dashboards, Generative AI (RAG), and autonomous Agentic AI tools.
                </p>

                {/* Tech Logos Strip */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stack:</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <SqlLogo className="w-4 h-4" /> SQL
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <PythonLogo className="w-4 h-4" /> Python
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <PowerBiLogo className="w-4 h-4" /> Power BI
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded border border-brand-border/60">
                      <AgenticAiLogo className="w-4 h-4" /> Agentic AI
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border flex items-center justify-between gap-4">
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
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold bg-brand-surface-orange text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange/30 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Curriculum</span>
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
      {/* 5. INTERACTIVE 5-STAGE PROGRESSIVE JOURNEY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="The Learning Journey"
          title="A Structured Progression to Career Competence"
          subtitle="Our methodology guides you through five sequential phases designed to build genuine, demonstrable engineering strength."
        />

        <FiveStageVisualJourney />
      </section>

      {/* ========================================================================= */}
      {/* 6. TECHNOLOGY ECOSYSTEM — LOGOS FIRST */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="Industry-Standard Stacks & Tools"
          subtitle="Direct, hands-on exposure to the infrastructure platforms, build tools, databases, and AI frameworks demanded by modern employers."
        />

        <TechEcosystemVisual />
      </section>

      {/* ========================================================================= */}
      {/* 7. REAL-WORLD PROJECTS — VISUAL SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Real-World Projects"
          title="Documented Engineering Artifacts"
          subtitle="You do not merely learn concepts; you deploy functional, documented systems hosted on personal GitHub profiles with interactive dashboards."
        />

        <ProjectsVisual initialTab="daap" />
      </section>

      {/* ========================================================================= */}
      {/* 8. CAREER SUPPORT SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Career Support"
          title="Comprehensive Career Readiness Circuit"
          subtitle="Structured preparation embedded directly alongside technical learning to help you articulate your project experience with confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Resume & Portfolio Building',
              desc: 'Draft an ATS-compliant resume and portfolio highlighting live project URLs, architectural schematics, and measured performance gains.',
              icon: <FileText className="w-5 h-5 text-brand-blue" />,
            },
            {
              title: 'LinkedIn Positioning',
              desc: 'Optimize your technical profile, document your project sprints, and connect with engineers in the cloud and analytics space.',
              icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
            },
            {
              title: 'Mock Interview Circuit',
              desc: 'Undergo simulated technical screens and whiteboard coding drills designed to build fluency under realistic interview conditions.',
              icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
            },
            {
              title: 'Industry & Company Sessions',
              desc: 'Attend interactive sessions with working engineers and team leads sharing firsthand insights into live deployment practices.',
              icon: <Layers className="w-5 h-5 text-[#0a6680]" />,
            },
            {
              title: 'Group Discussions & Soft Skills',
              desc: 'Practice presenting complex architectural decisions, defending technical trade-offs, and collaborating in team-based design reviews.',
              icon: <CheckCircle2 className="w-5 h-5 text-brand-orange" />,
            },
            {
              title: 'Placement Assistance',
              desc: 'Access curated job leads, application tracking guidance, and resume referrals for roles aligned with your technical strengths.',
              icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
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
      {/* 9. CURRENT OFFER */}
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
            Take the first step toward a high-growth career in cloud engineering or data analytics at our special festive tuition.
          </p>

          <div className="flex items-center justify-center gap-4 py-2">
            <span className="text-2xl sm:text-3xl text-slate-400 line-through font-semibold">
              {BRAND_DATA.offer.originalPrice}
            </span>
            <span className="text-xl sm:text-2xl text-brand-orange font-bold">→</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white font-heading">
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
              to="/courses"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Programs & Enroll
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CERTIFICATE VERIFICATION PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-border shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-surface-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Verification</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
              Verify a Cloudariss Certificate
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Employers and institutions can verify the authenticity of an official completion credential issued by Cloudariss Technologies using its certificate ID.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              to="/verify-certificate"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Verify Certificate
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA WITH EDITORIAL BROCHURE VISUAL */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-card border-2 border-brand-border bg-brand-navy">
          <img
            src="/brand/brochures/brighter-tomorrow.jpg"
            alt="Let's Build a Brighter Tomorrow Together"
            className="w-full h-[400px] sm:h-[460px] object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 sm:p-10 space-y-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-extrabold bg-white/20 text-white backdrop-blur-md border border-white/30 tracking-widest uppercase">
              LET'S BUILD A BRIGHTER TOMORROW TOGETHER
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading max-w-2xl">
              Ready to Build Production-Grade Skills?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-medium">
              Join an upcoming live cohort, build real projects, and prepare for high-growth tech roles.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
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
                className="text-white border-white/40 hover:bg-white/10"
              >
                Talk to Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
