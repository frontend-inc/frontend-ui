'use client'

import React from 'react'
import { Swipeable, Cover, Empty } from '../..'

export type CoverCarouselProps = {
	items: {
		title?: string
		subtitle?: string
		image: string
		buttonText?: string
		path?: string
	}[]
	enableAutoPlay?: boolean
	showDots?: boolean
	enableOverlay?: boolean
	enableGradient?: boolean
	enableBorder?: boolean
	enableArrows?: boolean
	opacity?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const CoverCarousel: React.FC<CoverCarouselProps> = (props) => {
	const {
		items = [],
		enableOverlay = false,
		enableGradient = false,
		enableArrows = false,
		enableAutoPlay = false,
		alignItems = 'center',
	} = props

	return (
		<>
			<Swipeable enableAutoPlay={enableAutoPlay} enableArrows={enableArrows}>
				{items?.map((item, index) => (
					<Cover
						key={index}
						title={item?.title}
						subtitle={item?.subtitle}
						image={item?.image}
						buttonText={item?.buttonText}
						path={item?.path}
						enableOverlay={enableOverlay}
						enableGradient={enableGradient}
						alignItems={alignItems}
					/>
				))}
			</Swipeable>
			{items?.length === 0 && (
				<Empty
					icon="ri-carousel-view"
					title="No cover images"
					description="Cover images will appear here."
				/>
			)}
		</>
	)
}

export default CoverCarousel
