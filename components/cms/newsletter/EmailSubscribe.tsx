import React from 'react'
import { Box, Stack, Button } from '@mui/material'
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
		<Box sx={sx.root}>
			<Stack sx={sx.content} direction="column" spacing={1}>
				<Heading
					label={label}
					title={title}
					description={description}
					textVariant={textVariant}
					textAlign="center"
				/>
				<Stack sx={sx.inputContainer} direction="row" spacing={0}>
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
					>
						{delayedLoading ? <IconLoading /> : buttonText}
					</Button>
				</Stack>
			</Stack>
		</Box>
	)
}

export default EmailSubscribe

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
	inputContainer: {
		textAlign: 'center',
		width: '100%',
		maxWidth: 420,
		display: 'flex',
		alignItems: 'flex-end',
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
		height: 42,
		borderRadius: (theme) =>
			`0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
	},
}
