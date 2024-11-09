'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminProductCreateForm: React.FC<ResourceFormProps> = (props) => {
	let fields = [
		{ label: 'Image', name: 'image', variant: 'image' },
		{ label: 'Title', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'Label', name: 'label', variant: 'string' },
		{ label: 'Price', name: 'price', variant: 'number' },
		{ label: 'Compare at price', name: 'compare_at_price', variant: 'number' },
		{ label: 'SKU', name: 'sku', variant: 'string' },
		{ label: 'recurring', name: 'recurring', variant: 'boolean' },
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
		{
			label: 'Free trial days',
			name: 'free_trial_days',
			variant: 'number',
			conditions: [{ name: 'recurring', operator: 'eq', value: true }],
		},
	]

	return <ResourceForm {...props} fields={fields} />
}

export default AdminProductCreateForm
