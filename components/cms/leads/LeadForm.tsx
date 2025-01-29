'use client'

import React from 'react'
import { Container, Form } from '../../../components'
import { useContacts, useNavigate } from '../../../hooks'
import { toast } from 'sonner'
import { buildFormFields } from '../../../helpers'

export type LeadFormProps = {
	buttonText?: string
	href?: string
	url?: string
	path?: string
	handleClick?: () => void
	fieldName?: boolean
	fieldPhone?: boolean
	fieldCompany?: boolean
	fieldReason?: boolean
	fieldMessage?: boolean
	reasonOptions?: string[]
  className?: string
}

const LeadForm: React.FC<LeadFormProps> = (props) => {
	const {
		fieldName,
		fieldPhone,
		fieldCompany,
		fieldReason,
		reasonOptions = [],
		fieldMessage,
		buttonText = 'Submit',
		url,
		path,
    className
	} = props || {}

	const metafields = buildFormFields({
		fieldName,
		fieldPhone,
		fieldCompany,
		fieldReason,
		fieldMessage,
		reasonOptions,
	})

	const {
		errors,
		delayedLoading,
		contact,
		setContact,
		handleChange,
		createContact,
	} = useContacts()

	const onClick = useNavigate({
		url,
		path,
	})

	const handleSubmit = async () => {
		if (!contact?.email) {
			toast('Please enter your email address')
			return
		}
		let resp = await createContact({
			...contact,
			source: 'lead',
		})
		if (resp?.id) {
			setContact({})
			toast('Thank you for submitting your information!')
			if (onClick) {
				onClick()
			}
		}
	}

	return (
		<Container maxWidth="md" className={className}>
			<Form
				loading={delayedLoading}
				fields={[
					{
						label: 'Email',
						name: 'email',
						placeholder: 'Email',
						variant: 'string',
					},
					...metafields,
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

export default LeadForm
