'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminProductItem from './AdminProductItem'
import AdminProductCreateForm from './AdminProductCreateForm'
import AdminProductEditForm from './AdminProductEditForm'
import AdminProductShow from './AdminProductShow'
import AdminProductToolbar from './AdminProductToolbar'
import AdminProductHeader from './AdminProductHeader'

const AdminProductsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList
			sortable
			selectable
			url={`${apiUrl}/products`}
			name={'product'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			enableCreate
			sortOptions={[
				{ name: 'position', label: 'Default' },
				{ name: 'price', label: 'Price' },
				{ name: 'title', label: 'Title' },
				{ name: 'created_at', label: 'Date' },
			]}
			query={{
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			create={AdminProductCreateForm}
			edit={AdminProductEditForm}
			show={AdminProductShow}
			header={AdminProductHeader}
			toolbar={AdminProductToolbar}
			component={AdminProductItem}
			emptyIcon="ri-shopping-bag-2-fill"
			emptyTitle="No products"
			emptyDescription="No products added yet."
		/>
	)
}

export default AdminProductsList
