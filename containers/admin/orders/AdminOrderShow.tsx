import React from 'react'
import { ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'

const AdminProductShow: React.FC<ResourceShowProps> = (props) => {
	const {
		resource,
		loading,
		open,
		handleClose,
		enableEdit,
		enableDelete,
		handleDelete,
		handleEdit,
	} = props || {}

	let fields = [
    { label: 'Number', name: 'display_number', variant: 'string' },
    { label: 'Subtotal', name: 'display_subtotal', variant: 'string' },
    { label: 'Total', name: 'display_total', variant: 'string' },
	]

	return (
		<ResourceDetails
			loading={loading}
			open={open}
			handleClose={handleClose}
			image={resource?.product?.image?.url}
			primary={resource?.display_number}
			secondary={resource?.display_total}
			label={resource?.status}
			enableEdit={enableEdit}
			enableDelete={enableDelete}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			resource={resource}
			fields={fields}
			direction="column"
		/>
	)
}

export default AdminProductShow
