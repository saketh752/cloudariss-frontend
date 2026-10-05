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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { DaapHeroCard } from '@/components/curriculum/DaapHeroCard';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';

export const DaapPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  // Core Technology Areas with building-block progression
  const coreTechAreas = [
    {
      tech: 'Excel',
      icon: <Table className="w-6 h-6 text-emerald-400" />,
      title: 'Spreadsheet Modeling & Formulas',
      desc: 'Formulas (SUM, AVERAGE, MAX/MIN), pivot tables, dynamic array formulas (XLOOKUP), conditional formatting, and What-If commercial modeling.',
    },
    {
      tech: 'SQL',
      icon: <Database className="w-6 h-6 text-[#19BCE8]" />,
      title: 'Relational Database Querying',
      desc: 'Relational schema design, complex multi-table joins, subqueries, Common Table Expressions (CTEs), and analytical window functions on real datasets.',
    },
    {
      tech: 'Python',
      icon: <Terminal className="w-6 h-6 text-[#19BCE8]" />,
      title: 'Data Wrangling & EDA Plotting',
      desc: 'Core Python data structures, array computing with NumPy, data cleaning with Pandas, and exploratory data analysis plotting with Matplotlib and Seaborn.',
    },
    {
      tech: 'Power BI',
      icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
      title: 'Business Intelligence & DAX',
      desc: 'Star schema data modeling, Power Query ETL shaping, custom DAX calculated measures, and interactive KPI executive dashboards.',
    },
    {
      tech: 'Generative AI',
      icon: <Cpu className="w-6 h-6 text-[#19BCE8]" />,
      title: 'Prompting, Embeddings & RAG',
      desc: 'LLM APIs, prompt engineering, structured JSON outputs, vector search embeddings, and Retrieval-Augmented Generation (RAG) over private documentation.',
    },
    {
      tech: 'Agentic AI',
      icon: <Bot className="w-6 h-6 text-brand-orange" />,
      title: 'Autonomous Analytics Agents',
      desc: 'Autonomous multi-tool agent patterns, SQL query-calling agents, memory loops, human validation checks, and framework orchestration with LangChain.',
    },
  ];

  return (
    <div className="space-y-10 lg:space-y-14 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH DATA & AGENTIC AI CANVAS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase font-heading">
                  FLAGSHIP ANALYTICS & AI TRACK
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                Data Analyst Accelerator Program{' '}
                <span className="text-gradient-orange block mt-1">(DAAP)</span>
              </h1>

              <p className="text-base sm:text-lg text-[#E5EAF3] font-normal leading-relaxed max-w-2xl">
                A rapid 12-week sprint taking you from spreadsheet modeling and relational SQL querying to Python EDA, Power BI executive dashboards, Generative AI (RAG), and autonomous Agentic AI tools.
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap gap-2.5 text-xs font-bold text-white">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-brand-orange/30 shadow-subtle">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>12 Weeks (3 Months)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-brand-orange/30 shadow-subtle">
                  <BookOpen className="w-4 h-4 text-brand-orange" />
                  <span>8 Connected Sprints</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-brand-orange/30 shadow-subtle">
                  <Laptop className="w-4 h-4 text-brand-orange" />
                  <span>100% Online · Live Interactive</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold bg-brand-orange text-white hover:bg-brand-orange-hover shadow-subtle transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Curriculum (PDF)</span>
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="text-white border-[#19BCE8]/40 hover:bg-[#19BCE8]/20"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Right: Technical Analytics & Agentic AI Canvas */}
            <div className="lg:col-span-5">
              <DaapHeroCard
                onOpenCurriculum={() => openCurriculum('daap')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. CORE BUILDING BLOCKS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Building Blocks"
          title="From Raw Datasets to Autonomous Analytics"
          subtitle="Six modular foundations engineering complete quantitative confidence, executive visualization, and AI workflow mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreTechAreas.map((area, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-brand-orange/25 p-5 sm:p-5.5 shadow-xl hover:shadow-[0_16px_36px_rgba(255,122,0,0.22)] hover:border-brand-orange/60 transition-all duration-300 space-y-3.5 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/15 flex items-center justify-center border border-brand-orange/40 text-brand-orange">
                    {area.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                    {area.tech}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 text-[11px] font-bold text-brand-orange">
                Hands-on Lab Exercise Included
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DOCUMENTED HANDS-ON PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Demonstrated Capability"
          title="Documented Capstone Projects"
          subtitle="Real business datasets and autonomous analytical pipelines that demonstrate your quantitative skills to hiring teams."
        />

        <ProjectsVisual initialTab="daap" />
      </section>

      {/* ========================================================================= */}
      {/* 5. VIRTUAL COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-brand-orange/40 shadow-2xl p-5 sm:p-7 lg:p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40">
                <Layers className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">
                Virtual Company Sessions with Data Analytics Practitioners
              </h2>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
                Direct exposure to how enterprise data and business intelligence teams operate. Students participate in live technical walkthroughs with working data analysts and AI engineers from technology firms in Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#05143A]/90 to-[#030E28]/90 border border-brand-orange/30 text-xs text-[#CBD5E1] leading-relaxed">
                <strong className="text-white font-bold">Top-5 Cohort Internship Pathway:</strong> The top 5 performing students in each cohort earn formal internship interview eligibility with participating regional technology teams.
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-b from-[#1C122C]/95 via-[#140C24]/95 to-[#080614]/95 rounded-2xl p-5 sm:p-6 border border-brand-orange/35 text-center space-y-3.5 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange shadow-[0_0_20px_rgba(255,107,53,0.35)] flex items-center justify-center mx-auto text-white border border-brand-orange/50">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-heading">
                  Dedicated Job Assistance
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-normal">
                  Saturday ATS resume audits, portfolio reviews, and Sunday live technical mock interviews with personalized feedback.
                </p>
              </div>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Apply for DAAP Cohort
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
