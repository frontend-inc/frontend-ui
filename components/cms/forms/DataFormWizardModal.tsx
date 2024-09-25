import React, { useState, useEffect } from 'react'
import { 
  Icon,
  FormCard,
  FormWizardModal,
} from '../..'
import { Avatar, Box } from '@mui/material'
import { useForms, useFormResponse } from '../../../hooks'
import { HeadingProps } from '../../../types'

export type DataFormWizardProps = HeadingProps &{
  formId: number
  handleSuccess?: (resource: any) => void
}

const DataFormWizard: React.FC<DataFormWizardProps> = (props) => {

  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {     
    formId, 
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

  const handleSuccess = () => {
    setOpen(false)
    setSubmitted(true)
  }

  const handleSubmit = async () => {
    let resp;
    if(formResponse?.id){
      resp = await updateFormResponse(formResponse)
    }else{
      resp = await createFormResponse(formResponse)
    }
    if(resp?.id){
      handleSuccess()
      setOpen(false)
      setSubmitted(true)
    }
  }

  const handleRemove = (name: string) => {
    removeAttachment(formResponse?.id, name)
  }

  const handleAddAttachment = (name: string, attachmentId: number) => {
    addAttachment(formResponse?.id, name, attachmentId)
  }  

  const handleResetForm = () => {
    setFormResponse({})
    setOpen(false)
    setSubmitted(false)
  }

  useEffect(() => {
    if (formId) {
      findForm(formId)
    }
  }, [formId])

  return(
    <Box sx={ sx.root }>
      { !submitted ? (
        <FormCard 
          image={ form?.image?.url }
          title={ form?.title }
          description={ form?.description }
          buttonText={ form?.button_text || 'Get Started' }
          handleClick={ () => setOpen(true) }
        />        
      ):(
        <FormCard 
          checkMark
          title={ form?.end_title }
          description={ form?.end_description }
          buttonText={ form?.end_button_text }
          handleClick={ handleResetForm }
        /> 
      )}
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
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    bgcolor: 'primary.main',
  }
}