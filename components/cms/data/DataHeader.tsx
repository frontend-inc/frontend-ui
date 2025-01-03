'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { FilterButton, SortButton, SearchInput } from '../..'
import { SortOptionType, SearchFilterOptionType } from '../../../types'
import { useSearch, useDocumentForms } from '../../../hooks'
import { RiAddFill } from '@remixicon/react'

export type DataHeaderProps = {
	query: any
	url: string
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableCreate?: boolean
	handleAdd?: () => void
	component?: React.FC<any>
	buttonText?: string
	secondaryAction?: React.ReactNode
	slots?: {
		search?: any
	}
}

const DataHeader: React.FC<DataHeaderProps> = (props) => {
	const {
		url,
		query: defaultQuery = {},
		filterOptions = [],
		sortOptions = [],
		enableCreate = false,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		buttonText = 'Add',
		secondaryAction,
		component: SearchComponent = SearchInput,
		slots = {
			search: {},
		},
	} = props

	const {
		query,
		keywords,
		handleKeywordChange,
		handleSearch,
		handleSortBy,
		handleSortDirection,
		activeFilters,
		handleToggleFilter,
	} = useSearch({
		url,
		query: defaultQuery,
	})

	const { handleAdd } = useDocumentForms()

	if (!enableSearch && !enableFilters && !enableSorting && !enableCreate) {
		return null
	}

	return (
		<div className="flex flex-col space-y-1 mb-1">
			<div className="flex flex-col sm:flex-row justify-between space-y-1 sm:space-y-0 sm:space-x-1">
				<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
					{enableSearch && (
						<div className="w-full max-w-[320px]">
							<SearchComponent
								value={keywords}
								handleChange={handleKeywordChange}
								handleSearch={handleSearch}
								{...slots.search}
							/>
						</div>
					)}
					{enableFilters && (
						<div className="w-full sm:w-auto">
							<FilterButton
								filterOptions={filterOptions}
								filters={activeFilters}
								handleFilter={handleToggleFilter}
							/>
						</div>
					)}
					{enableSorting && (
						<div className="w-full sm:w-auto">
							<SortButton
								sortOptions={sortOptions}
								sortBy={query?.sort_by || 'position'}
								sortDirection={query?.sort_direction || 'asc'}
								handleSortBy={handleSortBy}
								handleSortDirection={handleSortDirection}
							/>
						</div>
					)}
				</div>
				{(enableCreate || secondaryAction) && (
					<div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-1">
						<Button
							variant="solid"
							color="primary"
							className="sm:w-auto"
							startContent={<RiAddFill className="text-primary-foreground" />}
							onPress={handleAdd}
						>
							{buttonText}
						</Button>
						{secondaryAction}
					</div>
				)}
			</div>
		</div>
	)
}

export default DataHeader
