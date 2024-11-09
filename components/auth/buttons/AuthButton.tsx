'use client'

import React, { useEffect } from 'react'
import { Button, Typography, IconButton } from '../../core'
import { useMenu, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/navigation'
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

	const handleAuthenticate = () => {
		setAuthOpen(true)
		closeMenu()
	}

	const handleMyAccount = () => {
		setMyAccountOpen(true)
		closeMenu()
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
						<IconButton onClick={handleMyAccount}>
							<UserAvatar size={28} user={currentUser} />
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
							onClick={handleMyAccount}
							startIcon={showIcon && <UserAvatar user={currentUser} />}
							endIcon={
								<div>
									<Icon name="MoreVertical" />
								</div>
							}
						>
							<Typography variant="body1">{currentUser?.username}</Typography>
						</Button>
					) : (
						<Button
							onClick={handleLogin}
							startIcon={showIcon && <Icon name="User" size={24} />}
						>
							Sign In
						</Button>
					)}
				</>
			)}
		</>
	)
}

export default AuthButton
