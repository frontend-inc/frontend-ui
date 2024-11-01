'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminUserItem from './AdminUserItem'
import AdminUserForm from './AdminUserForm'
import AdminUserEditForm from './AdminUserEditForm'
import AdminUserShow from './AdminUserShow'


const AdminUsersList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			url={`${apiUrl}/users`}
			name={'user'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			enableCreate
			sortOptions={[
				{ name: 'first_name', label: 'First Name' },
				{ name: 'last_name', label: 'Last Name' },
				{ name: 'username', label: 'Username' },
				{ name: 'created_at', label: 'Date' },
			]}
			fields={[
				{ name: 'image', label: 'Logo', variant: 'image' },
				{ name: 'name', label: 'Name', variant: 'string' },
			]}
			create={AdminUserForm}
			edit={AdminUserEditForm}
			show={AdminUserShow}
			component={AdminUserItem}
		/>
	)
}

export default AdminUsersList
