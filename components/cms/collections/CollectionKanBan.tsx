import React, { useContext, useEffect, useState } from 'react'
import { CollectionListProps } from './CollectionList'
import { KanBan } from '../..'
import { ActionType } from '../../../types'
import { 
  Drawer, 
  Form,
  IconLoading,
  AlertModal,
  HeroModal 
} from '../..'
import { Box, Button } from '@mui/material'
import { FormContext } from '../../../context'
import { 
  useQuery,
  useResourceContext,
  changeDocumentValue, 
  flattenDocument 
} from 'frontend-js'
import { useForms } from '../../../hooks'

export type CollectionKanBanProps = CollectionListProps & {	
	headers: {
    label: string 
    value: string 
  }[]
  enableCreate?: boolean
}

const CollectionKanBan: React.FC<CollectionKanBanProps> = (props) => {
	
	const {
    headers,
    displayFields=[],
    actions=[],
    enableEdit,
    enableDelete,
    enableCreate,
    enableComments,
    enableFavorites,
    enableLikes,
    enableRatings,
    enableSharing,  
    enableUsers,  
    enableGradient,
    enableOverlay,
    ...rest
	} = props  

  const fieldName = 'status'; //Hard code the field as status

  const { 
    loading,
    resources, 
    updatePositions, 
    reloadMany 
  } = useQuery()

  const { 
    resource, 
    setResource,
    update 
  } = useResourceContext()

  const [open, setOpen] = useState(false)

  const handleClick = (resource) => {
    setResource(resource)
    setOpen(true)
  }  

  const handleComment = (resource) => {
    setResource(resource)
    setOpen(true)
  }  

  const { 
    handleEdit,
    handleDeleteClick 
  } = useForms()

  const { setOpenFormModal } = useContext(FormContext)

  const handleAdd = (header) => {
    setResource({
      status: header
    })
    setOpenFormModal(true)
  }

  const handleDrop = async (movedItem, value, columns) => {    
    setResource(null)
    let movedDocument = changeDocumentValue(movedItem,fieldName,value)        
    await update(movedDocument)    
    
    let columnItems = Object.keys(columns).map((key) => columns[key])
    columnItems = columnItems.reduce((acc, val) => acc.concat(val), []);
    columnItems = columnItems.map((item, index) => {
      return {
        ...item,
        position: index
      }
    })
    await updatePositions(columnItems)
    await reloadMany()    
  }  

  if(!headers || !fieldName) return null;
	return (
    <>
      <KanBan
        loading={loading}
        actions={actions}
        resources={resources}
        activeResource={resource}
        headers={headers}
        fieldName={fieldName}
        displayFields={displayFields}
        enableOverlay={enableOverlay}
        enableGradient={enableGradient}
        handleClick={ handleClick }
        handleDrop={handleDrop}    
        enableEdit={enableEdit}
        enableDelete={enableEdit}
        enableCreate={enableCreate}
        handleEdit={handleEdit}
        handleDelete={handleDeleteClick}      
        handleAdd={handleAdd}
        enableComments={enableComments}
        enableFavorites={enableFavorites}
        enableRatings={enableRatings}    
        handleComment={handleComment}   
      />
      <HeroModal
        open={ open }
        handleClose={ () => setOpen(false) }
        actions={ actions }
        displayFields={displayFields}
        enableOverlay={enableOverlay}
        enableEdit={enableEdit}
        enableComments={enableComments}
        enableFavorites={enableFavorites}
        enableRatings={enableRatings}
        handleEdit={() => handleEdit(resource)}
      />
  </>    
	)
}

export default CollectionKanBan
