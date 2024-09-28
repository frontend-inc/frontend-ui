import React from 'react'
import { Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { DragIndicator } from '@mui/icons-material'

type SortableListItemProps = {
	primary?: string | React.ReactNode
	secondary?: string | React.ReactNode
	isDragging?: boolean
}

const SortableListItem: React.FC<SortableListItemProps> = (props) => {
	const { primary, secondary, isDragging } = props

	return (
		<ListItem
			disableGutters
			sx={{
				...sx.item,
				...(isDragging && sx.isDragging),
			}}
		>
			<ListItemIcon sx={sx.dragHandle}>
				<DragIndicator sx={sx.icon} />
			</ListItemIcon>
			<ListItemText primary={primary} secondary={secondary} />
		</ListItem>
	)
}

export default SortableListItem

const sx = {
	item: {},
	icon: {
		color: 'text.secondary',
	},
	isDragging: {},
	dragHandle: {
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
}
