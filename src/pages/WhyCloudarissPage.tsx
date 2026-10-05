import React, { useState } from 'react';
import {
  ArrowRight,
  Code2,
  Layers,
  Cpu,
  Briefcase,
  Building2,
  Compass,
  CheckCircle2,
  Cloud,
  BarChart3,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { WhyUsHeroFlywheel } from '@/components/curriculum/WhyUsHeroFlywheel';
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
  LangChainLogo,
  RagLogo,
  AgenticAiLogo,
  ChatGptLogo,
} from '@/components/icons/TechLogos';

export const WhyCloudarissPage: React.FC = () => {
  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;
  const { openCurriculum } = useCurriculumModal();

  // 6 Core Differentiators
  const differentiators = [
    {
      num: '01',
      title: 'Practical Learning',
      subtitle: 'Hands-on Application Over Passive Theory',
      desc: 'We focus on applying concepts through hands-on work from day one. Instead of watching pre-recorded slide decks, learners write code, configure real cloud infrastructure, and query relational databases in live sessions.',
      icon: <Code2 className="w-5 h-5 text-brand-blue" />,
      accent: 'blue' as const,
    },
    {
      num: '02',
      title: 'Project-Driven Experience',
      subtitle: 'Verifiable Portfolio Artifacts',
      desc: 'Projects form an indispensable part of the learning journey. Students graduate with documented multi-tier deployments, CI/CD automation pipelines, interactive dashboards, and agentic AI tools hosted on personal repositories.',
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      accent: 'orange' as const,
    },
    {
      num: '03',
      title: 'Modern Technology',
      subtitle: 'Direct Exposure to Today’s Stacks',
      desc: 'Our curricula are engineered around current industry areas including Cloud Computing, Data Engineering, DevOps, Business Analytics, Generative AI (RAG), and autonomous Agentic AI frameworks.',
      icon: <Cpu className="w-5 h-5 text-[#0a6680]" />,
      accent: 'cyan' as const,
    },
    {
      num: '04',
      title: 'Career Preparation',
      subtitle: 'Integrated Weekend Strategy Circuit',
      desc: 'Structured preparation conducted throughout the program. Saturday workshops focus on ATS resume tuning, LinkedIn positioning, and job search strategy, while Sundays run live mock interviews and communication drills.',
      icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
      accent: 'blue' as const,
    },
    {
      num: '05',
      title: 'Industry Exposure',
      subtitle: 'Virtual Company & Practitioner Sessions',
      desc: 'Direct interaction with working software engineers and data practitioners from regional technology clusters, including Visakhapatnam’s Rushikonda IT Park and VSEZ, alongside top-5 internship eligibility.',
      icon: <Building2 className="w-5 h-5 text-brand-orange" />,
      accent: 'orange' as const,
    },
    {
      num: '06',
      title: 'Rigorous Engineering Standards',
      subtitle: 'Deep Foundations & Defensible Code',
      desc: 'A coherent, systematic curriculum that transforms raw interest into confident technical competence and structured capability without skipped foundations.',
      icon: <Compass className="w-5 h-5 text-[#0a6680]" />,
      accent: 'cyan' as const,
    },
  ];

  const [activeTechFilter, setActiveTechFilter] = useState<'all' | 'crpc' | 'daap'>('all');

  // Structured Technology Ecosystem categories with SVG logos
  const techCategories = [
    {
      title: 'Cloud & Infrastructure',
      track: 'crpc' as const,
      tools: [
        { name: 'AWS Cloud', logo: <AwsLogo className="w-4 h-4" /> },
        { name: 'Docker Containers', logo: <DockerLogo className="w-4 h-4" /> },
        { name: 'Kubernetes', logo: <KubernetesLogo className="w-4 h-4" /> },
      ],
    },
    {
      title: 'DevOps & Enterprise Automation',
      track: 'crpc' as const,
      tools: [
        { name: 'Jenkins CI/CD', logo: <JenkinsLogo className="w-4 h-4" /> },
        { name: 'GitHub Actions', logo: <GitHubLogo className="w-4 h-4" /> },
        { name: 'Grafana Monitoring', logo: <GrafanaLogo className="w-4 h-4" /> },
        { name: 'ServiceNow ITSM', logo: <ServiceNowLogo className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Data & Business Intelligence',
      track: 'daap' as const,
      tools: [
        { name: 'Python & Pandas', logo: <PythonLogo className="w-4 h-4" /> },
        { name: 'PostgreSQL / SQL', logo: <SqlLogo className="w-4 h-4" /> },
        { name: 'Power BI & DAX', logo: <PowerBiLogo className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Generative & Agentic AI',
      track: 'daap' as const,
      tools: [
        { name: 'Generative AI & LLMs', logo: <ChatGptLogo className="w-4 h-4" /> },
        { name: 'RAG Architectures', logo: <RagLogo className="w-4 h-4" /> },
        { name: 'LangChain Orchestration', logo: <LangChainLogo className="w-4 h-4" /> },
        { name: 'Agentic Workflows', logo: <AgenticAiLogo className="w-4 h-4" /> },
      ],
    },
  ];

  const filteredTechCategories = techCategories.filter(
    (c) => activeTechFilter === 'all' || c.track === activeTechFilter
  );

  // 7 Documented Career Support Areas
  const careerSupportList = [
    {
      title: 'Resume Optimization',
      desc: 'Structuring achievements with measurable business impact, ATS compliance, and verifiable project links.',
    },
    {
      title: 'LinkedIn Profile Building',
      desc: 'Refining headline keywords, optimizing skills sections, and building an active technical presence.',
    },
    {
      title: 'Job Search Strategy',
      desc: 'Navigating hiring portals using targeted Boolean searches and tracking active applications methodically.',
    },
    {
      title: 'Mock Interviews',
      desc: 'Simulated technical Q&A rounds, live coding evaluations, and behavioral HR interview practice.',
    },
    {
      title: 'Career Guidance',
      desc: 'One-on-one clarity on specialization paths, industry career ladders, and salary expectation benchmarks.',
    },
    {
      title: 'Placement Assistance',
      desc: 'Curated job opportunity feeds, application review checkpoints, and interview feedback loops.',
    },
    {
      title: 'Industry & Company Sessions',
      desc: 'Webinars and Q&A sessions with engineers from tech companies operating in Vizag IT corridors.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH VALUE PROGRESSION FLYWHEEL */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0878E8]/20 border border-[#19BCE8]/40 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-[#19BCE8] uppercase font-heading">
                  WHY CLOUDARISS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-heading">
                Technology Skills That{' '}
                <span className="text-gradient-tech">Move Beyond Theory.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#E5EAF3] font-normal max-w-2xl leading-relaxed">
                Build practical knowledge through structured learning, hands-on projects, modern technologies, and career-focused preparation designed for real software engineering and analytics workflows.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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
                  variant="dark"
                  size="lg"
                  className="bg-[#05143A]/90 hover:bg-[#082260] text-white font-bold border border-[#19BCE8]/40 hover:border-[#19BCE8] shadow-md"
                >
                  Talk to Us
                </Button>
              </div>
            </div>

            {/* Right: The 5-Point Value Progression Visual */}
            <div className="lg:col-span-5">
              <WhyUsHeroFlywheel />
            </div>
          </div>
        </div>
      </section>

      {/* Rhythm Ribbon */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. SIX CORE DIFFERENTIATORS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Differentiators"
          title="Engineered for Practical Technical Depth"
          subtitle="Six foundational pillars that distinguish Cloudariss learning from passive tutorial videos and superficial certificates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/25 p-6 shadow-xl hover:shadow-[0_16px_36px_rgba(8,120,232,0.25)] hover:border-[#19BCE8]/60 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#0878E8]/20 flex items-center justify-center border border-[#19BCE8]/40 text-[#19BCE8]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#19BCE8] bg-[#0878E8]/15 px-2.5 py-1 rounded-md border border-[#19BCE8]/30">
                    {item.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#19BCE8] mt-0.5 font-mono">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CRPC + DAAP SPECIALIZATION: BALANCED PATHWAYS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Program Specializations"
          title="Two Distinct Engineering Directions"
          subtitle="Cloudariss offers two flagship career accelerators serving distinct technology domains. Neither program is ranked above the other; both provide identical standards of depth, practical projects, and career mentoring."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Box */}
          <div
            className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/30 shadow-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 text-white"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="blue" size="md">
                  {crpc.code}
                </Badge>
                <span className="text-xs font-mono font-bold text-[#19BCE8] bg-[#0878E8]/15 px-3 py-1 rounded-full border border-[#19BCE8]/30">
                  Cloud, Data &amp; Infrastructure
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Cloud &amp; Data Career Accelerator
                </h3>
                <p className="text-sm text-[#CBD5E1] mt-2 leading-relaxed font-normal">
                  Focused on infrastructure architecture, automated cloud deployments, enterprise CI/CD, and IT service management.
                </p>
              </div>

              {/* Who it is for */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#05143A]/90 to-[#030E28]/90 border border-[#19BCE8]/25 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#19BCE8] flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Direction Focus</span>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-normal">
                  Best suited for learners targeting roles in Cloud Engineering, DevOps Engineering, System Administration, Infrastructure Support, or ServiceNow Enterprise Management.
                </p>
              </div>

              {/* Key Domains */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Primary Technology Areas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Python Basics', 'Data Science', 'AWS Cloud (EC2, VPC, ALB)', 'Docker & Kubernetes', 'Jenkins CI/CD', 'ServiceNow ITSM'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#0878E8]/20 text-[#19BCE8] border border-[#19BCE8]/30 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="text-xs font-semibold text-slate-400">
                12 Weeks · 8 Modules · Capstone
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="px-3.5 py-2 rounded-lg bg-[#0878E8]/20 text-[#19BCE8] hover:bg-[#0878E8]/30 hover:text-white text-xs font-bold border border-[#19BCE8]/40 transition-colors"
                >
                  View Curriculum (PDF)
                </button>
                <Button
                  to="/courses/crpc"
                  variant="secondary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore CRPC
                </Button>
              </div>
            </div>
          </div>

          {/* DAAP Box */}
          <div
            className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-brand-orange/35 shadow-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 text-white"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="orange" size="md">
                  {daap.code}
                </Badge>
                <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange/15 px-3 py-1 rounded-full border border-brand-orange/30">
                  Data Analytics &amp; AI
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white font-heading">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-sm text-[#CBD5E1] mt-2 leading-relaxed font-normal">
                  Focused on quantitative reasoning, relational SQL querying, interactive executive dashboards, and cutting-edge agentic AI analytics.
                </p>
              </div>

              {/* Who it is for */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#05143A]/90 to-[#030E28]/90 border border-brand-orange/25 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Direction Focus</span>
                </div>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-normal">
                  Best suited for learners targeting roles in Data Analysis, Business Intelligence, Data Operations, Quantitative Reporting, or AI-Assisted Business Analytics.
                </p>
              </div>

              {/* Key Domains */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Primary Technology Areas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Advanced Excel', 'PostgreSQL & SQL', 'Python EDA (Pandas)', 'Power BI & DAX', 'Generative AI (RAG)', 'Agentic AI Workflows'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
              <div className="text-xs font-semibold text-slate-400">
                12 Weeks · 5+ Projects · Capstone
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="px-3.5 py-2 rounded-lg bg-brand-orange/20 text-brand-orange hover:bg-brand-orange/30 hover:text-white text-xs font-bold border border-brand-orange/40 transition-colors"
                >
                  View Curriculum (PDF)
                </button>
                <Button
                  to="/courses/daap"
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore DAAP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ENTERPRISE TOOLS TAUGHT HANDS-ON */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="Technology Coverage"
          title="Enterprise Tools Taught Hands-On"
          subtitle="Every tool in our programs is selected for its direct relevance to modern software engineering, cloud infrastructure, and data workflows."
        />

        {/* Interactive Track Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <button
            type="button"
            onClick={() => setActiveTechFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTechFilter === 'all'
                ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
                : 'bg-[#05143A]/85 text-slate-300 hover:text-white border border-white/10 hover:border-[#19BCE8]/40'
            }`}
          >
            All Stacks (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveTechFilter('crpc')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTechFilter === 'crpc'
                ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
                : 'bg-[#05143A]/85 text-slate-300 hover:text-white border border-white/10 hover:border-[#19BCE8]/40'
            }`}
          >
            CRPC Track (Cloud &amp; DevOps)
          </button>
          <button
            type="button"
            onClick={() => setActiveTechFilter('daap')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTechFilter === 'daap'
                ? 'bg-brand-orange text-white shadow-md shadow-orange-500/30'
                : 'bg-[#05143A]/85 text-slate-300 hover:text-white border border-white/10 hover:border-brand-orange/40'
            }`}
          >
            DAAP Track (Data &amp; AI)
          </button>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${filteredTechCategories.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-4'} gap-6`}>
          {filteredTechCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/25 p-5 shadow-xl space-y-3 text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <h3 className="text-sm font-extrabold text-white font-heading">
                  {cat.title}
                </h3>
                <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                  cat.track === 'crpc' ? 'bg-[#0878E8]/20 text-[#19BCE8] border border-[#19BCE8]/30' : 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30'
                }`}>
                  {cat.track === 'crpc' ? 'CRPC' : 'DAAP'}
                </span>
              </div>
              <div className="space-y-2">
                {cat.tools.map((t) => (
                  <div
                    key={t.name}
                    className="p-2.5 rounded-xl bg-[#05143A]/85 border border-white/10 flex items-center gap-2.5 hover:border-[#19BCE8]/40 transition-colors shadow-xs"
                  >
                    <div className="p-1.5 rounded-lg bg-white/95 border border-white/80 shrink-0">
                      {t.logo}
                    </div>
                    <span className="text-xs font-bold text-[#E5EAF3]">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CAREER SUPPORT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Career Support"
          title="Seven Pillars of Professional Preparation"
          subtitle="Our career support framework runs in tandem with technical modules to give you the confidence, clarity, and portfolio strength to interview effectively."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerSupportList.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/25 p-5 sm:p-6 shadow-xl hover:shadow-[0_16px_36px_rgba(8,120,232,0.25)] hover:border-[#19BCE8]/60 transition-all duration-300 space-y-2.5 group"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#19BCE8] shrink-0" />
                <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-[#081F54]/70 to-[#041136]/70 border border-[#19BCE8]/25 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#CBD5E1] leading-relaxed">
            * Cloudariss focuses on cultivating demonstrable engineering capability, portfolio excellence, and interview confidence. We do not make misleading claims of guaranteed job placement.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border border-brand-blue/30 p-8 sm:p-14 text-white text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <span>Choose Your Track</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Find the Program That Fits Your Direction.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
              Explore the detailed syllabi, live lab exercises, and capstone projects designed to take you from foundational concepts to verified technical competence.
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
    </div>
  );
};
