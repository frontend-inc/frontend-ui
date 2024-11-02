'use client'

import React from 'react'
import { ResourceGridItem } from '../../../components'
import { resizeCloudinaryImage } from '../../../helpers'
import { Badge } from 'frontend-shadcn'

type AdminMediaListItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const AdminMediaListItem: React.FC<AdminMediaListItemProps> = (props) => {
	const { resource, sortable, handleClick, handleDelete } = props
	return (
		<ResourceGridItem
			enableBorder
			sortable={sortable}
			//@ts-ignore
			image={resource?.thumbnail_url}
			secondaryAction={
				<Badge>{resource?.content_type}</Badge>
			}
			handleClick={handleClick}
			handleDelete={handleDelete}
			slots={{
				image: {
					height: 160,
					width: 320,
					objectFit: 'contain',
				},
			}}
		/>
	)
}

export default AdminMediaListItem
