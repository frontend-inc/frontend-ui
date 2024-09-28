import React from 'react'
import { Stack, Button } from '@mui/material'
import { IconLoading, SwitchInput, TextInput } from '../..'
import { ShopifyCustomerType } from 'frontend-shopify'

type ShopifyRegisterFormProps = {
	loading: boolean
	customer: ShopifyCustomerType
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: () => void
}

const ShopifyRegisterForm: React.FC<ShopifyRegisterFormProps> = (props) => {
	const { loading, errors, customer, handleChange, handleSubmit, handleLogin } =
		props || {}

	return (
		<Stack spacing={1}>
			<TextInput
				errors={errors}
				name="firstName"
				value={customer?.firstName}
				placeholder="First name"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="lastName"
				value={customer?.lastName}
				placeholder="Last name"
				handleChange={handleChange}
			/>
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
			<SwitchInput
				errors={errors}
				name="acceptsMarketing"
				value={customer?.acceptsMarketing}
				placeholder="Accept marketing communication"
				handleChange={handleChange}
			/>
			<Button
				fullWidth
				color="primary"
				onClick={handleSubmit}
				variant="contained"
				startIcon={loading && <IconLoading />}
			>
				Register
			</Button>
			<Button
				fullWidth
				color="secondary"
				variant="outlined"
				onClick={handleLogin}
			>
				Already have an account? Sign in
			</Button>
		</Stack>
	)
}

export default ShopifyRegisterForm
