import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useDocuments } from 'frontend-js'
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
import { FieldType, FilterOptionType, TableHeaderType } from '../../../types'
import { useRouter } from 'next/router'
import SearchFilters from '../filters/SearchFilters'
import { flattenDocument, flattenDocuments } from '../../../helpers'
import { TableList } from '../..'
import { CollectionProps } from './CollectionList'
import { useAuth } from 'frontend-js'

export type ForeignCollectionTableProps = CollectionProps & {
	resource: any
	field: FieldType
	foreignUrl?: string
	headers: TableHeaderType[]
}

const ForeignCollectionTable: React.FC<ForeignCollectionTableProps> = (
	props
) => {
	const router = useRouter()
	const { clientUrl, setAuthOpen } = useContext(AppContext)
  const { currentUser } = useAuth()

	const {
		resource,
		url,
		foreignUrl,
		fields,
		headers,
		filterAnchor = 'left',
		filterOptions = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
		href,
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
		query,
		resources,
		findLinks,
		page,
		numPages,
		numResults,
		totalCount,
		paginate,
		addLinks,
	} = useDocuments({
		url
	})

	const {
		errors,
		resource: _resource,
		setResource,
		update,
		create,
		destroy,
    handleDataChange,
		removeAttachment,
	} = useDocuments({		
		url: foreignUrl,
	})

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findLinks(resource.id, foreignUrl, {
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

	const handleSort = (field: FieldType) => {
		handleSortBy(field?.name)
	}

	const handleSortBy = (sortBy: string) => {
		let sortDir = query?.sort_direction
		if (sortBy == query?.sort_by) {
			sortDir = query?.sort_direction == 'asc' ? 'desc' : 'asc'
		}
		findLinks(resource?.id, foreignUrl, {
			...query,
			sort_by: sortBy,
			sort_direction: sortDir,
		})
	}

	const {
		activeFilters,
		setActiveFilters,
		handleAddFilter,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findLinks(resource?.id, foreignUrl, {
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
		setResource({})
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
			if (_resource?.id) {
				resp = await update(_resource)
			} else {
				resp = await create(_resource)
				if (resp?.id) {
					await addLinks(resource?.handle, [resp.id])
				}
			}
			if (resp?.id) {
				handleFetchResources()
				setResource({})
				setOpenModal(false)
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
		await destroy(_resource?.id)
		setOpenDeleteModal(false)
		setOpenModal(false)
		setResource({})
		handleFetchResources()
	}

	const handleRemove = async (name) => {
    if(!currentUser?.id) return setAuthOpen(true);
		await removeAttachment(_resource?.id, name)
	}

	const [rows, setRows] = useState([])

	const handleFetchResources = async () => {
		let filterQuery = {
			...query,
			...defaultQuery,
			per_page: perPage,
			page: 1,
		}
		findLinks(resource?.id, foreignUrl, filterQuery)
	}

	useEffect(() => {
		if (resources?.length >= 0) {
			let flatten = flattenDocuments(resources)
			setRows(flatten)
		}
	}, [resources])

	useEffect(() => {
		if (resource?.id && foreignUrl) {
			handleFetchResources()
		}
	}, [resource, foreignUrl, currentUser?.id])

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
												disableFilterCount={false}
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
				title={_resource?.id ? 'Edit' : 'Add'}
				actions={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<IconLoading loading={loading} />}
					>
						{_resource?.id ? 'Update' : 'Save'}
					</Button>
				}
			>
				<Form
					loading={loading}
					errors={errors}
					fields={fields}
					resource={flattenDocument(_resource)}
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

export default ForeignCollectionTable

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
