'use client'

import React from 'react'
import { useResource, useApi } from 'frontend-js'
import { useAdmin } from '..'

type UseAdminQuestionParams = {
  formId: string | number 
}

const useAdminQuestions = (params: UseAdminQuestionParams) => {

  const { formId } = params || {}

	const { apiUrl } = useAdmin()
	const { api } = useApi()

	const url = `${apiUrl}/forms/${formId}/questions`
	const apiParams = {
		url,
		name: 'question',
	}

	const {
		loading,
		delayedLoading,
		loaded,
		errors,
		empty,
		editing,
		isValid,
		resource: question,
		resources: questions,
		findOne: findQuestion,
		findMany: findQuestions,
		update: updateQuestion,
		updateMany: updateQuestions,
		create: createQuestion,
		save: saveQuestion,
		destroy: deleteQuestion,
		deleteMany: deleteQuestions,
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
		reloadOne: reloadQuestion,
		reloadMany: reloadQuestions,
		setResource: setQuestion,
		setResources: setQuestions,
		startIndex,
		endIndex,
		paginate,
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
		question,
		questions,
		findQuestion,
		findQuestions,
		saveQuestion,
		updateQuestion,
		updateQuestions,
		createQuestion,
		deleteQuestion,
		deleteQuestions,
		loadMore,
		publish,
		unpublish,
		addAttachment,
		removeAttachment,
		handleChange,
		handleChangePage,
		query,
		setQuery,
		reloadQuestion,
		reloadQuestions,
		page,
		numPages,
		perPage,
		totalCount,
		updatePositions,
		sortBy,
		sortDirection,
		handleSort,
		setQuestion,
		setQuestions,
		startIndex,
		endIndex,
	}
}

export default useAdminQuestions
