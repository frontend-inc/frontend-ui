import React from 'react'
import { AuthLayout, AuthScreen, SignupForm } from '../../../components'
import { useAuth } from 'frontend-js'

import { useRouter } from 'next/router'

type SignupProps = {
	redirectUrl: string
	loginUrl: string
	title?: string
	subtitle?: string
	authConfig?: Record<string, any>
}

const Signup: React.FC<SignupProps> = (props) => {
	const {
		redirectUrl,
		loginUrl,
		title = 'Sign up',
		subtitle = 'Register your account',
		authConfig = {},
	} = props

	const router = useRouter()

	const { loading, errors, user, handleChange, signup } = useAuth()

	const handleSubmit = async () => {
		let resp = await signup({
			...user,
			...authConfig,
		})
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<AuthLayout>
			<AuthScreen title={title} subtitle={subtitle}>
				<SignupForm
					errors={errors}
					loading={loading}
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</AuthLayout>
	)
}

export default Signup
