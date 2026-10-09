import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Laptop,
  Cpu,
  Bot,
  CheckCircle2,
  FileText,
  Briefcase,
  Users,
  Layers,
  Lock,
  Workflow,
  Server,
  Activity,
  Code2,
  Database,
  Tag,
  BadgeCheck,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { FdeHeroCard } from '@/components/curriculum/FdeHeroCard';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { openWhatsApp, getFDEEnquiryMessage } from '@/utils/whatsapp';
import {
  PythonLogo,
  DockerLogo,
  KubernetesLogo,
  RagLogo,
  AgenticAiLogo,
  AwsLogo,
  PostgreSqlLogo,
  JenkinsLogo,
} from '@/components/icons/TechLogos';

export const FdePage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  // 10 Conceptual Progression Areas Grounded in Official FDE Curriculum
  const learningPillars = [
    {
      step: '01',
      title: 'Software Engineering Foundations',
      icon: <Code2 className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Core Python, Linux terminal automation, Git/GitHub collaborative workflows, data structures & algorithms (DSA), and robust debugging practices.',
      tools: 'Python · Linux · Git/GitHub · DSA',
    },
    {
      step: '02',
      title: 'APIs, Databases & Backend Systems',
      icon: <Database className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Authoring clean REST APIs, JSON data serialization, relational database engineering with SQL & PostgreSQL, indexing, and schema design.',
      tools: 'REST APIs · JSON · SQL · PostgreSQL',
    },
    {
      step: '03',
      title: 'Machine Learning & LLM Foundations',
      icon: <Cpu className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Core ML fundamentals, Large Language Model (LLM) architectures, prompt mechanics, AI APIs, model parameters, and fine-tuning concepts.',
      tools: 'ML Basics · LLMs · AI APIs · Fine-Tuning',
    },
    {
      step: '04',
      title: 'Generative AI & RAG Architectures',
      icon: <Layers className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Dense vector embeddings, chunking strategies, vector databases (FAISS, Chroma), semantic similarity search, and citation-grounded RAG retrieval.',
      tools: 'Embeddings · RAG · Vector DBs · Semantic Search',
    },
    {
      step: '05',
      title: 'AI Agents & MCP Frameworks',
      icon: <Bot className="w-5 h-5 text-[#00E599]" />,
      desc: 'Autonomous agent loops, tool/function calling, Model Context Protocol (MCP) standards, memory persistence, and collaborative multi-agent patterns.',
      tools: 'AI Agents · Function Calling · MCP · Multi-Agent',
    },
    {
      step: '06',
      title: 'Production AI Systems & Model Serving',
      icon: <Server className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'High-throughput asynchronous model serving with FastAPI, Uvicorn, inference optimizations, GPU utilization concepts, and response streaming.',
      tools: 'FastAPI · Model Serving · Inference · GPUs',
    },
    {
      step: '07',
      title: 'Cloud, Docker & CI/CD Automation',
      icon: <Workflow className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Packaging AI microservices into Docker containers, automated GitHub Actions / Jenkins CI/CD pipelines, and multi-tier cloud deployments on AWS/Azure/GCP.',
      tools: 'Docker · CI/CD · AWS / Cloud · Automation',
    },
    {
      step: '08',
      title: 'Deployment, Observability & Optimization',
      icon: <Activity className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Kubernetes pod orchestration, Redis caching layers, token rate limiting, asynchronous task queues, and Prometheus/Grafana telemetry monitoring.',
      tools: 'Kubernetes · Caching · Rate Limiting · Queues',
    },
    {
      step: '09',
      title: 'AI Security, Governance & Evaluation',
      icon: <Lock className="w-5 h-5 text-[#00E599]" />,
      desc: 'Defending against prompt injection, data leakage prevention, authentication, authorization, AI governance, and automated LLM/RAG evaluation benchmarks.',
      tools: 'Prompt Defense · Leakage Control · Evaluation',
    },
    {
      step: '10',
      title: 'Forward Deployed Engineering & Client Solutions',
      icon: <Briefcase className="w-5 h-5 text-[#00D2FF]" />,
      desc: 'Requirements gathering, client discovery, production solution architecture, rapid proof-of-concept (POC) delivery, deployment rollouts, and technical documentation.',
      tools: 'Solution Architecture · Discovery · POCs · Rollouts',
    },
  ];

  // Visual Technology Stack Ecosystem
  const techStack = [
    { name: 'Python 3.11', category: 'Core Language', logo: <PythonLogo className="w-5 h-5" /> },
    { name: 'FastAPI', category: 'Async Serving APIs', logo: <Code2 className="w-5 h-5 text-[#00D2FF]" /> },
    { name: 'SQL & PostgreSQL', category: 'Relational DBs', logo: <PostgreSqlLogo className="w-5 h-5" /> },
    { name: 'LLMs & GenAI', category: 'Foundation Models', logo: <Bot className="w-5 h-5 text-purple-400" /> },
    { name: 'RAG & Vector DBs', category: 'Retrieval Engine', logo: <RagLogo className="w-5 h-5" /> },
    { name: 'AI Agents & MCP', category: 'Autonomous Systems', logo: <AgenticAiLogo className="w-5 h-5" /> },
    { name: 'Docker', category: 'Containerization', logo: <DockerLogo className="w-5 h-5" /> },
    { name: 'Kubernetes', category: 'Container Orchestration', logo: <KubernetesLogo className="w-5 h-5" /> },
    { name: 'CI/CD Pipelines', category: 'Automated Delivery', logo: <JenkinsLogo className="w-5 h-5" /> },
    { name: 'Cloud (AWS/GCP)', category: 'Cloud Infrastructure', logo: <AwsLogo className="w-5 h-5" /> },
    { name: 'Observability & Metrics', category: 'Telemetry & Logs', logo: <Activity className="w-5 h-5 text-emerald-400" /> },
    { name: 'AI Security & Guardrails', category: 'Injection Defense', logo: <Lock className="w-5 h-5 text-amber-400" /> },
  ];

  // 6-Step Learning Journey from Official Curriculum
  const learningJourney = [
    { step: '01', title: 'Learn', desc: 'Master software engineering, APIs, ML basics, and generative AI.' },
    { step: '02', title: 'Practice', desc: 'Author hands-on labs with vector databases, function calling, and Docker.' },
    { step: '03', title: 'Build', desc: 'Develop end-to-end RAG systems, customer support agents, and FastAPI backends.' },
    { step: '04', title: 'Portfolio', desc: 'Deliver the cross-stack flagship: Secure AI Application & Deployment Platform.' },
    { step: '05', title: 'Prepare', desc: 'ATS resume optimization, GitHub code audits, and technical live mock interviews.' },
    { step: '06', title: 'Deploy', desc: 'Apply production AI engineering skills to real-world workplace situations.' },
  ];

  // Practical Projects from Official Curriculum
  const practicalProjects = [
    {
      title: 'Enterprise RAG System',
      desc: 'Production-ready knowledge retrieval engine with vector search, chunking pipelines, and citation-backed response synthesis.',
      category: 'Generative AI',
    },
    {
      title: 'AI Customer Support Agent',
      desc: 'Autonomous support agent integrating tool calling, knowledge-base lookups, issue escalation gates, and session state.',
      category: 'Agentic AI',
    },
    {
      title: 'AI Sales Assistant',
      desc: 'Conversational sales and qualification engine equipped with CRM tool access, email synthesis, and meeting scheduling tools.',
      category: 'Autonomous Workflows',
    },
    {
      title: 'AI Research Agent',
      desc: 'Multi-step web and document synthesis agent capable of executing complex research plans and drafting structured briefs.',
      category: 'Multi-Agent',
    },
    {
      title: 'AI Document Processing',
      desc: 'High-throughput document extraction and normalization pipeline parsing invoices, contracts, and unstructured PDFs.',
      category: 'System Engineering',
    },
    {
      title: 'Multi-Agent Business Automation',
      desc: 'Collaborative planner–executor–reviewer agent loop automating cross-department enterprise operations with human approval gates.',
      category: 'Enterprise Automation',
    },
  ];

  // Official Career Directions from Curriculum
  const careerDirections = [
    {
      title: 'Forward-Deployed AI Engineer',
      desc: 'Embed directly with client and enterprise teams to architect, deploy, and operationalize custom AI systems in live environments.',
    },
    {
      title: 'AI Solutions Engineer',
      desc: 'Translate complex business requirements into defensible AI architectures, technical POCs, and production deployment blueprints.',
    },
    {
      title: 'AI Application Engineer',
      desc: 'Develop secure, scalable backend APIs, RAG pipelines, and agentic workflows integrated with enterprise databases and frontends.',
    },
    {
      title: 'AI Implementation Engineer',
      desc: 'Manage deployment reliability, CI/CD pipelines, container orchestration, telemetry monitoring, and model evaluation in production.',
    },
  ];

  return (
    <div className="space-y-10 lg:space-y-14 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH FDE ENTERPRISE CONSOLE                               */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#00D2FF] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/40 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-[#00D2FF] uppercase font-heading">
                  FLAGSHIP AI ENGINEERING TRACK
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading break-words">
                FDE AI Engineer{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#00E599] to-[#10B981] block mt-1">
                  Forward Deployed Engineer
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#E5EAF3] font-normal leading-relaxed max-w-2xl">
                A premium 6-month engineering track combining software engineering, Generative AI, autonomous agents, cloud architecture, model deployment, evaluation benchmarks, and client problem-solving.
              </p>

              {/* Badges strip — Strict Official Business Information */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 text-xs font-bold text-white">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#00D2FF]/30 shadow-subtle">
                  <Clock className="w-4 h-4 text-[#00D2FF]" />
                  <span>6 Months Track</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#00D2FF]/30 shadow-subtle">
                  <Tag className="w-4 h-4 text-[#00E599]" />
                  <span className="text-white font-extrabold">₹25,000 Tuition</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#00E599]/40 shadow-subtle text-[#00E599]">
                  <BadgeCheck className="w-4 h-4 text-[#00E599]" />
                  <span>100% Placement Assistance Included</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#00D2FF]/30 shadow-subtle">
                  <Laptop className="w-4 h-4 text-[#00D2FF]" />
                  <span>100% Online · Live Interactive</span>
                </div>
              </div>

              {/* Action Buttons — Mobile Full Width, Desktop Natural */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('fde')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold bg-[#0878E8] hover:bg-[#0768ca] text-white shadow-subtle transition-all duration-200 cursor-pointer min-h-[44px]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Explore Curriculum (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp(getFDEEnquiryMessage())}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold bg-[#00E599]/15 hover:bg-[#00E599]/25 text-[#00E599] border border-[#00E599]/40 transition-all duration-200 cursor-pointer min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto text-white border-[#00D2FF]/40 hover:bg-[#00D2FF]/20 min-h-[44px]"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Right: Technical Console Canvas Widget */}
            <div className="lg:col-span-5">
              <FdeHeroCard
                onOpenCurriculum={() => openCurriculum('fde')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. COURSE POSITIONING & SNAPSHOT                                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Course Positioning"
          title="Build AI Solutions That Work in the Real World — Not Just in a Demo"
          subtitle="A premium engineering track combining software engineering, Generative AI, autonomous agents, cloud architecture, model deployment, system evaluation, security controls, and enterprise customer problem-solving."
        />

        {/* 4-Item Information Snapshot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#081F54]/90 to-[#030E2B]/98 border border-[#00D2FF]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#00D2FF]" />
              <span>Program Duration</span>
            </div>
            <div className="text-2xl font-black text-white font-heading">6 Months</div>
            <p className="text-xs text-slate-300">
              Structured progressive curriculum spanning 10 core engineering disciplines.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#081F54]/90 to-[#030E2B]/98 border border-[#00D2FF]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] uppercase tracking-wider">
              <Tag className="w-4 h-4 text-[#00E599]" />
              <span>Program Tuition</span>
            </div>
            <div className="text-2xl font-black text-white font-heading">₹25,000</div>
            <p className="text-xs text-slate-300">
              All-inclusive cohort fee covering live classes, lab exercises, and mentor guidance.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#081F54]/90 to-[#030E2B]/98 border border-[#00E599]/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00E599] uppercase tracking-wider">
              <BadgeCheck className="w-4 h-4 text-[#00E599]" />
              <span>Career Placement</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-[#00E599] font-heading leading-tight">
              100% Placement Assistance Included
            </div>
            <p className="text-xs text-slate-300">
              Resume audits, portfolio positioning, mock interviews, and hiring pipeline support.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#081F54]/90 to-[#030E2B]/98 border border-[#00D2FF]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
              <Server className="w-4 h-4 text-[#00D2FF]" />
              <span>Core Track Focus</span>
            </div>
            <div className="text-base sm:text-lg font-black text-white font-heading">
              Enterprise AI Implementation
            </div>
            <p className="text-xs text-slate-300">
              Production deployment, security guardrails, evaluation benchmarks, and telemetry.
            </p>
          </div>
        </div>

        {/* Why Students Choose This Path (Direct from Official Curriculum) */}
        <div className="rounded-2xl bg-[#061540]/80 border border-white/10 p-5 sm:p-7 space-y-4">
          <h3 className="text-lg font-bold text-white font-heading">
            Why Students Choose This Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span><strong>Beginner-friendly learning path:</strong> Start with foundational software engineering and progress systematically into production AI.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span><strong>Practical, project-focused training:</strong> Learn by building and deploying functional architectures instead of only watching lectures.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span><strong>Career-oriented skills:</strong> Connect every topic to real workplace applications, enterprise systems, and operational requirements.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span><strong>Portfolio advantage:</strong> Graduate with defensible, cross-stack flagship projects you can discuss thoroughly in technical interviews.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span><strong>New career direction:</strong> Your previous degree does not define your trajectory — build verified technical competence.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span><strong>Who can join:</strong> Developers, AI learners, ambitious freshers, career switchers, and professionals wanting real implementation skills.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT YOU WILL LEARN — 10 STRUCTURED PROGRESSION DISCIPLINES            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Curriculum Progression"
          title="Ten Structured Engineering Disciplines"
          subtitle="Everything in FDE AI Engineer is engineered to turn abstract AI concepts into demonstrable, deployable enterprise software engineering capability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningPillars.map((area) => (
            <div
              key={area.step}
              className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#00D2FF]/25 p-5 sm:p-5.5 shadow-xl hover:shadow-[0_16px_36px_rgba(0,210,255,0.2)] hover:border-[#00D2FF]/60 transition-all duration-300 space-y-3.5 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/15 flex items-center justify-center border border-[#00D2FF]/40 text-[#00D2FF]">
                    {area.icon}
                  </div>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    Phase {area.step}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="font-mono text-slate-400">Core Tools:</span>
                <span className="font-mono font-bold text-[#00D2FF] truncate max-w-[190px]">
                  {area.tools}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FDE TECHNOLOGY / ENGINEERING STACK ECOSYSTEM                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="Enterprise AI & Infrastructure Stack"
          subtitle="Grounded in production-grade tools, frameworks, and deployment platforms utilized by top engineering teams globally."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-[#061540]/80 border border-white/10 hover:border-[#00D2FF]/40 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-2 group-hover:border-[#00D2FF]/40 transition-colors">
                {tech.logo}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white truncate font-heading group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400 truncate">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LEARNING JOURNEY — 6-STEP CYCLE                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Structured Pathway"
          title="Your 6-Month Engineering Journey"
          subtitle="A clear progression engineered to build competence, portfolio proof, interview readiness, and operational workplace confidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
          {learningJourney.map((j) => (
            <div
              key={j.step}
              className="p-4 rounded-xl bg-gradient-to-b from-[#081F54]/90 to-[#030E2B]/95 border border-[#00D2FF]/20 space-y-2 hover:border-[#00D2FF]/50 transition-all"
            >
              <span className="font-mono text-xs font-extrabold text-[#00D2FF] block">
                Stage {j.step}
              </span>
              <h4 className="text-base font-bold text-white font-heading">{j.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OFFICIAL FLAGSHIP PROJECT — CENTERPIECE                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Portfolio Centerpiece"
          title="Documented Capstone & Advanced Flagship Projects"
          subtitle="Inspect the official cross-stack flagship project and verified portfolio case studies built from the ground up during the program."
        />

        <ProjectsVisual initialTab="fde" />
      </section>

      {/* ========================================================================= */}
      {/* 7. PRACTICAL CURRICULUM PROJECTS OVERVIEW                                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Hands-On Labs"
          title="Six Real-World Application Case Studies"
          subtitle="Specific project architectures implemented during hands-on cohort sessions to build practical implementation mastery."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practicalProjects.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#05143A]/90 to-[#030E28]/95 border border-white/10 hover:border-[#00D2FF]/40 transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00D2FF] px-2 py-0.5 rounded bg-[#00D2FF]/10 border border-[#00D2FF]/30">
                  {p.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">Project #{idx + 1}</span>
              </div>
              <h4 className="text-base font-bold text-white font-heading">{p.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CAREER DIRECTIONS & PLACEMENT ASSISTANCE                               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Career Outcomes"
          title="Four Enterprise Career Directions"
          subtitle="Roles seeking professionals who combine software engineering foundations with production AI and cloud implementation skills."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careerDirections.map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#061540]/80 border border-[#00D2FF]/20 space-y-2.5 hover:border-[#00D2FF]/50 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] border border-[#00D2FF]/30">
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">{role.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Industry Integration & Placement Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-[#00E599]/35 shadow-2xl p-5 sm:p-7 lg:p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E599]/15 border border-[#00E599]/40">
                <Users className="w-4 h-4 text-[#00E599]" />
                <span className="text-xs font-bold text-[#00E599] uppercase tracking-wider">
                  Direct Industry Integration &amp; Placement Support
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">
                Virtual Company Sessions &amp; Placement Assistance
              </h2>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
                Direct exposure to how enterprise engineering teams deploy and maintain AI in production environments. Students interact with practicing engineers from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#05143A]/90 to-[#030E28]/90 border border-[#00E599]/25 text-xs text-[#CBD5E1] leading-relaxed">
                <strong className="text-white font-bold">100% Placement Assistance Included:</strong> Comprehensive resume audits, GitHub portfolio positioning, live technical mock interviews, and direct referral opportunities with regional technology teams.
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-b from-[#07193D]/95 via-[#04122C]/95 to-[#020A17]/95 rounded-2xl p-5 sm:p-6 border border-[#00D2FF]/35 text-center space-y-3.5 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#0878E8] shadow-[0_0_20px_rgba(8,120,232,0.35)] flex items-center justify-center mx-auto text-white border border-[#00D2FF]/50">
                <BadgeCheck className="w-6 h-6 text-[#00E599]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-heading">
                  Apply for Upcoming FDE Cohort
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-normal">
                  6-Month Track · ₹25,000 Tuition · 100% Placement Assistance Included.
                </p>
              </div>
              <div className="space-y-2 pt-1">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply for FDE Cohort
                </Button>
                <button
                  type="button"
                  onClick={() => openCurriculum('fde')}
                  className="w-full py-2.5 rounded-xl text-xs font-extrabold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors cursor-pointer"
                >
                  Download Syllabus (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

