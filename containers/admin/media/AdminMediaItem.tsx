import React from 'react'
import { Label, ResourceGridItem } from '../../../components'
import { resizeCloudinaryImage } from '../../../helpers'

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
			//@ts-ignore
			image={resizeCloudinaryImage(resource?.url, { width: 800, height: 800 })}
			primary={resource?.content_type}
			secondaryAction={<Label label={resource?.dimensions} />}
			handleClick={handleClick}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminMediaItem
