import React from 'react'
import { Box } from '@mui/material'
import { Container, TestimonialCard } from '../..'
import { TestimonialType } from '../../../types'

type TestimonialCardsProps = {
	size?: 'small' | 'large'
	items: TestimonialType[]
}

const TestimonialCards: React.FC<TestimonialCardsProps> = (props) => {
	const { size = 'small', items = [] } = props

	return (
		<Container maxWidth="md">
			<Box sx={sx.root}>
				{items?.map((testimonial, i) => (
					<Box sx={sx.item}>
						<TestimonialCard
							key={i}
							size={size}
							image={testimonial.image}
							author={testimonial.title}
							rating={testimonial.rating}
							text={testimonial.description}
						/>
					</Box>
				))}
			</Box>
		</Container>
	)
}

export default TestimonialCards

const sx = {
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
		gap: '16px',
		pb: 1,
	},
	item: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
}
