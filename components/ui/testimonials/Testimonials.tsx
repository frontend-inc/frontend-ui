import React from 'react'
import { Grid, Box, Stack } from '@mui/material'
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
		<Box sx={sx.root}>
      <Typography sx={ sx.title } variant="h6" color="textPrimary">
        {title}
      </Typography>
      <Grid container spacing={0}>
        { testimonials?.map((testimonial, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Box sx={ sx.item }>
              <TestimonialCard 
                key={i}
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

export default Testimonials

const sx = {
	root: {
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
