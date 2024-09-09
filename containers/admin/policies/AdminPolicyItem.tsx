import React from 'react'
import { ResourceListItem } from '../../../components'

type AdminPolicyItemProps = {
	resource: any
	enableBorder?: boolean
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminPolicyItem: React.FC<AdminPolicyItemProps> = (props) => {
	const {
		resource: policy,
		enableBorder,
		handleEdit,
		handleDelete,
	} = props || {}

	return (
		<ResourceListItem
			sortable
			enableBorder={enableBorder}
			icon="FileText"
			color="primary.main"
			primary={policy?.title}
			secondary={`/policies/${policy?.handle}`}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminPolicyItem
