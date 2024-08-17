import React from 'react'
import { IconButton } from '@mui/material'
import { useAuth } from 'frontend-js'
import { useMenu } from '../../../hooks'
import { UserMenu, UserAvatar } from '../..'
import { useRouter } from 'next/router'

type TabAuthProps = {
  loginUrl?: string
}

const TabAuth: React.FC<TabAuthProps> = (props) => {
	
  const { loginUrl='/login' } = props || {}

  const router = useRouter()
	const { logout, currentUser } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	const handleClick = (url) => {
		closeMenu()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(url)
	}

	const handleLogoutClick = () => {
		logout()
		router.push(loginUrl)
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

export default TabAuth

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
