import React, { useState } from 'react';
import {
  MapPin,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  AwsLogo,
  KubernetesLogo,
  SqlLogo,
  PowerBiLogo,
  GitHubLogo,
} from '@/components/icons/TechLogos';

interface AboutHeroCanvasProps {
  onExploreCrpc?: () => void;
  onExploreDaap?: () => void;
}

export const AboutHeroCanvas: React.FC<AboutHeroCanvasProps> = ({
  onExploreCrpc,
  onExploreDaap,
}) => {
  const [activeTab, setActiveTab] = useState<'vizag' | 'pedagogy' | 'outcomes'>('vizag');

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#06143D] via-[#091E4E] to-[#06143D] border border-blue-500/30 shadow-2xl shadow-[#06143D]/40 p-5 sm:p-7 text-white overflow-hidden group transition-all duration-300 hover:border-blue-400/50">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0878E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Organization Badge + Live Status Beacon */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-400/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3880] border border-blue-400/30 text-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[11px] font-black uppercase tracking-wider">Cloudariss Technologies</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-cyan-300/90">
            Visakhapatnam, AP
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Engineering Hub</span>
        </div>
      </div>

      {/* Interactive 3-Tab Switcher */}
      <div className="relative z-10 grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#07173E] border border-blue-400/20 my-4">
        <button
          type="button"
          onClick={() => setActiveTab('vizag')}
          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate ${
            activeTab === 'vizag'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Vizag IT Hub</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('pedagogy')}
          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate ${
            activeTab === 'pedagogy'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Globe2 className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Live Classrooms</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('outcomes')}
          className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate ${
            activeTab === 'outcomes'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Verifiable Code</span>
        </button>
      </div>

      {/* Active Tab Showcase Canvas */}
      <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
        {/* TAB 1: VIZAG TECH HUB */}
        {activeTab === 'vizag' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                  Regional Roots &amp; IT Corridors
                </span>
                <span className="text-[10px] font-bold text-brand-orange px-2 py-0.5 rounded bg-brand-orange/10 border border-brand-orange/30">
                  Rushikonda / VSEZ
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Headquartered in Visakhapatnam, Andhra Pradesh. We maintain direct connections to regional technology corridors, hosting virtual company sessions with practicing software engineers and data leads.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Virtual company sessions with regional tech practitioners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Direct exposure to enterprise team workflows and architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Top 5 performers earn formal internship interview rounds</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE PEDAGOGY */}
        {activeTab === 'pedagogy' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  100% Live Interactive Cohorts
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Zero Recorded Videos</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                We believe engineering cannot be learned from passive pre-recorded video catalogues. All sessions are live, interactive, and structured around live coding, immediate debugging, and direct instructor Q&amp;A.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15">
                <span className="font-bold text-white block text-xs">Live Mentorship</span>
                <span className="text-[10px] text-slate-400">Direct architecture guidance</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15">
                <span className="font-bold text-white block text-xs">Weekend Strategy</span>
                <span className="text-[10px] text-slate-400">ATS resume tuning &amp; mocks</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VERIFIED OUTCOMES */}
        {activeTab === 'outcomes' && (
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verifiable GitHub Deliverables
                </span>
                <span className="text-[10px] font-mono text-cyan-300">Public Repos</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Our learners build genuine portfolio assets: multi-tier AWS deployments, automated Jenkins pipelines, PostgreSQL schemas, and executive Power BI dashboards with verifiable commit histories.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <GitHubLogo className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>GitHub repositories with clean Dockerfiles &amp; manifests</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Production-grade documentation &amp; architectural defense decks</span>
              </div>
            </div>
          </div>
        )}

        {/* Quick Tech Logo Spotlight */}
        <div className="grid grid-cols-5 gap-1.5 text-center text-xs pt-1">
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <AwsLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">AWS</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <KubernetesLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">K8s</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <SqlLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">SQL</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <PowerBiLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">Power BI</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <GitHubLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">GitHub</span>
          </div>
        </div>
      </div>

      {/* Footer Bar: Portfolio Deliverable Badge + Program links */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-blue-400/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Technology-Focused · Career-Oriented</span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/courses/crpc"
            onClick={(e) => {
              if (onExploreCrpc) {
                e.preventDefault();
                onExploreCrpc();
              }
            }}
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>CRPC Track</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <span className="text-slate-500">·</span>
          <a
            href="/courses/daap"
            onClick={(e) => {
              if (onExploreDaap) {
                e.preventDefault();
                onExploreDaap();
              }
            }}
            className="inline-flex items-center gap-1 text-xs font-bold text-orange-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>DAAP Track</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

