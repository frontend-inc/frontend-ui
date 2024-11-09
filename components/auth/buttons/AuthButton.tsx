'use client'

import React, { useEffect } from 'react'
import { Button, Typography, IconButton } from '../../core'
import { useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Icon, UserAvatar, AuthMenu } from '../..'

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
							<Icon name="User" size='md' />
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
							startIcon={showIcon && <Icon name="User" />}
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
