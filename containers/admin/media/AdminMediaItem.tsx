import React from 'react'
import { Label, ResourceGridItem } from '../../../components'
import { FieldIcon } from '../..'

type AdminMetafieldItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminMediaItem: React.FC<AdminMetafieldItemProps> = (props) => {
	const { resource, sortable, handleClick, handleDelete } = props
	return (
		<ResourceGridItem
			enableBorder
			sortable={sortable}
			image={ resource?.url }              
			primary={resource?.label}
			secondary={resource?.content_type}
			secondaryActions={<Label label={resource?.variant} />}
			handleClick={handleClick}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminMediaItem
