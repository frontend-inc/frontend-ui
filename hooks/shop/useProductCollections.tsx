'use client'

import React from 'react'
import { useResource } from 'frontend-js'
import { useApp } from '..'

const useProductCollections = () => {
	const { apiUrl } = useApp()

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: productCollection,
		resources: productCollections,
		findOne: findProductCollection,
		findMany: findProductCollections,
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
		reloadOne: reloadProductCollection,
		reloadMany: reloadProductCollections,
		setResource: setProductCollection,
		setResources: setProductCollections,
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/shop/product_collections`,
		name: 'product_collections',
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
		productCollection,
		productCollections,
		findProductCollection,
		findProductCollections,
		loadMore,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadProductCollection,
		reloadProductCollections,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		setProductCollection,
		setProductCollections,
		startIndex,
		endIndex,
	}
}

export default useProductCollections
