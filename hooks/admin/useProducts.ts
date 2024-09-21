import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

const useProducts = () => {
	const { apiUrl } = useAdmin()
  const { api } = useApi()

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
		update: updateProduct,
		updateMany: updateProducts,
		create: createProduct,
		save: saveProduct,
		destroy: deleteProduct,
		deleteMany: deleteProducts,
		loadMore,
		publish,
		unpublish,
		handleChange,
		handleChangePage,
		updatePositions,
		addAttachment,
		removeAttachment,
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
    loadingWrapper
	} = useResource({
		url: `${apiUrl}/products`,
		name: 'product',
	})

  const generateAiProducts = async () => {
    return loadingWrapper(() => 
      api.post(`${apiUrl}/products/generate_ai_products`)
    )
  }

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
		saveProduct,
		updateProduct,
		updateProducts,
		createProduct,
		deleteProduct,
		deleteProducts,
    generateAiProducts,

		loadMore,
		publish,
		unpublish,
		addAttachment,
		removeAttachment,
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
		updatePositions,
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
