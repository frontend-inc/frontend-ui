import React from 'react'
import { RemoteFormModal } from '../../../components'
import { useCollection } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type CollectionFormModalProps = {
	fields: FormFieldType[]
	parentResource?: any
}

const CollectionFormModal: React.FC<CollectionFormModalProps> = (props) => {
	
  const { 
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
    <RemoteFormModal 
      open={ openEdit }
      handleClose={ () => setOpenEdit(false) }
      url={ url }
      resource={ resource }
      parentResource={ parentResource }
      handleSuccess={ handleSuccess }
    />
	)
}

export default CollectionFormModal
