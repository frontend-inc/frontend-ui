import React from 'react'
import { Button, Stack } from '@mui/material'
import { TextInput } from '../..'
import { CustomerType } from 'frontend-shopify'

type ShopifyForgotPasswordFormProps = {
	errors: any
	customer: CustomerType
	handleChange: (e: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const ShopifyForgotPasswordForm: React.FC<ShopifyForgotPasswordFormProps> = (props) => {
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

export default ShopifyForgotPasswordForm
