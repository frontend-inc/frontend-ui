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

export type GeoHeaderProps = {
	query: any
	url: string
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
}

const GeoHeader: React.FC<GeoHeaderProps> = (props) => {
	const {
		url,
		query: defaultQuery = {},
		filterOptions = [],
		sortOptions = [],
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
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
		query: defaultQuery,
	})

	const { handleAdd } = useForms()

	if (!enableSearch && !enableFilters && !enableSorting) {
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
					{enableSearch && (
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
								filterOptions={filterOptions}
								filters={activeFilters}
								handleFilter={handleFilter}
								handleClear={handleClearFilters}
							/>
						</Box>
					)}
					{enableSorting && (
						<Box sx={sx.buttonContainer}>
							<SortButton
								sortOptions={sortOptions}
								sortBy={query?.sort_by || 'id'}
								sortDirection={query?.sort_direction || 'desc'}
								handleSortBy={handleSortBy}
								handleSortDirection={handleSortDirection}
							/>
						</Box>
					)}
				</Stack>
			</Stack>
		</Stack>
	)
}

export default GeoHeader

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
