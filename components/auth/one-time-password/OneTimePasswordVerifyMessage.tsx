'use client'

import React from 'react'
import { Button } from '@nextui-org/react'

type OneTimePasswordVerifyFormProps = {
	verified: boolean
	handleLogin?: () => void
	handleRedirect: () => void
}

const OneTimePasswordVerifyForm: React.FC<OneTimePasswordVerifyFormProps> = (
	props
) => {
	const { verified = false, handleRedirect, handleLogin } = props

	return (
		<div className="flex flex-col space-y-3">
			{verified ? (
				<Button variant="solid" fullWidth onPress={handleRedirect}>
					Success! You can now continue
				</Button>
			) : (
				<Button variant="ghost" fullWidth onPress={handleLogin}>
					Back to Login
				</Button>
			)}
		</div>
	)
}

export default OneTimePasswordVerifyForm
