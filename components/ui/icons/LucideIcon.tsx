'use client'

import React from 'react'
import * as icons from 'lucide-react'
import { cn } from 'frontend-shadcn'

type LucideIconProps = {
	name: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	className?: string
}

const LucideIcon: React.FC<LucideIconProps> = (props) => {

  const {
    name,
    className,
    size = 'sm',
  } = props
  
	const Icon = icons[name]
	if (!Icon) return null

	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8',
	}

	return (
		<Icon className={cn('text-foreground', sizeClasses[size], className)} />
	)
}

export default LucideIcon
