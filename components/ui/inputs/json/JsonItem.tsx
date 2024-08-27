import React from 'react'
import {
	Typography,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
} from '@mui/material'
import { Icon } from '../../../../components'

type JsonItemProps = {
	index: number
	item: any
	titleField: string
	handleClick: any
	handleRemove: any
}

const JsonItem: React.FC<JsonItemProps> = (props) => {
	const { index, item, titleField, handleClick, handleRemove } = props

	return (
		<ListItem
			sx={{
				...sx.root,
				...(item.isDragging && sx.isDragging),
			}}
			disablePadding
			secondaryAction={
				<IconButton size="small" onClick={() => handleRemove(index)}>
					<Icon name="X"  />
				</IconButton>
			}
		>
			<ListItemButton
				sx={sx.listItemButton}
				onClick={(ev) => handleClick(ev, item, index)}
			>
				<ListItemIcon sx={sx.listItemIcon}>
					<Icon name="GripVertical"  />
				</ListItemIcon>
				{item?.icon && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Icon name={item.icon}  />
					</ListItemIcon>
				)}
				<ListItemText
					primary={
						<Typography color="text.primary" variant="body1">
							{item[titleField]}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default JsonItem

const sx = {
	root: {
		p: 0,
		width: '100%',
		borderRadius: 1,
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		my: 0.5,
	},
	data: {
		width: '100%',
	},
	input: {
		flexDirection: 'column',
	},
	listItemIcon: {
		cursor: 'grab',
		minWidth: 32,
		alignItems: 'flex-start',
	},
	listItemButton: {
		py: 1,
		borderRadius: 1,
	},
	isDragging: {
		boxShadow: '0 0 10px 0 rgb(0,0,0,0.4)',
	},
}
