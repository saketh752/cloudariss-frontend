import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface TechDomainDetail {
  id: string;
  name: string;
  label: string;
  subtext: string;
  skills: string[];
}

const DOMAIN_DETAILS: Record<string, TechDomainDetail> = {
  cloud: {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    label: 'Cloud',
    subtext: 'AWS Multi-Tier VPC, EC2, S3, IAM, CloudFormation',
    skills: ['AWS', 'Linux', 'VPC', 'S3'],
  },
  data: {
    id: 'data',
    name: 'Data & Analytics',
    label: 'Data',
    subtext: 'PostgreSQL DBs, Python EDA, Power BI Dashboards',
    skills: ['Python', 'SQL', 'Power BI', 'Excel'],
  },
  devops: {
    id: 'devops',
    name: 'DevOps & CI/CD',
    label: 'DevOps',
    subtext: 'Docker Containers, Kubernetes Clusters, Jenkins Pipelines',
    skills: ['Docker', 'K8s', 'Jenkins', 'GitHub'],
  },
  ai: {
    id: 'ai',
    name: 'Generative & Agentic AI',
    label: 'AI',
    subtext: 'LLM Prompt Engineering, RAG Pipelines, Autonomous Multi-Agents',
    skills: ['LangChain', 'RAG', 'Agentic AI', 'APIs'],
  },
};

export const HeroCareerVisual: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <div className="relative w-full mx-auto select-none">
      {/* Outer Glow Atmosphere */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 via-brand-cyan/25 to-brand-orange/15 rounded-3xl blur-2xl opacity-60 pointer-events-none -z-10" />

      {/* Main Visual Container */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-white/15 bg-[#06143D] shadow-2xl overflow-hidden group">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#19bce808_1px,transparent_1px),linear-gradient(to_bottom,#19bce808_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-10" />

        {/* Ambient Cyan and Orange Glows */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none z-10" />

        {/* High-Fidelity Reference Artwork */}
        <div className="relative w-full overflow-hidden">
          <img
            src="/brand/hero-career-student-clean.png"
            alt="Cloudariss Student gazing at modern technology skyline with floating Cloud, Data, DevOps, and AI interfaces"
            className="w-full h-auto object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />

          {/* Left subtle gradient blend (matches dark hero section) */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#06143D] to-transparent pointer-events-none" />

          {/* Interactive Floating Domain Hotspots over the artwork */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Cloud Hotspot */}
            <button
              type="button"
              onMouseEnter={() => setActiveDomain('cloud')}
              onMouseLeave={() => setActiveDomain(null)}
              onClick={() => setActiveDomain(activeDomain === 'cloud' ? null : 'cloud')}
              className="pointer-events-auto absolute top-[8%] left-[4%] w-[24%] h-[32%] rounded-xl cursor-pointer focus:outline-none transition-all hover:ring-2 hover:ring-brand-cyan/60 hover:bg-brand-cyan/5"
              aria-label="Cloud Infrastructure Details"
              title="Click or hover to inspect Cloud modules"
            />

            {/* Data Hotspot */}
            <button
              type="button"
              onMouseEnter={() => setActiveDomain('data')}
              onMouseLeave={() => setActiveDomain(null)}
              onClick={() => setActiveDomain(activeDomain === 'data' ? null : 'data')}
              className="pointer-events-auto absolute top-[8%] left-[36%] w-[20%] h-[20%] rounded-xl cursor-pointer focus:outline-none transition-all hover:ring-2 hover:ring-brand-cyan/60 hover:bg-brand-cyan/5"
              aria-label="Data Analytics Details"
              title="Click or hover to inspect Data modules"
            />

            {/* DevOps Hotspot */}
            <button
              type="button"
              onMouseEnter={() => setActiveDomain('devops')}
              onMouseLeave={() => setActiveDomain(null)}
              onClick={() => setActiveDomain(activeDomain === 'devops' ? null : 'devops')}
              className="pointer-events-auto absolute top-[28%] left-[42%] w-[20%] h-[18%] rounded-xl cursor-pointer focus:outline-none transition-all hover:ring-2 hover:ring-brand-cyan/60 hover:bg-brand-cyan/5"
              aria-label="DevOps & CI/CD Details"
              title="Click or hover to inspect DevOps modules"
            />

            {/* AI Hotspot */}
            <button
              type="button"
              onMouseEnter={() => setActiveDomain('ai')}
              onMouseLeave={() => setActiveDomain(null)}
              onClick={() => setActiveDomain(activeDomain === 'ai' ? null : 'ai')}
              className="pointer-events-auto absolute top-[48%] left-[42%] w-[18%] h-[18%] rounded-xl cursor-pointer focus:outline-none transition-all hover:ring-2 hover:ring-brand-cyan/60 hover:bg-brand-cyan/5"
              aria-label="Generative AI Details"
              title="Click or hover to inspect AI modules"
            />
          </div>
        </div>

        {/* Dynamic Tooltip / Hotspot Indicator Bar */}
        <div className="relative z-30 bg-black/40 border-t border-white/10 px-4 py-2.5 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          {activeDomain && DOMAIN_DETAILS[activeDomain] ? (
            <div className="flex items-center gap-2 text-[#19BCE8] animate-in fade-in slide-in-from-bottom-1 duration-150">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0 animate-pulse" />
              <span className="font-bold font-heading">{DOMAIN_DETAILS[activeDomain].name}:</span>
              <span className="text-slate-200 font-mono text-[11px] hidden md:inline">
                {DOMAIN_DETAILS[activeDomain].subtext}
              </span>
              <div className="flex items-center gap-1 ml-1">
                {DOMAIN_DETAILS[activeDomain].skills.map((s) => (
                  <span
                    key={s}
                    className="px-1.5 py-0.5 rounded bg-brand-cyan/20 border border-brand-cyan/40 text-[10px] text-white font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-wide">
                Interactive Career Visual • Hover or tap nodes to explore technical skills
              </span>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="text-[#FF7A00] font-bold">CRPC</span>
            <span>+</span>
            <span className="text-[#19BCE8] font-bold">DAAP</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Live 2026 Batch</span>
          </div>
        </div>
      </div>
    </div>
  );
};
