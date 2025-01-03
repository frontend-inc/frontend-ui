'use client'

import React, { useEffect, useState } from 'react'
import { EmailSubscribeInput } from '../../../components'
import { useMailChimpForm } from 'use-mailchimp-form'
import { toast } from 'sonner'
import { SyntheticEventType } from '../../../types'

export type MailchimpSubscribeProps = {
	formId: string
	buttonText?: string
}

const MailchimpSubscribe: React.FC<MailchimpSubscribeProps> = (props) => {
	const { formId, buttonText = 'Subscribe' } = props || {}

	const { loading, error, success, message, handleSubmit } =
		useMailChimpForm(formId)

	const [email, setEmail] = useState('')

	const handleFormSubmit = async () => {
		if (!email || !email?.includes('@')) {
			return toast('Please enter a valid email')
		}
		if (!formId) {
			return toast('Please enter a mailchimp form ID')
		}
		handleSubmit({
			EMAIL: email,
		})
	}

	const handleChange = (ev: SyntheticEventType) => {
		setEmail(ev.target.value)
	}

	useEffect(() => {
		if (message) {
			toast(message)
		}
	}, [message])

	return (
		<EmailSubscribeInput
			name="EMAIL"
			value={email}
			placeholder="Enter your email"
			handleChange={handleChange}
			buttonText={buttonText}
			handleSubmit={handleFormSubmit}
			loading={loading}
		/>
	)
}

export default MailchimpSubscribe
