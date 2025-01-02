'use client'

import React, { useEffect } from 'react'
import { Typography } from '../../../components'
import { Button } from '@nextui-org/react'
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
						<Button isIconOnly className='max-w-8' onPress={handleMyAccount}>
							<UserAvatar user={currentUser} />
						</Button>
					) : (
						<Button isIconOnly className='max-w-8' onPress={handleLogin}>
							<RemixIcon name="ri-user-6-line" size="lg" />
						</Button>
					)}
				</>
			) : (
				<>
					{currentUser?.id ? (
						<Button
							onPress={handleMyAccount}
							startContent={
                showIcon && <UserAvatar user={currentUser} />}
							endContent={
                <RemixIcon name="ri-arrow-down-s-line" />}
						>
							<Typography variant="body1">{currentUser?.username}</Typography>
						</Button>
					) : (
						<Button
							onPress={handleLogin}
							startContent={
                showIcon && <RemixIcon name="ri-user-6-fill" />
              }
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
