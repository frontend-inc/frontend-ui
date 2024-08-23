import React from 'react'
import ResourceListItem from './ResourceListItem'
import { truncate } from '../../../helpers'

export type ResourceProps = {
	resource: any
	avatar?: React.ReactNode
	icon?: string
	color?: string
	layout?: 'list' | 'grid'
	handleClick: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	secondaryActions?: React.ReactNode
	menuActions?: any
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
}

const Resource: React.FC<ResourceProps> = (props) => {
	const {
		icon,
		color,
		avatar,
		resource,
		handleClick,
		handleEdit,
		handleDelete,
		secondaryActions,
		menuActions,
		sortable,
		isDragging = false,
		enableBorder = false,
	} = props

	return (
		<ResourceListItem
			icon={icon}
			color={color}
			avatar={avatar}
			primary={resource?.title}
			secondary={truncate(resource?.description, 60)}
			image={resource?.image?.url}
			handleClick={() => handleClick(resource)}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			menuActions={menuActions}
			secondaryActions={secondaryActions}
			sortable={sortable}
			isDragging={isDragging}
			enableBorder={enableBorder}
		/>
	)
}

export default Resource
