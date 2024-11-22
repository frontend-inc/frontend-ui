'use client'

import React from 'react'
import { Section, Stack, Row, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UITestimonialsProps = SectionProps & HeadingProps 
  & StackProps & TestimonialsProps

const UITestimonials: React.FC<UITestimonialsProps> = (props) => {
	const {
    direction='column',
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
			<Stack direction={direction}>
        <Row size="1/3">
          <Heading
            label={label}
            title={title}
            subtitle={subtitle}
            textAlign={direction == 'row' ? 'left' : 'center'}
            size={fontSize}
          />
        </Row>
        <Row size="2/3">
				  <Testimonials {...rest} layout="grid" />
        </Row>
			</Stack>
		</Section>
	)
}

export default UITestimonials
