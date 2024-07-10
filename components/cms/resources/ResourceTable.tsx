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
	SearchInput,
	IconLoading,
} from '../../../components'
import {
	TableHeaderType,
	FormFieldType,
	FilterOptionType,
  SyntheticEventType,
} from '../../../types'
import SearchFilters from '../filters/SearchFilters'
import { TableList } from '../../../components'
import { ResourceListProps } from './ResourceList'

export type ResourceTableProps = ResourceListProps & {
	headers: TableHeaderType[]
}

const ResourceTable: React.FC<ResourceTableProps> = (props) => {
	const {
		url,
		name,
		fields,
		headers,
		filterOptions = [],
		query: defaultQuery = {},
		perPage = 10,
		enableSearch = false,
		enableFilters = false,		
		enableEdit = false,
		enableCreate = false,
		enableDelete = false,
		handleClick,
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
		handleChange,
		query,
		findMany,
		reloadMany,
		removeAttachment,
		page,
		numPages,		
		totalCount,
		paginate,
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

	const handlePaginate = (ev: any, page: number) => {
		paginate(page)
	}

	const handleSort = (field: TableHeaderType) => {
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
		if (name && url) {
			findMany({
				...query,
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [name, url])

	useEffect(() => {
		if (activeFilters?.length >= 0) {
			findMany({
				...query,
				...defaultQuery,
				filters: buildQueryFilters(activeFilters),
				per_page: perPage,
			})
		}
	}, [activeFilters?.length])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Box sx={{ ...(delayedLoading && sx.loading) }}>
				<TableList
					toolbar={
						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							sx={sx.toolbar}
							spacing={1}
						>
							{enableSearch && (
								<SearchInput
									value={keywords}
									handleChange={handleKeywordChange}
									handleSearch={handleSearch}
								/>
							)}
							{enableFilters && (
								<Box sx={sx.fullWidth}>
									<FilterButton
										filters={activeFilters}
										handleFilter={handleFilter}
										handleClear={handleClearFilters}
										filterOptions={filterOptions}
									/>
								</Box>
							)}
							{enableCreate && (
								<Box sx={sx.fullWidth}>
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
					}
					enableEdit={enableEdit}
					handleEdit={handleEdit}
					enableDelete={enableDelete}
					handleDelete={handleDeleteClick}
					loading={resources && loading}
					fields={headers}
					rows={resources}
					handleClick={handleClick}
					query={query}
					handleSort={handleSort}
					page={page}
					perPage={perPage}
					numPages={numPages}
					totalCount={totalCount}
					handlePaginate={handlePaginate}
				/>
			</Box>
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

export default ResourceTable

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
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
	toolbar: {
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
	fullWidth: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
