import React from 'react'
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { AvatarImage } from '../..'
import { CardProps } from './Card'

const ChipCard: React.FC<CardProps> = (props) => {
	const {
		primary,
		secondary,
		secondaryAction,
		handleClick,
		image,
		slots = {
			item: {},
			image: {},
		},
	} = props

	return (
		<List dense disablePadding sx={sx.root} {...slots.item}>
			<ListItem disablePadding disableGutters secondaryAction={secondaryAction}>
				<ListItemButton
					sx={sx.listItemButton}
					onClick={handleClick && handleClick}
				>
					<ListItemIcon sx={sx.listItemIcon}>
						<AvatarImage
							image={image}
							alt={primary}
							height={44}
							{...slots.image}
						/>
					</ListItemIcon>
					<ListItemText primary={primary} secondary={secondary} />
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default ChipCard

const sx = {
	root: {
		my: 0,
		p: 0,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	listItemButton: {
		p: 1,
		minHeight: 48,
		'&:hover': {
			bgcolor: 'transparent',
		},
	},
	gradient: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
	},
	avatar: {
		height: '48px',
		width: '48px',
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
	listItemIcon: {
		mr: 2,
		height: '48px',
		width: '48px',
	},
	buttons: {
		px: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
}
