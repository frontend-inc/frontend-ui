'use client'

import React, { useState } from 'react'
import { AiGenerateProductsButton, ResourceHeader } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useAdminProductCollections } from '../../../hooks'

type AdminProductHeaderProps = ResourceHeaderProps

const AdminProductHeader: React.FC<AdminProductHeaderProps> = (props) => {
	const { handleReload } = props || {}
	
  const { loading, createProductCollection } = useAdminProductCollections()

  const handleSuccess = async (productCollection: any) => {    
    let resp = await createProductCollection(productCollection)
    if(resp?.id){
      handleReload()
    }
  }

	return (
		<ResourceHeader
			{...props}
			secondaryAction={
				<AiGenerateProductsButton   
          loading={ loading }       
          handleSuccess={handleSuccess}
        />					
			}
		/>
	)
}

export default AdminProductHeader
