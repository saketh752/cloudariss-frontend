import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  MessageCircle,
  Clock,
  Laptop,
  CheckCircle2,
  Sparkles,
  Layers,
  Brain,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import {
  openWhatsApp,
  getCRPCEnquiryMessage,
  getDAAPEnquiryMessage,
} from '@/utils/whatsapp';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  ServiceNowLogo,
  PythonLogo,
  SqlLogo,
  ExcelLogo,
  PowerBiLogo,
  AgenticAiLogo,
  RagLogo,
} from '@/components/icons/TechLogos';
import { SectionAtmosphere } from '@/components/layout/SectionAtmosphere';

export const FlagshipProgramsShowcase: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();
  const [activeTab, setActiveTab] = useState<'crpc' | 'daap'>('crpc');

  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  return (
    <SectionAtmosphere variant="programs">
      <section className="space-y-4 sm:space-y-5 lg:space-y-6" id="flagship-programs">
        {/* Section Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071B63]/80 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Tier-1 Flagship Accelerators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading drop-shadow-sm leading-tight">
            Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Programs</span>
          </h2>
          <p className="text-[#E5EAF3] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Deep, intensive, production-grounded 12-week accelerators engineered to transition learners into capable, verifiable technology practitioners.
          </p>
        </div>

        {/* Program Selector Tabs (For Mobile/Tablet quick toggle) */}
        <div className="flex items-center justify-center gap-2.5">
          <button
            onClick={() => setActiveTab('crpc')}
            className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'crpc'
                ? 'bg-[#0878E8] text-white shadow-md shadow-blue-900/40 ring-2 ring-[#00D2FF] scale-[1.02]'
                : 'bg-[#06143D]/80 hover:bg-[#0A2578] text-slate-300 border border-[#00D2FF]/20'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
            <span>CRPC (Cloud &amp; Data)</span>
          </button>

          <button
            onClick={() => setActiveTab('daap')}
            className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'daap'
                ? 'bg-[#8B5CF6] text-white shadow-md shadow-purple-900/40 ring-2 ring-[#A855F7] scale-[1.02]'
                : 'bg-[#06143D]/80 hover:bg-[#0A2578] text-slate-300 border border-[#A855F7]/20'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
            <span>DAAP (Data &amp; AI)</span>
          </button>
        </div>

        {/* Both Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6 items-stretch">
          {/* ========================================================================= */}
          {/* CRPC FLAGSHIP CARD                                                        */}
          {/* ========================================================================= */}
          <div
            className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#07173B]/95 via-[#04102A]/98 to-[#02091A]/98 backdrop-blur-2xl ${
              activeTab === 'crpc'
                ? 'border-[#00D2FF]/50 shadow-[0_16px_48px_rgba(0,0,0,0.65),0_0_30px_rgba(0,210,255,0.15)] ring-1 ring-[#00D2FF]/30'
                : 'border-[#00D2FF]/20 hover:border-[#00D2FF]/45 shadow-[0_16px_40px_rgba(0,0,0,0.55),0_0_20px_rgba(0,210,255,0.08)]'
            }`}
          >
            <div>
              {/* Full-Bleed Integrated Hero Artwork Layer with Proportionate Height */}
              <div className="relative w-full h-36 sm:h-40 lg:h-44 overflow-hidden">
                <img
                  src="/brand/hero/hero-crpc-card.jpg"
                  alt="CRPC Cloud and Data Architecture Ecosystem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                  }}
                />
                {/* Top soft vignette for badge contrast */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#02091A]/85 via-[#02091A]/25 to-transparent pointer-events-none" />
                {/* Subtle ambient cyan glow at top-right */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#00D2FF]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#030C1F]/80 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider uppercase border border-white/20 shadow-sm">
                      FLAGSHIP #1
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00D2FF] text-[#030B1C] text-[11px] font-mono font-black tracking-wider uppercase shadow-sm">
                      CRPC
                    </span>
                  </div>

                  {/* Cloud / AWS Badge */}
                  <div className="px-2 py-0.5 rounded-lg bg-[#030C1F]/80 backdrop-blur-md border border-[#00D2FF]/30 flex items-center gap-1 shadow-sm">
                    <AwsLogo className="h-3.5 w-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="relative mt-1 px-5 sm:px-6 pb-4 sm:pb-5 space-y-3 z-10">
                {/* Eyebrow & Title */}
                <div className="space-y-1">
                  <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF]">
                    SKILLS FOR TODAY, OPPORTUNITIES FOR TOMORROW.
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading tracking-tight text-white leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Cloud &amp; Data</span>{' '}
                    <span className="text-white">Career Accelerator</span>
                  </h3>
                </div>

                {/* Metadata Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#071A42]/80 border border-[#00D2FF]/20 text-xs font-semibold text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>{crpc.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#071A42]/80 border border-[#00D2FF]/20 text-xs font-semibold text-slate-200">
                    <Laptop className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>{crpc.format}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#071A42]/80 border border-[#00D2FF]/20 text-xs font-semibold text-slate-200">
                    <Layers className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>{crpc.modulesCount}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[14.5px] text-[#CBD5E1] leading-relaxed font-normal">
                  {crpc.description}
                </p>

                {/* Primary Tech Logos */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    CORE TECHNOLOGIES:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071A42]/90 border border-[#00D2FF]/20 text-xs font-bold text-slate-200">
                      <AwsLogo className="w-3.5 h-3.5" /> AWS Cloud
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071A42]/90 border border-[#00D2FF]/20 text-xs font-bold text-slate-200">
                      <DockerLogo className="w-3.5 h-3.5" /> Docker
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071A42]/90 border border-[#00D2FF]/20 text-xs font-bold text-slate-200">
                      <KubernetesLogo className="w-3.5 h-3.5" /> Kubernetes
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071A42]/90 border border-[#00D2FF]/20 text-xs font-bold text-slate-200">
                      <JenkinsLogo className="w-3.5 h-3.5" /> Jenkins
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071A42]/90 border border-[#00D2FF]/20 text-xs font-bold text-slate-200">
                      <PythonLogo className="w-3.5 h-3.5" /> Python
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#071A42]/90 border border-[#00D2FF]/20 text-xs font-bold text-slate-200">
                      <ServiceNowLogo className="w-3.5 h-3.5" /> ServiceNow
                    </span>
                  </div>
                </div>

                {/* Approved Features Checklist */}
                <div className="space-y-1.5 pt-1.5 border-t border-white/10">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    PROGRAM HIGHLIGHTS &amp; SUPPORT:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {crpc.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 sm:p-5 bg-[#02091A]/95 border-t border-[#00D2FF]/15 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link
                  to="/courses/crpc"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0878E8] via-[#00A8FF] to-[#0878E8] hover:from-[#00A8FF] hover:to-[#0878E8] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_16px_rgba(8,120,232,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_24px_rgba(0,168,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Explore CRPC Track</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openCurriculum('crpc')}
                  className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#071A42]/90 hover:bg-[#0B2A6B] border border-[#00D2FF]/40 hover:border-[#00D2FF] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer group"
                >
                  <Download className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Download Syllabus</span>
                </button>
              </div>

              <button
                onClick={() => openWhatsApp(getCRPCEnquiryMessage())}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white font-semibold text-xs sm:text-sm backdrop-blur-md shadow-sm transition-all group cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DAAP FLAGSHIP CARD                                                        */}
          {/* ========================================================================= */}
          <div
            className={`group relative rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#180C33]/95 via-[#100726]/98 to-[#090317]/98 backdrop-blur-2xl ${
              activeTab === 'daap'
                ? 'border-[#A855F7]/50 shadow-[0_16px_48px_rgba(0,0,0,0.65),0_0_30px_rgba(168,85,247,0.18)] ring-1 ring-[#A855F7]/30'
                : 'border-[#A855F7]/20 hover:border-[#A855F7]/45 shadow-[0_16px_40px_rgba(0,0,0,0.55),0_0_20px_rgba(168,85,247,0.08)]'
            }`}
          >
            <div>
              {/* Full-Bleed Integrated Hero Artwork Layer with Proportionate Height */}
              <div className="relative w-full h-36 sm:h-40 lg:h-44 overflow-hidden">
                <img
                  src="/brand/hero/hero-daap-card.jpg"
                  alt="DAAP Data Analytics and AI Workflows Ecosystem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                  }}
                />
                {/* Top soft vignette for badge contrast */}
                <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#090317]/85 via-[#090317]/25 to-transparent pointer-events-none" />
                {/* Subtle ambient purple glow at top-right */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#A855F7]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0A0418]/80 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider uppercase border border-white/20 shadow-sm">
                      FLAGSHIP #2
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#A855F7] text-white text-[11px] font-mono font-black tracking-wider uppercase shadow-sm">
                      DAAP
                    </span>
                  </div>

                  {/* Brain / AI Badge */}
                  <div className="px-2 py-0.5 rounded-lg bg-[#0A0418]/80 backdrop-blur-md border border-[#A855F7]/30 flex items-center gap-1 shadow-sm text-[#C084FC]">
                    <Brain className="w-3.5 h-3.5 text-[#C084FC]" />
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="relative mt-1 px-5 sm:px-6 pb-4 sm:pb-5 space-y-3 z-10">
                {/* Eyebrow & Title */}
                <div className="space-y-1">
                  <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#C084FC]">
                    FROM DATA TO OPPORTUNITIES - AI &amp; AGENTIC ANALYTICS
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading tracking-tight text-white leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#E879F9]">Data Analyst</span>{' '}
                    <span className="text-white">Accelerator Program</span>
                  </h3>
                </div>

                {/* Metadata Chips */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#200F42]/80 border border-[#A855F7]/25 text-xs font-semibold text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#C084FC]" />
                    <span>{daap.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#200F42]/80 border border-[#A855F7]/25 text-xs font-semibold text-slate-200">
                    <Laptop className="w-3.5 h-3.5 text-[#C084FC]" />
                    <span>{daap.format}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#200F42]/80 border border-[#A855F7]/25 text-xs font-semibold text-slate-200">
                    <Layers className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>{daap.modulesCount}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[14.5px] text-[#CBD5E1] leading-relaxed font-normal">
                  {daap.description}
                </p>

                {/* Primary Tech Logos */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    CORE TECHNOLOGIES:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#200F42]/90 border border-[#A855F7]/25 text-xs font-bold text-slate-200">
                      <PowerBiLogo className="w-3.5 h-3.5" /> Power BI &amp; DAX
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#200F42]/90 border border-[#A855F7]/25 text-xs font-bold text-slate-200">
                      <SqlLogo className="w-3.5 h-3.5" /> SQL (Postgres)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#200F42]/90 border border-[#A855F7]/25 text-xs font-bold text-slate-200">
                      <ExcelLogo className="w-3.5 h-3.5" /> Excel &amp; Modeling
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#200F42]/90 border border-[#A855F7]/25 text-xs font-bold text-slate-200">
                      <PythonLogo className="w-3.5 h-3.5" /> Python &amp; Pandas
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#200F42]/90 border border-[#A855F7]/25 text-xs font-bold text-slate-200">
                      <RagLogo className="w-3.5 h-3.5" /> Generative AI &amp; RAG
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#200F42]/90 border border-[#A855F7]/25 text-xs font-bold text-slate-200">
                      <AgenticAiLogo className="w-3.5 h-3.5" /> Agentic AI
                    </span>
                  </div>
                </div>

                {/* Approved Features Checklist */}
                <div className="space-y-1.5 pt-1.5 border-t border-white/10">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    PROGRAM HIGHLIGHTS &amp; SUPPORT:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {daap.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 sm:p-5 bg-[#090317]/95 border-t border-[#A855F7]/15 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link
                  to="/courses/daap"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white font-extrabold text-xs sm:text-sm shadow-[0_0_16px_rgba(139,92,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_24px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Explore DAAP Track</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openCurriculum('daap')}
                  className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#200F42]/90 hover:bg-[#301663] border border-[#A855F7]/40 hover:border-[#A855F7] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer group"
                >
                  <Download className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span>Download Syllabus</span>
                </button>
              </div>

              <button
                onClick={() => openWhatsApp(getDAAPEnquiryMessage())}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white font-semibold text-xs sm:text-sm backdrop-blur-md shadow-sm transition-all group cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </SectionAtmosphere>
  );
};
