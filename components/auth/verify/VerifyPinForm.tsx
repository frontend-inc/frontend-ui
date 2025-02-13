'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { OtpInput } from '../..'

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
		<div className="flex flex-col items-center justify-center space-y-3">
			<OtpInput
				label="Enter your PIN"
				name="pin"
				value={user?.pin}
				placeholder="Enter PIN for verification"
				handleChange={handleChange}
			/>
			<Button
				color="primary"
				variant="solid"
				fullWidth
				onPress={handleSubmit}
				isLoading={loading}
			>
				Verify Pin
			</Button>
			<Button variant="solid" fullWidth onPress={handleResendPin}>
				Resend Pin
			</Button>
		</div>
	)
}

export default SendPinForm
