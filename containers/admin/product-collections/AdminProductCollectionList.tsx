import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminProductCollectionItem from './AdminProductCollectionItem'
import AdminProductCollectionCreate from './AdminProductCollectionCreate'
import AdminProductCollectionEdit from './AdminProductCollectionEdit'
import AdminProductCollectionShow from './AdminProductCollectionShow'
import AdminProductCollectionToolbar from './AdminProductCollectionToolbar'



const AdminProductCollectionsList: React.FC = () => {
	const { apiUrl } = useAdmin()

	return (
		<ResourceList     
      grid 
      selectable
			url={`${apiUrl}/product_collections`}
			name={'product_collection'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			enableCreate
			sortOptions={[
				{ name: 'title', label: 'Title' },				
				{ name: 'created_at', label: 'Date' },
			]}
			create={AdminProductCollectionCreate}
			edit={AdminProductCollectionEdit}
			show={AdminProductCollectionShow}
      toolbar={ AdminProductCollectionToolbar }
			component={AdminProductCollectionItem}      			
      emptyIcon="ShoppingCard"
      emptyTitle="No product collections"
      emptyDescription="No products collections added yet."
		/>
	)
}

export default AdminProductCollectionsList
