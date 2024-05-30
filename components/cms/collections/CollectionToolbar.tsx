import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import {
	Icon,
	FilterButton,
	SortButton,
	SearchInput,
} from '../../../components'
import { FilterOptionType } from '../../../types'
import { SortOptionType, SearchFilterOptionType } from '../../../types'

export type CollectionToolbarProps = {
	query: any
	activeFilters: FilterOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableCreate?: boolean
	handleAdd: () => void
	handleFilter: (filter: FilterOptionType) => void
	handleClearFilters: () => void
	handleSortBy: (sortBy: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
	keywords: string
	handleKeywordChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
	handleSearch: (keywords: string) => void
}

const CollectionToolbar: React.FC<CollectionToolbarProps> = (props) => {
	const {
		query = {},
		activeFilters,
		enableCreate = false,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		filterOptions = [],
		sortOptions = [],
		handleAdd,
		handleFilter,
		handleClearFilters,
		keywords,
		handleKeywordChange,
		handleSortBy,
		handleSortDirection,
		handleSearch,
	} = props

  if(!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
    return null
  }
	return (
		<Stack direction="column" spacing={1}>
			{enableSearch && (
        <Box sx={ sx.searchBar }>
          <SearchInput
            value={keywords}
            handleChange={handleKeywordChange}
            handleSearch={handleSearch}
          />
        </Box>
			)}
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				sx={sx.toolbarActions}
				spacing={1}
			>
				<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }}>
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
							handleSortBy={handleSortBy}
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
							startIcon={<Icon name="Plus" size={20} />}
						>
							Add
						</Button>
					</Box>
				)}
			</Stack>
		</Stack>
	)
}

export default CollectionToolbar

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
	toolbarActions: {
		justifyContent: 'space-between',
	},
	loading: {
		opacity: 0.7,
	},
	circularProgress: {
		color: 'primary.main',
	},
  searchBar: {
    pt: 1,
    width: '100%'
  }
}
