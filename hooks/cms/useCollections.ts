'use client'

import React from 'react'
import { useResource } from 'frontend-js'
import { useApp } from '..'

const useCollections = () => {
	const { apiUrl } = useApp()

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: collection,
		resources: collections,
		findOne: findCollection,
		findMany: findCollections,
		loadMore,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		reloadOne: reloadCollection,
		reloadMany: reloadCollections,
		setResource: setCollection,
		setResources: setCollections,
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/cms/collections`,
		name: 'collections',
	})

	return {
		paginate,
		loading,
		loaded,
		delayedLoading,
		errors,
		empty,
		editing,
		isValid,
		collection,
		collections,
		findCollection,
		findCollections,
		loadMore,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadCollection,
		reloadCollections,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		setCollection,
		setCollections,
		startIndex,
		endIndex,
	}
}

export default useCollections
