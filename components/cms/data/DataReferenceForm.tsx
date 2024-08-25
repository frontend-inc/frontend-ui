import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { Stack } from '@mui/material'
import { QueryParamsType } from 'frontend-js'

type DataReferenceFormProps = {
  errors?: any
  url: string
  resource: any
  handleChange: (ev: any) => void
  query?: QueryParamsType
}

const DataReferenceForm: React.FC<DataReferenceFormProps> = (props) => {

  const {     
    errors,    
    url,
    resource,
    handleChange,  
    query  
  } = props || {}


  return(
    <Stack py={2} spacing={2}>      
      <RemoteAutosuggest        
        errors={errors}
        name={"id"}
        label="Add"
        value={resource?.id}
        displayField="title"
        direction={"row"}
        url={url}
        placeholder={"Select"}
        handleChange={handleChange}
        defaultQuery={query}
      />      
    </Stack>
  )
}

export default DataReferenceForm