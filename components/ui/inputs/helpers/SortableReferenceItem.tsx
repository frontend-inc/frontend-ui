import React from 'react'
import { Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Icon, Image, MenuButton } from '../../..'

type SortableReferenceItemProps = {
	image?: string
	title: string
	isDragging?: boolean
	handleDelete: () => void
	handleEdit: () => void
}

const SortableReferenceItem: React.FC<SortableReferenceItemProps> = (props) => {
	const { image, title, isDragging, handleDelete, handleEdit } = props

	return (
		<ListItem
			disableGutters
			sx={{
				...sx.item,
				...(isDragging && sx.isDragging),
			}}
			secondaryAction={
				<MenuButton handleDelete={handleDelete} handleEdit={handleEdit} />
			}
		>
			<ListItemIcon sx={sx.dragHandle}>
				<Icon name="GripVertical" size={20} color="text.secondary" />
			</ListItemIcon>
			<ListItemIcon sx={sx.listItemIcon}>
				<Image src={image} height={32} width={32} />
			</ListItemIcon>
			<ListItemText
				primary={
					<Typography variant="body1" color="text.primary">
						{title}
					</Typography>
				}
			/>
		</ListItem>
	)
}

export default SortableReferenceItem

const sx = {
	item: {
		px: 1,
		bgcolor: 'background.paper',
		transition: 'box-shadow 0.2s',
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
		my: 0.5,
		'&:hover': {
			boxShadow: 2,
		},
	},
	icon: {
		color: 'text.secondary',
	},
	isDragging: {
		boxShadow: 2,
	},
	listItemIcon: {
		mr: 2,
		width: 32,
		height: 32,
	},
	dragHandle: {
		cursor: 'grab',
	},
}
