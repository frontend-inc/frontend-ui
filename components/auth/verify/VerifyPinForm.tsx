import React from 'react'
import { Button, Stack } from '@mui/material'
import { IconLoading, TextInput } from '../..'

type SendPinFormProps = {
	errors: Record<string, any>
	loading?: boolean
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleResendPin: () => void
}

const SendPinForm: React.FC<SendPinFormProps> = (props) => {
	const { errors, loading, user, handleChange, handleSubmit, handleResendPin } =
		props

	return (
		<Stack spacing={1}>
			<TextInput
				errors={errors}
				name="pin"
				value={user?.pin}
				placeholder="Enter PIN for verification"
				handleChange={handleChange}
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={handleSubmit}
				startIcon={<IconLoading loading={loading} />}
			>
				Verify Pin
			</Button>
			<Button fullWidth color="primary" onClick={handleResendPin}>
				Resend Pin
			</Button>
		</Stack>
	)
}

export default SendPinForm
