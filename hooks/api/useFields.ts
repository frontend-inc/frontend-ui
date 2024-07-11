import React, { useState, useEffect } from 'react'
import { useApi } from 'frontend-js'
import { useLoadingWrapper } from '../common'

type UseFieldParams = {
	contentType: string
}

const useFields = (props: UseFieldParams) => {
	const { api } = useApi()
	const { loading, loadingWrapper } = useLoadingWrapper()
	const { contentType } = props || {}

	const [filterFields, setFilterFields] = useState([])
	const [sortFields, setSortFields] = useState([])
	const [formFields, setFormFields] = useState([])
	const [displayFields, setDisplayFields] = useState([])

	const fetchFields = async () => {
		let resp = await loadingWrapper(() =>
			api.get(`/api/v1/cms/fields/${contentType}`)
		)
		if (resp?.data) {
			setFilterFields(resp.data.filterFields)
			setSortFields(resp.data.sortFields)
			setFormFields(resp.data.formFields)
			setDisplayFields(resp.data.displayFields)
		}
	}

	return {
		loading,
		fetchFields,
		filterFields,
		sortFields,
		formFields,
		displayFields,
	}
}

export default useFields
