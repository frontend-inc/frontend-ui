'use client'

import React from 'react'
import { EmailSubscribeInput } from '../../../components'
import { useContacts } from '../../../hooks'
import { toast } from 'sonner'

export type EmailSubscribeProps = {
	buttonText?: string
	href?: string
	handleClick?: () => void
	direction?: string
}

// Call To Action
const EmailSubscribe: React.FC<EmailSubscribeProps> = (props) => {
	const { buttonText = 'Subscribe' } = props || {}

	const {
		errors,
		delayedLoading,
		contact,
		createContact,
		setContact,
		handleChange,
	} = useContacts()

	const handleSubmit = async () => {
		let resp = await createContact({
			...contact,
			source: 'newsletter',
			accepts_marketing: true,
		})
		if (resp?.id) {
			setContact({})
			toast('Thank you for subscribing!')
		}
	}

	return (
    <EmailSubscribeInput 
      loading={delayedLoading}      
      errors={errors}
      name='email'
      value={contact.email}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText={buttonText}
    />		
	)
}

export default EmailSubscribe
