import React from 'react'
import { RemoteAutosuggest } from '../../../components'
import { Box, Stack, Typography } from '@mui/material'

type DataReferenceFormProps = {
  errors?: any
  url: string
  resource: any
  handleChange: (ev: any) => void
}

const DataReferenceForm: React.FC<DataReferenceFormProps> = (props) => {

  const {     
    errors,    
    url,
    resource,
    handleChange,
  } = props || {}


  return(
    <Stack py={2} spacing={2}>      
      <RemoteAutosuggest        
        errors={errors}
        name={"id"}
        label="Search"
        value={resource?.id}
        displayField="title"
        direction={"row"}
        url={url}
        placeholder={"Select"}
        handleChange={handleChange}
        defaultQuery={{          
          current_user: true,          
        }}
      />      
    </Stack>
  )
}

export default DataReferenceForm