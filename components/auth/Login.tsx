import React from 'react'
import { LoginForm, AuthScreen, Loader } from '..'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'

type LoginProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	forgotPasswordUrl?: string
	signupUrl?: string
	oneTimePasswordUrl?: string
	disableUsername?: boolean
	enableGoogle?: boolean
}

const Login: React.FC<LoginProps> = (props) => {
	const {
		redirectUrl,
		title = 'Sign In',
		subtitle = 'Log in to your account',
		forgotPasswordUrl,
		signupUrl,
		oneTimePasswordUrl,
		enableGoogle = false,
	} = props || {}

	const router = useRouter()
	const { errors, loading, user, handleChange, login } = useAuth()

	const handleSubmit = async () => {
		let resp = await login(user)
		if (resp?.id) {
			router.push(redirectUrl)
		}
	}

	const handleGoogleSuccess = () => {
		router.push(redirectUrl)
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
    <>
		  <Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<LoginForm
					errors={errors}
					loading={loading}
					user={user}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleOneTimePassword={oneTimePasswordUrl && handleOneTimePassword}
					handleSignup={signupUrl && handleSignup}
					handleForgotPassword={forgotPasswordUrl && handleForgotPassword}
					enableGoogle={enableGoogle}
					handleGoogleSuccess={handleGoogleSuccess}
				/>
			</AuthScreen>
		</>
	)
}

export default Login
