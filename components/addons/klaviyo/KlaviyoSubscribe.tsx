import React, { useState } from 'react'
import { Stack, Button } from '@mui/material'
import { TextInput, ButtonLoader } from '../..'
import { useAlerts, useKlaviyo } from '../../../hooks'

export type KlaviyoSubscribeProps = {
	listId: string
	apiKey: string
	buttonText?: string	
}

const KlaviyoSubscribe: React.FC<KlaviyoSubscribeProps> = (props) => {
	const {
		listId,
		apiKey,
		buttonText = 'Subscribe',
	} = props || {}

	const { showAlertError, showAlertSuccess } = useAlerts()

	const { loading, handleSubmit } = useKlaviyo({
		apiKey,
	})

	const [email, setEmail] = useState('')

	const handleFormSubmit = async () => {
		if (!email || !email?.includes('@')) {
			return showAlertError('Please enter a valid email')
		}
		if (!listId) {
			return showAlertError('Please enter a klaviyo list ID')
		}
		if (!apiKey) {
			return showAlertError('Please enter your public klaviyo API key')
		}
		try {
			await handleSubmit({
				email,
				listId,
			})
			showAlertSuccess('You have been subscribed to our newsletter!')
		} catch (e) {
			console.log('Error', e)
		}
	}

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(ev.target.value)
	}

	return (
		<Stack direction="column" spacing={2} sx={sx.root}>
			<Stack direction="row" spacing={0} sx={sx.form}>
				<TextInput
					direction="row"
					placeholder={'Enter email...'}
					name="email"
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
					{loading ? <ButtonLoader loading={loading} /> : `${buttonText}`}
				</Button>
			</Stack>
		</Stack>
	)
}

export default KlaviyoSubscribe

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
