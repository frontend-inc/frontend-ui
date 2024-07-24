import React from 'react'
import { RemoteFormModal } from '../..'
import { useResourceContext } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type EditModalProps = {
	fields: FormFieldType[]
	parentResource?: any
}

const EditModal: React.FC<EditModalProps> = (props) => {
	
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
	} = useResourceContext()
  
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

export default EditModal
