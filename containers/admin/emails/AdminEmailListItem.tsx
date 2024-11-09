'use client'

import React from 'react'
import { ResourceListItem, Label } from '../../../components'

type AdminEmailListItemProps = {
	resource: any
	handleEdit: (resource: any) => void
	handleDelete: (resource: any) => void
}

const AdminEmailListItem: React.FC<AdminEmailListItemProps> = (props) => {
	const { resource: email, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			disableImage
			primary={email.name}
			secondary={email.subject}
			icon="Mail"
			color={'bg-purple-500'}
			secondaryAction={email?.internal && <Label label="System" />}
			handleClick={() => handleEdit(email)}
			handleEdit={() => handleEdit(email)}
			handleDelete={email?.internal ? undefined : () => handleDelete(email)}
		/>
	)
}

export default AdminEmailListItem
