import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Download, MessageCircle } from 'lucide-react';
import { BRAND_DATA, ProgramInfo } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import {
  openWhatsApp,
  getCRPCEnquiryMessage,
  getDAAPEnquiryMessage,
  getFDEEnquiryMessage,
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

interface ProgramView {
  code: 'crpc' | 'daap' | 'fde';
  label: string;
  data: ProgramInfo;
  image: string;
  alt: string;
  accent: string;
  buttonGradient: string;
  titleAccent: string;
  titleRest: string;
  to: string;
  duration: string;
  tuition: string;
  structure: string;
  conciseDesc: string;
  techs: { name: string; logo: React.ReactNode }[];
  highlights: string[];
}

const LOGO = 'w-4 h-4 shrink-0 object-contain';

const FEATHER_MASK: React.CSSProperties = {
  maskImage:
    'linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%), linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)',
  maskComposite: 'intersect',
  WebkitMaskImage:
    'linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%), linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)',
  WebkitMaskComposite: 'source-in',
};

/* ========================================================================= */
/* 1. DESKTOP FLAGSHIP CARD (Preserves exact approved 3-column desktop look)   */
/* ========================================================================= */
const DesktopProgramCard: React.FC<{
  view: ProgramView;
  className?: string;
  onSyllabus: () => void;
  onEnquire: () => void;
}> = ({ view, className = '', onSyllabus, onEnquire }) => {
  const { data, accent } = view;

  return (
    <article className={`group relative flex flex-col h-full ${className}`}>
      {/* Artwork banner */}
      <div
        className="relative h-32 xl:h-36 overflow-hidden shrink-0"
        style={FEATHER_MASK}
      >
        <img
          src={view.image}
          alt={view.alt}
          className="absolute inset-0 w-full h-full object-cover object-[center_32%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Editorial Content */}
      <div className="relative -mt-7 flex-1 flex flex-col">
        {/* Readability backdrop fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-6 -bottom-6 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 90% 85% at 50% 50%, rgba(2, 6, 23, 0.42) 0%, rgba(2, 6, 23, 0.18) 55%, transparent 100%)',
          }}
        />

        {/* 1. Program Identity Label */}
        <div className="flex items-center gap-2">
          <span
            className="font-mono font-black text-xs xl:text-sm tracking-[0.28em]"
            style={{ color: accent }}
          >
            {data.code}
          </span>
          <span className="h-px w-6 shrink-0 opacity-40" style={{ background: accent }} />
          <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-slate-300 whitespace-nowrap">
            {view.code === 'fde' ? '6-Month Career Track' : '12-Week Career Accelerator'}
          </span>
        </div>

        {/* 2. Program Title */}
        <h3 className="mt-1 text-[19px] xl:text-[22px] font-black font-heading tracking-tight leading-[1.2] text-white [text-shadow:0_2px_16px_rgba(2,8,23,0.85)] min-h-[46px] xl:min-h-[52px] flex items-center">
          <span>
            <span style={{ color: accent }}>{view.titleAccent}</span> {view.titleRest}
          </span>
        </h3>

        {/* 3. 100% Placement Assistance Included */}
        <div className="mt-1 flex items-center gap-1.5">
          <BadgeCheck className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
          <p
            className="font-heading font-extrabold text-[13px] tracking-tight whitespace-nowrap"
            style={{ color: accent }}
          >
            100% Placement Assistance Included
          </p>
        </div>

        {/* 4. Short Description */}
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#CBD5E1] min-h-[36px] xl:min-h-[38px] line-clamp-2 font-normal">
          {data.description}
        </p>

        {/* 5. Key Facts — Architectural hairline metric strip */}
        <div className="mt-2.5 py-1.5 border-y border-white/10 grid grid-cols-4 divide-x divide-white/10 text-center">
          <div className="px-0.5">
            <span className="block font-mono text-[8px] xl:text-[9px] tracking-wider uppercase text-slate-400">Duration</span>
            <span className="block mt-0.5 text-[10px] xl:text-xs font-bold text-white whitespace-nowrap">{view.duration}</span>
          </div>
          <div className="px-0.5">
            <span className="block font-mono text-[8px] xl:text-[9px] tracking-wider uppercase text-slate-400">Structure</span>
            <span className="block mt-0.5 text-[10px] xl:text-xs font-bold text-white whitespace-nowrap">{view.structure}</span>
          </div>
          <div className="px-0.5">
            <span className="block font-mono text-[8px] xl:text-[9px] tracking-wider uppercase text-slate-400">Tuition</span>
            <span className="block mt-0.5 text-[10px] xl:text-xs font-bold text-white whitespace-nowrap">{view.tuition}</span>
          </div>
          <div className="px-0.5">
            <span className="block font-mono text-[8px] xl:text-[9px] tracking-wider uppercase text-slate-400">Format</span>
            <span className="block mt-0.5 text-[10px] xl:text-xs font-bold text-white whitespace-nowrap">Live Online</span>
          </div>
        </div>

        {/* 6. Core Technologies Mastered */}
        <div className="mt-2.5">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 font-semibold">
            Core Technologies Mastered
          </p>
          <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1">
            {view.techs.map((t) => (
              <li key={t.name} className="flex items-center gap-1.5 text-xs font-medium text-slate-200 min-w-0">
                {t.logo}
                <span className="truncate">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 7. Career Curriculum Highlights */}
        <div className="mt-2.5 pt-2 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 font-semibold">
            Career Curriculum Highlights
          </p>
          <ul className="mt-1 space-y-1 min-h-[58px]">
            {view.highlights.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-xs leading-snug text-slate-300">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ background: accent }}
                />
                <span className="line-clamp-1 xl:line-clamp-none">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Action Area */}
        <div className="mt-auto pt-2.5 border-t border-white/10 flex flex-col gap-1.5">
          <Link
            to={view.to}
            className="group/cta w-full inline-flex items-center justify-center gap-2 h-9.5 px-4 rounded-lg text-white font-bold text-[13px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md min-h-[36px]"
            style={{ backgroundImage: view.buttonGradient, boxShadow: `0 0 20px ${accent}40` }}
          >
            <span>Explore {data.code} Track</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform duration-300" />
          </Link>

          <div className="flex items-center justify-between px-1 text-xs">
            <button
              type="button"
              onClick={onSyllabus}
              className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer py-0.5"
            >
              <Download className="w-3.5 h-3.5" style={{ color: accent }} />
              <span>Download Syllabus</span>
            </button>

            <button
              type="button"
              onClick={onEnquire}
              className="inline-flex items-center gap-1.5 font-semibold text-[#6EE7A0] hover:text-[#A7F3D0] transition-colors cursor-pointer py-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Enquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ========================================================================= */
/* 2. DEDICATED MOBILE CAROUSEL CARD FOR FLAGSHIPS (CRPC, DAAP, FDE)          */
/* Single primary card visible at a time (~84vw) with peek of next card       */
/* ========================================================================= */
const MobileCarouselProgramCard: React.FC<{
  view: ProgramView;
  onSyllabus: () => void;
  onEnquire: () => void;
}> = ({ view, onSyllabus, onEnquire }) => {
  const { data, accent } = view;

  return (
    <article className="w-[84vw] max-w-[340px] shrink-0 snap-center flex flex-col justify-between rounded-2xl bg-[#030919]/90 border border-white/10 hover:border-white/20 p-3.5 sm:p-4 shadow-lg backdrop-blur-md transition-all">
      <div className="space-y-3">
        {/* 1. Artwork Banner — Prominent 16:9 landscape aspect */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#020617] border border-white/10 shadow-xs">
          <img
            src={view.image}
            alt={view.alt}
            className="w-full h-full object-cover object-[center_32%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Minimal, elegant program tag */}
          <div className="absolute top-2 left-2 pointer-events-none flex items-center gap-1.5">
            <span
              className="font-mono font-black text-xs px-2 py-0.5 rounded-md bg-[#020617]/90 backdrop-blur-md border border-white/20 shadow-sm"
              style={{ color: accent }}
            >
              {data.code}
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#020617]/90 backdrop-blur-md border border-white/15 text-slate-300">
              {view.code === 'fde' ? '6-Month Career Track' : '12-Week Career Sprint'}
            </span>
          </div>
        </div>

        {/* 2. Program Details */}
        <div className="space-y-1.5">
          {/* Duration & Tuition */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-semibold text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/10">
              {view.duration}
            </span>
            <span className="font-bold text-white px-2 py-0.5 rounded bg-white/5 border border-white/10 tracking-wide">
              {view.tuition}
            </span>
          </div>

          {/* Course Title */}
          <h3 className="text-[17px] font-black font-heading text-white leading-tight pt-1">
            <span style={{ color: accent }}>{view.titleAccent}</span> {view.titleRest}
          </h3>

          {/* 100% Placement Assistance */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <BadgeCheck className="w-4 h-4 shrink-0" style={{ color: accent }} />
            <span className="text-xs font-bold text-slate-100 tracking-tight">
              100% Placement Assistance Included
            </span>
          </div>

          {/* Concise 1-sentence description */}
          <p className="text-xs leading-relaxed text-[#CBD5E1] font-normal pt-0.5">
            {view.conciseDesc}
          </p>
        </div>

        {/* 3. Core Technologies Mastered Strip */}
        <div className="pt-2 border-t border-white/10">
          <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
            <span>Core Stack:</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {view.techs.slice(0, 4).map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-1.5 text-[11px] font-medium text-slate-200 px-1.5 py-1 rounded bg-white/[0.04] border border-white/5 truncate"
              >
                {t.logo}
                <span className="truncate">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Action Area */}
      <div className="mt-3.5 pt-3 border-t border-white/10 space-y-2">
        <Link
          to={view.to}
          className="w-full inline-flex items-center justify-center gap-2 h-9.5 px-4 rounded-xl text-white font-bold text-xs tracking-wide transition-all shadow-md min-h-[38px] cursor-pointer"
          style={{ backgroundImage: view.buttonGradient, boxShadow: `0 0 16px ${accent}30` }}
        >
          <span>Explore {data.code.toUpperCase()} Track</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>

        <div className="flex items-center justify-between px-1 text-xs">
          <button
            type="button"
            onClick={onSyllabus}
            className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer py-1"
          >
            <Download className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
            <span>Syllabus</span>
          </button>

          <button
            type="button"
            onClick={onEnquire}
            className="inline-flex items-center gap-1.5 font-semibold text-[#6EE7A0] hover:text-[#A7F3D0] transition-colors cursor-pointer py-1"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
};



/* ========================================================================= */
/* MAIN EXPORT: CoursesFlagshipSection                                       */
/* ========================================================================= */
export const CoursesFlagshipSection: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = React.useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 320;
    const gap = 14; // gap-3.5 is 14px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), 2));
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 320;
    const gap = 14;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const crpcData = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daapData = BRAND_DATA.programs.find((p) => p.id === 'daap')!;
  const fdeData = BRAND_DATA.programs.find((p) => p.id === 'fde')!;

  const crpc: ProgramView = {
    code: 'crpc',
    label: 'CRPC',
    data: crpcData,
    image: '/brand/hero/hero-crpc-card.jpg',
    alt: 'CRPC Cloud & Data Architecture Ecosystem',
    accent: '#00D2FF',
    buttonGradient: 'linear-gradient(90deg, #00D2FF 0%, #0878E8 55%, #0052CC 100%)',
    titleAccent: 'Cloud & Data',
    titleRest: 'Career Accelerator',
    to: '/courses/crpc',
    duration: '12 Weeks',
    tuition: '₹17,000',
    structure: '8 Modules',
    conciseDesc: 'Python foundations, Data Science, AWS Cloud architecture, DevOps CI/CD & ServiceNow.',
    techs: [
      { name: 'AWS Cloud', logo: <AwsLogo className={LOGO} /> },
      { name: 'Docker', logo: <DockerLogo className={LOGO} /> },
      { name: 'Kubernetes', logo: <KubernetesLogo className={LOGO} /> },
      { name: 'Jenkins', logo: <JenkinsLogo className={LOGO} /> },
      { name: 'Python', logo: <PythonLogo className={LOGO} /> },
      { name: 'ServiceNow', logo: <ServiceNowLogo className="h-3.5 w-auto shrink-0" /> },
    ],
    highlights: [
      '12 Weeks · 8 Deep-dive Production Modules',
      '4 Advanced Flagship Projects (GenAI & AIOps)',
      'Virtual Company Sessions (Vizag IT Park exposure)',
    ],
  };

  const daap: ProgramView = {
    code: 'daap',
    label: 'DAAP',
    data: daapData,
    image: '/brand/hero/hero-daap-card.jpg',
    alt: 'DAAP Data Analytics & AI Workflows Ecosystem',
    accent: '#C084FC',
    buttonGradient: 'linear-gradient(90deg, #D946EF 0%, #A855F7 55%, #7C3AED 100%)',
    titleAccent: 'Data Analyst',
    titleRest: 'Accelerator Program',
    to: '/courses/daap',
    duration: '12 Weeks',
    tuition: '₹17,000',
    structure: '12-Wk Sprint',
    conciseDesc: 'Excel modeling, SQL Postgres, Python Pandas, Power BI dashboards & Agentic AI workflows.',
    techs: [
      { name: 'Power BI & DAX', logo: <PowerBiLogo className={LOGO} /> },
      { name: 'SQL (Postgres)', logo: <SqlLogo className={LOGO} /> },
      { name: 'Python & Pandas', logo: <PythonLogo className={LOGO} /> },
      { name: 'Excel Modeling', logo: <ExcelLogo className={LOGO} /> },
      { name: 'GenAI & RAG', logo: <RagLogo className={LOGO} /> },
      { name: 'Agentic AI', logo: <AgenticAiLogo className={LOGO} /> },
    ],
    highlights: [
      '12 Weeks · 5 Projects & End-to-End Pipeline',
      'Generative AI & Agentic AI Workflows Built-in',
      'Executive BI Dashboard & Saturday Career Coaching',
    ],
  };

  const fde: ProgramView = {
    code: 'fde',
    label: 'FDE',
    data: fdeData,
    image: '/brand/hero/hero-fde-card.jpg',
    alt: 'FDE AI Engineer Production Deployment Ecosystem',
    accent: '#00E599',
    buttonGradient: 'linear-gradient(90deg, #00D2FF 0%, #10B981 55%, #059669 100%)',
    titleAccent: 'AI Engineer',
    titleRest: 'Forward Deployed Track',
    to: '/courses/fde',
    duration: '6 Months',
    tuition: '₹25,000',
    structure: '10 Tracks',
    conciseDesc: 'Software engineering, FastAPI, LLMs & RAG, AI Agents, Docker, Kubernetes & cloud CI/CD.',
    techs: [
      { name: 'Python & FastAPI', logo: <PythonLogo className={LOGO} /> },
      { name: 'LLMs & RAG', logo: <RagLogo className={LOGO} /> },
      { name: 'AI Agents & MCP', logo: <AgenticAiLogo className={LOGO} /> },
      { name: 'Docker', logo: <DockerLogo className={LOGO} /> },
      { name: 'Kubernetes', logo: <KubernetesLogo className={LOGO} /> },
      { name: 'Cloud & CI/CD', logo: <AwsLogo className={LOGO} /> },
    ],
    highlights: [
      '6 Months · 10 Disciplines in Production AI',
      'Flagship Project: Secure AI Platform Deployment',
      'Production AI System Architecture & RAG Pipelines',
    ],
  };

  return (
    <SectionAtmosphere variant="programs">
      <section className="space-y-6 lg:space-y-8" id="flagship-programs">
        {/* Section Header */}
        <div className="relative text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -inset-y-6 pointer-events-none -z-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0.18) 60%, transparent 100%)',
            }}
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading leading-tight">
            Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Programs</span>
          </h2>
          <p className="text-[#DCE5F2] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
            Deep, production-grounded career accelerators engineered to transition learners into capable, verifiable technology practitioners.
          </p>
        </div>

        {/* ================================================================= */}
        {/* DESKTOP PRESENTATION (lg:grid-cols-3) — Strict 3-col side-by-side  */}
        {/* ================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-x-7 xl:gap-x-9 items-stretch">
          <DesktopProgramCard
            view={crpc}
            className="pr-3"
            onSyllabus={() => openCurriculum('crpc')}
            onEnquire={() => openWhatsApp(getCRPCEnquiryMessage())}
          />

          <DesktopProgramCard
            view={daap}
            className="border-l border-white/10 pl-6 xl:pl-8 pr-3"
            onSyllabus={() => openCurriculum('daap')}
            onEnquire={() => openWhatsApp(getDAAPEnquiryMessage())}
          />

          <DesktopProgramCard
            view={fde}
            className="border-l border-white/10 pl-6 xl:pl-8"
            onSyllabus={() => openCurriculum('fde')}
            onEnquire={() => openWhatsApp(getFDEEnquiryMessage())}
          />
        </div>

        {/* ================================================================= */}
        {/* DEDICATED MOBILE & TABLET COMPOSITION (< lg)                      */}
        {/* Horizontally swipeable carousel containing CRPC, DAAP, and FDE    */}
        {/* ================================================================= */}
        <div className="lg:hidden space-y-3">
          {/* Swipeable Carousel Track with Peeking Affordance */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-3.5 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 pb-2 pt-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
            aria-label="Flagship Programs Carousel"
          >
            <MobileCarouselProgramCard
              view={crpc}
              onSyllabus={() => openCurriculum('crpc')}
              onEnquire={() => openWhatsApp(getCRPCEnquiryMessage())}
            />

            <MobileCarouselProgramCard
              view={daap}
              onSyllabus={() => openCurriculum('daap')}
              onEnquire={() => openWhatsApp(getDAAPEnquiryMessage())}
            />

            <MobileCarouselProgramCard
              view={fde}
              onSyllabus={() => openCurriculum('fde')}
              onEnquire={() => openWhatsApp(getFDEEnquiryMessage())}
            />
          </div>

          {/* Carousel Pagination Dots & Swipe Affordance */}
          <div className="flex items-center justify-center gap-2 pt-1" aria-hidden="true">
            {['crpc', 'daap', 'fde'].map((progId, idx) => {
              const isActive = activeIndex === idx;
              const activeColor = idx === 0 ? '#00D2FF' : idx === 1 ? '#C084FC' : '#00E599';
              return (
                <button
                  key={progId}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="transition-all duration-300 rounded-full cursor-pointer"
                  style={{
                    width: isActive ? '20px' : '6px',
                    height: '6px',
                    backgroundColor: isActive ? activeColor : 'rgba(255, 255, 255, 0.25)',
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </SectionAtmosphere>
  );
};
