'use client'

import React from 'react'
import { Label } from '../../../components'
import { Typography } from '../../core'
import { TypographyVariantsType } from '../../../types'
import { cn } from 'frontend-shadcn'

type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center' | 'right'
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
	className?: string
  secondaryAction?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign = 'left',
		secondaryAction,
		size = 'md',
		className,
	} = props || {}

	const titleVariant = {
		sm: 'h5',
		md: 'h4',
		lg: 'h3',
		xl: 'h2',
    '2xl': 'h1',
	}[size] as TypographyVariantsType

	const subtitleVariant = {
		sm: 'body1',
		md: 'body1',
		lg: 'subtitle2',
		xl: 'subtitle1',
    '2xl': 'subtitle1'
	}[size] as TypographyVariantsType

  const spacingClass = {
		sm: 'space-y-2',
		md: 'space-y-4',
		lg: 'space-y-4',
		xl: 'space-y-5',
    '2xl': 'space-y-6'
	}[size] 

	if (!title && !subtitle && !label) return null
	return (
		<div
			className={cn(
				'py-4 w-full flex justify-between items-center flex-col sm:flex-row',
				className
			)}
		>
			<div className={cn(
        "w-full container max-w-screen-md flex flex-col justify-between",
        textAlign === 'center' && 'mx-auto',
        )}>
				<div className={cn(
          "flex flex-col",
          spacingClass 
        )}>
					{label && (
						<div
							className={cn(
								textAlign === 'center' && 'text-center',
								textAlign === 'right' && 'text-right'
							)}
						>
							<Label label={label} className='text-primary' />
						</div>
					)}
					{title && (
						<Typography variant={titleVariant} textAlign={textAlign}>
							{title}
						</Typography>
					)}
					{subtitle && (
						<Typography
							variant={subtitleVariant}
							className="leading-8 text-foreground/70"
							textAlign={ textAlign }
						>
							{subtitle}
						</Typography>
					)}
				</div>
				{secondaryAction}
			</div>
		</div>
	)
}

export default Heading
