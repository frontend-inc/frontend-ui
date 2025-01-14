'use client'

import React from 'react'
import { Swipeable } from '../../../components'
import { Container } from '../../../components'
import { TestimonialCard, TestimonialCardType } from './TestimonialCard'

type SwipeableTestimonialsProps = {
	items: TestimonialCardType[]
  size?: 'small' | 'large'
	variant?: 'outline' | 'fill' | 'default'
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {
	const { items = [], variant } = props || {}

	return (
    <Container maxWidth="lg">
		<Swipeable itemsPerSlide={3} enableDots>
			{items?.map((testimonial, i) => (
				<div key={i} className="flex items-center justify-center pb-[60px]">
					<TestimonialCard
          	author={testimonial.author}
						avatar={testimonial.avatar}
						text={testimonial.text}
						variant={variant}
					/>
				</div>
			))}
		</Swipeable>
    </Container>

	)
}

export default SwipeableTestimonials
