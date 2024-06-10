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

export type ResourceProps = {
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
	secondaryActions?: React.ReactNode
	menuActions?: any
  displayFields: DisplayFieldType[]
}

const Resource: React.FC<ResourceProps> = (props) => {
	const {
		icon,
		avatar,
		title,    
		description,
    layout='list',
		image,
		color,
		resource,
		handleClick,
		handleEdit,
		handleDelete,
		secondaryActions,
		menuActions,
    displayFields=[]
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
					{avatar && <ListItemIcon sx={sx.listItemIcon}>{avatar}</ListItemIcon>}
					{!avatar && image && (
						<ListItemIcon sx={sx.listItemIcon}>
							<Image src={image} width={32} height={32} alt={image} />
						</ListItemIcon>
					)}
					{icon && (
						<ListItemIcon 
              sx={sx.listItemIcon}
            >
							<Avatar
								sx={{
									bgcolor: color,
								}}
							>
								<Icon name={icon} size={24} />
							</Avatar>
						</ListItemIcon>
					)}
					<ListItemText
						primary={
              <Typography color='text.primary' variant='body1'>
                { title }
              </Typography>
            }
						secondary={
              <>
                <DisplayFields 
                  fields={ displayFields }
                  resource={ resource }
                />
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </>
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default Resource

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
