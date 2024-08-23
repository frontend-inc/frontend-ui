import React from 'react'
import { ResourceListItem } from '../../../components'
import { ResourceProps } from '../../../components/cms/resources/ResourceItem'

const AdminMenuLinkItem: React.FC<ResourceProps> = (props) => {
	const {
		resource: link,
		sortable,
		enableBorder,
		handleClick,
		handleEdit,
		handleDelete,
	} = props || {}

	return (
		<ResourceListItem
			sortable={sortable}
			enableBorder={enableBorder}
			icon="Link"
			color="primary.main"
      primary={link?.name}			
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminMenuLinkItem
