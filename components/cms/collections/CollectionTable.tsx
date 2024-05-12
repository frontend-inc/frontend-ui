import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Button, Grid, Box, Stack } from '@mui/material'
import {
	Form,
	Drawer,
	AlertModal,
	Icon,
	FilterButton,
	SearchInput,
	IconLoading,
} from '../../../components'
import { AppContext } from '../../../context'
import { FilterOptionType, TableHeaderType } from '../../../types'
import { useRouter } from 'next/router'
import SearchFilters from '../filters/SearchFilters'
import { SYSTEM_FIELDS } from '../../../constants'
import { flattenDocument, flattenDocuments } from '../../../helpers'
import { TableList } from '../../../components'
import { CollectionProps } from './Collection'

export type CollectionTableProps = CollectionProps & {
	headers: TableHeaderType[]
}

const CollectionTable: React.FC<CollectionTableProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		url,
		fields,
		headers,
		filterAnchor = 'left',
		filterOptions = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
		navigateUrl,
		enableBorder = false,
		enableEdit = false,
		enableCreate = false,
		enableDelete = false,
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
		numResults,
		totalCount,
		paginate,
	} = useResource({
		name: 'document',
		url: url,
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

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		if (SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		} else {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		}
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
		if (activeFilters && url && perPage) {
			findMany({
				...query,
				filters: buildQueryFilters(activeFilters),
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [activeFilters?.length, defaultQuery, perPage, url])

	const [rows, setRows] = useState([])

	useEffect(() => {
		if (resources?.length >= 0) {
			let flatten = flattenDocuments(resources)
			setRows(flatten)
		}
	}, [resources])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Grid container spacing={0}>
				{enableFilters && filterAnchor == 'left' && (
					<Grid item xs={12} sm={4} lg={3}>
						<Box sx={sx.filtersContainer}>
							<SearchFilters
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
									{enableFilters && filterAnchor == 'top' && (
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
							enableBorder={enableBorder}
							enableEdit={enableEdit}
							handleEdit={handleEdit}
							enableDelete={enableDelete}
							handleDelete={handleDeleteClick}
							loading={resources && loading}
							fields={headers}
							rows={rows}
							handleClick={handleClick}
							query={query}
							handleSort={handleSort}
							page={page}
							perPage={perPage}
							numPages={numPages}
							numResults={numResults}
							totalCount={totalCount}
							handlePaginate={handlePaginate}
						/>
					</Box>
				</Grid>
			</Grid>
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

export default CollectionTable

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
