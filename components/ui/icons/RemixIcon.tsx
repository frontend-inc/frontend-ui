'use client'

import React, { forwardRef } from 'react'
import { cn } from '@nextui-org/react'

// <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.min.css" rel="stylesheet" />
type RemixIconProps = {
	name: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	className?: string
}

const RemixIcon = forwardRef<HTMLElement, RemixIconProps>((props, ref) => {
	const { name, className, size = 'lg' } = props

	const sizeClasses = {
		sm: 'text-sm',
		md: 'text-md',
		lg: 'text-lg',
		xl: 'text-xl',
	}

	return (
		<i
			ref={ref}
			className={cn(name, 'text-foreground', sizeClasses[size], className)}
		/>
	)
})

RemixIcon.displayName = 'RemixIcon'

export default RemixIcon
