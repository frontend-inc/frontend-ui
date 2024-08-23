import React from 'react'
import { Image, TouchableOpacity, LightDarkMode } from '../../../components'
import { Box } from '@mui/material'
import { CardProps } from './Card'

const ImageCard: React.FC<CardProps> = (props) => {
	const {
		primary,
		secondaryAction,
		handleClick,
		image,
		height = 260,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<LightDarkMode mode="dark">
			<Box sx={sx.root} {...slots.item}>
				<TouchableOpacity handleClick={handleClick}>
					<Image src={image} height={height} alt={primary} {...slots.image} />
				</TouchableOpacity>
				<Box sx={sx.buttons}>{secondaryAction}</Box>
			</Box>
		</LightDarkMode>
	)
}

export default ImageCard

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 1,
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: 2,
		},
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		top: 10,
		right: 10,
	},
	userCard: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: 10,
		left: 10,
	},
}
