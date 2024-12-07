'use client'

import React from 'react'
import TestimonialCards from './TestimonialCards'
import SwipeableTestimonials from './SwipeableTestimonials'
import { Empty } from '../..'
import { TestimonialType } from '../../../types'

export type TestimonialsProps = {
	layout?: 'grid' | 'carousel'
	items: TestimonialType[]
	enableAutoPlay?: boolean
	variant?: 'fill' | 'outline' | 'default'
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const { layout = 'grid', variant, enableAutoPlay, items = [] } = props

	return (
		<div className="flex flex-col w-full">
			{layout == 'carousel' ? (
				<SwipeableTestimonials
					variant={variant}
					items={items}
					enableAutoPlay={enableAutoPlay}
				/>
			) : (
				<TestimonialCards variant={variant} items={items} />
			)}
			{items?.length == 0 && (
				<Empty
					icon="ri-double-quotes-l-line"
					title="No testimonials"
					description="Your testimonials will appear here."
				/>
			)}
		</div>
	)
}

export default Testimonials
