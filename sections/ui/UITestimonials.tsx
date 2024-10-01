import React from 'react'
import { Section, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type UITestimonialsProps = SectionProps & HeadingProps & TestimonialsProps

const UITestimonials: React.FC<UITestimonialsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack direction="column" spacing={3} sx={{ width: '100%' }}>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={'center'}
				/>
				<Testimonials {...rest} layout='grid' />
			</Stack>
		</Section>
	)
}

export default UITestimonials
