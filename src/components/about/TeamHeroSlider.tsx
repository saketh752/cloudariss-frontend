import React, { useState, useEffect } from 'react';

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  isPlaceholder?: boolean;
  scale?: string;
  objectPosition?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'founder',
    name: 'Founder',
    designation: 'Yet to Be Revealed',
    description:
      'Guiding Cloudariss with an industry-first vision to transform theoretical technology learning into verifiable, real-world engineering capability.',
    image: '/brand/team/cutouts/founder.png',
    isPlaceholder: true,
  },
  {
    id: 'lokesh',
    name: 'Lokesh',
    designation: 'Co-Founder & Technology Mentor',
    description:
      'Co-founding technical strategy, mentoring cohorts across cloud architectures, automated workflows, and hands-on terminal practice.',
    image: '/brand/team/cutouts/lokesh.png',
  },
  {
    id: 'vandhana',
    name: 'Vandhana',
    designation: 'Operations & Content Coordinator',
    description:
      'Driving operational excellence, structured lab schedules, student learning coordination, and curriculum resource delivery.',
    image: '/brand/team/cutouts/vandhana.png',
  },
  {
    id: 'saketh',
    name: 'Saketh',
    designation: 'Technology & Growth Lead',
    description:
      'Spearheading modern technical stacks, web platforms, and growth architecture to scale hands-on learning experiences.',
    image: '/brand/team/cutouts/saketh.png',
  },
  {
    id: 'ujwal',
    name: 'Ujwal',
    designation: 'Digital Marketing Specialist',
    description:
      'Leading digital initiatives, student ecosystem outreach, and connecting technology enthusiasts with Cloudariss learning programs.',
    image: '/brand/team/cutouts/ujwal.png',
  },
  {
    id: 'sai-harshitha',
    name: 'Sai Harshitha',
    designation: 'Content & Digital Marketing Specialist',
    description:
      'Crafting technical storytelling, transparent program communication, and educational content across learner communities.',
    image: '/brand/team/cutouts/sai-harshitha.png',
  },
  {
    id: 'teja',
    name: 'Teja',
    designation: 'Mentor & Growth Marketing Lead',
    description:
      'Mentoring learners in applied engineering concepts while heading institutional growth and technical career community engagement.',
    image: '/brand/team/cutouts/teja.png',
    scale: 'scale-115',
    objectPosition: 'center 15%',
  },
  {
    id: 'akhilesh',
    name: 'Akhilesh',
    designation: 'Marketing & Community Specialist',
    description:
      'Fostering campus relationships, student technical communities, and career partnership initiatives across institutions.',
    image: '/brand/team/cutouts/akhilesh.png',
  },
  {
    id: 'lalith',
    name: 'Lalith',
    designation: 'Software & Platform Engineer',
    description:
      'Architecting resilient web infrastructure, interactive learning platforms, and core software systems at Cloudariss.',
    image: '/brand/team/cutouts/lalith.png',
  },
];

interface TeamHeroSliderProps {
  className?: string;
}

export const TeamHeroSlider: React.FC<TeamHeroSliderProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TEAM_MEMBERS.length;

  // Pure cinematic automatic progression (no manual controls, arrows, or counters)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [total]);

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const currentMember = TEAM_MEMBERS[currentIndex];
  const prevMember = TEAM_MEMBERS[prevIndex];
  const nextMember = TEAM_MEMBERS[nextIndex];

  return (
    <section
      className={`relative w-full overflow-hidden text-white pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-8 lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center border-b border-white/[0.08] select-none ${className}`}
      aria-label="The People Behind Cloudariss"
    >
      {/* 55% Black Shade Layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/[0.55] pointer-events-none -z-10"
      />

      {/* Subtle atmospheric ambient glow behind the hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#0878E8]/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-12 w-[300px] h-[300px] bg-[#FF7A00]/5 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Main Heading: Compact height, punchy typography */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            The People Behind Cloudariss
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
            Practicing software engineers, technology mentors, and platform coordinators guiding your applied technical journey.
          </p>
        </div>

        {/* Cinematic Stage Area - Balanced viewport containment */}
        <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] xl:min-h-[460px] flex items-center justify-center">
          {/* Subdued Previous Team Member (Left Flank) */}
          <div
            aria-hidden="true"
            className="hidden md:flex absolute -left-12 lg:-left-4 top-1/2 -translate-y-1/2 w-40 lg:w-56 h-64 lg:h-80 items-center justify-end opacity-20 transition-opacity duration-1000 pointer-events-none z-10 filter grayscale brightness-50"
          >
            <div className="relative w-full h-full flex items-center justify-center [mask-image:linear-gradient(to_right,transparent_0%,black_60%,transparent_100%)]">
              <img
                src={prevMember.image}
                alt=""
                className={`max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] ${
                  prevMember.scale || ''
                }`}
                style={{ objectPosition: prevMember.objectPosition || 'center center' }}
              />
            </div>
          </div>

          {/* Subdued Next Team Member (Right Flank) */}
          <div
            aria-hidden="true"
            className="hidden md:flex absolute -right-12 lg:-right-4 top-1/2 -translate-y-1/2 w-40 lg:w-56 h-64 lg:h-80 items-center justify-start opacity-20 transition-opacity duration-1000 pointer-events-none z-10 filter grayscale brightness-50"
          >
            <div className="relative w-full h-full flex items-center justify-center [mask-image:linear-gradient(to_left,transparent_0%,black_60%,transparent_100%)]">
              <img
                src={nextMember.image}
                alt=""
                className={`max-h-full max-w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] ${
                  nextMember.scale || ''
                }`}
                style={{ objectPosition: nextMember.objectPosition || 'center center' }}
              />
            </div>
          </div>

          {/* Centerpiece: Featured Team Member */}
          <div className="relative z-20 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center px-4">
            {/* Prominent Transparent Cutout */}
            <div className="md:col-span-6 flex justify-center items-center">
              <div className="relative w-[240px] h-[310px] sm:w-[280px] sm:h-[360px] lg:w-[330px] lg:h-[410px] flex items-center justify-center">
                {/* Dedicated rim light / gradient highlight behind founder silhouette */}
                {currentMember.isPlaceholder ? (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-2 inset-y-4 rounded-full pointer-events-none -z-10"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 45%, rgba(0, 210, 255, 0.22) 0%, rgba(8, 120, 232, 0.12) 40%, rgba(2, 8, 23, 0.6) 75%, transparent 90%)',
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full pointer-events-none -z-10 blur-xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, rgba(255, 122, 0, 0.08) 50%, transparent 80%)',
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-8 bottom-4 h-3/4 rounded-full pointer-events-none -z-10"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 60%, rgba(0, 0, 0, 0.65) 0%, rgba(2, 8, 23, 0.4) 50%, transparent 80%)',
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full pointer-events-none -z-10"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 45%, rgba(0, 210, 255, 0.12) 0%, rgba(8, 120, 232, 0.04) 55%, transparent 75%)',
                      }}
                    />
                  </>
                )}

                {/* Transparent Cutout PNG */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    key={currentMember.id}
                    src={currentMember.image}
                    alt={currentMember.name}
                    className={`max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transition-all duration-700 animate-in fade-in zoom-in-95 ${
                      currentMember.scale || ''
                    }`}
                    style={{ objectPosition: currentMember.objectPosition || 'center center' }}
                    loading="eager"
                    draggable={false}
                  />

                  {/* Soft bottom edge feathering */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Featured Team Member Information */}
            <div className="md:col-span-6 space-y-3 text-center md:text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-tight">
                  {currentMember.name}
                </h2>
                <div className="text-sm sm:text-base font-semibold text-[#00D2FF] mt-1 font-heading">
                  {currentMember.designation}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md mx-auto md:mx-0">
                {currentMember.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
