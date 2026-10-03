import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  className = '',
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full mb-3 shadow-xs ${
            isDark
              ? 'bg-[#071B63]/80 text-[#19BCE8] border border-[#19BCE8]/40'
              : 'bg-brand-surface-blue text-brand-blue border border-brand-blue/20'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4 font-heading ${
          isDark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-[#DCE5F2]' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
