import React from 'react'
import {
	Avatar,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { truncate } from '../../../helpers'
import {
	AVATAR_HORIZ_HEIGHT,
	AVATAR_HORIZ_WIDTH,
} from '../../../constants/index'
import { CardProps } from '../../../types'

const AvatarHoriz: React.FC<CardProps> = (props) => {
	const {
		title,
		description,
		textVariant = 'body1',
		image,
		height = AVATAR_HORIZ_HEIGHT,
		width = AVATAR_HORIZ_WIDTH,
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<List
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
						/>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant={textVariant} color="text.primary">
								{title}
							</Typography>
						}
						secondary={
							<Typography variant="body2" color="text.secondary">
								{truncate(description, 30)}
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
		borderColor: 'grey.300',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	avatar: {
		mr: 2,
		height: '64px',
		width: '64px',
	},
}
