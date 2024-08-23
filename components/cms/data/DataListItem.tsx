import React from 'react'
import { DataItem } from '../..'

type DataListItemProps = {
	resource: any
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	handleEdit?: () => void
	handleDelete?: () => void
	slots?: {
		item?: any
		image?: any
	}
}

// This component is responsible for converting a resource
// into a DataItem UI component
const DataListItem: React.FC<DataListItemProps> = (props) => {
	const {
		resource,
		actions,
		secondaryAction,
		handleClick,
		handleEdit,
		handleDelete,
		slots = {
			item: {},
			image: {},
		},
	} = props || {}

	const { label, title, image, description } = resource || {}

	return (
		<DataItem
			label={label}
			primary={title}
			secondary={description}
			image={image?.url}
			actions={actions}
			secondaryAction={secondaryAction}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			slots={slots}
		/>
	)
}

export default DataListItem
