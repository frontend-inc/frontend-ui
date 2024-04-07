import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { DragIndicator } from '@mui/icons-material'

type SortableListItemProps = {
	title?: string
	subtitle?: string
	isDragging?: boolean
}

const SortableListItem: React.FC<SortableListItemProps> = (props) => {
	const { title, subtitle, isDragging } = props
	return (
		<ListItem
			disableGutters
			sx={{
				...sx.item,
				...(isDragging && sx.isDragging),
			}}
		>
			<ListItemIcon>
				<DragIndicator sx={sx.icon} />
			</ListItemIcon>
			<ListItemText primary={title} secondary={subtitle} />
		</ListItem>
	)
}

export default SortableListItem

const sx = {
	item: {
		position: 'static !important',
	},
	icon: {
		color: 'text.secondary',
	},
	isDragging: {},
}
