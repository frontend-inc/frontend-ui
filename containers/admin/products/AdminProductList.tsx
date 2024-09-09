import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminProductItem from './AdminProductItem'
import AdminProductForm from './AdminProductForm'
import AdminProductEditForm from './AdminProductEditForm'
import AdminProductShow from './AdminProductShow'
import AdminProductToolbar from './AdminProductToolbar'
import { MetafieldType } from '../../../types'

type AdminProductListProps = {
	metafields?: MetafieldType[]
}

const AdminProductsList: React.FC<AdminProductListProps> = (props) => {
	const { apiUrl } = useAdmin()
	const { metafields = [] } = props

	return (
		<ResourceList
			grid
			selectable
			url={`${apiUrl}/products`}
			name={'product'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			enableCreate
			sortOptions={[
				{ name: 'price', label: 'Price' },
				{ name: 'title', label: 'Title' },
				{ name: 'created_at', label: 'Date' },
			]}
			create={AdminProductForm}
			edit={AdminProductEditForm}
			show={AdminProductShow}
			toolbar={AdminProductToolbar}
			component={AdminProductItem}
			slots={{
				edit: {
					metafields,
				},
				show: {
					metafields,
				},
			}}
			emptyIcon="Shirt"
			emptyTitle="No products"
			emptyDescription="No products added yet."
		/>
	)
}

export default AdminProductsList
