import React from 'react';

export interface TechChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  category?: string;
  icon?: React.ReactNode;
}

export const TechChip: React.FC<TechChipProps> = ({
  label,
  category,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border text-xs font-semibold text-brand-navy shadow-subtle hover:border-brand-blue/40 hover:bg-brand-surface-blue transition-colors ${className}`.trim()}
      {...props}
    >
      {icon && <span className="text-brand-blue shrink-0">{icon}</span>}
      <span>{label}</span>
      {category && (
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium ml-1">
          {category}
        </span>
      )}
    </div>
  );
};

