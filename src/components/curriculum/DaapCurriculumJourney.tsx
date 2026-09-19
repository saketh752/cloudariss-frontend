import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Database,
  Terminal,
  LineChart,
  Bot,
  Layers,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  SqlLogo,
  PythonLogo,
  PowerBiLogo,
  ChatGptLogo,
  ClaudeLogo,
  GeminiLogo,
  LangChainLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';

interface Stage {
  num: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  logos: React.ReactNode[];
  summary: string;
  keySkills: string[];
  outcome: string;
}

export const DaapCurriculumJourney: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const stages: Stage[] = [
    {
      num: '01',
      label: 'EXCEL',
      subtitle: 'Spreadsheet Analytics',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
      logos: [<FileSpreadsheet key="xls" className="w-5 h-5 text-emerald-600" />],
      summary:
        'Build structured business modeling discipline. Master advanced lookups (XLOOKUP), nested logical formulas, dynamic array formulas, and executive pivot reports.',
      keySkills: ['XLOOKUP & Index-Match', 'Dynamic Pivot Tables', 'Data Cleaning & Validation', 'Commercial KPI Models'],
      outcome: 'Structure complex financial and sales datasets with audit-ready formulas.',
    },
    {
      num: '02',
      label: 'SQL',
      subtitle: 'Relational Database Queries',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      logos: [<SqlLogo key="sql" className="w-5 h-5" />],
      summary:
        'Extract, filter, and aggregate multi-table schemas in PostgreSQL and MySQL. Write subqueries, Common Table Expressions (CTEs), and advanced window functions.',
      keySkills: ['Multi-Table Joins & CTEs', 'Window Functions (RANK, LAG)', 'Grouping & Aggregations', 'Query Plan Optimization'],
      outcome: 'Answer nuanced business inquiries directly against relational data stores.',
    },
    {
      num: '03',
      label: 'PYTHON',
      subtitle: 'Data Manipulation & EDA',
      icon: <Terminal className="w-5 h-5 text-[#0a6680]" />,
      logos: [<PythonLogo key="py" className="w-5 h-5" />],
      summary:
        'Leverage Python, Pandas, and NumPy for programmatic data processing. Clean messy records, calculate descriptive statistics, and plot visualizations in Seaborn.',
      keySkills: ['Pandas DataFrame Filtering', 'NumPy Vectorized Operations', 'Missing Value Imputation', 'Seaborn & Matplotlib Plots'],
      outcome: 'Automate recurring analytical pipelines and run reproducible exploratory studies.',
    },
    {
      num: '04',
      label: 'POWER BI',
      subtitle: 'BI Dashboards & Stories',
      icon: <LineChart className="w-5 h-5 text-amber-500" />,
      logos: [<PowerBiLogo key="pbi" className="w-5 h-5" />],
      summary:
        'Transform complex tables into interactive business intelligence dashboards. Model star schemas, write custom DAX measures, and publish drill-down reports.',
      keySkills: ['Power Query ETL Shaping', 'Star Schema Star Modeling', 'DAX Measures & Time Intel', 'Executive KPI Dashboards'],
      outcome: 'Deliver executive-ready interactive dashboards with automated drill-downs.',
    },
    {
      num: '05',
      label: 'GEN AI',
      subtitle: 'LLMs, Prompting & RAG',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
      logos: [
        <ChatGptLogo key="gpt" className="w-5 h-5" />,
        <ClaudeLogo key="cld" className="w-5 h-5" />,
        <GeminiLogo key="gem" className="w-5 h-5" />,
      ],
      summary:
        'Incorporate Large Language Models into analytical workflows. Use Retrieval-Augmented Generation (RAG) to query internal documentation and generate grounded summaries.',
      keySkills: ['Prompt Engineering & Schema', 'Vector Embeddings & Search', 'RAG Documentation QA', 'Automated Insight Summaries'],
      outcome: 'Supercharge data research by synthesizing insights from unstructured documents.',
    },
    {
      num: '06',
      label: 'AGENTIC AI',
      subtitle: 'Autonomous Analytics',
      icon: <Bot className="w-5 h-5 text-brand-orange" />,
      logos: [
        <LangChainLogo key="lc" className="w-5 h-5" />,
        <AgenticAiLogo key="ag" className="w-5 h-5" />,
      ],
      summary:
        'Build autonomous AI workflows using LangChain and multi-agent frameworks. Agents autonomously inspect schemas, execute SQL queries, verify calculations, and draft findings.',
      keySkills: ['Multi-Agent Architecture', 'Tool-Calling & SQL Agents', 'Iterative Reflection & QA', 'Automated Report Drafting'],
      outcome: 'Develop self-governing analytics assistants capable of multi-step analysis.',
    },
    {
      num: '07',
      label: 'PROJECTS',
      subtitle: 'Portfolio Artifacts',
      icon: <Layers className="w-5 h-5 text-[#0a6680]" />,
      logos: [<Sparkles key="pr" className="w-5 h-5 text-brand-orange" />],
      summary:
        'Build and document 6 real-world domain projects (sales, banking churn, supply chain, healthcare, financial risk, sentiment) plus 1 comprehensive Enterprise Capstone.',
      keySkills: ['6 Documented Case Studies', '1 Enterprise Capstone', 'GitHub Portfolio Code', 'Executive Presentation Decks'],
      outcome: 'Possess a portfolio of documented code and dashboards to showcase to recruiters.',
    },
    {
      num: '08',
      label: 'CAREER PREP',
      subtitle: 'Interview & GD Circuit',
      icon: <Briefcase className="w-5 h-5 text-brand-blue" />,
      logos: [<Sparkles key="cp" className="w-5 h-5 text-brand-blue" />],
      summary:
        'Sharpen your presentation and problem-solving readiness with our weekend career circuit: technical live coding mocks, SQL whiteboard drills, resume optimization, and GDs.',
      keySkills: ['ATS-Optimized Resumes', 'SQL & Python Live Mocks', 'Portfolio Walkthrough Defense', 'HR & Communication Drills'],
      outcome: 'Defend your analytical decisions articulately and pass rigorous technical interviews.',
    },
  ];

  const current = stages[selectedIdx];

  return (
    <div className="space-y-8">
      {/* Node Path Timeline */}
      <div className="relative">
        {/* Track Line (Desktop) */}
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 via-brand-blue to-brand-orange rounded-full z-0 opacity-40" />

        {/* Nodes Grid / Flex */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 relative z-10">
          {stages.map((stg, i) => {
            const isSelected = selectedIdx === i;
            return (
              <button
                key={stg.num}
                onClick={() => setSelectedIdx(i)}
                className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 group border text-left cursor-pointer ${
                  isSelected
                    ? 'bg-brand-surface-blue border-brand-blue shadow-subtle scale-[1.02]'
                    : 'bg-white border-brand-border hover:border-brand-blue/50 hover:bg-slate-50'
                }`}
              >
                {/* Node Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-transform duration-200 group-hover:scale-105 ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-subtle'
                      : 'bg-brand-surface-light text-brand-navy border border-brand-border'
                  }`}
                >
                  {stg.icon}
                </div>

                <div className="flex items-center gap-1 mb-0.5">
                  <span
                    className={`text-[10px] font-black tracking-widest ${
                      isSelected ? 'text-brand-blue' : 'text-slate-400'
                    }`}
                  >
                    {stg.num}
                  </span>
                </div>

                <h4 className="text-xs font-extrabold text-brand-navy font-heading tracking-tight leading-snug truncate w-full">
                  {stg.label}
                </h4>

                <p className="text-[10px] text-slate-500 font-medium truncate w-full mt-0.5">
                  {stg.subtitle}
                </p>

                {/* Tech Logos Preview */}
                <div className="flex items-center gap-1 mt-2 pt-1.5 border-t border-brand-border/60 w-full justify-center">
                  {stg.logos.slice(0, 2).map((logo, lIdx) => (
                    <span key={lIdx} className="scale-75 inline-block opacity-80 group-hover:opacity-100">
                      {logo}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Compact Detail Panel */}
      <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-brand-border shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-surface-blue to-transparent rounded-bl-full pointer-events-none opacity-60" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-brand-blue text-white tracking-widest uppercase">
                STEP {current.num} OF 08
              </span>
              <span className="text-sm font-bold text-brand-navy font-heading">
                {current.label} • {current.subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {current.summary}
            </p>

            {/* Key Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {current.keySkills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-brand-surface-light border border-brand-border/60 text-xs font-semibold text-brand-navy"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome highlight box */}
          <div className="p-4 sm:p-5 rounded-xl bg-brand-surface-light border border-brand-border/80 lg:w-72 shrink-0 space-y-2">
            <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              Learning Outcome
            </span>
            <p className="text-xs sm:text-sm font-semibold text-brand-navy leading-snug">
              {current.outcome}
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-brand-blue font-bold">
              <span>Next Step</span>
              <button
                onClick={() => setSelectedIdx((selectedIdx + 1) % stages.length)}
                className="inline-flex items-center gap-1 hover:underline cursor-pointer"
              >
                Continue <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

