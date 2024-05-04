import React from 'react'
import { CollectionForm, AuthRequired } from '../../../components'

export type ProfileFormProps = {
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	resource: any
	children?: React.ReactElement[]
}

const ProfileForm: React.FC<ProfileFormProps> = (props) => {
	const { resource, buttonText, fields, ...rest } = props
	return (
		<AuthRequired>
			<CollectionForm
				{...rest}
				url="/api/v1/cms/profiles"
				fields={fields}
				buttonText={buttonText}
				handle={resource?.handle}
				onSuccessMessage="Profile updated successfully!"
			/>
		</AuthRequired>
	)
}

export default ProfileForm

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
