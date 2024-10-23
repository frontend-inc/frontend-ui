'use client'

import React from 'react'
import { TestimonialCard } from '../..'
import { TestimonialType } from '../../../types'

type TestimonialCardsProps = {
	size?: 'small' | 'large'
	items: TestimonialType[]
}

const TestimonialCards: React.FC<TestimonialCardsProps> = (props) => {
	const { size = 'small', items = [] } = props

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{items?.map((testimonial, i) => (
          <TestimonialCard
            key={i}
            size={size}
            image={testimonial.image}
            author={testimonial.title}
            rating={testimonial.rating}
            text={testimonial.description}
          />					
				))}
			</div>
		</div>
	)
}

export default TestimonialCards
