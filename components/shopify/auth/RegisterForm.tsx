import React from 'react'
import { Stack, Button } from '@mui/material'
import { IconLoader, SwitchInput, TextInput } from '../..'
import { CustomerType } from 'frontend-shopify'

type RegisterFormProps = {
	loading: boolean
	customer: CustomerType
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: () => void
}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
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
				startIcon={<IconLoader loading={loading} />}
			>
				Register
			</Button>
			<Button
				fullWidth
				color="primary"
				variant="outlined"
				onClick={handleLogin}
			>
				Already have an account? Sign in
			</Button>
		</Stack>
	)
}

export default RegisterForm
