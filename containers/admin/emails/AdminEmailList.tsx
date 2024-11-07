'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminEmailListItem from './AdminEmailListItem'
import AdminEmailForm from './AdminEmailForm'

const AdminEmailsList = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/emails`}
			name="email"
			enableCreate
			enableEdit
			enableSearch
			enableDelete
			query={{
				sort_by: 'name',
				sort_direction: 'asc',
			}}
			edit={AdminEmailForm}
			create={AdminEmailForm}
			component={AdminEmailListItem}
			emptyIcon="MessageSquare"
			emptyTitle="No email templates"
			emptyDescription="No email templates yet."
		/>
	)
}

export default AdminEmailsList
