import React from 'react'
import { Stack } from '../../../tailwind'
import TestimonialCards from './TestimonialCards'
import SwipeableTestimonials from './SwipeableTestimonials'
import { Placeholder } from '../..'
import { TestimonialType } from '../../../types'

export type TestimonialsProps = {
	layout?: 'grid' | 'carousel'
	items: TestimonialType[]
	enableAutoPlay?: boolean
	enableArrows?: boolean
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const { layout = 'grid', enableArrows, enableAutoPlay, items = [] } = props

	return (
		<Stack direction="column" className="w-full">
			{layout == 'carousel' ? (
				<SwipeableTestimonials
					items={items}
					enableAutoPlay={enableAutoPlay}
					enableArrows={enableArrows}
				/>
			) : (
				<TestimonialCards items={items} />
			)}
			{items?.length == 0 && (
				<Placeholder
					icon="Star"
					title="No testimonials yet."
					description="Your testimonials will appear here."
				/>
			)}
		</Stack>
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
