import React, { useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import { SortableListItems, AlertModal, Placeholder } from '../..'
import {
	FormFieldType,
	FilterOptionType,
	SearchFilterOptionType,
	TableHeaderType,
	DisplayFieldType,
} from '../../../types'
import { SortOptionType, SyntheticEventType } from '../../../types'
import ResourceForm from './ResourceForm'
import ResourceShow from './ResourceShow'
import ResourceItem from './ResourceItem'
import ResourceListItems from './ResourceListItems'
import ResourceToolbar from './ResourceToolbar'
import ResourceToolbarModal from './toolbar/ResourceToolbarModal'
import { MultiselectButtonType } from '../../../types'

export type ResourceListProps = {
  sortable?: boolean
  selectable?: boolean
	toolbar?: React.FC<any>
	list?: React.FC<any>
	edit?: React.FC<any>
	create?: React.FC<any>
	show?: React.FC<any>
  pagination?: React.FC<any>
  toolbarModal?: React.FC<any>
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
	headers?: TableHeaderType[]
	fields?: FormFieldType[]
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	displayFields?: DisplayFieldType[]
	enableSearch?: boolean
	buttonText?: string
	enableShow?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableBorder?: boolean
	direction?: 'row' | 'column'
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
	itemProps?: any
  disableInfiniteLoad?: boolean
  buttons?: MultiselectButtonType[]
	slots?: {
		list?: any
		edit?: any
		create?: any
		show?: any
		toolbar?: any
    toolbarModal?: any
    pagination?: any
	}
}

const ResourceList: React.FC<ResourceListProps> = (props) => {
	const SLOT_PROPS = {
		list: {},
		edit: {},
		create: {},
		show: {},
		toolbar: {},
    toolbarModal: {},
    pagination: {},
	}

	const {
    sortable = false,
    selectable = false,
		toolbar: Toolbar = ResourceToolbar,
    toolbarModal: ToolbarModal = ResourceToolbarModal,
		list: List = ResourceListItems,
		component: Component = ResourceItem,
		edit: EditForm = ResourceForm,
		create: CreateForm = ResourceForm,
		show: ShowModal = ResourceShow,
    disableInfiniteLoad = false,
		url,
		name,
		headers = [],
		fields = [],
		filterOptions = [],
		sortOptions = [],
		displayFields = [],
    buttons = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableEdit,
		enableDelete,
		enableCreate,
		enableShow,
		handleClick,
		slots = SLOT_PROPS,
		enableBorder = false,
		direction = 'row',
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
	} = props

	const [openShow, setOpenShow] = useState(false)
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
		findOne,
		findMany,
		reloadMany,
		removeAttachment,
		page,
		numPages,
    totalCount,
		loadMore,
    paginate,

    selected,
		selectedIds,		
		handleSelect,
		handleClear,
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

  const handlePaginate = async (page) => {
    if(!disableInfiniteLoad){
      await loadMore()
    }else{
      await paginate(page)
    }
  }

	const handleSort = (field: SortOptionType) => {
		let sortBy = field?.name
		let sortDir = query?.sort_direction
		if (sortBy == query?.sort_by) {
			sortDir = query?.sort_direction == 'asc' ? 'desc' : 'asc'
		}
		findMany({
			...query,
			sort_by: sortBy,
			sort_direction: sortDir,
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
		setOpenShow(false)
		setOpenEdit(false)
		setOpenCreate(true)
	}

	const handleEdit = (resource) => {
		setResource(resource)
		setOpenShow(false)
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
				setOpenShow(false)
				setOpenCreate(false)
				setOpenEdit(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleShowClick = async (resource) => {
		if (enableShow) {
			let resp = await findOne(resource?.id)
			setResource(resp)
			setOpenShow(true)
			setOpenEdit(false)
			setOpenCreate(false)
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
		setOpenShow(false)
		setOpenEdit(false)
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

  const handleSuccess = async () => {
    await reloadMany()
    handleClear()
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
        selected={ selected }        
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
				{...slots.toolbar}
			/>
      <ToolbarModal 
        selected={ selected }
        selectedIds={ selectedIds }
        open={ selected?.length > 0 }
        handleClose={ handleClear }
        buttons={ buttons }
        onSuccess={ handleSuccess }
        { ...slots.toolbarModal }
      />
			<Box
				sx={{
					...(loading && sx.loading),
				}}
			>
        { !sortable ? (
				<List
					query={query}
					headers={headers}
					page={page}
					numPages={numPages}
          totalCount={totalCount}
					handlePaginate={handlePaginate}
          handleSort={handleSort}
          resources={ resources }
					renderItem={(resource, props) => (
						<Component
							key={resource?.id}
              selectable={ selectable }
							resource={resource}   
              selected={      
                //@ts-ignore           
                selectedIds?.includes(resource?.id) 
              }           
              enableSelect={ selectable }
							enableBorder={enableBorder}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							handleClick={
								handleClick
									? () => handleClick(resource)
									: () => handleShowClick(resource)
							}
							handleEdit={() => handleEdit(resource)}
							handleDelete={() => handleDeleteClick(resource)}
              handleSelect={() => handleSelect(resource) }
              { ...props }
							{...slots.list}              
						/>
					)}
				/>
        ):(
          <SortableListItems
            droppableId="sortable"
            resources={resources}
            handleDrop={handleDrop}
            page={page}
            numPages={numPages}
            totalCount={totalCount}
            handlePaginate={handlePaginate}
            renderItem={(resource, index) => (
              <Component
                key={index}
                sortable
                selectable={ selectable }
                selected={ 
                  // @ts-ignore
                  selectedIds?.includes(resource?.id) 
                }
                resource={resource}                
                enableBorder={enableBorder}
                enableEdit={enableEdit}
                enableDelete={enableDelete}                
                handleClick={
                  handleClick
                    ? () => handleClick(resource)
                    : () => handleShowClick(resource)
                }
                handleEdit={() => handleEdit(resource)}
                handleDelete={() => handleDeleteClick(resource)}
                handleSelect={() => handleSelect(resource) }
                  {...slots.list}
              />
            )}
          />
        )}            
				{!loading && resources?.length == 0 && (
					<Placeholder
						icon={emptyIcon}
						title={emptyTitle}
						description={emptyDescription}
					/>
				)}
			</Box>
			<CreateForm
				open={openCreate}
				handleClose={() => setOpenCreate(false)}
				loading={loading}
				errors={errors}
				resource={resource}
				handleChange={handleChange}
				handleRemove={handleRemove}
				handleSubmit={handleSubmit}
				fields={fields}
				{...slots.create}
			/>
			<EditForm
				open={openEdit}
				handleClose={() => setOpenEdit(false)}
				loading={loading}
				errors={errors}
				resource={resource}
				handleChange={handleChange}
				handleRemove={handleRemove}
				handleSubmit={handleSubmit}
				fields={fields}
				{...slots.edit}
			/>
			<ShowModal
				loading={loading}
				open={openShow}
				handleClose={() => setOpenShow(false)}
				fields={displayFields}
				resource={resource}
				enableEdit={enableEdit}
				enableDelete={enableDelete}
				handleEdit={() => handleEdit(resource)}
				handleDelete={() => handleDeleteClick(resource)}
				{...slots.show}
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
