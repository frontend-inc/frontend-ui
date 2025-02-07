'use client'
import React from 'react'
import { cn } from '@nextui-org/react'

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
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  textAlign?: 'left' | 'center' | 'right'
  className?: string
  color?: string
  children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant,
    textAlign = 'left',
    className,
    children = '',
    fontWeight = 'normal',
    color = 'text-foreground',
  } = props  


  const fontWeightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  }

  const variantClasses = {
    h1: 'text-5xl font-bold tracking-tight',
    h2: 'text-4xl font-bold tracking-tight',
    h3: 'text-3xl font-semibold',
    h4: 'text-2xl font-semibold',
    h5: 'text-xl font-semibold',
    h6: 'text-lg font-semibold',
    subtitle1: 'text-md font-semibold leading-relaxed',
    subtitle2: 'text-md font-medium leading-relaxed',
    button: 'text-base',
    body1: 'text-base font-normal leading-normal',
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
        color,
        fontFamily[variant],     
        alignmentClasses[textAlign],        
        variantClasses[variant],
        fontWeightClasses[fontWeight],   
        className
      )}
    >
      { children }
    </div>
  )
}

export default Typography
