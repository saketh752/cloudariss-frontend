import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
  fadeEdges?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  speed = 35,
  pauseOnHover = true,
  className = '',
  fadeEdges = true,
}) => {
  const animClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  const pauseClass = pauseOnHover ? 'pause-hover' : '';

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {fadeEdges && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC]/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-[#F7F9FC] via-[#F7F9FC]/80 to-transparent" />
        </>
      )}

      <div
        className={`${animClass} ${pauseClass} flex items-center gap-6 sm:gap-10`}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        <div className="flex items-center gap-6 sm:gap-10 shrink-0">{children}</div>
        <div className="flex items-center gap-6 sm:gap-10 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};
