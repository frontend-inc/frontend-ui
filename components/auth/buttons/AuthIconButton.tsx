import React, { useContext, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { useMenu } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { UserAvatar, UserMenu } from '../..'
import { useRouter } from 'next/router'
import { useApp } from '../../../hooks'

const AuthIconButton: React.FC = () => {
	const router = useRouter()

	const { logout, fetchMe, currentUser } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	const { clientUrl } = useApp()

	const handleMenuClick = (ev) => {
		toggleMenu(ev)
	}

	const handleClick = (path) => {
		closeMenu()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}/${path}`)
	}

	const handleLogoutClick = () => {
		closeMenu()
		logout()
	}

	return (
		<>
			<IconButton onClick={handleMenuClick}>
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
