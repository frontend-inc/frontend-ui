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
		size = 'sm',
		className,
	} = props || {}

	const titleVariant = {
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
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
			<div className="w-full flex flex-col justify-between">
				<div className="flex flex-col space-y-4">
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
							className="container mx-auto text-foreground/70 max-w-screen-md"
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
