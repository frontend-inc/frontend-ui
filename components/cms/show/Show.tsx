import React, { useState, useEffect } from 'react'
import { Button, Stack } from '@mui/material'
import { ActionType, FieldType } from '../../../types'
import Article from './Article'
import Item from './Item'
import Person from './Person'
import Details from '../details/Details'
import { Drawer, Form, IconLoading } from '../../../components'
import { useDocuments, flattenDocument } from 'frontend-js'

export type ShowItemProps = {
	enableBorder?: boolean
	actions?: ActionType[]
	resource: any
  enableEdit?: boolean  
  handleEdit?: () => void
}

export type ShowProps = ShowItemProps & {
  fields: FieldType[]
  displayFields: FieldType[]
	url: string
	style: 'article' | 'person' | 'item'
}

const Show: React.FC<ShowProps> = (props) => {
	
  const {
		style = 'item',
    resource,
		fields,
    displayFields,
		url,
		actions,
    enableBorder,
    enableEdit,    
	} = props || {}

  const {
    loading,
    errors,
    update,
    resource: _resource,
    setResource,
    removeAttachment,
    handleDataChange,
  } = useDocuments({
    collection: resource?.content_type 
  })

  const handleRemove = async (name) => {
		await removeAttachment(_resource?.id, name)
	}
  
  const [openModal, setOpenModal] = useState(false)

  const handleEdit = () => {    
    setOpenModal(true)
  }

  const handleSubmit = async () => {
    try {      
      let resp = await update(_resource) 
      if(resp?.id){
        setOpenModal(false)
      }
    }catch(e){
      console.error(e)
    }
  }

  const components = {
    "item": Item,
    "article": Article,
    "person": Person
  }

  const Component = components[style]

  useEffect(() => {
    if(resource?.id){
      setResource(resource)
    }
  }, [resource])

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
      <Component
        resource={_resource}
        actions={actions}
        enableBorder={enableBorder}
        enableEdit={enableEdit}
        handleEdit={handleEdit}        
      />			
      { displayFields?.length > 0 && (
        <Details
          url={url}
          fields={displayFields}
          resource={resource}
          enableBorder={enableBorder}
        />
      )}
      <Drawer 
        open={ openModal }
        handleClose={() => setOpenModal(false) }
        title={ resource?.id ? 'Edit' : 'Add' }
        actions={
          <Button 
            fullWidth 
            variant="contained"
            color="primary"
            onClick={ handleSubmit }
            startIcon={ 
              <IconLoading loading={ loading } />
            }
            >
            { resource?.id ? 'Update' : 'Save' }
          </Button>      
        }
      >
        <Form  
          loading={ loading }
          errors={errors}
          fields={ fields }
          resource={ flattenDocument(_resource) }
          handleChange={ handleDataChange }
          handleRemove={ handleRemove }          
        />
      </Drawer>
		</Stack>
	)
}

export default Show

const sx = {
	root: {
		width: '100%',
	},
}
