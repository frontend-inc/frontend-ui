import React, { useContext, useState, useEffect } from 'react'
import { useFilters } from '../../../hooks'
import { useResource } from 'frontend-js'
import { Grid, Box, Stack } from '@mui/material'
import {
	CollectionFilterButton,
	SortButton,
	SearchInput,
	Heading,
	LoadMore,
} from '../..'
import { AppContext } from '../../../context'
import { FilterOptionType } from '../../../types'
import { useRouter } from 'next/router'
import { CollectionList, Placeholder } from '../../../components'
import CollectionSearchFilters from './filters/CollectionSearchFilters'
import { SearchFilterOptionType } from '../../../types'
import { SortOptionType } from '../../../types'
import { useDelayedLoading } from '../../../hooks'

type CollectionProps = {
  label?: string
	title?: string
	url: string
	layout: 'list' | 'grid'
	style: 'avatar' | 'card' | 'cover'
	editing?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	navigateUrl: any
	perPage?: number
	query?: any
	filterAnchor?: 'left' | 'top'
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	secondaryActions?: React.ReactNode
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
}

const Collection: React.FC<CollectionProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
    label,
		title,
		layout = 'grid',
		style = 'card',
		url,
		filterAnchor = 'left',
		filterOptions = [],
		sortOptions = [],
		query: defaultQuery = {},
		perPage = 20,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		enableInfiniteLoad = false,
		enableLoadMore = true,
		navigateUrl,
		buttonText,
		enableBorder = false,
		enableGradient = false,
	} = props

	const { loading, query, findMany, resources, page, numPages, loadMore } =
		useResource({
			url,
		})

	const [keywords, setKeywords] = useState('')

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
		findMany({
			...defaultQuery,
			...query,
			keywords: keywords,
			page: 1,
			per_page: perPage,
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
			filters: {},
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

	const { loading: delayedLoading } = useDelayedLoading({
		loading,
		delay: 250,
	})

	useEffect(() => {
		if (url && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, perPage])

	useEffect(() => {
		if (activeFilters?.length >= 0) {
			findMany({
				...query,
				filters: buildQueryFilters(activeFilters),
				page: 1,
				per_page: perPage,
			})
		}
	}, [activeFilters?.length])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Stack direction="column" spacing={1}>
				<Heading label={label} title={title} />
				{enableSearch && (
					<SearchInput
						value={keywords}
						handleChange={handleChange}
						handleSearch={handleSearch}
					/>
				)}
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					sx={sx.sortFilterActions}
					spacing={1}
				>
					{enableFilters && filterAnchor == 'top' && (
						<CollectionFilterButton
							filters={activeFilters}
							handleFilter={handleFilter}
							handleClear={handleClearFilters}
							filterOptions={filterOptions}
						/>
					)}
					{enableSorting && (
						<SortButton
							sortBy={query?.sort_by}
							sortDirection={query?.sort_direction}
							sortOptions={sortOptions}
							handleSortBy={handleSortBy}
							handleSortDirection={handleSortDirection}
						/>
					)}
				</Stack>
			</Stack>
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
							layout={layout}
							style={style}
							resources={resources}
							handleClick={handleClick}
							buttonText={buttonText}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
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
