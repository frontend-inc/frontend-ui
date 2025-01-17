'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { GoogleLoginButton, TextInput } from '../..'

type LoginFormProps = {
	errors?: any
	loading?: boolean
	user: any
	enableGoogle?: boolean
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleForgotPassword: false | (() => void)
	handleSignup: false | (() => void)
	handleOneTimePassword?: false | (() => void)
	handleGoogleSuccess?: () => void
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	const {
		errors,
		loading = false,
		user,
		handleChange,
		handleSubmit,
		handleForgotPassword,
		handleSignup,
		handleOneTimePassword,
		enableGoogle = false,
		handleGoogleSuccess,
	} = props

	return (
		<div className="flex flex-col space-y-4 w-full">
			{enableGoogle && (
				<GoogleLoginButton handleSuccess={handleGoogleSuccess} />
			)}
			<div className="flex flex-col space-y-4">
				<TextInput
					errors={errors}
					label="Email"
					name="email"
					value={user?.email}
					placeholder="Email"
					handleChange={handleChange}
				/>
				<TextInput
					errors={errors}
					label="Password"
					name="password"
					value={user?.password}
					type="password"
					placeholder="Password"
					handleChange={handleChange}
				/>
			</div>
			<div className="flex flex-col space-y-2">
				<Button
					variant="solid"
					color="primary"
					fullWidth
					onPress={handleSubmit}
					isLoading={loading}
				>
					Sign In
				</Button>
				{handleSignup && (
					<Button
						fullWidth
						color="primary"
						variant="ghost"
						onPress={handleSignup}
					>
						No account? Sign up
					</Button>
				)}
				{handleForgotPassword && (
					<Button fullWidth variant="solid" onPress={handleForgotPassword}>
						Forgot password?
					</Button>
				)}
				{handleOneTimePassword && (
					<Button fullWidth variant="solid" onPress={handleOneTimePassword}>
						One-time password
					</Button>
				)}
			</div>
		</div>
	)
}

export default LoginForm
