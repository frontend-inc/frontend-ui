import React, { useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Button, Box, Stack } from '@mui/material'
import {
  SortableList,
	FormFields,
	Drawer,
	AlertModal,
	Icon,
	FilterButton,
	SortButton,
	SearchInput,
	LoadMore,
	IconLoading,
	Loader,
} from '../../../components'
import { FormFieldType, FilterOptionType } from '../../../types'
import { Placeholder } from '../..'
import { SearchFilterOptionType } from '../../../types'
import { SortOptionType, SyntheticEventType } from '../../../types'
import ResourceListItem from './ResourceListItem'

export type ResourceListProps = {
	url: string
	name: string
	component?: React.FC<any>
	layout?: 'list' | 'grid'
	dense?: boolean
	handleClick?: (item: any) => void
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	perPage?: number
	query?: any
	fields?: FormFieldType[]
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	buttonText?: string
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
  sortable?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string	
  itemProps?: any
}

const ResourceList: React.FC<ResourceListProps> = (props) => {
	const {
		layout = 'list',
		dense,
		component: Component = ResourceListItem,
		url,
		name,
		fields = [],
		filterOptions = [],
		sortOptions = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableEdit,
		enableDelete,
		enableCreate,
		handleClick,
    sortable=false,
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
		itemProps={}
	} = props

	const [openModal, setOpenModal] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)

	const {
		delayedLoading: loading,
		errors,
		resource,
		resources,
		setResource,
		update,
		create,
		destroy,
    updatePositions,
		handleChange,
		query,
		findMany,
		reloadMany,
		removeAttachment,
		page,
		numPages,
		loadMore,
	} = useResource({
		name,
		url,
	})

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: SyntheticEventType) => {
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

	const handleSort = (field: any) => {
		findMany({
			...query,
			...defaultQuery,
			sort_by: field.field,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
		activeFilters,
		setActiveFilters,
		handleAddFilter,
		buildQueryFilters,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: {
				...defaultQuery?.filters,
			},
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

	const handleAdd = () => {
		setResource({})
		setOpenModal(true)
	}

	const handleEdit = (item) => {
		setResource(item)
		setOpenModal(true)
	}

	const handleSubmit = async () => {
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
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
		await destroy(resource?.id)
		setOpenDeleteModal(false)
		setOpenModal(false)
		setResource({})
		reloadMany()
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

  const handleDrop = async (sorted) => {
    await updatePositions(sorted)
  }

	useEffect(() => {
		if (activeFilters) {
			findMany({
				...query,
				filters: buildQueryFilters(activeFilters),
				...defaultQuery,
			})
		}
	}, [activeFilters?.length])

	useEffect(() => {
		if (url && name && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, name, perPage])
      
  const enableFilters = filterOptions?.length > 0
  const enableSorting = sortOptions?.length > 0

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				sx={sx.actions}
				spacing={1}
			>
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
					{enableSearch && (
						<SearchInput
							value={keywords}
							handleChange={handleKeywordChange}
							handleSearch={handleSearch}
						/>
					)}
					{enableFilters && (
						<Box>
							<FilterButton
								filters={activeFilters}
								handleFilter={handleFilter}
								handleClear={handleClearFilters}
								filterOptions={filterOptions}
							/>
						</Box>
					)}
					{enableSorting && (
            <Box>
              <SortButton
                sortBy={query?.sort_by || 'id'}
                sortDirection={query?.sort_direction || 'desc'}
                sortOptions={sortOptions}
                handleSortBy={handleSort}
                handleSortDirection={handleSortDirection}
              />
            </Box>
					)}
				</Stack>
				{enableCreate && (
					<Box>
						<Button
							sx={sx.button}
							color="secondary"
							variant="contained"
							onClick={handleAdd}
							startIcon={
								<Icon 
                  name="Plus" 
                  color="secondary.contrastText" 
                  size={20} 
                />
							}
						>
							Add
						</Button>
					</Box>
				)}
			</Stack>
			<Box sx={{ ...(loading && sx.loading) }}>
				<Stack spacing={2} sx={sx.fullWidth}>
					<Box
						sx={{
							...sx.layout,
							...(layout == 'grid' ? sx.grid : sx.list),
							...(dense && sx.listDense),
						}}
					>
            { sortable && !loading && resources?.length > 0 && (
              <SortableList 
                droppableId="resource-list"
                items={ resources }
                handleDrop={handleDrop}
                renderItem={(resource, index) => (
                  <Component
                    key={index}
                    sortable
                    layout={layout}
                    resource={resource}
                    handleClick={
                      handleClick ? () => handleClick(resource) : undefined
                    }
                    handleEdit={
                      enableEdit ? () => handleEdit(resource) : undefined
                    }
                    handleDelete={
                      enableDelete ? () => handleDeleteClick(resource) : undefined
                    }
                    { ...itemProps }
                  />
                )}
              />
            )}
						  
              { !sortable && !loading && resources?.map((resource, index) => (
                <Component
                  key={index}
                  layout={layout}
                  resource={resource}
                  handleClick={
                    handleClick ? () => handleClick(resource) : undefined
                  }
                  handleEdit={
                    enableEdit ? () => handleEdit(resource) : undefined
                  }
                  handleDelete={
                    enableDelete ? () => handleDeleteClick(resource) : undefined
                  }
                  { ...itemProps }
                />
              ))}
					</Box>
				</Stack>
			</Box>
			{!loading && resources?.length == 0 && (
				<Placeholder
					icon={emptyIcon}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
			<Loader loading={loading} />
			<LoadMore 
        page={page} 
        numPages={numPages} 
        loadMore={loadMore} 
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
				<FormFields
          errors={errors}
					loading={loading}
					fields={fields}
					resource={resource}
					handleChange={handleChange}
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

export default ResourceList

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	layout: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	listDense: {
		gap: '8px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	form: {
		width: '100%',
	},
	fullWidth: {
		width: '100%',
	},
	item: {
		p: 2,
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
	actions: {
		width: '100%',
		justifyContent: 'space-between',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
}
