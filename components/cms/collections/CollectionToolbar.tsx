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
	handleAdd?: () => void
	handleFilter: (filter: FilterOptionType) => void
	handleClearFilters: () => void
	handleSortBy: (sortBy: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
	keywords: string
	handleKeywordChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
	handleSearch: (keywords: string) => void
}

const CollectionToolbar: React.FC<CollectionToolbarProps> = (props) => {
	const handleNull = () => null

	const {
		query = {},
		activeFilters,
		enableCreate = false,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		filterOptions = [],
		sortOptions = [],
		handleAdd = handleNull,
		handleFilter,
		handleClearFilters,
		keywords,
		handleKeywordChange,
		handleSortBy,
		handleSortDirection,
		handleSearch,
	} = props

	if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
		return null
	}
	return (
		<Stack direction="column" spacing={1}>
			<Stack
				justifyContent="space-between"
				direction={{ sm: 'row', xs: 'column' }}
				spacing={1}
			>
				<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems='center'>
          {enableSearch && (
            <SearchInput
              value={keywords}
              handleChange={handleKeywordChange}
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
					<Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} alignItems='center'>
						<Button
							sx={sx.button}
							color="secondary"
							variant="contained"
							onClick={handleAdd}
							startIcon={<Icon name="Plus" size={20} />}
						>
							Add
						</Button>
					</Stack>
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
      sm: 'auto'
    }
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
