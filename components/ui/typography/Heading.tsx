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
	size?: 'sm' | 'md' | 'lg' | 'xl'
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
		xl: 'h1',
	}[size] as TypographyVariantsType

	const subtitleVariant = {
		sm: 'body1',
		md: 'body1',
		lg: 'subtitle2',
		xl: 'subtitle1',
	}[size] as TypographyVariantsType

	if (!title && !subtitle && !label) return null
	return (
		<div
			className={cn(
				'py-4 px-2 w-full flex justify-between items-center flex-col sm:flex-row',
				className
			)}
		>
			<div className={cn(
        "w-full container max-w-screen-md flex flex-col justify-between",
        textAlign === 'center' && 'mx-auto',
        )}>
				<div className="flex flex-col space-y-5">
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
							textAlign={textAlign}
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
