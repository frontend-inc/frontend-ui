import React from 'react'
import { Stack, Box, Button } from '@mui/material'
import { Icon, SearchInput, FilterButton, SortButton } from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
	FilterOptionType,
	SyntheticEventType,
} from '../../../types'

type ToolbarProps = {
	direction?: 'row' | 'column'
	enableSearch: boolean
	enableFilters: boolean
	enableSorting: boolean
	enableCreate?: boolean
	handleSearch: (keywords: string) => void
	handleKeywordChange: (ev: SyntheticEventType) => void
	handleFilter: (filter: FilterOptionType) => void
	handleClearFilters: () => void
	handleSort: (field: any) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
	handleAdd: () => void
	keywords: string
	activeFilters: FilterOptionType[]
	filterOptions: SearchFilterOptionType[]
	sortOptions: SortOptionType[]
	query: any
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
	const {
		direction = 'row',
		enableSearch,
		enableFilters,
		enableSorting,
		enableCreate,
		handleSearch,
		handleKeywordChange,
		handleFilter,
		handleClearFilters,
		handleSort,
		handleSortDirection,
		handleAdd,
		keywords,
		activeFilters,
		filterOptions,
		sortOptions,
		query = {},
	} = props || {}

	return (
		<Stack
			direction={{ xs: 'column', sm: direction }}
			sx={sx.buttons}
			spacing={1}
		>
			<Stack
				alignItems="center"
				direction={{ xs: 'column', sm: direction }}
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
          <FilterButton
            filters={activeFilters}
            handleFilter={handleFilter}
            handleClear={handleClearFilters}
            filterOptions={filterOptions}
          />	            
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
				<Button
					sx={sx.button}
					color="primary"
					variant="contained"
					onClick={handleAdd}
					startIcon={
						<Icon name="Plus" color="primary.contrastText"  />
					}
				>
					Add
				</Button>
			)}
		</Stack>
	)
}

export default Toolbar

const sx = {
	buttons: {
		width: '100%',
		justifyContent: 'space-between',
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
