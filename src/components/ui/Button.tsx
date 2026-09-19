import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-bold shadow-sm',
  };

  const variantStyles = {
    primary: 'bg-brand-orange hover:bg-brand-orange-hover text-white shadow-subtle hover:shadow-glow-orange focus:ring-brand-orange border border-transparent',
    secondary: 'bg-brand-blue hover:bg-[#0667cb] text-white shadow-subtle hover:shadow-subtle focus:ring-brand-blue border border-transparent',
    cyan: 'bg-brand-cyan hover:bg-[#15a7cf] text-brand-navy font-bold focus:ring-brand-cyan shadow-glow-cyan border border-transparent',
    outline: 'bg-white hover:bg-brand-surface-blue text-brand-navy border border-brand-border hover:border-brand-blue focus:ring-brand-blue',
    ghost: 'bg-transparent hover:bg-brand-surface-blue text-brand-navy hover:text-brand-blue focus:ring-brand-blue',
    dark: 'bg-brand-dark-surface hover:bg-brand-dark-section text-white border border-brand-blue/30 hover:border-brand-cyan/60 focus:ring-brand-cyan',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 items-center transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick as any}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternalWeb = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
    const computedTarget = target !== undefined ? target : (isExternalWeb ? '_blank' : undefined);
    const computedRel = rel !== undefined ? rel : (computedTarget === '_blank' ? 'noopener noreferrer' : undefined);

    return (
      <a
        href={href}
        className={combinedClasses}
        target={computedTarget}
        rel={computedRel}
        onClick={onClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

