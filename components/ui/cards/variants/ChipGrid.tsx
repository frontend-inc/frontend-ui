import React from 'react'
import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { Actions } from '../../..'
import { CardProps } from '../../../../types'

const ChipList: React.FC<CardProps> = (props) => {
	const {
		resource,
		actions,
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	const { title, image } = resource || {}

	return (
		<List
			dense
			disablePadding
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					<Actions numVisible={0} actions={actions} resource={resource} />
				}
			>
				<ListItemButton
					sx={sx.listItemButton}
					onClick={handleClick && handleClick}
				>
					{image && (
						<ListItemIcon sx={sx.listItemIcon}>
							<Avatar
								sx={{
									...sx.avatar,
									...(enableGradient && sx.gradient),
									...(enableOverlay && sx.overlay),
								}}
								src={image?.url}
								alt={title}
							>
								<Box />
							</Avatar>
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							<Typography variant="body1" color="text.primary">
								{title}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default ChipList

const sx = {
	root: {
		m: 0,
		p: 0,
	},
	listItemButton: {
		minHeight: 48,
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
	actions: {
		px: 1,
	},
}
