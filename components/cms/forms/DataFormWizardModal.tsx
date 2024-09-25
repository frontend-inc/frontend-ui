import React, { useState, useEffect } from 'react'
import { 
  FormWizard, 
  FormWizardModal
} from '../..'
import { Box, Button } from '@mui/material'
import { useForms, useFormResponse } from '../../../hooks'

export type DataFormWizardProps = {
  buttonText?: string
  formId: number
  handleSuccess?: (resource: any) => void
}

const DataFormWizard: React.FC<DataFormWizardProps> = (props) => {

  const [open, setOpen] = useState(false)

  const { 
    formId, 
    buttonText="Start",    
    handleSuccess 
  } = props || {}

  const { 
    loading,
    form,
    findForm, 
  } = useForms()

  const {
    loading: responseLoading,
    formResponse,
    setFormResponse,    
    handleChange,
    createFormResponse,
    updateFormResponse,
    removeAttachment,
    addAttachment,     
  } = useFormResponse({
    formId
  })

  const handleSubmit = async () => {
    let resp;
    if(formResponse?.id){
      resp = await updateFormResponse(formResponse)
    }else{
      resp = await createFormResponse(formResponse)
    }
    if(resp?.id && handleSuccess){
      handleSuccess(resp)
    }
  }

  const handleRemove = (name: string) => {
    removeAttachment(formResponse?.id, name)
  }

  const handleAddAttachment = (name: string, attachmentId: number) => {
    addAttachment(formResponse?.id, name, attachmentId)
  }  

  useEffect(() => {
    if (formId) {
      findForm(formId)
    }
  }, [formId])

  return(
    <Box sx={ sx.root }>
    <Button 
      onClick={() => setOpen(true)}
      variant="contained"
      color="primary"
      size="large"
    >
      { buttonText }
    </Button>
    <FormWizardModal 
      open={ open }
      handleClose={() => setOpen(false)}
      loading={ loading || responseLoading }
      resource={ formResponse }
      setResource={ setFormResponse }
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }      
      fields={ form?.questions }   
      handleRemove={ handleRemove }   
      handleRemoveAttachment={ handleRemove }
      handleAddAttachment={ handleAddAttachment }
    /> 
    </Box>
  )
}

export default DataFormWizard

const sx = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  }
}