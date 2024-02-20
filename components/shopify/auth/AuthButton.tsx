import React, { useContext } from 'react'
import { IconButton } from '@mui/material'
import { useAuth } from 'frontend-shopify'
import { useMenu } from '../../../hooks'
import { UserMenu } from '../../../components'
import { useRouter } from 'next/router'
import { User } from 'lucide-react'
import { AppContext } from '../../../context'

const AuthAvatarButton: React.FC = () => {
	const router = useRouter()

	const { logout, customer } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu({})

	const { clientUrl } = useContext(AppContext)

	const handleClick = (path) => {
		closeMenu()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(`${clientUrl}/${path}`)
	}

	const handleLogoutClick = () => {
		logout()
		router.push(`${clientUrl}/shopify/login`)
	}

	if (!customer) return null
	return (
		<>
			<IconButton sx={sx.button} onClick={toggleMenu}>
				<User size={32} color="black" />
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

export default AuthAvatarButton

const sx = {
	button: {
		bgcolor: 'background.paper',
	},
}
