import React, { useContext } from 'react'
import { AuthLayout, AuthScreen, SignupForm } from '../../../components'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'

export type SignupProps = {
	navigateUrl: string
	loginUrl: string
	title?: string
	subtitle?: string
}

const Signup: React.FC<SignupProps> = (props) => {
	const { clientUrl } = useContext(AppContext)

	const {
		navigateUrl,
		loginUrl,
		title = 'Sign up',
		subtitle = 'Register your account',
	} = props

	const router = useRouter()

	const { loading, errors, user, handleChange, signup } = useAuth()

	const handleSubmit = async () => {
		let resp = await signup(user)
		if (resp?.id) {
			router.push(`${clientUrl}${navigateUrl}`)
		}
	}

	const handleLogin = () => {
		if (loginUrl) {
			;`${clientUrl}${loginUrl}`
		}
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
					handleLogin={loginUrl ? handleLogin : false}
				/>
			</AuthScreen>
		</AuthLayout>
	)
}

export default Signup
