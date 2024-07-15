import React, { useEffect, useState } from 'react'
import { useQuery } from 'frontend-js'

type UseFieldsParams = {
	url: string
}

const useFields = (props: UseFieldsParams) => {
	const { url } = props || {}

	const [formFields, setFormFields] = useState([])

  const { resources: dataFormFields } = useQuery({
    url: `${url}/form_fields`,
    query: {}
  })

  useEffect(() => {
    if(dataFormFields){
      setFormFields(dataFormFields)
    }
  }, [dataFormFields])

	return {		
    formFields,		 
	}
}

export default useFields
