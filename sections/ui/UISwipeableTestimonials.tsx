import React from 'react'
import { Section, Heading } from '../../components'
import { Testimonials } from '../../components'
import { TestimonialsProps } from '../../components/web/testimonials/Testimonials'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type UISwipeableTestimonialsProps = SectionProps &
	HeadingProps &
	TestimonialsProps

const UISwipeableTestimonials: React.FC<UISwipeableTestimonialsProps> = (
	props
) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		mode,
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
			mode={mode}
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
				<Testimonials {...rest} layout="carousel" />
			</Stack>
		</Section>
	)
}

export default UISwipeableTestimonials
