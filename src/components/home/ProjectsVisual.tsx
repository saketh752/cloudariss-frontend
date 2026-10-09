import React, { useState } from 'react';
import {
  BarChart3,
  Database,
  Bot,
  Terminal,
  LineChart,
  Layers,
  Cloud,
  Wrench,
  CheckCircle2,
  Plus,
  Minus,
  Cpu,
} from 'lucide-react';
import {
  PythonLogo,
  SqlLogo,
  PostgreSqlLogo,
  PowerBiLogo,
  ExcelLogo,
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  GrafanaLogo,
  RagLogo,
  AgenticAiLogo,
  ChatGptLogo,
  LangChainLogo,
} from '@/components/icons/TechLogos';
import { DAAP_PROJECTS, CRPC_PROJECTS, FDE_PROJECTS, ProjectData } from '@/data/projectsData';

/* ========================================================================= */
/* PROJECTS VISUAL — OPEN ENGINEERING CASE STUDIES                           */
/* Replaces boxed card grid with open editorial case-study ledger            */
/* Reflects official Cloudariss Project Route Map:                           */
/* DAAP: exactly 5 projects | CRPC: exactly 4 projects (9 projects total)    */
/* ========================================================================= */

interface ProjectTile extends ProjectData {
  icon: React.ReactNode;
  logos: React.ReactNode[];
}

export const ProjectsVisual: React.FC<{ initialTab?: 'daap' | 'crpc' | 'fde' }> = ({ initialTab = 'daap' }) => {
  const [activeTab, setActiveTab] = useState<'daap' | 'crpc' | 'fde'>(initialTab);

  const daapProjects: ProjectTile[] = [
    {
      ...DAAP_PROJECTS[0],
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      logos: [<ExcelLogo key="ex" className="w-5 h-5" />],
    },
    {
      ...DAAP_PROJECTS[1],
      icon: <Database className="w-5 h-5 text-[#19BCE8]" />,
      logos: [
        <SqlLogo key="sql" className="w-5 h-5" />,
        <PostgreSqlLogo key="pg" className="w-5 h-5" />,
      ],
    },
    {
      ...DAAP_PROJECTS[2],
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      logos: [<PythonLogo key="py" className="w-5 h-5" />],
    },
    {
      ...DAAP_PROJECTS[3],
      icon: <LineChart className="w-5 h-5 text-[#EAA600]" />,
      logos: [<PowerBiLogo key="pbi" className="w-5 h-5" />],
    },
    {
      ...DAAP_PROJECTS[4],
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      logos: [
        <ExcelLogo key="ex" className="w-5 h-5" />,
        <SqlLogo key="sql" className="w-5 h-5" />,
        <PythonLogo key="py" className="w-5 h-5" />,
        <PowerBiLogo key="pbi" className="w-5 h-5" />,
      ],
    },
  ];

  const crpcProjects: ProjectTile[] = [
    {
      ...CRPC_PROJECTS[0],
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      logos: [
        <RagLogo key="rag" className="w-5 h-5" />,
        <LangChainLogo key="lc" className="w-5 h-5" />,
        <PythonLogo key="py" className="w-5 h-5" />,
      ],
    },
    {
      ...CRPC_PROJECTS[1],
      icon: <Wrench className="w-5 h-5 text-[#19BCE8]" />,
      logos: [
        <AgenticAiLogo key="ag" className="w-5 h-5" />,
        <SqlLogo key="sql" className="w-5 h-5" />,
        <PythonLogo key="py" className="w-5 h-5" />,
      ],
    },
    {
      ...CRPC_PROJECTS[2],
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      logos: [
        <AgenticAiLogo key="ag" className="w-5 h-5" />,
        <LangChainLogo key="lc" className="w-5 h-5" />,
        <ChatGptLogo key="cg" className="w-5 h-5" />,
      ],
    },
    {
      ...CRPC_PROJECTS[3],
      icon: <Cloud className="w-5 h-5 text-[#FF9900]" />,
      logos: [
        <AwsLogo key="aws" className="w-6 h-4" />,
        <DockerLogo key="doc" className="w-5 h-5" />,
        <KubernetesLogo key="k8s" className="w-5 h-5" />,
        <GrafanaLogo key="grf" className="w-5 h-5" />,
      ],
    },
  ];

  const fdeProjects: ProjectTile[] = [
    {
      ...FDE_PROJECTS[0],
      icon: <Cpu className="w-5 h-5 text-[#00D2FF]" />,
      logos: [
        <PythonLogo key="py" className="w-5 h-5" />,
        <RagLogo key="rag" className="w-5 h-5" />,
        <AgenticAiLogo key="ag" className="w-5 h-5" />,
        <DockerLogo key="doc" className="w-5 h-5" />,
        <KubernetesLogo key="k8s" className="w-5 h-5" />,
      ],
    },
  ];

  const [openProjectTag, setOpenProjectTag] = useState<string | null>('01');

  const projects =
    activeTab === 'daap' ? daapProjects : activeTab === 'crpc' ? crpcProjects : fdeProjects;

  return (
    <div className="space-y-6 sm:space-y-10 lg:space-y-12">
      {/* Program Selector Tabs — Clean Editorial Tab Bar */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex-wrap justify-center gap-1">
          <button
            type="button"
            onClick={() => {
              setActiveTab('daap');
              setOpenProjectTag('01');
            }}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer min-h-[38px] ${
              activeTab === 'daap'
                ? 'bg-[#0878E8] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DAAP Projects ({daapProjects.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('crpc');
              setOpenProjectTag('01');
            }}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer min-h-[38px] ${
              activeTab === 'crpc'
                ? 'bg-[#0878E8] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CRPC Projects ({crpcProjects.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('fde');
              setOpenProjectTag('01');
            }}
            className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer min-h-[38px] ${
              activeTab === 'fde'
                ? 'bg-[#0878E8] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            FDE AI Engineer ({fdeProjects.length})
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* MOBILE ACCORDION VIEW (< md) — Drastically reduces scroll depth      */}
      {/* =================================================================== */}
      <div className="md:hidden space-y-2.5">
        {projects.map((proj) => {
          const isOpen = openProjectTag === proj.tag;
          return (
            <div
              key={proj.title}
              className={`rounded-xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white/[0.04] border-[#00D2FF]/40 shadow-[0_0_16px_rgba(0,210,255,0.12)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Accordion Header Row */}
              <button
                type="button"
                onClick={() => setOpenProjectTag(isOpen ? null : proj.tag)}
                className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer select-none min-h-[48px]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 pr-2">
                  <span className="font-mono text-sm font-black text-[#00D2FF]">
                    {proj.tag}
                  </span>
                  <div className="h-3 w-px bg-white/20" />
                  <span className="font-heading font-black text-xs sm:text-sm text-white leading-tight">
                    {proj.title}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
                  {isOpen ? <Minus className="w-3.5 h-3.5 text-[#00D2FF]" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              {/* Accordion Expanded Content */}
              {isOpen && (
                <div className="px-3.5 pb-3.5 pt-1 space-y-3 border-t border-white/10 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pt-1 gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {proj.levelStage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {proj.logos.map((logo, lIdx) => (
                        <span key={lIdx} className="scale-90">
                          {logo}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#DCE5F2]/85 leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  {/* Production Focus */}
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-slate-300 uppercase block tracking-wider">
                      Production Focus
                    </span>
                    <p className="text-[11px] text-slate-300/90 leading-relaxed">
                      {proj.productionFocus}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block">
                      Verified Deliverables
                    </span>
                    <div className="space-y-1.5">
                      {proj.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =================================================================== */}
      {/* DESKTOP & TABLET OPEN CASE STUDIES GRID (hidden md:grid)            */}
      {/* =================================================================== */}
      <div className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="group relative border-t border-white/10 pt-8 flex flex-col justify-between space-y-6"
          >
            {/* Subtle cinematic dark readability fade — minimal dark atmospheric wash */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -inset-y-4 pointer-events-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 90% 85% at 50% 50%, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0.18) 60%, transparent 100%)',
              }}
            />
            <div className="space-y-4">
              {/* Meta Row: Case Number + Category + Level / Stage + Floating Tech Logos */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-xl sm:text-2xl font-black text-white/20 group-hover:text-[#00D2FF]/50 transition-colors">
                    {proj.tag}
                  </span>
                  <div className="h-3 w-px bg-white/20" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
                    {proj.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {proj.levelStage}
                  </span>
                </div>

                {/* Floating Tech Logos (No Pill Boxes) */}
                <div className="flex items-center gap-3">
                  {proj.logos.map((logo, lIdx) => (
                    <span key={lIdx} className="hover:scale-110 transition-transform">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Title */}
              <h4 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight leading-snug group-hover:text-[#00D2FF] transition-colors">
                {proj.title}
              </h4>

              {/* Narrative Description */}
              <p className="text-sm text-[#DCE5F2]/85 leading-relaxed font-normal">
                {proj.description}
              </p>

              {/* Production Focus Callout */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-300 uppercase block tracking-wider">
                  Production Engineering Focus
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {proj.productionFocus}
                </p>
              </div>
            </div>

            {/* Deliverables Checklist (Clean Editorial Ledger) */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                Verified Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                {proj.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
