'use client'

import React from 'react'
import {
	Image,
	PublishLabel,
	ListFields,
	ResourceListItem,
} from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'

const AdminDocumentListItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	return (
		<ResourceListItem
			sortable
			selectable={selectable}
			selected={selected}
      image={resource?.image?.url}			
			primary={resource?.title}
			secondary={
				<ListFields
					resource={resource}
					fields={[{ label: 'Handle', name: 'handle', variant: 'string' }]}
				/>
			}
			secondaryAction={<PublishLabel published={resource?.published} />}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminDocumentListItem
