import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminPolicyItem } from '../..'
import AdminPolicyForm from './AdminPolicyForm'

const AdminPolicysList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			url={`${apiUrl}/policies`}
			name="policy"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'title',
				sort_direction: 'asc',
			}}
			create={AdminPolicyForm}
			edit={AdminPolicyForm}
			component={AdminPolicyItem}
			emptyIcon="FileText"
			emptyTitle="No policies"
			emptyDescription="No policies yet."
		/>
	)
}

export default AdminPolicysList
