'use client'

import React from 'react'
import { EmailSubscribeInput } from '../../../components'
import { useContacts } from '../../../hooks'
import { toast } from 'sonner'
import { cn } from '@nextui-org/react'

export type EmailSubscribeProps = {
	label?: string
	buttonText?: string
	href?: string
	handleClick?: () => void
	direction?: string
	size?: 'sm' | 'md' | 'lg'
  className?: string
}

// Call To Action
const EmailSubscribe: React.FC<EmailSubscribeProps> = (props) => {
	const { size = 'lg', label, buttonText = 'Subscribe', className } = props || {}

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
    <div 
      className={cn(
        'flex w-full items-center justify-center', 
        className
      )}>
      <EmailSubscribeInput
        size={size}
        loading={delayedLoading}
        errors={errors}
        label={label}
        name="email"
        value={contact.email}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      />
    </div>
	)
}

export default EmailSubscribe
