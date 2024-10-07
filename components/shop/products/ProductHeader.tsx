import React from 'react'
import { Stack } from '../../../tailwind'
import { FilterButton, SortButton, SearchInput } from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch } from '../../../hooks'
import { cn } from '../../../shadcn/lib/utils'

export type ProductHeaderProps = {
  query: any
  url: string
  enableSearch?: boolean
  enableFilters?: boolean
  enableSorting?: boolean
  filterOptions?: SearchFilterOptionType[]
  sortOptions?: SortOptionType[]
}

const ProductHeader: React.FC<ProductHeaderProps> = (props) => {
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

  if (!enableSearch && !enableFilters && !enableSorting) {
    return null
  }
  return (
    <Stack direction="column" spacing={1} className="mb-4">
      <Stack
        justifyContent="space-between"
        direction={'row'}
        spacing={1}
      >
        <Stack
          spacing={1}
          direction={'row'}
          alignItems="center"
        >
          {enableSearch && (
            <SearchInput
              value={keywords}
              handleChange={handleKeywordChange}
              handleSearch={handleSearch}
            />
          )}
          {enableFilters && (
            <div className="w-full sm:w-auto">
              <FilterButton
                filterOptions={filterOptions}
                filters={activeFilters}
                handleFilter={handleFilter}
                handleClear={handleClearFilters}
              />
            </div>
          )}
          {enableSorting && (
            <div className="w-full sm:w-auto">
              <SortButton
                sortOptions={sortOptions}
                sortBy={query?.sort_by || 'id'}
                sortDirection={query?.sort_direction || 'desc'}
                handleSortBy={handleSortBy}
                handleSortDirection={handleSortDirection}
              />
            </div>
          )}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProductHeader