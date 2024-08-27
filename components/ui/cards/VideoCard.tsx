import React from 'react'
import {
	UserChip,
	FavoriteButton,
	Image,
	ButtonActions,
	TouchableOpacity,
	LightDarkMode,
	Icon,
} from '../..'
import { IconButton, Box } from '@mui/material'
import { CardProps } from './Card'

const VideoCard: React.FC<CardProps> = (props) => {
	const {
		avatar,
		primary,
		secondaryAction,
		handleClick,
		image,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	return (
		<LightDarkMode mode="dark">
			<Box sx={sx.root} {...slots.item}>
				<TouchableOpacity handleClick={handleClick}>
					<Image src={image} height={360} alt={primary} {...slots.image} />
				</TouchableOpacity>
				<IconButton sx={sx.playIcon} onClick={handleClick}>
					<Icon name="Play" color="common.white"  />
				</IconButton>
				<Box sx={sx.buttons}>{secondaryAction}</Box>
				{avatar && <Box sx={sx.avatar}>{avatar}</Box>}
			</Box>
		</LightDarkMode>
	)
}

export default VideoCard

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
	gradient: {
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '50%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
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
	playIcon: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		top: 'calc(50% - 20px)',
		right: 'calc(50% - 20px)',
		bgcolor: 'rgb(0,0,0,0.5)',
	},
	avatar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		position: 'absolute',
		bottom: 10,
		left: 10,
	},
}
