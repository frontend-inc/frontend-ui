import React from 'react'
import { Stack } from '@mui/material'
import {
	Icon,
	Placeholder,
} from '../../../components'
import TestimonialCard from './TestimonialCard'
import { Typography } from '@mui/material'

type TestimonialsProps = {
	title?: string
  testimonials: Record<string, any>[]
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {

  const {
		title,
    testimonials=[],
	} = props

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="row" justifyContent={'space-between'} spacing={1}>
				<Typography variant="h6" color="textPrimary">
					{title}
				</Typography>
			</Stack>
      <Stack direction="row" justifyContent={'space-between'} spacing={1}>
        { testimonials?.map((testimonial, i) => (
          <TestimonialCard 
            key={i}
            image={testimonial.avatar}        
            author={testimonial.author}
            rating={testimonial.rating}
            text={testimonial.text}          
          />
        ))}
      </Stack>
			{testimonials?.length === 0 && (
				<Placeholder
					icon={<Icon name="Star" />}
					title="No testimonails yet."
					description="Testimonials will appear here."
				/>
			)}
		</Stack>
	)
}

export default Testimonials

const sx = {
	root: {
		width: '100%',
	},
}
