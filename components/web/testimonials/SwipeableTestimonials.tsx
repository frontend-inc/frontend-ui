'use client'

import React from 'react'
import { Swipeable } from '../../../components'
import SwipeableTestimonialCard from './SwipeableTestimonialCard'
import { CarouselItem } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type SwipeableTestimonialsProps = {
	items: Record<string, any>[]
	enableAutoPlay?: boolean
  variant?: 'outline' | 'fill' | 'default'
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { enableAutoPlay = false, items = [], variant } = props || {}

	return (
		<Swipeable itemsPerSlide={2} enableDots enableAutoPlay={enableAutoPlay}>
			{items?.map((testimonial, i) => (
				<div key={i} className="flex items-center justify-center p-4 pb-[60px]">
					<SwipeableTestimonialCard
						avatar={testimonial.image}
						author={testimonial.title}
						text={testimonial.subtitle}
            variant={ variant }
					/>
				</div>
			))}
		</Swipeable>
	)
}

export default SwipeableTestimonials
