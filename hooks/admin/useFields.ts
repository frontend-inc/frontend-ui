import React from 'react'
import { useResource } from 'frontend-js'
import { useAdmin } from '..'

type UseFieldParams = {
  collectionId: string | number 
}

const useFields = (props: UseFieldParams) => {
	const { apiUrl } = useAdmin()
  const { collectionId } = props || {}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: field,
		resources: fields,
		findOne: findField,
		findMany: findFields,
		update: updateField,
		updateMany: updateFields,
		create: createField,
		save: saveField,
		destroy: deleteField,
		deleteMany: deleteFields,
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
		reloadOne: reloadField,
		reloadMany: reloadFields,
		setResource: setField,
		setResources: setFields,
		startIndex,
		endIndex,
		paginate,
	} = useResource({
		url: `${apiUrl}/collections/${collectionId}/fields`,
		name: 'field',
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
		field,
		fields,
		findField,
		findFields,
		saveField,
		updateField,
		updateFields,
		createField,
		deleteField,
		deleteFields,
		loadMore,
		publish,
		unpublish,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadField,
		reloadFields,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setField,
		setFields,
		startIndex,
		endIndex,
	}
}

export default useFields
