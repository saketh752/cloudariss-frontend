import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'navy' | 'blue' | 'cyan' | 'orange' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'sm',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full whitespace-nowrap transition-colors';

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wide',
    md: 'text-sm px-3.5 py-1',
  };

  const variantStyles = {
    navy: 'bg-brand-navy text-white',
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    cyan: 'bg-brand-cyan/15 text-[#0a6680] border border-brand-cyan/30 font-semibold',
    orange: 'bg-brand-orange/15 text-brand-orange border border-brand-orange/30 font-bold',
    outline: 'bg-transparent text-brand-navy border border-brand-border',
    subtle: 'bg-slate-100 text-slate-700',
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};

