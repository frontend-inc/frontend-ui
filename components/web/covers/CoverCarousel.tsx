'use client'

import React from 'react'
import { Swipeable, Cover, Empty } from '../..'
import { CarouselItem } from 'frontend-shadcn'

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
	alignItems?: 'items-center' | 'items-start' | 'items-end'
}

const CoverCarousel: React.FC<CoverCarouselProps> = (props) => {
	const {
		items = [],
		enableOverlay = false,
		enableGradient = false,
		enableAutoPlay = false,
		alignItems = 'items-center',
	} = props

	return (
		<>
			<Swipeable enableArrows enableAutoPlay={enableAutoPlay}>
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
