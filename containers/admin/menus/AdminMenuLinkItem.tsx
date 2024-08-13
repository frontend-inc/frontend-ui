import React from 'react'
import { IconButton } from '@mui/material'
import { ResourceListItem, Icon, Label } from 'frontend-ui/components'
import { ResourceListItemProps } from 'frontend-ui/components/cms/resources/ResourceListItem'

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
