'use client'

import React, { useState, useEffect } from 'react'
import { cn } from 'frontend-shadcn'
import { useTheme } from '../../hooks'

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
	color?: string
	textAlign?: 'left' | 'center' | 'right'
	fontFamily?: string
	className?: string
	children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	color = 'text.primary',
	textAlign = 'left',	
	className,
	children,
}) => {

  const { headerFont, bodyFont } = useTheme()
  
	const baseClasses = cn(
		color === 'text.primary' && 'text-foreground',
		color == 'text.secondary' && 'text-muted-foreground',
		color,
		'whitespace-pre-line'
	)

	const variantClasses = {
		h1: 'text-6xl font-semibold tracking-tight',
		h2: 'text-5xl font-semibold tracking-tight',
		h3: 'text-4xl font-medium',
		h4: 'text-3xl font-medium',
		h5: 'text-2xl font-medium',
		h6: 'text-xl font-medium',
		subtitle1: 'text-lg font-medium',
		subtitle2: 'text-base font-medium',
		button: 'text-base',
		body1: 'text-base',
		body2: 'text-sm',
		caption: 'text-sm',
		overline: 'text-xs uppercase tracking-widest',
	}

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

  const [fontFamily, setFontFamily] = useState<string | null>(null)

  useEffect(() => {
    console.log('headerFont', headerFont)
    if(headerFont){
      setFontFamily(`font-['${headerFont}']`)
    }
  }, [headerFont])

	return (
		<div
			className={cn(
				baseClasses,
				fontFamily,
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
