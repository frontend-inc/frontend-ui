import React from 'react'
import ResourceDetails from './ResourceDetails'

export type ResourceShowProps = {
	open: boolean
	handleClose: () => void
	loading: boolean
	errors: any
	resource: any
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: () => void
	handleDelete?: () => void
	fields: any[]
}

const ResourceShow: React.FC<ResourceShowProps> = (props) => {
	const {
		loading,
		open,
		handleClose,
		resource,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		fields = [],
	} = props || {}

	return (
		<ResourceDetails
			loading={loading}
			open={open}
			handleClose={handleClose}
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			secondary={resource?.description}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			resource={resource}
			fields={fields}
		/>
	)
}

export default ResourceShow
