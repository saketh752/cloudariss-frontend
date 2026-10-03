import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Check,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import {
  TECHNOLOGY_UNIVERSE,
  TechItem,
} from '@/data/coursesData';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  LinuxLogo,
  JenkinsLogo,
  TerraformLogo,
  PythonLogo,
  SqlLogo,
  ExcelLogo,
  PowerBiLogo,
  ChatGptLogo,
  AgenticAiLogo,
  JavaLogo,
  CLogo,
  ReactLogo,
  DsaLogo,
  AlgorithmLogo,
  BackendLogo,
  DbmsLogo,
  OopsLogo,
  WhatsAppLogo,
} from '@/components/icons/TechLogos';
import { TechVisualArtwork } from '@/components/home/TechVisualArtwork';
import { openWhatsApp, getCourseEnquiryMessage } from '@/utils/whatsapp';

// Helper to render the corresponding SVG logo for each tech ID
const renderTechLogo = (id: string, className = 'w-7 h-7') => {
  switch (id) {
    case 'aws':
      return <AwsLogo className={className} />;
    case 'docker':
      return <DockerLogo className={className} />;
    case 'kubernetes':
      return <KubernetesLogo className={className} />;
    case 'jenkins':
      return <JenkinsLogo className={className} />;
    case 'terraform':
      return <TerraformLogo className={className} />;
    case 'linux':
      return <LinuxLogo className={className} />;
    case 'python':
      return <PythonLogo className={className} />;
    case 'java':
      return <JavaLogo className={className} />;
    case 'c':
      return <CLogo className={className} />;
    case 'sql':
      return <SqlLogo className={className} />;
    case 'powerbi':
      return <PowerBiLogo className={className} />;
    case 'excel':
      return <ExcelLogo className={className} />;
    case 'rag':
      return <ChatGptLogo className={className} />;
    case 'agenticai':
      return <AgenticAiLogo className={className} />;
    case 'dsa':
      return <DsaLogo className={className} />;
    case 'algorithms':
      return <AlgorithmLogo className={className} />;
    case 'frontend':
      return <ReactLogo className={className} />;
    case 'backend':
      return <BackendLogo className={className} />;
    case 'dbms':
      return <DbmsLogo className={className} />;
    case 'oops':
    default:
      return <OopsLogo className={className} />;
  }
};

type CategoryFilter = 'all' | 'cloud' | 'devops' | 'data' | 'ai' | 'foundations';

export const TechnologyUniverse: React.FC = () => {
  const [selectedTechId, setSelectedTechId] = useState<string>('aws');
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const selectedTech: TechItem = useMemo(() => {
    return (
      TECHNOLOGY_UNIVERSE.find((item) => item.id === selectedTechId) ||
      TECHNOLOGY_UNIVERSE[0]
    );
  }, [selectedTechId]);

  const connectedIds = useMemo(() => {
    return new Set(selectedTech.connectedTechIds);
  }, [selectedTech]);

  const filteredTechnologies = useMemo(() => {
    if (activeFilter === 'all') return TECHNOLOGY_UNIVERSE;
    return TECHNOLOGY_UNIVERSE.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const filterTabs: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All Ecosystem (20)' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'devops', label: 'DevOps' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'ai', label: 'AI & Tools' },
    { id: 'foundations', label: 'Foundations & Secondary' },
  ];

  return (
    <section className="space-y-10 relative">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER: EXACT REFERENCE STRUCTURE & HIGHLIGHTS                 */}
      {/* ========================================================================= */}
      <div className="text-center max-w-4xl mx-auto space-y-4 relative z-10">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071B63]/80 border border-[#19BCE8]/40 text-[#00D2FF] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>INTERACTIVE SKILLS MATRIX</span>
        </div>

        {/* Main Heading with "The Connected Technology Universe" */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight text-white">
          The Connected Technology{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#19BCE8] to-[#FF7A00]">
            Universe
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Technologies do not exist in isolation. Click any skill below to see its connected ecosystem, understand its real-world purpose in parent-friendly terms, and explore how it fits into your career journey.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTERS: PILL NAVIGATION                                     */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 relative z-10">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#00D2FF] text-[#06143D] shadow-[0_0_20px_rgba(0,210,255,0.5)] scale-105'
                  : 'bg-[#06143D]/80 hover:bg-[#0A2568] text-[#C8D7EE] hover:text-white border border-[#19BCE8]/30 hover:border-[#19BCE8]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN INTERACTIVE WORKSPACE: TWO-COLUMN LAYOUT                          */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
        {/* ======================================================================= */}
        {/* LEFT COLUMN: 5 × 4 TECHNOLOGY MATRIX GRID (7 Cols)                     */}
        {/* ======================================================================= */}
        <div className="lg:col-span-7 rounded-3xl bg-[#06143D]/80 backdrop-blur-xl p-4 sm:p-6 border border-[#19BCE8]/30 shadow-2xl space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
            <span className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-pulse" />
              CLICK TO FOCUS &amp; MAP CONNECTIONS
            </span>
            <span className="text-slate-400 font-semibold">{filteredTechnologies.length} Technologies</span>
          </div>

          {/* 5 × 4 Technology Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
            {filteredTechnologies.map((tech) => {
              const isSelected = tech.id === selectedTechId;
              const isConnected = connectedIds.has(tech.id);
              const isDimmed = !isSelected && !isConnected && selectedTechId !== null;

              return (
                <motion.div
                  key={tech.id}
                  layout
                  onClick={() => setSelectedTechId(tech.id)}
                  whileHover={{ scale: isSelected ? 1.03 : 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative p-3 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center select-none ${
                    isSelected
                      ? 'bg-[#0A2568]/95 border-2 border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.45)] ring-2 ring-[#00D2FF]/40 ring-offset-2 ring-offset-[#06143D] z-20'
                      : isConnected
                      ? 'bg-[#072450]/85 border border-[#00F5A0]/80 text-white shadow-md z-10'
                      : isDimmed
                      ? 'bg-[#05112E]/50 border border-white/5 text-slate-400 opacity-40 hover:opacity-90'
                      : 'bg-[#071B63]/70 border border-white/10 text-white hover:border-[#19BCE8]/60 hover:bg-[#0A2578]'
                  }`}
                >
                  {/* Status Indicator Dot in Top-Right */}
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
                  )}
                  {isConnected && !isSelected && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]" />
                  )}

                  {/* Original Logo Container */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-1.5 transition-colors ${
                      isSelected
                        ? 'bg-white/15 text-white'
                        : isConnected
                        ? 'bg-white text-[#0878E8] shadow-sm'
                        : 'bg-[#040E2A]/80 text-[#DCE5F2]'
                    }`}
                  >
                    {renderTechLogo(tech.id, 'w-6 h-6')}
                  </div>

                  {/* Technology Name */}
                  <div className="font-extrabold text-xs sm:text-sm text-white tracking-tight leading-tight line-clamp-1">
                    {tech.gridName}
                  </div>

                  {/* Short Category/Purpose Label */}
                  <div
                    className={`text-[9px] sm:text-[10px] font-mono mt-0.5 leading-tight line-clamp-1 ${
                      isSelected ? 'text-[#00D2FF] font-bold' : 'text-slate-400'
                    }`}
                  >
                    {tech.tag}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Connection Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-slate-300 pt-3 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]" />
              <span className="text-white font-semibold">Active Focus</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
              <span className="text-white font-semibold">Connected Skill</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full border border-slate-500 bg-transparent" />
              <span>Unrelated (Dimmed)</span>
            </span>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RIGHT COLUMN: RICH SELECTED TECHNOLOGY DETAIL PANEL (5 Cols)           */}
        {/* ======================================================================= */}
        <div className="lg:col-span-5 sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-[#07194A]/90 backdrop-blur-2xl border border-[#19BCE8]/40 shadow-2xl p-5 sm:p-7 space-y-5 relative overflow-hidden"
            >
              {/* Top Flare Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: selectedTech.accentColor }}
              />

              {/* Header: Logo, Title, Category Badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-white/40 flex items-center justify-center shrink-0 shadow-lg p-2.5">
                    {renderTechLogo(selectedTech.id, 'w-8 h-8')}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-heading leading-tight">
                      {selectedTech.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#00D2FF] tracking-wider uppercase mt-0.5">
                      {selectedTech.tag}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-wider bg-[#05143A] border border-[#19BCE8]/40 text-[#00D2FF] shrink-0">
                  {selectedTech.categoryBadge}
                </span>
              </div>

              {/* Technology-Specific Visual Artwork (20 Unique Visuals) */}
              <TechVisualArtwork techId={selectedTech.id} />

              {/* Factual Description */}
              <p className="text-xs sm:text-sm text-[#DCE5F2] leading-relaxed font-normal">
                {selectedTech.shortExplanation}
              </p>

              {/* What You'll Learn (Checklist) */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  What you'll learn
                </div>
                <div className="space-y-1.5">
                  {selectedTech.whatYoullLearn.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#F1F5F9] font-medium">
                      <Check className="w-4 h-4 text-[#00D2FF] shrink-0 stroke-[2.5]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included in Program Box */}
              <div className="p-3.5 rounded-xl bg-[#05143A]/90 border border-[#19BCE8]/35 space-y-0.5">
                <div className="text-[10px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                  Included in
                </div>
                <div className="text-sm font-extrabold text-white font-heading">
                  {selectedTech.includedInProgramName}
                </div>
              </div>

              {/* Frequently Paired With Chips */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-[#C8D7EE] uppercase tracking-wider">
                  Frequently paired with
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTech.connectedTechIds.map((connId) => {
                    const connItem = TECHNOLOGY_UNIVERSE.find((i) => i.id === connId);
                    if (!connItem) return null;
                    return (
                      <button
                        key={connId}
                        type="button"
                        onClick={() => setSelectedTechId(connId)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#05143A] hover:bg-[#0A2578] border border-[#19BCE8]/30 text-white transition-all cursor-pointer shadow-xs hover:border-[#19BCE8]"
                      >
                        {renderTechLogo(connId, 'w-3.5 h-3.5')}
                        <span>{connItem.gridName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons: Explore Track & WhatsApp CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                {/* Secondary CTA: Explore Track */}
                <Link
                  to={selectedTech.courseRoute || '/courses'}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#00A8FF] hover:from-[#00A8FF] hover:to-[#0878E8] text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore {selectedTech.gridName} Track</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Branded WhatsApp CTA Button */}
                <button
                  type="button"
                  onClick={() => openWhatsApp(getCourseEnquiryMessage(selectedTech.name))}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#0B3B2B] hover:bg-[#128C7E] text-white font-extrabold text-sm border border-[#25D366]/50 shadow-lg shadow-emerald-900/30 transition-all cursor-pointer shrink-0"
                >
                  <WhatsAppLogo className="w-5 h-5 text-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
