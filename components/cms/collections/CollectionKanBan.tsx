import React, { useContext, useEffect, useState } from 'react'
import { useDocuments } from 'frontend-js'
import { CollectionListProps } from './CollectionList'
import { KanBan } from '../../../components'
import { SYSTEM_FIELDS, useAuth } from 'frontend-js'
import { ActionType } from '../../../types'
import { 
  Drawer, 
  Form,
  IconLoading,
  AlertModal,
  HeroModal 
} from '../../../components'
import { Button } from '@mui/material'
import { AppContext } from '../../../context'
import { flattenDocument } from 'frontend-js'

export type CollectionKanBanProps = CollectionListProps & {	
	headers: {
    label: string 
    value: string 
  }[]
  actions: ActionType[]
  fieldName: string 
}

const CollectionKanBan: React.FC<CollectionKanBanProps> = (props) => {
	
  const { clientUrl, setAuthOpen } = useContext(AppContext)
  const { currentUser } = useAuth()

	const {
		url,
    headers,
    fields=[],
    fieldName,
    displayFields=[],
    actions=[],
    enableOverlay=false,
    enableEdit,
    enableFavorites,
    enableRatings,  
    enableUsers,  
    ...rest
	} = props  

  const { 
    loading,
    errors,
    resource,
    resources,
    setResource,
    create,
    update,
    destroy,
    handleDataChange,
    removeAttachment,
    findMany,
    reloadMany,
    updatePositions
  } = useDocuments({
    url
  })

  const [open, setOpen] = useState(false)
  
  const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [activeResource, setActiveResource] = useState()

  const handleClick = (resource) => {
    setActiveResource(resource)
    setOpen(true)
  }  

	const handleAdd = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource({
			id: null,
		})
		setOpenModal(true)
	}

	const handleEdit = (item) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(item)
		setOpenModal(true)
	}

	const handleSubmit = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
        /*
        if(_resource?.id) {
          await addLinks(resp.id, [_resource?.id])
          reloadMany()
        }*/
				setResource({})
				setOpenModal(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (item) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		await destroy(resource?.id)
		setOpenDeleteModal(false)
		setOpenModal(false)
		setResource({})
		reloadMany()
	}

	const handleRemove = async (name) => {
		if (!currentUser?.id) return setAuthOpen(true)
		await removeAttachment(resource?.id, name)
	}

  const handleDrop = async (movedItem, overContainer, columns) => {

    let movedDocument = { ...movedItem }
		if (SYSTEM_FIELDS.includes(fieldName)) {
			movedDocument = {
        ...movedDocument,
        [fieldName]: overContainer
      }
		} else {
			movedDocument = {
				...movedDocument,
				data: {
					...movedDocument.data,
					[fieldName]: overContainer,
				}
			}
    }
    
    // Update the moved item
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
  }  

  useEffect(() => {
    if(url){
      findMany({
        sort_by: 'position',
        sort_direction: 'asc',
        page: 1,
        per_page: 1000
      })
    }
  }, [url])  

  if(!headers || !fieldName || resources?.length == 0) return null;
	return (
    <>
    <KanBan
      actions={actions}
      resources={resources}
      headers={headers}
      fieldName={fieldName}
      displayFields={displayFields}
      handleClick={ handleClick }
      handleDrop={handleDrop}    
      enableEdit={enableEdit}
      enableDelete={enableEdit}
      handleEdit={handleEdit}
      handleDelete={handleDeleteClick}      
      enableFavorites={enableFavorites}
      enableRatings={enableRatings}       
    />
    	<Drawer
				open={openModal}
				handleClose={() => setOpenModal(false)}
				title={resource?.id ? 'Edit' : 'Add'}
				actions={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<IconLoading loading={loading} />}
					>
						{resource?.id ? 'Update' : 'Save'}
					</Button>
				}
			>
				<Form
					loading={loading}
					errors={errors}
					fields={fields}
					resource={flattenDocument(resource)}
					handleChange={handleDataChange}
					handleRemove={handleRemove}
				/>
			</Drawer>
			<AlertModal
				open={openDeleteModal}
				handleClose={() => setOpenDeleteModal(false)}
				title="Are you sure you want to delete this item?"
				description="This action cannot be reversed."
				handleConfirm={handleDelete}
			/>
    <HeroModal
      open={ open }
      handleClose={ () => setOpen(false) }
      actions={ actions }
      resource={ activeResource }
      url={ url }
      displayFields={displayFields}
      enableOverlay={enableOverlay}
      enableEdit={enableEdit}
      enableFavorites={enableFavorites}
      enableRatings={enableRatings}
      handleEdit={() => handleEdit(activeResource)}
    />
  </>    
	)
}

export default CollectionKanBan
