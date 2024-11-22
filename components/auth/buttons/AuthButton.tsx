'use client'

import React, { useEffect } from 'react'
import { Button, Typography, IconButton } from '../../../components'
import { useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { RemixIcon, UserAvatar } from '../..'

type AuthButtonProps = {
	showLabel?: boolean
	showIcon?: boolean
}

const AuthButton: React.FC<AuthButtonProps> = (props) => {
	const { showLabel = false, showIcon = true } = props || {}

	const { fetchMe, currentUser } = useAuth()

	const { setAuthOpen, setMyAccountOpen } = useApp()

	const handleLogin = () => {
		setAuthOpen(true)
	}
	const handleMyAccount = () => {
		setMyAccountOpen(true)
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
							<RemixIcon name="ri-user-6-fill" size="md" />
						</IconButton>
					)}
				</>
			) : (
				<>
					{currentUser?.id ? (
						<Button
							onClick={handleMyAccount}
							startIcon={showIcon && <UserAvatar user={currentUser} />}
							endIcon={<RemixIcon name="ri-arrow-down-s-line" />}
						>
							<Typography variant="body1">{currentUser?.username}</Typography>
						</Button>
					) : (
						<Button
							onClick={handleLogin}
							startIcon={showIcon && <RemixIcon name="ri-user-6-fill" />}
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
