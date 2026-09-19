import React from 'react';
import {
  ArrowRight,
  MapPin,
  Cpu,
  GraduationCap,
  Globe2,
  Cloud,
  Database,
  Wrench,
  LineChart,
  Bot,
  Sparkles,
  Building2,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import {
  AwsLogo,
  DockerLogo,
  ServiceNowLogo,
  SqlLogo,
  PowerBiLogo,
  RagLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';

export const AboutPage: React.FC = () => {
  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;
  const { openCurriculum } = useCurriculumModal();

  // Editorial Who We Are Pillars
  const whoWeArePillars = [
    {
      title: 'Vizag-Based Engineering Identity',
      tag: 'Regional Roots',
      desc: 'Headquartered in Visakhapatnam, Andhra Pradesh. We draw inspiration from the city’s expanding IT landscape, maintaining active links to technology corridors including Rushikonda IT Park and VSEZ.',
      icon: <MapPin className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Technology-Focused',
      tag: 'Core Modern Stacks',
      desc: 'Our instruction centers purely on high-demand, modern technology disciplines: Cloud infrastructure, distributed data systems, automated CI/CD pipelines, business analytics, and agentic AI.',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Outcome-Driven Pedagogy',
      tag: 'Methodical Learning',
      desc: 'We are committed to structured, outcome-driven education that prioritizes hands-on lab work, code authoring, real architectural debugging, and demonstrable portfolio artifacts over passive lecture viewing.',
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Accessible Virtual Classrooms',
      tag: '100% Live Online',
      desc: 'Our interactive live classrooms break geographic boundaries, connecting students with experienced instructors, live code walkthroughs, and collaborative peer learning environments.',
      icon: <Globe2 className="w-5 h-5 text-[#0a6680]" />,
    },
  ];

  // 7 Major Technology Areas with SVG Logos
  const techFocusAreas = [
    {
      name: 'Cloud Computing',
      tools: 'AWS (EC2, VPC, ALB, RDS, IAM)',
      desc: 'Scalable cloud infrastructure design, virtual networking, secure access control, and high-availability architecture.',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
      logo: <AwsLogo className="w-5 h-5" />,
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'SQL, PostgreSQL, Relational Modeling',
      desc: 'Multi-table database querying, aggregations, window functions, and schema normalization for robust data operations.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      logo: <SqlLogo className="w-5 h-5" />,
    },
    {
      name: 'DevOps & CI/CD Pipelines',
      tools: 'Docker, Kubernetes, Jenkins, Linux',
      desc: 'Automated continuous integration and delivery pipelines, container orchestration, and server administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
      logo: <DockerLogo className="w-5 h-5" />,
    },
    {
      name: 'Business Analytics & BI',
      tools: 'Power BI, DAX, Advanced Excel',
      desc: 'Interactive executive dashboards, KPI modeling, automated reporting, and quantitative decision-support frameworks.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
      logo: <PowerBiLogo className="w-5 h-5" />,
    },
    {
      name: 'Generative AI & RAG',
      tools: 'LLMs, Prompt Engineering, RAG',
      desc: 'Context-augmented intelligence, semantic document retrieval, and enterprise AI assistant integrations.',
      icon: <Sparkles className="w-5 h-5 text-brand-blue" />,
      logo: <RagLogo className="w-5 h-5" />,
    },
    {
      name: 'Agentic AI Systems',
      tools: 'Multi-Tool Agents, LangChain, CrewAI',
      desc: 'Autonomous multi-agent analytical pipelines capable of planning, executing tools, evaluating findings, and reporting.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
      logo: <AgenticAiLogo className="w-5 h-5" />,
    },
    {
      name: 'Enterprise IT Workflows',
      tools: 'ServiceNow ITSM, Workflow Automation',
      desc: 'Enterprise IT service management, incident handling, change approvals, and organizational service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
      logo: <ServiceNowLogo className="w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: EDITORIAL + REGIONAL ENGINEERING CANVAS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                  ABOUT CLOUDARISS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15] font-heading">
                Building Careers{' '}
                <span className="text-gradient-tech">Through Technology.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                Cloudariss Technologies is a Visakhapatnam-based technology and learning organization dedicated to hands-on competence across Cloud, Data, DevOps, Business Analytics, and emerging Agentic AI systems.
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
                  variant="outline"
                  size="lg"
                >
                  Talk to Us
                </Button>
              </div>
            </div>

            {/* Right: Technical Identity Blueprint */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-brand-border/70 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-navy uppercase tracking-wider">
                    Organizational Profile
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface-blue text-brand-blue font-bold">
                    Vizag, AP
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span>Visakhapatnam Technology Hub</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Maintaining close links to regional IT corridors including Rushikonda IT Park and VSEZ for student company sessions.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                      <Globe2 className="w-4 h-4 text-brand-blue" />
                      <span>100% Live Interactive Cohorts</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Live classrooms connecting students with working engineers, instructor Q&A, and practical workstation labs.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verifiable Portfolio Deliverables</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Graduates produce documented multi-tier deployments and executive BI decks on personal GitHub profiles.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-brand-border/60 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Technology-Focused · Career-Oriented
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Company Identity"
          title="Who We Are"
          subtitle="A focused technology and education organization established to bridge the gap between academic theory and practical software engineering capability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whoWeArePillars.map((item, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="lg"
              hoverEffect
              borderAccent={idx === 0 ? 'orange' : 'blue'}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-navy font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TECHNOLOGY DOMAINS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Technology Domains"
          title="Our Focus Areas"
          subtitle="Cloudariss focuses on the key technological building blocks that modern software and data organizations depend upon."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFocusAreas.map((area, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="md"
              hoverEffect
              borderAccent="blue"
              className="space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                    {area.icon}
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200">
                    {area.logo}
                  </div>
                </div>
                <h3 className="text-base font-bold text-brand-navy font-heading">
                  {area.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {area.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60">
                <span className="text-[11px] font-mono text-brand-blue font-semibold">
                  {area.tools}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEARNING METHODOLOGY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Methodology"
          title="Our Approach"
          subtitle="A five-stage learning progression that balances rigorous foundational concepts with practical implementation and career readiness."
        />

        <FiveStageVisualJourney />
      </section>

      {/* ========================================================================= */}
      {/* 5. BALANCED FLAGSHIP PROGRAMS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Two Specialized Pathways"
          subtitle="Explore the two flagship accelerators offered by Cloudariss Technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CRPC */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="blue"
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="blue" size="md">
                  {crpc.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  12 Weeks · Live Online
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-navy font-heading">
                  Cloud & Data Career Accelerator
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  Comprehensive 12-week curriculum spanning Python programming, Data Science essentials, AWS Cloud infrastructure, Docker containerization, Kubernetes, Jenkins CI/CD, and ServiceNow administration.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Data Science', 'AWS Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'ServiceNow'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-brand-surface-blue text-brand-navy border border-brand-border text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="px-3.5 py-2 rounded-lg bg-brand-surface-blue text-brand-navy hover:text-brand-blue text-xs font-bold border border-brand-border"
              >
                View PDF Syllabus
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
          </Card>

          {/* DAAP */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="orange"
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="orange" size="md">
                  {daap.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  12 Weeks · Live Online
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-navy font-heading">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  Fast-paced 12-week sprint taking learners from advanced Excel formulas and complex SQL querying to Python EDA, executive Power BI dashboards, Generative AI (RAG), and autonomous Agentic AI workflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Excel', 'SQL', 'Python & Pandas', 'Power BI', 'Generative AI', 'Agentic AI'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-brand-orange/10 text-brand-navy border border-brand-orange/30 text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="px-3.5 py-2 rounded-lg bg-brand-orange/10 text-brand-navy hover:text-brand-orange text-xs font-bold border border-brand-orange/30"
              >
                View PDF Syllabus
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
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GUIDING BRAND STATEMENT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border border-brand-blue/40 p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Our Guiding Brand Principle
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              Learn. Build.{' '}
              <span className="text-brand-orange">Get Hired.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto pt-2 font-medium">
              {BRAND_DATA.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          variant="surface"
          padding="lg"
          className="border border-brand-border text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center mx-auto border border-brand-border text-brand-blue">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
            Have Questions About Cloudariss?
          </h3>

          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reach out to our team for course details, upcoming batch schedules, admissions guidance, or curriculum questions.
          </p>

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
        </Card>
      </section>
    </div>
  );
};
