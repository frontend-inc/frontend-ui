'use client'

import React from 'react'
import { RemixIcon } from '..'
import { Typography } from '..'
import { cn } from 'frontend-shadcn'

type EmptyProps = {
	icon?: string
	title?: string
	description?: string
	buttons?: any
	variant?: 'accent' | 'default' | 'primary' | 'secondary' | 'destructive'
  className?: string
}

const Empty: React.FC<EmptyProps> = (props) => {
	const { icon, title, description, variant, className } = props

  const textClasses = {
    accent: 'text-accent',
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    destructive: 'text-destructive',
  }

	return (
		<div
      className={cn(
        "h-full w-full flex flex-col space-y-3 items-center justify-center",
        variant == 'destructive' && 'bg-destructive/10 border-destructive',
        variant == 'accent' && 'bg-accent/10 border-accent',
        className
      )}
    >
      {icon && (
        <RemixIcon 
          name={icon} 
          size='lg' 
          className={cn(
            variant && textClasses[variant]
          )} 
        />
      )}			
        <Typography 
          variant="body1" 
          className={cn(
            "text-md text-bold",            
            variant && textClasses[variant]            
          )}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2"
          className={cn(
            'text-sm font-normal',
            variant && textClasses[variant]
          )}
        >
          {description}
        </Typography>			
      </div>
	)
}
export default Empty
