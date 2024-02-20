import React from 'react'
import { Divider } from '../../../components'
import { useAuth } from 'frontend-js'
import { Typography, ListItemText, Menu, MenuItem } from '@mui/material'

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
						<ListItemText
							primary={
								<Typography variant="body1">{currentUser?.username}</Typography>
							}
							secondary={
								<Typography variant="body2" color="textSecondary">
									{currentUser?.email}
								</Typography>
							}
						/>
					</MenuItem>
					<Divider />
					<MenuItem onClick={handleLogout}>Logout</MenuItem>
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
