'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { RemixIcon, SearchInput, FilterButton, SortButton } from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
	FilterOptionType,
	SyntheticEventType,
} from '../../../types'
import { cn } from '@nextui-org/react'
import { RiAddFill } from '@remixicon/react'

export type ResourceHeaderProps = {
	buttonText?: string
	direction?: 'row' | 'column'
	enableSearch: boolean
	enableFilters: boolean
	enableSorting: boolean
	enableCreate?: boolean
	enableExport?: boolean
	handleExport?: () => void
	handleSearch: (keywords: string) => void
	handleKeywordChange: (ev: SyntheticEventType) => void
	handleFilter: (name: string, value: string | number | boolean) => void
	handleClearFilters: () => void
	handleSortBy: (sortBy: string) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
	handleAdd: () => void
	handleReload: () => void
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
		enableExport,
		handleExport,
		handleSearch,
		handleKeywordChange,
		handleFilter,
		handleSortBy,
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
				'flex flex-col space-y-2 w-full align-center justify-between',
				direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0'
			)}
		>
			<div
				className={cn(
					'w-full flex flex-col space-y-2 items-center justify-start',
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
						filterOptions={filterOptions}
					/>
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
			</div>
			<div
				className={cn(
					'flex flex-col space-y-2 w-full align-center justify-end',
					direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0'
				)}
			>
				{secondaryAction}
				{enableExport && (
					<Button
						variant="ghost"
						className="w-full sm:w-auto"
						onPress={handleExport}
						startContent={
							<RemixIcon
								name="ri-download-fill"
								className="text-secondary-foreground"
							/>
						}
					>
						Export
					</Button>
				)}
				{(enableCreate || secondaryAction) && (
					<Button
						color="primary"
						variant="solid"
						onPress={handleAdd}
						className="w-full sm:w-auto"
						startContent={<RiAddFill className="text-primary-foreground" />}
					>
						{buttonText}
					</Button>
				)}
			</div>
		</div>
	)
}

export default ResourceHeader
