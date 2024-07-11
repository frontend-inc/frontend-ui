import React, { useContext } from 'react'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'
import { Box, Stack, Button } from '@mui/material'
import { Icon } from '../..'

type StripePaymentLinkProps = {
	resource: any
	buttonText?: string
	justifyContent?: 'center' | 'flex-start' | 'flex-end'
}

const StripePaymentLink: React.FC<StripePaymentLinkProps> = (props) => {
	const {
		resource,
		justifyContent = 'flex-start',
		buttonText = 'Checkout',
	} = props || {}
	const { stripe_payment_link } = resource || {}

	const { currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

	const handleClick = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		let url = stripe_payment_link
		url += `?client_reference_id=${currentUser?.id}&email=${currentUser?.email}`
		window.open(url, '_blank')
	}

	if (!resource?.stripe_payment_link) return null
	return (
		<Stack
			sx={sx.root}
			direction="row"
			justifyContent={justifyContent}
			spacing={1}
		>
			<Button
				sx={sx.button}
				size="large"
				variant="contained"
				color="primary"
				onClick={handleClick}
				disabled={!stripe_payment_link}
				startIcon={
					<Icon name="CreditCard" size={20} color="primary.contrastText" />
				}
			>
				{buttonText}
			</Button>
		</Stack>
	)
}

export default StripePaymentLink

const sx = {
	root: {
		width: '100%',
		alignItems: 'center',
	},
	button: {
		textTransform: 'none',
		width: {
			sm: 240,
			xs: '100%',
		},
	},
	caption: {
		width: '100%',
	},
}
