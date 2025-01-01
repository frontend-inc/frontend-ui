'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import {
	FilterButton,
	SortButton,
	SearchInput,
	GeoSearchInput,
} from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch, useDocumentForms } from '../../../hooks'
import { RiAddFill } from '@remixicon/react'

export type DocumentHeaderProps = {
	query: any
	url: string
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	enableGeoSearch?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableCreate?: boolean
	buttonText?: string
	handleAdd?: () => void
}

const DocumentHeader: React.FC<DocumentHeaderProps> = (props) => {
	const {
		url,
		query: defaultQuery = {},
		filterOptions = [],
		sortOptions = [],
		enableCreate = false,
		enableSearch = false,
		enableGeoSearch = false,
		enableFilters = false,
		enableSorting = false,
		buttonText = 'Add',
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
		handleToggleFilter,
	} = useSearch({
		url,
		query: defaultQuery,
	})

	const handleFilterClick = (
		name: string,
		value: string | number | boolean
	) => {
		handleToggleFilter({
			name,
			value,
			operator: 'eq',
		})
	}

	const { handleAdd } = useDocumentForms()

	if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
		return null
	}

	return (
		<div className="flex flex-col space-y-1 mb-1">
			<div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0 sm:space-x-1">
				<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
					{enableSearch && !enableGeoSearch && (
						<SearchInput
							value={keywords}
							handleChange={handleKeywordChange}
							handleSearch={handleSearch}
						/>
					)}
					{enableGeoSearch && !enableSearch && (
						<GeoSearchInput
							value={keywords}
							location={location}
							handleChange={handleKeywordChange}
							handleLocationChange={handleLocationChange}
							handleSearch={handleSearch}
						/>
					)}
					{enableFilters && (
						<div className="w-full sm:w-auto">
							<FilterButton
								filterOptions={filterOptions}
								filters={activeFilters}
								handleFilter={handleFilterClick}
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
				</div>
				{enableCreate && (
					<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
						<Button
              variant="solid"
              color="primary"
							className={cn(
								'w-full sm:w-auto',
							)}
							onPress={handleAdd}
							startContent={<RiAddFill />}
						>
							{buttonText}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default DocumentHeader
