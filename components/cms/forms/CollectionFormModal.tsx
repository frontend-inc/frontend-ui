import React from 'react'
import { Button } from '@mui/material'
import { AlertModal, FormModal } from '../../../components'
import { useCollection } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type CollectionFormModalProps = {
	fields: FormFieldType[]
	parentResource?: any
}

const CollectionFormModal: React.FC<CollectionFormModalProps> = (props) => {
	
  const { 
    fields, 
    parentResource 
  } = props || {}

	const {
    url,
		resource,
    setResource,
    reloadMany,
		openEdit,
		setOpenEdit,
	} = useCollection()

  const handleSuccess = async (savedResource) => {        
    if(savedResource?.id){
      setResource(savedResource)
    }        
    reloadMany()    
    setOpenEdit(false)
  }


	return (
    <FormModal 
      open={ openEdit }
      handleClose={ () => setOpenEdit(false) }
      resource={ resource }
      parentResource={ parentResource }
      fields={ fields }
      url={ url }
      handleSuccess={ handleSuccess }
    />
	)
}

export default CollectionFormModal
