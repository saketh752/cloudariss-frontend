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
  Download,
  BookOpen,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { DaapCurriculumJourney } from '@/components/curriculum/DaapCurriculumJourney';
import { DaapHeroCard } from '@/components/curriculum/DaapHeroCard';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { VinayakaOfferCard } from '@/components/home/VinayakaOfferCard';

export const DaapPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  const handleScrollToCurriculum = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('curriculum');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Core Technology Areas with building-block progression
  const coreTechAreas = [
    {
      tech: 'Excel',
      icon: <Table className="w-6 h-6 text-emerald-600" />,
      title: 'Spreadsheet Modeling & Formulas',
      desc: 'Formulas (SUM, AVERAGE, MAX/MIN), pivot tables, dynamic array formulas (XLOOKUP), conditional formatting, and What-If commercial modeling.',
    },
    {
      tech: 'SQL',
      icon: <Database className="w-6 h-6 text-brand-blue" />,
      title: 'Relational Database Querying',
      desc: 'Relational schema design, complex multi-table joins, subqueries, Common Table Expressions (CTEs), and analytical window functions on real datasets.',
    },
    {
      tech: 'Python',
      icon: <Terminal className="w-6 h-6 text-[#0a6680]" />,
      title: 'Data Wrangling & EDA Plotting',
      desc: 'Core Python data structures, array computing with NumPy, data cleaning with Pandas, and exploratory data analysis plotting with Matplotlib and Seaborn.',
    },
    {
      tech: 'Power BI',
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
      title: 'Business Intelligence & DAX',
      desc: 'Star schema data modeling, Power Query ETL shaping, custom DAX calculated measures, and interactive KPI executive dashboards.',
    },
    {
      tech: 'Generative AI',
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
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
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH DATA & AGENTIC AI CANVAS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-orange border border-brand-orange/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-brand-orange uppercase font-heading">
                  FLAGSHIP ANALYTICS & AI TRACK
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] font-heading">
                Data Analyst Accelerator Program{' '}
                <span className="text-gradient-orange block mt-1">(DAAP)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                A rapid 12-week sprint taking you from spreadsheet modeling and relational SQL querying to Python EDA, Power BI executive dashboards, Generative AI (RAG), and autonomous Agentic AI tools.
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap gap-3 text-xs font-bold text-brand-navy">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border shadow-subtle">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>12 Weeks (3 Months)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border shadow-subtle">
                  <BookOpen className="w-4 h-4 text-brand-orange" />
                  <span>8 Connected Sprints</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border shadow-subtle">
                  <Laptop className="w-4 h-4 text-brand-orange" />
                  <span>100% Online · Live Interactive</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-brand-orange text-white hover:bg-brand-orange-hover shadow-subtle transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Curriculum (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToCurriculum}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-slate-700 hover:text-brand-navy hover:bg-slate-50 border border-brand-border transition-colors cursor-pointer"
                >
                  <span>Interactive Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Right: Technical Analytics & Agentic AI Canvas */}
            <div className="lg:col-span-5">
              <DaapHeroCard
                onOpenCurriculum={() => openCurriculum('daap')}
                onScrollToPathway={handleScrollToCurriculum}
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Building Blocks"
          title="From Raw Datasets to Autonomous Analytics"
          subtitle="Six modular foundations engineering complete quantitative confidence, executive visualization, and AI workflow mastery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechAreas.map((area, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-brand-border/80 p-6 shadow-subtle hover:shadow-card hover:border-brand-orange/50 transition-all duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface-light flex items-center justify-center border border-brand-border">
                    {area.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-surface-orange text-brand-orange">
                    {area.tech}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy font-heading">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {area.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 text-[11px] font-bold text-brand-orange">
                Hands-on Lab Exercise Included
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE 8-STAGE CURRICULUM SPRINT */}
      {/* ========================================================================= */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Interactive Progression"
            title="Sprint-by-Sprint Curriculum Continuum"
            subtitle="Click each sprint to explore the specific technical competencies, data modeling exercises, and capstone goals."
          />
          <button
            type="button"
            onClick={() => openCurriculum('daap')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-surface-orange text-brand-orange text-xs font-bold hover:bg-brand-orange hover:text-white border border-brand-orange/30 transition-colors shrink-0 cursor-pointer self-start md:self-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download DAAP PDF Structure</span>
          </button>
        </div>

        <DaapCurriculumJourney />
      </section>

      {/* ========================================================================= */}
      {/* 4. DOCUMENTED HANDS-ON PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
        <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-orange border border-brand-orange/30">
                <Layers className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Virtual Company Sessions with Data Analytics Practitioners
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Direct exposure to how enterprise data and business intelligence teams operate. Students participate in live technical walkthroughs with working data analysts and AI engineers from technology firms in Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-xs text-slate-600 leading-relaxed">
                <strong className="text-brand-navy font-bold">Top-5 Cohort Internship Pathway:</strong> The top 5 performing students in each cohort earn formal internship interview eligibility with participating regional technology teams.
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-surface-orange/40 rounded-2xl p-6 border border-brand-orange/20 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-brand-orange border border-brand-border">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-heading">
                Dedicated Job Assistance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saturday ATS resume audits, portfolio reviews, and Sunday live technical mock interviews with personalized feedback.
              </p>
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

      {/* ========================================================================= */}
      {/* 6. VINAYAKA CHAVITHI ADMISSIONS SPECIAL OFFER */}
      {/* ========================================================================= */}
      <VinayakaOfferCard />
    </div>
  );
};
