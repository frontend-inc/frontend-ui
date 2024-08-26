import React from 'react'
import {
	Typography,
	List,
	ListItem as MuiListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { Image } from '../..'
import { CardProps } from './Card'

const ListItem: React.FC<CardProps> = (props) => {
	const {
		primary,
		secondary,
		image,
		actions,
		secondaryAction,
		height = 128,
		handleClick,
		slots = {
			item: {},
			image: {},
		},
	} = props

	return (
		<List disablePadding sx={sx.listItem} {...slots.item}>
			<MuiListItem disablePadding disableGutters secondaryAction={secondaryAction}>
				<ListItemButton
					sx={{
						...sx.listItemButton,
						minHeight: height + 44,
					}}
					onClick={handleClick && handleClick}
				>
					<ListItemIcon sx={sx.listItemIcon}>
						<Image
							height={height}
							image={image}
							alt={primary}
							{...slots.image}
						/>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant="subtitle1" color="text.primary">
								{primary}
							</Typography>
						}
						secondary={
							<>
								{secondary}
								{actions}
							</>
						}
					/>
				</ListItemButton>
			</MuiListItem>
		</List>
	)
}

export default ListItem

const sx = {
	listItem: {
		my: 0,
		p: 0,
		borderBottom: '1px solid',
		borderColor: 'divider',
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
	title: {
		pb: 0.5,
	},
	description: {
		maxWidth: 320,
	},
	listItemButton: {
		'&:hover': {
			bgcolor: 'transparent',
		},
	},
}
