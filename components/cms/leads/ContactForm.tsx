'use client'

import React from 'react'
import { Container, Form } from '../../../components'
import { useContacts } from '../../../hooks'
import { toast } from 'sonner'
import { buildFormFields } from '../../../helpers'

export type ContactFormProps = {
	enablePhone?: boolean
	enableCompany?: boolean
	enableReason?: boolean
	reasonOptions?: string[]
	buttonText?: string
	href?: string
	handleClick?: () => void
  className?: string
}

// Call To Action
const ContactForm: React.FC<ContactFormProps> = (props) => {
	const {
		enablePhone,
		enableCompany,
		enableReason,
		reasonOptions = [],
		buttonText = 'Send Message',
    className
	} = props || {}

	const {
		errors,
		delayedLoading,
		contact,
		setContact,
		handleChange,
		createContact,
	} = useContacts()

	const metafields = buildFormFields({
		enablePhone,
		enableCompany,
		enableReason,
		reasonOptions,
	})

	const handleSubmit = async () => {
		if (!contact?.email || !contact?.name || !contact?.message) {
			toast('Please fill out all required fields')
			return
		}
		let resp = await createContact({
			...contact,
			source: 'contact',
		})
		if (resp?.id) {
			setContact({})
			toast('Thank you for contacting us!')
		}
	}

	return (
		<Container maxWidth="md" className={className}>
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
		</Container>
	)
}

export default ContactForm
