import React from 'react'
import { Button, Stack } from '@mui/material'

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
		<Stack spacing={1}>
			{verified ? (
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleRedirect}
				>
					Success! You can now continue
				</Button>
			) : (
				<Button fullWidth color="primary" onClick={handleLogin}>
					Back to Login
				</Button>
			)}
		</Stack>
	)
}

export default OneTimePasswordVerifyForm
