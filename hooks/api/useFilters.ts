import { is } from 'immutable'
import React, { useState, useEffect } from 'react'

type UseFiltersProps = {
	query?: any
}

const useFilters = (props: UseFiltersProps) => {
	const { query } = props || {}

	const [showFilterModal, setShowFilterModal] = useState(false)

	const [filter, setFilter] = useState()
	const [queryFilters, setQueryFilters] = useState({})
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

	const compareValues = (a, b) => {
		if (Array.isArray(a) && Array.isArray(b)) {
			return a.sort().join(',') === b.sort().join(',')
		}
		return a === b
	}

	const findDuplicateFilterIndex = (filters, filter) => {
		return filters.findIndex(
			(f) =>
				f.field === filter.field &&
				f.operator === filter.operator &&
				f.where === filter.where &&
				compareValues(f.value, filter.value)
		)
	}

	const findDuplicateFilter = (filters, filter) => {
		return filters.find(
			(f) =>
				f.field === filter.field &&
				f.operator === filter.operator &&
				f.where === filter.where &&
				compareValues(f.value, filter.value)
		)
	}

	const handleAddFilter = (filter) => {
		let updatedFilters = [...activeFilters]
		let duplicateIndex = findDuplicateFilterIndex(activeFilters, filter)
		if (duplicateIndex > -1) {
			updatedFilters = updatedFilters?.filter(
				(f, index) => index !== duplicateIndex
			)
		} else {
			//@ts-ignore
			updatedFilters = [...updatedFilters, filter]
		}
		setActiveFilters(updatedFilters)
	}

	const isBlank = (value) => {
		return (
			value === '' ||
			value == undefined ||
			value == null ||
			(Array.isArray(value) && value.length === 0)
		)
	}

	const mergeFilters = (filters, newFilters) => {
		if (!filters) return newFilters
		if (!newFilters) return filters
		let mergedFilters = {
			AND: [...(filters?.AND || []), ...(newFilters?.AND || [])],
			OR: [...(filters.OR || []), ...(newFilters.OR || [])],
		}
		return mergedFilters
	}

	const mergeAllFilters = (filters) => {
		if (filters.length === 0) {
			return {}
		}

		return filters.reduce((mergedFilter, currentFilter) => {
			return mergeFilters(mergedFilter, currentFilter)
		}, {})
	}

	const buildQueryFilters = (activeFilters) => {
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

		return filters
	}

	useEffect(() => {
		setQueryFilters(buildQueryFilters(activeFilters))
	}, [activeFilters])

	// Convert the query object into an array of filter options
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
						where,
						field,
						operator,
						value,
					})
				})
			})
			setActiveFilters(formattedFilters)
		}
		return formattedFilters
	}
	const buildUserFilters = (currentUser, filterUser, filterTeam) => {
		return {
			AND: [
				...(filterUser && currentUser?.id
					? [{ user_id: { eq: currentUser?.id } }]
					: []),
				...(filterTeam && currentUser?.team_id
					? [{ team_id: { eq: currentUser?.team_id } }]
					: []),
			],
		}
	}

	useEffect(() => {
		if (query?.filters?.length >= 0) {
			formatFilterArray(query?.filters)
		}
	}, [query?.filters?.length])

	return {
		filter,
		findFilter,
		showFilterModal,
		setShowFilterModal,
		handleOpenFilterModal,
		handleCloseFilterModal,
		handleAddFilter,
		queryFilters,
		activeFilters,
		setActiveFilters,
		findDuplicateFilter,
		findDuplicateFilterIndex,
		mergeFilters,
		mergeAllFilters,
		buildUserFilters,
		buildQueryFilters,
	}
}

export default useFilters
