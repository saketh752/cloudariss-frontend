import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  label: string;
  headline: string;
  accentHeadline: string;
  description: string;
  targetLink: string;
  backgroundImage: string;
  bgPosition: string;
  accentColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'brand',
    label: 'CLOUDARISS TECHNOLOGIES',
    headline: 'Learn. Build.',
    accentHeadline: 'Get Hired.',
    description:
      'Industry-relevant programs in Cloud, Data, AI & DevOps engineered to launch your global tech career with real project experience.',
    targetLink: '/',
    backgroundImage: '/brand/hero/banner_brand_v3.jpg?v=5',
    bgPosition: 'bg-[position:75%_center] sm:bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-right-center',
    accentColor: '#19BCE8',
  },
  {
    id: 'crpc',
    label: 'FLAGSHIP ACCELERATOR',
    headline: 'CRPC',
    accentHeadline: 'Cloud & Data Career Accelerator',
    description:
      'Master cloud infrastructure, enterprise data engineering, containerization, and modern CI/CD pipelines through hands-on production labs.',
    targetLink: '/courses/crpc',
    backgroundImage: '/brand/hero/banner_crpc_v3.jpg?v=5',
    bgPosition: 'bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-[position:80%_center]',
    accentColor: '#19BCE8',
  },
  {
    id: 'daap',
    label: 'FLAGSHIP ACCELERATOR',
    headline: 'DAAP',
    accentHeadline: 'Data Analytics & AI Program',
    description:
      'Build real-world mastery in advanced SQL, Python exploratory analysis, Power BI executive dashboards, and modern Agentic AI workflows.',
    targetLink: '/courses/daap',
    backgroundImage: '/brand/hero/banner_daap_v3.jpg?v=5',
    bgPosition: 'bg-[position:75%_center] md:bg-[position:70%_center] lg:bg-[position:85%_center]',
    accentColor: '#38BDF8',
  },
  {
    id: 'fde',
    label: 'FLAGSHIP ACCELERATOR',
    headline: 'FDE',
    accentHeadline: 'Forward Deployed Engineer',
    description:
      'Engineering AI-powered solutions and robust data systems where real-world enterprise problems meet production deployment.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_fde_v1.jpg?v=6',
    bgPosition: 'bg-[position:75%_center] md:bg-[position:70%_center] lg:bg-[position:85%_center]',
    accentColor: '#00D2FF',
  },
  {
    id: 'python',
    label: 'PROGRAMMING FOUNDATION',
    headline: 'PYTHON',
    accentHeadline: 'Creative Programming & Automation',
    description:
      'High-impact programming track covering object-oriented architecture, operational automation scripts, API integrations, and practical application engineering.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_python_v3.jpg?v=5',
    bgPosition: 'bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-[position:75%_center]',
    accentColor: '#F59E0B',
  },
  {
    id: 'java',
    label: 'ENTERPRISE FOUNDATION',
    headline: 'JAVA',
    accentHeadline: 'Build Scalable Enterprise Applications',
    description:
      'A time-tested foundation for mission-critical software, Spring Boot microservices, robust JVM architecture, and scalable enterprise application engineering.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_java_v3.jpg?v=5',
    bgPosition: 'bg-[position:75%_center] md:bg-[position:70%_center] lg:bg-[position:80%_center]',
    accentColor: '#FF7A00',
  },
  {
    id: 'devops',
    label: 'INFRASTRUCTURE & AUTOMATION',
    headline: 'DEVOPS',
    accentHeadline: 'Build. Deploy. Scale.',
    description:
      'Master containerization with Docker, Kubernetes orchestration, automated production CI/CD pipelines, and resilient cloud deployments on AWS.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_devops_v3.jpg?v=5',
    bgPosition: 'bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-[position:80%_center]',
    accentColor: '#00C49F',
  },
];

const AUTOPLAY_INTERVAL = 6500; // 6.5 seconds continuous rotation

export const HeroStoryCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse & Touch Drag tracking
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartYRef = useRef<number | null>(null);

  const currentSlide = HERO_SLIDES[currentIndex];

  const resetAutoplayTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  const goToSlide = useCallback(
    (index: number, newDirection = 1) => {
      setDirection(newDirection);
      setCurrentIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
      resetAutoplayTimer();
    },
    [resetAutoplayTimer]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1, 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1, -1);
  }, [currentIndex, goToSlide]);

  // Continuous uninterrupted autoplay
  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplayTimer]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Mouse Wheel / Trackpad Scroll Gesture Navigation (with throttling)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastWheelTime = 0;
    const WHEEL_THRESHOLD = 25;
    const COOLDOWN_MS = 600;

    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      const now = Date.now();
      if (now - lastWheelTime < COOLDOWN_MS) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      lastWheelTime = now;

      if (delta > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartYRef.current = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartXRef.current === null || dragStartYRef.current === null) return;
    const diffX = dragStartXRef.current - e.clientX;
    const diffY = dragStartYRef.current - e.clientY;

    if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
      isDraggingRef.current = true;
    }

    if (Math.abs(diffX) > 55) {
      if (diffX > 0) nextSlide();
      else prevSlide();
      dragStartXRef.current = null;
      dragStartYRef.current = null;
    }
  };

  const handleMouseUp = () => {
    dragStartXRef.current = null;
    dragStartYRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartXRef.current = e.targetTouches[0].clientX;
    dragStartYRef.current = e.targetTouches[0].clientY;
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartXRef.current === null) return;
    const currentX = e.targetTouches[0].clientX;
    const diffX = dragStartXRef.current - currentX;
    if (Math.abs(diffX) > 10) {
      isDraggingRef.current = true;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = dragStartXRef.current - endX;
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
    dragStartXRef.current = null;
    dragStartYRef.current = null;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  const handleBannerClick = () => {
    if (isDraggingRef.current) return;
    navigate(currentSlide.targetLink);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleBannerClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="group/hero relative w-full flex-1 min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] bg-[#020817] overflow-hidden select-none cursor-pointer flex flex-col justify-center"
      role="region"
      aria-roledescription="carousel"
      aria-label="Cloudariss Technology Highlights"
    >
      {/* Full-Bleed High-Res Widescreen Background Artwork */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundImage: `url(${currentSlide.backgroundImage})`,
          }}
          className={`absolute inset-0 bg-cover ${currentSlide.bgPosition} transition-all duration-700 ease-out group-hover/hero:scale-[1.015] group-hover/hero:brightness-105`}
        >
          {/* Natural cinematic lighting scrim */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/85 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/90 via-55% to-transparent sm:hidden pointer-events-none" />

          {/* Dynamic ambient color glow matching slide theme */}
          <div
            className="absolute top-1/4 left-1/4 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full blur-[120px] sm:blur-[140px] pointer-events-none opacity-20"
            style={{ backgroundColor: currentSlide.accentColor }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 flex flex-col justify-center py-10 sm:py-16 lg:py-20 pointer-events-none flex-1">
        <div className="max-w-2xl lg:max-w-3xl pointer-events-auto py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Refined Tracked Eyebrow Name */}
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-slate-400/90 font-mono">
                {currentSlide.label}
              </div>

              {/* Slide 1: Cloudariss Official Brand Presentation */}
              {currentSlide.id === 'brand' ? (
                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[0.98] sm:leading-[0.95] text-white drop-shadow-sm">
                    Learn. Build.{' '}
                    <span className="text-[#19BCE8] drop-shadow-[0_0_24px_rgba(25,188,232,0.5)]">
                      Get Hired.
                    </span>
                  </h1>
                  <p className="text-xs sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal max-w-xl pt-1">
                    {currentSlide.description}
                  </p>
                </div>
              ) : (
                /* Slides 2-6: Technology Program Worlds */
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.92] text-white drop-shadow-md">
                    {currentSlide.headline}
                  </div>
                  <div
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight leading-tight"
                    style={{ color: currentSlide.accentColor }}
                  >
                    {currentSlide.accentHeadline}
                  </div>
                  <p className="text-xs sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal max-w-xl pt-1">
                    {currentSlide.description}
                  </p>
                </div>
              )}

              {/* Accessible Touch CTA & Slide Indicator Bar */}
              <div className="pt-2 sm:pt-3 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white transition-all group-hover/hero:brightness-110"
                  style={{
                    backgroundColor: `${currentSlide.accentColor}25`,
                    border: `1px solid ${currentSlide.accentColor}66`,
                    boxShadow: `0 0 16px ${currentSlide.accentColor}33`,
                  }}
                >
                  <span>Explore Track</span>
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                </div>

                {/* Minimal Slide Indicator Dots */}
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx, idx > currentIndex ? 1 : -1);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-white shadow-xs'
                          : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

