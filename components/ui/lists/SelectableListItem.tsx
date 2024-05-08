import React from 'react'
import {
	Box,
	Stack,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from '@mui/material'
import { Icon, MenuButton } from '../../../components'

type SelectableListItemProps = {
	selected?: boolean
	title: string
	description?: string
	icon: string
	color?: string
	enableBorder?: boolean
	secondaryActions?: React.ReactNode
	handleClick?: () => void
	handleEdit?: null | ((item: any) => void)
	handleDelete?: null | ((item: any) => void)
}

const SelectableListItem: React.FC<SelectableListItemProps> = (props) => {
	const {
		selected,
		secondaryActions,
		enableBorder = false,
		icon,
		color = 'transparent',
		title,
		description,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ListItem
			disablePadding
			sx={{
				...sx.root,
				...(selected && sx.selected),
				...(enableBorder && sx.rootBorder),
			}}
			secondaryAction={
				<Stack direction="row" spacing={1} sx={sx.secondaryActions}>
					{secondaryActions}
					{(handleEdit || handleDelete) && (
						<MenuButton handleEdit={handleEdit} handleDelete={handleDelete} />
					)}
				</Stack>
			}
		>
			<ListItemButton
				disableRipple
				sx={sx.listItemButton}
				onClick={handleClick}
			>
				<ListItemIcon sx={sx.listItemIcon}>
					{icon && (
						<Box
							sx={{
								...sx.iconContainer,
								bgcolor: color,
							}}
						>
							<Icon name={icon} />
						</Box>
					)}
				</ListItemIcon>
				<ListItemText primary={title} secondary={description} />
			</ListItemButton>
		</ListItem>
	)
}

export default SelectableListItem

const sx = {
	root: {
		p: 0,
		mb: 0.5,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '3px solid',
		borderColor: 'transparent',
		'&:hover': {
			bgcolor: 'background.paper',
		},
	},
	rootBorder: {
		borderColor: 'divider',
		mb: 1,
	},
	listItemIcon: {
		mr: 1.5,
		minWidth: 36,
		width: 36,
	},
	selected: {
		border: '3px solid',
		borderColor: 'primary.main',
	},
	listItemButton: {
		px: 1,
	},
	iconContainer: {
		p: '5px',
		mr: 1,
		width: '36px',
		height: '36px',
		borderRadius: '8px',
		bgcolor: 'primary.main',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
	},
	secondaryActions: {
		alignItems: 'center',
	},
}
