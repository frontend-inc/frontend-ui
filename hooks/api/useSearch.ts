import React, { useState, useEffect } from 'react'
import { useQuery } from 'frontend-js'
import { useFilters } from '..'
import { 
  SortOptionType,
  FilterOptionType 
} from '../../types'

const useSearch = (props) => {

  const {
		url,
    query: defaultQuery = {},
		perPage = 20
	} = props

	const {
		loading,
		delayedLoading,
		resources,
		query,
		findMany,
		reloadMany,
		page,
		numPages,
		loadMore,
	} = useQuery()

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords='') => {
		findMany({
			...query,
			...defaultQuery,
			keywords: keywords,
			page: 1,
			per_page: perPage,
		})
	}

	const handleSortBy = (field: SortOptionType) => {
		findMany({
			...query,
			sort_by: field?.field,
		})
	}

	const handleSortDirection = (sortDirection: 'asc' | 'desc') => {
		findMany({
			...query,
			sort_direction: sortDirection,
		})
	}

	const {
		activeFilters,
		setActiveFilters,
		handleAddFilter,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
      ...defaultQuery,
			filters: defaultQuery?.filters,
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
			per_page: perPage
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
	}

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
    handleSearch,
    handleSortBy,
    handleSortDirection,
    activeFilters,
    handleFilter,
    handleClearFilters,    
  }
}

export default useSearch