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
    layout,
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		bgColor,
		bgImage,
		bgOverlay,
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
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack spacing={10}>
        <Heading
          label={label}
          title={title}
          subtitle={subtitle}
          textAlign={direction == 'row' ? 'left' : 'center'}
          size={fontSize}
          editable={editable}
          handleChange={handleChange}
        />				
				<Testimonials {...rest} layout={ layout } />
			</Stack>
		</Section>
	)
}

export default UITestimonials
