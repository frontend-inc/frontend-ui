import React from 'react'
import { Box, Button } from '@mui/material'

type CarouselDotProps = {
	onClick?: () => void
	styles?: any
	index?: number
	active?: boolean
	onMove?: () => void
	carouselState?: {
		currentSlide: number
		deviceType: string
	}
}

const CarouselDot: React.FC<CarouselDotProps> = (props) => {
	const { onClick, active, index, onMove, styles = {}, ...rest } = props

	const {
		carouselState: { currentSlide, deviceType },
	} = rest

	// onMove means if dragging or swiping in progress.
	// active is provided by this lib for checking if the item is active or not.
	return (
		<Button
			disableRipple
			sx={sx.button}
			className={active ? 'active' : 'inactive'}
			onClick={() => onClick()}
		>
			<Box
				sx={{
					...sx.dot,
					...(active && sx.dotActive),
					...styles,
				}}
			/>
		</Button>
	)
}

export default CarouselDot

const sx = {
	button: {
		py: 1,
		px: 0,
		boxShadow: 0,
		mx: '0px',
		'&:hover': {
			boxShadow: 0,
			bgcolor: 'transparent',
		},
	},
	dot: {
		width: '100%',
		height: '4px',
		bgcolor: 'grey.200',
		transition: 'all 0.3s ease-in-out',
	},
	dotActive: {
		bgcolor: 'primary.main',
	},
}
