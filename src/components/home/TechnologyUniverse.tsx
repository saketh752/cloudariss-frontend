import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
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
} from '@/components/icons/TechLogos';
import { TechVisualArtwork } from '@/components/home/TechVisualArtwork';

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
      return <JenkinsLogo className={`${className} scale-125 object-contain`} />;
    case 'terraform':
      return <TerraformLogo className={className} />;
    case 'linux':
      return <LinuxLogo className={`${className} scale-110 object-contain`} />;
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
    { id: 'all', label: 'All Stacks (20)' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'devops', label: 'DevOps' },
    { id: 'data', label: 'Data' },
    { id: 'ai', label: 'AI & Tools' },
    { id: 'foundations', label: 'Foundations' },
  ];

  return (
    <div className="space-y-8 sm:space-y-10 relative">
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER: EDITORIAL TYPOGRAPHY                                   */}
      {/* ========================================================================= */}
      <div className="max-w-3xl mx-auto text-center space-y-3 relative z-10 px-2">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight text-white">
          The Connected Technology{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#19BCE8] to-[#FF7A00]">
            Universe
          </span>
        </h2>
        <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Technologies do not exist in isolation. Select any skill to map its ecosystem, understand its enterprise role, and explore how it connects to your career.
        </p>

        {/* Category Filters: Minimalist Horizontal Rail */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 pt-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#00D2FF] text-[#02091D] font-bold shadow-[0_0_16px_rgba(0,210,255,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OPEN EDITORIAL WORKSPACE (NO GIANT DASHBOARD BOXES)                     */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start relative z-10">
        {/* ======================================================================= */}
        {/* LEFT: INTERACTIVE TECHNOLOGY GRID (60% Desktop / Compact on Mobile)    */}
        {/* ======================================================================= */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-1 border-b border-white/10">
            <span className="flex items-center gap-2 text-[#00D2FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              SELECT A TECHNOLOGY TO MAP CONNECTIONS
            </span>
            <span className="hidden sm:inline font-normal">{filteredTechnologies.length} Technologies</span>
          </div>

          {/* Compact, Borderless Technology Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-2.5">
            {filteredTechnologies.map((tech) => {
              const isSelected = tech.id === selectedTechId;
              const isConnected = connectedIds.has(tech.id);
              const isDimmed = !isSelected && !isConnected && selectedTechId !== null;

              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`group relative p-2.5 sm:p-3 rounded-xl transition-all duration-200 flex flex-col items-center text-center cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#08285E]/90 text-white shadow-[0_0_20px_rgba(0,210,255,0.35)] ring-2 ring-[#00D2FF] scale-[1.02] z-20'
                      : isConnected
                      ? 'bg-[#062445]/80 text-white ring-1 ring-[#00F5A0]/60 z-10'
                      : isDimmed
                      ? 'bg-white/[0.02] text-slate-400 opacity-40 hover:opacity-85 border border-white/5'
                      : 'bg-white/[0.04] text-slate-200 hover:bg-white/[0.09] hover:text-white border border-white/10'
                  }`}
                >
                  {/* Status Indicator */}
                  {isSelected && (
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]" />
                  )}
                  {isConnected && !isSelected && (
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
                  )}

                  {/* Logo Container */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mb-1.5 transition-all p-1.5 ${
                      isSelected
                        ? 'bg-white shadow-md scale-105'
                        : isConnected
                        ? 'bg-white/95 shadow-xs'
                        : 'bg-white/90 group-hover:bg-white'
                    }`}
                  >
                    {renderTechLogo(tech.id, tech.id === 'jenkins' ? 'w-7 h-7' : 'w-6 h-6')}
                  </div>

                  {/* Tech Name */}
                  <span className="font-bold text-xs sm:text-[13px] tracking-tight leading-tight line-clamp-1">
                    {tech.gridName}
                  </span>

                  {/* Tag */}
                  <span
                    className={`text-[9px] font-mono mt-0.5 leading-none line-clamp-1 ${
                      isSelected ? 'text-[#00D2FF] font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {tech.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Connection Legend */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF]" />
              <span className="text-slate-200 font-medium">Active Focus</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
              <span className="text-slate-200 font-medium">Connected Skill</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>Unrelated</span>
            </span>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RIGHT: SELECTED TECHNOLOGY PROFILE (Editorial Presentation)            */}
        {/* ======================================================================= */}
        <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-white/10 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 text-white"
            >
              {/* Header: Logo, Title, Category Badge */}
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md p-2">
                    {renderTechLogo(selectedTech.id, 'w-7 h-7')}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading leading-tight">
                      {selectedTech.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-[#00D2FF] tracking-wider uppercase">
                      {selectedTech.tag}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-[#00D2FF] border border-white/15 shrink-0">
                  {selectedTech.categoryBadge}
                </span>
              </div>

              {/* Technology-Specific Visual Artwork */}
              <div className="rounded-xl overflow-hidden">
                <TechVisualArtwork techId={selectedTech.id} />
              </div>

              {/* Factual Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedTech.shortExplanation}
              </p>

              {/* What You'll Learn */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  What you'll master
                </div>
                <div className="space-y-1">
                  {selectedTech.whatYoullLearn.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included in Flagship Program */}
              <div className="py-2.5 px-3 rounded-lg bg-white/5 border-l-2 border-[#00D2FF] flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Flagship Program:</span>
                <span className="font-bold text-white">{selectedTech.includedInProgramName}</span>
              </div>

              {/* Frequently Paired With */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Frequently paired with
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTech.connectedTechIds.map((connId) => {
                    const connItem = TECHNOLOGY_UNIVERSE.find((i) => i.id === connId);
                    if (!connItem) return null;
                    return (
                      <button
                        key={connId}
                        type="button"
                        onClick={() => setSelectedTechId(connId)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
                      >
                        <span className="w-4 h-4 rounded bg-white p-0.5 flex items-center justify-center shrink-0">
                          {renderTechLogo(connId, connId === 'jenkins' ? 'w-3.5 h-3.5' : 'w-3 h-3')}
                        </span>
                        <span>{connItem.gridName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Single Clear Exploration CTA */}
              <div className="pt-2">
                <Link
                  to={selectedTech.courseRoute || '/courses'}
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-[#0878E8] to-[#00A8FF] hover:from-[#00A8FF] hover:to-[#0878E8] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore {selectedTech.gridName} in Curriculum</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
