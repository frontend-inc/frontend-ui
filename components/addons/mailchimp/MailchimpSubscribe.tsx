import React, { useEffect, useState } from 'react'
import { Stack, Button } from '@mui/material'
import { TextInput, IconLoading } from '../..'
import { useMailChimpForm } from 'use-mailchimp-form'
import { useAlerts } from '../../../hooks'

export type MailchimpSubscribeProps = {
	formId: string
	buttonText?: string
}

const MailchimpSubscribe: React.FC<MailchimpSubscribeProps> = (props) => {
	const { formId, buttonText = 'Subscribe' } = props || {}

	const { loading, error, success, message, handleSubmit } =
		useMailChimpForm(formId)

	const { showAlertSuccess } = useAlerts()

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
	}, [message])

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
			<Stack direction="row" spacing={0} sx={sx.form}>
				<TextInput
					direction="row"
					placeholder="Enter email..."
					name="EMAIL"
					value={email}
					handleChange={handleChange}
					styles={sx.input}
				/>
				<Button
					sx={sx.button}
					variant="contained"
					color="secondary"
					onClick={handleFormSubmit}
				>
					{loading ? <IconLoading loading={loading} /> : `${buttonText}`}
				</Button>
			</Stack>
		</Stack>
	)
}

export default MailchimpSubscribe

const sx = {
	root: {
		py: 2,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	form: {
		maxWidth: 400,
	},
	text: {
		pt: 2,
	},
	button: {
		minWidth: 120,
		borderRadius: (theme) =>
			`0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
	},
	input: {
		'& .MuiInputBase-input': {
			borderRadius: (theme) =>
				`${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
		},
	},
}
