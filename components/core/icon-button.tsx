'use client'

import React, { forwardRef } from 'react'
import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type IconButtonColor = 'primary' | 'secondary' | 'ghost'
type IconButtonVariant = 'rounded' | 'circular'

interface IconButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {
  color?: IconButtonColor
  variant?: IconButtonVariant
  children: React.ReactNode
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { color = 'ghost', variant = 'rounded', className, children, ...props },
    ref
  ) => {
    const variantClasses: Record<IconButtonVariant, string> = {
      rounded: 'rounded-md',
      circular: 'rounded-full',
    }

    return (
      <ShadcnButton
        ref={ref}
        size="icon"
        variant="ghost"
        className={cn(
          'min-w-[36px] min-h-[36px] text-foreground bg-transparent hover:bg-muted',
          'flex items-center justify-center',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </ShadcnButton>
    )
  }
)

IconButton.displayName = 'IconButton'

export { IconButton }