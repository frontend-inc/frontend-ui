'use client'

import React from 'react'
import { Typography } from '../../../components'
import { SyntheticEventType, TypographyVariantsType } from '../../../types'
import { cn } from '@nextui-org/react'
import { BlurFade } from '../../../components'

type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center' | 'right'
  fullWidth?: boolean
	size?: 'sm' | 'md' | 'lg' | 'xl'
	className?: string
	secondaryAction?: React.ReactNode
	isEditing?: boolean
	handleChange?: (ev: SyntheticEventType) => void
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		isEditing,
    fullWidth=true,
		label,
		title,
		subtitle,
		textAlign = 'left',
		secondaryAction,
		size = 'md',
		className,
		handleChange,
	} = props || {}

	const titleVariant = {
		sm: 'h4',
		md: 'h4',
		lg: 'h2',
		xl: 'h1',
	}[size] as TypographyVariantsType

	const subtitleVariant = {
		sm: 'body1',
		md: 'subtitle2',
		lg: 'subtitle2',
		xl: 'subtitle1',
		'2xl': 'subtitle1',
	}[size] as TypographyVariantsType

	const spacingClass = {
		sm: 'space-y-2',
		md: 'space-y-3',
		lg: 'space-y-4',
		xl: 'space-y-5',
		'2xl': 'space-y-6',
	}[size]

	if (!title && !subtitle && !label) return null
	return (
		<div
			className={cn(
				'py-4 w-full flex justify-between flex-col sm:flex-row',
        fullWidth ? 'md:w-full' : 'md:basis-1/3',
				className
			)}
		>
			<div
				className={cn(
					'w-full container max-w-screen-md flex flex-col justify-between',
					textAlign === 'center' && 'mx-auto'
				)}
			>
				<div className={cn('flex flex-col', spacingClass)}>
					{label && (
						<BlurFade delay={0.2} inView>
							<div
								className={cn(
									textAlign === 'center' && 'text-center',
									textAlign === 'right' && 'text-right'
								)}
							>
								<Typography
									isEditing={isEditing}
									variant="caption"
									className={cn(
										'text-primary/90 uppercase tracking-widest font-semibold',
										textAlign === 'center' && 'text-center',
										textAlign === 'right' && 'text-right'
									)}
									name="label"
									handleChange={handleChange}
								>
									{label}
								</Typography>
							</div>
						</BlurFade>
					)}
					{title && (
						<BlurFade delay={0.25} inView>
							<Typography
								isEditing={isEditing}
								variant={titleVariant}
								textAlign={textAlign}
								name="title"
								handleChange={handleChange}
							>
								{title}
							</Typography>
						</BlurFade>
					)}
					{subtitle && (
						<BlurFade delay={0.3} inView>
							<Typography
								variant={subtitleVariant}
								className="leading-8 text-foreground/80"
								textAlign={textAlign}
								isEditing={isEditing}
								name="subtitle"
								handleChange={handleChange}
							>
								{subtitle}
							</Typography>
						</BlurFade>
					)}
				</div>
				{secondaryAction}
			</div>
		</div>
	)
}

export default Heading
