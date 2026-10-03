import React from 'react';

export type SectionAtmosphereVariant =
  | 'programs'
  | 'why-cloudariss'
  | 'technology'
  | 'projects'
  | 'career'
  | 'cta'
  | 'default';

interface SectionAtmosphereProps {
  variant?: SectionAtmosphereVariant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * SectionAtmosphere
 * 
 * Provides localized atmospheric lighting and data-flow accents per section:
 * - Harmonizes with the global Cloudariss digital horizon background
 * - Prevents flat navy rectangles while never repeating pasted photo fragments
 * - Maintains ample negative space for 100% text readability
 */
export const SectionAtmosphere: React.FC<SectionAtmosphereProps> = ({
  variant = 'default',
  className = '',
  children,
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background Atmosphere Layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
      >
        {/* Variant: TECHNOLOGY ("Technology Universe" & "More Technologies to Explore") */}
        {variant === 'technology' && (
          <>
            {/* Ambient Cyan Wash on Upper Left */}
            <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-[#19BCE8]/12 rounded-full blur-[130px]" />
            {/* Soft Warm Horizon Glow on Lower Right */}
            <div className="absolute -bottom-20 -right-20 w-[480px] h-[380px] bg-[#FF7A00]/12 rounded-full blur-[140px]" />

            {/* Faint Technology Network Data Streams */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <path
                d="M -50 150 C 350 250, 750 80, 1250 220"
                fill="none"
                stroke="#19BCE8"
                strokeWidth="1.2"
                strokeDasharray="6 12"
              />
              <path
                d="M 50 480 C 450 380, 850 520, 1250 420"
                fill="none"
                stroke="#FF7A00"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="8 16"
              />
              <circle cx="350" cy="250" r="3" fill="#19BCE8" opacity="0.6" />
              <circle cx="750" cy="80" r="2.5" fill="#19BCE8" opacity="0.5" />
              <circle cx="850" cy="520" r="3" fill="#FF7A00" opacity="0.6" />
            </svg>
          </>
        )}

        {/* Variant: PROGRAMS (Cloud & Infrastructure Atmosphere) */}
        {variant === 'programs' && (
          <>
            <div className="absolute -top-24 left-1/4 w-[520px] h-[400px] bg-[#0878E8]/14 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#19BCE8]/10 rounded-full blur-[110px]" />
          </>
        )}

        {/* Variant: WHY-CLOUDARISS (Connected Network & Career Pathways) */}
        {variant === 'why-cloudariss' && (
          <>
            <div className="absolute top-1/3 -right-24 w-[480px] h-[480px] bg-[#0878E8]/12 rounded-full blur-[130px]" />
            <div className="absolute -bottom-20 -left-10 w-[420px] h-[420px] bg-[#19BCE8]/10 rounded-full blur-[120px]" />
            <svg
              className="absolute inset-0 w-full h-full opacity-25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 500"
            >
              <line x1="100" y1="100" x2="900" y2="400" stroke="#19BCE8" strokeWidth="1" strokeDasharray="4 8" />
              <line x1="100" y1="400" x2="900" y2="100" stroke="#0878E8" strokeWidth="0.8" strokeDasharray="6 12" />
            </svg>
          </>
        )}

        {/* Variant: PROJECTS (Engineering Blueprint & Infrastructure Depth) */}
        {variant === 'projects' && (
          <>
            <div className="absolute -top-16 right-1/3 w-[520px] h-[380px] bg-[#0878E8]/14 rounded-full blur-[130px]" />
            <div className="absolute -bottom-24 left-12 w-96 h-96 bg-[#19BCE8]/12 rounded-full blur-[110px]" />
          </>
        )}

        {/* Variant: CAREER (Directional Pathway & Light Trail) */}
        {variant === 'career' && (
          <>
            <div className="absolute top-1/2 left-1/4 w-[450px] h-[340px] bg-[#FF7A00]/12 rounded-full blur-[130px]" />
            <div className="absolute -top-10 right-20 w-96 h-96 bg-[#19BCE8]/14 rounded-full blur-[110px]" />
          </>
        )}

        {/* Variant: CTA (Atmospheric Sunset Horizon Treatment) */}
        {variant === 'cta' && (
          <>
            <div className="absolute -top-32 right-1/4 w-[550px] h-[450px] bg-[#19BCE8]/22 rounded-full blur-[140px]" />
            <div className="absolute -bottom-20 left-1/4 w-[600px] h-[500px] bg-[#FF7A00]/25 rounded-full blur-[150px]" />
          </>
        )}

        {/* Variant: DEFAULT (Subtle Ambient Glow) */}
        {variant === 'default' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#0878E8]/10 rounded-full blur-[150px]" />
        )}
      </div>

      {/* Render actual content on top */}
      {children}
    </div>
  );
};
