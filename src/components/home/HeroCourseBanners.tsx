import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Copy } from 'lucide-react';

/* ========================================================================= */
/* 1. CRPC 16:9 PROMOTIONAL COURSE BANNER                                    */
/* ========================================================================= */
export const CrpcBanner16x9: React.FC = () => {
  return (
    <Link
      to="/courses/crpc"
      className="relative block w-[320px] sm:w-[440px] md:w-[500px] lg:w-[540px] xl:w-[580px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden border border-brand-cyan/35 shadow-2xl bg-gradient-to-br from-[#06143D] via-[#09225E] to-[#040D27] text-white p-4 sm:p-5 group select-none transition-all duration-300 hover:scale-[1.015] hover:border-brand-cyan/70 hover:shadow-cyan-500/20"
      title="Explore CRPC — Cloud & Data Career Accelerator"
    >
      {/* Ambient background glow & technical grid */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-brand-blue/25 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#19bce808_1px,transparent_1px),linear-gradient(to_bottom,#19bce808_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/brand/cloudariss-logo.png"
              alt="Cloudariss"
              className="h-4.5 sm:h-5 w-auto object-contain brightness-0 invert"
            />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#19BCE8] font-bold uppercase">
              CLOUD &amp; DATA
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
            ★ Most Popular
          </span>
        </div>

        {/* Center Content Split */}
        <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center my-auto">
          <div className="col-span-8 space-y-1 sm:space-y-1.5">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-white group-hover:text-[#19BCE8] transition-colors">
                CRPC
              </h3>
              <span className="text-xs sm:text-sm font-bold text-slate-300">
                Career Accelerator
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
              Master AWS Cloud, Docker, Kubernetes &amp; DevOps CI/CD with real production labs.
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {['AWS', 'Docker', 'K8s', 'Jenkins', 'Python'].map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[9px] sm:text-[10px] font-mono text-cyan-200 font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-4 flex justify-center items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-xl animate-pulse" />
              <img
                src="/brand/banners/cloud-server-clean.png"
                alt="Cloud Server Infrastructure"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(25,188,232,0.4)] transform group-hover:scale-105 transition-transform"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/10 text-[10px] sm:text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <span>⏱ 12 Weeks</span>
            <span>•</span>
            <span>💻 100% Live</span>
            <span>•</span>
            <span className="hidden sm:inline">🏢 Virtual Sessions</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[#19BCE8] font-bold group-hover:translate-x-0.5 transition-transform">
            <span>Explore CRPC</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

/* ========================================================================= */
/* 2. DAAP 16:9 PROMOTIONAL COURSE BANNER                                    */
/* ========================================================================= */
export const DaapBanner16x9: React.FC = () => {
  return (
    <Link
      to="/courses/daap"
      className="relative block w-[320px] sm:w-[440px] md:w-[500px] lg:w-[540px] xl:w-[580px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden border border-brand-blue/40 shadow-2xl bg-gradient-to-br from-[#061D4D] via-[#0B3B8A] to-[#04112E] text-white p-4 sm:p-5 group select-none transition-all duration-300 hover:scale-[1.015] hover:border-brand-cyan/70 hover:shadow-blue-500/20"
      title="Explore DAAP — Data Analyst Accelerator Program"
    >
      {/* Ambient background glow & technical grid */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-blue/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0878e808_1px,transparent_1px),linear-gradient(to_bottom,#0878e808_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/brand/cloudariss-logo.png"
              alt="Cloudariss"
              className="h-4.5 sm:h-5 w-auto object-contain brightness-0 invert"
            />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-cyan-300 font-bold uppercase">
              AI &amp; ANALYTICS
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 text-[#19BCE8] text-[10px] font-extrabold uppercase tracking-wider">
            ⚡ GenAI &amp; Agentic
          </span>
        </div>

        {/* Center Content Split */}
        <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center my-auto">
          <div className="col-span-8 space-y-1 sm:space-y-1.5">
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                DAAP
              </h3>
              <span className="text-xs sm:text-sm font-bold text-slate-300">
                Data Analyst Accelerator
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
              Turn data into decisions with Python, SQL DBs, Power BI &amp; Generative AI agent systems.
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {['Python', 'SQL', 'Power BI', 'Excel', 'Agentic AI'].map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-[9px] sm:text-[10px] font-mono text-cyan-100 font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-4 flex justify-center items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-blue/30 rounded-full blur-xl animate-pulse" />
              <img
                src="/brand/banners/analytics-laptop-clean.png"
                alt="Analytics & AI Laptop"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(8,120,232,0.5)] transform group-hover:scale-105 transition-transform"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/10 text-[10px] sm:text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <span>⏱ 12 Weeks</span>
            <span>•</span>
            <span>📊 5+ Projects</span>
            <span>•</span>
            <span className="hidden sm:inline">🎯 Placement Ready</span>
          </div>
          <span className="inline-flex items-center gap-1 text-cyan-300 font-bold group-hover:translate-x-0.5 transition-transform">
            <span>Explore DAAP</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

/* ========================================================================= */
/* 3. VINAYAKA CHAVITHI SPECIAL OFFER 16:9 PROMOTIONAL BANNER                */
/* ========================================================================= */
export const OfferBanner16x9: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('CAT@AKHI');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleOfferClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('offer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleOfferClick}
      className="relative block w-[320px] sm:w-[440px] md:w-[500px] lg:w-[540px] xl:w-[580px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden border border-brand-orange/50 shadow-2xl bg-gradient-to-br from-[#06143D] via-[#091B4C] to-[#040D27] text-white p-4 sm:p-5 group select-none transition-all duration-300 hover:scale-[1.015] hover:border-brand-orange/80 cursor-pointer"
      title="Vinayaka Chavithi Special Offer — Click to view offer details"
    >
      {/* Ambient festive orange highlights */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/25 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff7a0008_1px,transparent_1px),linear-gradient(to_bottom,#ff7a0008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/brand/cloudariss-logo.png"
              alt="Cloudariss"
              className="h-4.5 sm:h-5 w-auto object-contain brightness-0 invert"
            />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-brand-orange font-bold uppercase">
              FESTIVE SPECIAL
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
            ₹17,000 Offer
          </span>
        </div>

        {/* Center Content Split */}
        <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center my-auto">
          <div className="col-span-7 space-y-1 sm:space-y-1.5">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 tracking-wider uppercase block">
                Vinayaka Chavithi
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading tracking-tight text-white group-hover:text-brand-orange transition-colors leading-tight">
                Special Offer
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
              Flagship Cloud &amp; Data career programs at an all-inclusive festive cohort fee.
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-slate-400 text-xs line-through">₹45,000</span>
              <span className="text-base sm:text-lg font-black text-white font-heading">₹17,000</span>
              <button
                type="button"
                onClick={handleCopy}
                className="ml-1 px-2 py-0.5 rounded bg-brand-orange/20 border border-brand-orange/50 hover:bg-brand-orange text-white text-[10px] font-mono font-bold transition-all flex items-center gap-1"
                title="Copy Code CAT@AKHI"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-300" />}
                <span>{copied ? 'Copied' : 'CAT@AKHI'}</span>
              </button>
            </div>
          </div>

          <div className="col-span-5 flex justify-center items-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-xl animate-pulse" />
              <img
                src="/brand/banners/vinayaka-3d-card.jpg"
                alt="Vinayaka Chavithi Minimal 3D Ganesha Sculpture"
                className="w-full h-full object-cover object-right rounded-xl shadow-lg border border-brand-orange/30 transform group-hover:scale-105 transition-transform"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/10 text-[10px] sm:text-[11px] font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <span>⚡ Limited Seats</span>
            <span>•</span>
            <span>100% Live Mentorship</span>
          </div>
          <span className="inline-flex items-center gap-1 text-brand-orange font-bold group-hover:translate-x-0.5 transition-transform">
            <span>Claim Offer</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 4. POSTER-AFTER-POSTER HORIZONTAL SCROLLING SHOWCASE                      */
/*    Single Stream • Mouse Drag • Mouse Scroll • Delayed Calm Timing        */
/* ========================================================================= */
export const HeroCourseBanners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const animFrameRef = useRef<number | null>(null);

  // Calm, relaxed speed: 0.65px per frame gives a steady, readable pace
  const scrollSpeed = 0.65;

  // Auto-scroll loop with seamless wrap
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tick = () => {
      if (containerRef.current && !isHovered && !isDragging) {
        const container = containerRef.current;
        container.scrollLeft += scrollSpeed;

        // Wrap around when past half content
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered, isDragging]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollStart(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.4; // Tactile drag response
    const container = containerRef.current;
    container.scrollLeft = scrollStart - walk;

    // Boundary wrap during drag
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
      setScrollStart(container.scrollLeft);
      setStartX(x);
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += container.scrollWidth / 2;
      setScrollStart(container.scrollLeft);
      setStartX(x);
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Wheel / Trackpad horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    if (!containerRef.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY * 0.7;
    containerRef.current.scrollLeft += delta;

    if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
      containerRef.current.scrollLeft -= containerRef.current.scrollWidth / 2;
    } else if (containerRef.current.scrollLeft <= 0) {
      containerRef.current.scrollLeft += containerRef.current.scrollWidth / 2;
    }
  };

  const posterList = [
    <CrpcBanner16x9 key="crpc-banner" />,
    <DaapBanner16x9 key="daap-banner" />,
    <OfferBanner16x9 key="offer-banner" />,
  ];

  return (
    <div className="relative w-full overflow-hidden select-none py-1 group">
      {/* Edge Gradient Fade Masks */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#06143D] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#06143D] to-transparent z-20" />

      {/* Poster-After-Poster Scroll Track */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onWheel={handleWheel}
        className={`flex items-center gap-4 sm:gap-6 overflow-x-hidden no-scrollbar py-2 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollBehavior: 'auto' }}
      >
        {/* First full set of posters */}
        {posterList}
        {/* Duplicate set 1 for infinite wrap */}
        {posterList.map((p, i) => React.cloneElement(p, { key: `dup1-${i}` }))}
        {/* Duplicate set 2 for seamless ultra-wide coverage */}
        {posterList.map((p, i) => React.cloneElement(p, { key: `dup2-${i}` }))}
      </div>

      {/* Interactive Micro-Hint */}
      <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span>Interactive Showcase • Drag with mouse or swipe to scroll</span>
        </span>
        <span className="text-slate-400 font-medium">3 Flagship Visuals</span>
      </div>
    </div>
  );
};
