import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
  Code2,
  CheckCircle2,
  Compass,
  Globe2,
  GraduationCap,
  FileCheck2,
  Users2,
  Briefcase,
  Layers,
  Server,
  Database,
  Terminal,
  Activity,
  Award,
} from 'lucide-react';
import {
  openWhatsApp,
  getCRPCEnquiryMessage,
  getDAAPEnquiryMessage,
  getCourseEnquiryMessage,
} from '@/utils/whatsapp';
import { TechBadge } from './TechLogos';

interface BottomPillar {
  icon: React.FC<{ className?: string }>;
  label: string;
}

interface HeroSlide {
  id: string;
  badge: string;
  isFlagship?: boolean;
  tagline?: string;
  headline: string;
  accentHeadline: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  whatsappMessage: string;
  backgroundImage: string;
  techTags: string[];
  accentColor: string;
  brandFeatures?: { icon: React.FC<{ className?: string }>; text: string }[];
  bottomPillars: BottomPillar[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'brand',
    badge: 'OFFICIAL CAREER ACCELERATOR',
    tagline: 'CLOUDARISS TECHNOLOGIES',
    headline: 'Learn. Build.',
    accentHeadline: 'Get Hired.',
    subtitle: 'Career Accelerators',
    description:
      'Industry-relevant programs in Cloud, Data, AI & DevOps to launch your global tech career.',
    primaryCtaText: 'Explore Programs',
    primaryCtaLink: '/courses',
    whatsappMessage:
      'Hello Cloudariss team! I am exploring your career accelerators and would like guidance on which track matches my goals.',
    backgroundImage: '/brand/hero/banner_brand_v3.jpg?v=5',
    techTags: [],
    accentColor: '#19BCE8',
    brandFeatures: [
      { icon: Code2, text: 'Hands-on Learning' },
      { icon: CheckCircle2, text: 'Real-world Projects' },
      { icon: Compass, text: 'Expert Mentorship' },
      { icon: Globe2, text: 'Career Support' },
    ],
    bottomPillars: [
      { icon: GraduationCap, label: '500+ Students Trained' },
      { icon: Activity, label: '80% Completion Rate' },
      { icon: Users2, label: '15+ Industry Mentors' },
      { icon: Briefcase, label: '100+ Placement Opportunities' },
    ],
  },
  {
    id: 'crpc',
    badge: 'FLAGSHIP ACCELERATOR • ₹17,000',
    isFlagship: true,
    tagline: 'CLOUD & DATA CAREER ACCELERATOR',
    headline: 'CRPC',
    accentHeadline: 'Cloud & Data',
    subtitle: 'Career Accelerator',
    description:
      'Master Cloud, Data, DevOps and enterprise technologies through practical, real-world projects.',
    primaryCtaText: 'Explore CRPC',
    primaryCtaLink: '/courses/crpc',
    whatsappMessage: getCRPCEnquiryMessage(),
    backgroundImage: '/brand/hero/banner_crpc_v3.jpg?v=5',
    techTags: ['AWS', 'Docker', 'Kubernetes', 'Python', 'ServiceNow'],
    accentColor: '#19BCE8',
    bottomPillars: [
      { icon: Layers, label: 'Project-Based Learning' },
      { icon: Users2, label: 'Industry Mentorship' },
      { icon: Server, label: 'Hands-on Cloud Labs' },
      { icon: Award, label: 'Placement Support' },
    ],
  },
  {
    id: 'daap',
    badge: 'FLAGSHIP ACCELERATOR • ₹17,000',
    isFlagship: true,
    tagline: 'DATA ANALYTICS & AI PROGRAM',
    headline: 'DAAP',
    accentHeadline: 'Data Analytics & AI',
    subtitle: 'Accelerator Program',
    description:
      'Build practical skills in analytics, Python, AI and real-world data workflows.',
    primaryCtaText: 'Explore DAAP',
    primaryCtaLink: '/courses/daap',
    whatsappMessage: getDAAPEnquiryMessage(),
    backgroundImage: '/brand/hero/banner_daap_v3.jpg?v=5',
    techTags: ['Python', 'SQL', 'Power BI', 'Generative AI', 'Agentic AI'],
    accentColor: '#38BDF8',
    bottomPillars: [
      { icon: Layers, label: 'Project-Based Learning' },
      { icon: Database, label: 'Real-world Datasets' },
      { icon: Users2, label: 'Expert Mentorship' },
      { icon: Award, label: 'Placement Support' },
    ],
  },
  {
    id: 'python',
    badge: 'DEVELOPER FOUNDATION',
    tagline: 'CREATIVE PROGRAMMING & AUTOMATION',
    headline: 'PYTHON',
    accentHeadline: 'From Basics to Real-World Applications',
    subtitle: 'Learn Python through practical projects, automation and real-world use cases.',
    description:
      'High-energy programming track covering clean object-oriented architecture, operational automation scripts, API integrations, and practical application engineering.',
    primaryCtaText: 'Explore Python',
    primaryCtaLink: '/courses',
    whatsappMessage: getCourseEnquiryMessage('Python Programming'),
    backgroundImage: '/brand/hero/banner_python_v3.jpg?v=5',
    techTags: ['Core Python', 'Automation', 'Data Analysis', 'Web Development', 'AI & ML'],
    accentColor: '#F59E0B',
    bottomPillars: [
      { icon: Terminal, label: '100+ Hands-on Exercises' },
      { icon: FileCheck2, label: 'Real-world Projects' },
      { icon: Layers, label: 'Industry Use Cases' },
      { icon: Users2, label: 'Expert Mentorship' },
    ],
  },
  {
    id: 'java',
    badge: 'ENTERPRISE SYSTEMS FOUNDATION',
    tagline: 'CODE | DESIGN | BUILD | SCALE',
    headline: 'JAVA',
    accentHeadline: 'Build Scalable Applications',
    subtitle: 'Learn Java, OOP, Spring Boot and build real-world backend systems.',
    description:
      'A time-tested, high-performance foundation for mission-critical software, Spring Boot microservices, robust JVM architecture, and scalable enterprise application engineering.',
    primaryCtaText: 'Explore Java',
    primaryCtaLink: '/courses',
    whatsappMessage: getCourseEnquiryMessage('Java Programming'),
    backgroundImage: '/brand/hero/banner_java_v3.jpg?v=5',
    techTags: ['Core Java', 'OOP', 'Spring Boot', 'REST APIs', 'Databases'],
    accentColor: '#FF7A00',
    bottomPillars: [
      { icon: Layers, label: 'Project-Based Learning' },
      { icon: Users2, label: 'Industry Mentorship' },
      { icon: Briefcase, label: 'Resume Guidance' },
      { icon: Award, label: 'Placement Support' },
    ],
  },
  {
    id: 'devops',
    badge: 'INFRASTRUCTURE & AUTOMATION',
    tagline: 'CLOUD | CONTAINERS | CI/CD | INFRASTRUCTURE',
    headline: 'DEVOPS',
    accentHeadline: 'Build. Deploy. Scale.',
    subtitle: 'Master Docker, Kubernetes, CI/CD and Cloud Infrastructure through real projects.',
    description:
      'Understand how modern software is containerized, automated through production CI/CD pipelines, and deployed across resilient cloud systems with Docker, Kubernetes, and AWS.',
    primaryCtaText: 'Explore DevOps',
    primaryCtaLink: '/courses/crpc',
    whatsappMessage: getCourseEnquiryMessage('Cloud & DevOps'),
    backgroundImage: '/brand/hero/banner_devops_v3.jpg?v=5',
    techTags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Linux', 'Terraform'],
    accentColor: '#00C49F',
    bottomPillars: [
      { icon: Layers, label: 'Project-Based Learning' },
      { icon: FileCheck2, label: 'Real-world Use Cases' },
      { icon: Server, label: 'Industry Tools' },
      { icon: Users2, label: 'Expert Mentorship' },
    ],
  },
];

const AUTOPLAY_INTERVAL = 6500; // 6.5 seconds continuous rotation

export const HeroStoryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse & Touch Drag tracking
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

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

  // Continuous uninterrupted autoplay (NO pause-on-hover)
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

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diff = dragStartX - e.clientX;
    if (Math.abs(diff) > 55) {
      if (diff > 0) nextSlide();
      else prevSlide();
      setIsDragging(false);
      setDragStartX(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartX(null);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = dragStartX - endX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setDragStartX(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[720px] lg:h-[92vh] lg:max-h-[980px] bg-[#020817] overflow-hidden select-none cursor-grab active:cursor-grabbing flex flex-col justify-between"
      role="region"
      aria-roledescription="carousel"
      aria-label="Cloudariss Technology Career Highlights"
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
          className="absolute inset-0 bg-cover bg-[position:75%_center] sm:bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-right-center"
        >
          {/* Natural cinematic lighting scrim: Smooth continuous gradient across the full width without any sharp cutoffs or dividing lines */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/75 via-40% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 via-50% to-transparent sm:hidden pointer-events-none" />

          {/* Dynamic ambient color glow matching slide theme */}
          <div
            className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{ backgroundColor: currentSlide.accentColor }}
          />
        </motion.div>
      </AnimatePresence>



      {/* Content Canvas (Real HTML/CSS Typography, Buttons, and Logos) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full px-4 sm:px-8 lg:px-12 flex flex-col justify-between py-6 sm:py-8 pointer-events-none flex-1">
        
        {/* Top Header: Official Logo + Category Badges */}
        <div className="pointer-events-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="flex items-center p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 group-hover:scale-105 transition-transform">
                <img
                  src="/brand/cloudariss-logo.png"
                  alt="Cloudariss Technologies"
                  className="h-6 sm:h-8 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Tagline / Subtitle Pill */}
            {currentSlide.tagline && (
              <span className="hidden md:inline-block text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                {currentSlide.tagline}
              </span>
            )}
          </div>

          {/* Category / Tier Badge */}
          <div className="flex items-center gap-2">
            {currentSlide.isFlagship ? (
              <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-600/30 backdrop-blur-md border border-amber-400/60 text-amber-300 shadow-md text-[11px] sm:text-xs font-bold font-mono tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>FLAGSHIP ACCELERATOR • ₹17,000</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm text-[11px] sm:text-xs font-bold font-mono tracking-wider">
                <Zap className="w-3 h-3 text-[#19BCE8]" />
                <span>{currentSlide.badge}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hero Subject & Story Canvas */}
        <div className="my-auto max-w-xl sm:max-w-2xl lg:max-w-2xl pointer-events-auto py-6 sm:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-3.5 sm:space-y-4"
            >
              {/* Slide 1: Cloudariss Official Brand Presentation */}
              {currentSlide.id === 'brand' ? (
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[0.95] text-white">
                    Learn. Build.{' '}
                    <span className="text-[#19BCE8] drop-shadow-[0_0_24px_rgba(25,188,232,0.5)]">
                      Get Hired.
                    </span>
                  </h1>
                  <div className="text-lg sm:text-2xl font-extrabold text-slate-300 tracking-wider uppercase mt-1">
                    CAREER ACCELERATORS
                  </div>
                </div>
              ) : (
                /* Slides 2-6: Technology Program Worlds */
                <div className="space-y-1">
                  <div className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.9] text-white drop-shadow-md">
                    {currentSlide.headline}
                  </div>
                  <div
                    className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight"
                    style={{ color: currentSlide.accentColor }}
                  >
                    {currentSlide.accentHeadline}
                  </div>
                  <div className="text-xs sm:text-base font-semibold text-slate-300 pt-0.5">
                    {currentSlide.subtitle}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 leading-relaxed font-normal max-w-lg">
                {currentSlide.description}
              </p>

              {/* Brand 4-Item Feature Strip */}
              {currentSlide.id === 'brand' && currentSlide.brandFeatures && (
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-1">
                  {currentSlide.brandFeatures.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={feat.text}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-white shadow-sm"
                      >
                        <Icon className="w-4 h-4 text-[#19BCE8]" />
                        <span className="text-xs sm:text-sm font-semibold tracking-wide">
                          {feat.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Technology Badges / SVG Logos */}
              {currentSlide.techTags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5">
                  {currentSlide.techTags.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              )}

              {/* Real Interactive CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={currentSlide.primaryCtaLink}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl text-white font-bold text-sm sm:text-base shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                  style={{
                    backgroundColor: '#0878E8',
                    boxShadow: '0 8px 24px rgba(8, 120, 232, 0.45)',
                  }}
                >
                  <span>{currentSlide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <button
                  onClick={() => openWhatsApp(currentSlide.whatsappMessage)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-white font-semibold text-sm sm:text-base backdrop-blur-md shadow-sm transition-all group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section: PROMINENT LARGE HIGHLIGHT CARDS (Buttons Removed As Requested) */}
        <div className="pt-4 pb-2 pointer-events-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full">
            {currentSlide.bottomPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="flex items-center gap-3 sm:gap-3.5 px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#06143D]/80 hover:bg-[#06143D]/95 border border-white/20 hover:border-[#19BCE8]/60 backdrop-blur-xl text-white shadow-xl transition-all transform hover:-translate-y-0.5 group"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/10 group-hover:bg-[#19BCE8]/20 border border-white/10 group-hover:border-[#19BCE8]/40 transition-colors shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#19BCE8] drop-shadow-[0_0_8px_rgba(25,188,232,0.4)]" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide leading-tight">
                    {pillar.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
