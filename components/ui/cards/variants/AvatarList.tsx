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
import { truncate } from '../../../../helpers'
import { CardProps } from '../../../../types'
import { Actions } from '../../../../components'

const AvatarList: React.FC<CardProps> = (props) => {
	const {
		actions,
		item,
		height = 128,
		width = 128,
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	const { title, description, image } = item || {}

	return (
		<List
			disablePadding
			sx={{
				...sx.listItem,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					<Actions numVisible={0} actions={actions} resource={item} />
				}
			>
				<ListItemButton
					sx={{
						minHeight: height + 44,
					}}
					onClick={handleClick && handleClick}
				>
					<ListItemIcon sx={sx.listItemIcon}>
						<Avatar
							sx={{
								...sx.avatar,
								...(enableGradient && sx.gradient),
								...(enableOverlay && sx.overlay),
								height: `${height}px`,
								width: `${width}px`,
							}}
							src={image?.url}
							alt={title}
						>
							<Box />
						</Avatar>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant={'subtitle2'} color="text.primary">
								{title}
							</Typography>
						}
						secondary={
							<Typography
								variant="body2"
								color="text.secondary"
								sx={sx.description}
							>
								{truncate(description, 80)}
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default AvatarList

const sx = {
	listItem: {
		my: 0,
		p: 0,
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
	listItemIcon: {
		width: 130,
		mr: 2,
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
	},
	avatar: {
		height: '64px',
		width: '64px',
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
	description: {
		maxWidth: 320,
	},
}
