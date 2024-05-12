import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { FILTERABLE_TYPES, SORTABLE_TYPES } from '../../../../constants/index'
import { FilterList } from '@mui/icons-material'
import { Plus, Search } from 'lucide-react'
import {
	TableFilterInputs,
	TableFilterKeywordsInput,
	TableFilterSortInput,
} from '../../..'
import { OptionType } from '../../../../types'

type TableFilterFormProps = {
	query: any
	fields: any[]
	handleChange: (e: any) => void
	handleSearch: (e: any) => void
	handleClearFilters: () => void
}

const TableFilterForm: React.FC<TableFilterFormProps> = (props) => {
	const { query, fields, handleChange, handleSearch, handleClearFilters } =
		props

	const [filterOptions, setFilterOptions] = useState<Record<string, any>[]>([])
	const [sortOptions, setSortOptions] = useState<OptionType[]>([])
	const [activeFilters, setActiveFilters] = useState<Record<string, any>[]>([])

	let defaultFilter = {
		where: 'AND',
		field: 'id',
		operator: 'eq',
		value: '',
	}

	const handleFilterChange = (ev, index) => {
		let filter = activeFilters[index]
		let { name, value } = ev.target

		let updatedFilter = {
			...filter,
			[name]: value,
		}

		// reset the filter
		if (name === 'field') {
			updatedFilter = {
				...updatedFilter,
				operator: '',
				value: '',
			}
		}

		let updatedFilters = [...activeFilters]
		updatedFilters[index] = updatedFilter
		setActiveFilters(updatedFilters)
	}

	const handleAddFilter = () => {
		let updatedFilters = [...activeFilters, defaultFilter]
		setActiveFilters(updatedFilters)
	}

	const handleRemoveFilter = (index) => {
		let updatedFilters = activeFilters.filter((f, i) => i != index)
		setActiveFilters(updatedFilters)
	}

	const handleFilterSearch = () => {
		let filters = {}
		activeFilters.forEach((filter) => {
			let { where, field, operator, value } = filter
			if (!filters[where]) {
				filters[where] = []
			}
			filters = {
				...filters,
				[where]: [
					...filters[where],
					{
						[field]: {
							[operator]: value,
						},
					},
				],
			}
		})

		let searchQuery = {
			page: 1,
			keywords: query?.keywords || '',
			per_page: query?.per_page || 20,
			sort_by: query?.sort_by || 'id',
			sort_direction: query?.sort_direction || 'desc',
			filters: filters,
		}

		handleSearch(searchQuery)
	}

	const handleFilters = (fields) => {
		const filter = (field: any) => FILTERABLE_TYPES.includes(field?.variant)
		let filters = handleFilterFields(fields, filter)
		setFilterOptions(filters)
	}

	const handleSort = (fields) => {
		const filter = (field: any) => SORTABLE_TYPES.includes(field?.variant)
		let filters = handleFilterFields(fields, filter)
		setSortOptions(filters)
	}

	const handleFilterFields = (
		fields: any[],
		filterFn: (fields: any) => any
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

	const formatFilterArray = (filters) => {
		let formattedFilters = []
		if (typeof filters === 'object') {
			Object.keys(filters).forEach((where) => {
				filters[where].forEach((filter) => {
					let field = Object.keys(filter)[0]
					let operator = Object.keys(filter[field])[0]
					let value = filter[field][operator]
					//@ts-ignore
					formattedFilters.push({
						where: where,
						field: field,
						operator: operator,
						value: value,
					})
				})
			})
			setActiveFilters(formattedFilters)
		}
		return formattedFilters
	}

	useEffect(() => {
		if (query?.filters) {
			formatFilterArray(query?.filters)
		}
	}, [query])

	useEffect(() => {
		if (fields) {
			handleFilters(fields)
			handleSort(fields)
		}
	}, [fields])

	return (
		<Box>
			<Box sx={sx.searchBar}>
				<TableFilterKeywordsInput
					label="keywords"
					value={query?.keywords}
					handleChange={handleChange}
					handleSearch={handleFilterSearch}
				/>
			</Box>
			<Box sx={sx.searchBar}>
				<TableFilterSortInput
					label="sort by"
					fieldOptions={sortOptions}
					handleChange={handleChange}
					sortBy={query?.sort_by}
					sortDirection={query?.sort_direction}
				/>
			</Box>
			<TableFilterInputs
				filters={activeFilters}
				fieldOptions={filterOptions}
				handleChange={handleFilterChange}
				handleRemove={handleRemoveFilter}
			/>
			<Box sx={sx.inputField}>
				<Box sx={sx.inputLabel}></Box>
				<Box>
					<Button
						variant="contained"
						color="secondary"
						startIcon={<Plus />}
						onClick={handleAddFilter}
						sx={sx.addFilterButton}
					>
						Filter
					</Button>
				</Box>
			</Box>
			<Button
				sx={sx.button}
				startIcon={<Search size={20} />}
				onClick={handleFilterSearch}
				fullWidth
				variant="contained"
				color="primary"
			>
				Search
			</Button>
			<Button
				sx={sx.button}
				startIcon={<FilterList />}
				onClick={handleClearFilters}
				fullWidth
				variant="outlined"
				color="secondary"
			>
				Reset filters
			</Button>
		</Box>
	)
}

export default TableFilterForm

const sx = {
	button: {
		mt: 2,
	},
	searchBar: {
		width: '100%',
	},
	inputField: {
		py: 0.5,
		px: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	inputLabel: {
		minWidth: '100px',
	},
	addFilterButton: {
		maxWidth: '160px',
		width: { sm: '100%' },
	},
	icon: {
		height: '20px',
		width: '20px',
		color: 'icon',
	},
}
