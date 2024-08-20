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
			primary={ resource?.label }
      secondary={ resource?.collection?.name }			
			secondaryActions={
				<Label label={resource?.event_type} />
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminActionItem
