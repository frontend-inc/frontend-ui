import React from 'react'
import { Carousel } from '../../../components'
import { IMAGE_CAROUSEL_RESPONSIVE } from '../../../constants/index'

type CarouselImageProps = {
	children: React.ReactNode
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	responsive?: any
}

const CarouselImage: React.FC<CarouselImageProps> = (props) => {
	const {
		children,
		arrows = false,
		showDots = true,
		responsive = IMAGE_CAROUSEL_RESPONSIVE,
	} = props

	return (
		<Carousel
			autoPlay={false}
			responsive={responsive}
			arrows={arrows}
			showDots={showDots}
		>
			{children}
		</Carousel>
	)
}

export default CarouselImage
