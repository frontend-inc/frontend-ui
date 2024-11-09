'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

interface TypographyProps {
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
	textAlign?: 'left' | 'center' | 'right'
	className?: string
	children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	textAlign = 'left',
	className,
	children,
}) => {
	const variantClasses = {
		h1: 'text-5xl sm:text-6xl font-semibold tracking-tight',
		h2: 'text-4xl sm:text-5xl font-semibold tracking-tight',
		h3: 'text-3xl sm:text-4xl font-semibold tracking-tight',
		h4: 'text-3xl font-semibold tracking-tight',
		h5: 'text-2xl font-medium tracking-tight',
		h6: 'text-xl font-medium tracking-tight',
		subtitle1: 'text-xl font-normal tracking-tight leading-8',
		subtitle2: 'text-lg leading-8',
		button: 'text-base',
		body1: 'text-md leading-normal',
		body2: 'text-sm leading-normal',
		caption: 'text-xs',
		overline: 'text-xs uppercase tracking-widest',
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
	}

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	return (
		<div
			className={cn(
				'text-foreground',
				fontFamily[variant],
				variantClasses[variant],
				alignmentClasses[textAlign],
				className
			)}
		>
			{children}
		</div>
	)
}

export { Typography }
