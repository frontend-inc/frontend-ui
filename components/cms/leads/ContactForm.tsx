'use client'

import React from 'react'
import { FormFieldType } from '../../../types'
import { Form } from '../..'
import { useResource } from 'frontend-js'
import { useToast } from '../../../hooks'

export type ContactFormProps = {
	buttonText?: string
	href?: string
	metafields?: FormFieldType[]
	handleClick?: () => void
}

// Call To Action
const ContactForm: React.FC<ContactFormProps> = (props) => {
	const { showAlertSuccess } = useToast()
	const { metafields = [], buttonText = 'Send Message' } = props || {}

	const {
		errors,
		delayedLoading,
		resource: contact,
		setResource: setContact,
		handleChange,
		create,
	} = useResource({
		name: 'contact',
		url: `/api/v1/contacts`,
	})

	const handleSubmit = async () => {
		let resp = await create({
			...contact,
			source: 'contact',
		})
		showAlertSuccess('Thank you for contacting us!')
		if (resp?.id) {
			setContact({})
			showAlertSuccess('Thank you for contacting us!')
		}
	}

	return (
    <div className="w-full border border-red-500">
      <Form
        loading={delayedLoading}
        fields={[
          {
            label: 'Name',
            name: 'name',
            placeholder: 'Full name',
            variant: 'string',
          },
          {
            label: 'Email',
            name: 'email',
            placeholder: 'Email',
            variant: 'string',
          },
          ...metafields,
          {
            label: 'Message',
            name: 'message',
            placeholder: 'Leave a message',
            variant: 'text',
          },
          {
            label: 'Join our newsletter',
            name: 'accepts_marketing',
            variant: 'boolean',
          },
        ]}
        resource={contact}
        handleChange={handleChange}
        errors={errors}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      />
    </div>
	)
}

export default ContactForm
