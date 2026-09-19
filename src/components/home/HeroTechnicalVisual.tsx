import React, { useState } from 'react';
import {
  Cloud,
  Database,
  Bot,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Activity,
} from 'lucide-react';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
} from '@/components/icons/TechLogos';

export const HeroTechnicalVisual: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'cloud' | 'data'>('cloud');

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 via-brand-cyan/15 to-brand-orange/10 rounded-3xl blur-2xl opacity-70 -z-10 pointer-events-none" />

      {/* Main Layered Canvas */}
      <div className="rounded-2xl bg-white/95 border border-brand-border shadow-2xl p-5 sm:p-6 backdrop-blur-sm space-y-5 relative overflow-hidden">
        {/* Subtle grid watermark */}
        <div className="absolute inset-0 bg-[radial-gradient(#0878E8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />

        {/* Header with Track Selector & Live Indicator */}
        <div className="flex items-center justify-between border-b border-brand-border/70 pb-3.5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase">
              Practical Lab Architecture
            </span>
          </div>

          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-brand-border/60">
            <button
              type="button"
              onClick={() => setActiveTrack('cloud')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                activeTrack === 'cloud'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-500 hover:text-brand-navy'
              }`}
            >
              Cloud & DevOps
            </button>
            <button
              type="button"
              onClick={() => setActiveTrack('data')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                activeTrack === 'data'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-500 hover:text-brand-navy'
              }`}
            >
              Data & GenAI
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Canvas */}
        {activeTrack === 'cloud' ? (
          <div className="space-y-4 relative z-10">
            {/* Top Node: AWS VPC & Production Tier */}
            <div className="p-4 rounded-xl bg-brand-surface-blue/50 border border-brand-border/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white shadow-sm border border-brand-border text-brand-blue">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-brand-navy">
                      Three-Tier VPC Architecture
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      AWS ALB · EC2 Cluster · RDS MySQL
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Activity className="w-3 h-3 text-emerald-600" />
                  Healthy
                </span>
              </div>

              {/* Sub-node Tech Pills */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-white border border-brand-border/70 flex items-center gap-2">
                  <AwsLogo className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-navy truncate">AWS Cloud</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-brand-border/70 flex items-center gap-2">
                  <DockerLogo className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-navy truncate">Docker</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-brand-border/70 flex items-center gap-2">
                  <KubernetesLogo className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-navy truncate">K8s Ingress</span>
                </div>
              </div>
            </div>

            {/* Middle Pipeline Flow */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border/70 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-brand-navy flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-orange" />
                  Automated CI/CD Pipeline
                </span>
                <span className="text-[10px] font-mono text-slate-400">Jenkins · Webhooks</span>
              </div>

              <div className="flex items-center justify-between gap-2 text-[11px] font-mono bg-white p-2.5 rounded-lg border border-brand-border">
                <span className="text-slate-600 truncate">git push main → build → test → deploy</span>
                <span className="text-emerald-600 font-bold shrink-0">Pass</span>
              </div>
            </div>

            {/* Bottom Outcome Strip */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-brand-dark-section text-white text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span className="font-bold">CRPC Capstone Deliverable</span>
              </div>
              <span className="text-[10px] text-brand-cyan font-mono">Documented on GitHub</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4 relative z-10">
            {/* Top Node: Analytics & SQL Pipeline */}
            <div className="p-4 rounded-xl bg-brand-orange/5 border border-brand-orange/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white shadow-sm border border-brand-border text-brand-orange">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-brand-navy">
                      Relational Analytics & Query Engine
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      PostgreSQL · CTEs · Window Functions
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Optimized
                </span>
              </div>

              {/* Sub-node Tech Pills */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-white border border-brand-border/70 flex items-center gap-2">
                  <SqlLogo className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-navy truncate">SQL DB</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-brand-border/70 flex items-center gap-2">
                  <PythonLogo className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-navy truncate">Python EDA</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-brand-border/70 flex items-center gap-2">
                  <PowerBiLogo className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold text-brand-navy truncate">Power BI</span>
                </div>
              </div>
            </div>

            {/* Middle Pipeline: Autonomous Agentic Intelligence */}
            <div className="p-3.5 rounded-xl bg-brand-surface-blue/60 border border-brand-border/70 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-brand-navy flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-brand-blue" />
                  Agentic AI Synthesis
                </span>
                <span className="text-[10px] font-mono text-slate-500">RAG · LangChain</span>
              </div>

              <div className="flex items-center justify-between gap-2 text-[11px] font-mono bg-white p-2.5 rounded-lg border border-brand-border">
                <span className="text-slate-600 truncate">Retrieve Data → Compute KPIs → Generate Insights</span>
                <span className="text-brand-blue font-bold shrink-0">Automated</span>
              </div>
            </div>

            {/* Bottom Outcome Strip */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-brand-dark-section text-white text-xs">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-orange" />
                <span className="font-bold">DAAP Capstone Deliverable</span>
              </div>
              <span className="text-[10px] text-brand-orange font-mono">Executive BI Deck</span>
            </div>
          </div>
        )}

        {/* Footer Technical Note */}
        <div className="flex items-center justify-between pt-1 border-t border-brand-border/60 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-brand-blue" />
            100% Live Instructor-Led Labs
          </span>
          <span className="font-semibold text-brand-navy">Personal GitHub Portfolio</span>
        </div>
      </div>
    </div>
  );
};
