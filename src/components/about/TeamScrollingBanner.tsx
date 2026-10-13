import React from 'react';
import { User } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image?: string;
  isPlaceholder?: boolean;
  objectPosition?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'founder',
    name: 'Founder',
    designation: 'Yet to Be Revealed',
    isPlaceholder: true,
  },
  {
    id: 'lokesh',
    name: 'Lokesh',
    designation: 'Co-Founder & Technology Mentor',
    image: '/brand/team/Lokesh.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 'vandhana',
    name: 'Vandhana',
    designation: 'Operations & Content Coordinator',
    image: '/brand/team/Vandhana.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 'ujwal',
    name: 'Ujwal',
    designation: 'Digital Marketing Specialist',
    image: '/brand/team/Ujwal.jpeg',
    objectPosition: 'center 25%',
  },
  {
    id: 'sai-harshitha',
    name: 'Sai Harshitha',
    designation: 'Content & Digital Marketing Specialist',
    image: '/brand/team/Sai Harshitha.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 'teja',
    name: 'Teja',
    designation: 'Mentor & Growth Marketing Lead',
    image: '/brand/team/Teja.jpeg',
    objectPosition: 'center 25%',
  },
  {
    id: 'saketh',
    name: 'Saketh Yadav',
    designation: 'Technology & Growth Lead',
    image: '/brand/team/Saketh.jpeg',
    objectPosition: 'center 20%',
  },
  {
    id: 'akhilesh',
    name: 'Akhilesh',
    designation: 'Marketing & Community Specialist',
    image: '/brand/team/Akhilesh.jpeg',
    objectPosition: 'center 22%',
  },
  {
    id: 'lalith',
    name: 'Lalith',
    designation: 'Software & Platform Engineer',
    image: '/brand/team/Lalith.jpg',
    objectPosition: 'center 20%',
  },
];

interface TeamScrollingBannerProps {
  className?: string;
}

export const TeamScrollingBanner: React.FC<TeamScrollingBannerProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className}`}
      aria-label="Cloudariss Leadership and Technology Team"
    >
      {/* Subtle edge fades blending directly with page background */}
      <div
        className="relative w-full overflow-x-auto md:overflow-hidden touch-pan-x [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]"
        style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
      >
        <div
          className="team-marquee-track flex items-start gap-8 sm:gap-10 lg:gap-12 shrink-0 py-2 sm:py-3 w-max px-4 sm:px-6"
          style={{ '--team-marquee-duration': '42s' } as React.CSSProperties}
        >
          {/* First loop */}
          <div className="flex items-start gap-8 sm:gap-10 lg:gap-12 shrink-0">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberItem key={`team-1-${member.id}`} member={member} />
            ))}
          </div>

          {/* Second loop for seamless continuous infinite marquee */}
          <div className="flex items-start gap-8 sm:gap-10 lg:gap-12 shrink-0" aria-hidden="true">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberItem key={`team-2-${member.id}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMemberItem: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center shrink-0 w-[148px] sm:w-[165px] lg:w-[178px] group">
      {/* Portrait visual - Unboxed, no card styling, no rectangular container border */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
        {member.isPlaceholder ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center bg-slate-900/80 border border-slate-700/50 text-slate-400"
            style={{
              background:
                'radial-gradient(circle at 50% 40%, rgba(15, 23, 42, 0.9) 0%, rgba(2, 8, 23, 0.95) 100%)',
            }}
          >
            {/* Minimal restrained silhouette */}
            <User className="w-12 h-12 sm:w-14 sm:h-14 text-slate-500/70" strokeWidth={1.25} />
          </div>
        ) : (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{ objectPosition: member.objectPosition || 'center 20%' }}
            loading="eager"
            draggable={false}
          />
        )}
      </div>

      {/* Typography directly beneath photo without boxed containers */}
      <div className="mt-3 sm:mt-3.5 space-y-1 w-full px-1">
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight font-heading leading-tight group-hover:text-[#00D2FF] transition-colors">
          {member.name}
        </h4>
        <p className="text-[11px] sm:text-xs text-slate-300 font-normal leading-snug break-words">
          {member.designation}
        </p>
      </div>
    </div>
  );
};
