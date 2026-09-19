import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Laptop,
  CheckCircle2,
  Table,
  Database,
  Terminal,
  BarChart3,
  Bot,
  Cpu,
  Layers,
  Sparkles,
  Tag,
  Check,
  Copy,
  PhoneCall,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';

export const DaapPage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

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
      icon: <Table className="w-5 h-5 text-brand-orange" />,
      title: 'Spreadsheet Modeling & Formulas',
      desc: 'Formulas (SUM, AVERAGE, MAX/MIN), pivot tables, pivot charts, conditional formatting, and What-If analysis.',
    },
    {
      tech: 'SQL',
      icon: <Database className="w-5 h-5 text-brand-orange" />,
      title: 'Relational Database Querying',
      desc: 'Relational schema design, complex joins, CTEs, subqueries, and analytical window functions on real datasets.',
    },
    {
      tech: 'Python',
      icon: <Terminal className="w-5 h-5 text-brand-orange" />,
      title: 'Data Wrangling & Visualization',
      desc: 'Core Python data structures, array computing with NumPy, data transformation with Pandas, and EDA plotting with Matplotlib/Seaborn.',
    },
    {
      tech: 'Power BI',
      icon: <BarChart3 className="w-5 h-5 text-brand-orange" />,
      title: 'Business Intelligence & DAX',
      desc: 'Data modeling, star schemas, Power Query ETL, DAX calculated measures, and interactive KPI dashboards.',
    },
    {
      tech: 'Generative AI',
      icon: <Cpu className="w-5 h-5 text-brand-orange" />,
      title: 'Prompting, Embeddings & RAG',
      desc: 'LLM APIs, prompt engineering, structured JSON outputs, vector search, and Retrieval-Augmented Generation workflows.',
    },
    {
      tech: 'Agentic AI',
      icon: <Bot className="w-5 h-5 text-brand-orange" />,
      title: 'Tool-Calling & Analytics Agents',
      desc: 'Autonomous multi-tool agent patterns, guardrails, memory, human verification loops, and framework orchestration (LangChain/CrewAI).',
    },
  ];

  // Learning Progression
  const learningProgression = [
    {
      step: '01',
      title: 'Excel',
      desc: 'Foundational data hygiene, formulas, pivot tables, dashboard visualization, and initial spreadsheet analysis.',
    },
    {
      step: '02',
      title: 'SQL',
      desc: 'Relational querying from basic SELECT filters to advanced multi-table joins, subqueries, and window functions.',
    },
    {
      step: '03',
      title: 'Python',
      desc: 'Automated data manipulation with Pandas, numeric operations with NumPy, and exploratory data analysis storytelling.',
    },
    {
      step: '04',
      title: 'Power BI',
      desc: 'End-to-end business intelligence dashboards, custom DAX measures, and governed semantic data modeling.',
    },
    {
      step: '05',
      title: 'Generative AI',
      desc: 'Prompt design, API integration, vector embeddings, chunking strategies, and grounded document retrieval.',
    },
    {
      step: '06',
      title: 'Agentic AI',
      desc: 'Designing safe, tool-calling data agents capable of querying SQL databases and generating validated insights.',
    },
  ];

  // Documented DAAP Projects
  const daapProjects = [
    {
      title: 'AI-Assisted Sales Dashboard',
      technologies: ['Excel', 'Pivot Tables', 'Formulas', 'Generative AI'],
      desc: 'Interactive spreadsheet dashboard using pivot tables and slicers to visualize sales performance while validating AI-generated narrative insights against raw numbers.',
    },
    {
      title: 'SQL Database Analysis',
      technologies: ['SQL', 'PostgreSQL', 'CTEs', 'Window Functions'],
      desc: 'In-depth relational database exploration utilizing window functions (ROW_NUMBER, RANK) and common table expressions to solve realistic business inquiries.',
    },
    {
      title: 'Data Analyst Knowledge Assistant',
      technologies: ['Embeddings', 'RAG', 'Vector Search'],
      desc: 'Retrieval-Augmented Generation system that indexes documentation and structured records, providing grounded factual answers with verifiable sources.',
    },
    {
      title: 'Python EDA + AI Hypothesis Lab',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      desc: 'Exploratory data analysis on retail datasets where multimodal AI suggests analytical hypotheses and students validate every claim through reproducible Python code.',
    },
    {
      title: 'Power BI Dashboard + AI Narrative',
      technologies: ['Power BI', 'DAX', 'Power Query'],
      desc: 'Interactive HR or Sales dashboard featuring custom DAX calculations, structured data models, and governed automated business narratives.',
    },
    {
      title: 'End-to-End Agentic Data Analytics Project',
      technologies: ['Agent Frameworks', 'LangChain / CrewAI'],
      desc: 'Complete portfolio-grade agent architecture integrating SQL/Python tools: plan -> retrieve -> execute -> validate -> executive report presentation.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-navy mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                DATA ANALYST ACCELERATOR PROGRAM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              From Data Foundations to{' '}
              <span className="text-gradient-orange">AI-Powered Analytics.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              DAAP develops practical data analytics skills across Excel, SQL, Python, Power BI, Generative AI, and Agentic AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                leftIcon={<PhoneCall className="w-4 h-4" />}
              >
                Talk to Us
              </Button>
              <Button
                href="#curriculum"
                onClick={handleScrollToCurriculum}
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROGRAM SNAPSHOT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Duration</div>
            <div className="text-xl font-extrabold text-brand-navy">12 Weeks</div>
            <div className="text-xs text-slate-500">3-Month structured cohort</div>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Practical Sprints</div>
            <div className="text-xl font-extrabold text-brand-navy">5+ Projects</div>
            <div className="text-xs text-slate-500">Documented mini projects</div>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Synthesis</div>
            <div className="text-xl font-extrabold text-brand-navy">1 Capstone</div>
            <div className="text-xs text-slate-500">End-to-end agentic solution</div>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Readiness</div>
            <div className="text-xl font-extrabold text-brand-navy">Career Support</div>
            <div className="text-xs text-slate-500">Integrated weekend preparation</div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE TECHNOLOGY AREAS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Core Technology Stack"
          title="Building Blocks of Modern Data Analytics"
          subtitle="Each technology builds systematically on the previous layer, taking you from raw spreadsheets to autonomous analytics agents."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechAreas.map((area, idx) => (
            <Card key={idx} variant="white" padding="lg" hoverEffect borderAccent="orange" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center border border-brand-orange/30">
                  {area.icon}
                </div>
                <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded">
                  {area.tech}
                </span>
              </div>
              <h3 className="text-lg font-bold text-brand-navy">
                {area.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {area.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEARNING PROGRESSION */}
      {/* ========================================================================= */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <SectionHeading
          eyebrow="Curriculum Progression"
          title="From Raw Numbers to Autonomous Agent Workflows"
          subtitle="A structured 6-phase sequence designed to ensure technical depth and conceptual clarity at every step."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningProgression.map((item) => (
            <Card key={item.step} variant="white" padding="md" className="border border-brand-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-brand-orange">{item.step}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  Phase
                </span>
              </div>
              <h4 className="text-base font-bold text-brand-navy">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Hands-On Projects"
          title="Documented Practical Project Builds"
          subtitle="Explore the 6 practical projects developed throughout the DAAP curriculum, combining data hygiene with modern AI augmentation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {daapProjects.map((project, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="lg"
              hoverEffect
              borderAccent="orange"
              className="flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-brand-orange">
                    PROJECT-0{idx + 1}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">
                    DAAP Track
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Utilized
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-surface-blue text-brand-navy border border-brand-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CAPSTONE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="surface" padding="lg" className="border border-brand-border">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold border border-brand-orange/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Program Culmination</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              1 Capstone: End-to-End Enterprise Data & AI Solution
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              The program culminates in an end-to-end capstone project integrating the complete data and AI curriculum. Students execute raw-data cleaning, SQL relational querying, Python EDA, Power BI visualization dashboards, and build tool-connected analytics agents that execute queries and generate grounded insights under human validation.
            </p>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* 7. CAREER SUPPORT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Career Support"
          title="Integrated Career Development Framework"
          subtitle="Systematic weekend sessions running alongside technical weeks to ensure learners present their analytical competence with conviction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Resume Optimization', desc: 'Data analyst resume templates, quantifying metrics impact, and recruiter screening reviews.' },
            { title: 'LinkedIn Profile Building', desc: 'Technical positioning, analytics project showcasing, and industry recruiter outreach.' },
            { title: 'Job Search Strategy', desc: 'Boolean search strings across portals, application tracking, and referral playbooks.' },
            { title: 'Mock Interviews', desc: 'Live SQL query challenges, dashboard walkthrough drills, and behavioral HR simulations.' },
            { title: 'Career Guidance', desc: 'Salary negotiation basics, offer letter evaluation, and 30-60-90 day job search roadmaps.' },
            { title: 'Industry & Company Sessions', desc: 'Virtual sessions with analytics engineers to observe working industry workflows.' },
            { title: 'Placement Assistance', desc: 'Referral networks, portfolio circulation, and ongoing interview preparation guidance.' },
          ].map((item, i) => (
            <Card key={i} variant="white" padding="md" className="border border-brand-border space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <h4 className="text-base font-bold text-brand-navy">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DAAP OFFER CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border-2 border-brand-orange/50 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
            <Tag className="w-3.5 h-3.5" />
            <span>Admissions Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vinayaka Chavithi Special Offer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Enroll in the DAAP Data Analyst Accelerator Program during our festive intake and receive full access to all 5+ mini projects, capstone, and career support.
          </p>

          <div className="flex items-center justify-center gap-4 py-2">
            <span className="text-2xl sm:text-3xl text-slate-400 line-through font-semibold">
              {BRAND_DATA.offer.originalPrice}
            </span>
            <span className="text-xl sm:text-2xl text-brand-orange font-bold">→</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
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
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-blue/40 hover:bg-brand-blue/60 text-xs font-semibold text-white transition-colors"
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
              to="/contact"
              variant="primary"
              size="lg"
              leftIcon={<PhoneCall className="w-4 h-4" />}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
