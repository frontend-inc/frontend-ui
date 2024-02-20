import React from 'react'
import { Button, Stack } from '@mui/material'
import { IconLoader, TextInput } from '../../../components'

type OneTimePasswordFormProps = {
	loading: boolean
	errors: Record<string, any>
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const OneTimePasswordForm: React.FC<OneTimePasswordFormProps> = (props) => {
	const { loading, errors, user, handleChange, handleSubmit, handleLogin } =
		props

	return (
		<Stack spacing={1}>
			<TextInput
				errors={errors}
				name="email"
				value={user?.email}
				handleChange={handleChange}
				placeholder="Enter your email"
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleSubmit}
				endIcon={<IconLoader loading={loading} />}
			>
				Send One-Time Password
			</Button>
			{handleLogin && (
				<Button fullWidth color="primary" onClick={handleLogin}>
					Back to Login
				</Button>
			)}
		</Stack>
	)
}

export default OneTimePasswordForm
