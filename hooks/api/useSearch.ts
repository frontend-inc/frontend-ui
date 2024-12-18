'use client'

import React, { useEffect, useState } from 'react'
import { useResourceContext } from 'frontend-js'
import { SortOptionType, SyntheticEventType } from '../../types'
import { formatFilterArray } from '../../helpers'

const useSearch = (props) => {
	const { query: defaultQuery = {} } = props

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

	const [queryFilters, setQueryFilters] = useState([])
	const [activeFilters, setActiveFilters] = useState([])
	const [keywords, setKeywords] = useState('')
	const [location, setLocation] = useState('')

	// Compare only the name and operator and override
  const findDuplicateFilterIndex = (filters, filter) => {
    const { name, operator } = filter || {}
		return filters.findIndex(
			  (f) => f.name === name && 
        f.operator === operator && 
        f.value === filter.value
		)
	}

  const removeDuplicateFilters = (filters, filter) => {
    return filters.filter((f) => {
      return f.name !== filter.name || f.operator !== filter.operator
    })
  }

	const handleAddFilter = (filter) => {
		let updatedFilters = [...activeFilters]
    updatedFilters = removeDuplicateFilters(updatedFilters, filter)

		let duplicateIndex = findDuplicateFilterIndex(activeFilters, filter)
		if (duplicateIndex > -1) {
			updatedFilters = updatedFilters?.filter((f, index) => index !== duplicateIndex)
		} else {
			//@ts-ignore
			updatedFilters = [...updatedFilters, filter]
		}
		setActiveFilters(updatedFilters)
		return updatedFilters
	}

	const isBlank = (value) => {
		return (
			value === '' ||
			value == undefined ||
			value == null ||
			(Array.isArray(value) && value.length === 0)
		)
	}

	const buildQueryFilters = (activeFilters) => {
		let filters = []
		activeFilters
			.filter((filter) => !isBlank(filter?.value))
			.forEach((filter) => {
				let { name, operator, value } = filter
				filters = [...filters, { [name]: { [operator]: value } }] as any
			})
		return filters
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
		findMany({
			...defaultQuery,
			filters: [...queryFilters, ...(defaultQuery?.filters || [])],
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
		})
	}, [queryFilters])

	useEffect(() => {
		setQueryFilters(buildQueryFilters(activeFilters))
	}, [activeFilters])

	useEffect(() => {
		if (defaultQuery?.filters?.length >= 0) {
			let filterArray = formatFilterArray(defaultQuery?.filters)
			setActiveFilters(filterArray)
		}
	}, [defaultQuery?.filters?.length])

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
		handleAddFilter,
		handleClearFilters,
	}
}

export default useSearch
