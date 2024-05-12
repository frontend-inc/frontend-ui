import React from 'react'
import {
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
	Badge,
	Box,
	Menu,
	MenuItem,
} from '@mui/material'
import { Icon, UserAvatar } from '../../components'
import { useAuth } from 'frontend-js'

type UserMenuProps = {
	open: boolean
	anchorEl: HTMLElement | null
	toggleMenu: (ev: any) => void
	handleLogoutClick: () => void
	handleClick: (path: string) => void
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
	const { open, anchorEl, toggleMenu, handleLogoutClick, handleClick } = props

	const { currentUser } = useAuth()

	return (
		<Menu open={open} onClose={toggleMenu} anchorEl={anchorEl}>
			<MenuItem onClick={() => handleClick('/my-account')}>
				<ListItemIcon>
					<UserAvatar size={32} user={currentUser} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography variant="body1" color="text.primary">
							{currentUser?.name}
						</Typography>
					}
					secondary={
						<Typography variant="body2" color="text.primary">
							{currentUser?.email}
						</Typography>
					}
				/>
			</MenuItem>
			<Divider />
			<MenuItem onClick={handleLogoutClick}>
				<ListItemIcon>
					<Icon name="LogOut" />
				</ListItemIcon>
				Sign Out
			</MenuItem>
		</Menu>
	)
}

export default UserMenu
