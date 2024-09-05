import React from 'react'
import { useApi, useResource } from 'frontend-js'
import { useAdmin } from '../../hooks'

type UseDocumentProps = {
	contentType: string | number
}

const useDocuments = (props: UseDocumentProps) => {
  const { apiUrl } = useAdmin()

	const { contentType } = props
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
		save: saveDocument,
		destroy: deleteDocument,
		deleteMany: deleteDocuments,
		publish,
		unpublish,
		handleChange,
		handleChangePage,
		updatePositions,
		addReferences,
		removeReferences,
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
		updateReferencePositions,
    reloadOne: reloadDocument,
    reloadMany: reloadDocuments,
		setResource: setDocument,
		setResources: setDocuments,
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/cms/${contentType}`,
		name: 'document',
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
		document,
		documents,
		findDocument,
		findDocuments,
		saveDocument,
		updateDocument,
		updateDocuments,
		createDocument,
		deleteDocument,
		deleteDocuments,
		publish,
		unpublish,
		addReferences,
		removeReferences,
		updateReferencePositions,
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
