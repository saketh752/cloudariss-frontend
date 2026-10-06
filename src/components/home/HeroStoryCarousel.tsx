import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: string;
  headline: string;
  accentHeadline: string;
  subtitle?: string;
  description: string;
  targetLink: string;
  backgroundImage: string;
  accentColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'brand',
    headline: 'Learn. Build.',
    accentHeadline: 'Get Hired.',
    subtitle: 'Career Accelerators',
    description:
      'Industry-relevant programs in Cloud, Data, AI & DevOps engineered to launch your global tech career with real project experience.',
    targetLink: '/',
    backgroundImage: '/brand/hero/banner_brand_v3.jpg?v=5',
    accentColor: '#19BCE8',
  },
  {
    id: 'crpc',
    headline: 'CRPC',
    accentHeadline: 'Cloud & Data Career Accelerator',
    description:
      'Master cloud infrastructure, enterprise data engineering, containerization, and modern CI/CD pipelines through hands-on production labs.',
    targetLink: '/courses/crpc',
    backgroundImage: '/brand/hero/banner_crpc_v3.jpg?v=5',
    accentColor: '#19BCE8',
  },
  {
    id: 'daap',
    headline: 'DAAP',
    accentHeadline: 'Data Analytics & AI Program',
    description:
      'Build real-world mastery in advanced SQL, Python exploratory analysis, Power BI executive dashboards, and modern Agentic AI workflows.',
    targetLink: '/courses/daap',
    backgroundImage: '/brand/hero/banner_daap_v3.jpg?v=5',
    accentColor: '#38BDF8',
  },
  {
    id: 'python',
    headline: 'PYTHON',
    accentHeadline: 'Creative Programming & Automation',
    description:
      'High-impact programming track covering object-oriented architecture, operational automation scripts, API integrations, and practical application engineering.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_python_v3.jpg?v=5',
    accentColor: '#F59E0B',
  },
  {
    id: 'java',
    headline: 'JAVA',
    accentHeadline: 'Build Scalable Enterprise Applications',
    description:
      'A time-tested foundation for mission-critical software, Spring Boot microservices, robust JVM architecture, and scalable enterprise application engineering.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_java_v3.jpg?v=5',
    accentColor: '#FF7A00',
  },
  {
    id: 'devops',
    headline: 'DEVOPS',
    accentHeadline: 'Build. Deploy. Scale.',
    description:
      'Master containerization with Docker, Kubernetes orchestration, automated production CI/CD pipelines, and resilient cloud deployments on AWS.',
    targetLink: '/courses',
    backgroundImage: '/brand/hero/banner_devops_v3.jpg?v=5',
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
      className="group/hero relative w-full flex-1 min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] bg-[#020817] overflow-hidden select-none cursor-pointer flex flex-col justify-center"
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
          className="absolute inset-0 bg-cover bg-[position:75%_center] sm:bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-right-center transition-all duration-700 ease-out group-hover/hero:scale-[1.015] group-hover/hero:brightness-105"
        >
          {/* Natural cinematic lighting scrim */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/85 via-50% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/85 via-55% to-transparent sm:hidden pointer-events-none" />

          {/* Dynamic ambient color glow matching slide theme */}
          <div
            className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{ backgroundColor: currentSlide.accentColor }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Canvas */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 flex flex-col justify-center py-10 sm:py-14 lg:py-18 pointer-events-none flex-1">
        <div className="max-w-2xl lg:max-w-3xl pointer-events-auto py-2 sm:py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Slide 1: Cloudariss Official Brand Presentation */}
              {currentSlide.id === 'brand' ? (
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[0.95] text-white">
                    Learn. Build.{' '}
                    <span className="text-[#19BCE8] drop-shadow-[0_0_24px_rgba(25,188,232,0.5)]">
                      Get Hired.
                    </span>
                  </h1>
                  <div className="text-base sm:text-xl lg:text-2xl font-bold text-slate-300 tracking-wider uppercase">
                    Career Accelerators
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 leading-relaxed font-normal max-w-2xl pt-2">
                    {currentSlide.description}
                  </p>
                </div>
              ) : (
                /* Slides 2-6: Technology Program Worlds */
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.9] text-white drop-shadow-md">
                    {currentSlide.headline}
                  </div>
                  <div
                    className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight"
                    style={{ color: currentSlide.accentColor }}
                  >
                    {currentSlide.accentHeadline}
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 leading-relaxed font-normal max-w-2xl pt-2">
                    {currentSlide.description}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

