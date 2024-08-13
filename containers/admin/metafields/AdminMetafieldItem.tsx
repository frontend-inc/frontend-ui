import React from 'react'
import { Label, ResourceListItem } from 'frontend-ui/components'
import { FieldIcon } from 'components'

type AdminMetafieldItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminMetafieldItem: React.FC<AdminMetafieldItemProps> = (props) => {
	const { resource, sortable, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			avatar={<FieldIcon variant={resource?.variant} />}
			resource={{
				title: resource?.label,
				...resource,
			}}
			displayFields={[
				{
					label: 'Name',
					variant: 'string',
					name: 'name',
				},
			]}
			secondaryActions={<Label label={resource?.variant} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminMetafieldItem
