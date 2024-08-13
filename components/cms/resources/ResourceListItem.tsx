import React from 'react'
import {
	Stack,
	Avatar,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Typography,
} from '@mui/material'
import { Image, Icon, DisplayFields, MenuButton } from '../..'
import { DisplayFieldType } from '../../../types'

export type ResourceListItemProps = {
	avatar?: React.ReactNode
	icon?: string
	color?: string
	layout?: 'list' | 'grid'
	title?: string | React.ReactNode
	description?: string
	image?: string
	resource: any
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	secondary?: React.ReactNode
	secondaryActions?: React.ReactNode
	menuActions?: any
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
	displayFields?: DisplayFieldType[]
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {
	const {
		icon,
		avatar,
		color,
		resource,
		handleClick,
		handleEdit,
		handleDelete,
		secondaryActions,
		menuActions,
		displayFields = [],
		sortable,
		isDragging = false,
		enableBorder = false,
		secondary,
	} = props

	const { title } = resource || {}
	const image = resource?.image?.url

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
					{secondaryActions}
					{(menuActions || handleEdit || handleDelete) && (
						<MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
							{menuActions}
						</MenuButton>
					)}
				</Stack>
			}
		>
			<ListItemButton
				sx={sx.listItemButton}
				onClick={handleClick ? () => handleClick(resource) : undefined}
			>
				{sortable && (
					<ListItemIcon sx={sx.dragHandle}>
						<Icon name="GripVertical" size={20} color="text.secondary" />
					</ListItemIcon>
				)}
				{avatar && <ListItemIcon sx={sx.listItemIcon}>{avatar}</ListItemIcon>}
				{!avatar && image && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Image src={image} width={32} height={32} alt={image} />
					</ListItemIcon>
				)}
				{icon && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Avatar
							sx={{
								bgcolor: color,
							}}
						>
							<Icon name={icon} size={24} color={'primary.contrastText'} />
						</Avatar>
					</ListItemIcon>
				)}
				<ListItemText
					primary={
						<Typography color="text.primary" variant="body1">
							{title}
						</Typography>
					}
					secondary={
						<>
							<DisplayFields fields={displayFields} resource={resource} />
							{secondary}
						</>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default ResourceListItem

const sx = {
	root: {
		p: 0,
		borderRadius: 1,
    overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		mb: 1,
	},
	listItemButton: {
		p: 1,
		borderRadius: 1,
	},
	buttons: {
		alignItems: 'center',
	},
	listItemIcon: {
		mr: 2,
	},
	dragHandle: {
		width: 24,
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
	isDragging: {
		border: '2px solid red',
	},
}
