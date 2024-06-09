import React, { useState, useEffect } from 'react'
import { useDocuments, useAuth } from 'frontend-js'
import { useFilters } from '../../hooks'
import { 
  SortOptionType,
  FilterOptionType 
} from '../../types'

const useSearch = (props) => {

  const {
		url,
		perPage = 20,
    user,
		filterUser = false,
		filterTeam = false,
		query: defaultQuery = {},
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
	} = useDocuments({
		url,
	})

	const [keywords, setKeywords] = useState('')

	const handleKeywordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords: string) => {
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
		queryFilters,
		activeFilters,
		setActiveFilters,
		handleAddFilter,
		mergeAllFilters,
		buildUserFilters,
	} = useFilters({
		query,
	})

	// Filter methods
	const handleClearFilters = () => {
		setActiveFilters([])
		findMany({
			filters: mergeAllFilters([defaultQuery?.filters, currentUserFilter]),
			sort_by: 'id',
			sort_direction: 'desc',
			keywords: '',
			page: 1,
			per_page: perPage,
		})
	}

	const handleFilter = (filter: FilterOptionType) => {
		handleAddFilter(filter)
	}

	const userFilter = buildUserFilters(
		user,
		filterUser,
		filterTeam
	)

	useEffect(() => {
		if (url && user) {
			findMany({
				...defaultQuery,
				filters: mergeAllFilters([
					defaultQuery?.filters,
					userFilter,
					queryFilters,
				]),
				per_page: perPage,
			})
		}
	}, [
		url,
		perPage,
    user,
		filterUser,
		filterTeam,
		queryFilters,
		defaultQuery,
	])

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