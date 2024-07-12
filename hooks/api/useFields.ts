import React, { useState, useEffect } from 'react'
import { useApi } from 'frontend-js'
import { useLoadingWrapper } from '../common'

type UseFieldsParams = {
	url: string
}

const useFields = (props: UseFieldsParams) => {
	const { api } = useApi()
	const { loading, loadingWrapper } = useLoadingWrapper()
	const { url } = props || {}

	const [filterFields, setFilterFields] = useState([])
	const [sortFields, setSortFields] = useState([])
	const [formFields, setFormFields] = useState([])
	const [displayFields, setDisplayFields] = useState([])

	const fetchFormFields = async () => {
		let resp = await loadingWrapper(() =>
			api.get(`${url}/form_fields`)
		)
		if (resp?.data) {
			setFormFields(resp.data)
		}
	}

  const fetchSearchFields = async () => {
		let resp = await loadingWrapper(() =>
			api.get(`${url}/search_fields`)
		)
		if (resp?.data) {
			setFilterFields(resp.data?.filterFields)
      setSortFields(resp.data?.sortFields)
		}
	}

  const fetchDisplayFields = async () => {
		let resp = await loadingWrapper(() =>
			api.get(`${url}/display_fields`)
		)
		if (resp?.data) {
			setDisplayFields(resp.data)
		}
	}


	return {
		loading,
    fetchSearchFields,
		fetchFormFields,
    fetchDisplayFields,    
		filterFields,
		sortFields,
		formFields,
		displayFields,
	}
}

export default useFields
