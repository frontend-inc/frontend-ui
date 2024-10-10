import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import { getCarouselResponsive } from '../../../helpers'
import { useTheme } from '@mui/material/styles'
import CarouselDot from './CarouselDot'
import CarouselLeftArrow from './CarouselLeftArrow'
import CarouselRightArrow from './CarouselRightArrow'
// Note: required global CSS import from _app or app/layout.tsx
// import 'react-multi-carousel/lib/styles.css'

type CarouselProps = {
	editing?: boolean
	children: React.ReactNode
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	responsive?: any
	styles?: any
}

const ReactCarousel: React.FC<CarouselProps> = (props) => {
	const theme = useTheme()
	const [responsive, setResponsive] = useState<any>(null)

	const {
		editing = false,
		children,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
		styles = {},
	} = props

	useEffect(() => {
		//@ts-ignore
		setResponsive(getCarouselResponsive(theme))
	}, [theme?.breakpoints])

	return (
		<div className='w-full'>
			{responsive && children && (
				<Carousel
					responsive={responsive}
					swipeable
					draggable
					infinite
					autoPlay={enableAutoPlay}
					arrows={enableArrows}
					showDots={enableDots}
					customDot={<CarouselDot />}
					customRightArrow={<CarouselRightArrow />}
					customLeftArrow={<CarouselLeftArrow />}
				>
					{children}
				</Carousel>
			)}
		</div>
	)
}

export default ReactCarousel

const sx = {
	root: {
		width: '100%',
	},
}
