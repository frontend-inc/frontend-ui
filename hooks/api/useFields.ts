import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'

type UseFieldsParams = {
	url: string
}

const useFields = (props: UseFieldsParams) => {
	const { url } = props || {}

	const { 
    loading,
    findMany,
    resources: formFields 
  } = useResource({
		url: `${url}/form_fields`,
    name: 'field'
	})
  
	useEffect(() => {
		if (url) {
			findMany({})
		}
	}, [url])

	return {
		formFields,
	}
}

export default useFields
