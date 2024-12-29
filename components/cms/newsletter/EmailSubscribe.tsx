'use client'

import React from 'react'
import { EmailSubscribeInput } from '../../../components'
import { useContacts } from '../../../hooks'
import { toast } from 'sonner'

export type EmailSubscribeProps = {
  label?: string
	buttonText?: string
	href?: string
	handleClick?: () => void
	direction?: string
  size?: 'sm' | 'md' | 'lg'
}

// Call To Action
const EmailSubscribe: React.FC<EmailSubscribeProps> = (props) => {
	const { size='lg', label, buttonText = 'Subscribe' } = props || {}

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
      size={size}
      loading={delayedLoading}      
      errors={errors}
      label={ label }
      name='email'
      value={contact.email}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText={buttonText}
    />		
	)
}

export default EmailSubscribe
