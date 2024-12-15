'use client'

import React, { useState } from 'react'
import { EmailSubscribeInput } from '../../../components'
import { useKlaviyo } from '../../../hooks'
import { toast } from 'sonner'
import { SyntheticEventType } from '../../../types'

export type KlaviyoSubscribeProps = {
	listId: string
	apiKey: string
	buttonText?: string
}

const KlaviyoSubscribe: React.FC<KlaviyoSubscribeProps> = (props) => {
	const { listId, apiKey, buttonText = 'Subscribe' } = props || {}

	const { loading, handleSubmit } = useKlaviyo({
		apiKey,
	})

	const [email, setEmail] = useState('')

	const handleFormSubmit = async () => {
		if (!email || !email?.includes('@')) {
			return toast.error('Please enter a valid email')
		}
		if (!listId) {
			return toast.error('Please enter a klaviyo list ID')
		}
		if (!apiKey) {
			return toast.error('Please enter your public klaviyo API key')
		}
		try {
			await handleSubmit({
				email,
				listId,
			})
			toast('You have been subscribed to our newsletter!')
		} catch (e) {
			console.log('Error', e)
		}
	}

	const handleChange = (ev: SyntheticEventType) => {
		setEmail(ev.target.value)
	}

	return (
    <EmailSubscribeInput
      loading={loading}
      errors={[]}
      name='email'
      value={email}
      placeholder='Enter your email'
      handleChange={handleChange}
      handleSubmit={handleFormSubmit}
      buttonText={buttonText}
    />
	)
}

export default KlaviyoSubscribe
