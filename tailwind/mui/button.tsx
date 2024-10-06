
import React from 'react';
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from '../../shadcn/ui/button';
import { cn } from '../../shadcn/lib/utils';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary';

interface ButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {
  size?: ButtonSize;
  color?: ButtonColor;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  size = 'medium', 
  color = 'primary', 
  className,
  children,
  startIcon,
  endIcon,
  ...props 
}) => {
  const sizeMap: Record<ButtonSize, ShadcnButtonProps['size']> = {
    small: 'sm',
    medium: 'default',
    large: 'lg'
  };

  const colorMap: Record<ButtonColor, ShadcnButtonProps['variant']> = {
    primary: 'default',
    secondary: 'secondary'
  };

  return (
    <ShadcnButton
      size={sizeMap[size]}
      variant={colorMap[color]}
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </ShadcnButton>
  );
};

export {
  Button
}
