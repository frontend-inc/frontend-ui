import React from 'react'
import { ResourceListItem, Label } from '../../../components'
import { ResourceProps } from '../../../components/cms/resources/ResourceItem'

const AdminMenuItem: React.FC<ResourceProps> = (props) => {
	const {
		resource: menu,
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
			icon="FolderTree"
			color="primary.main"
			primary={menu?.label}
			secondaryActions={<>{menu?.internal && <Label label="System" />}</>}
			handleClick={handleClick}
			handleEdit={!menu?.internal ? handleEdit : undefined}
			handleDelete={!menu?.internal ? handleDelete : undefined}
		/>
	)
}

export default AdminMenuItem
