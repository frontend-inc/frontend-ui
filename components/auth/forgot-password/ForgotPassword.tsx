import React from 'react'
import { ForgotPasswordForm, AuthScreen, Loader } from '../..'
import { useAlerts } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'

type ForgotPasswordProps = {
	title?: string
	subtitle?: string
	authConfig?: any
	loginUrl?: string
}

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {
	const { title, subtitle, loginUrl, authConfig } = props || {}

	const { showAlertSuccess } = useAlerts()
	const { loading, errors, user, handleChange, forgotPassword } = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await forgotPassword({
			...user,
			...authConfig,
		})
		if (resp?.id) {
			showAlertSuccess('Password reset instructions sent')
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<>
			<Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<ForgotPasswordForm
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
