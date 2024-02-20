import React from 'react'
import { Button, Stack } from '@mui/material'
import { TextInput, IconLoader } from '../..'
import { Customer } from 'frontend-shopify'

type SignInFormProps = {
	errors?: any
	loading?: boolean
	customer: Customer
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleForgotPassword: () => void
	handleSignup: () => void
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
	const {
		errors,
		loading = false,
		customer,
		handleChange,
		handleSubmit,
		handleForgotPassword,
		handleSignup,
	} = props

	return (
		<Stack spacing={1}>
			<TextInput
				errors={errors}
				name="email"
				value={customer?.email}
				placeholder="Email"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="password"
				value={customer?.password}
				type="password"
				placeholder="Password"
				handleChange={handleChange}
			/>
			<Button
				fullWidth
				color="primary"
				onClick={handleSubmit}
				variant="contained"
				endIcon={<IconLoader loading={loading} />}
			>
				Sign In
			</Button>
			{handleSignup && (
				<Button
					fullWidth
					color="primary"
					variant="outlined"
					onClick={handleSignup}
				>
					No account? Sign up
				</Button>
			)}
			{handleForgotPassword && (
				<Button
					fullWidth
					color="primary"
					variant="outlined"
					onClick={handleForgotPassword}
				>
					Forgot password?
				</Button>
			)}
		</Stack>
	)
}

export default SignInForm
