import React from 'react'
import { Icon, Modal } from '../..'
import DataReferenceForm from './DataReferenceForm'
import { Button } from '@mui/material'
import { QueryParamsType, useResource, useResourceContext } from 'frontend-js'

export type DataReferencesProps = {
	url: string
  query?: QueryParamsType
}

const DataReferences: React.FC<DataReferencesProps> = (props) => {

  const { url, query={} } = props || {}

  const {    
    resource,
    openReferences,
    setOpenReferences,
  } = useResourceContext()

  const {
    errors,
    loading,
    resource: parentResource,
    handleChange,
    addReferences,
  } = useResource({
    name: 'references',
    url: url 
  })	

  const handleSubmit = async () => {
    if(parentResource?.id){
      await addReferences(parentResource?.id, [resource?.id])
      setOpenReferences(false)
    }    
  }

	return (
		<Modal
      loading={loading}
			open={openReferences}
			handleClose={() => setOpenReferences(false)}      
			title={ resource?.title }
      maxWidth="sm"      
			buttons={
				<Button
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleSubmit}
					startIcon={                      
            <Icon name="Plus" size={20} color="primary.contrastText" /> 
          } 
        >        
          Add 
				</Button>
			}
		>
      <DataReferenceForm 
        url={url}
        errors={ errors }
        resource={parentResource}
        handleChange={handleChange}
        query={ query }
      />  
		</Modal>
	)
}

export default DataReferences
