import React from 'react'
import { Button, Divider, Stack } from '@mui/material'
import { TextInput, IconLoader } from '../../../components'
import { GoogleLogin } from '@react-oauth/google';

type LoginFormProps = {
	errors?: any
	loading?: boolean
	user: any
  enableGoogle?: boolean
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleForgotPassword: () => void
	handleSignup: () => void
	handleOneTimePassword?: () => void
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	const {
		errors,
		loading = false,
		user,
		handleChange,
		handleSubmit,
		handleForgotPassword,
		handleSignup,
		handleOneTimePassword,
    enableGoogle=false 
	} = props

	return (
		<Stack spacing={1}>
      { enableGoogle && (
        <>
       <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <Divider />
        </>      
      )}
			<TextInput
				errors={errors}
				name="email"
				value={user?.email}
				placeholder="Email"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="password"
				value={user?.password}
				type="password"
				placeholder="Password"
				handleChange={handleChange}
			/>
			<Button
				fullWidth
				color="primary"
				onClick={handleSubmit}
				variant="contained"
				endIcon={<IconLoader loading={loading} />}
			>
				Sign In
			</Button>
			{handleSignup && (
				<Button
					fullWidth
					color="primary"
					variant="outlined"
					onClick={handleSignup}
				>
					No account? Sign up
				</Button>
			)}
			{handleForgotPassword && (
				<Button fullWidth color="primary" onClick={handleForgotPassword}>
					Forgot password?
				</Button>
			)}
			{handleOneTimePassword && (
				<Button fullWidth color="primary" onClick={handleOneTimePassword}>
					One-time password
				</Button>
			)}
		</Stack>
	)
}

export default LoginForm

const sx = {
	button: {
		color: 'text.primary',
	},
}
