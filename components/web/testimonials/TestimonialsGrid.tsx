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
	)
}

export default TestimonialsGrid

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
