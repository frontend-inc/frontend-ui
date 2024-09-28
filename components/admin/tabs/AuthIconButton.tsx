import React from 'react'
import { Button, IconButton, MenuItem } from '@mui/material'
import { useAuth } from 'frontend-js'
import { useMenu, useApp } from '../../../hooks'
import { UserMenu, UserAvatar } from '../..'
import { useRouter } from 'next/router'

type AuthIconButtonProps = {
	handleClick: () => void
}

const AuthIconButton: React.FC<AuthIconButtonProps> = (props) => {
	const { handleClick } = props || {}
	const router = useRouter()
	const { logout, currentUser } = useAuth()

	const { open, anchorEl, toggleMenu } = useMenu()

	const handleLogoutClick = () => {
		logout()
		router.push('/')
	}

	if (!currentUser) return null
	return (
		<>
			<IconButton size="small" sx={sx.button} onClick={toggleMenu}>
				<UserAvatar user={currentUser} />
			</IconButton>
			<UserMenu
				open={open}
				anchorEl={anchorEl}
				toggleMenu={toggleMenu}
				handleLogoutClick={handleLogoutClick}
				handleClick={handleClick}
			/>
		</>
	)
}

export default AuthIconButton

const sx = {
	button: {
		color: 'primary.contrastText',
	},
	avatar: {
		height: 32,
		width: 32,
		bgcolor: 'secondary.main',
	},
	name: {
		fontSize: 13,
		fontWeight: 600,
	},
}
