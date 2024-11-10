'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, HeadingProps } from '../../types'

type UISwipeableTestimonialsProps = SectionProps &
	HeadingProps &
	TestimonialsProps

const UISwipeableTestimonials: React.FC<UISwipeableTestimonialsProps> = (
	props
) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
		bgColor,
		mode,
		py=12,
		px,
		maxWidth = 'xl',
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-4 w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign="center"
					size="lg"
				/>
				<Testimonials {...rest} layout="carousel" />
			</div>
		</Section>
	)
}

export default UISwipeableTestimonials
