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
		textAlign = 'center',
		fontSize = 'lg',
		fill,
		border,
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'lg',
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
			fill={fill}
			border={border}
		>
			<div className="flex flex-col space-y-4 w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
					size={fontSize}
				/>
				<Testimonials {...rest} layout="carousel" />
			</div>
		</Section>
	)
}

export default UISwipeableTestimonials
