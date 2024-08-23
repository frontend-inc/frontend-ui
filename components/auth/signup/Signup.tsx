import React, { useContext } from 'react'
import { AuthScreen, SignupForm } from '../../../components'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'

export type SignupProps = {
	href: string
	loginUrl: string
	title?: string
	subtitle?: string
}

const Signup: React.FC<SignupProps> = (props) => {
	const { clientUrl } = useContext(AppContext)

	const {
		href,
		loginUrl,
		title = 'Sign Up',
		subtitle = 'Register your account',
	} = props

	const router = useRouter()

	const { loading, errors, user, handleChange, signup } = useAuth()

	const handleSubmit = async () => {
		let resp = await signup(user)
		if (resp?.id) {
			router.push(`${clientUrl}${href}`)
		}
	}

	const handleLogin = () => {
		if (loginUrl) {
			;`${clientUrl}${loginUrl}`
		}
	}

	return (
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
	)
}

export default Signup
