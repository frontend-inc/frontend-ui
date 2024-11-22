'use client'

import React from 'react'
import { Swipeable } from '../../../components'
import SwipeableTestimonialCard from './SwipeableTestimonialCard'
import { cn } from 'frontend-shadcn'

type SwipeableTestimonialsProps = {
	items: Record<string, any>[]
	enableAutoPlay?: boolean
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { enableAutoPlay = false, items = [] } = props

	return (
		<Swipeable enableArrows enableAutoPlay={enableAutoPlay}>
			{items?.map((testimonial, i) => (
				<div key={i} className="flex items-center justify-center p-4">
					<SwipeableTestimonialCard
						avatar={testimonial.avatar}
						author={testimonial.title}
						text={testimonial.subtitle}
					/>
				</div>
			))}
		</Swipeable>
	)
}

export default SwipeableTestimonials
