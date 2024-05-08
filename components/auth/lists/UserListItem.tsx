import React from 'react'
import {
	Typography,
	Box,
	ListItem,
  ListItemButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
} from '@mui/material'
import { UserAvatar, Label, MenuButton } from '../../../components'
import { UserType } from 'frontend-js'

type UserListItemProps = {
	user: UserType
	isAdmin?: boolean
  handleClick?: (user: UserType) => void
	handleEdit?: (user: UserType) => void
	handleDelete?: (user: UserType) => void
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	const { user, isAdmin, handleClick, handleEdit, handleDelete } = props

	return (
		<ListItem
			secondaryAction={
				isAdmin && (
					<Box sx={sx.secondaryActions}>
						<Label label={user?.role} />
						<MenuButton>
							<MenuItem onClick={() => handleEdit(user)}>Edit</MenuItem>
							<MenuItem onClick={() => handleDelete(user)}>
								Remove
							</MenuItem>
						</MenuButton>
					</Box>
				)
			}
		>
      <ListItemButton 
        onClick={handleClick}
        sx={ sx.listItemButton }
      >
        <ListItemIcon sx={sx.listItemIcon}>
          <UserAvatar user={user} />
        </ListItemIcon>
        <ListItemText 
          primary={
            <Typography variant="body1" color="text.primary">
              { user.full_name }
            </Typography>
            } 
          secondary={
            <Typography variant="body2" color="text.secondary">
              { user.email }
            </Typography>
          } 
        />
      </ListItemButton>
    </ListItem>
	)
}

export default UserListItem

const sx = {
	listItemIcon: {
		mr: 2,
	},
	avatar: {
		bgcolor: 'primary.main',
	},
	icon: {
		color: 'text.primary',
	},
	secondaryActions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
}
