import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { TypographyVariantsType } from '../../../types'
import { TextInput, IconLoading } from '../../../components'
import { useResource } from 'frontend-js'
import { useAlerts } from '../../../hooks'

export type EmailSignupProps = {
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
const EmailSignup: React.FC<EmailSignupProps> = (props) => {
	const { showAlertSuccess } = useAlerts()
	const { label, title, description, buttonText = 'Subscribe' } = props || {}

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
		let resp = await create(contact)
		if (resp?.id) {
			setContact({})
			showAlertSuccess('Thank you for subscribing!')
		}
	}

	return (
		<Box sx={sx.root}>
			<Stack sx={sx.content} direction="column" spacing={1}>
				{label && (
					<Typography variant={'caption'} color="text.secondary" sx={sx.label}>
						{label}
					</Typography>
				)}
				{title && (
					<Typography variant={'h6'} color="text.primary" sx={sx.title}>
						{title}
					</Typography>
				)}
				{description && (
					<Typography
						variant="body1"
						color="text.secondary"
						sx={sx.description}
					>
						{description}
					</Typography>
				)}
				<Stack sx={sx.actions} direction="row" spacing={0}>
					<TextInput
						errors={errors}
						name="email"
						value={contact?.email}
						handleChange={handleChange}
						placeholder="Enter your email"
						type="email"
						styles={sx.input}
					/>
					<Button
						sx={sx.button}
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						startIcon={<IconLoading loading={delayedLoading} />}
					>
						{buttonText}
					</Button>
				</Stack>
			</Stack>
		</Box>
	)
}

export default EmailSignup

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
	actions: {
		pt: 2,
		textAlign: 'center',
		width: '100%',
		maxWidth: 420,
	},
	input: {
		'& .MuiInputBase-input': {
			borderRadius: (theme) =>
				`${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
		},
	},
	button: {
    boxShadow: 1,
		minWidth: 120,
		borderRadius: (theme) =>
			`0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
	},
}
