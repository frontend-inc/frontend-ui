import React from 'react'
import { Label, ResourceGridItem } from '../../../components'

type AdminMediaItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminMediaItem: React.FC<AdminMediaItemProps> = (props) => {
	const { resource, sortable, handleClick, handleDelete } = props
	return (
		<ResourceGridItem
			enableBorder
			sortable={sortable}
			image={ resource?.url }              
			primary={resource?.content_type}
			secondaryActions={
        <Label label={resource?.dimensions} />
      }
			handleClick={handleClick}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminMediaItem
