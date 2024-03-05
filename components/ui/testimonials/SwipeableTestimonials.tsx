import React from 'react'
import { Grid, Box, Stack } from '@mui/material'
import {
	Icon,
	Placeholder,
  Swipeable
} from '../../../components'
import TestimonialCard from './TestimonialCard'
import { Typography } from '@mui/material'

type SwipeableTestimonialsProps = {
  testimonials: Record<string, any>[]
	enableAutoPlay?: boolean
	enableArrows?: boolean	
}

const SwipeableTestimonials: React.FC<SwipeableTestimonialsProps> = (props) => {

  const {
    enableAutoPlay=false,
    enableArrows=false,
    testimonials=[],
	} = props

	return (
		<Box>
      <Swipeable 
        enableAutoPlay={enableAutoPlay}
        enableArrows={enableArrows}
      >
        { testimonials?.map((testimonial, i) => (
          <Box sx={ sx.item } key={i}>
            <TestimonialCard 
              size='large'
              image={testimonial.avatar}        
              author={testimonial.author}
              rating={testimonial.rating}
              text={testimonial.text}          
            />
          </Box>
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

export default SwipeableTestimonials

const sx = {
  item: {
    p: 2,
    height: "100%",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
