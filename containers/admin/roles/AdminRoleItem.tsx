import React from 'react'
import { Label, ResourceListItem } from '../../../components'

type AdminRoleItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminRoleItem: React.FC<AdminRoleItemProps> = (props) => {
	const { resource: role, handleEdit, handleDelete } = props || {}

	return (
		<ResourceListItem
			enableBorder
			sortable
			icon="User"
			color="primary.main"
			primary={role?.label}
			secondary={role?.name}
			secondaryActions={role?.internal ? <Label label="System" /> : null}
			handleEdit={!role?.internal ? handleEdit : undefined}
			handleDelete={!role?.internal ? handleDelete : undefined}
		/>
	)
}

export default AdminRoleItem
