import React, { useState } from 'react';
import {
  Database,
  BarChart3,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Bot,
  Activity,
  Workflow,
} from 'lucide-react';
import {
  SqlLogo,
  PowerBiLogo,
  PythonLogo,
  LangChainLogo,
  RagLogo,
  AgenticAiLogo,
  GitHubLogo,
} from '@/components/icons/TechLogos';

interface DaapHeroCardProps {
  onOpenCurriculum: () => void;
  onScrollToPathway?: (e: React.MouseEvent) => void;
}

export const DaapHeroCard: React.FC<DaapHeroCardProps> = ({
  onOpenCurriculum,
  onScrollToPathway,
}) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'agentic' | 'capstone'>('analytics');

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#06143D] via-[#0D1B48] to-[#120B2E] border border-orange-500/30 shadow-2xl shadow-[#06143D]/40 p-5 sm:p-7 text-white overflow-hidden group transition-all duration-300 hover:border-orange-400/50">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF7A00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Badge + Live Status Indicator */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-orange-400/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3D1E06] border border-orange-500/40 text-orange-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[11px] font-black uppercase tracking-wider">DAAP Analytics Engine</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-orange-300/90">
            Active · SQL + GenAI Stack
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Database className="w-3 h-3 text-orange-400" />
          <span>BI + Agentic AI</span>
        </div>
      </div>

      {/* Interactive Tab Switcher */}
      <div className="relative z-10 flex items-center gap-1.5 p-1 rounded-xl bg-[#091535] border border-orange-500/20 my-4">
        <button
          type="button"
          onClick={() => setActiveTab('analytics')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'analytics'
              ? 'bg-[#FF7A00] text-white shadow-md shadow-orange-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Analytics Lab</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('agentic')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'agentic'
              ? 'bg-[#FF7A00] text-white shadow-md shadow-orange-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Agentic AI &amp; RAG</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('capstone')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'capstone'
              ? 'bg-[#FF7A00] text-white shadow-md shadow-orange-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Capstone</span>
        </button>
      </div>

      {/* TAB 1: ANALYTICS & 3D ARTWORK */}
      {activeTab === 'analytics' && (
        <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
          {/* Visual Showcase: 3D Workstation Laptop with Floating Badges */}
          <div className="relative rounded-2xl bg-[#091A44]/80 border border-orange-400/20 p-4 flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
            {/* 3D Visual Center */}
            <div className="relative w-36 sm:w-40 shrink-0 aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF7A00]/25 rounded-full blur-xl pointer-events-none" />
              <img
                src="/brand/banners/daap-3d-hd.png"
                alt="DAAP Analytics & AI Workstation 3D Illustration"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Live Highlights & Metrics */}
            <div className="flex-1 space-y-2.5 text-left w-full">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-orange-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  PostgreSQL Data Warehouse
                </span>
                <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  Execution: 12ms
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Enterprise dimensional models, multi-table JOINs, CTEs, window functions, and interactive Power BI DAX calculations.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded-md bg-[#251433] text-[10px] font-semibold text-orange-200 border border-orange-400/20">
                  Star Schema
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#251433] text-[10px] font-semibold text-orange-200 border border-orange-400/20">
                  Window Functions
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#251433] text-[10px] font-semibold text-orange-200 border border-orange-400/20">
                  DAX Measures
                </span>
              </div>
            </div>
          </div>

          {/* Analytics Capabilities Strip */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#0C1E4A]/60 border border-orange-400/15 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0E2866] flex items-center justify-center shrink-0">
                <SqlLogo className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">PostgreSQL</span>
                <span className="text-[9px] text-slate-400 truncate block">JOINs · CTEs · Queries</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#0C1E4A]/60 border border-orange-400/15 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2E200B] flex items-center justify-center shrink-0">
                <PowerBiLogo className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Power BI</span>
                <span className="text-[9px] text-slate-400 truncate block">DAX · KPI Models</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#0C1E4A]/60 border border-orange-400/15 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0E2866] flex items-center justify-center shrink-0">
                <PythonLogo className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Python EDA</span>
                <span className="text-[9px] text-slate-400 truncate block">Pandas &amp; Seaborn</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: AGENTIC AI & RAG */}
      {activeTab === 'agentic' && (
        <div className="relative z-10 space-y-2.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-orange-300 uppercase tracking-wider flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-orange-400" />
              Autonomous Agentic Intelligence Loop
            </span>
            <span className="text-[10px] font-mono text-emerald-400">RAG Vector Store</span>
          </div>

          {/* Interactive Pipeline Step Nodes */}
          <div className="space-y-1.5">
            <div className="p-2 rounded-xl bg-[#0B1E48]/80 border border-orange-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#0F2F6E] flex items-center justify-center shrink-0">
                  <RagLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">1. Enterprise Data Ingestion</span>
                  <span className="text-[9px] text-slate-400">Private PDFs, Excel spreadsheets &amp; SQL data</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#0B1E48]/80 border border-orange-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#0F3832] flex items-center justify-center shrink-0">
                  <RagLogo className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">2. Vector Search &amp; Embeddings</span>
                  <span className="text-[9px] text-slate-400">Semantic similarity search over knowledge chunks</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#0B1E48]/80 border border-orange-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#09352A] flex items-center justify-center shrink-0">
                  <LangChainLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">3. LangChain Multi-Agent Loop</span>
                  <span className="text-[9px] text-slate-400">Autonomous reasoning, SQL tool execution &amp; loops</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#0B1E48]/80 border border-orange-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#2D1647] flex items-center justify-center shrink-0">
                  <AgenticAiLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">4. Automated Executive Synthesis</span>
                  <span className="text-[9px] text-slate-400">Structured business insights &amp; automated briefs</span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-orange-400 font-bold px-1.5 py-0.5 rounded bg-orange-500/20">
                Autonomous
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CAPSTONE BLUEPRINT */}
      {activeTab === 'capstone' && (
        <div className="relative z-10 space-y-3 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-[#1E113B]/90 border border-orange-400/30 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-orange-400" />
              <span className="text-[11px] font-mono font-bold text-orange-300 uppercase tracking-wider">
                Flagship Capstone Deliverable
              </span>
            </div>
            <h4 className="text-sm font-black text-white leading-snug">
              Enterprise BI Suite &amp; Autonomous Agentic Market Intelligence System
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Design a complete analytics ecosystem taking enterprise transactions into a PostgreSQL data warehouse, modeling interactive Power BI dashboards, and integrating an autonomous LangChain RAG agent.
            </p>
          </div>

          {/* Key Deliverables Checkmarks */}
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Production Power BI (.pbix) executive dashboard with DAX KPI trees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>PostgreSQL relational data warehouse schema &amp; cleaning scripts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Autonomous LangChain RAG agent capable of natural language queries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                <GitHubLogo className="w-3.5 h-3.5 text-orange-400" />
              </div>
              <span>Portfolio walkthrough presentation defending business conclusions</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bar: Portfolio Deliverable Badge + PDF trigger */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-orange-400/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
          <span>Verified Portfolio Deliverable</span>
        </div>

        <div className="flex items-center gap-3">
          {onScrollToPathway && (
            <button
              type="button"
              onClick={onScrollToPathway}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Pathway ↓
            </button>
          )}
          <button
            type="button"
            onClick={onOpenCurriculum}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-300 hover:text-white transition-colors cursor-pointer group/link"
          >
            <span>Full Syllabus (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

