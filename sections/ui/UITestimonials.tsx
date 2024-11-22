'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UITestimonialsProps = SectionProps &
	HeadingProps &
	StackProps &
	TestimonialsProps

const UITestimonials: React.FC<UITestimonialsProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'lg',
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		editable,
		handleChange,
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
			<Stack direction={direction} spacing={10}>
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={direction == 'row' ? 'left' : 'center'}
						size={fontSize}
						editable={editable}
						handleChange={handleChange}
					/>
				</Stack>
				<Stack direction={direction} size="2/3">
					<Testimonials {...rest} layout="grid" />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UITestimonials
