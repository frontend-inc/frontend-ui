'use client'

import React, { useState } from 'react'
import { ResourceHeader } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useAdminDocuments } from '../../../hooks'
import { AiGenerateDocumentsButton } from '../../../components'

type AdminDocumentHeaderProps = ResourceHeaderProps & {
	collectionId: string
}

const AdminDocumentHeader: React.FC<AdminDocumentHeaderProps> = (props) => {
	const { handleReload, collectionId } = props || {}

	const { loading, createDocuments } = useAdminDocuments({
    collection: collectionId,
  })

  const handleSuccess = async (documents: any) => {
    let resp = await createDocuments(documents)
    if (resp?.id){
      handleReload()
    }    
  }

  if(!collectionId || 
    collectionId == 'undefined' || 
    collectionId == 'index'
  ) return null;
	return (
		<ResourceHeader
			{...props}			
      secondaryAction={
        <AiGenerateDocumentsButton
          loading={ loading }
          handleSuccess={handleSuccess}
        />
      }
		/>
	)
}

export default AdminDocumentHeader
