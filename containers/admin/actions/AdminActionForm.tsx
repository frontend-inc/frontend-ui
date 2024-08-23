import React from 'react'
import { ResourceForm } from '../../../components'
import { ACTION_TYPES } from '../../../constants'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useAdmin } from '../../../hooks'

const AdminActionForm: React.FC<ResourceFormProps> = (props) => {
	const { apiUrl } = useAdmin()

	const FORM_FIELDS = [
		{
			label: 'Label',
			name: 'label',
			variant: 'string',
		},
		{
			label: 'API name',
			name: 'name',
			variant: 'nospace',
		},
		{
			label: 'Trigger',
			name: 'action_type',
			variant: 'select',
			options: ACTION_TYPES,
		},
		{
			label: 'Collection',
			name: 'collection_id',
			variant: 'autosuggest',
			displayField: 'name',
			url: `${apiUrl}/collections`,
			query: {},
			conditions: [
				{
					name: 'action_type',
					operator: 'in',
					value: ['resources.create', 'resources.save', 'resources.delete'],
				},
			],
		},
	]

	return <ResourceForm {...props} fields={FORM_FIELDS} />
}

export default AdminActionForm
