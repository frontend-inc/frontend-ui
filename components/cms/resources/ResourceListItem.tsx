import React from 'react'
import Resource from './Resource'
import { DisplayFieldType } from '../../../types'

export type ResourceListItemProps = {
	avatar?: React.ReactNode
	icon?: string
	color?: string
	title?: string
	description?: string
	layout?: 'list' | 'grid'
	image?: string
	resource: any
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	secondaryActions?: React.ReactNode
	menuActions?: any
	displayFields?: DisplayFieldType[]
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {
	const {
		resource,
		handleClick,
		handleEdit,
		handleDelete,
		secondaryActions,
		menuActions,
		displayFields = [],
	} = props

	const { icon, color, title, description } = resource || {}
	let image = resource?.image?.url

	return (
		<Resource
			icon={icon}
			color={color}
			title={title}
			description={description}
			image={image}
			displayFields={displayFields}
			resource={resource}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			secondaryActions={secondaryActions}
			menuActions={menuActions}
		/>
	)
}

export default ResourceListItem

const sx = {
	root: {
		p: 0,
		m: 0,
	},
	listItemButton: {
		p: 1,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	actions: {
		alignItems: 'center',
	},
	listItemIcon: {
		mr: 2,
	},
}
