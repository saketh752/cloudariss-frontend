import React, { useState } from 'react';
import {
  Cloud,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Server,
  Activity,
} from 'lucide-react';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  ServiceNowLogo,
  PythonLogo,
  GitHubLogo,
  GrafanaLogo,
} from '@/components/icons/TechLogos';

interface CrpcHeroCardProps {
  onOpenCurriculum: () => void;
  onScrollToPathway?: (e: React.MouseEvent) => void;
}

export const CrpcHeroCard: React.FC<CrpcHeroCardProps> = ({
  onOpenCurriculum,
  onScrollToPathway,
}) => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'devops' | 'capstone'>('cloud');

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#06143D] via-[#091E4E] to-[#06143D] border border-blue-500/30 shadow-2xl shadow-[#06143D]/40 p-5 sm:p-7 text-white overflow-hidden group transition-all duration-300 hover:border-blue-400/50">
      {/* Ambient background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0878E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#19BCE8]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Badge + Live Status Indicator */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-400/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3880] border border-blue-400/30 text-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[11px] font-black uppercase tracking-wider">CRPC Cloud Lab</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-cyan-300/90">
            ap-south-1 · Live Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Server className="w-3 h-3 text-cyan-400" />
          <span>AWS + DevOps</span>
        </div>
      </div>

      {/* Interactive Tab Switcher */}
      <div className="relative z-10 flex items-center gap-1.5 p-1 rounded-xl bg-[#07173E] border border-blue-400/20 my-4">
        <button
          type="button"
          onClick={() => setActiveTab('cloud')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'cloud'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Cloud className="w-3.5 h-3.5" />
          <span>Cloud Lab</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('devops')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'devops'
              ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Workflow className="w-3.5 h-3.5" />
          <span>CI/CD Flow</span>
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
          <span>Capstone</span>
        </button>
      </div>

      {/* TAB 1: CLOUD ARCHITECTURE & 3D ARTWORK */}
      {activeTab === 'cloud' && (
        <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
          {/* Visual Showcase: 3D Server Rack with Floating Badges */}
          <div className="relative rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 p-4 flex flex-col sm:flex-row items-center gap-4 overflow-hidden">
            {/* 3D Visual Center */}
            <div className="relative w-36 sm:w-40 shrink-0 aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0878E8]/25 rounded-full blur-xl pointer-events-none" />
              <img
                src="/brand/banners/crpc-3d-hd.png"
                alt="CRPC Cloud Server Infrastructure 3D Illustration"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Live Highlights & Metrics */}
            <div className="flex-1 space-y-2.5 text-left w-full">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  Multi-Tier VPC Architecture
                </span>
                <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  99.98% Uptime
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Production-grade AWS topology with public ALB, EC2 auto-scaling groups, private RDS Multi-AZ, and S3 secure storage.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded-md bg-[#0A2563] text-[10px] font-semibold text-cyan-200 border border-cyan-400/20">
                  Public/Private Subnets
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#0A2563] text-[10px] font-semibold text-cyan-200 border border-cyan-400/20">
                  NAT Gateway
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#0A2563] text-[10px] font-semibold text-cyan-200 border border-cyan-400/20">
                  IAM Least-Privilege
                </span>
              </div>
            </div>
          </div>

          {/* Cloud Capabilities Strip */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0C2866] flex items-center justify-center shrink-0">
                <AwsLogo className="w-4 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">AWS Cloud</span>
                <span className="text-[9px] text-slate-400 truncate block">VPC · EC2 · RDS</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0C2866] flex items-center justify-center shrink-0">
                <PythonLogo className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">Python Core</span>
                <span className="text-[9px] text-slate-400 truncate block">OOP &amp; Scripts</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0C2866] flex items-center justify-center shrink-0">
                <ServiceNowLogo className="w-5 h-2.5" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-white block text-[11px] truncate">ServiceNow</span>
                <span className="text-[9px] text-slate-400 truncate block">ITSM Workflows</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CI/CD DEVOPS PIPELINE */}
      {activeTab === 'devops' && (
        <div className="relative z-10 space-y-2.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-[#0878E8]" />
              Automated CI/CD Delivery Pipeline
            </span>
            <span className="text-[10px] font-mono text-emerald-400">Build #48 Passed</span>
          </div>

          {/* Interactive Pipeline Step Nodes */}
          <div className="space-y-1.5">
            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center text-white shrink-0">
                  <GitHubLogo className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">1. Git Version Control</span>
                  <span className="text-[9px] text-slate-400">Feature branch &amp; automated PR triggers</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#0E3570] flex items-center justify-center shrink-0">
                  <DockerLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">2. Docker Containerization</span>
                  <span className="text-[9px] text-slate-400">Multi-stage build &amp; lightweight image artifact</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#421715] flex items-center justify-center shrink-0">
                  <JenkinsLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">3. Jenkins Automated Pipeline</span>
                  <span className="text-[9px] text-slate-400">Multi-branch test &amp; artifact packaging</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#0D2E68] flex items-center justify-center shrink-0">
                  <KubernetesLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">4. Kubernetes Rolling Rollout</span>
                  <span className="text-[9px] text-slate-400">Multi-pod deployment &amp; self-healing clusters</span>
                </div>
              </div>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            <div className="p-2 rounded-xl bg-[#091D4C]/80 border border-blue-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#2E1605] flex items-center justify-center shrink-0">
                  <GrafanaLogo className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">5. Grafana Real-Time Monitoring</span>
                  <span className="text-[9px] text-slate-400">Telemetry dashboards &amp; active health alerts</span>
                </div>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/20">
                200 OK
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CAPSTONE BLUEPRINT */}
      {activeTab === 'capstone' && (
        <div className="relative z-10 space-y-3 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-2xl bg-[#0A2563]/90 border border-blue-400/30 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                Flagship Capstone Deliverable
              </span>
            </div>
            <h4 className="text-sm font-black text-white leading-snug">
              Enterprise 3-Tier Web Architecture on AWS with Kubernetes &amp; CI/CD
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Build and defend a production-grade infrastructure solution incorporating multi-tier VPC subnets, automated Jenkins CI/CD, and Kubernetes container orchestration.
            </p>
          </div>

          {/* Key Deliverables Checkmarks */}
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>GitHub repository with Dockerfiles &amp; K8s deployment manifests</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Automated Jenkins multi-branch CI/CD build &amp; test pipeline</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Multi-tier AWS VPC with public/private subnets &amp; NAT gateways</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Architecture defense presentation deck for hiring technical panels</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Bar: Portfolio Deliverable Badge + PDF trigger */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-blue-400/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
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
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors cursor-pointer group/link"
          >
            <span>Full Syllabus (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

