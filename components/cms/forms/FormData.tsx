'use client'

import React, { useEffect, useState } from 'react'
import { Form } from '../..'
import { useAlerts, useForms, useContacts } from '../../../hooks'
import { HeadingProps } from '../../../types'

export type FormDataProps = HeadingProps & {
	formId: number
  buttonText?: string 
}

const FormData: React.FC<FormDataProps> = (props) => {

	const { 
    buttonText,
    formId, 
  } = props || {}

	const { loading, form, findForm } = useForms()

  const { showAlertSuccess } = useAlerts()

	const {
    errors,
		loading: responseLoading,
		contact,
		handleChange,
		updateContact,
		removeAttachment,
		addAttachment,
		submitForm,
	} = useContacts({
		formId,
	})

	const handleSubmit = async () => {
		let resp
		if (contact?.id) {
			resp = await updateContact({
				...contact,
				form_id: form?.id,
			})
		} else {
			resp = await submitForm(contact)
		}
		if (resp?.id) {
			showAlertSuccess('Form submitted successfully')
		}
	}

	const handleRemove = (name: string) => {
		removeAttachment(contact?.id, name)
	}

	const handleAddAttachment = (name: string, attachmentId: number) => {
		addAttachment(contact?.id, name, attachmentId)
	}

	useEffect(() => {
		if (formId) {
			findForm(formId)
		}
	}, [formId])

	return (		
    <Form
      errors={ errors }
      loading={loading || responseLoading}
      resource={contact}
      //@ts-ignore
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      fields={form?.questions}
      handleRemove={handleRemove}
      handleRemoveAttachment={handleRemove}
      handleAddAttachment={handleAddAttachment}
      buttonText={buttonText}
    />
	)
}

export default FormData
