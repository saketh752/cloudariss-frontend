import React from 'react';

interface RotatingBadgesProps {
  className?: string;
}

export const RotatingBadges: React.FC<RotatingBadgesProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-[360px] sm:max-w-[500px] lg:max-w-[560px] mx-auto select-none ${className}`}
      style={{ perspective: '1100px' }}
      aria-label="Interactive 360-degree rotating Cloudariss LinkedIn achievement badges"
    >
      {/* Background ambient lighting and orbital guide tracks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10"
      >
        {/* Soft radial glow capped at 30% opacity */}
        <div
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, rgba(8, 120, 232, 0.08) 45%, transparent 70%)',
          }}
        />

        {/* Outer subtle orbital track ring with 3D tilt aligned to orbit plane */}
        <div
          className="absolute w-[300px] h-[120px] sm:w-[420px] sm:h-[145px] lg:w-[470px] lg:h-[155px] rounded-[100%] border border-cyan-500/20"
          style={{
            transform: 'rotateX(72deg)',
            boxShadow: '0 0 25px rgba(0, 210, 255, 0.08)',
          }}
        />

        {/* Inner subtle orbital track ring */}
        <div
          className="absolute w-[230px] h-[95px] sm:w-[320px] sm:h-[115px] lg:w-[360px] lg:h-[125px] rounded-[100%] border border-white/[0.08]"
          style={{
            transform: 'rotateX(72deg)',
          }}
        />
      </div>

      {/* 3D Revolving Stage */}
      <div className="relative h-[300px] sm:h-[350px] lg:h-[380px] w-full flex items-center justify-center">
        <div
          className="badges-carousel-stage relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* BADGE 1: Certified Cloud & Platform Engineer */}
          <div
            className="badge-orbital-slot badge-orbital-slot-1 absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="badge-item-counter-rotate group relative pointer-events-auto flex items-center justify-center">
              <div
                className="w-[145px] sm:w-[190px] lg:w-[210px] aspect-square transition-transform duration-300 group-hover:scale-105"
                style={{
                  filter:
                    'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.65)) drop-shadow(0 4px 12px rgba(0, 210, 255, 0.30))',
                }}
              >
                <img
                  src="/brand/credentials/cloudariss-certified-cloud-platform-engineer.png"
                  alt="Cloudariss Certified Cloud & Platform Engineer Badge (CFP Level 1)"
                  className="w-full h-full object-contain pointer-events-none select-none block"
                  loading="eager"
                  draggable={false}
                />
              </div>

              {/* Minimal caption positioned neatly below without shifting artwork center */}
              <div className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <span className="inline-block text-[11px] sm:text-xs font-semibold text-slate-200 bg-[#020817]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm whitespace-nowrap">
                  Cloud &amp; Platform Engineer
                </span>
              </div>
            </div>
          </div>

          {/* BADGE 2: Certified AI Engineer */}
          <div
            className="badge-orbital-slot badge-orbital-slot-2 absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="badge-item-counter-rotate group relative pointer-events-auto flex items-center justify-center">
              <div
                className="w-[145px] sm:w-[190px] lg:w-[210px] aspect-square transition-transform duration-300 group-hover:scale-105"
                style={{
                  filter:
                    'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.65)) drop-shadow(0 4px 12px rgba(0, 229, 153, 0.30))',
                }}
              >
                <img
                  src="/brand/credentials/cloudariss-certified-ai-engineer.png"
                  alt="Cloudariss Certified AI Engineer Badge (DAAP Level 1)"
                  className="w-full h-full object-contain pointer-events-none select-none block"
                  loading="eager"
                  draggable={false}
                />
              </div>

              {/* Minimal caption positioned neatly below without shifting artwork center */}
              <div className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <span className="inline-block text-[11px] sm:text-xs font-semibold text-slate-200 bg-[#020817]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm whitespace-nowrap">
                  Certified AI Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

