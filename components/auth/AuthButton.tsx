import React, { useContext, useEffect } from 'react'
import { Button, Typography, Box, IconButton } from '@mui/material'
import { useMenu } from '../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { Icon, AuthAvatar, AuthMenu } from '..'
import { AppContext } from '../../context'

type AuthButtonProps = {
	showLabel?: boolean
	showIcon?: boolean
	editing?: boolean
	myAccountUrl?: string
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
	const {
		showLabel = false,
		showIcon = true,
		editing = false,
		myAccountUrl,
	} = props || {}

	const router = useRouter()
	const { logout, fetchMe, currentUser } = useAuth()
	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	const { clientUrl, setAuthOpen } = useContext(AppContext)

	const handleLogin = () => {
		setAuthOpen(true)
	}

	const handleSignup = () => {
		setAuthOpen(true)
	}

	const handleMyAccount = () => {
		handleClick(myAccountUrl)
	}

	const handleLogout = () => {
		closeMenu()
		logout()
    router.push(clientUrl)
	}

	const handleClick = (url) => {
		closeMenu()
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		if (!editing) {
			router.push(url)
		}
	}

	useEffect(() => {
		if (!currentUser) {
			fetchMe()
		}
	}, [currentUser])

	return (
		<>
			{!showLabel ? (
				<>
					{currentUser?.id ? (
						<IconButton onClick={toggleMenu}>
							<AuthAvatar />
						</IconButton>
					) : (
						<IconButton onClick={handleLogin}>
							<Icon name="User" size={24} />
						</IconButton>
					)}
				</>
			) : (
				<>
					{currentUser ? (
						<Button
							sx={sx.button}
							onClick={toggleMenu}
							startIcon={showIcon && <AuthAvatar />}
							endIcon={
								<Box>
									<Icon name="MoreVertical" size={20} />
								</Box>
							}
						>
							<Typography variant="button" sx={sx.username}>
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
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	username: {
		width: '100%',
		textAlign: 'left',
	},
}
