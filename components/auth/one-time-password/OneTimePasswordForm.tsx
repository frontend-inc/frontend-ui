'use client'

import React from 'react'
import { Button } from '../../../components'
import { IconLoading, TextInput } from '../..'

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
		<div className="flex flex-col space-y-3 w-full">
			<TextInput
				errors={errors}
				name="email"
				value={user?.email}
				handleChange={handleChange}
				placeholder="Enter your email"
			/>
			<Button fullWidth onClick={handleSubmit} loading={loading}>
				Send One-Time Password
			</Button>
			{handleLogin && (
				<Button fullWidth onClick={handleLogin}>
					Back to Login
				</Button>
			)}
		</div>
	)
}

export default OneTimePasswordForm
