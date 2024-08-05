import React, { useContext } from 'react'
import { ApiContext } from 'frontend-js'
import useSWR from 'swr'

type UseFetchFormParams = {
	url: string
}

const useFetchForm = (props: UseFetchFormParams) => {
	const { url } = props || {}
	const { api } = useContext(ApiContext) as any

	const fetcher = (url: string) => api.get(url)
	const { isLoading, data, error } = useSWR(`${url}/form_fields`, fetcher)

	return {
		loading: isLoading,
		errors: error,
		fields: data?.data,
	}
}

export default useFetchForm
