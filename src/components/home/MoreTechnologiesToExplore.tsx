import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { SECONDARY_COURSES } from '@/data/coursesData';
import {
  JavaLogo,
  PythonLogo,
  CLogo,
  DsaLogo,
  ReactLogo,
  Html5Logo,
  DbmsLogo,
  NetworksLogo,
} from '@/components/icons/TechLogos';
import { openWhatsApp } from '@/utils/whatsapp';

export const MoreTechnologiesToExplore: React.FC = () => {
  const getCourseLogo = (id: string, className = 'w-7 h-7') => {
    switch (id) {
      case 'java':
        return <JavaLogo className={className} />;
      case 'python':
        return <PythonLogo className={className} />;
      case 'c':
        return <CLogo className={className} />;
      case 'dsa':
        return <DsaLogo className={className} />;
      case 'fullstack':
        return <ReactLogo className={className} />;
      case 'frontend':
        return <Html5Logo className={className} />;
      case 'dbms':
        return <DbmsLogo className={className} />;
      case 'networks':
        return <NetworksLogo className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section className="space-y-10">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B63]/80 border border-[#19BCE8]/40 text-[#19BCE8] text-xs font-bold uppercase tracking-wider shadow-xs">
          <Compass className="w-4 h-4 text-[#19BCE8]" />
          <span>Foundations &amp; Specialized Disciplines</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
          More Technologies to Explore
        </h2>
        <p className="text-[#DCE5F2] text-sm sm:text-base leading-relaxed">
          Complement our flagship accelerators with dedicated mastery tracks in core programming languages, systems engineering, problem solving, and modern web application development.
        </p>
      </div>

      {/* Grid of 8 Secondary Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SECONDARY_COURSES.map((course) => {
          return (
            <div
              key={course.id}
              className="group relative bg-[#071B63]/75 backdrop-blur-xl border border-[#19BCE8]/25 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#19BCE8]/60 shadow-xl"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-md transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                style={{ backgroundColor: course.accentColor }}
              />

              <div className="space-y-4">
                {/* Logo & Category Row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="w-12 h-12 rounded-2xl bg-[#05143A] flex items-center justify-center border border-[#19BCE8]/30 group-hover:scale-105 transition-transform shadow-xs">
                    {getCourseLogo(course.id, 'w-6 h-6')}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#05143A] text-[#19BCE8] border border-[#19BCE8]/30">
                    {course.category}
                  </span>
                </div>

                {/* Course Name & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {course.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-bold mt-0.5">
                    {course.tagline}
                  </div>
                </div>

                {/* Parent-Friendly Explanation */}
                <p className="text-xs text-[#DCE5F2] leading-relaxed font-normal">
                  {course.parentExplanation}
                </p>

                {/* Core Topics / Tools */}
                <div className="pt-2 border-t border-[#19BCE8]/20">
                  <div className="text-[10px] font-mono font-bold text-[#B4C3DB] uppercase tracking-wider mb-2">
                    Key Topics Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#05143A]/90 border border-[#19BCE8]/20 text-slate-200 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Explore */}
              <div className="pt-5 mt-4 border-t border-[#19BCE8]/20 flex flex-col gap-2">
                <button
                  onClick={() => openWhatsApp(course.whatsappUrl)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire via WhatsApp</span>
                </button>

                <Link
                  to="/courses"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 text-xs font-bold transition-colors cursor-pointer border border-transparent hover:border-[#19BCE8]/30"
                >
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
