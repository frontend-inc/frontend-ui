import React from 'react'
import { AuthLayout, AuthScreen } from '../..'
import { RegisterForm } from '..'
import { useAuth } from 'frontend-shopify'
import { useRouter } from 'next/router'

type RegisterProps = {
	title?: string
	subtitle?: string
	redirectUrl: string
	loginUrl: string
}

const Register: React.FC<RegisterProps> = (props) => {
	const {
		title = 'Sign up',
		subtitle = 'Register your account',
		redirectUrl,
		loginUrl,
	} = props

	const { loading, errors, customer, handleChange, signup } = useAuth()

	const router = useRouter()

	const handleSubmit = async () => {
		let resp = await signup(customer)
		if (resp?.email) {
			router.push(redirectUrl)
		}
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	return (
		<AuthLayout>
			<AuthScreen title={title} subtitle={subtitle}>
				<RegisterForm
					errors={errors}
					loading={loading}
					customer={customer}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</AuthLayout>
	)
}

export default Register
