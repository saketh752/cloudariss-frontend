import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Bot,
  CheckCircle2,
  FileText,
  Users,
  Lock,
  Activity,
  Code2,
  Tag,
  BadgeCheck,
  MessageCircle,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { openWhatsApp, getFDEEnquiryMessage } from '@/utils/whatsapp';
import { FDE_PROJECTS } from '@/data/projectsData';
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

  // 4 Structured Stages Grouping the 10 Engineering Disciplines
  const engineeringStages = [
    {
      phase: 'STAGE 01',
      title: 'Foundations & Backend Systems',
      subtitle: 'Disciplines 01–02',
      accent: '#00D2FF',
      disciplines: [
        {
          num: '01',
          name: 'Software Engineering Foundations',
          desc: 'Core Python 3.11, Linux shell automation, Git/GitHub collaborative workflows, data structures & algorithms (DSA), and systematic debugging practices.',
          tools: 'Python · Linux · Git/GitHub · DSA',
        },
        {
          num: '02',
          name: 'APIs, Databases & Backend Systems',
          desc: 'Authoring clean asynchronous REST APIs, JSON data serialization, relational database engineering with SQL & PostgreSQL, indexing, and schema design.',
          tools: 'REST APIs · JSON · SQL · PostgreSQL',
        },
      ],
    },
    {
      phase: 'STAGE 02',
      title: 'Machine Learning, GenAI & RAG',
      subtitle: 'Disciplines 03–04',
      accent: '#8B5CF6',
      disciplines: [
        {
          num: '03',
          name: 'Machine Learning & LLM Foundations',
          desc: 'Core ML fundamentals, Large Language Model architectures, prompt mechanics, AI APIs, model parameters, and fine-tuning concepts.',
          tools: 'ML Basics · LLMs · AI APIs · Fine-Tuning',
        },
        {
          num: '04',
          name: 'Generative AI & RAG Architectures',
          desc: 'Dense vector embeddings, chunking strategies, vector databases (FAISS, Chroma), semantic similarity search, and citation-grounded RAG retrieval.',
          tools: 'Embeddings · RAG · Vector DBs · Semantic Search',
        },
      ],
    },
    {
      phase: 'STAGE 03',
      title: 'Autonomous Agents & Model Serving',
      subtitle: 'Disciplines 05–06',
      accent: '#00E599',
      disciplines: [
        {
          num: '05',
          name: 'AI Agents & MCP Frameworks',
          desc: 'Autonomous agent loops, tool/function calling, Model Context Protocol (MCP) standards, memory persistence, and collaborative multi-agent patterns.',
          tools: 'AI Agents · Function Calling · MCP · Multi-Agent',
        },
        {
          num: '06',
          name: 'Production AI Systems & Model Serving',
          desc: 'High-throughput asynchronous model serving with FastAPI, Uvicorn, inference optimizations, GPU utilization concepts, and response streaming.',
          tools: 'FastAPI · Model Serving · Inference · GPUs',
        },
      ],
    },
    {
      phase: 'STAGE 04',
      title: 'Cloud DevOps, Security & Client Solutions',
      subtitle: 'Disciplines 07–10',
      accent: '#00D2FF',
      disciplines: [
        {
          num: '07',
          name: 'Cloud, Docker & CI/CD Automation',
          desc: 'Packaging AI microservices into Docker containers, automated GitHub Actions / Jenkins CI/CD pipelines, and multi-tier cloud deployments on AWS/Azure/GCP.',
          tools: 'Docker · CI/CD · AWS / Cloud · Automation',
        },
        {
          num: '08',
          name: 'Deployment, Observability & Optimization',
          desc: 'Kubernetes pod orchestration, Redis caching layers, token rate limiting, asynchronous task queues, and Prometheus/Grafana telemetry monitoring.',
          tools: 'Kubernetes · Caching · Rate Limiting · Queues',
        },
        {
          num: '09',
          name: 'AI Security, Governance & Evaluation',
          desc: 'Defending against prompt injection, data leakage prevention, authentication, authorization, AI governance, and automated LLM/RAG evaluation benchmarks.',
          tools: 'Prompt Defense · Leakage Control · Evaluation',
        },
        {
          num: '10',
          name: 'Forward Deployed Engineering & Client Solutions',
          desc: 'Requirements gathering, client discovery, production solution architecture, rapid proof-of-concept (POC) delivery, deployment rollouts, and technical documentation.',
          tools: 'Solution Architecture · Discovery · POCs · Rollouts',
        },
      ],
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
    { name: 'AWS Cloud', category: 'Cloud Infrastructure', logo: <AwsLogo className="w-5 h-5" /> },
    { name: 'Observability & Metrics', category: 'Telemetry & Logs', logo: <Activity className="w-5 h-5 text-emerald-400" /> },
    { name: 'AI Security & Guardrails', category: 'Injection Defense', logo: <Lock className="w-5 h-5 text-amber-400" /> },
  ];

  // 6 Practical Curriculum Projects
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

  const flagshipProject = FDE_PROJECTS[0];

  return (
    <div className="pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — EDITORIAL INTEGRATED ATMOSPHERE                         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-5 pb-8 sm:pt-10 sm:pb-14 lg:pt-16 lg:pb-20 bg-gradient-atmospheric">
        {/* Full-bleed Continuous Background Artwork (Desktop only) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
        >
          {/* Ambient cyan glow */}
          <div
            className="absolute top-1/3 right-[18%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
            style={{ backgroundColor: '#00D2FF' }}
          />

          {/* Continuous artwork layer spanning across the hero */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-[position:88%_center] opacity-95 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: 'url(/brand/hero/banner_fde_v1.jpg)',
            }}
          />

          {/* Seamless natural edge blending into #020817 atmosphere */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#020817]/60 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#00D2FF] transition-colors mb-3 sm:mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-3.5 sm:space-y-4 relative">
            {/* Transparent graduated black fade behind content — Strict max 40% opacity (#000000) */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-8 sm:-inset-x-12 lg:-inset-x-16 -inset-y-6 sm:-inset-y-10 pointer-events-none select-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 120% 100% at 28% 42%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)',
              }}
            />

            {/* Program Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Flagship Engineering Track · 6 Months
              </span>
            </div>

            {/* Course Title — Clear starting point */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-sm">
              Forward Deployed AI Systems Engineer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#00E599] to-[#10B981] block mt-1">
                (FDE Track)
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed drop-shadow-xs">
              A premium 6-month engineering track combining software engineering, Generative AI, autonomous agents, cloud architecture, model deployment, evaluation benchmarks, and client problem-solving.
            </p>

            {/* Mobile Integrated Artwork — Wide, shallow, art-directed crop feathered into canvas */}
            <div className="lg:hidden relative w-full my-2.5 sm:my-3 overflow-hidden pointer-events-none">
              <div className="relative w-full h-28 sm:h-36">
                <img
                  src="/brand/hero/banner_fde_v1.jpg"
                  alt="Forward Deployed Engineer AI Systems Deployment"
                  className="w-full h-full object-cover object-[85%_35%]"
                  style={{
                    maskImage:
                      'radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 100%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 100%)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35 pointer-events-none" />
              </div>
            </div>

            {/* Essential Program Facts — Natural, low-chrome integrated layout */}
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300 py-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>6 Months · Live Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#00E599] shrink-0" />
                <span className="text-white font-bold">₹25,000 Tuition</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5 text-[#00E599] shrink-0" />
                <span className="text-slate-100 font-semibold">100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>10 Core Disciplines</span>
              </div>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                type="button"
                onClick={() => openCurriculum('fde')}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-[#0878E8] hover:bg-[#0768ca] text-white shadow-md shadow-blue-500/20 transition-all duration-200 cursor-pointer min-h-[42px] sm:min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Curriculum (PDF)</span>
              </button>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => openWhatsApp(getFDEEnquiryMessage())}
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all duration-200 cursor-pointer min-h-[42px] sm:min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#00E599]" />
                  <span>WhatsApp</span>
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="border-white/15 hover:border-white/30 text-white min-h-[42px] sm:min-h-[44px]"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Movement — soft floating ribbon without hard edges */}
      <div
        className="relative w-full overflow-hidden py-3.5 sm:py-5 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7, 26, 70, 0.35) 0%, transparent 100%)',
          }}
        />
        <TechMarqueeRibbon />
      </div>

      {/* Main Editorial Content Flow */}
      <div className="mt-8 sm:mt-12 lg:mt-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* ========================================================================= */}
        {/* 2. CURRICULUM PROGRESSION — 10 STRUCTURED ENGINEERING DISCIPLINES          */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-8 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(2, 6, 23, 0.38) 0%, rgba(2, 6, 23, 0.16) 60%, transparent 100%)',
          }}
        />

        {/* Natural Editorial Heading */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Ten Structured Engineering Disciplines
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Grounded in official curriculum specifications, structured across 4 progressive engineering phases.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative pl-7 sm:pl-10 space-y-10 sm:space-y-12">
          {/* Continuous vertical timeline guideline */}
          <div
            aria-hidden="true"
            className="absolute left-[13px] sm:left-[17px] top-3 bottom-6 w-px bg-gradient-to-b from-[#00D2FF]/60 via-[#00E599]/30 via-60% to-transparent pointer-events-none"
          />

          {engineeringStages.map((stage, sIdx) => (
            <div key={sIdx} className="group relative">
              {/* Connected Stage Marker */}
              <div
                className="absolute -left-[28px] sm:-left-[40px] top-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#020817] border border-white/20 group-hover:scale-110 flex items-center justify-center font-mono text-xs font-bold shadow-sm transition-all duration-300 z-10"
                style={{ borderColor: stage.accent, color: stage.accent }}
              >
                {String(sIdx + 1).padStart(2, '0')}
              </div>

              {/* Stage Body — Open editorial presentation directly on canvas */}
              <div className="space-y-4 pb-8 sm:pb-10 border-b border-white/[0.06] last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="font-mono text-xs font-black tracking-wider"
                      style={{ color: stage.accent }}
                    >
                      {stage.phase}
                    </span>
                    <span className="text-slate-600 select-none">·</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {stage.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {stage.subtitle}
                  </span>
                </div>

                {/* Open Disciplines Grid — Clean typography, no heavy nested card frames */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {stage.disciplines.map((d) => (
                    <div
                      key={d.num}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] transition-colors space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          Discipline {d.num}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                          {d.tools}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                        {d.name}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {d.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CROSS-STACK FLAGSHIP PROJECT & PRACTICAL LABS                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-8 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.12) 60%, transparent 100%)',
          }}
        />

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Documented Capstone &amp; Production Labs
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Inspect the official cross-stack flagship project and verified portfolio case studies built during the program.
          </p>
        </div>

        {/* Master Flagship Project Feature — Open Architectural Showcase (No Enclosing Box) */}
        <div className="space-y-5 pt-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00D2FF]" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Cross-Stack Capstone Project
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Cross-Phase Portfolio Asset
            </span>
          </div>

          <div className="space-y-2 max-w-4xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-heading">
              {flagshipProject.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {flagshipProject.description}
            </p>
          </div>

          {/* Open Deliverables Checklist (No Nested Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {flagshipProject.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="pt-3 border-t border-white/[0.08] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{del}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-1.5">
            {flagshipProject.coreTools.map((tool, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Practical Curriculum Projects — Open 3-Column Editorial Grid */}
        <div className="space-y-5 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Six Real-World Application Case Studies
            </h4>
            <span className="text-xs font-mono text-slate-400">
              Hands-On Practical Labs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalProjects.map((p, idx) => (
              <div
                key={idx}
                className="pt-3.5 border-t border-white/[0.08] space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#00D2FF]">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Lab #{idx + 1}</span>
                </div>
                <h5 className="text-base font-bold text-white font-heading group-hover:text-[#00D2FF] transition-colors">
                  {p.title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY ECOSYSTEM                                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Enterprise AI &amp; Infrastructure Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Grounded in production-grade tools, frameworks, and deployment platforms utilized by top engineering teams globally.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-[#00D2FF]/30 transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-2">
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
      {/* 5. DIRECT INDUSTRY INTEGRATION & ENROLMENT HUB                            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Direct Industry Integration & Placement Support — Open Editorial Layout (No Enclosing Box, No Nested Card) */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -inset-y-10 pointer-events-none -z-10"
            style={{
              background:
                'radial-gradient(ellipse 90% 75% at 50% 50%, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.12) 70%, transparent 100%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Editorial Column: Direct Industry Exposure & 100% Placement Detail */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#00E599]" />
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Industry Integration &amp; Placement Support
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-snug">
                Virtual Company Sessions &amp; Placement Assistance
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Direct exposure to how enterprise engineering teams deploy and maintain AI in production environments. Students interact with practicing engineers from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              {/* Placement Assistance Detail: Restrained divider-led emphasis (no nested box) */}
              <div className="pt-2 sm:pt-3 border-l-2 border-[#00E599]/60 pl-4 sm:pl-5 space-y-1">
                <div className="text-xs font-mono font-bold text-white tracking-wide uppercase">
                  100% Placement Assistance Included
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Comprehensive resume audits, GitHub portfolio positioning, live technical mock interviews, and direct referral opportunities with regional technology teams.
                </p>
              </div>
            </div>

            {/* Right Editorial Column: Program Action Hub */}
            <div className="lg:col-span-5 space-y-5 pt-2 lg:pt-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  <BadgeCheck className="w-3.5 h-3.5 text-[#00E599]" />
                  <span>Program Enrolment</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  Apply for the FDE Track
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  6-Month Track · ₹25,000 Tuition · 100% Placement Assistance Included.
                </p>
              </div>

              {/* Seamless Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3 pt-1">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="justify-center min-h-[42px] sm:min-h-[44px]"
                >
                  Apply for the Program
                </Button>
                <button
                  type="button"
                  onClick={() => openCurriculum('fde')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[42px] sm:min-h-[44px]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Syllabus (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
