'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../../core'
import { TextInput, IconLoading } from '../..'
import { useMailChimpForm } from 'use-mailchimp-form'
import { useToast } from '../../../hooks'

export type MailchimpSubscribeProps = {
	formId: string
	buttonText?: string
}

const MailchimpSubscribe: React.FC<MailchimpSubscribeProps> = (props) => {
	const { formId, buttonText = 'Subscribe' } = props || {}

	const { loading, error, success, message, handleSubmit } =
		useMailChimpForm(formId)

	const { showAlertSuccess } = useToast()

	const [email, setEmail] = useState('')

	const handleFormSubmit = async () => {
		if (!email || !email?.includes('@')) {
			return showAlertSuccess('Please enter a valid email')
		}
		if (!formId) {
			return showAlertSuccess('Please enter a mailchimp form ID')
		}
		handleSubmit({
			EMAIL: email,
		})
	}

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.target.value)
	}

	useEffect(() => {
		if (message) {
			showAlertSuccess(message)
		}
	}, [message, showAlertSuccess])

	return (
		<div className="py-2 w-full flex flex-col items-center justify-center">
			<div className="flex flex-row max-w-[400px]">
				<TextInput
					direction="row"
					placeholder="Enter email..."
					name="EMAIL"
					value={email}
					handleChange={handleChange}
					className="rounded-r-none"
				/>
				<Button
					color="secondary"
					onClick={handleFormSubmit}
					loading={loading}
					className="min-w-[120px] rounded-l-none"
				>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default MailchimpSubscribe
