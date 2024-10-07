import React from 'react'
import { cn } from '../../shadcn/lib/utils'

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
	color?: 'text.primary' | 'text.secondary'
	textAlign?: 'left' | 'center' | 'right'
	fontFamily?: string
	className?: string
	children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	color = 'text.primary',
	textAlign = 'left',
	fontFamily = 'Inter',
	className,
	children,
}) => {
	const baseClasses = cn(
		color === 'text.primary' ? 'text-foreground' : 'text-muted-foreground',
		'whitespace-pre-line'
	)

	const variantClasses = {
		h1: 'text-6xl font-bold',
		h2: 'text-5xl font-bold',
		h3: 'text-4xl font-bold',
		h4: 'text-3xl font-bold',
		h5: 'text-2xl font-bold',
		h6: 'text-xl font-medium',
		subtitle1: 'text-lg font-medium',
		subtitle2: 'text-base font-medium',
		button: 'text-base font-medium uppercase tracking-widest',
		body1: 'text-base',
		body2: 'text-sm',
		caption: 'text-xs uppercase tracking-widest',
		overline: 'text-xs uppercase tracking-widest',
	}

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	const fontFamilyClass = `font-['${fontFamily}']`

	return (
		<div
			className={cn(
				baseClasses,
				fontFamilyClass,
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
