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
import { CardProps } from '../../../../types'

const ChipHoriz: React.FC<CardProps> = (props) => {
	const {
		title,
		textVariant = 'body1',
		image,
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
					sx={sx.listItemButton}
					onClick={handleClick && handleClick}
				>
					<ListItemIcon>
						<Avatar
							sx={{
								...sx.avatar,
								...(enableGradient && sx.gradient),
								...(enableOverlay && sx.overlay),
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
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default ChipHoriz

const sx = {
	listItem: {
		my: 0,
		p: 0,
	},
  listItemButton: {
    minHeight: 50
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
		mr: 2,
		height: '32px',
		width: '32px',
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
}
