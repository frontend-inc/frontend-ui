import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import {
	Icon,
	FilterButton,
	SortButton,
	SearchInput,
	GeoSearchInput,
} from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch, useForms } from '../../../hooks'
import { useAuth } from 'frontend-js'

export type ToolbarProps = {
	query: any
	url: string
	filterUser: boolean
	filterTeam: boolean
	perPage: number
	enableSearch?: boolean
	enableGeoSearch?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableCreate?: boolean
	handleAdd?: () => void
}

const SearchToolbar: React.FC<ToolbarProps> = (props) => {
	const { currentUser } = useAuth()

	const {
		url,
		filterUser,
		filterTeam,
		query: defaultQuery = {},
		perPage,
		enableCreate = false,
		enableSearch = false,
		enableGeoSearch = false,
		filterOptions = [],
		sortOptions = [],
	} = props

	const {
		query,
		keywords,
		handleKeywordChange,
		location,
		handleLocationChange,
		handleSearch,
		handleSortBy,
		handleSortDirection,
		activeFilters,
		handleFilter,
		handleClearFilters,
	} = useSearch({
		url,
		user: currentUser,
		perPage,
		filterUser,
		filterTeam,
		query: defaultQuery,
	})

	const { handleAdd } = useForms()

	const enableFilters = enableSearch && filterOptions.length > 0
	const enableSorting = enableSearch && sortOptions.length > 0

	if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
		return null
	}
	return (
		<Stack direction="column" spacing={1} mb={1}>
			<Stack
				justifyContent="space-between"
				direction={{ sm: 'row', xs: 'column' }}
				spacing={1}
			>
				<Stack
					spacing={1}
					direction={{ xs: 'column', sm: 'row' }}
					alignItems="center"
				>
					{enableSearch && !enableGeoSearch && (
						<SearchInput
							value={keywords}
							handleChange={handleKeywordChange}
							handleSearch={handleSearch}
						/>
					)}
					{enableGeoSearch && (
						<GeoSearchInput
							value={keywords}
							location={location}
							handleChange={handleKeywordChange}
							handleLocationChange={handleLocationChange}
							handleSearch={handleSearch}
						/>
					)}

					{enableFilters && (
						<Box sx={sx.buttonContainer}>
							<FilterButton
								filters={activeFilters}
								handleFilter={handleFilter}
								handleClear={handleClearFilters}
								filterOptions={filterOptions}
							/>
						</Box>
					)}
					{enableSorting && (
						<Box sx={sx.buttonContainer}>
							<SortButton
								sortBy={query?.sort_by || 'id'}
								sortDirection={query?.sort_direction || 'desc'}
								sortOptions={sortOptions}
								handleSortBy={handleSortBy}
								handleSortDirection={handleSortDirection}
							/>
						</Box>
					)}
				</Stack>
				{enableCreate && (
					<Stack
						spacing={1}
						direction={{ xs: 'column', sm: 'row' }}
						alignItems="center"
					>
						<Button
							sx={sx.button}
							color="secondary"
							variant="contained"
							onClick={handleAdd}
							startIcon={
								<Icon name="Plus" size={20} color="secondary.contrastText" />
							}
						>
							Add
						</Button>
					</Stack>
				)}
			</Stack>
		</Stack>
	)
}

export default SearchToolbar

const sx = {
	root: {
		width: '100%',
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	toolbar: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
	toolbarActions: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
	},
	buttonContainer: {
		width: {
			xs: '100%',
			sm: 'auto',
		},
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
	searchBar: {
		width: '100%',
	},
}
