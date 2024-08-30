import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminMetafieldForm, AdminMetafieldItem } from '../..'

const AdminMetafieldsList = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			url={`${apiUrl}/metafields`}
			name="metafield"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			filterOptions={[
				{
					label: 'Type',
					field: 'variant',
					variant: 'multiple_choice',
					options: [
						{ label: 'String', value: 'string' },
						{ label: 'Text', value: 'text' },
						{ label: 'Number', value: 'number' },
						{ label: 'Price', value: 'price' },
					],
				},
			]}
			edit={AdminMetafieldForm}
			create={AdminMetafieldForm}
			component={AdminMetafieldItem}
			emptyIcon="MessageSquare"
			emptyTitle="No metafields"
			emptyDescription="No metafields yet."
		/>
	)
}

export default AdminMetafieldsList
