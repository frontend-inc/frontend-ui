'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { IconLoading, TextInput, GoogleLoginButton } from '../..'

type SignupFormProps = {
	loading: boolean
	user: Record<string, any>
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: false | (() => void)
	enableGoogle?: boolean
	handleGoogleSuccess?: () => void
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
	const {
		loading,
		errors,
		user,
		handleChange,
		enableGoogle,
		handleSubmit,
		handleLogin,
		handleGoogleSuccess,
	} = props || {}

	return (
		<div className="flex flex-col space-y-4 w-full">
			{enableGoogle && (
				<GoogleLoginButton handleSuccess={handleGoogleSuccess} />
			)}
			<div className="flex flex-col space-y-4 w-full">
				<div className="flex flex-row space-x-3 w-full items-center">
					<TextInput
						errors={errors}
						direction="column"
						name="first_name"
						label="First name"
						value={user?.first_name}
						placeholder="First name"
						handleChange={handleChange}
					/>
					<TextInput
						errors={errors}
						direction="column"
						name="last_name"
						label="Last name"
						value={user?.last_name}
						placeholder="Last name"
						handleChange={handleChange}
					/>
				</div>
				<TextInput
					errors={errors}
					direction="column"
					name="email"
					label="Email"
					value={user?.email}
					placeholder="Email"
					handleChange={handleChange}
				/>
				<TextInput
					errors={errors}
					direction="column"
					name="password"
					label="Password"
					value={user?.password}
					type="password"
					placeholder="Password"
					handleChange={handleChange}
				/>
			</div>
			<div className="flex flex-col space-y-3 w-full">
				<Button variant="solid" fullWidth onPress={handleSubmit} loading={loading}>
					Register
				</Button>
				{handleLogin && (
					<Button
						fullWidth
						variant="ghost"
						onPress={handleLogin}
					>
						Already have an account? Sign in
					</Button>
				)}
			</div>
		</div>
	)
}

export default SignupForm
