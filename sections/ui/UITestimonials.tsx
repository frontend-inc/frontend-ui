'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, HeadingProps } from '../../types'

type UITestimonialsProps = SectionProps & HeadingProps & TestimonialsProps

const UITestimonials: React.FC<UITestimonialsProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
		bgColor,
		mode,
		py=12,
		px,
		maxWidth,
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
			<div className="flex flex-col space-y-2 w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={'center'}
				/>
				<Testimonials {...rest} layout="grid" />
			</div>
		</Section>
	)
}

export default UITestimonials
