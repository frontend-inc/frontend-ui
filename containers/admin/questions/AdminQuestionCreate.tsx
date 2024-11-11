'use client'

import React from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'

const AdminQuestionCreate: React.FC<ResourceFormProps> = (props) => {
	let fields = [
		{ label: 'Question', name: 'title', variant: 'string' },
		{ label: 'Description', name: 'description', variant: 'text' },
		{ label: 'API name', name: 'name', variant: 'slug' },
		{
			label: 'Question type',
			name: 'variant',
			variant: 'select',
			options: [				
				{ icon: 'List', value: 'array', label: 'Array' },
				{ icon: 'MenuSquare', value: 'select', label: 'Select' },
				{ icon: 'Calendar', value: 'date', label: 'Date' },
				{ icon: 'Type', value: 'string', label: 'String' },
				{ icon: 'FileText', value: 'text', label: 'Text' },
				{ icon: 'Hash', value: 'number', label: 'Number' },
				{ icon: 'Star', value: 'rating', label: 'Rating' },
				{ icon: 'DollarSign', value: 'price', label: 'Price' },
				{ icon: 'Link', value: 'url', label: 'URL' },
			],
		},
		{
			label: 'Options',
			name: 'options',
			variant: 'array',
			conditions: [{ name: 'variant', operator: 'eq', value: 'select' }],
			default: [],
		},
	]

	return <ResourceForm {...props} title="Add Question" fields={fields} />
}

export default AdminQuestionCreate
