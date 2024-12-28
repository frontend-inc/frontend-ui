'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { TextInput } from '../..'

type ForgotPasswordFormProps = {
	errors: any
	loading: boolean
	user: any
	handleChange: (e: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = (props) => {
	const { errors, loading, user, handleChange, handleSubmit, handleLogin } =
		props

	return (
		<div className="flex flex-col space-y-2">
			<TextInput
				label="Email"
				errors={errors}
				name="email"
				value={user?.email}
				placeholder="Enter your email"
				handleChange={handleChange}
			/>
			<Button variant="solid" fullWidth onPress={handleSubmit} loading={loading}>
				Send Instructions
			</Button>
			{handleLogin && (
				<Button fullWidth variant="ghost" onPress={handleLogin}>
					Back to Login
				</Button>
			)}
		</div>
	)
}

export default ForgotPasswordForm
