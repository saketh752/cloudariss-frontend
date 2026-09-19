import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'surface' | 'dark' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
  borderAccent?: 'none' | 'blue' | 'orange' | 'cyan';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  padding = 'md',
  hoverEffect = false,
  borderAccent = 'none',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-200';

  const variantStyles = {
    white: 'bg-white border border-brand-border shadow-card text-brand-navy',
    surface: 'bg-brand-surface-blue border border-brand-border/80 shadow-subtle text-brand-navy',
    dark: 'bg-brand-dark-surface border border-brand-blue/25 text-white shadow-card',
    glass: 'bg-white/80 backdrop-blur-md border border-brand-border shadow-card text-brand-navy',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const borderAccentStyles = {
    none: '',
    blue: 'border-t-4 border-t-brand-blue',
    orange: 'border-t-4 border-t-brand-orange',
    cyan: 'border-t-4 border-t-brand-cyan',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-blue/40'
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${borderAccentStyles[borderAccent]} ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

