import React from 'react'
import { Button, Stack } from '@mui/material'
import { TextInput } from '../..'
import { Customer } from 'frontend-shopify'

type ForgotPasswordFormProps = {
	errors: any
	customer: Customer
	handleChange: (e: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = (props) => {
	const { errors, customer, handleChange, handleSubmit, handleLogin } = props

	return (
		<Stack spacing={1}>
			<TextInput
				errors={errors}
				name="email"
				value={customer?.email}
				placeholder="Enter your email"
				handleChange={handleChange}
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleSubmit}
			>
				Send Instructions
			</Button>
			{handleLogin && (
				<Button
					fullWidth
					variant="outlined"
					color="primary"
					onClick={handleLogin}
				>
					Back to Login
				</Button>
			)}
		</Stack>
	)
}

export default ForgotPasswordForm
