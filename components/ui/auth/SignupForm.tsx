import React from 'react'
import { Stack, Button } from '@mui/material'
import { IconLoading, TextInput } from '../../../components'

type SignupFormProps = {
	loading: boolean
	user: Record<string, any>
	errors: Record<string, any>
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleLogin: () => void
	disableUsername?: boolean
}

const SignupForm: React.FC<SignupFormProps> = (props) => {
	const {
		loading,
		errors,
		user,
		handleChange,
		disableUsername = false,
		handleSubmit,
		handleLogin,
	} = props || {}

	return (
		<Stack spacing={1.5}>
			{!disableUsername && (
				<TextInput
          direction="column"
					errors={errors}
					name="username"
          label="Username"
					value={user?.username}
					placeholder="Username"
					handleChange={handleChange}
				/>
			)}
      <Stack direction="row" spacing={1}>
        <TextInput      
          errors={errors}
          direction="column"
          name="first_name"
          label="First name"
          value={user?.first_name}
          placeholder="First name"
          handleChange={handleChange}
        />
        <TextInput      
          errors={errors}
          direction="column"
          name="last_name"
          label="Last name"
          value={user?.last_name}
          placeholder="Last name"
          handleChange={handleChange}
        />
      </Stack>
			<TextInput
				errors={errors}
        direction="column"
				name="email"
        label="Email"
				value={user?.email}
				placeholder="Email"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
        direction="column"
				name="password"
        label="Password"
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
				startIcon={<IconLoading loading={loading} />}
			>
				Register
			</Button>
			<Button fullWidth color="primary" onClick={handleLogin}>
				Already have an account? Sign in
			</Button>
		</Stack>
	)
}

export default SignupForm
