import React from 'react';
import { Home, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 md:py-32 max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-surface-blue border border-brand-border flex items-center justify-center mx-auto text-brand-blue shadow-subtle">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-brand-orange">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed pt-1">
          The page you are looking for doesn't exist, has been moved, or the link may be outdated.
        </p>
      </div>

      <div className="pt-2">
        <Button
          to="/"
          variant="primary"
          size="lg"
          leftIcon={<Home className="w-4 h-4" />}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

