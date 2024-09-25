import React, { useEffect, useState } from 'react'
import { ResourceForm } from '../../../components'
import { ResourceFormProps } from '../../../components/cms/resources/ResourceForm'
import { useFormBuilder } from '../../../hooks'
import { FormFieldType } from '../../../types'

type AdminFormResponseEditProps = ResourceFormProps & {
  formId: string 
}

const AdminFormResponseEdit: React.FC<AdminFormResponseEditProps> = (props) => {

  const { formId } = props || {}

  const { loading, form, findForm } = useFormBuilder()

  const [fields, setFields] = useState<FormFieldType[]>([])

  useEffect(() => {
    if(formId){
      findForm(formId)
    }
  }, [formId])

  useEffect(() => {
    if(form?.id){
      let baseFields = [
        { name: 'name', label: 'Name', variant: 'string' },
        { name: 'email', label: 'Email', variant: 'string' },
      ]
      let formFields = form?.questions?.map((question) => ({
        label: question.title,
        name: question.name,
        variant: question.variant,
      }))
      setFields([
        ...baseFields,
        ...formFields        
      ])
    }
  }, [form])


	return <ResourceForm {...props} fields={fields} />
}

export default AdminFormResponseEdit
