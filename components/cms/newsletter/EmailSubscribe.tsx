'use client'

import React from 'react'
import { Button } from '../../../components'
import { InputBase } from '../..'
import { useContacts } from '../../../hooks'
import { Toaster, toast } from 'sonner'

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
		<>
			<div className="flex flex-row justify-center items-center">
				<div className="md:max-w-[360px] w-full p-1 flex flex-row justify-center items-center">
					<InputBase
						errors={errors}
						name="email"
						value={contact?.email}
						//@ts-ignore
						handleChange={handleChange}
						placeholder="Enter your email"
						type="email"
						className="rounded-l-md text-base h-[48px] md:min-w-[280px] rounded-r-none border-r-0"
						disableDebounce
					/>
					<Button
						size="lg"
						onClick={handleSubmit}
						className="rounded-l-none rounded-r-md text-base"
						loading={delayedLoading}
					>
						{buttonText}
					</Button>
				</div>
			</div>
		</>
	)
}

export default EmailSubscribe
