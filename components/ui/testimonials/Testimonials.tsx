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
      <Typography sx={ sx.title } variant="h6" color="textPrimary">
        {title}
      </Typography>
      <Stack direction={{ sm: 'row', xs: 'column' }} sx={ sx.testimonials } spacing={4}>
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
  title: {
    textAlign: 'center'
  },
  testimonials: {
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    justifyContent: {
      sm: 'center',
      xs: 'flex-start'
    }
  }
}
