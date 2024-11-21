'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UITestimonialsProps = SectionProps & HeadingProps 
  & StackProps & TestimonialsProps

const UITestimonials: React.FC<UITestimonialsProps> = (props) => {
	const {
    direction='column',
    split='1/3',
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize='lg',
		bgColor,
		mode,
		py,
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
			<Stack direction={direction} split={split}>
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
          size={fontSize}
				/>
				<Testimonials {...rest} layout="grid" />
			</Stack>
		</Section>
	)
}

export default UITestimonials
