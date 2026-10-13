import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  roleBadge: string;
  description: string;
  image?: string;
  isPlaceholder?: boolean;
  objectPosition?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'founder',
    name: 'Founder',
    designation: 'Yet to be revealed',
    roleBadge: 'Leadership & Vision',
    description:
      'Guiding Cloudariss with an industry-first vision to transform theoretical technology learning into verifiable, real-world engineering capability.',
    isPlaceholder: true,
  },
  {
    id: 'lokesh',
    name: 'Lokesh',
    designation: 'Co-Founder & Technology Mentor',
    roleBadge: 'Mentorship & Systems',
    description:
      'Co-founding technical strategy, mentoring cohorts across cloud architectures, automated workflows, and hands-on terminal practice.',
    image: '/brand/team/Lokesh.jpeg',
    objectPosition: 'center 18%',
  },
  {
    id: 'vandhana',
    name: 'Vandhana',
    designation: 'Operations & Content Coordinator',
    roleBadge: 'Operations & Academic Sync',
    description:
      'Driving operational excellence, structured lab schedules, student learning coordination, and curriculum resource delivery.',
    image: '/brand/team/Vandhana.jpeg',
    objectPosition: 'center 18%',
  },
  {
    id: 'ujwal',
    name: 'Ujwal',
    designation: 'Digital Marketing Specialist',
    roleBadge: 'Digital Growth & Outreach',
    description:
      'Leading digital initiatives, student ecosystem outreach, and connecting technology enthusiasts with Cloudariss learning programs.',
    image: '/brand/team/Ujwal.jpeg',
    objectPosition: 'center 22%',
  },
  {
    id: 'sai-harshitha',
    name: 'Sai Harshitha',
    designation: 'Content & Digital Marketing Specialist',
    roleBadge: 'Content & Communication',
    description:
      'Crafting technical storytelling, transparent program communication, and educational content across learner communities.',
    image: '/brand/team/Sai Harshitha.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 'teja',
    name: 'Teja',
    designation: 'Mentor & Growth Marketing Lead',
    roleBadge: 'Technical Mentorship & Growth',
    description:
      'Mentoring learners in applied engineering concepts while heading institutional growth and technical career community engagement.',
    image: '/brand/team/Teja.jpeg',
    objectPosition: 'center 22%',
  },
  {
    id: 'saketh',
    name: 'Saketh',
    designation: 'Technology & Growth Lead',
    roleBadge: 'Technology & Scalability',
    description:
      'Spearheading modern technical stacks, web platforms, and growth architecture to scale hands-on learning experiences.',
    image: '/brand/team/Saketh.jpeg',
    objectPosition: 'center 18%',
  },
  {
    id: 'akhilesh',
    name: 'Akhilesh',
    designation: 'Marketing & Community Specialist',
    roleBadge: 'Community & Outreach',
    description:
      'Fostering campus relationships, student technical communities, and career partnership initiatives across institutions.',
    image: '/brand/team/Akhilesh.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 'lalith',
    name: 'Lalith',
    designation: 'Software & Platform Engineer',
    roleBadge: 'Platform Engineering',
    description:
      'Architecting resilient web infrastructure, interactive learning platforms, and core software systems at Cloudariss.',
    image: '/brand/team/Lalith.jpg',
    objectPosition: 'center 20%',
  },
];

interface TeamHeroSliderProps {
  className?: string;
}

export const TeamHeroSlider: React.FC<TeamHeroSliderProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const total = TEAM_MEMBERS.length;

  const nextPerson = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, total]);

  const prevPerson = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, total]);

  // Smooth cinematic autoplay (respects prefers-reduced-motion and pauses on hover)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || isPaused) return;

    const timer = setInterval(() => {
      nextPerson();
    }, 6500);

    return () => clearInterval(timer);
  }, [nextPerson, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPerson();
      if (e.key === 'ArrowLeft') prevPerson();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPerson, prevPerson]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextPerson();
    if (distance < -50) prevPerson();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const currentMember = TEAM_MEMBERS[currentIndex];
  const prevMember = TEAM_MEMBERS[prevIndex];
  const nextMember = TEAM_MEMBERS[nextIndex];

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#020817] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-white/[0.08] select-none ${className}`}
      aria-label="People Behind Cloudariss"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#0878E8]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#FF7A00]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: Exact "People Behind Cloudariss" with minimal supporting text */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            People Behind Cloudariss
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed">
            Practicing software engineers, technology mentors, and platform coordinators guiding your applied technical journey.
          </p>
        </div>

        {/* Cinematic Stage Area */}
        <div className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-center">
          {/* Subdued Previous Team Member (Left Flank) */}
          <div
            onClick={prevPerson}
            className="hidden md:flex absolute -left-12 lg:-left-4 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-80 lg:h-96 items-center justify-end opacity-20 hover:opacity-35 transition-all duration-500 cursor-pointer pointer-events-auto z-10 filter grayscale brightness-50"
            title={`Previous: ${prevMember.name}`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_60%,transparent_100%)]">
              {prevMember.isPlaceholder ? (
                <div className="w-full h-full bg-slate-900/90 flex items-center justify-center">
                  <User className="w-20 h-20 text-slate-600" />
                </div>
              ) : (
                <img
                  src={prevMember.image}
                  alt={prevMember.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: prevMember.objectPosition || 'center 20%' }}
                />
              )}
            </div>
          </div>

          {/* Subdued Next Team Member (Right Flank) */}
          <div
            onClick={nextPerson}
            className="hidden md:flex absolute -right-12 lg:-right-4 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-80 lg:h-96 items-center justify-start opacity-20 hover:opacity-35 transition-all duration-500 cursor-pointer pointer-events-auto z-10 filter grayscale brightness-50"
            title={`Next: ${nextMember.name}`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden [mask-image:linear-gradient(to_left,transparent_0%,black_60%,transparent_100%)]">
              {nextMember.isPlaceholder ? (
                <div className="w-full h-full bg-slate-900/90 flex items-center justify-center">
                  <User className="w-20 h-20 text-slate-600" />
                </div>
              ) : (
                <img
                  src={nextMember.image}
                  alt={nextMember.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: nextMember.objectPosition || 'center 20%' }}
                />
              )}
            </div>
          </div>

          {/* Centerpiece: Featured Team Member */}
          <div className="relative z-20 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center px-4">
            {/* Prominent Large Portrait with Feathered Dark Gradient Blending */}
            <div className="md:col-span-6 flex justify-center items-center">
              <div className="relative w-[260px] h-[330px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[450px] group">
                {/* Back feathered glow - Capped at 15% opacity */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-3xl pointer-events-none -z-10"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 50%, rgba(0, 210, 255, 0.12) 0%, rgba(8, 120, 232, 0.05) 50%, transparent 80%)',
                  }}
                />

                {/* Portrait container with soft natural edge feathering */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                  {currentMember.isPlaceholder ? (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center border border-slate-700/40 text-slate-400 p-6 text-center"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 40%, rgba(15, 23, 42, 0.95) 0%, rgba(2, 8, 23, 1) 100%)',
                      }}
                    >
                      <User className="w-24 h-24 sm:w-28 sm:h-28 text-slate-500/80 mb-3" strokeWidth={1} />
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                        Identity Reserved
                      </span>
                    </div>
                  ) : (
                    <img
                      key={currentMember.id}
                      src={currentMember.image}
                      alt={currentMember.name}
                      className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
                      style={{ objectPosition: currentMember.objectPosition || 'center 20%' }}
                      loading="eager"
                      draggable={false}
                    />
                  )}

                  {/* Gradient overlays to feather photograph seamlessly into #020817 (strictly <= 40% opacity) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(2, 8, 23, 0.40) 0%, rgba(2, 8, 23, 0.20) 50%, transparent 100%)',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-8 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to right, rgba(2, 8, 23, 0.35) 0%, transparent 100%)',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 right-0 w-8 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to left, rgba(2, 8, 23, 0.35) 0%, transparent 100%)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Featured Team Member Information */}
            <div className="md:col-span-6 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-medium text-[#00D2FF]">
                <span>{currentMember.roleBadge}</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
                  {currentMember.name}
                </h2>
                <div className="text-base sm:text-lg font-semibold text-[#00D2FF] mt-1 font-heading">
                  {currentMember.designation}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md mx-auto md:mx-0">
                {currentMember.description}
              </p>

              {/* Minimal Navigation & Counter Controls */}
              <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
                <button
                  type="button"
                  onClick={prevPerson}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous Team Member"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-xs font-mono text-slate-400 tracking-wider">
                  <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="mx-1.5 text-slate-600">/</span>
                  <span>{String(total).padStart(2, '0')}</span>
                </div>

                <button
                  type="button"
                  onClick={nextPerson}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next Team Member"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

