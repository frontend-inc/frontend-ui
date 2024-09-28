import React from 'react'
import { useStripeConnect } from '../../../../hooks'
import { SvgIcon, Button } from '@mui/material'

type StripeLogoProps = {
	width?: number
}

const StripeConnectButton: React.FC = () => {
	const { loading, stripeConnect } = useStripeConnect()

	const handleClick = async () => {
		let url = window.location.href
		let resp = await stripeConnect(url)
		if (resp?.data?.url) {
			window.open(resp?.data?.url, '_blank')
		}
	}

	return (
		<Button
			variant="contained"
			color="primary"
			sx={sx.stripeButton}
			onClick={handleClick}
		>
			{loading ? 'Connecting...' : 'Connect with Stripe'}
		</Button>
	)
}

export default StripeConnectButton

const sx = {
	stripeButton: {
		bgcolor: '#6772E5',
		'&:hover': {
			bgcolor: '#6772E5',
		},
	},
}
