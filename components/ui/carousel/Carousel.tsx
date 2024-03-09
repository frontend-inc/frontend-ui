import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import { Box } from '@mui/material'
import { getCarouselResponsive } from '../../../helpers'
import { useTheme } from '@mui/material/styles'
import CarouselDot from './CarouselDot'
import { useResponsive } from '../../../hooks'
import { muiTheme } from '../../../theme'
// Note: required global CSS import from _app or app/layout.tsx
// import 'react-multi-carousel/lib/styles.css'

type CarouselProps = {
	editing?: boolean
	children: React.ReactNode
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	responsive?: any
	styles?: any
}

const ReactCarousel: React.FC<CarouselProps> = (props) => {
	const theme = useTheme()
	const [responsive, setResponsive] = useState<any>(null)

	const {
		editing = false,
		children,
		autoPlay = false,
		arrows = false,
		showDots = true,
		styles = {},
	} = props

	const { breakpoint } = useResponsive()

	const [width, setWidth] = useState<number | undefined>(960)

	useEffect(() => {
		//@ts-ignore
		setResponsive(getCarouselResponsive(theme))
	}, [theme?.breakpoints])

	useEffect(() => {
		switch (breakpoint) {
			case 'sm':
				setWidth(muiTheme?.breakpoints.values.sm)
				break
			case 'md':
				setWidth(muiTheme?.breakpoints.values.md)
				break
			case 'lg':
				setWidth(muiTheme?.breakpoints.values.lg)
				break
			case 'xl':
				setWidth(muiTheme?.breakpoints.values.xl)
				break
			case null:
				setWidth(muiTheme?.breakpoints.values.xl)
				break
			default:
				setWidth(muiTheme?.breakpoints.values.md)
				break
		}
	}, [breakpoint])

	return (
		<Box
			sx={{
				...sx.root,
				maxWidth: editing ? width - 320 : width,
				...(styles && styles),
			}}
		>
			{responsive && children && (
				<Carousel
					responsive={responsive}
					swipeable
					draggable
					infinite
					autoPlay={autoPlay}
					arrows={arrows}
					showDots={showDots}
					customDot={<CarouselDot />}
				>
					{children}
				</Carousel>
			)}
		</Box>
	)
}

export default ReactCarousel

const sx = {
	root: {
		width: '100%',
	},
}
