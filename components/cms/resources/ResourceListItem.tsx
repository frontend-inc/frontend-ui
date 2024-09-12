import React from 'react'
import {
	Stack,
	Avatar,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Typography,
	Checkbox,
} from '@mui/material'
import { Image, Icon, MenuButton } from '../..'

export type ResourceListItemProps = {
	selectable?: boolean
	selected?: boolean
	primary: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	layout?: 'list' | 'grid'
	title?: string | React.ReactNode
	description?: string
	image?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
	handleReload?: () => void
	secondaryAction?: React.ReactNode
	menuActions?: any
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {
	const {
		icon,
		avatar,
		color,
		primary,
		secondary,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		secondaryAction,
		menuActions,
		sortable,
		selectable,
		selected,
		isDragging = false,
		enableBorder = false,
	} = props

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (handleSelect) {
			handleSelect()
		}
	}

	return (
		<ListItem
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				...(isDragging && sx.isDragging),
			}}
			disablePadding
			secondaryAction={
				<Stack direction="row" spacing={1} sx={sx.buttons}>
					{secondaryAction}
					{(menuActions || handleEdit || handleDelete) && (
						<MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
							{menuActions}
						</MenuButton>
					)}
				</Stack>
			}
		>
			{selectable && (
				<ListItemIcon sx={sx.checkbox}>
					<Checkbox
						checked={selected}
						color="primary"
						size="small"
						onChange={handleChange}
					/>
				</ListItemIcon>
			)}
			<ListItemButton
				sx={sx.listItemButton}
				onClick={handleClick ? handleClick : undefined}
			>
				{sortable && (
					<ListItemIcon sx={sx.dragHandle}>
						<Icon name="GripVertical" color="text.secondary" />
					</ListItemIcon>
				)}
				{avatar && <ListItemIcon sx={sx.listItemImage}>{avatar}</ListItemIcon>}
				{!avatar && image && (
					<ListItemIcon sx={sx.listItemImage}>
						<Image src={image} width={64} height={64} alt={image} />
					</ListItemIcon>
				)}
				{icon && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Avatar
							sx={{
								...sx.avatar,
								bgcolor: color,
							}}
						>
							<Icon name={icon} size={20} color={'primary.contrastText'} />
						</Avatar>
					</ListItemIcon>
				)}
				<ListItemText
					primary={
						<Typography variant="body1" color="text.primary">
							{primary}
						</Typography>
					}
					secondary={secondary}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default ResourceListItem

const sx = {
	root: {
		my: 0.5,
		p: 0,
		borderRadius: 1,
		overflow: 'hidden',
		bgcolor: 'background.paper',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		transition: 'box-shadow 0.2s',
		'&:hover': {
			boxShadow: 1,
		},
		mb: 1,
	},
	listItemButton: {
		p: 1,
		borderRadius: 1,
	},
	avatar: {
		borderRadius: 1,
	},
	buttons: {
		alignItems: 'center',
	},
	listItemIcon: {
		mr: 2,    
	},
	listItemImage: {
		mr: 2,
		minWidth: 64,
	},
	checkbox: {
		width: 24,
	},
	dragHandle: {
		width: 24,
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
	isDragging: {
		boxShadow: 2,
	},
}
