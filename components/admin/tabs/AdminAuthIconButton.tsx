import React from 'react'
import { IconButton } from '../../../tailwind'
import { useAuth } from 'frontend-js'
import { useMenu } from '../../../hooks'
import { UserMenu, UserAvatar } from '../..'
import { useRouter } from 'next/router'

type AdminAuthIconButtonProps = {
	handleClick: () => void
}

const AdminAuthIconButton: React.FC<AdminAuthIconButtonProps> = (props) => {
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
			<IconButton onClick={toggleMenu}>
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

export default AdminAuthIconButton
