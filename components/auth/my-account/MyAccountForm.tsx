import React from 'react'
import { Button, Box } from '@mui/material'
import { IconLoading, ImageInput, TextInput, SwitchInput } from '../../../components'

type AccountFormProps = {
  loading: boolean
	user: any
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleRedirect: () => void
	handleDeleteAvatar: () => void
}

const MyAccountForm: React.FC<AccountFormProps> = (props) => {
	const {
    loading,
		user,
		handleSubmit,
		handleChange,
		handleRedirect,
		handleDeleteAvatar,
	} = props

	return (
		<Box sx={sx.root}>
			<ImageInput
				value={user.avatar}
				name="avatar"
				handleChange={handleChange}
				handleRemove={handleDeleteAvatar}
			/>
			<TextInput
				value={user.first_name}
				name="first_name"
				placeholder="First name"
				handleChange={handleChange}
			/>
			<TextInput
				value={user.last_name}
				name="last_name"
				placeholder="Last name"
				handleChange={handleChange}
			/>
			<SwitchInput
				value={user?.accepts_marketing}
				placeholder="Accept email marketing"
				name="accepts_marketing"
				handleChange={handleChange}
			/>
			<Button
        color="primary" 
        variant="contained" 
        onClick={handleSubmit}
        startIcon={
          <IconLoading loading={loading} />
        }
      >
				Save
			</Button>
			<Button color="primary" onClick={handleRedirect}>
				Go back
			</Button>
		</Box>
	)
}

export default MyAccountForm

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
	},
}
