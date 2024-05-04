import React, { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { AuthScreen, MyAccountForm } from '../..'
import { useRouter } from 'next/router'

type MyAccountProps = {
	redirectUrl: string
}

const MyAccount: React.FC<MyAccountProps> = (props) => {
	const router = useRouter()
	const { redirectUrl } = props || {}

	const {
		loading,
		delayedLoading,
		user,
		setUser,
		currentUser,
		updateMe,
		handleChange,
		fetchMe,
		logout,
		deleteAvatar,
	} = useAuth()

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	const handleLogout = async () => {
		await logout()
		router.push(redirectUrl)
	}

	useEffect(() => {
		if (!currentUser) {
			fetchMe()
		} else {
			setUser(currentUser)
		}
	}, [currentUser])

	return (
		<>
			{currentUser && (
				<AuthScreen
					title={`${currentUser?.first_name} ${currentUser?.last_name}`}
					subtitle={
						currentUser?.username
							? `@${currentUser?.username}`
							: 'Update account'
					}
				>
					<MyAccountForm
						loading={delayedLoading}
						user={user}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleDeleteAvatar={handleDeleteAvatar}
						handleLogout={handleLogout}
					/>
				</AuthScreen>
			)}
		</>
	)
}

export default MyAccount
