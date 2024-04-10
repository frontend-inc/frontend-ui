import React from 'react'
import { Box } from '@mui/material'
import TestimonialsGrid from './TestimonialsGrid'
import SwipeableTestimonials from './SwipeableTestimonials'
import { Placeholder } from '../..'

export type TestimonialsProps = {
	layout?: 'grid' | 'carousel'
	items: Record<string, any>[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const {
		layout = 'grid',
		enableArrows,
		enableAutoPlay,
		items = [],
	} = props

	return (
		<Box sx={sx.root}>
			{layout == 'carousel' ? (
				<SwipeableTestimonials
					items={items}
					enableAutoPlay={enableAutoPlay}
					enableArrows={enableArrows}
				/>
			) : (
				<TestimonialsGrid items={items} />
			)}
			{items?.length == 0 && (
				<Placeholder
					icon="Star"
					title="No testimonials yet."
					description="Your testimonials will appear here."
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
