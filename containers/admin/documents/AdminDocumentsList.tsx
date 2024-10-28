'use client'

import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminDocumentItem from './AdminDocumentItem'
import AdminDocumentCreateForm from './AdminDocumentCreateForm'
import AdminDocumentEditForm from './AdminDocumentEditForm'
import AdminDocumentShow from './AdminDocumentShow'
import AdminDocumentToolbar from './AdminDocumentToolbar'
import AdminDocumentHeader from './AdminDocumentHeader'
import { DisplayFieldType } from '../../../types'

type AdminDocumentListProps = {
  collectionId: string
	fields?: DisplayFieldType[]
}

const AdminDocumentsList: React.FC<AdminDocumentListProps> = (props) => {
	const { apiUrl } = useAdmin()
	const { collectionId, fields = [] } = props

	return (
		<ResourceList
			selectable
      sortable
			url={`${apiUrl}/${collectionId}`}
			name={'document'}
			enableSearch
			enableShow
			enableEdit
			enableDelete
			enableCreate	
      sortOptions={[
        { name: 'position', label: 'Position' },
        { name: 'title', label: 'Title' },        
      ]}
			create={AdminDocumentCreateForm}
			edit={AdminDocumentEditForm}
			show={AdminDocumentShow}
			header={AdminDocumentHeader}
			toolbar={AdminDocumentToolbar}
			component={AdminDocumentItem}
			slots={{
        create: {
          fields,
          collectionId
        },
				edit: {
					fields,
          collectionId
				},
				show: {
					fields,
          collectionId
				},
        header: {
          collectionId
        },
        toolbar: {
          collectionId
        }
			}}
			emptyIcon="Box"
			emptyTitle="No content"
			emptyDescription="No content added yet."
		/>
	)
}

export default AdminDocumentsList