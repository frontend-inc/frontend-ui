import React from 'react'
import { IconButton } from '@mui/material'
import { Label, Icon, ResourceListItem } from '../../../components'

type AdminActionItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminActionItem: React.FC<AdminActionItemProps> = (props) => {
	const { resource, sortable, handleClick, handleEdit, handleDelete } = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			icon="Zap"
			color="primary.main"
			resource={{
				title: resource?.label,
				...resource,
			}}
			displayFields={[
				{
					label: 'Collection',
					variant: 'string',
					name: 'collection.name',
				},
			]}
			secondaryActions={
				<>
					<Label label={resource?.event_type} />
					<IconButton onClick={handleClick}>
						<Icon name="ChevronRight" />
					</IconButton>
				</>
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminActionItem
