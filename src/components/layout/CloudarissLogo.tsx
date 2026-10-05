import React from 'react';
import { Link } from 'react-router-dom';

export const CloudarissLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center shrink-0 focus:outline-none group py-0.5 ${className}`} title="Cloudariss Technologies">
      <img
        src="/brand/cloudariss-logo.png"
        alt="Cloudariss Technologies"
        className="h-9 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert filter drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] drop-shadow-[0_0_24px_rgba(25,188,232,0.6)] group-hover:scale-105 transition-all duration-300"
      />
    </Link>
  );
};
