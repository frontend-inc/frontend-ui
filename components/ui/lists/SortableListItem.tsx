import React from 'react'
import { Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { DragIndicator } from '@mui/icons-material'

type SortableListItemProps = {
	title?: string
	subtitle?: string
	isDragging?: boolean
}

const SortableListItem: React.FC<SortableListItemProps> = (props) => {
	
  const { 
    title, 
    subtitle, 
    isDragging 
  } = props

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
			<ListItemText 
        primary={
          <Typography variant='body1' color='text.primary'>
            { title }
          </Typography>
        } secondary={
          <Typography variant='body2' color='text.secondary'>
            {subtitle} 
          </Typography>
        }
      />
		</ListItem>
	)
}

export default SortableListItem

const sx = {
	item: {
	},
	icon: {
		color: 'text.secondary',
	},
	isDragging: {
  },
}
