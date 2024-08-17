import React from 'react'
import { Label, ResourceListItem } from '../../../components'

type AdminWebhookItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminWebhookItem: React.FC<AdminWebhookItemProps> = (props) => {
	const { resource, sortable, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			icon="Webhook"
			color="primary.main"
			resource={{
				title: resource?.event_type,
				...resource,
			}}
			displayFields={[
				{
					label: 'Collection',
					variant: 'string',
					name: 'collection.name',
				},
			]}
			secondaryActions={<Label label={resource?.event_type} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminWebhookItem
