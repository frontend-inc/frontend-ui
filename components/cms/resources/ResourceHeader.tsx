'use client'

import React from 'react'
import { Button } from '../../core'
import { Icon, SearchInput, FilterButton, SortButton } from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
	FilterOptionType,
	SyntheticEventType,
} from '../../../types'
import { cn } from 'frontend-shadcn'

export type ResourceHeaderProps = {
	buttonText?: string
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
	handleReload?: () => void
	keywords: string
	activeFilters: FilterOptionType[]
	filterOptions: SearchFilterOptionType[]
	sortOptions: SortOptionType[]
	query: any
	secondaryAction?: React.ReactNode
}

const ResourceHeader: React.FC<ResourceHeaderProps> = (props) => {
	const {
		direction = 'row',
		buttonText = 'Add',
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
		secondaryAction,
		query = {},
	} = props || {}

	return (
		<div 
      className={cn(
        "flex flex-col space-y-2 w-full align-center justify-between",
        direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0'
      )}					
		>
			<div 
        className={cn(
          "w-full flex flex-col space-y-2 items-center justify-start",
          direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0'
        )}					
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
			</div>
			<div
				className={cn(
          "flex flex-col space-y-2 w-full align-center justify-end",
          direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0'
        )}	
			>
				{secondaryAction}
				{(enableCreate || secondaryAction) && (          
					<Button
            size="default"
						className="w-full sm:w-auto"
						onClick={handleAdd}
						startIcon={<Icon name="Plus" className="text-primary-foreground" />}
					>
						{buttonText}
					</Button>
				)}
			</div>
		</div>
	)
}

export default ResourceHeader
