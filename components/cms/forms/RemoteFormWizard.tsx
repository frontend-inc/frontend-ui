import React, { useEffect } from 'react'
import { useFields } from '../../../hooks'
import { FormWizard, Loader } from '../../../components'
import { FormWizardProps } from '../../../components/cms/forms/FormWizard'

export type RemoteFormWizardProps = FormWizardProps & {
  url: string
}

const RemoteFormWizard: React.FC<RemoteFormWizardProps> = (props) => {

  const { 
    url, 
    ...rest 
  } = props || {}

  const {
    loading,
    fetchFormFields,
    formFields 
  } = useFields({
    url 
  })

  useEffect(() => {
    if(url){
      fetchFormFields()
    }
  }, [url])

  if(!formFields){
    return <Loader loading/>;
  }
  return(
    <FormWizard 
      { ...rest }
      url={url}
      fields={formFields}
    />
  )
}

export default RemoteFormWizard 