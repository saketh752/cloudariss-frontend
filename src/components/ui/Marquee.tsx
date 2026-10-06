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
    <div
      className={`relative overflow-hidden w-full ${
        fadeEdges
          ? '[mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]'
          : ''
      } ${className}`}
    >
      <div
        className={`${animClass} ${pauseClass} flex items-center gap-8 sm:gap-12 md:gap-16 shrink-0`}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        <div className="flex items-center gap-8 sm:gap-12 md:gap-16 shrink-0">{children}</div>
        <div className="flex items-center gap-8 sm:gap-12 md:gap-16 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};
