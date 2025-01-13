'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { TextInput } from '../..'

type SendPinFormProps = {
	errors: Record<string, any>
	loading?: boolean
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: () => void
}

const SendPinForm: React.FC<SendPinFormProps> = (props) => {
	const { errors, loading, user, handleChange, handleSubmit, handleLogin } =
		props

	return (
		<div className="flex flex-col space-y-3">
			<TextInput
				errors={errors}
				label="Email"
				name="email"
				value={user?.email}
				placeholder="Enter your email"
				handleChange={handleChange}
			/>
			<Button
				color="primary"
				variant="solid"
				fullWidth
				onPress={handleSubmit}
				isLoading={loading}
			>
				Send Verification Pin
			</Button>
			{handleLogin && (
				<Button fullWidth variant="solid" onPress={handleLogin}>
					Cancel
				</Button>
			)}
		</div>
	)
}

export default SendPinForm
