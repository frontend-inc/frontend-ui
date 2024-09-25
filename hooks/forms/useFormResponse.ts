import React from 'react'
import { SyntheticEventType, useResource } from 'frontend-js'
import { useApp } from '..'

type UseFormResponseParams = {
  formId: number | string 
}

const useFormResponse = (params: UseFormResponseParams) => {
  const { formId } = params || {}
	const { apiUrl } = useApp()

	const url = `${apiUrl}/cms/forms/${formId}/form_responses`
	const apiParams = {
		url,
		name: 'form_response',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
    handleChange,
		resource: formResponse,
		resources: formResponses,
		findOne: findFormResponse,
		findMany: findFormResponses,
		update: updateFormResponse,
		updateMany: updateFormResponses,
		create: createFormResponse,
		save: saveFormResponse,
		destroy: deleteFormResponse,
		deleteMany: deleteFormResponses,
		loadMore,
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
		reloadOne: reloadFormResponse,
		reloadMany: reloadFormResponses,
		setResource: setFormResponse,
		setResources: setFormResponses,
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
		formResponse,
		formResponses,
		findFormResponse,
		findFormResponses,
		saveFormResponse,
		updateFormResponse,
		updateFormResponses,
		createFormResponse,
		deleteFormResponse,
		deleteFormResponses,
		loadMore,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadFormResponse,
		reloadFormResponses,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setFormResponse,
		setFormResponses,
		startIndex,
		endIndex,
    loadingWrapper 
	}
}

export default useFormResponse
