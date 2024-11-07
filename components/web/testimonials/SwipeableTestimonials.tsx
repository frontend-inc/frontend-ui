'use client'

import React from 'react'
import { Swipeable } from '../..'
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
					<div
            key={i}
						className='flex items-center justify-center p-2 px-6'						
					>
						<SwipeableTestimonialCard
							avatar={testimonial.avatar}
							author={testimonial.title}
							text={testimonial.description}
						/>
					</div>
				))}
			</Swipeable>
	)
}

export default SwipeableTestimonials
