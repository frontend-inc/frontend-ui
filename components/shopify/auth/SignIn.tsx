import React from 'react'
import { AuthScreen, LayoutLoader } from '../..'
import { useAuth } from 'frontend-shopify'
import { SignInForm } from '..'
import { useRouter } from 'next/router'

type SignInProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	forgotPasswordUrl?: string
	signupUrl?: string
	oneTimePasswordUrl?: string
}

const SignIn: React.FC<SignInProps> = (props) => {
	const {
		redirectUrl,
		title = 'Sign In',
		subtitle = 'Log in to your account',
		forgotPasswordUrl,
		signupUrl,
	} = props || {}

	const router = useRouter()
	const { errors, loading, customer, handleChange, login } = useAuth()

	const handleSubmit = async () => {
		let resp = await login(customer)
		if (resp?.accessToken) {
			router.push(redirectUrl)
		}
	}

	const handleSignup = () => {
		router.push(signupUrl)
	}

	const handleForgotPassword = () => {
		router.push(forgotPasswordUrl)
	}

	return (
		<LayoutLoader loading={loading}>
			<AuthScreen title={title} subtitle={subtitle}>
				<SignInForm
					errors={errors}
					loading={loading}
					customer={customer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleSignup={signupUrl && handleSignup}
					handleForgotPassword={forgotPasswordUrl && handleForgotPassword}
				/>
			</AuthScreen>
		</LayoutLoader>
	)
}

export default SignIn
