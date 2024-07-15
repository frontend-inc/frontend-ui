import React, { useContext } from 'react'
import { ApiContext } from 'frontend-js'
import useSWR from 'swr'

type UseFetchSortParams = {
	url: string
}

const useFetchSort = (props: UseFetchSortParams) => {
	const { url } = props || {}
  const { api } = useContext(ApiContext) as any 

  const fetcher = (url: string) => api.get(url)
  
  const { isLoading, data, error } = useSWR(`${url}/sort_fields`,fetcher)

	return {		
    loading: isLoading,
    errors: error,
    fields: data?.data
	}
}

export default useFetchSort
