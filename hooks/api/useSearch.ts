'use client'

import React, { useEffect, useState } from 'react'
import { useResourceContext } from 'frontend-js'
import { SortOptionType, SyntheticEventType } from '../../types'
import { formatFilterArray } from '../../helpers'

const useSearch = (props) => {
	const { query: defaultQuery = { filters: []} } = props

	const {
		loading,
		delayedLoading,
		resources,
		query,
		setQuery,
		findMany,
		reloadMany,
		page,
		numPages,
		loadMore,
	} = useResourceContext()

	const [activeFilters, setActiveFilters] = useState([])
	const [keywords, setKeywords] = useState('')
	const [location, setLocation] = useState('')

// Finds the index of a filter that has the exact same name, operator, and value.
const findExactFilterIndex = (filters, filter) => {
    const { name, operator, value } = filter || {}
    return filters.findIndex(
      (f) => f.name == name && f.operator == operator && f.value == value
    )
  }

  // Removes all filters that share the same name and operator (regardless of value)
  const removeDuplicateNameOperatorFilters = (filters, filter) => {
    return filters.filter((f) => f.name !== filter.name || f.operator !== filter.operator)
  }

  const handleToggleFilter = (filter) => {
    let currentFilters = buildQueryFilters(activeFilters || [])
    let exactIndex = findExactFilterIndex(activeFilters, filter)
    let updatedFilters;
    if (exactIndex > -1) {
      // The exact filter is present, so we remove it (toggling off)
      updatedFilters = currentFilters.filter((f, index) => index !== exactIndex)
    } else {
      // No exact match. We need to ensure only one filter with the same name/operator.
      // Remove any existing filters with the same name & operator.
      updatedFilters = removeDuplicateNameOperatorFilters(currentFilters, filter)
      // Add the new filter
      updatedFilters = [...updatedFilters, filter]
    }
    // Convert back to the desired query format (assuming buildQueryFilters works both ways)
    let queryFilters = buildQueryFilters(updatedFilters)

    findMany({
      ...defaultQuery,
      filters: [
        ...defaultQuery?.filters,
        ...queryFilters, 
      ],
      keywords: '',
      page: 1,
    })
  }

	const isBlank = (value) => {
		return (
			value === '' ||
			value == undefined ||
			value == null ||
			(Array.isArray(value) && value.length === 0)
		)
	}

	const buildQueryFilters = (filters) => {		
		return filters
			.filter((filter) => !isBlank(filter?.value))
			.map((filter) => {
				let { name, operator, value } = filter
				return { [name]: { [operator]: value } }
			})		
	}

	const handleKeywordChange = (ev: SyntheticEventType) => {
		setKeywords(ev.target.value)
	}

	const handleLocationChange = (ev: SyntheticEventType) => {
		setLocation(ev.target.value)
	}

	const handleSearch = (keywords = '', location = '') => {
		let searchQuery = {
			...query,
			...defaultQuery,
      filters: [
        ...(query.filters || []),
        ...(defaultQuery.filters || [])
      ],
			keywords: keywords,
			page: 1,
		}
		if (location?.length > 0) {
			searchQuery = {
				...searchQuery,
				location: location,
			}
		} else {
			searchQuery = {
				...searchQuery,
				location: null,
			}
		}
		findMany(searchQuery)
	}

	const handleSortBy = (field: SortOptionType) => {
		findMany({
			...query,
			sort_by: field?.name,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
	}

  useEffect(() => {
    setActiveFilters(formatFilterArray(query?.filters))
  }, [query?.filters])

	return {
		loading,
		delayedLoading,
		resources,
		query,
		findMany,
		reloadMany,
		page,
		numPages,
		loadMore,
		keywords,
		setKeywords,
		handleKeywordChange,
		location,
		setLocation,
		handleLocationChange,
		handleSearch,
		handleSortBy,
		handleSortDirection,
		activeFilters,
		setActiveFilters,
		handleToggleFilter,
		handleClearFilters,
	}
}

export default useSearch
