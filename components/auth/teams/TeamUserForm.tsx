import React from 'react'
import { Button, Stack } from '@mui/material'
import { IconLoading, TextInput } from '../../../components'
import { UserType } from 'frontend-js'

type TeamUserFormProps = {
	user: Record<string, any>
	errors: Record<string, any>
	handleChange: (ev: any) => void
}

const TeamUserForm: React.FC<TeamUserFormProps> = (props) => {
	const {    
		errors,
		user,
		handleChange,    
	} = props || {}

	return (
		<Stack spacing={1.5}>
      <TextInput
        errors={errors}
        direction="column"
        name="username"
        label="Username"
        value={user?.username}
        placeholder="Username"
        handleChange={handleChange}
      />
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
		</Stack>
	)
}

export default TeamUserForm
