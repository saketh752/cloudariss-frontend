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

/* ========================================================================= */
/* Editorial program showcase                                                */
/* Premium, unified 3-column composition fitting within standard desktop      */
/* viewports with zero horizontal overflow and aligned CTAs.                 */
/* ========================================================================= */

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
  techs: { name: string; logo: React.ReactNode }[];
  highlights: string[];
}

const LOGO = 'w-4 h-4 shrink-0 object-contain';

// Feather the artwork on every edge so it dissolves into the Cloudariss atmosphere
const FEATHER_MASK: React.CSSProperties = {
  maskImage:
    'linear-gradient(to bottom, #000 0%, #000 38%, transparent 100%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)',
  maskComposite: 'intersect',
  WebkitMaskImage:
    'linear-gradient(to bottom, #000 0%, #000 38%, transparent 100%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)',
  WebkitMaskComposite: 'source-in',
};

const ProgramShowcase: React.FC<{
  view: ProgramView;
  className?: string;
  onSyllabus: () => void;
  onEnquire: () => void;
}> = ({ view, className = '', onSyllabus, onEnquire }) => {
  const { data, accent } = view;

  return (
    <article className={`group relative flex flex-col h-full ${className}`}>
      {/* Artwork — cinematic banner with smooth directional feathering */}
      <div
        className="relative -mx-4 sm:mx-0 h-32 sm:h-38 lg:h-32 xl:h-36 overflow-hidden shrink-0"
        style={FEATHER_MASK}
      >
        <img
          src={view.image}
          alt={view.alt}
          className="absolute inset-0 w-full h-full object-cover object-[center_32%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Editorial Content Column */}
      <div className="relative -mt-7 sm:-mt-8 lg:-mt-7 flex-1 flex flex-col">
        {/* Subtle cinematic readability fade */}
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
            className="font-mono font-black text-xs sm:text-sm tracking-[0.28em]"
            style={{ color: accent }}
          >
            {data.code}
          </span>
          <span className="h-px w-5 sm:w-6 shrink-0 opacity-40" style={{ background: accent }} />
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-300 whitespace-nowrap">
            {view.code === 'fde' ? '6-Month Career Track' : '12-Week Career Accelerator'}
          </span>
        </div>

        {/* 2. Program Title — consistent 2-line optical height on desktop */}
        <h3 className="mt-1 text-lg sm:text-xl lg:text-[19px] xl:text-[22px] font-black font-heading tracking-tight leading-[1.2] text-white [text-shadow:0_2px_16px_rgba(2,8,23,0.85)] lg:min-h-[46px] xl:min-h-[52px] flex items-center">
          <span>
            <span style={{ color: accent }}>{view.titleAccent}</span> {view.titleRest}
          </span>
        </h3>

        {/* 3. 100% Placement Assistance Included */}
        <div className="mt-1 flex items-center gap-1.5">
          <BadgeCheck className="w-3.5 h-3.5 shrink-0" style={{ color: accent }} />
          <p
            className="font-heading font-extrabold text-xs sm:text-[13px] tracking-tight whitespace-nowrap"
            style={{ color: accent }}
          >
            100% Placement Assistance Included
          </p>
        </div>

        {/* 4. Short Description — scannable 2 lines */}
        <p className="mt-1.5 text-xs lg:text-[12.5px] leading-relaxed text-[#CBD5E1] lg:min-h-[36px] xl:min-h-[38px] line-clamp-2 font-normal">
          {data.description}
        </p>

        {/* 5. Key Facts — Architectural 3-part hairline metric strip */}
        <div className="mt-2.5 py-1.5 border-y border-white/10 grid grid-cols-3 divide-x divide-white/10 text-center">
          <div className="px-1">
            <span className="block font-mono text-[9px] tracking-wider uppercase text-slate-400">Duration</span>
            <span className="block mt-0.5 text-xs font-bold text-white whitespace-nowrap">
              {view.code === 'fde' ? '6 Months' : '12 Weeks'}
            </span>
          </div>
          <div className="px-1">
            <span className="block font-mono text-[9px] tracking-wider uppercase text-slate-400">Structure</span>
            <span className="block mt-0.5 text-xs font-bold text-white whitespace-nowrap">
              {view.code === 'fde' ? '10 Disciplines' : view.code === 'crpc' ? '8 Modules' : '12-Wk Sprint'}
            </span>
          </div>
          <div className="px-1">
            <span className="block font-mono text-[9px] tracking-wider uppercase text-slate-400">Format</span>
            <span className="block mt-0.5 text-xs font-bold text-white whitespace-nowrap">Live Online</span>
          </div>
        </div>

        {/* 6. Core Technologies Mastered — Structured 2-column grid (3 rows) */}
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

        {/* 7. Career Curriculum Highlights — Clean full-width list (zero collision) */}
        <div className="mt-2.5 pt-2 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 font-semibold">
            Career Curriculum Highlights
          </p>
          <ul className="mt-1 space-y-1 lg:min-h-[58px]">
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

        {/* 8. Action Area — Aligned baseline across all columns */}
        <div className="mt-3.5 sm:mt-auto pt-2.5 border-t border-white/10 flex flex-col gap-1.5">
          {/* Primary Action Button */}
          <Link
            to={view.to}
            className="group/cta w-full inline-flex items-center justify-center gap-2 h-9 sm:h-9.5 px-4 rounded-lg text-white font-bold text-xs sm:text-[13px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md min-h-[38px]"
            style={{ backgroundImage: view.buttonGradient, boxShadow: `0 0 20px ${accent}40` }}
          >
            <span>Explore {data.code} Track</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary Actions: Syllabus & WhatsApp */}
          <div className="flex items-center justify-between px-1 text-[11px] sm:text-xs">
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

export const FlagshipProgramsShowcase: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

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
        {/* Section Editorial Header */}
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

        {/* Three coordinated editorial columns */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 lg:gap-x-7 xl:gap-x-9 items-stretch">
          <ProgramShowcase
            view={crpc}
            className="lg:pr-3"
            onSyllabus={() => openCurriculum('crpc')}
            onEnquire={() => openWhatsApp(getCRPCEnquiryMessage())}
          />

          <ProgramShowcase
            view={daap}
            className="pt-10 border-t border-white/10 lg:pt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8 lg:pr-3"
            onSyllabus={() => openCurriculum('daap')}
            onEnquire={() => openWhatsApp(getDAAPEnquiryMessage())}
          />

          <ProgramShowcase
            view={fde}
            className="pt-10 border-t border-white/10 lg:pt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8"
            onSyllabus={() => openCurriculum('fde')}
            onEnquire={() => openWhatsApp(getFDEEnquiryMessage())}
          />
        </div>
      </section>
    </SectionAtmosphere>
  );
};
