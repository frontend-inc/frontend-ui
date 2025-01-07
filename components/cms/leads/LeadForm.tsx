'use client'

import React from 'react'
import { Container, Form } from '../../../components'
import { useContacts, useNavigate } from '../../../hooks'
import { toast } from 'sonner'
import { buildFormMetafields } from '../../../helpers'

export type LeadFormProps = {
	buttonText?: string
	href?: string
	url?: string
	path?: string
	handleClick?: () => void
  enableName?: boolean
	enablePhone?: boolean
	enableCompany?: boolean
	enableReason?: boolean
	enableMessage?: boolean
	reasonOptions?: string[]
}

const LeadForm: React.FC<LeadFormProps> = (props) => {
	const {    
    enableName,
		enablePhone,
		enableCompany,
		enableReason,
		reasonOptions = [],
		enableMessage,
		buttonText = 'Submit',
		url,
		path,
	} = props || {}

	const metafields = buildFormMetafields({
    enableName,
		enablePhone,
		enableCompany,
		enableReason,
		enableMessage,
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
		if (!contact?.email || !contact?.name) {
			toast('Please fill out all required fields')
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
		<Container maxWidth="md">
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
