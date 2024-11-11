'use client'

import React, { useEffect, useState } from 'react'
import { FormCard, FormWizardModal } from '../..'
import { useForms, useContacts } from '../../../hooks'
import { HeadingProps } from '../../../types'

export type FormDataWizardProps = HeadingProps & {
	formId: number
  title?: string
  description?: string  
  buttonText: string
  endButtonText: string
	handleSuccess?: (resource: any) => void
}

const FormDataWizard: React.FC<FormDataWizardProps> = (props) => {
	const [open, setOpen] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const { 
    formId, 
    buttonText,
    endButtonText,
    title,
    description 
  } = props || {}

	const { loading, form, findForm } = useForms()

	const {
		loading: responseLoading,
		contact,
		setContact,
		handleChange,
		updateContact,
		removeAttachment,
		addAttachment,
		submitForm,
	} = useContacts({
		formId,
	})

	const handleSuccess = () => {
		setOpen(false)
		setSubmitted(true)
	}

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
			handleSuccess()
			setOpen(false)
			setSubmitted(true)
		}
	}

	const handleRemove = (name: string) => {
		removeAttachment(contact?.id, name)
	}

	const handleAddAttachment = (name: string, attachmentId: number) => {
		addAttachment(contact?.id, name, attachmentId)
	}

	const handleResetForm = () => {
		setContact({})
		setOpen(false)
		setSubmitted(false)
	}

	useEffect(() => {
		if (formId) {
			findForm(formId)
		}
	}, [formId])

	return (
		<div className="container max-auto max-w-screen-lg">
			<div className="flex flex-col space-y-2">
				{!submitted ? (
					<FormCard
						image={form?.image?.url}
						title={form?.title}
						subtitle={form?.description}
						buttonText={buttonText}
						handleClick={() => setOpen(true)}
					/>
				) : (
					<FormCard
						checkMark
						title={title}
						subtitle={description}
						buttonText={endButtonText}
						handleClick={handleResetForm}
					/>
				)}
				<FormWizardModal
					open={open}
					handleClose={() => setOpen(false)}
					loading={loading || responseLoading}
					resource={contact}
					setResource={setContact}
          //@ts-ignore
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					fields={form?.questions}
					handleRemove={handleRemove}
					handleRemoveAttachment={handleRemove}
					handleAddAttachment={handleAddAttachment}
				/>
			</div>
		</div>
	)
}

export default FormDataWizard
