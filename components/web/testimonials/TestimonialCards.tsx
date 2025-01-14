'use client'

import React from 'react'
import { TestimonialType } from '../../../types'
import { Typography } from '../../../components'
import {
	Card,
	CardBody,
	CardHeader,
	User,
	ScrollShadow,
} from '@nextui-org/react'
import { getInitials } from '../../../helpers'
import { TestimonialCard, TestimonialCardType } from './TestimonialCard'

type TestimonialCardsProps = {
	size?: 'small' | 'large'
	items: TestimonialCardType[]
	variant?: 'fill' | 'outline' | 'default'
}

const TestimonialCards: React.FC<TestimonialCardsProps> = (props) => {
	const { variant, items = [] } = props

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{items?.map((testimonial, i) => (
					<TestimonialCard
						key={i}
						avatar={testimonial.avatar}
						author={testimonial.author}
						text={testimonial.text}
						variant={variant}
					/>
				))}
			</div>
		</div>
	)
}

export default TestimonialCards
