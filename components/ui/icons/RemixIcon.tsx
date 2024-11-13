'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

// <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.min.css" rel="stylesheet" />
type RemixIconProps = {
	name: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	className?: string
}

const RemixIcon: React.FC<RemixIconProps> = ({
	name,
	className,
	size = 'md',
}) => {

	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8',
	}

	return (
		<i className={cn(name, 'text-foreground', sizeClasses[size], className)} />
	)
}

export default RemixIcon
