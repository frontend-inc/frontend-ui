import React from 'react'
import { Grid, Box, Stack } from '@mui/material'
import {
	Icon,
	Placeholder,
  Swipeable
} from '../../../components'
import SwipeableTestimonialCard from './SwipeableTestimonialCard'
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
    autoPlay=false,
    enableArrows=false,
    testimonials=[],
	} = props

	return (
		<Box sx={sx.root}>
      <Typography sx={ sx.title } variant="h6" color="textPrimary">
        {title}
      </Typography>
      <Swipeable 
        autoPlay={autoPlay}
        enableArrows={enableArrows}
      >
        { testimonials?.map((testimonial, i) => (
          <SwipeableTestimonialCard 
            key={i}
            image={testimonial.avatar}        
            author={testimonial.author}
            rating={testimonial.rating}
            text={testimonial.text}          
          />
        ))}
      </Swipeable>
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

export default Testimonials

const sx = {
	root: {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
	},
  title: {
    textAlign: 'center'
  },
  item: {
    p: 2,
    height: "100%",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
