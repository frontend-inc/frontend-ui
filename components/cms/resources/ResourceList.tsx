import React, { useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Button, Box, Stack } from '@mui/material'
import {
	Form,
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
import { SortOptionType } from '../../../types'
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
	enableFilters?: boolean
	enableSorting?: boolean
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
	componentProps?: any
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
		enableFilters = false,
		enableSorting = false,
		enableLoadMore = true,
		enableEdit,
		enableDelete,
		enableCreate,
		handleClick,
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
		componentProps = {},
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
						<SortButton
							sortBy={query?.sort_by || 'id'}
							sortDirection={query?.sort_direction || 'desc'}
							sortOptions={sortOptions}
							handleSortBy={handleSort}
							handleSortDirection={handleSortDirection}
						/>
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
								<Icon name="Plus" color="secondary.contrastText" size={20} />
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
						{!loading &&
							resources?.map((resource, index) => (
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
									{...componentProps}
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
			{enableLoadMore && (
				<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
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
