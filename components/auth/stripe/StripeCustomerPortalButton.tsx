'use client'

import React from 'react'
import { useStripeCustomerPortal } from '../../../hooks'
import { Button } from '@nextui-org/react'

const StripeCustomerPortalButton: React.FC = () => {
	const { loading, stripeCustomerPortal } = useStripeCustomerPortal()

	const handleClick = async () => {
		let url = window.location.href
		let resp = await stripeCustomerPortal(url)
		if (resp?.data?.url) {
			window.open(resp?.data?.url, '_blank')
		}
	}

	return (
		<Button
			variant="solid"
			color="primary"
			onPress={handleClick}
			isLoading={loading}
		>
			{loading ? 'Connecting...' : 'Manage Payments with Stripe'}
		</Button>
	)
}

export default StripeCustomerPortalButton
