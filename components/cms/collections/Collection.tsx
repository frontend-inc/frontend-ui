import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useDocuments } from 'frontend-js'
import { Button, Grid, Box, Stack } from '@mui/material'
import {
	Form,
	Drawer,
	AlertModal,
	LoadMore,
	IconLoading,
} from '../../../components'
import { AppContext } from '../../../context'
import { ActionType, FilterOptionType, FormFieldType } from '../../../types'
import { useRouter } from 'next/router'
import { CollectionList, Placeholder } from '../..'
import CollectionSearchFilters from '../filters/SearchFilters'
import CollectionToolbar from './CollectionToolbar'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useAuth } from 'frontend-js'

export type CollectionProps = {
	variant: 'list' | 'grid'
	style: 'avatar' | 'card' | 'cover' | 'chip' | 'text' | 'image'
	layout?: 'drawer' | 'inline'
	editing?: boolean
	contentType: string
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	href: any
	perPage?: number
	query?: any
	actions: ActionType[]
	fields: FormFieldType[]
	filterAnchor?: 'left' | 'top'
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
  enableFavorites?: boolean
  filterUser?: boolean
  filterTeam?: boolean  
}

const Collection: React.FC<CollectionProps> = (props) => {
	const router = useRouter()
	const { clientUrl, setAuthOpen } = useContext(AppContext)
  const { currentUser } = useAuth()

	const {
		actions,
		variant = 'grid',
		style = 'card',
		contentType,
		fields,
		filterAnchor = 'left',
		filterOptions = [],
		sortOptions = [],
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		href,
		buttonText,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableCreate = false,
		enableDelete = false,
    enableFavorites = false,
    filterUser = false,
    filterTeam = false,
    query: defaultQuery = {},
	} = props

	const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)

	const {
		loading,
		delayedLoading,
		errors,
		resource,
		resources,
		setResource,
		update,
		create,
		destroy,
		query,
		findMany,
		reloadMany,
		removeAttachment,
		page,
		numPages,
		loadMore,
		handleDataChange,
		flattenDocument,
	} = useDocuments({
		collection: contentType,
	})

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findMany({
			...query,
			...defaultQuery,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

	const handleSortBy = (field: SortOptionType) => {
		findMany({
			...query,
			sort_by: field?.field,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
    queryFilters,
		activeFilters,
		setActiveFilters,
		handleAddFilter,
    mergeAllFilters,	
    buildUserFilters	
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: mergeAllFilters([
        defaultQuery?.filters,
        currentUserFilter,        
      ]),
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
	}

	const handleClick = (item) => {
		if (clientUrl && href && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

	const handleAdd = () => {
    if(!currentUser?.id) return setAuthOpen(true);
		setResource({
      id: null
    })
		setOpenModal(true)
	}

	const handleEdit = (item) => {
    if(!currentUser?.id) return setAuthOpen(true);
		setResource(item)
		setOpenModal(true)
	}

	const handleSubmit = async () => {
    if(!currentUser?.id) return setAuthOpen(true);
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
				setResource({})
				setOpenModal(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (item) => {
    if(!currentUser?.id) return setAuthOpen(true);
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
    if(!currentUser?.id) return setAuthOpen(true);
		await destroy(resource?.id)
		setOpenDeleteModal(false)
		setOpenModal(false)
		setResource({})
		reloadMany()
	}

	const handleRemove = async (name) => {
    if(!currentUser?.id) return setAuthOpen(true);    
		await removeAttachment(resource?.id, name)
	}  

  const currentUserFilter = buildUserFilters(
    currentUser, 
    filterUser, 
    filterTeam
  )

	useEffect(() => {
		if (contentType && currentUser) {                   
			findMany({
				...defaultQuery,
        filters: mergeAllFilters([
          defaultQuery?.filters,
          currentUserFilter,
          queryFilters
        ]),       
				per_page: perPage,
			})
		}
	}, [
    contentType, 
    perPage, 
    filterUser,
    filterTeam,
    currentUser,
    queryFilters,
    defaultQuery,
  ])

	return (
		<Stack spacing={1} sx={sx.root}>      
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
			<Grid container spacing={0}>
				{enableFilters && filterAnchor == 'left' && (
					<Grid item xs={12} sm={4} lg={3}>
						<Box sx={sx.filtersContainer}>
							<CollectionSearchFilters
								filters={activeFilters}
								filterOptions={filterOptions}
								handleFilter={handleFilter}
							/>
						</Box>
					</Grid>
				)}
				<Grid
					item
					xs={12}
					sm={enableFilters && filterAnchor == 'left' ? 8 : 12}
					lg={enableFilters && filterAnchor == 'left' ? 9 : 12}
				>
					<Box sx={{ ...(delayedLoading && sx.loading) }}>					
						<CollectionList
							actions={actions}
							variant={variant}
							style={style}
							resources={resources}
							handleClick={handleClick}
							buttonText={buttonText}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
              enableFavorites={enableFavorites}
							handleEdit={handleEdit}
							handleDelete={handleDeleteClick}
						/>
					</Box>
					{!loading && resources.length == 0 && (
						<Placeholder
							icon="Search"
							title="No results found"
							description="Try adjusting your search or filters"
						/>
					)}
				</Grid>
			</Grid>
			{enableLoadMore && (
				<LoadMore
					page={page}
					numPages={numPages}
					loadMore={loadMore}
					enableInfiniteLoad={enableInfiniteLoad}
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
		</Stack>
	)
}

export default Collection

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	filtersContainer: {
		mr: {
			sm: 2,
			xs: 0,
		},
		mb: {
			sm: 0,
			xs: 2,
		},
	},
	sortFilterActions: {
		justifyContent: 'flex-end',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
}
