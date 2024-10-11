import React, { useEffect } from 'react'
import { Button, Typography, Box, IconButton } from '../../../tailwind'
import { useMenu, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { Icon, UserAvatar, AuthMenu } from '../..'

type AuthButtonProps = {
	showLabel?: boolean
	showIcon?: boolean
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
	const { showLabel = false, showIcon = true } = props || {}

	const router = useRouter()
	const { logout, fetchMe, currentUser } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	const { clientUrl, setAuthOpen, setMyAccountOpen } = useApp()

	const handleLogin = () => {
		setAuthOpen(true)
		closeMenu()
	}

	const handleSignup = () => {
		setAuthOpen(true)
		closeMenu()
	}

	const handleMyAccount = () => {
		setMyAccountOpen(true)
		closeMenu()
	}

	const handleLogout = async () => {
		await logout()
		router.push(clientUrl)
	}

	const handleClick = (url) => {
		closeMenu()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		router.push(url)
	}

	useEffect(() => {
		if (!currentUser?.id) {
			fetchMe()
		}
	}, [currentUser?.id])

	return (
		<>
			{!showLabel ? (
				<>
					{currentUser?.id ? (
						<IconButton onClick={toggleMenu}>
							<UserAvatar user={currentUser} />
						</IconButton>
					) : (
						<IconButton onClick={handleLogin}>
							<Icon name="User" size={24} />
						</IconButton>
					)}
				</>
			) : (
				<>
					{currentUser?.id ? (
						<Button
							sx={sx.button}
							onClick={toggleMenu}
							startIcon={showIcon && <UserAvatar user={currentUser} />}
							endIcon={
								<Box>
									<Icon name="MoreVertical" />
								</Box>
							}
						>
							<Typography variant="body1" color="text.primary" sx={sx.username}>
								{currentUser?.username}
							</Typography>
						</Button>
					) : (
						<Button
							sx={sx.button}
							onClick={handleLogin}
							startIcon={showIcon && <Icon name="User" size={24} />}
						>
							Sign In
						</Button>
					)}
				</>
			)}
			{currentUser && (
				<AuthMenu
					open={open}
					anchorEl={anchorEl}
					toggleMenu={toggleMenu}
					handleLogin={handleLogin}
					handleSignup={handleSignup}
					handleMyAccount={handleMyAccount}
					handleLogout={handleLogout}
					handleClick={handleClick}
				/>
			)}
		</>
	)
}

export default AuthButton

const sx = {
	expandMore: {
		width: '34px',
	},
	icon: {
		color: 'text.primary',
	},
	button: {
		boxShadow: 0,
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	username: {
		width: '100%',
		textAlign: 'left',
	},
}
