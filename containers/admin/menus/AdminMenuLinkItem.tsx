import React from 'react'
import { ResourceListItem } from '../../../components'
import { ResourceListItemProps } from '../../../components/cms/resources/ResourceListItem'

const AdminMenuLinkItem: React.FC<ResourceListItemProps> = (props) => {
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
			resource={{
				title: link?.name,
				...link,
			}}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminMenuLinkItem
