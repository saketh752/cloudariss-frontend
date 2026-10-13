import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Brain,
} from 'lucide-react';
import { SECONDARY_COURSES } from '@/data/coursesData';
import {
  JavaLogo,
  PythonLogo,
  CLogo,
  DsaLogo,
  ReactLogo,
  FullStackLogo,
  DbmsLogo,
  NetworksLogo,
  CybersecurityLogo,
  RagLogo,
  AgenticAiLogo,
  PromptEngLogo,
  DeepLearningLogo,
  SapLogo,
} from '@/components/icons/TechLogos';
import { openWhatsApp } from '@/utils/whatsapp';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';

const getCourseLogo = (id: string, className = 'w-5 h-5') => {
  switch (id) {
    case 'java':
      return <JavaLogo className={className} />;
    case 'python':
      return <PythonLogo className={className} />;
    case 'c':
      return <CLogo className={className} />;
    case 'dsa':
      return <DsaLogo className={className} />;
    case 'frontend':
      return <ReactLogo className={className} />;
    case 'fullstack':
      return <FullStackLogo className={className} />;
    case 'dbms':
      return <DbmsLogo className={className} />;
    case 'networks':
      return <NetworksLogo className={className} />;
    case 'cybersecurity':
      return <CybersecurityLogo className={className} />;
    case 'genai':
      return <RagLogo className={className} />;
    case 'agenticai':
      return <AgenticAiLogo className={className} />;
    case 'prompteng':
      return <PromptEngLogo className={className} />;
    case 'deeplearning':
      return <DeepLearningLogo className={className} />;
    case 'sap':
      return <SapLogo className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

const TechnologyCourseCard: React.FC<{ course: (typeof SECONDARY_COURSES)[0] }> = ({ course }) => {
  const { openCurriculum } = useCurriculumModal();
  const imageSrc = `/brand/courses/${course.id}.png`;

  return (
    <article className="group relative transition-all duration-200">
      {/* ========================================================================= */}
      {/* MOBILE PRESENTATION (< sm): Refined Horizontal Editorial Row             */}
      {/* ========================================================================= */}
      <div className="flex sm:hidden items-center gap-3 py-2 px-2.5 rounded-xl border border-white/[0.08] hover:border-cyan-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200">
        {/* Left Thumbnail: 104px fixed width, 16:10 aspect, subtle vignette & logo badge */}
        <div className="relative w-[104px] shrink-0 aspect-[16/10] overflow-hidden rounded-lg bg-[#020617] border border-white/10 shadow-sm self-start mt-0.5">
          <img
            src={imageSrc}
            alt={course.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          {/* Logo Badge in top-left */}
          <div className="absolute top-1 left-1 w-5 h-5 rounded bg-[#020617]/90 backdrop-blur-md border border-white/20 p-0.5 flex items-center justify-center pointer-events-none shadow">
            {getCourseLogo(course.id, 'w-3 h-3 object-contain')}
          </div>
        </div>

        {/* Right Info: Title, 1 concise line description, and action row */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 space-y-1">
          <div>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-[13px] font-bold text-white group-hover:text-[#00D2FF] transition-colors font-heading leading-snug">
                {course.name}
              </h3>
              {course.subtitle && (
                <span className="text-[10px] text-slate-400 font-medium">
                  · {course.subtitle}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-300 leading-normal line-clamp-2 mt-0.5 font-normal">
              {course.parentExplanation}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/[0.07]">
            <button
              type="button"
              onClick={() => openCurriculum(course.id)}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer group/link py-0.5"
            >
              <span>Curriculum</span>
              <ArrowRight className="w-2.5 h-2.5 text-[#00D2FF] group-hover/link:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsApp(course.whatsappUrl)}
              aria-label={`Enquire about ${course.name} on WhatsApp`}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-semibold text-[#6EE7A0] hover:text-white bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-all cursor-pointer shrink-0"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366] shrink-0" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP & TABLET PRESENTATION (>= sm): Preserved Grid Card Layout         */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex flex-col justify-between h-full rounded-2xl transition-all duration-300">
        <div className="space-y-3">
          {/* Visual Artwork Thumbnail */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#020617] border border-white/10 group-hover:border-[#00D2FF]/40 transition-colors duration-300 shadow-sm">
            <img
              src={imageSrc}
              alt={course.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

            {/* Floating Top Elements */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
              <div className="w-7 h-7 rounded-lg bg-[#020617]/85 backdrop-blur-md border border-white/20 p-1 flex items-center justify-center shadow-md">
                {getCourseLogo(course.id, 'w-4 h-4 object-contain')}
              </div>
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#020617]/80 backdrop-blur-md border border-white/20 text-slate-300">
                {course.category}
              </span>
            </div>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-1.5 px-0">
            <div>
              <h3 className="text-base lg:text-lg font-black text-white group-hover:text-[#00D2FF] transition-colors font-heading leading-snug">
                {course.name}
              </h3>
              {course.subtitle && (
                <div className="text-[11px] text-[#00D2FF]/90 font-medium leading-tight mt-0.5">
                  {course.subtitle}
                </div>
              )}
            </div>
            <div className="text-xs text-slate-400 font-medium truncate">
              {course.tagline}
            </div>
            <p className="text-xs text-[#CBD5E1] leading-relaxed font-normal">
              {course.parentExplanation}
            </p>
            {/* Key Technology Highlights */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {course.tools.slice(0, 3).map((tool, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Refined Action Row */}
        <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between gap-1.5 px-0">
          <button
            type="button"
            onClick={() => openCurriculum(course.id)}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-200 hover:text-white transition-colors cursor-pointer group/link py-1 min-h-[32px]"
          >
            <span>Curriculum</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF] group-hover/link:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => openWhatsApp(course.whatsappUrl)}
            aria-label={`Enquire about ${course.name} on WhatsApp`}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-[#6EE7A0] hover:text-white bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-all cursor-pointer min-h-[32px]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export const AllTechnologyCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Tracks (${SECONDARY_COURSES.length})`, icon: Layers },
    { id: 'core', label: 'Programming & Systems', icon: Code2 },
    { id: 'web', label: 'Web & Full Stack', icon: Cpu },
    { id: 'ai', label: 'AI, ML & Security', icon: Brain },
  ];

  const filteredCourses = SECONDARY_COURSES.filter((course) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'core') {
      return ['java', 'python', 'c', 'dsa', 'dbms', 'networks', 'sap'].includes(course.id) || course.category?.toLowerCase().includes('programm') || course.category?.toLowerCase().includes('system') || course.category?.toLowerCase().includes('enterprise');
    }
    if (activeCategory === 'web') {
      return ['frontend', 'fullstack'].includes(course.id) || course.category?.toLowerCase().includes('web');
    }
    if (activeCategory === 'ai') {
      return ['cybersecurity', 'genai', 'agenticai', 'prompteng', 'deeplearning'].includes(course.id) || course.category?.toLowerCase().includes('ai') || course.category?.toLowerCase().includes('security');
    }
    return true;
  });

  return (
    <section className="space-y-4 sm:space-y-8" id="specialized-tracks">
      {/* Section Header — Clean Editorial Architecture matching homepage quality */}
      <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-2.5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading leading-tight">
          Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Technology Courses</span>
        </h2>
        <p className="text-[#DCE5F2] text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
          Master focused technical disciplines with dedicated tracks in core programming languages, systems engineering, problem solving, modern web application development, and AI engineering.
        </p>

        {/* Clean Editorial Positioning Note */}
        <p className="text-xs text-slate-400 max-w-xl mx-auto font-normal pt-0.5">
          Individual courses focus on core fundamentals and guided practice. Comprehensive career accelerator benefits are exclusive to our flagship{' '}
          <Link to="/courses/crpc" className="text-[#19BCE8] font-semibold hover:underline">CRPC</Link>,{' '}
          <Link to="/courses/daap" className="text-[#C084FC] font-semibold hover:underline">DAAP</Link>, and{' '}
          <Link to="/courses/fde" className="text-[#00E599] font-semibold hover:underline">FDE</Link> programs.
        </p>

        {/* Category Filter Bar — Horizontally scrollable on mobile, centered on desktop */}
        <div className="flex justify-start sm:justify-center pt-2 sm:pt-3 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-none">
          <div className="inline-flex p-1 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 shrink-0 gap-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-[13px] font-bold font-heading transition-all duration-200 cursor-pointer min-h-[36px] whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0878E8] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#00D2FF]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 13 Courses: Two columns on mobile with spacious breathing room, 3 columns on desktop */}
      <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6 sm:items-stretch pt-2 sm:pt-4">
        {filteredCourses.map((course) => (
          <TechnologyCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
