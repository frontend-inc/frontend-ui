import React, { useContext, useEffect, useState } from 'react'
import { useDocuments } from 'frontend-js'
import { CollectionListProps } from './CollectionList'
import { CollectionToolbar, KanBan } from '../..'
import { useAuth } from 'frontend-js'
import { useSearch } from '../../../hooks'
import { ActionType } from '../../../types'
import { 
  Drawer, 
  Form,
  IconLoading,
  AlertModal,
  HeroModal 
} from '../..'
import { Box, Button } from '@mui/material'
import { AppContext } from '../../../context'
import { 
  changeDocumentValue, 
  flattenDocument 
} from 'frontend-js'

export type CollectionKanBanProps = CollectionListProps & {	
	headers: {
    label: string 
    value: string 
  }[]
  resource: any
  actions: ActionType[]
  searchUrl: string    
}

const CollectionKanBan: React.FC<CollectionKanBanProps> = (props) => {
	
  const { setAuthOpen } = useContext(AppContext)
  const { currentUser } = useAuth()

	const {
		url,
    searchUrl,
    headers,
    fields=[],
    resource: _resource,
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
    enableSearch = false,
    filterOptions=[],
    sortOptions=[],
    filterUser = false,
		filterTeam = false,
    enableGradient,
    enableOverlay,
    emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
    ...rest
	} = props  

  const fieldName = 'status'; //Hard code the field as status

  const { 
    loading,
    delayedLoading,
    errors,
    resource,
    setResource,
    create,
    update,
    destroy,
    handleDataChange,
    removeAttachment,
    addLinks,
    updatePositions
  } = useDocuments({
    url
  })

  const {
    resources,
    query,
    keywords,
    handleKeywordChange,
    handleSearch,
    handleSortBy,
    handleSortDirection,
    reloadMany,
    activeFilters,
    handleFilter,
    handleClearFilters, 
  } = useSearch({
    url: searchUrl,    
    user: currentUser,
    perPage: 1000,
    filterUser,
    filterTeam,
    query: {},  
  })

  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [activeResource, setActiveResource] = useState()

  const handleClick = (resource) => {
    setActiveResource(resource)
    setOpen(true)
  }  

  const handleComment = (resource) => {
    setActiveResource(resource)
    setOpen(true)
  }  

	const handleAdd = (columnName) => {
		if (!currentUser?.id) return setAuthOpen(true);
		let newResource = changeDocumentValue({}, fieldName, columnName)
    setResource(newResource)
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
        if(_resource?.id) {
          await addLinks(resp.id, [_resource?.id])
          reloadMany()
        }
				setResource({})
				setOpenModal(false)
				await reloadMany()        
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (item) => {    
		if (!currentUser?.id) return setAuthOpen(true)
    setActiveResource(item)
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
    if(!resource?.id) return;
		await destroy(resource.id)
		setOpenDeleteModal(false)
		setOpenModal(false)		
		await reloadMany() 
    setResource({})   
	}

	const handleRemove = async (name) => {
		if (!currentUser?.id) return setAuthOpen(true)
		await removeAttachment(resource?.id, name)
	}

  const handleDrop = async (movedItem, value, columns) => {    
    setActiveResource(null)
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

  const enableFilters = enableSearch && filterOptions?.length > 0

  if(!headers || !fieldName) return null;
	return (
    <>
      <Box px={0.5}>
        <CollectionToolbar
          query={query}
          activeFilters={activeFilters}
          enableFilters={enableFilters}
          enableSearch={enableSearch}
          filterOptions={filterOptions}
          sortOptions={sortOptions}
          handleFilter={handleFilter}
          handleClearFilters={handleClearFilters}
          handleSortBy={handleSortBy}
          handleSortDirection={handleSortDirection}
          keywords={keywords}
          handleKeywordChange={handleKeywordChange}
          handleSearch={handleSearch}
        />
      </Box>
      <KanBan
        loading={delayedLoading}
        actions={actions}
        resources={resources}
        activeResource={activeResource}
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
        enableComments={enableComments}
        enableFavorites={enableFavorites}
        enableRatings={enableRatings}
        handleEdit={() => handleEdit(activeResource)}
      />
  </>    
	)
}

export default CollectionKanBan
