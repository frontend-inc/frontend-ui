'use client'

import React from 'react'
import { useResource } from 'frontend-js'
import { useApp } from '..'

const useProducts = () => {
	const { apiUrl } = useApp()

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: product,
		resources: products,
		findOne: findProduct,
		findMany: findProducts,
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
		reloadOne: reloadProduct,
		reloadMany: reloadProducts,
		setResource: setProduct,
		setResources: setProducts,
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/shop/products`,
		name: 'product',
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
		product,
		products,
		findProduct,
		findProducts,
		loadMore,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadProduct,
		reloadProducts,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		setProduct,
		setProducts,
		startIndex,
		endIndex,
	}
}

export default useProducts
