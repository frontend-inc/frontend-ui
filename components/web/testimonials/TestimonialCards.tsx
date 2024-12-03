'use client'

import React from 'react'
import { TestimonialCard } from '../..'
import { TestimonialType } from '../../../types'

type TestimonialCardsProps = {
	size?: 'small' | 'large'
	items: TestimonialType[]
  variant?: 'fill' | 'outline' | 'default'
}

const TestimonialCards: React.FC<TestimonialCardsProps> = (props) => {
	const { size = 'small', variant, items = [] } = props

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{items?.map((testimonial, i) => (
					<TestimonialCard
						key={i}
						size={size}
						image={testimonial.image}
						author={testimonial.title}
						text={testimonial.subtitle}
            variant={ variant }            
					/>
				))}
			</div>
		</div>
	)
}

export default TestimonialCards
