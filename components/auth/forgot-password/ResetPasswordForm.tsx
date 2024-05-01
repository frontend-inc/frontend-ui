import React, { useEffect } from 'react'
import { Button, Stack } from '@mui/material'
import { IconLoading, TextInput } from '../../../components'
import { useAuth } from 'frontend-js'
import { getCookie } from 'cookies-next'

type ResetPasswordFormProps = {
	loading: boolean
	errors: Record<string, any>
	user: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin?: () => void
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = (props) => {
	const { loading, errors, user, handleChange, handleSubmit, handleLogin } =
		props

  const { token, setToken, authenticated, authCookie } = useAuth()

  useEffect(() => {
    console.log('authenticated', authenticated, token, authCookie)
    let cookie = getCookie(authCookie)
    console.log('cookie', cookie)
  }, [token, authenticated, authCookie])

	return (
		<Stack spacing={1}>
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
				variant="contained"
				color="primary"
				onClick={handleSubmit}
				endIcon={<IconLoading loading={loading} />}
			>
				Save and Continue
			</Button>
			{handleLogin && (
				<Button fullWidth color="primary" onClick={handleLogin}>
					Back to login
				</Button>
			)}
		</Stack>
	)
}

export default ResetPasswordForm
