'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminUserForm: React.FC<ResourceFormProps> = (props) => {
	const fields = [
		{
			label: 'First name',
			name: 'first_name',
			variant: 'string',
		},
		{
			label: 'Last name',
			name: 'last_name',
			variant: 'string',
		},
		{
			label: 'Username',
			name: 'username',
			variant: 'slugs',
		},
		{
			label: 'Email',
			name: 'email',
			variant: 'string',
			conditions: [{ name: 'id', operator: 'eq', value: undefined }],
		},
		{
			label: 'Role',
			name: 'role',
			variant: 'select',
			options: [
				{ label: 'User', value: 'user' },
				{ label: 'Admin', value: 'admin' },
			],
		},
		{
			label: 'Paid',
			name: 'paid',
			variant: 'boolean',
		},
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminUserForm
