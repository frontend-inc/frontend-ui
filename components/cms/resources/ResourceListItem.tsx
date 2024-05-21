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
import { Image, Icon, MenuButton } from '../..'

export type ResourceListItemProps = {
  resource?: any
	title?: string
  description?: string
  avatar?: any
  icon?: string
  image?: string
  color?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	secondaryActions?: React.ReactNode
	menuActions?: any
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {
	const {
    resource,
    title,
    description,
    avatar,
    icon,
    image,
    color,
		handleClick,
		handleEdit,
		handleDelete,
		secondaryActions,
		menuActions,
	} = props

	return (
		<List sx={sx.root}>
			<ListItem
				disablePadding
				secondaryAction={
					<Stack direction="row" spacing={1} sx={sx.actions}>
						{secondaryActions}
						<MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
							{menuActions}
						</MenuButton>
					</Stack>
				}
			>
				<ListItemButton
					sx={sx.listItemButton}
					onClick={handleClick ? () => handleClick(resource) : undefined}
				>
          {avatar && (
						<ListItemIcon sx={sx.listItemIcon}>
							{ avatar }
						</ListItemIcon>
					)}
					{(!avatar && image) && (
						<ListItemIcon sx={sx.listItemIcon}>
							<Image
								src={image}
								width={32}
								height={32}
								alt={image}
							/>
						</ListItemIcon>
					)}
					{icon &&  (
						<ListItemIcon sx={sx.listItemIcon}>
							<Avatar
								sx={{
									bgcolor: color
								}}
							>
								<Icon name={icon} size={24} />
							</Avatar>
						</ListItemIcon>
					)}					
					<ListItemText
						primary={
							<Typography variant="body1" color="text.primary">
								{ title }
							</Typography>
						}
						secondary={
							<Typography variant="body2" color="text.secondary">
								{ description }
							</Typography>
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default ResourceListItem

const sx = {
	root: {
		p: 0,
		m: 0,
	},
	listItemButton: {
		p: 1,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	actions: {
		alignItems: 'center',
	},
	listItemIcon: {
		mr: 2,
	},
}
