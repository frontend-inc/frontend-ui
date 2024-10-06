
import React from 'react';
import { Button as ShadcnButton } from '../../shadcn/ui/button';
import { cn } from '../../shadcn/lib/utils';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled }) => {
  const variantClasses = variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-black';

  return (
    <ShadcnButton
      onClick={onClick}
      disabled={disabled}
      className={cn('px-4 py-2 rounded-md', variantClasses)}
    >
      {children}
    </ShadcnButton>
  );
};

export {
  Button
}
