'use client'

import React from 'react'
import { Form } from '../../../components'
import { ACCOUNT_FORM_FIELDS } from '../../../constants'

type MyAccountFormProps = {
	loading?: boolean
	errors?: any
	user: any
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleDeleteAvatar: () => void
}

const MyAccountForm: React.FC<MyAccountFormProps> = (props) => {
	const {
		loading,
		errors,
		user,
		handleSubmit,
		handleChange,
		handleDeleteAvatar,
	} = props

	let formFields = ACCOUNT_FORM_FIELDS

	formFields = [
		...formFields,
		{
			label: 'Accept email marketing',
			name: 'accepts_marketing',
			variant: 'boolean',
		},
	]

	return (
    <Form
      loading={loading}
      errors={errors}
      //@ts-ignore
      fields={formFields}
      resource={user}
      handleChange={handleChange}
      handleRemove={handleDeleteAvatar}
      handleSubmit={handleSubmit}
      buttonText="Save"
    />
	)
}

export default MyAccountForm
