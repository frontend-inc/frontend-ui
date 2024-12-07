'use client'

import React from 'react'
import { ForgotPasswordForm, AuthScreen, Loader } from '../..'
import { toast } from 'sonner'
import { useAuth } from 'frontend-js'
import { useRouter, useParams } from 'next/navigation'

type ForgotPasswordProps = {
	title: string
	subtitle?: string
	loginUrl?: string
}

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
	const { title, subtitle, loginUrl } = props || {}

	const { loading, errors, user, handleChange, forgotPassword } = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await forgotPassword(user)
		if (resp?.id) {
			toast('Password reset instructions sent')
		}
	}

	const handleLogin = () => {
		if (loginUrl) {
			router.push(loginUrl)
		}
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ForgotPasswordForm
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

export default ForgotPassword
