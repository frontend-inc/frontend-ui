'use client'

import React from 'react'
import { Typography } from '../../../components'
import { SyntheticEventType, TypographyVariantsType } from '../../../types'
import { cn } from 'frontend-shadcn'
import { BlurFade } from '../../../components'

type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center' | 'right'
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
	className?: string
	secondaryAction?: React.ReactNode
	editable?: boolean
	handleChange?: (ev: SyntheticEventType) => void
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		editable,
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
		'2xl': 'subtitle1',
	}[size] as TypographyVariantsType

	const spacingClass = {
		sm: 'space-y-2',
		md: 'space-y-4',
		lg: 'space-y-4',
		xl: 'space-y-5',
		'2xl': 'space-y-6',
	}[size]

	if (!title && !subtitle && !label) return null
	return (
		<div
			className={cn(
				'py-4 w-full flex justify-between items-center flex-col sm:flex-row',
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
            <BlurFade delay={0.20} inView>
              <div
                className={cn(
                  textAlign === 'center' && 'text-center',
                  textAlign === 'right' && 'text-right'
                )}
              >
                <Typography
                  editable={editable}
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
                editable={editable}
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
            <BlurFade delay={0.30} inView>
              <Typography
                variant={subtitleVariant}
                className="leading-8 text-foreground/80"
                textAlign={textAlign}
                editable={editable}
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
