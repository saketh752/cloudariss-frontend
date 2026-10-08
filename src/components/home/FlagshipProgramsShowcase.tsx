import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Download, MessageCircle } from 'lucide-react';
import { BRAND_DATA, ProgramInfo } from '@/data/brandData';
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

/* ========================================================================= */
/* Editorial program showcase                                                */
/* Image + typography + open space + hairlines. No outer card, no pills.      */
/* ========================================================================= */

interface ProgramView {
  code: 'crpc' | 'daap';
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
}

const LOGO = 'w-[18px] h-[18px] shrink-0 object-contain';

// Feather the artwork on every edge so it dissolves into the Cloudariss atmosphere
const FEATHER_MASK: React.CSSProperties = {
  maskImage:
    'linear-gradient(to bottom, #000 0%, #000 42%, transparent 100%), linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%)',
  maskComposite: 'intersect',
  WebkitMaskImage:
    'linear-gradient(to bottom, #000 0%, #000 42%, transparent 100%), linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%)',
  WebkitMaskComposite: 'source-in',
};

const ProgramShowcase: React.FC<{
  view: ProgramView;
  className?: string;
  onSyllabus: () => void;
  onEnquire: () => void;
}> = ({ view, className = '', onSyllabus, onEnquire }) => {
  const { data, accent } = view;

  const facts = [
    { label: 'Duration', value: data.duration },
    { label: 'Structure', value: data.modulesCount },
    { label: 'Format', value: data.format },
  ];

  return (
    <article className={`group relative flex flex-col ${className}`}>
      {/* Artwork — bleeds edge-to-edge on mobile, feathered into the background */}
      <div
        className="relative -mx-4 sm:mx-0 h-56 sm:h-72 lg:h-64 xl:h-72 overflow-hidden"
        style={FEATHER_MASK}
      >
        <img
          src={view.image}
          alt={view.alt}
          className="absolute inset-0 w-full h-full object-cover object-[center_32%] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Typography overlaps the faded lower edge of the artwork */}
      <div className="relative -mt-14 sm:-mt-20 lg:-mt-16 flex-1 flex flex-col">
        {/* Program identity — typographic label, not a pill */}
        <div className="flex items-center gap-3">
          <span
            className="font-mono font-black text-sm tracking-[0.32em]"
            style={{ color: accent }}
          >
            {data.code}
          </span>
          <span className="h-px w-8 shrink-0" style={{ background: accent, opacity: 0.55 }} />
          <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
            12-Week Career Accelerator
          </span>
        </div>

        <h3 className="mt-3 text-3xl sm:text-4xl font-black font-heading tracking-tight leading-[1.08] text-white [text-shadow:0_2px_18px_rgba(2,8,23,0.85)]">
          <span style={{ color: accent }}>{view.titleAccent}</span> {view.titleRest}
        </h3>

        {/* Placement assistance — a program-level statement, integrated in the header area */}
        <div className="mt-4 flex items-center gap-2.5">
          <BadgeCheck className="w-5 h-5 shrink-0" style={{ color: accent }} />
          <p
            className="font-heading font-extrabold text-base sm:text-lg tracking-tight"
            style={{ color: accent }}
          >
            100% Placement Assistance Included
          </p>
        </div>

        <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#CBD5E1] max-w-xl">
          {data.description}
        </p>

        {/* Key facts — typography with a hairline rule, no boxes */}
        <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
          {facts.map((f) => (
            <div key={f.label} className="border-l pl-3.5" style={{ borderColor: `${accent}66` }}>
              <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400">
                {f.label}
              </dt>
              <dd className="mt-0.5 text-sm font-semibold text-white">{f.value}</dd>
            </div>
          ))}
        </dl>

        {/* Technology signature — small logos + clean labels */}
        <div className="mt-6">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400">
            Core Technologies Mastered
          </p>
          <ul className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2.5">
            {view.techs.map((t) => (
              <li key={t.name} className="flex items-center gap-2 text-[13px] font-medium text-slate-100">
                {t.logo}
                <span>{t.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary detail — muted, lower visual weight */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400">
            Career Curriculum Highlights
          </p>
          <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {data.features.slice(0, 4).map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 text-[13px] leading-snug text-slate-300">
                <span
                  className="mt-[7px] h-1 w-1 rounded-full shrink-0"
                  style={{ background: accent }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions — one primary button, two quiet text actions */}
        <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            to={view.to}
            className="group/cta inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg text-white font-black text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundImage: view.buttonGradient, boxShadow: `0 0 24px ${accent}55` }}
          >
            <span>Explore {data.code} Track</span>
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1.5 transition-transform duration-300" />
          </Link>

          <button
            type="button"
            onClick={onSyllabus}
            className="inline-flex items-center gap-2 pb-0.5 text-sm font-bold text-white border-b border-white/30 hover:border-white transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" style={{ color: accent }} />
            <span>Download Syllabus</span>
          </button>

          <button
            type="button"
            onClick={onEnquire}
            className="inline-flex items-center gap-2 pb-0.5 text-sm font-bold text-[#6EE7A0] hover:text-white border-b border-[#25D366]/40 hover:border-white transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Enquire via WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export const FlagshipProgramsShowcase: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  const crpcData = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daapData = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

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
      { name: 'ServiceNow', logo: <ServiceNowLogo className="h-4 w-auto shrink-0" /> },
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
  };

  return (
    <SectionAtmosphere variant="programs">
      <section className="space-y-10 sm:space-y-14" id="flagship-programs">
        {/* Section Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Our Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Programs</span>
          </h2>
          <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Deep, production-grounded 12-week career accelerators engineered to transition learners into capable, verifiable technology practitioners.
          </p>
        </div>

        {/* Two open editorial compositions separated by a single hairline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-16">
          <ProgramShowcase
            view={crpc}
            className="lg:pr-10 xl:pr-14"
            onSyllabus={() => openCurriculum('crpc')}
            onEnquire={() => openWhatsApp(getCRPCEnquiryMessage())}
          />

          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-6 left-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />

          <ProgramShowcase
            view={daap}
            className="pt-16 border-t border-white/10 lg:pt-0 lg:border-t-0 lg:pl-10 xl:pl-14"
            onSyllabus={() => openCurriculum('daap')}
            onEnquire={() => openWhatsApp(getDAAPEnquiryMessage())}
          />
        </div>
      </section>
    </SectionAtmosphere>
  );
};
