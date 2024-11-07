'use client'

import React from 'react'
import { Swipeable } from '../..'
import SwipeableTestimonialCard from './SwipeableTestimonialCard'
import { cn } from 'frontend-shadcn'

type SwipeableTestimonialsProps = {
	items: Record<string, any>[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { enableAutoPlay = false, enableArrows = false, items = [] } = props

	return (
    <div className="w-full flex justify-center">
			<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
				{items?.map((testimonial, i) => (
					<div
						className={cn(
							'flex items-center justify-center p-2',
							enableArrows && 'px-6'
						)}
						key={i}
					>
						<SwipeableTestimonialCard
							avatar={testimonial.image}
							author={testimonial.title}
							text={testimonial.description}
						/>
					</div>
				))}
			</Swipeable>
      </div>
	)
}

export default SwipeableTestimonials
