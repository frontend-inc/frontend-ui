import React, { useContext, useState, useEffect } from 'react'
import { useSearch } from '../../../hooks'
import { useDocuments } from 'frontend-js'
import { Button, Stack } from '@mui/material'
import {
	Form,
	Drawer,
	AlertModal,
	LoadMore,
	IconLoading,
	GoogleMap,
} from '../..'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import {
  HeroModal,
	CollectionCards,
  CollectionLayout,
	Placeholder,
	CollectionToolbar,
	SearchFilters,
} from '../../../components'
import { useAuth } from 'frontend-js'
import { CollectionListProps } from './CollectionList'

export type CollectContainerProps = CollectionListProps & {	  
  resource?: any
  searchUrl: string
  enableUsers?: boolean
  component?: React.FC<any>
  rest?: any
}

const CollectionContainer: React.FC<CollectContainerProps> = (props) => {
	const router = useRouter()
	const { clientUrl, setAuthOpen } = useContext(AppContext)
	const { currentUser } = useAuth()

  const [open, setOpen] = useState(false)
  const [activeResource, setActiveResource] = useState({})

	const {
    component: RenderList = CollectionCards,
    resource: _resource,
    user,
		actions = [],
		variant = 'grid',
		style = 'card',
		href,
		url,
    searchUrl,
		fields = [],
		displayFields = [],
		filterAnchor = 'left',
		filterOptions = [],
		sortOptions = [],
		enableGoogleMaps = false,
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		buttonText,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableCreate = false,
		enableDelete = false,
		enableFavorites = false,
    enableRatings = false,
    enableUsers = false,
		filterUser = false,
		filterTeam = false,
		query: defaultQuery = {},
		emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
    ...rest
	} = props

	const {
		loading,
		delayedLoading,
		errors,
		resource,
		setResource,
		update,
		create,
		destroy,
    addLinks,
		removeAttachment,
		handleDataChange,
		flattenDocument,    
	} = useDocuments({
		url,
	})

  const {
    delayedLoading: searchLoading,
    resources,
    query,
    findMany,
    reloadMany,
    page,
    numPages,
    loadMore,
    keywords,
    handleKeywordChange,
    handleSearch,
    handleSortBy,
    handleSortDirection,
    activeFilters,
    handleFilter,
    handleClearFilters, 
  } = useSearch({
    url: searchUrl,
    user,
    perPage,
    filterUser,
    filterTeam,
    query: defaultQuery,  
  })

	const handleNavigate = (resource) => {
    if(href){
      if (clientUrl && href && resource?.handle) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        router.push(`${clientUrl}${href}/${resource?.handle}`)
      }
    }else{
      setActiveResource(resource)
      setOpen(true)    
    }
	}

	const { handleClick = handleNavigate } = props

	const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)

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
        if(_resource?.id) {
          await addLinks(resp.id, [_resource?.id])
          reloadMany()
        }
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

	return (
		<>
      <CollectionLayout 
        loading={loading || searchLoading}
        header={
          <CollectionToolbar
            query={query}
            activeFilters={activeFilters}
            enableFilters={enableFilters && filterAnchor == 'top'}
            enableSorting={enableSorting}
            enableCreate={enableCreate}
            enableSearch={enableSearch}
            filterOptions={filterOptions}
            sortOptions={sortOptions}
            handleFilter={handleFilter}
            handleClearFilters={handleClearFilters}
            handleSortBy={handleSortBy}
            handleSortDirection={handleSortDirection}
            handleAdd={handleAdd}
            keywords={keywords}
            handleKeywordChange={handleKeywordChange}
            handleSearch={handleSearch}
          />
        }
        expandLeft={enableFilters && filterAnchor == 'left'}
        expandRight={enableGoogleMaps}
        leftPanel={
          <SearchFilters
            filters={activeFilters}
            filterOptions={filterOptions}
            handleFilter={handleFilter}
          />
        }
        rightPanel={
          <GoogleMap
            zoom={15}
            height={380}
            resources={resources}								
            enableBorder={enableBorder}
            displayFields={displayFields}
          />
        }
      >
        <Stack direction="column" spacing={2}>
          <RenderList
            actions={actions}
            variant={variant}
            style={style}
            resources={resources}
            displayFields={displayFields}
            handleClick={handleClick}
            buttonText={buttonText}
            enableBorder={enableBorder}
            enableGradient={enableGradient}          
            enableOverlay={enableOverlay}
            enableEdit={enableEdit}
            enableDelete={enableDelete}
            enableUsers={enableUsers}
            enableFavorites={enableFavorites}
            enableRatings={enableRatings}
            handleEdit={handleEdit}
            handleDelete={handleDeleteClick}
            { ...rest }
          />
          {enableLoadMore && (
            <LoadMore
              page={page}
              numPages={numPages}
              loadMore={loadMore}
              enableInfiniteLoad={enableInfiniteLoad}
            />
          )}    
        </Stack>    
			</CollectionLayout>			
      {!loading && resources.length == 0 && (
        <Placeholder
          enableBorder
          icon={emptyIcon}
          title={emptyTitle}
          description={emptyDescription}
        />
      )}
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

export default CollectionContainer

