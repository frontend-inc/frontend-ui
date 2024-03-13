import React from 'react'
import { Box } from '@mui/material'
import TestimonialsGrid from './TestimonialsGrid'
import SwipeableTestimonials from './SwipeableTestimonials'
import { Typography } from '@mui/material'

type TestimonialsProps = {
	title?: string
	layout?: 'grid' | 'carousel'
	testimonials: Record<string, any>[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const {
		title,
		layout = 'grid',
		enableArrows,
		enableAutoPlay,
		testimonials = [],
	} = props

	return (
		<Box sx={sx.root}>
			{title && (
				<Typography sx={sx.title} variant="h5" color="textPrimary">
					{title}
				</Typography>
			)}
			{layout == 'grid' && <TestimonialsGrid testimonials={testimonials} />}
			{layout == 'carousel' && (
				<SwipeableTestimonials
					enableAutoPlay={enableAutoPlay}
					enableArrows={enableArrows}
					testimonials={testimonials}
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
		textAlign: 'center',
	},
	item: {
		p: 2,
		height: '100%',
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
			xs: 'flex-start',
		},
	},
}
