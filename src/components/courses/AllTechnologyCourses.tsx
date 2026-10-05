import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Brain,
  Info,
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
} from '@/components/icons/TechLogos';
import { openWhatsApp } from '@/utils/whatsapp';

interface CourseVisualConfig {
  gradient: string;
  border: string;
  shadow: string;
  accentText: string;
  tagBorder: string;
  imagePosition: string;
}

const COURSE_VISUAL_CONFIGS: Record<string, CourseVisualConfig> = {
  java: {
    gradient: 'bg-gradient-to-b from-[#1C0E07]/95 via-[#0E0B1F]/98 to-[#050614]/98',
    border: 'border-[#ED8B00]/30 hover:border-[#ED8B00]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(237,139,0,0.22)]',
    accentText: 'text-[#F59E0B]',
    tagBorder: 'border-[#ED8B00]/40 text-[#F59E0B] bg-[#1C0E07]/80',
    imagePosition: 'object-center',
  },
  python: {
    gradient: 'bg-gradient-to-b from-[#081B34]/95 via-[#061026]/98 to-[#030816]/98',
    border: 'border-[#38BDF8]/30 hover:border-[#38BDF8]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(56,189,248,0.22)]',
    accentText: 'text-[#38BDF8]',
    tagBorder: 'border-[#38BDF8]/40 text-[#38BDF8] bg-[#081B34]/80',
    imagePosition: 'object-center',
  },
  c: {
    gradient: 'bg-gradient-to-b from-[#0A1838]/95 via-[#07102A]/98 to-[#040818]/98',
    border: 'border-[#0077D4]/30 hover:border-[#0077D4]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(0,119,212,0.22)]',
    accentText: 'text-[#60A5FA]',
    tagBorder: 'border-[#60A5FA]/40 text-[#60A5FA] bg-[#0A1838]/80',
    imagePosition: 'object-center',
  },
  dsa: {
    gradient: 'bg-gradient-to-b from-[#180C33]/95 via-[#100726]/98 to-[#060316]/98',
    border: 'border-[#A855F7]/30 hover:border-[#A855F7]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)]',
    accentText: 'text-[#C084FC]',
    tagBorder: 'border-[#C084FC]/40 text-[#C084FC] bg-[#180C33]/80',
    imagePosition: 'object-center',
  },
  frontend: {
    gradient: 'bg-gradient-to-b from-[#071F3B]/95 via-[#05132A]/98 to-[#030918]/98',
    border: 'border-[#00D2FF]/30 hover:border-[#00D2FF]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(0,210,255,0.22)]',
    accentText: 'text-[#00D2FF]',
    tagBorder: 'border-[#00D2FF]/40 text-[#00D2FF] bg-[#071F3B]/80',
    imagePosition: 'object-center',
  },
  fullstack: {
    gradient: 'bg-gradient-to-b from-[#08222B]/95 via-[#05161E]/98 to-[#030A12]/98',
    border: 'border-[#10B981]/30 hover:border-[#10B981]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(16,185,129,0.22)]',
    accentText: 'text-[#34D399]',
    tagBorder: 'border-[#10B981]/40 text-[#34D399] bg-[#08222B]/80',
    imagePosition: 'object-center',
  },
  dbms: {
    gradient: 'bg-gradient-to-b from-[#081B3C]/95 via-[#05122A]/98 to-[#020818]/98',
    border: 'border-[#3B82F6]/30 hover:border-[#3B82F6]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(59,130,246,0.22)]',
    accentText: 'text-[#60A5FA]',
    tagBorder: 'border-[#3B82F6]/40 text-[#60A5FA] bg-[#081B3C]/80',
    imagePosition: 'object-center',
  },
  networks: {
    gradient: 'bg-gradient-to-b from-[#0E1740]/95 via-[#080F2A]/98 to-[#040718]/98',
    border: 'border-[#6366F1]/30 hover:border-[#6366F1]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(99,102,241,0.22)]',
    accentText: 'text-[#818CF8]',
    tagBorder: 'border-[#6366F1]/40 text-[#818CF8] bg-[#0E1740]/80',
    imagePosition: 'object-center',
  },
  cybersecurity: {
    gradient: 'bg-gradient-to-b from-[#260B18]/95 via-[#180714]/98 to-[#0B030B]/98',
    border: 'border-[#F43F5E]/30 hover:border-[#F43F5E]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(244,63,94,0.22)]',
    accentText: 'text-[#FB7185]',
    tagBorder: 'border-[#F43F5E]/40 text-[#FB7185] bg-[#260B18]/80',
    imagePosition: 'object-center',
  },
  genai: {
    gradient: 'bg-gradient-to-b from-[#1A0D38]/95 via-[#11082A]/98 to-[#070316]/98',
    border: 'border-[#8B5CF6]/30 hover:border-[#8B5CF6]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(139,92,246,0.22)]',
    accentText: 'text-[#A78BFA]',
    tagBorder: 'border-[#8B5CF6]/40 text-[#A78BFA] bg-[#1A0D38]/80',
    imagePosition: 'object-center',
  },
  agenticai: {
    gradient: 'bg-gradient-to-b from-[#0A203E]/95 via-[#07152B]/98 to-[#030918]/98',
    border: 'border-[#06B6D4]/30 hover:border-[#06B6D4]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(6,182,212,0.22)]',
    accentText: 'text-[#22D3EE]',
    tagBorder: 'border-[#06B6D4]/40 text-[#22D3EE] bg-[#0A203E]/80',
    imagePosition: 'object-center',
  },
  prompteng: {
    gradient: 'bg-gradient-to-b from-[#220A32]/95 via-[#150622]/98 to-[#090214]/98',
    border: 'border-[#D946EF]/30 hover:border-[#D946EF]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(217,70,239,0.22)]',
    accentText: 'text-[#E879F9]',
    tagBorder: 'border-[#D946EF]/40 text-[#E879F9] bg-[#220A32]/80',
    imagePosition: 'object-center',
  },
  deeplearning: {
    gradient: 'bg-gradient-to-b from-[#180E3C]/95 via-[#0F0829]/98 to-[#060316]/98',
    border: 'border-[#6366F1]/30 hover:border-[#6366F1]/70',
    shadow: 'hover:shadow-[0_16px_40px_rgba(99,102,241,0.22)]',
    accentText: 'text-[#818CF8]',
    tagBorder: 'border-[#6366F1]/40 text-[#818CF8] bg-[#180E3C]/80',
    imagePosition: 'object-center',
  },
};

const getCourseLogo = (id: string, className = 'w-8 h-8') => {
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
    default:
      return <Sparkles className={className} />;
  }
};

const TechnologyCourseCard: React.FC<{ course: (typeof SECONDARY_COURSES)[0] }> = ({ course }) => {
  const visual = COURSE_VISUAL_CONFIGS[course.id] || {
    gradient: 'bg-gradient-to-b from-[#071B63]/90 via-[#051336]/95 to-[#030B1C]/98',
    border: 'border-[#19BCE8]/30 hover:border-[#19BCE8]/70',
    shadow: 'hover:shadow-blue-900/30',
    accentText: 'text-cyan-400',
    tagBorder: 'border-[#19BCE8]/30 text-[#19BCE8] bg-[#051336]/80',
    imagePosition: 'object-center',
  };

  const imageSrc = `/brand/courses/${course.id}.png`;

  return (
    <div
      className={`group relative ${visual.gradient} backdrop-blur-xl border ${visual.border} rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${visual.shadow} shadow-xl`}
    >
      <div>
        {/* Visual Artwork / Branded Architecture Header */}
        <div className="relative aspect-[16/10] min-h-[160px] sm:min-h-[175px] w-full overflow-hidden bg-[#030816] border-b border-white/10">
          <img
            src={imageSrc}
            alt={course.name}
            className={`w-full h-full object-cover ${visual.imagePosition} group-hover:scale-105 transition-transform duration-700 ease-out`}
            loading="lazy"
          />

          {/* Controlled Subtle Gradient / Vignette Integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-black/25 pointer-events-none" />

          {/* Floating Top Elements */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-20 pointer-events-none">
            {/* Primary Technology Logo Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/95 border border-white/80 p-1.5 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
              {getCourseLogo(course.id, 'w-6 h-6 sm:w-7 sm:h-7 object-contain')}
            </div>

            {/* Category Badge */}
            <span
              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border ${visual.tagBorder} shadow-xs`}
            >
              {course.category}
            </span>
          </div>
        </div>

        {/* Card Content Body - Clean & Minimal */}
        <div className="p-4 sm:p-5 space-y-1">
          <h3 className="text-base sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors font-heading leading-snug">
            {course.name}
          </h3>
          <div className={`text-xs font-mono font-bold tracking-wide ${visual.accentText}`}>
            {course.tagline}
          </div>
        </div>
      </div>

      {/* Action Buttons: View Curriculum & WhatsApp Enquiry */}
      <div className="p-4 sm:p-5 pt-1 space-y-2 border-t border-white/10">
        <button
          onClick={() => openWhatsApp(course.whatsappUrl)}
          className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 text-xs font-bold transition-all cursor-pointer border border-white/10 hover:border-[#00D2FF]/40 group"
        >
          <span>View Curriculum</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#00D2FF]" />
        </button>

        <button
          onClick={() => openWhatsApp(course.whatsappUrl)}
          className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white font-semibold text-xs backdrop-blur-md shadow-xs transition-all group cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:scale-110" />
          <span>Enquire via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export const AllTechnologyCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tracks (13)', icon: Layers },
    { id: 'core', label: 'Programming & Systems', icon: Code2 },
    { id: 'web', label: 'Web & Full Stack', icon: Cpu },
    { id: 'ai', label: 'AI, ML & Security', icon: Brain },
  ];

  const filteredCourses = SECONDARY_COURSES.filter((course) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'core') {
      return ['java', 'python', 'c', 'dsa', 'dbms', 'networks'].includes(course.id);
    }
    if (activeCategory === 'web') {
      return ['frontend', 'fullstack'].includes(course.id);
    }
    if (activeCategory === 'ai') {
      return ['cybersecurity', 'genai', 'agenticai', 'prompteng', 'deeplearning'].includes(course.id);
    }
    return true;
  });

  return (
    <section className="space-y-8 sm:space-y-10" id="specialized-tracks">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B63]/80 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider shadow-xs">
          <Compass className="w-4 h-4 text-[#00D2FF]" />
          <span>Complete Technology Catalog</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
          Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#19BCE8]">Technology Courses</span>
        </h2>
        <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Master focused technical disciplines with dedicated tracks in core programming languages, systems engineering, problem solving, modern web application development, and AI engineering.
        </p>

        {/* Business Positioning Notice */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#08183B]/80 border border-white/15 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed shadow-sm text-left flex items-start gap-3">
          <Info className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white">Program Positioning: </span>
            Individual courses are focused on technology fundamentals, guided practice, and project building. Comprehensive career preparation, dedicated mentorship, and structured accelerator benefits are exclusive to our flagship <Link to="/courses/crpc" className="text-[#00D2FF] font-semibold hover:underline">CRPC</Link> and <Link to="/courses/daap" className="text-[#FF7A00] font-semibold hover:underline">DAAP</Link> programs.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:pt-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00D2FF] text-[#03091A] shadow-[0_0_20px_rgba(0,210,255,0.4)] scale-105'
                    : 'bg-[#071530]/80 text-slate-300 hover:text-white hover:bg-[#0C1F45]/90 border border-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#03091A]' : 'text-[#00D2FF]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 13 Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
        {filteredCourses.map((course) => (
          <TechnologyCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
