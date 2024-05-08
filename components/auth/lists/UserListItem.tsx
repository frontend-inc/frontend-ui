import React from 'react'
import {
	Typography,
  Stack,
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
  selected?: boolean
	isAdmin?: boolean
  handleClick?: (user: UserType) => void | undefined
	handleEdit?: (user: UserType ) => void | undefined
	handleDelete?: (user: UserType) => void | undefined
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	const { user, selected=false, isAdmin=false, handleClick, handleEdit, handleDelete } = props

	return (    
		<ListItem
      sx={{ 
        ...sx.root,
        ...(selected && sx.selected)
      }}
      disableGutters
			secondaryAction={
				isAdmin && user?.role !== 'admin' && (
        <MenuButton
          handleEdit={ () => handleEdit(user)}
          handleDelete={ () => handleDelete(user)}
        />
				)
			}
		>
      <ListItemButton 
        onClick={handleClick}
      >
        <ListItemIcon sx={sx.listItemIcon}>
          <UserAvatar user={user} />
        </ListItemIcon>
        <ListItemText 
          primary={
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" color="text.primary">
                { user.full_name }
              </Typography>
              { user?.role && <Label label={user?.role} /> }
            </Stack> 
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
  root: {
    p: 0,
    borderRadius: theme => `${theme.shape.borderRadius}px`,
  },
  selected: {
    border: '3px solid',
    borderColor: 'primary.main',
  },
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
