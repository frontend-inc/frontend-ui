import React from 'react'
import { useAuth } from 'frontend-js'
import { UserAvatar, Icon } from '../../../components'
import {
	Typography,
	Divider,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'

type AuthMenuProps = {
	open: boolean
	anchorEl: HTMLElement | null
	toggleMenu: (e: any) => void
	handleLogin: () => void
	handleLogout: () => void
	handleSignup: () => void
	handleMyAccount: () => void
	handleClick: (path: string) => void
}

const AuthMenu: React.FC<AuthMenuProps> = (props) => {
	const { currentUser } = useAuth()

	const {
		open,
		anchorEl,
		toggleMenu,
		handleLogout,
		handleLogin,
		handleSignup,
		handleMyAccount,
	} = props

	return (
		<Menu open={open} onClose={toggleMenu} anchorEl={anchorEl}>
			{currentUser ? (
				<>
					<MenuItem onClick={handleMyAccount}>
						<ListItemIcon>
							<UserAvatar size={32} user={currentUser} />
						</ListItemIcon>
						<ListItemText
							primary={
								<Typography variant="body1" color="text.primary">
									{currentUser?.username}
								</Typography>
							}
							secondary={
								<Typography variant="body2" color="text.primary">
									{currentUser?.email}
								</Typography>
							}
						/>
					</MenuItem>
					<Divider sx={sx.divider} />
					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<Icon name="LogOut"  />
						</ListItemIcon>
						Logout
					</MenuItem>
				</>
			) : (
				<>
					<MenuItem onClick={handleLogin}>Sign In</MenuItem>
					<MenuItem onClick={handleSignup}>Sign Up</MenuItem>
				</>
			)}
		</Menu>
	)
}

export default AuthMenu

const sx = {
	divider: {
		height: '4px',
		borderBottom: '1px solid',
		borderColor: 'background.default',
	},
}
