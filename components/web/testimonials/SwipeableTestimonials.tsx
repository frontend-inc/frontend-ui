'use client'

import React from 'react'
import { Swipeable } from '../../../components'
import SwipeableTestimonialCard from './SwipeableTestimonialCard'
import { CarouselItem } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type SwipeableTestimonialsProps = {
  variant?: 'default' | 'fill' | 'outline'
	items: Record<string, any>[]
	enableAutoPlay?: boolean
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { enableAutoPlay = false, items = [] } = props

	return (
		<Swipeable enableDots enableAutoPlay={enableAutoPlay}>
			{items?.map((testimonial, i) => (
				<div key={i} className="flex items-center justify-center p-4 pb-[60px]">
					<SwipeableTestimonialCard
						avatar={testimonial.image}
						author={testimonial.title}
						text={testimonial.subtitle}
					/>
				</div>
			))}
		</Swipeable>
	)
}

export default SwipeableTestimonials
