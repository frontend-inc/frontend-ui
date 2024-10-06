
import React from 'react';
import { cn } from '../../shadcn/lib/utils';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const baseClasses = 'text-primary';

  const variantClasses = {
    h1: 'text-6xl font-bold',
    h2: 'text-5xl font-bold',
    h3: 'text-4xl font-bold',
    h4: 'text-3xl font-semibold',
    h5: 'text-2xl font-semibold',
    h6: 'text-xl font-medium',
    subtitle1: 'text-lg font-medium text-secondary',
    subtitle2: 'text-base font-medium text-secondary',
    body1: 'text-base text-primary',
    body2: 'text-sm text-primary',
    caption: 'text-xs text-secondary italic',
    overline: 'text-xs text-secondary uppercase tracking-widest',
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant])}>
      {children}
    </div>
  );
};

export {
  Typography
}
