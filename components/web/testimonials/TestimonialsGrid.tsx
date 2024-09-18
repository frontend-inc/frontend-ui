import React from 'react'
import { Grid, Box } from '@mui/material'
import TestimonialCard from './TestimonialCard'
import { TestimonialType } from '../../../types'

type TestimonialsGridProps = {
	size?: 'small' | 'large'
	items: TestimonialType[]
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = (props) => {
	const { size = 'small', items = [] } = props

	return (
		<Box sx={sx.root}>
			<Grid container spacing={0}>
				{items?.map((testimonial, i) => (
					<Grid item key={i} xs={12} sm={6} md={4}>
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
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default TestimonialsGrid

const sx = {
	root: {},
	item: {
		p: 2,
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
}
