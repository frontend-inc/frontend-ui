'use client'

import React, { useEffect, useState } from 'react'
import { Plus, Search, FilterIcon, Loader } from 'lucide-react'
import { FILTERABLE_TYPES, SORTABLE_TYPES } from '../../../../constants/index'
import { Button } from '@nextui-org/react'
import { TableFilterInputs } from '../../../../components'
import { TableFilterKeywordsInput } from '../../../../components'
import { TableFilterSortInput } from '../../../../components'
import { SyntheticEventType } from '../../../../types'

type TableFilterFormProps = {
	loading: boolean
	query: any
	fields: any[]
	handleChange: (e: any) => void
	handleSearch: (e: any) => void
	handleClearFilters: () => void
}

export default function TableFilterForm({
	loading,
	query,
	fields,
	handleChange,
	handleSearch,
	handleClearFilters,
}: TableFilterFormProps) {
	const [filterOptions, setFilterOptions] = useState<Record<string, any>[]>([])
	const [sortOptions, setSortOptions] = useState<
		{ label: string; value: string }[]
	>([])
	const [activeFilters, setActiveFilters] = useState<Record<string, any>[]>([])

	const defaultFilter = {
		field: 'id',
		operator: 'eq',
		value: '',
	}

	const handleFilterChange = (ev: SyntheticEventType, index: number) => {
		const { name, value } = ev.target
		setActiveFilters((prevFilters) => {
			const updatedFilters = [...prevFilters]
			updatedFilters[index] = {
				...updatedFilters[index],
				[name]: value,
				...(name === 'field' && { operator: '', value: '' }),
			}
			return updatedFilters
		})
	}

	const handleAddFilter = () => {
		setActiveFilters((prevFilters) => [...prevFilters, defaultFilter])
	}

	const handleRemoveFilter = (index: number) => {
		setActiveFilters((prevFilters) => prevFilters.filter((_, i) => i !== index))
	}

	const handleFilterSearch = () => {
		const filters = activeFilters.reduce(
			(acc, { where, field, operator, value }) => {
				if (!acc[where]) acc[where] = []
				acc[where].push({ [field]: { [operator]: value } })
				return acc
			},
			{} as Record<string, any[]>
		)

		const searchQuery = {
			page: 1,
			keywords: query?.keywords || '',
			per_page: query?.per_page || 20,
			sort_by: query?.sort_by || 'id',
			sort_direction: query?.sort_direction || 'desc',
			filters,
		}

		handleSearch(searchQuery)
	}

	const handleFilterFields = (
		fields: any[],
		filterFn: (field: any) => boolean
	) => {
		return fields
			.filter(filterFn)
			.map((field) => ({
				label: field.label,
				value: field.name,
				variant: field.variant,
				db_type: field.db_type,
				options: field.options,
			}))
			.sort((a, b) => a.label.localeCompare(b.label))
	}

	useEffect(() => {
		if (fields) {
			setFilterOptions(
				handleFilterFields(fields, (field) =>
					FILTERABLE_TYPES.includes(field?.variant)
				)
			)
			setSortOptions(
				handleFilterFields(fields, (field) =>
					SORTABLE_TYPES.includes(field?.variant)
				)
			)
		}
	}, [fields])

	useEffect(() => {
		if (query && query.filters) {
			// Use Object.keys to iterate over query.filters
			const formattedFilters = Object.keys(query.filters)
				.map((where) => {
					const filters = query.filters[where]
					// Use map to iterate over filters and format them
					return filters.map((filter) => {
						const field = Object.keys(filter)[0]
						const operator = Object.keys(filter[field])[0]
						const value = filter[field][operator]

						return { where, field, operator, value }
					})
				})
				// Use reduce to flatten the resulting arrays
				.reduce((acc, curr) => acc.concat(curr), [])

			// Set active filters
			setActiveFilters(formattedFilters)
		}
	}, [query])

	return (
		<div className="space-y-2">
			<TableFilterKeywordsInput
				label="keywords"
				value={query?.keywords}
				handleChange={handleChange}
				handleSearch={handleFilterSearch}
			/>
			<TableFilterSortInput
				label="sort by"
				fieldOptions={sortOptions}
				handleChange={handleChange}
				sortBy={query?.sort_by}
				sortDirection={query?.sort_direction}
			/>
			<TableFilterInputs
				filters={activeFilters}
				fieldOptions={filterOptions}
				handleChange={handleFilterChange}
				handleRemove={handleRemoveFilter}
			/>
			<Button
        isIconOnly 
				variant="ghost"				
				onPress={handleAddFilter}
			>
				<Plus className="w-4 h-4 text-foreground" />				
			</Button>
			<button
				className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
				onClick={handleFilterSearch}
			>
				{loading ? (
					<Loader className="w-4 h-4 animate-spin" />
				) : (
					<Search className="w-4 h-4" />
				)}
				<span>Search</span>
			</button>
			<Button				
				onPress={handleClearFilters}
        startContent={
          <FilterIcon className="w-4 h-4" />
        }
			>				
				Reset filters
			</Button>
		</div>
	)
}
