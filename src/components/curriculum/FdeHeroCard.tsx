import React, { useState } from 'react';
import {
  Cpu,
  Bot,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Server,
  Activity,
  Workflow,
} from 'lucide-react';
import {
  PythonLogo,
  DockerLogo,
  KubernetesLogo,
  RagLogo,
  AgenticAiLogo,
  AwsLogo,
} from '@/components/icons/TechLogos';

interface FdeHeroCardProps {
  onOpenCurriculum: () => void;
}

export const FdeHeroCard: React.FC<FdeHeroCardProps> = ({
  onOpenCurriculum,
}) => {
  const [activeTab, setActiveTab] = useState<'deployment' | 'pipeline' | 'capstone'>('deployment');

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#04142D] via-[#061C3D] to-[#020A17] border border-[#00D2FF]/30 shadow-2xl shadow-[#020A17]/60 p-5 sm:p-7 text-white overflow-hidden group transition-all duration-300 hover:border-[#00D2FF]/50">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Badge + Live Status Indicator */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-400/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#00D2FF]">FDE Enterprise Console</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-cyan-300/90 font-mono">
            prod-cluster · Live Deployment
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Server className="w-3 h-3 text-[#00D2FF]" />
          <span>FastAPI + Agents</span>
        </div>
      </div>

      {/* Interactive Tab Switcher */}
      <div className="relative z-10 flex items-center gap-1.5 p-1 rounded-xl bg-[#031124] border border-[#00D2FF]/20 my-4">
        <button
          type="button"
          onClick={() => setActiveTab('deployment')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'deployment'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Telemetry</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('pipeline')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'pipeline'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Workflow className="w-3.5 h-3.5" />
          <span>AI Pipeline</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('capstone')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'capstone'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Flagship</span>
        </button>
      </div>

      {/* TAB 1: TELEMETRY & LIVE METRICS */}
      {activeTab === 'deployment' && (
        <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[#03132B]/85 border border-cyan-400/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                Live Inference Telemetry
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                P99: 18ms
              </span>
            </div>

            {/* Simulated Live Telemetry Feed */}
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Model Serving Gateway:</span>
                <span className="text-emerald-400 font-bold">FastAPI / Uvicorn (v0.110)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Prompt Injection Guard:</span>
                <span className="text-[#00D2FF] font-bold">Active · 0 Violations</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Vector Search Retrieval:</span>
                <span className="text-purple-300 font-bold">FAISS / Cosine Top-K (4)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Container Orchestration:</span>
                <span className="text-sky-300 font-bold">Kubernetes (3 Replicas)</span>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="flex items-center justify-between text-xs pt-1 border-t border-white/10">
              <span className="text-slate-400 font-mono text-[11px]">Evaluation Benchmark:</span>
              <span className="text-emerald-400 font-bold font-mono">Pass (98.4%)</span>
            </div>
          </div>

          {/* Action Link to Syllabus */}
          <button
            type="button"
            onClick={onOpenCurriculum}
            className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-xs font-bold text-slate-200 transition-all flex items-center justify-between group/btn cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
              <span>Full FDE Engineering Curriculum</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* TAB 2: AI PIPELINE EXECUTION */}
      {activeTab === 'pipeline' && (
        <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[#03132B]/85 border border-cyan-400/20 space-y-2.5">
            <span className="text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider block">
              End-to-End Enterprise Flow
            </span>

            {/* Pipeline Step 1 */}
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0878E8]/30 text-[#00D2FF] font-mono font-bold text-[10px] flex items-center justify-center">
                  1
                </span>
                <span className="font-semibold text-white">Client API Ingestion</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">FastAPI + Auth</span>
            </div>

            {/* Pipeline Step 2 */}
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0878E8]/30 text-[#00D2FF] font-mono font-bold text-[10px] flex items-center justify-center">
                  2
                </span>
                <span className="font-semibold text-white">Security & Guardrails Filter</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Injection Defense</span>
            </div>

            {/* Pipeline Step 3 */}
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0878E8]/30 text-[#00D2FF] font-mono font-bold text-[10px] flex items-center justify-center">
                  3
                </span>
                <span className="font-semibold text-white">RAG & Agent Execution Loop</span>
              </div>
              <span className="text-[10px] text-purple-300 font-mono">Vector Top-K + Tools</span>
            </div>

            {/* Pipeline Step 4 */}
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#0878E8]/30 text-[#00D2FF] font-mono font-bold text-[10px] flex items-center justify-center">
                  4
                </span>
                <span className="font-semibold text-white">Containerized Serving & Telemetry</span>
              </div>
              <span className="text-[10px] text-sky-300 font-mono">K8s + Prometheus</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenCurriculum}
            className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 transition-all flex items-center justify-between group/btn cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#00D2FF]" />
              <span>Review Agentic Architecture Modules</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* TAB 3: CAPSTONE FLAGSHIP */}
      {activeTab === 'capstone' && (
        <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[#03132B]/85 border border-cyan-400/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                Cross-Stack Flagship Project
              </span>
              <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                Production-Ready
              </span>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white font-heading">
                Secure AI Application &amp; Deployment Platform
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Build and deploy a production-style AI application with FastAPI, RAG semantic retrieval, autonomous agents, Docker containers, CI/CD, Kubernetes, and enterprise security controls.
              </p>
            </div>

            <div className="space-y-1.5 pt-1 border-t border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Prompt injection defense &amp; data leakage safeguards</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated build-test-deploy CI/CD cloud pipeline</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live observability, rate limiting &amp; model evaluation</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenCurriculum}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#0658A8] text-white text-xs font-bold hover:shadow-lg transition-all flex items-center justify-between group/btn cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-200" />
              <span>Inspect Flagship Project Specifications</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Bottom Footer: Official Stack Strip */}
      <div className="relative z-10 pt-4 mt-4 border-t border-blue-400/20 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <PythonLogo className="w-4 h-4" />
          <RagLogo className="w-4 h-4" />
          <AgenticAiLogo className="w-4 h-4" />
          <DockerLogo className="w-4 h-4" />
          <KubernetesLogo className="w-4 h-4" />
          <AwsLogo className="w-5 h-3.5" />
        </div>
        <span className="font-mono text-[10px] text-cyan-300">FDE 6-Month Track</span>
      </div>
    </div>
  );
};
