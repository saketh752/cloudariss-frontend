import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  MessageCircle,
  CheckCircle2,
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

  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  return (
    <SectionAtmosphere variant="programs">
      <section className="space-y-8 sm:space-y-10" id="flagship-programs">
        {/* Section Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Programs</span>
          </h2>
          <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Deep, production-grounded 12-week career accelerators engineered to transition learners into capable, verifiable technology practitioners.
          </p>
        </div>

        {/* Editorial Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* ========================================================================= */}
          {/* 1. CRPC EDITORIAL SHOWCASE                                                */}
          {/* ========================================================================= */}
          <article className="group relative rounded-3xl bg-[#030C20]/80 border border-white/10 hover:border-[#00D2FF]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between backdrop-blur-xl">
            {/* Visual Header Artwork Layer */}
            <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden bg-[#020817]">
              <img
                src="/brand/hero/hero-crpc-card.jpg"
                alt="CRPC Cloud & Data Architecture Ecosystem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Natural feather gradient blending into editorial body */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030C20] via-[#030C20]/60 to-transparent pointer-events-none" />
              
              {/* Top Accent Indicators */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#02091A]/85 backdrop-blur-md text-[#00D2FF] font-mono text-xs font-bold tracking-wider uppercase border border-[#00D2FF]/30">
                  CRPC · 12 WEEKS
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-300 bg-[#02091A]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {crpc.format}
                </span>
              </div>
            </div>

            {/* Editorial Content Canvas */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 100% Placement Assistance Statement */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00D2FF] tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse shrink-0" />
                  <span className="font-heading uppercase tracking-wider text-[#00D2FF]">100% Placement Assistance Included</span>
                </div>

                {/* Program Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white leading-tight">
                    Cloud &amp; Data Career Accelerator
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    {crpc.modulesCount} · Production Cloud Architecture · Hands-on Capstone
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {crpc.description}
                </p>

                {/* Technology Logos (Floating Naturally without boxes) */}
                <div className="pt-2 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Technologies Mastered
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-1 text-xs text-slate-200">
                    <div className="flex items-center gap-1.5 font-medium">
                      <AwsLogo className="w-4 h-4 shrink-0" />
                      <span>AWS Cloud</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <DockerLogo className="w-4 h-4 shrink-0" />
                      <span>Docker</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <KubernetesLogo className="w-4 h-4 shrink-0" />
                      <span>Kubernetes</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <JenkinsLogo className="w-4 h-4 shrink-0" />
                      <span>Jenkins</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <PythonLogo className="w-4 h-4 shrink-0" />
                      <span>Python</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <ServiceNowLogo className="w-4 h-4 shrink-0" />
                      <span>ServiceNow</span>
                    </div>
                  </div>
                </div>

                {/* Program Highlights with subtle dividers */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Career Curriculum Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-300">
                    {crpc.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    to="/courses/crpc"
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-[#00D2FF] via-[#0878E8] to-[#0052CC] hover:from-[#00E5FF] hover:via-[#0A84FF] hover:to-[#0060E6] text-white font-black text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all duration-300 cursor-pointer group"
                  >
                    <span>Explore CRPC Track</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openCurriculum('crpc')}
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#00D2FF]" />
                    <span>Download Syllabus</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => openWhatsApp(getCRPCEnquiryMessage())}
                  className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] text-[#E8FFF0] hover:text-white font-semibold text-xs transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* 2. DAAP EDITORIAL SHOWCASE                                                */}
          {/* ========================================================================= */}
          <article className="group relative rounded-3xl bg-[#090518]/80 border border-white/10 hover:border-[#A855F7]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between backdrop-blur-xl">
            {/* Visual Header Artwork Layer */}
            <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden bg-[#070214]">
              <img
                src="/brand/hero/hero-daap-card.jpg"
                alt="DAAP Data Analytics & AI Workflows Ecosystem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Natural feather gradient blending into editorial body */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090518] via-[#090518]/60 to-transparent pointer-events-none" />
              
              {/* Top Accent Indicators */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#090317]/85 backdrop-blur-md text-[#C084FC] font-mono text-xs font-bold tracking-wider uppercase border border-[#A855F7]/30">
                  DAAP · 12 WEEKS
                </span>
                <span className="text-[11px] font-mono font-medium text-slate-300 bg-[#090317]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {daap.format}
                </span>
              </div>
            </div>

            {/* Editorial Content Canvas */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 100% Placement Assistance Statement */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C084FC] tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC] animate-pulse shrink-0" />
                  <span className="font-heading uppercase tracking-wider text-[#C084FC]">100% Placement Assistance Included</span>
                </div>

                {/* Program Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white leading-tight">
                    Data Analyst Accelerator Program
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                    {daap.modulesCount} · AI &amp; Agentic Analytics · Portfolio Capstone
                  </p>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {daap.description}
                </p>

                {/* Technology Logos (Floating Naturally without boxes) */}
                <div className="pt-2 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Technologies Mastered
                  </div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-1 text-xs text-slate-200">
                    <div className="flex items-center gap-1.5 font-medium">
                      <PowerBiLogo className="w-4 h-4 shrink-0" />
                      <span>Power BI &amp; DAX</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <SqlLogo className="w-4 h-4 shrink-0" />
                      <span>SQL (Postgres)</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <PythonLogo className="w-4 h-4 shrink-0" />
                      <span>Python &amp; Pandas</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <ExcelLogo className="w-4 h-4 shrink-0" />
                      <span>Excel Modeling</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <RagLogo className="w-4 h-4 shrink-0" />
                      <span>GenAI &amp; RAG</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <AgenticAiLogo className="w-4 h-4 shrink-0" />
                      <span>Agentic AI</span>
                    </div>
                  </div>
                </div>

                {/* Program Highlights with subtle dividers */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Career Curriculum Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-300">
                    {daap.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    to="/courses/daap"
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#7C3AED] hover:from-[#E879F9] hover:via-[#C084FC] hover:to-[#9333EA] text-white font-black text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer group"
                  >
                    <span>Explore DAAP Track</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openCurriculum('daap')}
                    className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#C084FC]" />
                    <span>Download Syllabus</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => openWhatsApp(getDAAPEnquiryMessage())}
                  className="w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 hover:border-[#25D366] text-[#E8FFF0] hover:text-white font-semibold text-xs transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </SectionAtmosphere>
  );
};
