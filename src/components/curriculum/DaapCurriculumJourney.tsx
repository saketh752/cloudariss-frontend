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
  accent: 'emerald' | 'blue' | 'cyan' | 'amber' | 'purple' | 'orange' | 'navy';
}

export const DaapCurriculumJourney: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const stages: Stage[] = [
    {
      num: '01',
      label: 'EXCEL',
      subtitle: 'Spreadsheet Analytics',
      icon: <FileSpreadsheet className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<FileSpreadsheet key="xls" className="w-5 h-5 text-emerald-600" />],
      summary:
        'Build structured business modeling discipline. Master advanced lookups (XLOOKUP), nested logical formulas, dynamic array formulas, and executive pivot reports.',
      keySkills: ['XLOOKUP & Index-Match', 'Dynamic Pivot Tables', 'Data Cleaning & Validation', 'Commercial KPI Models'],
      outcome: 'Structure complex financial and sales datasets with audit-ready formulas.',
      accent: 'emerald',
    },
    {
      num: '02',
      label: 'SQL',
      subtitle: 'Relational Database Queries',
      icon: <Database className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<SqlLogo key="sql" className="w-5 h-5" />],
      summary:
        'Extract, filter, and aggregate multi-table schemas in PostgreSQL and MySQL. Write subqueries, Common Table Expressions (CTEs), and advanced window functions.',
      keySkills: ['Multi-Table Joins & CTEs', 'Window Functions (RANK, LAG)', 'Grouping & Aggregations', 'Query Plan Optimization'],
      outcome: 'Answer nuanced business inquiries directly against relational data stores.',
      accent: 'blue',
    },
    {
      num: '03',
      label: 'PYTHON',
      subtitle: 'Data Manipulation & EDA',
      icon: <Terminal className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<PythonLogo key="py" className="w-5 h-5" />],
      summary:
        'Leverage Python, Pandas, and NumPy for programmatic data processing. Clean messy records, calculate descriptive statistics, and plot visualizations in Seaborn.',
      keySkills: ['Pandas DataFrame Filtering', 'NumPy Vectorized Operations', 'Missing Value Imputation', 'Seaborn & Matplotlib Plots'],
      outcome: 'Automate recurring analytical pipelines and run reproducible exploratory studies.',
      accent: 'cyan',
    },
    {
      num: '04',
      label: 'POWER BI',
      subtitle: 'BI Dashboards & Stories',
      icon: <LineChart className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<PowerBiLogo key="pbi" className="w-5 h-5" />],
      summary:
        'Transform complex tables into interactive business intelligence dashboards. Model star schemas, write custom DAX measures, and publish drill-down reports.',
      keySkills: ['Power Query ETL Shaping', 'Star Schema Star Modeling', 'DAX Measures & Time Intel', 'Executive KPI Dashboards'],
      outcome: 'Deliver executive-ready interactive dashboards with automated drill-downs.',
      accent: 'amber',
    },
    {
      num: '05',
      label: 'GEN AI',
      subtitle: 'LLMs, Prompting & RAG',
      icon: <Bot className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [
        <ChatGptLogo key="gpt" className="w-5 h-5" />,
        <ClaudeLogo key="cld" className="w-5 h-5" />,
        <GeminiLogo key="gem" className="w-5 h-5" />,
      ],
      summary:
        'Incorporate Large Language Models into analytical workflows. Use Retrieval-Augmented Generation (RAG) to query internal documentation and generate grounded summaries.',
      keySkills: ['Prompt Engineering & Schema', 'Vector Embeddings & Search', 'RAG Documentation QA', 'Automated Insight Summaries'],
      outcome: 'Supercharge data research by synthesizing insights from unstructured documents.',
      accent: 'purple',
    },
    {
      num: '06',
      label: 'AGENTIC AI',
      subtitle: 'Autonomous Analytics',
      icon: <Bot className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [
        <LangChainLogo key="lc" className="w-5 h-5" />,
        <AgenticAiLogo key="ag" className="w-5 h-5" />,
      ],
      summary:
        'Build autonomous AI workflows using LangChain and multi-agent frameworks. Agents autonomously inspect schemas, execute SQL queries, verify calculations, and draft findings.',
      keySkills: ['Multi-Agent Architecture', 'Tool-Calling & SQL Agents', 'Iterative Reflection & QA', 'Automated Report Drafting'],
      outcome: 'Develop self-governing analytics assistants capable of multi-step analysis.',
      accent: 'orange',
    },
    {
      num: '07',
      label: 'PROJECTS',
      subtitle: 'Portfolio Artifacts',
      icon: <Layers className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<Sparkles key="pr" className="w-5 h-5 text-brand-orange" />],
      summary:
        'Build and document 6 real-world domain projects (sales, banking churn, supply chain, healthcare, financial risk, sentiment) plus 1 comprehensive Enterprise Capstone.',
      keySkills: ['6 Documented Case Studies', '1 Enterprise Capstone', 'GitHub Portfolio Code', 'Executive Presentation Decks'],
      outcome: 'Possess a portfolio of documented code and dashboards to showcase to recruiters.',
      accent: 'navy',
    },
    {
      num: '08',
      label: 'CAREER PREP',
      subtitle: 'Interview & GD Circuit',
      icon: <Briefcase className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<Sparkles key="cp" className="w-5 h-5 text-brand-orange" />],
      summary:
        'Sharpen your presentation and problem-solving readiness with our weekend career circuit: technical live coding mocks, SQL whiteboard drills, resume optimization, and GDs.',
      keySkills: ['ATS-Optimized Resumes', 'SQL & Python Live Mocks', 'Portfolio Walkthrough Defense', 'HR & Communication Drills'],
      outcome: 'Defend your analytical decisions articulately and pass rigorous technical interviews.',
      accent: 'orange',
    },
  ];

  const current = stages[selectedIdx];

  return (
    <div className="space-y-8">
      {/* Dynamic Progression Metric Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            DAAP Learning Path Progression:
          </span>
          <span className="text-xs font-extrabold text-brand-navy">
            Stage {selectedIdx + 1} of {stages.length} — {current.label}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-32 sm:w-48 h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-brand-blue to-brand-orange transition-all duration-500 ease-out shadow-xs"
              style={{ width: `${((selectedIdx + 1) / stages.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono font-extrabold text-brand-blue shrink-0">
            {Math.round(((selectedIdx + 1) / stages.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Node Path Timeline */}
      <div className="relative pt-1 pb-2">
        {/* Base Inactive Track Line (Desktop) */}
        <div className="hidden lg:block absolute top-10 left-[6.25%] right-[6.25%] h-1.5 bg-slate-200/80 rounded-full z-0 pointer-events-none" />

        {/* Dynamic Active Filled Progress Line (Grows up to active stage) */}
        <div
          className="hidden lg:block absolute top-10 left-[6.25%] h-1.5 bg-gradient-to-r from-emerald-500 via-brand-blue to-brand-orange rounded-full z-0 transition-all duration-500 ease-out pointer-events-none shadow-[0_0_10px_rgba(8,120,232,0.5)]"
          style={{
            width: `${(selectedIdx / (stages.length - 1)) * 87.5}%`,
          }}
        />

        {/* Nodes Grid / Flex */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 relative z-10">
          {stages.map((stg, i) => {
            const isSelected = selectedIdx === i;
            const isPassed = i < selectedIdx;

            // Domain specific highlight container styles
            const iconContainerStyles = {
              emerald: isSelected
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/25 scale-105'
                : isPassed
                ? 'bg-[#ECFDF5] text-emerald-600 border-emerald-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 group-hover:shadow-sm',
              blue: isSelected
                ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-blue-500/25 scale-105'
                : isPassed
                ? 'bg-[#EEF5FF] text-brand-blue border-brand-blue/30'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-sm',
              cyan: isSelected
                ? 'bg-[#0878E8] text-white border-[#0878E8] shadow-md shadow-blue-500/25 scale-105'
                : isPassed
                ? 'bg-[#F0F9FF] text-[#0878E8] border-cyan-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-[#0878E8] group-hover:text-white group-hover:border-[#0878E8] group-hover:shadow-sm',
              amber: isSelected
                ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/25 scale-105'
                : isPassed
                ? 'bg-[#FFFBEB] text-amber-600 border-amber-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:shadow-sm',
              purple: isSelected
                ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/25 scale-105'
                : isPassed
                ? 'bg-[#FAF5FF] text-purple-600 border-purple-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 group-hover:shadow-sm',
              orange: isSelected
                ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-orange-500/25 scale-105'
                : isPassed
                ? 'bg-[#FFF7ED] text-brand-orange border-orange-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange group-hover:shadow-sm',
              navy: isSelected
                ? 'bg-brand-navy text-white border-brand-navy shadow-md shadow-navy-500/25 scale-105'
                : isPassed
                ? 'bg-[#F8FAFC] text-brand-navy border-slate-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy group-hover:shadow-sm',
            }[stg.accent];

            // 100% Solid Opaque Card Styling (Zero bleed-through of background line)
            const buttonCardStyles = {
              emerald: isSelected
                ? 'bg-[#ECFDF5] border-2 border-emerald-500 shadow-lg shadow-emerald-500/10 scale-[1.03] ring-4 ring-emerald-500/10'
                : 'bg-white border-slate-200/90 hover:border-emerald-500/60 hover:bg-slate-50 shadow-xs',
              blue: isSelected
                ? 'bg-[#EEF5FF] border-2 border-brand-blue shadow-lg shadow-blue-500/10 scale-[1.03] ring-4 ring-blue-500/10'
                : 'bg-white border-slate-200/90 hover:border-brand-blue/60 hover:bg-slate-50 shadow-xs',
              cyan: isSelected
                ? 'bg-[#F0F9FF] border-2 border-[#0878E8] shadow-lg shadow-blue-500/10 scale-[1.03] ring-4 ring-cyan-500/10'
                : 'bg-white border-slate-200/90 hover:border-cyan-400/60 hover:bg-slate-50 shadow-xs',
              amber: isSelected
                ? 'bg-[#FFFBEB] border-2 border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.03] ring-4 ring-amber-500/10'
                : 'bg-white border-slate-200/90 hover:border-amber-500/60 hover:bg-slate-50 shadow-xs',
              purple: isSelected
                ? 'bg-[#FAF5FF] border-2 border-purple-600 shadow-lg shadow-purple-500/10 scale-[1.03] ring-4 ring-purple-500/10'
                : 'bg-white border-slate-200/90 hover:border-purple-500/60 hover:bg-slate-50 shadow-xs',
              orange: isSelected
                ? 'bg-[#FFF7ED] border-2 border-brand-orange shadow-lg shadow-orange-500/10 scale-[1.03] ring-4 ring-orange-500/10'
                : 'bg-white border-slate-200/90 hover:border-brand-orange/60 hover:bg-slate-50 shadow-xs',
              navy: isSelected
                ? 'bg-[#F8FAFC] border-2 border-brand-navy shadow-lg shadow-navy-500/10 scale-[1.03] ring-4 ring-slate-500/10'
                : 'bg-white border-slate-200/90 hover:border-brand-navy/60 hover:bg-slate-50 shadow-xs',
            }[stg.accent];

            const topAccentBar = {
              emerald: 'bg-emerald-500',
              blue: 'bg-brand-blue',
              cyan: 'bg-[#0878E8]',
              amber: 'bg-amber-500',
              purple: 'bg-purple-600',
              orange: 'bg-brand-orange',
              navy: 'bg-brand-navy',
            }[stg.accent];

            return (
              <button
                key={stg.num}
                onClick={() => setSelectedIdx(i)}
                className={`relative flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 group text-left cursor-pointer overflow-hidden select-none ${buttonCardStyles}`}
              >
                {/* Top Accent Strip on Active Card */}
                {isSelected && (
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${topAccentBar}`} />
                )}

                {/* Node Icon Container with clear logo highlight */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 border shadow-sm ${iconContainerStyles}`}
                >
                  {stg.icon}
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={`text-[10px] font-mono font-black tracking-widest ${
                      isSelected
                        ? 'text-brand-blue'
                        : isPassed
                        ? 'text-emerald-600'
                        : 'text-slate-400'
                    }`}
                  >
                    STAGE {stg.num}
                  </span>
                  {isPassed && (
                    <span className="text-[10px] text-emerald-600 font-bold" title="Completed">✓</span>
                  )}
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                  )}
                </div>

                <h4 className="text-xs font-extrabold text-brand-navy font-heading tracking-tight leading-snug truncate w-full">
                  {stg.label}
                </h4>

                <p className="text-[10px] text-slate-500 font-medium truncate w-full mt-0.5">
                  {stg.subtitle}
                </p>

                {/* Tech Logos Preview */}
                <div className="flex items-center gap-1 mt-2 pt-1.5 border-t border-slate-100 w-full justify-center">
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

