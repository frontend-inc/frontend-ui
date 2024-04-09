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
import { truncate } from '../../../helpers'
import { CardProps } from '../../../types'

const AvatarHoriz: React.FC<CardProps> = (props) => {
	const {
		title,
		description,
		textVariant = 'body1',
		image,
		height = 128,
		width = 128,
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<List
			disablePadding
			sx={{
				...sx.listItem,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<ListItem disablePadding disableGutters>
				<ListItemButton
					sx={{
						minHeight: height + 44,
					}}
					onClick={handleClick && handleClick}
				>
					<ListItemIcon>
						<Avatar
							sx={{
								...sx.avatar,
								...(enableGradient && sx.gradient),
								...(enableOverlay && sx.overlay),
								height: `${height}px`,
								width: `${width}px`,
							}}
							src={image}
							alt={title}
						>
							<Box />
						</Avatar>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant={textVariant} color="text.primary">
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

export default AvatarHoriz

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
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	avatar: {
		mr: 2,
		height: '64px',
		width: '64px',
    backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)'
	},
	description: {
		maxWidth: 320,
	},
}
