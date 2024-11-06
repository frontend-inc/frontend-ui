'use client'

import React, { useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminDocumentItem from './AdminDocumentListItem'
import AdminDocumentCreateForm from './AdminDocumentCreateForm'
import AdminDocumentEditForm from './AdminDocumentEditForm'
import AdminDocumentShow from './AdminDocumentShow'
import AdminDocumentToolbar from './AdminDocumentToolbar'
import AdminDocumentHeader from './AdminDocumentHeader'
import { DocumentTypes, MetafieldType } from '../../../types'
import { 
  DOCUMENT_FORM_FIELDS,
  DOCUMENT_SHOW_FIELDS 
} from '../../../constants'

type AdminDocumentListProps = {
  documentType: DocumentTypes
  collectionId: string
	metafields?: MetafieldType[]
}

const AdminDocumentsList: React.FC<AdminDocumentListProps> = (props) => {
	const { apiUrl } = useAdmin()
	const { collectionId, documentType='post', metafields = [] } = props

  const formFields = [
    ...DOCUMENT_FORM_FIELDS[documentType],
    ...metafields
  ]

  const showFields = [
    ...DOCUMENT_FORM_FIELDS[documentType],
    ...metafields
  ]
    
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
      query={{
        sort_by: 'position',
        sort_direction: 'asc'
      }}
			create={AdminDocumentCreateForm}
			edit={AdminDocumentEditForm}
			show={AdminDocumentShow}
			header={AdminDocumentHeader}
			toolbar={AdminDocumentToolbar}
			component={AdminDocumentItem}
			slots={{
        create: {
          fields: formFields,
          collectionId
        },
				edit: {
					fields: formFields,
          collectionId
				},
				show: {
					fields: showFields,
          documentType,
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
