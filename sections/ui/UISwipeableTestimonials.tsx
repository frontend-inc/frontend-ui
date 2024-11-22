'use client'

import React from 'react'
import { Section, Heading, Stack } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UISwipeableTestimonialsProps = SectionProps &
	HeadingProps & StackProps & 
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
			fill={fill}
			border={border}
		>
			<Stack spacing={10}>
        <Heading
          label={label}
          title={title}
          subtitle={subtitle}
          textAlign='center'
          size={fontSize}
          editable={editable}
          handleChange={handleChange}
        />
        <Testimonials {...rest} layout="carousel" />
			</Stack>
		</Section>
	)
}

export default UISwipeableTestimonials
