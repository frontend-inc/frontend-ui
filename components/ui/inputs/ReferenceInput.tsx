import React, { useState, useEffect } from 'react'
import { DocumentLinkType, SyntheticEventType } from '../../../types'
import { FormModal, Icon, InputLabel } from '../../../components'
import { Button, Box } from '@mui/material'
import { useResource } from 'frontend-js'
import SortableDocumentLinks from './helpers/SortableDocumentLinks'

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
    fields,
  } = props || {}

  const {  
    resource,  
    setResource,
    findOne,
    addLinks,
    removeLinks,
    updateLinkPositions 
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
    updateLinkPositions(resource?.id, sorted)
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
    await removeLinks(resource?.id, [res.id])
    handleReload()
  }

  const handleSuccess = async (res: any) => {
    let response = await addLinks(resource?.id, [res?.id])
    if(response?.id){
      handleReload()     
      setOpen(false)
    }
  }

  const documentLinks = resource?.document_links?.filter(
    (link) => link?.target?.content_type === contentType
  )

  return(
    <Box>
      <InputLabel 
        label={label} 
      />
      <SortableDocumentLinks 
        documentLinks={documentLinks}
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
      <FormModal 
        open={ open }
        handleClose={ () => setOpen(false) }
        url={foreignUrl}
        resource={ foreignResource }
        fields={ fields }
        handleSuccess={ handleSuccess }
      />
    </Box>
  )
}

export default ReferenceInput