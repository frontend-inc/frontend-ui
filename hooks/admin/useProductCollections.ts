import React from 'react'
import { useResource, useApi } from 'frontend-js'
import { useAdmin } from '..'

const useProductCollections = () => {
	const { apiUrl } = useAdmin()
  const { api } = useApi()

  const url = `${apiUrl}/product_collections`
  const apiParams = {
		url,
		name: 'product_collection',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: document,
		resources: documents,
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
	} = useResource(apiParams)

  const addProducts = async (
		productCollectionId: number ,
		productIds: number[]
	) => {
		return await loadingWrapper(() =>
			api.addProducts(productCollectionId, productIds, {
        url,
        name: 'products'
      })
		)
	}

	const removeProducts = async (productCollectionId: number, productIds: number[]) => {    
		return await loadingWrapper(() =>
			api.removeProducts(productCollectionId, productIds, {
        url,
        name: 'products'
      })
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
		document,
		documents,
		findProduct,
		findProducts,
		saveProduct,
		updateProduct,
		updateProducts,
		createProduct,
		deleteProduct,
		deleteProducts,
		loadMore,
		publish,
		unpublish,
				
    addProducts,
    removeProducts,    

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

export default useProductCollections
