import React from 'react'
import { ResourceDetails } from '../../../components'
import { ResourceShowProps } from '../../../components/cms/resources/ResourceShow'
import { DisplayFieldType } from '../../../types'

type AdminProductShowProps = ResourceShowProps & {
	metafields?: DisplayFieldType[]
}

const AdminProductShow: React.FC<AdminProductShowProps> = (props) => {
	const {
		resource,
		loading,
		open,
		handleClose,
		metafields = [],
		enableEdit,
		enableDelete,
		handleDelete,
		handleEdit,
	} = props || {}

	let fields = [
		{ label: 'Handle', name: 'handle', variant: 'string' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Price', name: 'price', variant: 'number' },
		{ label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
		{ label: 'SKU', name: 'sku', variant: 'string' },
		{ label: 'Subscription', name: 'recurring', variant: 'boolean' },
		{
			label: 'Interval',
			name: 'interval',
			variant: 'select',
			options: [
				{ label: 'Day', value: 'day' },
				{ label: 'Week', value: 'week' },
				{ label: 'Month', value: 'month' },
				{ label: 'Year', value: 'year' },
			],
			conditions: [{ name: 'recurring', operator: 'eq', value: true }],
		},
		...metafields,
	]

	return (
		<ResourceDetails
			loading={loading}
			open={open}
			handleClose={handleClose}
			image={resource?.image?.url}
			primary={resource?.title}
			secondary={resource?.description}
			label={resource?.display_price}
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
