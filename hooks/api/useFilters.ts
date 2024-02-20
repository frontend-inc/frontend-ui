import React, { useState, useEffect } from 'react'

type UseFiltersProps = {
	query?: any
	handleSubmit?: any
}

const useFilters = (props: UseFiltersProps) => {
	const { query, handleSubmit } = props || {}

	const [showFilterModal, setShowFilterModal] = useState(false)

	const [filter, setFilter] = useState()
	const [activeFilters, setActiveFilters] = useState([])

	const handleOpenFilterModal = () => {
		setShowFilterModal(true)
	}

	const handleCloseFilterModal = () => {
		setShowFilterModal(false)
	}

	const findFilter = (fieldName, filters) => {
		let foundFilter = filters.find((f) => f.field == fieldName)
		setFilter(foundFilter)
		return foundFilter
	}

	const handleAddFilter = (filter) => {
		let updatedFilters = []
		if (
			activeFilters?.find(
				({ field, where, operator, value }) =>
					field == filter?.field &&
					where == filter?.where &&
					operator == filter?.operator &&
					value == filter?.value
			)
		) {
			updatedFilters = activeFilters?.filter(
				({ field, where, operator, value }) =>
					!(
						field == filter?.field &&
						where == filter?.where &&
						operator == filter?.operator &&
						value == filter?.value
					)
			)
		} else {
			updatedFilters = [...activeFilters, filter]
		}
		handleFilterSearch(updatedFilters)
		setActiveFilters(updatedFilters)
	}

	const isBlank = (value) => {
		return (
			value === '' ||
			value === false ||
			value == null ||
			(Array.isArray(value) && value.length === 0)
		)
	}

	const handleFilterSearch = (activeFilters) => {
		// Convert the filter array into a searchable query object
		let filters = {}
		activeFilters
			.filter((filter) => !isBlank(filter?.value))
			.forEach((filter) => {
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
		handleSubmit && handleSubmit(searchQuery)
		setShowFilterModal(false)
	}

	// Convert the query object into an array of filter options
	const formatFilterArray = (filters) => {
		let formattedFilters = []
		if (typeof filters === 'object') {
			Object.keys(filters).forEach((where) => {
				filters[where].forEach((filter) => {
					let field = Object.keys(filter)[0]
					let operator = Object.keys(filter[field])[0]
					let value = filter[field][operator]
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

	return {
		filter,
		findFilter,
		showFilterModal,
		setShowFilterModal,
		handleOpenFilterModal,
		handleCloseFilterModal,
		handleAddFilter,
		activeFilters,
		setActiveFilters,
	}
}

export default useFilters
