'use client'
import React from 'react'
import { cn } from '@nextui-org/react'
import {  } from 'use-debounce'

export type TypographyProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'destructive'
  color?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  textAlign?: 'left' | 'center' | 'right'
  className?: string
  children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant,
    textAlign = 'left',
    className,
    children = '',
    color = 'textPrimary',
  } = props


  const colorClasses = {
    textPrimary: 'text-foreground',
    textSecondary: 'text-foreground/70',
    primary: 'text-primary',
    secondary: 'text-secondary',
    destructive: 'text-destructive',
    foreground: 'text-foreground',
    background: 'text-background',
  }

  const variantClasses = {
    h1: 'sm:text-5xl text-7xl font-bold tracking-tight',
    h2: 'sm:text-4xl text-6xl font-bold tracking-tight',
    h3: 'sm:text-3xl text-5xl font-semibold',
    h4: 'sm:text-2xl text-4xl font-semibold',
    h5: 'sm:text-2xl text-3xl font-semibold',
    h6: 'sm:text-xl text-2xl font-semibold',
    subtitle1: 'text-lg font-semibold leading-relaxed',
    subtitle2: 'text-md font-medium leading-relaxed',
    button: 'text-base',
    body1: 'text-sm font-normal leading-normal',
    body2: 'text-sm font-normal leading-normal',
    caption: 'text-xs text-foreground font-semibold uppercase tracking-wider',
    overline: 'text-xs',
    destructive: 'text-destructive text-sm italic',
  }

  const fontFamily = {
    h1: 'font-header',
    h2: 'font-header',
    h3: 'font-header',
    h4: 'font-header',
    h5: 'font-header',
    h6: 'font-header',
    subtitle1: 'font-header',
    subtitle2: 'font-header',
    button: 'font-body',
    body1: 'font-body',
    body2: 'font-body',
    caption: 'font-body',
    overline: 'font-body',
    destructive: 'font-body',
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div
      className={cn(
        'whitespace-pre-line',
        'w-full outline-none focus:outline-none focus:ring-0',
        fontFamily[variant],        
        alignmentClasses[textAlign],
        colorClasses[color],
        variantClasses[variant],
        className
      )}
    >
    { children }
    </div>
  )
}

export default Typography
