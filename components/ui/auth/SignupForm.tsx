import React from 'react'
import { Stack, Button } from '@mui/material'
import { IconLoader, TextInput } from '../../../components'

type SignupFormProps = {
	loading: boolean
	user: Record<string, any>
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: () => void
	disableUsername?: boolean
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
	const {
		loading,
		errors,
		user,
		handleChange,
		disableUsername = false,
		handleSubmit,
		handleLogin,
	} = props || {}

	return (
		<Stack spacing={1}>
			{!disableUsername && (
				<TextInput
					errors={errors}
					name="username"
					value={user?.username}
					placeholder="Username"
					handleChange={handleChange}
				/>
			)}
			<TextInput
				errors={errors}
				name="first_name"
				value={user?.first_name}
				placeholder="First name"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="last_name"
				value={user?.last_name}
				placeholder="Last name"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="email"
				value={user?.email}
				placeholder="Email"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="password"
				value={user?.password}
				type="password"
				placeholder="Password"
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
			<Button fullWidth color="primary" onClick={handleLogin}>
				Already have an account? Sign in
			</Button>
		</Stack>
	)
}

export default SignupForm
