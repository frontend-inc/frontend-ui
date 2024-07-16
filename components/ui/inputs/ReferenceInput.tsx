import React, { useState, useEffect } from 'react'
import { SyntheticEventType } from '../../../types'
import { RemoteFormModal, Icon, InputLabel } from '../../../components'
import { Button, Stack } from '@mui/material'
import { useResource } from 'frontend-js'
import SortableReferences from './helpers/SortableReferences'

type ReferenceInputProps = {
  resource: any
  label?: string
  name?: string
  value?: any
  handleChange: (e: SyntheticEventType) => void
  url: string
  foreignUrl,
  contentType: string
  fields: []
}

const ReferenceInput: React.FC<ReferenceInputProps> = (props) => {

  const { 
    label, 
    resource: _resource, 
    url, 
    foreignUrl,
    contentType,
  } = props || {}

  const {  
    resource,  
    setResource,
    findOne,
    addReferences,
    removeReferences,
    updateReferencePositions 
  } = useResource({
    url,
    name: 'document'
  })

  const handleReload = () => {
    findOne(_resource?.id)
  }

  const {    
    resource: foreignResource,
    setResource: setForeignResource,
  } = useResource({
    url: foreignUrl,
    name: 'document'
  })

  useEffect(() => {
    if(_resource){
      setResource(_resource)
    }
  }, [_resource])

  const handleDrop = async (sorted) => {
    updateReferencePositions(resource?.id, sorted)
  }  

  const [open, setOpen] = useState(false)

  const handleAddClick = () => {
    setForeignResource({})
    setOpen(true)
  }

  const handleEdit = (res) => {
    setForeignResource(res)
    setOpen(true)
  }

  const handleDelete = async (res) => {
    await removeReferences(resource?.id, [res.id])
    handleReload()
  }

  const handleSuccess = async (res: any) => {
    let response = await addReferences(resource?.id, [res?.id])
    if(response?.id){
      handleReload()     
      setOpen(false)
    }
  }

  const references = resource?.references?.filter(
    (reference) => reference?.target?.content_type === contentType
  )

  if(!resource?.id) return null;
  return(
    <Stack direction='column' spacing={0.5}>
      <InputLabel 
        label={label} 
      />
      <SortableReferences 
        references={references}
        handleDrop={handleDrop}
        handleEdit={handleEdit}
        handleDelete={handleDelete}        
      />      
      <Button   
        fullWidth
        onClick={ handleAddClick }
        variant='contained'
        color='secondary'
        startIcon={
          <Icon name="Plus" size={20} color='secondary.contrastText' />
        }          
      >
        Add { contentType }
      </Button>
      <RemoteFormModal 
        open={ open }
        handleClose={ () => setOpen(false) }
        url={foreignUrl}
        resource={ foreignResource }
        handleSuccess={ handleSuccess }
      />
    </Stack>
  )
}

export default ReferenceInput