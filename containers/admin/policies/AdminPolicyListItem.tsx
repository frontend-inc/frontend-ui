'use client'

import React from 'react'
import { ResourceListItem } from '../../../components'

type AdminPolicyListItemProps = {
	resource: any
	enableBorder?: boolean
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminPolicyListItem: React.FC<AdminPolicyListItemProps> = (props) => {
	const {
		resource: policy,
		enableBorder,
		handleEdit,
		handleDelete,
	} = props || {}

	return (
		<ResourceListItem
			sortable
			disableImage
			enableBorder={enableBorder}
			icon="StickyNote"
			primary={policy?.title}
			secondary={`/policies/${policy?.handle}`}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminPolicyListItem
