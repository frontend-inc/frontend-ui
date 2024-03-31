import React from 'react'
import { LoginForm, AuthScreen, LayoutLoader } from '../../../components'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { GoogleLogin } from '@react-oauth/google';

type LoginProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	forgotPasswordUrl?: string
	signupUrl?: string
	oneTimePasswordUrl?: string
	disableUsername?: boolean,
  enableGoogle?: boolean,
}

const Login: React.FC<LoginProps> = (props) => {
	const {
		redirectUrl,
		title = 'Sign In',
		subtitle = 'Log in to your account',
		forgotPasswordUrl,
		signupUrl,
		oneTimePasswordUrl,
    enableGoogle=false
	} = props || {}

	const router = useRouter()
	const { errors, loading, user, handleChange, login } = useAuth()

	const handleSubmit = async () => {
		let resp = await login(user)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleSignup = () => {
		router.push(signupUrl)
	}

	const handleForgotPassword = () => {
		router.push(forgotPasswordUrl)
	}

	const handleOneTimePassword = () => {
		router.push(oneTimePasswordUrl)
	}

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen title={title} subtitle={subtitle}>
				<LoginForm
          enableGoogle={enableGoogle}
					errors={errors}
					loading={loading}
					user={user}          
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleOneTimePassword={oneTimePasswordUrl && handleOneTimePassword}
					handleSignup={signupUrl && handleSignup}
					handleForgotPassword={forgotPasswordUrl && handleForgotPassword}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default Login
