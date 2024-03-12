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
	component?: any
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
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
		autoPlay = false,
		arrows = false,
		showDots = true,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<Carousel autoPlay={autoPlay} arrows={arrows} showDots={showDots}>
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
