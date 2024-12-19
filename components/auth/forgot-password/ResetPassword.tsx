'use client'

import React, { useEffect } from 'react'
import { ResetPasswordForm, AuthScreen, Loader } from '../..'
import { useAuth } from 'frontend-js'
import { useRouter, useParams } from 'next/navigation'

type ResetPasswordProps = {
	title?: string
	subtitle?: string
	loginUrl?: string
	redirectUrl?: string
}

type RouterTokenParams = {
	token: string
}

const ResetPassword: React.FC<ResetPasswordProps> = (props) => {
	const router = useRouter()
	const { token: resetPasswordToken } = useParams() as any

	const {
		title = 'Create a password',
		subtitle = 'Enter a new password for your account',
		redirectUrl = '/login',
		loginUrl='/login',
	} = props || {}

	const { loading, errors, user, handleChange, resetPassword } = useAuth()

	const handleSubmit = async () => {
		let resp = await resetPassword(
			user?.email,
			user?.password,
			user?.password_confirmation,
			String(resetPasswordToken)
		)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ResetPasswordForm
					loading={loading}
					errors={errors}
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</>
	)
}

export default ResetPassword
