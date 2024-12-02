'use client'

import React, { useEffect } from 'react'
import { Form, Heading } from '../..'
import { useForms, useContacts } from '../../../hooks'
import { HeadingProps } from '../../../types'
import { toast } from 'sonner'

export type FormDataProps = HeadingProps & {
	formId: number
	buttonText?: string
}

const FormData: React.FC<FormDataProps> = (props) => {
	const { buttonText, formId } = props || {}

	const { loading, form, findForm } = useForms()

	

	const {
		errors,
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
			setContact({})
			toast('Form submitted successfully')
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
		<div className="w-full flex flex-col space-y-4">
			<Heading
				title={form?.title}
				subtitle={form?.description}
				size="lg"
				textAlign="center"
			/>
			<Form
				errors={errors}
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
		</div>
	)
}

export default FormData
