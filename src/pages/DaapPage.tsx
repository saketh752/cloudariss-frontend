import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Laptop,
  Table,
  Database,
  Terminal,
  BarChart3,
  Bot,
  Cpu,
  Sparkles,
  FileText,
  BookOpen,
  Layers,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { DAAP_PROJECTS } from '@/data/projectsData';
import {
  PowerBiLogo,
  PythonLogo,
  ExcelLogo,
  RagLogo,
  AgenticAiLogo,
  PostgreSqlLogo,
} from '@/components/icons/TechLogos';

export const DaapPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  // 6 Modular Building Blocks
  const coreTechAreas = [
    {
      num: '01',
      tech: 'Excel',
      icon: <Table className="w-5 h-5 text-emerald-400" />,
      title: 'Spreadsheet Modeling & Formulas',
      focus: 'Data Modeling & Scenarios',
      desc: 'Formulas (SUM, AVERAGE, MAX/MIN), pivot tables, dynamic array formulas (XLOOKUP), conditional formatting, and What-If commercial modeling.',
      tools: ['XLOOKUP', 'Pivot Tables & Slicers', 'What-If Scenarios', 'Data Validation'],
    },
    {
      num: '02',
      tech: 'SQL',
      icon: <Database className="w-5 h-5 text-[#19BCE8]" />,
      title: 'Relational Database Querying',
      focus: 'Schema Design & CTEs',
      desc: 'Relational schema design, complex multi-table joins, subqueries, Common Table Expressions (CTEs), and analytical window functions on real datasets.',
      tools: ['PostgreSQL', 'Multi-Table JOINs', 'Window Functions', 'CTEs & Subqueries'],
    },
    {
      num: '03',
      tech: 'Python',
      icon: <Terminal className="w-5 h-5 text-[#19BCE8]" />,
      title: 'Data Wrangling & EDA Plotting',
      focus: 'Exploratory Analytics',
      desc: 'Core Python data structures, array computing with NumPy, data cleaning with Pandas, and exploratory data analysis plotting with Matplotlib and Seaborn.',
      tools: ['Pandas & NumPy', 'Matplotlib & Seaborn', 'Data Cleaning', 'Jupyter Notebooks'],
    },
    {
      num: '04',
      tech: 'Power BI',
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      title: 'Business Intelligence & DAX',
      focus: 'Executive Dashboards',
      desc: 'Star schema data modeling, Power Query ETL shaping, custom DAX calculated measures, and interactive KPI executive dashboards.',
      tools: ['Power Query ETL', 'Star Schema Models', 'DAX Measures', 'Executive Dashboards'],
    },
    {
      num: '05',
      tech: 'Generative AI',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: 'Prompting, Embeddings & RAG',
      focus: 'AI Knowledge Retrieval',
      desc: 'LLM APIs, prompt engineering, structured JSON outputs, vector search embeddings, and Retrieval-Augmented Generation (RAG) over private documentation.',
      tools: ['LLM APIs', 'Vector Embeddings', 'RAG Retrieval', 'Structured Prompts'],
    },
    {
      num: '06',
      tech: 'Agentic AI',
      icon: <Bot className="w-5 h-5 text-brand-orange" />,
      title: 'Autonomous Analytics Agents',
      focus: 'Automated Decision Loops',
      desc: 'Autonomous multi-tool agent patterns, SQL query-calling agents, memory loops, human validation checks, and framework orchestration with LangChain.',
      tools: ['LangChain', 'Tool & SQL Calling', 'Agent Memory Loops', 'Verification Gates'],
    },
  ];

  // Data & AI Tech Stack
  const techStack = [
    { name: 'Microsoft Excel', category: 'Commercial Modeling', logo: <ExcelLogo className="w-5 h-5" /> },
    { name: 'SQL & PostgreSQL', category: 'Relational DBs', logo: <PostgreSqlLogo className="w-5 h-5" /> },
    { name: 'Python & Pandas', category: 'Data Wrangling', logo: <PythonLogo className="w-5 h-5" /> },
    { name: 'Power BI & DAX', category: 'Business Intelligence', logo: <PowerBiLogo className="w-5 h-5" /> },
    { name: 'Generative AI', category: 'RAG Architecture', logo: <RagLogo className="w-5 h-5" /> },
    { name: 'Agentic AI', category: 'Autonomous Agents', logo: <AgenticAiLogo className="w-5 h-5" /> },
  ];

  return (
    <div className="pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — EDITORIAL INTEGRATED ATMOSPHERE                         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-5 pb-8 sm:pt-10 sm:pb-14 lg:pt-16 lg:pb-20 bg-gradient-atmospheric">
        {/* Continuous Full-Bleed Atmospheric Artwork Layer (Desktop & Tablet) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        >
          {/* Ambient color glow matching course theme */}
          <div
            className="absolute top-1/4 right-[15%] w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{ backgroundColor: '#FF7A00' }}
          />

          {/* Continuous background image spanning across the hero */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-[position:85%_center] opacity-95 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: 'url(/brand/hero/banner_daap_v4.jpg)',
            }}
          />

          {/* Seamless natural edge blending across the entire section into #020817 */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#020817]/60 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand-orange transition-colors mb-2.5 sm:mb-4 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-3 sm:space-y-4 relative">
            {/* Transparent graduated black fade behind content — Strict max 40% opacity (#000000) */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-8 sm:-inset-x-12 lg:-inset-x-16 -inset-y-6 sm:-inset-y-10 pointer-events-none select-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 120% 100% at 28% 42%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)',
              }}
            />

            {/* Typographic Eyebrow */}
            <div className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-400">
              Flagship Analytics &amp; AI Track
            </div>

            {/* Course Title — Clear starting point */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.14] font-heading drop-shadow-sm">
              Data Analyst Accelerator Program{' '}
              <span className="text-gradient-orange block sm:inline mt-0.5 sm:mt-0">(DAAP)</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed drop-shadow-xs max-w-2xl">
              A rapid 12-week sprint taking you from spreadsheet modeling and relational SQL querying to Python exploratory analysis, Power BI executive dashboards, Generative AI (RAG), and autonomous Agentic AI tools.
            </p>

            {/* Mobile Integrated Visual — Shorter cinematic crop feathered naturally into canvas */}
            <div className="lg:hidden relative w-full my-2.5 sm:my-3 overflow-hidden pointer-events-none rounded-xl">
              <div className="relative w-full h-28 sm:h-36">
                <img
                  src="/brand/hero/banner_daap_v4.jpg"
                  alt="Data Analyst Accelerator Program Analytics Workstation"
                  className="w-full h-full object-cover object-[85%_35%]"
                  style={{
                    maskImage:
                      'radial-gradient(ellipse 95% 85% at 50% 50%, black 65%, transparent 100%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 95% 85% at 50% 50%, black 65%, transparent 100%)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35 pointer-events-none" />
              </div>
            </div>

            {/* Essential Program Facts — Natural, low-chrome integrated layout */}
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-slate-300 py-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>12 Weeks · Live Online</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>6 Core Disciplines</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5 text-[#00E599] shrink-0" />
                <span className="text-slate-100 font-semibold">100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>Weekend &amp; Evening Sessions</span>
              </div>
            </div>

            {/* Primary Action Row — Side by side on mobile & desktop */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 pt-1.5 sm:pt-2">
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md shadow-orange-500/20 transition-all duration-200 cursor-pointer min-h-[40px] sm:min-h-[44px]"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">View Curriculum</span>
              </button>

              <Button
                to="/contact"
                variant="outline"
                size="md"
                className="text-white border-brand-orange/40 hover:bg-brand-orange/15 min-h-[40px] sm:min-h-[44px] justify-center text-xs sm:text-sm px-3 sm:px-5"
              >
                Apply Now
              </Button>
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
        {/* 2. CURRICULUM PROGRESSION — OPEN EDITORIAL LEARNING TIMELINE               */}
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
            From Raw Datasets to Autonomous Analytics
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Six modular foundations engineering complete quantitative confidence, executive visualization, and AI workflow mastery.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative pl-7 sm:pl-10 space-y-8 sm:space-y-10">
          {/* Continuous vertical timeline guideline */}
          <div
            aria-hidden="true"
            className="absolute left-[13px] sm:left-[17px] top-3 bottom-6 w-px bg-gradient-to-b from-brand-orange/60 via-amber-500/30 via-60% to-transparent pointer-events-none"
          />

          {coreTechAreas.map((area) => (
            <div key={area.num} className="group relative">
              {/* Connected Timeline Marker */}
              <div className="absolute -left-[28px] sm:-left-[40px] top-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#020817] border border-brand-orange/40 group-hover:border-brand-orange group-hover:scale-110 flex items-center justify-center font-mono text-xs font-bold text-brand-orange shadow-sm shadow-orange-500/20 transition-all duration-300 z-10">
                {area.num}
              </div>

              {/* Stage Body — Open editorial presentation directly on canvas */}
              <div className="space-y-2 pb-6 sm:pb-8 border-b border-white/[0.06] last:border-b-0 last:pb-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-black text-brand-orange tracking-wider">
                    PHASE {area.num}
                  </span>
                  <span className="text-slate-600 select-none">·</span>
                  <span className="text-xs font-mono text-slate-400">
                    {area.focus}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-heading">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-3xl">
                  {area.desc}
                </p>

                {/* Inline Lightweight Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
                  {area.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] sm:text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAPSTONE & PORTFOLIO PROJECTS                                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-8 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(2, 6, 23, 0.45) 0%, rgba(2, 6, 23, 0.18) 60%, transparent 100%)',
          }}
        />

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Five Documented Capstone &amp; Portfolio Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Five source-defined portfolio projects spanning spreadsheet modeling, relational SQL, Python EDA, Power BI intelligence, and the end-to-end analytics capstone.
          </p>
        </div>

        {/* Master Analytics Capstone Feature — Open Architectural Showcase (No Enclosing Box) */}
        {(() => {
          const capstone = DAAP_PROJECTS.find((p) => p.tag === '05') || DAAP_PROJECTS[4];
          return (
            <div className="space-y-5 pt-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Master Analytics &amp; AI Capstone
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Project {capstone.tag} · Definitive Portfolio Asset
                </span>
              </div>

              <div className="space-y-2 max-w-4xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-heading">
                  {capstone.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {capstone.description}
                </p>
              </div>

              {/* Open Deliverables Checklist (No Nested Boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                {capstone.deliverables.map((d, idx) => (
                  <div
                    key={idx}
                    className="pt-3 border-t border-white/[0.08] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{d}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {capstone.coreTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* 4 Domain Portfolio Projects — Open 4-Column Editorial Grid */}
        <div className="space-y-5 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Four Domain Portfolio Case Studies
            </h4>
            <span className="text-xs font-mono text-slate-400">
              Verified Technical Deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAAP_PROJECTS.filter((p) => p.tag !== '05').map((p) => (
              <div
                key={p.id}
                className="pt-3.5 border-t border-white/[0.08] space-y-2.5 group"
              >
                <div className="flex items-center justify-between gap-1.5 flex-wrap">
                  <span className="text-[11px] sm:text-xs font-mono font-semibold text-brand-orange">
                    {p.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-slate-500 shrink-0">Project {p.tag}</span>
                </div>
                <h5 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {p.title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{p.description}</p>
                <div className="pt-2 flex flex-wrap gap-1">
                  {p.coreTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNOLOGY ECOSYSTEM                                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6 relative">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Data, Business Intelligence &amp; AI Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Built on the core quantitative frameworks and AI tools relied upon across corporate analytics teams.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-brand-orange/30 transition-all flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-1.5 sm:p-2">
                {tech.logo}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate font-heading group-hover:text-amber-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VIRTUAL COMPANY SESSIONS & CAREER PREPARATION                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-2 sm:pt-4">
        {/* Atmospheric soft readability fade — gradual transition with no hard edges */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-10 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 90% 75% at 50% 50%, rgba(25, 12, 4, 0.45) 0%, rgba(2, 6, 23, 0.15) 70%, transparent 100%)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Editorial Column: Direct Industry Exposure & Top-5 Pathway */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Direct Industry Integration
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-snug">
              Virtual Company Sessions with Data Analytics Practitioners
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Direct exposure to how enterprise data and business intelligence teams operate. Students participate in live technical walkthroughs with working data analysts and AI engineers from technology firms in Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
            </p>

            {/* Top-5 Internship Pathway: Restrained divider-led detail (no nested box) */}
            <div className="pt-2 sm:pt-3 border-l-2 border-brand-orange/60 pl-4 sm:pl-5 space-y-1">
              <div className="text-xs font-mono font-bold text-white tracking-wide uppercase">
                Top-5 Internship Pathway
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                The top 5 performing students in each program group earn formal internship interview eligibility with participating regional technology teams.
              </p>
            </div>
          </div>

          {/* Right Editorial Column: Career Support & Program Actions */}
          <div className="lg:col-span-5 space-y-5 pt-2 lg:pt-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>Dedicated Career Support</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                Dedicated Job Assistance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Saturday ATS resume audits, portfolio reviews, and Sunday live technical mock interviews with personalized feedback.
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
                onClick={() => openCurriculum('daap')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[42px] sm:min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Syllabus (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
