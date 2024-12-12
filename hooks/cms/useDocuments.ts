'use client'

import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { useApp } from '../../hooks'

const useDocuments = () => {
	const { apiUrl } = useApp()
	const { api } = useApi()

	const apiParams = {
		url: `${apiUrl}/cms/documents`,
		name: 'document',
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
		findOne: findDocument,
		findMany: findDocuments,
		update: updateDocument,
		updateMany: updateDocuments,
		create: createDocument,
		createMany: createDocuments,
		save: saveDocument,
		destroy: deleteDocument,
		deleteMany: deleteDocuments,
		loadMore,
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
		reloadOne: reloadDocument,
		reloadMany: reloadDocuments,
		setResource: setDocument,
		setResources: setDocuments,
		startIndex,
		endIndex,
		paginate,
		loadingWrapper,
	} = useResource(apiParams)

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
		findDocument,
		findDocuments,
		saveDocument,
		updateDocument,
		updateDocuments,
		createDocument,
		createDocuments,
		deleteDocument,
		deleteDocuments,
		loadMore,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadDocument,
		reloadDocuments,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setDocument,
		setDocuments,
		startIndex,
		endIndex,
	}
}

export default useDocuments
