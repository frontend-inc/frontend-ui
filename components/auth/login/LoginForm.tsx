import React, { useState, useEffect } from 'react'
import { Button, Divider, Stack } from '@mui/material'
import { GoogleLoginButton, TextInput, IconLoading } from '../..'

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
	handleGoogleSuccess?: false | (() => void)
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
		<Stack sx={sx.root} spacing={2} divider={<Divider />}>
			{enableGoogle && (
				<GoogleLoginButton handleSuccess={handleGoogleSuccess} />
			)}
			<Stack spacing={1.5}>
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
				<Button
					fullWidth
					size="large"
					color="primary"
					onClick={handleSubmit}
					variant="contained"
					endIcon={<IconLoading loading={loading} />}
				>
					Sign In
				</Button>
				{handleSignup && (
					<Button
						fullWidth
						color="secondary"
						variant="contained"
						onClick={handleSignup}
					>
						No account? Sign up
					</Button>
				)}
				{handleForgotPassword && (
					<Button fullWidth color="primary" onClick={handleForgotPassword}>
						Forgot password?
					</Button>
				)}
				{handleOneTimePassword && (
					<Button fullWidth color="primary" onClick={handleOneTimePassword}>
						One-time password
					</Button>
				)}
			</Stack>
		</Stack>
	)
}

export default LoginForm

const sx = {
	root: {
		mt: 2,
	},
	button: {
		color: 'text.primary',
	},
}
