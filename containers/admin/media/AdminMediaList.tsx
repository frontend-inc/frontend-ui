'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { AdminMediaForm, AdminMediaListItem, AdminMediaShow } from '../..'
import { useAdmin } from '../../../hooks'

const AdminMediaList: React.FC = (props) => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			grid
			url={`${apiUrl}/storage`}
			name="storage"
			enableCreate
			enableDelete
			enableShow
			query={{
				sort_by: 'created_at',
				sort_direction: 'desc',
			}}
			edit={AdminMediaForm}
			create={AdminMediaForm}
			component={AdminMediaListItem}
			show={AdminMediaShow}
			emptyIcon="ri-image-2-fill"
			emptyTitle="No uploads"
			emptyDescription="No uploads yet."
		/>
	)
}

export default AdminMediaList
