import React from 'react'
import { Box } from '@mui/material'
import { Carousel, CardVert } from '../..'
import { DocumentType } from '../../../types'

type CarouselViewProps = {
	items: DocumentType[]
	editing?: boolean
	defaultQuery?: any
	buttonText?: string
	handleClick?: (item: any) => void
	component?: React.FC<any>
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const CarouselView: React.FC<CarouselViewProps> = (props) => {
	const {
		items,
		editing,
		buttonText,
		handleClick,
		component: Component = CardVert,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<Carousel
			enableAutoPlay={enableAutoPlay}
			enableArrows={enableArrows}
			enableDots={enableDots}
		>
			{items?.map((item, index) => (
				<Box sx={sx.item}>
					<Component
						key={index}
						editing={editing}
						title={item?.title}
						description={item?.description}
						image={item?.image?.url}
						video={item?.video?.url}
						buttonText={buttonText}
						handleClick={() => handleClick(item)}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				</Box>
			))}
		</Carousel>
	)
}

export default CarouselView

const sx = {
	item: {
		pb: 4,
		px: 1,
	},
}
