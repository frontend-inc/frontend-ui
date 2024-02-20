import React from 'react'
import { Box as BoxMui } from '@mui/material'

type BoxProps = {
	children: React.ReactNode
	height?: string
	width?: string
	boxRadius?: number
	borderSize?: number
	borderColor?: string
	bgcolor?: string
	justifyContent?: string
	alignItems?: string
	flexDirection?: string
	gap?: number
	p?: number
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
	const {
		height,
		width,
		boxRadius,
		borderSize,
		borderColor,
		bgcolor,
		justifyContent,
		alignItems,
		flexDirection,
		gap,
		p,
	} = props

	return (
		<BoxMui
			sx={{
				...sx.root,
				height,
				width,
				...(borderSize > 0 && {
					border: `${borderSize}px solid ${borderColor}`,
				}),
				bgcolor,
				boxRadius,
				justifyContent,
				alignItems,
				flexDirection,
				gap: `${gap}px`,
				p,
			}}
		>
			{children}
		</BoxMui>
	)
}

export default Box

const sx = {
	root: {
		display: 'flex',
	},
}
