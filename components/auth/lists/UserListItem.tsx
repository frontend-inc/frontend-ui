import React, { useState, useEffect } from 'react'
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
import { useAuth } from 'frontend-js'

type UserListItemProps = {
	user: UserType
  selected?: boolean
	isAdmin?: boolean
  handleClick?: (user: UserType) => void | undefined
	handleEdit: (user: UserType) => void | undefined
	handleDelete: (user: UserType) => void | undefined
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	const { user, selected=false, isAdmin=false, handleClick, handleEdit, handleDelete } = props

  const [canEdit, setCanEdit] = useState(false)
  const [canDelete, setCanDelete] = useState(false)

  const { currentUser } = useAuth() 

  useEffect(() => {
    if(isAdmin && user?.role !== 'admin'){
      setCanEdit(true)
    }
    if(isAdmin && (user?.role !== 'admin' || user?.id == currentUser?.id)){
      setCanDelete(true)
    }
  }, [user, isAdmin])

	return (    
		<ListItem
      sx={{ 
        ...sx.root,
        ...(selected && sx.selected)
      }}
      disableGutters
			secondaryAction={
				(canEdit || canDelete) && (
        <MenuButton
          handleEdit={canEdit && (() => handleEdit(user))}
          handleDelete={canDelete && (() => handleDelete(user))}
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
                { user.name }
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
