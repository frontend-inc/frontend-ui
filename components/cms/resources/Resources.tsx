import React, { useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import {
	AlertModal,
	Placeholder,
} from '../..'
import {
	FormFieldType,
	FilterOptionType,
	SearchFilterOptionType,
} from '../../../types'
import { SortOptionType, SyntheticEventType } from '../../../types'
import ResourceForm from './ResourceForm'
import ResourceList from './ResourceList'
import ResourceListItem from './ResourceListItem'
import ResourceToolbar from './ResourceToolbar'

export type ResourcesProps = {
  toolbar?: React.FC<any>
  list?: React.FC<any>
  edit: React.FC<any>
  create: React.FC<any>
	url: string
	name: string
	component?: React.FC<any>
	layout?: 'list' | 'grid'
	dense?: boolean
	handleClick?: (resource: any) => void
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
	enableBorder?: boolean
	direction?: 'row' | 'column'
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
	itemProps?: any
}

const Resources: React.FC<ResourcesProps> = (props) => {
	const {
    toolbar: Toolbar = ResourceToolbar,
    list: List = ResourceList,
    component: Component = ResourceListItem,
    edit: EditForm = ResourceForm,
    create: CreateForm = ResourceForm,		
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
		enableBorder = false,
		direction = 'row',
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
	} = props

	const [openCreate, setOpenCreate] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)

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
    setOpenEdit(false)
    setOpenCreate(true)
	}

	const handleEdit = (resource) => {
		setResource(resource)
    setOpenCreate(false)
		setOpenEdit(true)    
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
				setOpenCreate(false)
        setOpenEdit(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (resource) => {
		setResource(resource)
    setOpenEdit(false)
    setOpenCreate(false)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		await destroy(resource?.id)
		setOpenDelete(false)		
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
      <Toolbar 
        direction={direction}
        enableSearch={enableSearch}
        enableFilters={enableFilters}
        enableSorting={enableSorting}
        enableCreate={enableCreate}
        handleSearch={handleSearch}
        handleKeywordChange={handleKeywordChange}
        handleFilter={handleFilter}
        handleClearFilters={handleClearFilters}
        handleSort={handleSort}
        handleSortDirection={handleSortDirection}
        handleAdd={handleAdd}
        keywords={keywords}
        activeFilters={activeFilters}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        query={query}
      />			
			<Box sx={{ ...(loading && sx.loading) }}>
        <List 
          resources={ resources }
          page={ page }
          numPages={ numPages }
          enableBorder={ enableBorder }
          enableEdit={ enableEdit }
          enableDelete={ enableDelete }
          handleClick={ handleClick }
          handleEdit={ handleEdit }
          handleDelete={ handleDeleteClick }
          handleDrop={ handleDrop }
          handleLoadMore={ loadMore }          
          component={ Component }           
        />			
        {!loading && resources?.length == 0 && (
          <Placeholder
            icon={emptyIcon}
            title={emptyTitle}
            description={emptyDescription}
          />
        )}			  
			</Box>
			<CreateForm 
        open={ openCreate }
        handleClose={() => setOpenCreate(false)}
        loading={ loading }
        errors={ errors }
        resource={ resource }
        handleChange={ handleChange }        
        handleRemove={ handleRemove }
        handleSubmit={ handleSubmit }
        fields={ fields }
      />
      <EditForm                 
        open={ openEdit }
        handleClose={() => setOpenEdit(false)}
        loading={ loading }
        errors={ errors }
        resource={ resource }
        handleChange={ handleChange }        
        handleRemove={ handleRemove }
        handleSubmit={ handleSubmit }
        fields={ fields }
      />
			<AlertModal
				open={openDelete}
				handleClose={() => setOpenDelete(false)}
				title="Are you sure you want to delete this item?"
				description="This action cannot be reversed."
				handleConfirm={handleDelete}
			/>
		</Stack>
	)
}

export default Resources

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
	form: {
		width: '100%',
	},
	fullWidth: {
		width: '100%',
	},
	item: {
		p: 2,
	},
	loading: {
		opacity: 0.5,
	},
}
