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
      <section className="space-y-12" id="flagship-programs">
      {/* Section Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B63]/80 border border-[#19BCE8]/40 text-[#19BCE8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-4 h-4 text-[#19BCE8]" />
          <span>Tier-1 Flagship Accelerators</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading drop-shadow-sm">
          Our Flagship Programs
        </h2>
        <p className="text-[#E5EAF3] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Deep, intensive, production-grounded 12-week accelerators engineered to transition learners into capable, verifiable technology practitioners.
        </p>
      </div>

      {/* Program Selector Tabs (For Mobile/Tablet quick toggle) */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab('crpc')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'crpc'
              ? 'bg-[#0878E8] text-white shadow-lg shadow-blue-900/30 ring-2 ring-[#19BCE8] scale-105'
              : 'bg-[#071B63]/70 hover:bg-[#0A2578] text-slate-300 border border-[#19BCE8]/20'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
          <span>CRPC (Cloud &amp; Data)</span>
        </button>

        <button
          onClick={() => setActiveTab('daap')}
          className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'daap'
              ? 'bg-[#0878E8] text-white shadow-lg shadow-blue-900/30 ring-2 ring-[#19BCE8] scale-105'
              : 'bg-[#071B63]/70 hover:bg-[#0A2578] text-slate-300 border border-[#19BCE8]/20'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
          <span>DAAP (Data &amp; AI)</span>
        </button>
      </div>

      {/* Both Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* ========================================================================= */}
        {/* CRPC FLAGSHIP CARD                                                        */}
        {/* ========================================================================= */}
        <div
          className={`group bg-[#071B63]/85 backdrop-blur-xl rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between ${
            activeTab === 'crpc'
              ? 'border-[#19BCE8] ring-2 ring-[#19BCE8]/30'
              : 'border-[#19BCE8]/25 hover:border-[#19BCE8]/50'
          }`}
        >
          <div>
            {/* Visual Header with Real Generated Artwork */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#06143D]">
              <img
                src="/brand/hero/hero-crpc-cloud.jpg"
                alt="CRPC Cloud and Data Architecture Ecosystem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B63] via-[#071B63]/60 to-transparent" />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider uppercase border border-white/20">
                  FLAGSHIP 01
                </span>
                <span className="px-3 py-1 rounded-full bg-[#19BCE8] text-[#06143D] text-[11px] font-mono font-black tracking-wider uppercase shadow-xs">
                  CRPC
                </span>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                  {crpc.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white">
                  {crpc.name}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-semibold border-b border-white/10 pb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#19BCE8]" />
                  {crpc.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-[#19BCE8]" />
                  {crpc.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-brand-orange" />
                  {crpc.modulesCount}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {crpc.description}
              </p>

              {/* Primary Tech Logos */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Core Technologies:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <AwsLogo className="w-4 h-4" /> AWS Cloud
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <DockerLogo className="w-4 h-4" /> Docker
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <KubernetesLogo className="w-4 h-4" /> Kubernetes
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <JenkinsLogo className="w-4 h-4" /> Jenkins
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <PythonLogo className="w-4 h-4" /> Python
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <ServiceNowLogo className="w-4 h-4" /> ServiceNow
                  </span>
                </div>
              </div>

              {/* Approved Features Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Program Highlights &amp; Support:
                </div>
                <div className="space-y-2">
                  {crpc.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#19BCE8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 sm:p-8 bg-[#051336]/95 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/courses/crpc"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0878E8] hover:bg-[#0760BE] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Explore CRPC Track</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => openCurriculum('crpc')}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#071B63] hover:bg-[#0A2578] border border-[#19BCE8]/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#19BCE8]" />
                <span>Download Syllabus</span>
              </button>
            </div>

            <button
              onClick={() => openWhatsApp(getCRPCEnquiryMessage())}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire via WhatsApp</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DAAP FLAGSHIP CARD                                                        */}
        {/* ========================================================================= */}
        <div
          className={`group bg-[#071B63]/85 backdrop-blur-xl rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between ${
            activeTab === 'daap'
              ? 'border-[#0878E8] ring-2 ring-[#0878E8]/30'
              : 'border-[#19BCE8]/25 hover:border-[#19BCE8]/50'
          }`}
        >
          <div>
            {/* Visual Header with Real Generated Artwork */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#06143D]">
              <img
                src="/brand/hero/hero-daap-data.jpg"
                alt="DAAP Data Analytics and AI Workflows Ecosystem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B63] via-[#071B63]/60 to-transparent" />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-mono font-bold tracking-wider uppercase border border-white/20">
                  FLAGSHIP 02
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0878E8] text-white text-[11px] font-mono font-black tracking-wider uppercase shadow-xs">
                  DAAP
                </span>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                  {daap.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white">
                  {daap.name}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metadata strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-semibold border-b border-white/10 pb-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#19BCE8]" />
                  {daap.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-[#19BCE8]" />
                  {daap.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-brand-orange" />
                  {daap.modulesCount}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {daap.description}
              </p>

              {/* Primary Tech Logos */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Core Technologies:
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <PowerBiLogo className="w-4 h-4" /> Power BI &amp; DAX
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <SqlLogo className="w-4 h-4" /> SQL (Postgres)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <ExcelLogo className="w-4 h-4" /> Excel &amp; Modeling
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <PythonLogo className="w-4 h-4" /> Python &amp; Pandas
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <RagLogo className="w-4 h-4" /> Generative AI &amp; RAG
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/20 text-xs font-bold text-slate-200">
                    <AgenticAiLogo className="w-4 h-4" /> Agentic AI
                  </span>
                </div>
              </div>

              {/* Approved Features Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Program Highlights &amp; Support:
                </div>
                <div className="space-y-2">
                  {daap.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#19BCE8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 sm:p-8 bg-[#051336]/95 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to="/courses/daap"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0878E8] hover:bg-[#0760BE] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Explore DAAP Track</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => openCurriculum('daap')}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#071B63] hover:bg-[#0A2578] border border-[#19BCE8]/30 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#19BCE8]" />
                <span>Download Syllabus</span>
              </button>
            </div>

            <button
              onClick={() => openWhatsApp(getDAAPEnquiryMessage())}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </SectionAtmosphere>
  );
};
