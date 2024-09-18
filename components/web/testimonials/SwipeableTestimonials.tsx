import React from 'react'
import { Box } from '@mui/material'
import { Swipeable } from '../..'
import TestimonialCard from './TestimonialCard'

type SwipeableTestimonialsProps = {
	items: Record<string, any>[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { enableAutoPlay = false, enableArrows = false, items = [] } = props

	return (
		<Box>
			<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
				{items?.map((testimonial, i) => (
					<Box sx={sx.item} key={i}>
						<TestimonialCard
							size="large"
							image={testimonial.image}
							author={testimonial.title}
							rating={testimonial.rating}
							text={testimonial.description}
						/>
					</Box>
				))}
			</Swipeable>
		</Box>
	)
}

export default SwipeableTestimonials

const sx = {
	item: {
		p: 2,
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
