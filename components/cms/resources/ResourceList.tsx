'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { exportJsonToCSV } from '../../../helpers'
import { SortableListItems, AlertModal, Empty } from '../..'
import {
	FormFieldType,
	SearchFilterOptionType,
	TableHeaderType,
	MetafieldType,
} from '../../../types'
import { SortOptionType, SyntheticEventType } from '../../../types'
import ResourceForm from './ResourceForm'
import ResourceShow from './ResourceShow'
import ResourceItem from './ResourceItem'
import ResourceListItems from './ResourceListItems'
import ResourceHeader from './ResourceHeader'
import ResourceToolbar from './ResourceToolbar'
import { ToolbarButtonType } from '../../../types'
import { cn } from '@nextui-org/react'

export type ResourceListProps = {
	grid?: boolean
	sortable?: boolean
	selectable?: boolean
	header?: React.FC<any>
	list?: React.FC<any>
	edit?: React.FC<any>
	create?: React.FC<any>
	show?: React.FC<any>
	pagination?: React.FC<any>
	toolbar?: React.FC<any>
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
	displayFields?: MetafieldType[]
	exportHeaders?: string[]
	enableSearch?: boolean
	buttonText?: string
	enablePublish?: boolean
	enableShow?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableExport?: boolean
	direction?: 'row' | 'column'
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
	itemProps?: any
	disableInfiniteLoad?: boolean
	buttons?: ToolbarButtonType[]
	defaultValue?: any
	slots?: {
		list?: any
		item?: any
		edit?: any
		create?: any
		show?: any
		header?: any
		toolbar?: any
		pagination?: any
	}
}

const ResourceList: React.FC<ResourceListProps> = (props) => {
	const SLOT_PROPS = {
		list: {},
		item: {},
		edit: {},
		create: {},
		show: {},
		header: {},
		toolbar: {},
		pagination: {},
	}

	const {
		grid = false,
		sortable = false,
		selectable = false,
		header: Header = ResourceHeader,
		toolbar: Toolbar = ResourceToolbar,
		list: List = ResourceListItems,
		component: Component = ResourceItem,
		edit: EditForm = ResourceForm,
		create: CreateForm = ResourceForm,
		show: ShowModal = ResourceShow,
		disableInfiniteLoad = false,
		url,
		name,
		headers = [],
		exportHeaders = ['id'],
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
		enablePublish,
		enableExport,
		handleClick,
		slots = SLOT_PROPS,
		direction = 'row',
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
		defaultValue = {},
	} = props

	const [openShow, setOpenShow] = useState(false)
	const [openCreate, setOpenCreate] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [openDelete, setOpenDelete] = useState(false)
	const [openExport, setOpenExport] = useState(false)

	const {
		loading: isPublishLoading,
		update: updatePublish,
		create: createPublish,
	} = useResource({
		name,
		url,
	})

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
		publish,
		unpublish,
		deleteMany,
		addAttachment,
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
		if (!disableInfiniteLoad) {
			await loadMore()
		} else {
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

	const handleSortBy = (sortBy: string) => {
		findMany({
			...query,
			sort_by: sortBy,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const [activeFilters, setActiveFilters] = useState<any[]>([])

	const handleFilter = (name: string, value: string | number | boolean) => {
		let currentFilters = [] as any
		if (activeFilters?.find((f) => f.name === name && f.value === value)) {
			currentFilters = []
		} else {
			currentFilters = [{ name, operator: 'eq', value }]
		}
		setActiveFilters(currentFilters)
		findMany({
			...query,
			...defaultQuery,
			filters: buildQueryFilters(currentFilters),
		})
	}

	const buildQueryFilters = (filters) => {
		return filters.map((f) => ({
			[f.name]: { [f.operator]: f.value },
		}))
	}

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: [...defaultQuery?.filters],
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleAdd = () => {
		setResource({})
		setOpenShow(false)
		setOpenEdit(false)
		setOpenCreate(true)
	}

	const handleEdit = async (resource) => {
		let resp = await findOne(resource?.id)
		setResource(resp)
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
				resp = await create({
					...defaultValue,
					...resource,
				})
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

	const handlePublish = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await updatePublish({
					...resource,
					published: true,
				})
			} else {
				resp = await createPublish({
					...defaultValue,
					...resource,
					published: true,
				})
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

	const handlePublishMany = async () => {
		try {
			let resp = await publish(selectedIds)
			if (resp?.ids) {
				reloadMany()
				handleClear()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleUnpublishMany = async () => {
		try {
			let resp = await unpublish(selectedIds)
			if (resp?.ids) {
				reloadMany()
				handleClear()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteMany = async () => {
		try {
			await deleteMany(selectedIds)
			reloadMany()
			handleClear()
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleShowClick = async (resource) => {
		if (handleClick) {
			handleClick(resource)
		} else if (enableShow) {
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
		await reloadMany()
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleRemoveAttachment = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleAddAttachment = async (name, attachmentId) => {
		await addAttachment(resource?.id, name, attachmentId)
	}

	const handleDrop = async (sorted) => {
		await updatePositions(sorted)
	}

	const handleSuccess = async () => {
		await reloadMany()
		handleClear()
	}

	const handleExport = async () => {
		let resources = await findMany(query)
		//@ts-ignore
		exportJsonToCSV(exportHeaders, resources)
	}

	const handleExportClick = async () => {
		setOpenExport(true)
	}

	const mounted = useRef(false)

	useEffect(() => {
		if (url && name && !mounted.current) {
			mounted.current = true
			findMany({
				...defaultQuery,
			})
		}
	}, [url, name])

	const enableFilters = filterOptions?.length > 0
	const enableSorting = sortOptions?.length > 0

	return (
		<>
			<Toolbar
				enableDelete={enableDelete}
				enablePublish={enablePublish}
				selected={selected}
				selectedIds={selectedIds}
				open={selectedIds?.length > 0}
				handleClose={handleClear}
				buttons={buttons}
				onSuccess={handleSuccess}
				handlePublish={handlePublishMany}
				handleUnpublish={handleUnpublishMany}
				handleDelete={handleDeleteMany}
				handleReload={reloadMany}
				{...slots.toolbar}
			/>
			<div className="flex flex-col space-y-3">
				<Header
					selected={selected}
					direction={direction}
					enableSearch={enableSearch}
					enableFilters={enableFilters}
					enableSorting={enableSorting}
					enableCreate={enableCreate}
					enableExport={enableExport}
					handleExport={handleExportClick}
					handleSearch={handleSearch}
					handleKeywordChange={handleKeywordChange}
					handleFilter={handleFilter}
					handleClearFilters={handleClearFilters}
					handleSortBy={handleSortBy}
					handleSortDirection={handleSortDirection}
					handleAdd={handleAdd}
					keywords={keywords}
					handleReload={reloadMany}
					activeFilters={activeFilters}
					filterOptions={filterOptions}
					sortOptions={sortOptions}
					query={query}
					{...slots.header}
				/>
				<div className={cn(loading && 'opacity-50')}>
					{!sortable ? (
						<List
							grid={grid}
							query={query}
							headers={headers}
							page={page}
							numPages={numPages}
							totalCount={totalCount}
							handlePaginate={handlePaginate}
							handleSort={handleSort}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							enableShow={enableShow}
							handleEdit={handleEdit}
							handleShow={handleShowClick}
							handleDelete={handleDeleteClick}
							handleSelect={handleSelect}
							resources={resources}
							renderItem={(resource, props) => (
								<Component
									key={resource?.id}
									selectable={selectable}
									resource={resource}
									selected={
										//@ts-ignore
										selectedIds?.includes(resource?.id)
									}
									handleClick={
										handleClick
											? () => handleClick(resource)
											: () => handleShowClick(resource)
									}
									handleEdit={() => handleEdit(resource)}
									handleSelect={() => handleSelect(resource)}
									handleDelete={() => handleDeleteClick(resource)}
									handleReload={reloadMany}
									{...slots.item}
								/>
							)}
							{...slots.list}
						/>
					) : (
						<SortableListItems
							droppableId="sortable"
							resources={resources}
							handleDrop={handleDrop}
							page={page}
							numPages={numPages}
							totalCount={totalCount}
							handlePaginate={handlePaginate}
							handleReload={reloadMany}
							renderItem={(resource, index) => (
								<Component
									key={index}
									sortable
									selectable={selectable}
									selected={
										// @ts-ignore
										selectedIds?.includes(resource?.id)
									}
									resource={resource}
									enableEdit={enableEdit}
									enableDelete={enableDelete}
									handleClick={
										handleClick
											? () => handleClick(resource)
											: () => handleShowClick(resource)
									}
									handleEdit={() => handleEdit(resource)}
									handleDelete={() => handleDeleteClick(resource)}
									handleSelect={() => handleSelect(resource)}
									handleReload={reloadMany}
									{...slots.item}
								/>
							)}
							{...slots.list}
						/>
					)}
					{!loading && resources?.length == 0 && (
						<Empty
							icon={emptyIcon}
							title={emptyTitle}
							description={emptyDescription}
						/>
					)}
				</div>
				<CreateForm
					open={openCreate}
					handleClose={() => setOpenCreate(false)}
					loading={loading}
					isPublishLoading={isPublishLoading}
					errors={errors}
					resource={resource}
					setResource={setResource}
					handleChange={handleChange}
					handleRemove={handleRemove}
					handleAddAttachment={handleAddAttachment}
					handleRemoveAttachment={handleRemoveAttachment}
					handleSubmit={handleSubmit}
					handlePublish={handlePublish}
					handleReload={reloadMany}
					fields={fields}
					{...slots.create}
				/>
				<EditForm
					open={openEdit}
					handleClose={() => setOpenEdit(false)}
					loading={loading}
					isPublishLoading={isPublishLoading}
					enablePublish={enablePublish}
					errors={errors}
					resource={resource}
					setResource={setResource}
					handleChange={handleChange}
					handleRemove={handleRemove}
					handleAddAttachment={handleAddAttachment}
					handleRemoveAttachment={handleRemoveAttachment}
					handleSubmit={handleSubmit}
					handlePublish={handlePublish}
					handleReload={reloadMany}
					handleReloadOne={findOne}
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
					handleReload={reloadMany}
					{...slots.show}
				/>
				<AlertModal
					open={openDelete}
					handleClose={() => setOpenDelete(false)}
					title="Are you sure you want to delete this item?"
					description="This action cannot be reversed."
					handleConfirm={handleDelete}
				/>
				<AlertModal
					open={openExport}
					handleClose={() => setOpenExport(false)}
					title="Are you sure you want to export?"
					description="There is currently a limit of 10k rows of data."
					handleConfirm={handleExport}
				/>
			</div>
		</>
	)
}

export default ResourceList
