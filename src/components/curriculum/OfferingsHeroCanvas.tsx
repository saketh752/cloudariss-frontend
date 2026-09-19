import React, { useState } from 'react';
import {
  Terminal,
  Layers,
  Cpu,
  Briefcase,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  AwsLogo,
  KubernetesLogo,
  JenkinsLogo,
  SqlLogo,
  PowerBiLogo,
  LangChainLogo,
} from '@/components/icons/TechLogos';

interface OfferingsHeroCanvasProps {
  onOpenCurriculum?: (track: 'crpc' | 'daap') => void;
}

export const OfferingsHeroCanvas: React.FC<OfferingsHeroCanvasProps> = ({
  onOpenCurriculum,
}) => {
  const [activePillar, setActivePillar] = useState<'learning' | 'projects' | 'tech' | 'career'>('learning');

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#06143D] via-[#091E4E] to-[#06143D] border border-blue-500/30 shadow-2xl shadow-[#06143D]/40 p-5 sm:p-7 text-white overflow-hidden group transition-all duration-300 hover:border-blue-400/50">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0878E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Badge + Live Status Beacon */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-400/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3880] border border-blue-400/30 text-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[11px] font-black uppercase tracking-wider">Enablement Engine</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-cyan-300/90">
            4 Core Foundations
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Outcome-Driven</span>
        </div>
      </div>

      {/* Interactive 4-Pillar Mode Switcher */}
      <div className="relative z-10 grid grid-cols-4 gap-1 p-1 rounded-xl bg-[#07173E] border border-blue-400/20 my-4">
        <button
          type="button"
          onClick={() => setActivePillar('learning')}
          className={`py-1.5 px-1 sm:px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
            activePillar === 'learning'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Terminal className="w-3 h-3 shrink-0" />
          <span className="truncate">Learning</span>
        </button>

        <button
          type="button"
          onClick={() => setActivePillar('projects')}
          className={`py-1.5 px-1 sm:px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
            activePillar === 'projects'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-3 h-3 shrink-0" />
          <span className="truncate">Projects</span>
        </button>

        <button
          type="button"
          onClick={() => setActivePillar('tech')}
          className={`py-1.5 px-1 sm:px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
            activePillar === 'tech'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Cpu className="w-3 h-3 shrink-0" />
          <span className="truncate">Stacks</span>
        </button>

        <button
          type="button"
          onClick={() => setActivePillar('career')}
          className={`py-1.5 px-1 sm:px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer truncate ${
            activePillar === 'career'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Briefcase className="w-3 h-3 shrink-0" />
          <span className="truncate">Career</span>
        </button>
      </div>

      {/* PILLAR 1: STRUCTURED TECHNICAL LEARNING */}
      {activePillar === 'learning' && (
        <div className="relative z-10 space-y-3 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Live Cohort Instruction
              </span>
              <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                100% Live Online
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Rigorous instructor-led modules grounding system architecture, coding patterns, and hands-on drills from day one. Zero passive recorded slide decks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15">
              <span className="font-bold text-white block text-xs">Architectural Grounding</span>
              <span className="text-[10px] text-slate-400">Core theory before code</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15">
              <span className="font-bold text-white block text-xs">Daily Live Q&amp;A</span>
              <span className="text-[10px] text-slate-400">Direct mentor code reviews</span>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 2: HANDS-ON PROJECTS */}
      {activePillar === 'projects' && (
        <div className="relative z-10 space-y-3 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-orange" />
                Production-Grade Capstones
              </span>
              <span className="text-[10px] font-mono text-cyan-300">GitHub Verified</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Learners build and defend live deployments: 3-tier AWS VPC microservices, PostgreSQL relational warehouses, and autonomous LangChain RAG reasoning engines.
            </p>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <span className="font-medium text-xs text-white">CRPC: 3-Tier Web Architecture on AWS &amp; K8s</span>
              <span className="text-[10px] font-mono text-cyan-300">Terraform / CI/CD</span>
            </div>
            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <span className="font-medium text-xs text-white">DAAP: Enterprise Power BI Suite + LangChain RAG</span>
              <span className="text-[10px] font-mono text-orange-300">DAX / Vector DB</span>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 3: MODERN TECHNOLOGY STACKS */}
      {activePillar === 'tech' && (
        <div className="relative z-10 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              Production Engineering Ecosystem
            </span>
            <span className="text-[10px] font-mono text-slate-400">Zero Obsolete Tools</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center gap-2">
              <AwsLogo className="w-4 h-4 shrink-0" />
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">AWS Cloud</span>
                <span className="text-[9px] text-slate-400 truncate block">VPC · EC2 · S3</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center gap-2">
              <KubernetesLogo className="w-4 h-4 shrink-0" />
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Kubernetes</span>
                <span className="text-[9px] text-slate-400 truncate block">Multi-Pod Clust</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center gap-2">
              <JenkinsLogo className="w-4 h-4 shrink-0" />
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Jenkins</span>
                <span className="text-[9px] text-slate-400 truncate block">CI/CD Pipeline</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center gap-2">
              <SqlLogo className="w-4 h-4 shrink-0" />
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">PostgreSQL</span>
                <span className="text-[9px] text-slate-400 truncate block">SQL Schemas</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center gap-2">
              <PowerBiLogo className="w-4 h-4 shrink-0" />
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Power BI</span>
                <span className="text-[9px] text-slate-400 truncate block">DAX Models</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center gap-2">
              <LangChainLogo className="w-4 h-4 shrink-0" />
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Agentic AI</span>
                <span className="text-[9px] text-slate-400 truncate block">LangChain RAG</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 4: CAREER ENABLEMENT */}
      {activePillar === 'career' && (
        <div className="relative z-10 space-y-3 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                Weekend Career Strategy Circuit
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Every Weekend</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Career preparation runs in parallel with technical coursework. Saturdays focus on ATS resume tuning and LinkedIn outreach; Sundays run live technical and behavioral mock interviews.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15">
              <span className="font-bold text-white block text-xs">Saturday ATS Tuning</span>
              <span className="text-[10px] text-slate-400">Keyword-aligned impact metrics</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15">
              <span className="font-bold text-white block text-xs">Sunday Mock Drills</span>
              <span className="text-[10px] text-slate-400">Live whiteboard architecture defense</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bar: Portfolio Deliverable Badge + PDF trigger */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-blue-400/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Zero Passive Videos · 100% Active Building</span>
        </div>

        {onOpenCurriculum && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenCurriculum('crpc')}
              className="text-xs font-bold text-cyan-300 hover:text-white transition-colors cursor-pointer"
            >
              CRPC PDF
            </button>
            <span className="text-slate-500">·</span>
            <button
              type="button"
              onClick={() => onOpenCurriculum('daap')}
              className="text-xs font-bold text-orange-300 hover:text-white transition-colors cursor-pointer"
            >
              DAAP PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

