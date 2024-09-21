import React from 'react'
import { Box, Paper, Container } from '@mui/material'
import { FormFieldType, TypographyVariantsType } from '../../../types'
import { Heading, Form } from '../..'
import { useResource } from 'frontend-js'
import { useAlerts } from '../../../hooks'

export type ContactFormProps = {
	label?: string
	title: string
	description: string
	buttonText?: string
	textVariant?: TypographyVariantsType
	href?: string
  metafields?: FormFieldType[]
	handleClick?: () => void
}

// Call To Action
const ContactForm: React.FC<ContactFormProps> = (props) => {
	const { showAlertSuccess } = useAlerts()
	const {
		label,
		title,
		description,
		textVariant,
    metafields=[],
		buttonText = 'Send Message',
	} = props || {}

	const {
		errors,
		delayedLoading,
		resource: lead,
		setResource: setLead,
		handleChange,
		create,
	} = useResource({
		name: 'lead',
		url: `/api/v1/leads`,
	})

	const handleSubmit = async () => {
		let resp = await create(lead)
		if (resp?.id) {
			setLead({})
			showAlertSuccess('Thank you for contacting us!')
		}
	}

	return (
		<Box sx={sx.root}>
			<Container maxWidth="sm">
				<Heading
					label={label}
					title={title}
					description={description}
					textVariant={textVariant}
					textAlign="center"
				/>
				<Form 
          loading={delayedLoading}
          fields={[
            { label: 'Name', name: 'name', placeholder: 'Full name', variant: 'string' },
            { label: 'Email', name: 'email', placeholder: 'Email', variant: 'string' },
            ...metafields,
            { label: 'Message', name: 'message', placeholder: 'Leave a message', variant: 'text' },
          ]}
          resource={lead}
          handleChange={handleChange}
          errors={errors}
          handleSubmit={handleSubmit}
          buttonText={buttonText}
        />
			</Container>
		</Box>
	)
}

export default ContactForm

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
		alignItems: 'center',
	},
	label: {
		textAlign: 'center',
	},
	title: {
		textAlign: 'center',
		color: 'text.primary',
	},
	description: {
		color: 'text.secondary',
		textAlign: 'center',
		maxWidth: '600px',
	},	
  paper: {
    p: 3,
  }
}
