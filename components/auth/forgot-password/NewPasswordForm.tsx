'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { TextInput } from '../..'

type NewPasswordFormProps = {
	loading: boolean
	errors: Record<string, any>
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const NewPasswordForm: React.FC<NewPasswordFormProps> = (props) => {
	const { loading, errors, user, handleChange, handleSubmit, handleLogin } =
		props

	return (
		<div className="flex flex-col space-y-2">
			<TextInput
				errors={errors}
				name="password"
				value={user?.password}
				handleChange={handleChange}
				type="password"
				placeholder="New password"
			/>
			<TextInput
				errors={errors}
				name="password_confirmation"
				value={user?.password_confirmation}
				handleChange={handleChange}
				type="password"
				placeholder="Confirm password"
			/>
			<Button
				fullWidth
				variant="solid"
				color="primary"
				onPress={handleSubmit}
				isLoading={loading}
			>
				Save and Continue
			</Button>
			{handleLogin && (
				<Button fullWidth onPress={handleLogin}>
					Back to Login
				</Button>
			)}
		</div>
	)
}

export default NewPasswordForm
