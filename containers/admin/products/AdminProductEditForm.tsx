import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { FormFieldType } from '../../../types'
import { MediaInput } from '../../../containers'

type AdminProductFormProps = ResourceFormProps & {
	metafields?: FormFieldType[]
}

const AdminProductForm: React.FC<AdminProductFormProps> = (props) => {
	const { metafields = [] } = props || {}

	let fields = [
		{ label: 'Image', name: 'image', variant: 'media' },
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

	const inputOptions = {
		media: MediaInput,
	}

	return <ResourceForm {...props} fields={fields} inputOptions={inputOptions} />
}

export default AdminProductForm
