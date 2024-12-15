'use client'

import React, { useState } from 'react'
import { Button } from '../../../components'
import { TextInput } from '../..'
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
		<div className="py-2 w-full flex flex-col items-center justify-center">
			<div className="flex flex-row max-w-[400px]">
				<TextInput
					direction="row"
					placeholder={'Enter email...'}
					name="email"
					value={email}
					handleChange={handleChange}
					className="rounded-r-none"
				/>
				<Button
					color="secondary"
					onClick={handleFormSubmit}
					className="min-w-[120px] rounded-l-none"
					loading={loading}
				>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default KlaviyoSubscribe
