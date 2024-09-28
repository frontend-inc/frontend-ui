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
	children?: React.ReactNode
	handleClick: () => void
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
	const { open, anchorEl, toggleMenu, handleLogoutClick, handleClick } = props

	const { currentUser } = useAuth()

	return (
		<Menu open={open} onClose={toggleMenu} anchorEl={anchorEl}>
			<MenuItem onClick={handleClick}>
				<ListItemIcon>
					<UserAvatar size={28} user={currentUser} />
				</ListItemIcon>
				<ListItemText
					primary={
						<>
							<Typography variant="body1" color="text.primary">
								{currentUser?.name}
							</Typography>
						</>
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
