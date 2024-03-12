import React from 'react'
import { Grid, Box } from '@mui/material'
import { Icon, Placeholder } from '../..'
import TestimonialCard from './TestimonialCard'

type TestimonialsGridProps = {
	size?: 'small' | 'large'
	testimonials: Record<string, any>[]
}

const TestimonialsGrid: React.FC<TestimonialsGridProps> = (props) => {
	const { size = 'small', testimonials = [] } = props

	return (
		<Box sx={sx.root}>
			<Grid container spacing={0}>
				{testimonials?.map((testimonial, i) => (
					<Grid item key={i} xs={12} sm={6} md={4}>
						<Box sx={sx.item}>
							<TestimonialCard
								key={i}
								size={size}
								image={testimonial.avatar}
								author={testimonial.author}
								rating={testimonial.rating}
								text={testimonial.text}
							/>
						</Box>
					</Grid>
				))}
			</Grid>
			{testimonials?.length === 0 && (
				<Placeholder
					icon={<Icon name="Star" />}
					title="No testimonials yet."
					description="Testimonials will appear here."
				/>
			)}
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
