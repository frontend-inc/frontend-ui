import React from 'react'
import { Box, Stack, Button } from '../../../tailwind'
import { TypographyVariantsType } from '../../../types'
import { Heading, TextInput, IconLoading } from '../..'
import { useResource } from 'frontend-js'
import { useAlerts } from '../../../hooks'

export type EmailSubscribeProps = {
	label?: string
	title: string
	description: string
	buttonText?: string
	textVariant?: TypographyVariantsType
	href?: string
	handleClick?: () => void
	direction?: string
}

// Call To Action
const EmailSubscribe: React.FC<EmailSubscribeProps> = (props) => {
	const { showAlertSuccess } = useAlerts()
	const {
		label,
		title,
		description,
		textVariant,
		buttonText = 'Subscribe',
	} = props || {}

	const {
		errors,
		delayedLoading,
		resource: contact,
		setResource: setContact,
		handleChange,
		create,
	} = useResource({
		name: 'contact',
		url: `/api/v1/contacts`,
	})

	const handleSubmit = async () => {
		let resp = await create({
			...contact,
			source: 'newsletter',
			accepts_marketing: true,
		})
		if (resp?.id) {
			setContact({})
			showAlertSuccess('Thank you for subscribing!')
		}
	}

	return (
		<div className="flex flex-col space-y-1">
			<Heading
				label={label}
				title={title}
				description={description}
				textVariant={textVariant}
				textAlign="center"
			/>
        <div className="flex flex-row justify-center items center space-x-1">
          <TextInput
            errors={errors}
            name="email"
            value={contact?.email}
            handleChange={handleChange}
            placeholder="Enter your email"
            type="email"
            className="rounded-l-md rounded-r-none border-r-0"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="rounded-l-none rounded-r-md"
            loading={ delayedLoading }
          >
            {buttonText}
          </Button>
			  </div>
		</div>
	)
}

export default EmailSubscribe
