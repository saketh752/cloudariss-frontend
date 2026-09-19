import React from 'react';
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
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';

export const WhyCloudarissPage: React.FC = () => {
  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

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
      title: 'Structured Learning Journey',
      subtitle: 'Learn → Practice → Build → Prepare → Get Hired',
      desc: 'A coherent five-phase methodology that systematically transforms raw interest into confident technical competence and structured career readiness without skipped foundations.',
      icon: <Compass className="w-5 h-5 text-[#0a6680]" />,
      accent: 'cyan' as const,
    },
  ];

  // Structured Technology Ecosystem categories (clean, categorized)
  const techCategories = [
    {
      title: 'Cloud & Infrastructure',
      tools: ['AWS Cloud', 'EC2 & VPC', 'Docker Containers', 'Kubernetes', 'Linux / Bash'],
    },
    {
      title: 'DevOps & Enterprise Automation',
      tools: ['Jenkins CI/CD', 'GitHub Webhooks', 'Grafana Monitoring', 'ServiceNow ITSM'],
    },
    {
      title: 'Data & Business Intelligence',
      tools: ['Python & Pandas', 'PostgreSQL / SQL', 'Microsoft Excel', 'Power BI & DAX'],
    },
    {
      title: 'Generative & Agentic AI',
      tools: ['Generative AI (LLMs)', 'RAG Architectures', 'LangChain & CrewAI', 'Agentic Workflows'],
    },
  ];

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
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                WHY CLOUDARISS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Technology Skills That{' '}
              <span className="text-gradient-tech">Move Beyond Theory.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Build practical knowledge through structured learning, hands-on projects, modern technologies, and career-focused preparation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6 CORE DIFFERENTIATORS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Differentiators"
          title="Engineered for Practical Technical Depth"
          subtitle="Six foundational pillars that distinguish Cloudariss learning from passive tutorial videos and superficial certificates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <Card
              key={item.num}
              variant="white"
              padding="lg"
              hoverEffect
              borderAccent={item.accent}
              className="flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-slate-400">
                    {item.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-blue mt-0.5">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CRPC + DAAP DIFFERENTIATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Program Specializations"
          title="Two Distinct Engineering Directions"
          subtitle="Cloudariss offers two flagship career accelerators serving distinct technology domains. Neither program is ranked above the other; both provide identical standards of depth, practical projects, and career mentoring."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Box */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="blue"
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="blue" size="md">
                  {crpc.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  Cloud, Data & Infrastructure
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-navy">
                  Cloud & Data Career Accelerator
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Focused on infrastructure architecture, automated cloud deployments, enterprise CI/CD, and IT service management.
                </p>
              </div>

              {/* Who it is for */}
              <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/60 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Direction Focus</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
                      className="px-2.5 py-1 rounded-md bg-brand-surface-blue text-brand-navy border border-brand-border text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-brand-border flex items-center justify-between gap-4">
              <div className="text-xs font-semibold text-slate-500">
                12 Weeks · 8 Modules · Capstone
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

          {/* DAAP Box */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="orange"
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="orange" size="md">
                  {daap.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  Data Analytics & AI
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-navy">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Focused on quantitative reasoning, relational SQL querying, interactive executive dashboards, and cutting-edge agentic AI analytics.
                </p>
              </div>

              {/* Who it is for */}
              <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/60 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Direction Focus</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
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
                      className="px-2.5 py-1 rounded-md bg-brand-orange/10 text-brand-navy border border-brand-orange/30 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-brand-border flex items-center justify-between gap-4">
              <div className="text-xs font-semibold text-slate-500">
                12 Weeks · 5+ Projects · Capstone
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
      {/* TECHNOLOGY ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="Technology Coverage"
          title="Enterprise Tools Taught Hands-On"
          subtitle="Every tool in our programs is selected for its direct relevance to modern software engineering, cloud infrastructure, and data workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => (
            <Card
              key={idx}
              variant="surface"
              padding="md"
              className="border border-brand-border/80 space-y-3"
            >
              <h3 className="text-sm font-extrabold text-brand-navy border-b border-brand-border/60 pb-2">
                {cat.title}
              </h3>
              <div className="space-y-1.5">
                {cat.tools.map((t) => (
                  <div
                    key={t}
                    className="text-xs font-medium text-slate-700 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAREER SUPPORT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Career Support"
          title="Seven Pillars of Professional Preparation"
          subtitle="Our career support framework runs in tandem with technical modules to give you the confidence, clarity, and portfolio strength to interview effectively."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerSupportList.map((pillar, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="md"
              hoverEffect
              borderAccent="blue"
              className="space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <h3 className="text-base font-bold text-brand-navy">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </Card>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * Cloudariss focuses on cultivating demonstrable engineering capability, portfolio excellence, and interview confidence. We do not make misleading claims of guaranteed job placement.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border border-brand-blue/30 p-8 sm:p-12 text-white shadow-xl text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue/20 border border-brand-blue/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
            Choose Your Track
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Find the Program That Fits Your Direction.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Explore the detailed syllabi, live lab exercises, and capstone projects designed to take you from foundational concepts to verified technical competence.
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
